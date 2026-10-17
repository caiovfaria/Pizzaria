@echo off
title Pizzaria Fornalha
cd /d "%~dp0"

if not exist "node_modules" (
  echo Preparando o projeto pela primeira vez...
  call npm install
  if errorlevel 1 (
    echo.
    echo Nao foi possivel instalar as dependencias.
    pause
    exit /b 1
  )
)

echo Abrindo a Pizzaria Fornalha...
start "" powershell -NoProfile -WindowStyle Hidden -Command "Start-Sleep -Seconds 3; Start-Process 'http://127.0.0.1:4177/Pizzaria/'"
call npm run preview -- --host 127.0.0.1 --port 4177
