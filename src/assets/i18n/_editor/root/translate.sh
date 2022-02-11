#!/bin/sh
echo "Start copy main translate file"

echo "================ App Root ====================================="
yes | cp -rf ./ja_JP/translations.json ../../ja.json
yes | cp -rf ./en_US/translations.json ../../en.json

echo "End copy main translate file"
