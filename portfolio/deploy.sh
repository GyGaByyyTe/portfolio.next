#!/bin/bash

# Script to build and deploy the portfolio website to andrei.does.cool
# Usage: ./deploy.sh [ssh_user]

# Default SSH user if not provided
SSH_USER=${1:-"root"}
REMOTE_HOST="andrei.does.cool"
REMOTE_DIR="/var/www/andrei.does.cool/html/"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting deployment process...${NC}"

# Check if SSH key is available
#if [ ! -f ~/.ssh/id_rsa ]; then
#    echo -e "${RED}SSH key not found. Please make sure you have an SSH key set up.${NC}"
#    echo -e "${YELLOW}You can generate one with: ssh-keygen -t rsa -b 4096${NC}"
#    exit 1
#fi

# Step 1: Build the application
echo -e "${YELLOW}Building the application...${NC}"
npm install
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo -e "${RED}Build failed. Please fix the errors and try again.${NC}"
    exit 1
fi

# Check if the out directory exists
if [ ! -d "./out" ]; then
    echo -e "${RED}Build output directory not found. Build may have failed.${NC}"
    exit 1
fi

# Step 2: Deploy to remote server
echo -e "${YELLOW}Deploying to ${REMOTE_HOST}...${NC}"

# Test SSH connection
echo -e "${YELLOW}Testing SSH connection...${NC}"
ssh -o BatchMode=yes -o ConnectTimeout=5 ${SSH_USER}@${REMOTE_HOST} echo "SSH connection successful" > /dev/null 2>&1

if [ $? -ne 0 ]; then
    echo -e "${RED}SSH connection failed. Please check your SSH key and server configuration.${NC}"
    echo -e "${YELLOW}Make sure your SSH key is added to the server with: ssh-copy-id ${SSH_USER}@${REMOTE_HOST}${NC}"
    exit 1
fi

# Create remote directory if it doesn't exist
#echo -e "${YELLOW}Creating remote directory if it doesn't exist...${NC}"
#ssh ${SSH_USER}@${REMOTE_HOST} "mkdir -p ${REMOTE_DIR}"

# Deploy using rsync
echo -e "${YELLOW}Uploading files to server...${NC}"
#rsync -avz --delete ./out/ ${SSH_USER}@${REMOTE_HOST}:${REMOTE_DIR}
scp -r ./out/* ${SSH_USER}@${REMOTE_HOST}:${REMOTE_DIR}

# Check if rsync was successful
if [ $? -ne 0 ]; then
    echo -e "${RED}Deployment failed. Please check the error messages above.${NC}"
    exit 1
fi

echo -e "${GREEN}Deployment completed successfully!${NC}"
echo -e "${GREEN}Your portfolio is now live at https://${REMOTE_HOST}${NC}"

exit 0