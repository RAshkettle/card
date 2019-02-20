#!/bin/bash

echo 'clear git attachment to this repo'
rm -rf .git

echo 're-init git'
git init

echo 'set things up'
npm install

git add .
git commit -m 'initial add'

echo 'npm start to run on port 8000'

