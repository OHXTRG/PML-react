#!/bin/bash
set -e

echo "🚀 Starting safe production deployment..."

# Remember current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "🌿 You are currently on branch: $CURRENT_BRANCH"

# Stash any uncommitted changes to keep them safe
if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "💾 Stashing uncommitted changes..."
  git stash push -m "auto-stash-before-deploy"
fi

# Switch temporarily to main
echo "🔀 Switching to main branch for deployment..."
git fetch origin main
git checkout main
git reset --hard origin/main

# Deploy backend and frontend
echo "🧰 Installing backend dependencies..."
cd node_backend
npm ci
cd ..

echo "🧰 Installing frontend dependencies..."
cd react-pml-frontend
npm ci
npm run build
cd ..

echo "📁 Copying build to backend..."
rm -rf node_backend/client/build
cp -r react-pml-frontend/build node_backend/client/

echo "🚀 Starting server in production mode..."
cd node_backend
npx cross-env NODE_ENV=production node server.js

# Switch back to your original branch
echo "🔁 Switching back to your branch: $CURRENT_BRANCH"
git checkout "$CURRENT_BRANCH"

# Reapply any stashed changes
if git stash list | grep -q "auto-stash-before-deploy"; then
  echo "💫 Restoring stashed changes..."
  git stash pop
fi

echo "✅ Deployment completed safely!"
