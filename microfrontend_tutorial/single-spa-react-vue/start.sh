#!/bin/bash

# This script installs all dependencies and starts all microfrontends.

echo "--- SINGLE-SPA REACT/VUE DEMO ---"

# Step 1: Install all dependencies for all projects
echo "STEP 1: Installing all dependencies... (This might take a moment)"
npm run install-all

if [ $? -ne 0 ]; then
    echo "Error during npm install. Please check the output above."
    exit 1
fi

echo "All dependencies installed successfully."
echo ""

# Step 2: Start all services concurrently
echo "STEP 2: Starting all microfrontends..."
echo "Root-Config -> http://localhost:9000"
echo "React Button -> http://localhost:9001"
echo "Vue Counter  -> http://localhost:9002"
echo "Shared State -> http://localhost:9003"
echo ""
echo "Please open http://localhost:9000 in your browser."
echo ""

npm start