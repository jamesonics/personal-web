#!/bin/bash
# ============================================
# Personal Web - 开发服务器启动脚本
# ============================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "Starting development server..."

# 检查 package.json 是否存在
if [ -f "package.json" ]; then
    # 检查是否有 dev 脚本
    if grep -q '"dev"' package.json; then
        npm run dev
    # 检查是否有 start 脚本
    elif grep -q '"start"' package.json; then
        npm start
    else
        echo "No dev or start script found in package.json"
        echo "Please configure your development server."
        exit 1
    fi
else
    echo "No package.json found."
    echo "If this is a static site, you can use:"
    echo "  npx serve ."
    echo "  or"
    echo "  python -m http.server 3000"
    exit 1
fi
