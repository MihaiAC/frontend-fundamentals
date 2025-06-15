#!/bin/bash

echo "--- MODULE FEDERATION REACT/VUE DEMO ---"
set -e 

echo "STEP 1: Installing all dependencies..."

# List of all project directories that have a package.json
PROJECTS=("host-app" "react-remote-button" "vue-remote-counter")

# First, install dependencies in the root folder
echo ""
echo "--- Installing root dependencies ---"
npm install

# Then, loop through each microfrontend and install its dependencies
for project in "${PROJECTS[@]}"; do
  echo ""
  echo "--- Installing dependencies in $project ---"
  # Run install in a subshell to avoid changing the main script's directory
  (cd "$project" && npm install)
done

echo ""
echo "All dependencies installed successfully."
echo ""

echo "STEP 2: Starting all microfrontends..."
echo "Host App           -> http://localhost:9000"
echo "React Button Remote  -> http://localhost:9001"
echo "Vue Counter Remote   -> http://localhost:9002"
echo ""
echo "Please open http://localhost:9000 in your browser."
echo "Press Ctrl+C to stop all servers."
echo ""

npm start