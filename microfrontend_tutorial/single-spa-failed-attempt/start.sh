#!/bin/bash
set -e

echo "Starting root-config on port 9000..."
cd root-config
npx serve . -p 9000 &
ROOT_PID=$!
cd ..

echo "Starting react-app webpack watcher..."
cd react-app
npx webpack --mode development --watch &
WEBPACK_PID=$!

echo "Starting react-app static server on port 8500..."
npx serve dist -p 8500 &
REACT_PID=$!
cd ..

echo "Starting vue-app on port 8600..."
cd vue-app
npm run build
npx serve dist -p 8600 &
VUE_PID=$!
cd ..

echo "All apps started."
echo "root-config PID: $ROOT_PID"
echo "webpack PID: $WEBPACK_PID"
echo "react-app serve PID: $REACT_PID"
echo "vue-app PID: $VUE_PID"

trap "echo 'Stopping all apps...'; kill $ROOT_PID $WEBPACK_PID $REACT_PID $VUE_PID; exit 0" SIGINT

wait
