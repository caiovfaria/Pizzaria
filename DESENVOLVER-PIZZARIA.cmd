@echo off
title Desenvolvimento - Pizzaria Fornalha
cd /d "%~dp0"

if not exist "node_modules" (
  echo Preparando o projeto pela primeira vez...
  call npm install --cache .npm-cache
  if errorlevel 1 (
    echo.
    echo Nao foi possivel instalar as dependencias.
    pause
    exit /b 1
  )
)

echo Iniciando o modo de desenvolvimento...
start "" powershell -NoProfile -WindowStyle Hidden -Command "Start-Sleep -Seconds 3; Start-Process 'http://127.0.0.1:5173/Pizzaria/'"
call npm run dev -- --host 127.0.0.1
