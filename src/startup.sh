#!/bin/bash
npm init -y
npm i -D webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/plugin-proposal-private-methods chroma-js style-loader css-loader
npx webpack
npx webpack serve
