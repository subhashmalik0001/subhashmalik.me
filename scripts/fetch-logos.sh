#!/usr/bin/env bash
# Downloads official technology + organization logos into /public.
# Sources: Devicon (MIT) and Simple Icons (CC0). Re-run any time to refresh.
set -u
cd "$(dirname "$0")/.."
mkdir -p public/tech public/logos

DEV="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons"
SI="https://cdn.simpleicons.org"

fetch() { # url dest
  if curl -fsSL "$1" -o "$2"; then echo "ok   $2"; else echo "FAIL $2 ($1)"; rm -f "$2"; fi
}

# Devicon (full-color originals)
for pair in \
  java:java-original python:python-original c:c-original cplusplus:cplusplus-original \
  html5:html5-original css3:css3-original javascript:javascript-original \
  typescript:typescript-original react:react-original tailwindcss:tailwindcss-original \
  nodejs:nodejs-original firebase:firebase-original supabase:supabase-original \
  flutter:flutter-original dart:dart-original mongodb:mongodb-original \
  postgresql:postgresql-original tensorflow:tensorflow-original keras:keras-original \
  opencv:opencv-original git:git-original vscode:vscode-original docker:docker-original \
  postman:postman-original figma:figma-original; do
  name="${pair%%:*}"; file="${pair##*:}"
  fetch "$DEV/$name/$file.svg" "public/tech/$name.svg"
done

# Simple Icons (white variants for logos that are black by default)
fetch "$SI/nextdotjs/ffffff" public/tech/nextjs.svg
fetch "$SI/express/ffffff"   public/tech/express.svg
fetch "$SI/flask/ffffff"     public/tech/flask.svg
fetch "$SI/github/ffffff"    public/tech/github.svg

# Organization logos
fetch "$SI/paytm"       public/logos/paytm.svg
fetch "$SI/amazonalexa" public/logos/alexa.svg

