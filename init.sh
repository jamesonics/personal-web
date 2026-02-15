#!/bin/bash
# ============================================
# Personal Web - 项目初始化脚本
# ============================================
# 此脚本用于设置和启动开发环境
# 每个新的编码会话开始时应运行此脚本
# ============================================

set -e  # 遇到错误时退出

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 日志函数
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 获取脚本所在目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "============================================"
echo "  Personal Web - 初始化脚本"
echo "  $(date '+%Y-%m-%d %H:%M:%S')"
echo "============================================"
echo ""

# 检查Node.js
log_info "检查 Node.js..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    log_success "Node.js 版本: $NODE_VERSION"
else
    log_error "未找到 Node.js，请先安装 Node.js"
    exit 1
fi

# 检查npm
log_info "检查 npm..."
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm -v)
    log_success "npm 版本: $NPM_VERSION"
else
    log_error "未找到 npm，请先安装 npm"
    exit 1
fi

# 检查Git
log_info "检查 Git..."
if command -v git &> /dev/null; then
    GIT_VERSION=$(git --version)
    log_success "$GIT_VERSION"
else
    log_warning "未找到 Git，建议安装 Git 进行版本控制"
fi

# 检查项目文件
log_info "检查项目文件..."
REQUIRED_FILES=("feature_list.json" "claude-progress.txt" "agent_config.json")
for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        log_success "找到文件: $file"
    else
        log_warning "缺少文件: $file"
    fi
done

# 检查package.json
if [ -f "package.json" ]; then
    log_info "安装依赖..."
    npm install
    log_success "依赖安装完成"
else
    log_warning "未找到 package.json"
    log_info "如需创建Node.js项目，请运行: npm init -y"
fi

# 显示当前状态
echo ""
log_info "=========================================="
log_info "项目状态"
log_info "=========================================="

# 显示Git状态
if [ -d ".git" ]; then
    log_info "Git 状态:"
    git status -s 2>/dev/null || log_warning "无法获取Git状态"
    echo ""
    log_info "最近提交:"
    git log --oneline -5 2>/dev/null || log_warning "无提交历史"
fi

# 显示功能状态
echo ""
if [ -f "feature_list.json" ]; then
    log_info "功能完成状态:"
    if command -v jq &> /dev/null; then
        TOTAL=$(jq '.features | length' feature_list.json)
        COMPLETED=$(jq '[.features[] | select(.passes == true)] | length' feature_list.json)
        PENDING=$(jq '[.features[] | select(.passes == false)] | length' feature_list.json)
        log_info "  总计: $TOTAL | 完成: $COMPLETED | 待完成: $PENDING"
    else
        log_info "  (安装 jq 以显示详细统计)"
    fi
fi

echo ""
log_success "=========================================="
log_success "初始化完成！"
log_success "=========================================="
echo ""
log_info "下一步操作:"
log_info "1. 查看 feature_list.json 了解待完成的功能"
log_info "2. 查看 claude-progress.txt 了解历史进度"
log_info "3. 选择一个功能开始实现"
echo ""

# 如果有开发服务器启动脚本
if [ -f "start-dev.sh" ]; then
    log_info "运行开发服务器..."
    ./start-dev.sh
elif [ -f "package.json" ] && grep -q '"dev"' package.json; then
    log_info "启动开发服务器..."
    npm run dev
else
    log_info "未配置开发服务器启动命令"
fi
