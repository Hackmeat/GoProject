# Setting paths
$OriginalPath = $PSScriptRoot
$FrontendPath = $PSScriptRoot + "\frontend\"

Set-Location -Path $FrontendPath

# Start the process and capture the process object
$process = Start-Process -FilePath "npm" -ArgumentList "run dev" -PassThru

# Wait for the process to start
Start-Sleep -Seconds 5

# Output success or failure message
if (!$process.HasExited) {
    Write-Host "npm start executed successfully."
} else {
    $exitCode = $process.ExitCode
    Write-Host "npm start failed with exit code: $exitCode"
}

Set-Location -Path $OriginalPath