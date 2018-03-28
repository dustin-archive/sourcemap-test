# GNU Make 3.8.2 or above

PATH := $(PATH):node_modules/.bin
SHELL := /bin/bash

.ONESHELL:
.SILENT:

all:
	rm -rf dist
	mkdir dist
	rollup src/app.js -o dist/app.js -f iife -m -c

start: all
	cp index.html dist
	dev-server dist --watch 'src/**/*' 'make'
