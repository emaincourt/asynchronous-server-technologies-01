#!/usr/bin/env bash

yarn build \
  && ./node_modules/.bin/babel tests -d tmp \
  && ./node_modules/.bin/replace-in-file "../lib" "../dist" tmp/* \
  && ./node_modules/.bin/mocha tmp/* && rm -rf tmp