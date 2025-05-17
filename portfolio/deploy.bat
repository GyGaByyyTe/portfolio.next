@echo off
echo Portfolio Deployment Script
echo ==========================
echo.

REM Check if Git Bash is installed
where bash >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo Found bash. Running deployment script...
    echo.
    bash deploy.sh %*
    goto :end
)

REM Check if WSL is installed
where wsl >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo Found WSL. Running deployment script...
    echo.
    wsl bash deploy.sh %*
    goto :end
)

echo ERROR: Could not find a suitable bash environment.
echo Please install Git Bash or Windows Subsystem for Linux (WSL).
echo.
echo For Git Bash: https://git-scm.com/downloads
echo For WSL: https://docs.microsoft.com/en-us/windows/wsl/install
echo.
echo Alternatively, you can manually run the deployment steps as described in DEPLOYMENT.md

:end
echo.
if %ERRORLEVEL% EQU 0 (
    echo Deployment process completed.
) else (
    echo Deployment process failed. Please check the error messages above.
)
pause