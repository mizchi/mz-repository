#!/usr/bin/env sh
coffee -c -o lib src/index.coffee
browserify -s MinimongoAdapter -t coffeeify --extension=".coffee" src/adapters/minimongo.coffee -o adapters/minimongo.js
