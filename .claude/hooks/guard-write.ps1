# Workspace write-guard (PreToolUse hook).
# Blocks Write/Edit/MultiEdit/NotebookEdit when the target file is OUTSIDE this
# project's root -- with three carve-outs: the shared root-level KNOWLEDGE.md and
# home_server_summary.md may be written from any project, and this project's own
# harness auto-memory dir (~/.claude/projects/<encoded>/memory) so cross-session
# memory keeps working. Everything else outside the project (sibling projects, other
# root files, OTHER projects' memory) stays read-only. Generic: compares against
# $CLAUDE_PROJECT_DIR, no per-sibling enumeration, so adding a new project needs no
# change. PowerShell 5.1 compatible.

$ErrorActionPreference = 'SilentlyContinue'

$raw = [Console]::In.ReadToEnd()
if (-not $raw) { exit 0 }
try { $payload = $raw | ConvertFrom-Json } catch { exit 0 }

$fp = $payload.tool_input.file_path
if (-not $fp) { exit 0 }

$projDirSource = 'CLAUDE_PROJECT_DIR(env)'
$projectDir = $env:CLAUDE_PROJECT_DIR
if (-not $projectDir) { $projectDir = $payload.cwd; $projDirSource = 'payload.cwd(fallback)' }
if (-not $projectDir) { exit 0 }

# Expand a leading ~ to the user profile
if ($fp.StartsWith('~')) { $fp = $env:USERPROFILE + $fp.Substring(1) }

# Resolve target to an absolute, normalized path (independent of process CWD)
try {
  if ([System.IO.Path]::IsPathRooted($fp)) {
    $target = [System.IO.Path]::GetFullPath($fp)
  } else {
    $target = [System.IO.Path]::GetFullPath((Join-Path $projectDir $fp))
  }
} catch { exit 0 }

$root = [System.IO.Path]::GetFullPath($projectDir).TrimEnd('\', '/') + '\'

# Inside the current project?
$inside = $target.StartsWith($root, [System.StringComparison]::OrdinalIgnoreCase)

# Carve-outs: shared root files that any project may update.
$workspaceRoot = [System.IO.Path]::GetFullPath((Split-Path -Parent $projectDir.TrimEnd('\', '/')))
$knowledgePath = [System.IO.Path]::GetFullPath((Join-Path $workspaceRoot 'KNOWLEDGE.md'))
$serverSummaryPath = [System.IO.Path]::GetFullPath((Join-Path $workspaceRoot 'home_server_summary.md'))
$isKnowledge = ($target -ieq $knowledgePath)
$isServerSummary = ($target -ieq $serverSummaryPath)

# Carve-out: THIS project's harness auto-memory dir. The harness encodes the launch
# dir by replacing ':' '\' '/' with '-' (e.g. C--Users-...-PrepshotNew) and keys memory
# by launch dir, so this stays project-siloed -- other projects' memory dirs are NOT matched.
# Literal .Replace chain (not a regex charclass) to avoid backslash-escaping ambiguity.
$encodedProj = $projectDir.TrimEnd('\', '/').Replace(':', '-').Replace('\', '-').Replace('/', '-')
$memoryRoot = [System.IO.Path]::GetFullPath((Join-Path $env:USERPROFILE ".claude\projects\$encodedProj\memory")).TrimEnd('\', '/') + '\'
$isMemory = $target.StartsWith($memoryRoot, [System.StringComparison]::OrdinalIgnoreCase)

$allowed = $inside -or $isKnowledge -or $isServerSummary -or $isMemory

# Opt-in debug log: only writes when .claude/hooks/guard-debug.flag exists.
$hooksDir = Split-Path -Parent $MyInvocation.MyCommand.Path
if (Test-Path (Join-Path $hooksDir 'guard-debug.flag')) {
  $decision = if ($allowed) { if ($isKnowledge) { 'ALLOW(KNOWLEDGE)' } elseif ($isServerSummary) { 'ALLOW(SERVER_SUMMARY)' } elseif ($isMemory) { 'ALLOW(MEMORY)' } else { 'ALLOW' } } else { 'DENY' }
  $line = "{0}  {1}  projDir={2} [{3}]  target={4}  fp={5}" -f `
    (Get-Date -Format 'o'), $decision, $projectDir, $projDirSource, $target, $fp
  Add-Content -Path (Join-Path $hooksDir 'guard.log') -Value $line -Encoding UTF8
}

if (-not $allowed) {
  $reason = "Workspace guard: '$target' is outside the current project ($projectDir). " +
            "Only files inside this project (plus the shared root KNOWLEDGE.md and " +
            "home_server_summary.md) may be written; sibling projects and other root " +
            "files are read-only. Relaunch Claude from the target project to edit it."
  $obj = [ordered]@{
    hookSpecificOutput = [ordered]@{
      hookEventName            = 'PreToolUse'
      permissionDecision       = 'deny'
      permissionDecisionReason = $reason
    }
  }
  $obj | ConvertTo-Json -Compress -Depth 5
}

exit 0
