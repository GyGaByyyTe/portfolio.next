# Deployment Guide

This guide explains how to deploy the portfolio website to the `andrei.does.cool` domain.

## Prerequisites

Before deploying, ensure you have the following:

1. **Bash environment**: 
   - On Linux/macOS: Terminal with bash
   - On Windows: Git Bash, WSL (Windows Subsystem for Linux), or another bash-compatible environment

2. **SSH key setup**:
   - Generate an SSH key if you don't have one: `ssh-keygen -t rsa -b 4096`
   - Add your SSH key to the server: `ssh-copy-id your_username@andrei.does.cool`

3. **Required tools**:
   - Node.js and npm (for building the application)
   - rsync (for file transfer)
   - SSH client

## Deployment Script

The repository includes a deployment script (`deploy.sh`) that automates the build and deployment process.

### What the script does:

1. Builds the Next.js application with static export
2. Tests the SSH connection to the server
3. Creates the target directory if it doesn't exist
4. Uploads the built files to the server using scp (rsync)
5. Provides feedback throughout the process

### Usage

```bash
# Deploy with default user (root)
./deploy.sh

# Deploy with a specific user
./deploy.sh your_username
```

### On Windows

For Windows users, we've included a batch file for easier deployment:

```batch
# Simply double-click deploy.bat or run it from Command Prompt
deploy.bat

# To specify a username
deploy.bat your_username
```

The batch file will automatically detect if you have Git Bash or WSL installed and use the appropriate one.

Alternatively, you can run the bash script directly using:

```bash
# Using Git Bash
bash deploy.sh

# Using WSL
wsl bash deploy.sh
```

## Manual Deployment

If you prefer to deploy manually, follow these steps:

1. Build the application:
   ```bash
   npm install
   npm run build
   ```

2. Copy the contents of the `out` directory to the server:
   ```bash
   rsync -avz --delete ./out/ your_username@andrei.does.cool:/var/www/andrei.does.cool/html/
    ```
    or using scp:
   ```bash
   scp -r ./out/ your_username@andrei.does.cool:/var/www/andrei.does.cool/html/
   ```

## Troubleshooting

- **SSH Connection Issues**: Make sure your SSH key is properly set up on the server
- **Build Failures**: Check for errors in your code and fix them before deploying
- **Permission Denied**: Ensure your user has write permissions to the target directory

## Server Configuration

The server should have:

1. A web server (like Nginx or Apache) configured to serve static files
2. The domain `andrei.does.cool` pointing to the server
3. Proper directory permissions for the web server user

For Nginx configuration, you might have something like:

```nginx
server {
    listen 80;
    server_name andrei.does.cool www.andrei.does.cool;

    root /var/www/andrei.does.cool/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```
