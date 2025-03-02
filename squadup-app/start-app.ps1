# Start the Next.js app in the background
$job = Start-Job -ScriptBlock { npm run start -- -p 3001 }

# Wait a moment for the server to start
Start-Sleep -Seconds 3

# Open the browser
Start-Process "http://localhost:3001"

# Keep the script running and show the Next.js output
Receive-Job -Job $job -Wait 