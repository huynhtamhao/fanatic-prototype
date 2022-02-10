@echo off
title Translate Angular i18n
echo "Start copy main translate file"

echo "================ App Root ====================================="
xcopy /s "./ja_JP/translations.json" "../../ja.json" /Y
xcopy /s "./en_US/translations.json" "../../en.json" /Y

echo "End copy main translate file"
pause
