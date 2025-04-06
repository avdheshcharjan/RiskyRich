#!/bin/bash

# Set environment variables to force using Google model provider
export GOOGLE_MODEL=gemini-1.5-pro-latest
export SMALL_GOOGLE_MODEL=gemini-1.5-flash-latest
export MEDIUM_GOOGLE_MODEL=gemini-1.5-flash-latest
export LARGE_GOOGLE_MODEL=gemini-1.5-pro-latest
export EMBEDDING_GOOGLE_MODEL=text-embedding-004

# Set model provider explicitly to Google
export MODEL_PROVIDER="google"
export DEFAULT_MODEL_PROVIDER="google"

# Make sure the Google API key is set
export GOOGLE_GENERATIVE_AI_API_KEY="AIzaSyBI8-W8twufEmUCQbg07c5eMJZpdPkZIww"

# Navigate to agent directory and start with our Google-specific character file
cd agent
npm start -- --character ../riskyrich_google.character.json 