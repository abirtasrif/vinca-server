#!/bin/bash

# Update project dependencies
echo "Updating project dependencies..."
npm update --save

# Check for vulnerabilities
echo "Checking for vulnerabilities..."
npm audit fix

echo "Dependency update and vulnerability check complete."