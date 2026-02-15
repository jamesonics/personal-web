# 长时间运行智能体有效框架研究总结

## 一、研究来源

### 原始文章
- **标题**: Effective harnesses for long-running agents
- **作者**: Justin Young (Anthropic)
- **发布日期**: 2025年11月26日
- **链接**: [Anthropic Engineering Blog](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)

### GitHub仓库
- **仓库**: [anthropics/claude-quickstarts](https://github.com/anthropics/claude-quickstarts)
- **关键项目**: `autonomous-coding/autonomous_agent_demo.py`
- **SDK**: Claude Agent SDK (Python/TypeScript)

---

## 二、核心问题

### 2.1 长时间运行智能体面临的挑战

AI智能体在处理复杂任务时，面临以下核心问题：

1. **上下文窗口限制**: 智能体必须在离散的会话中工作，每个新会话开始时没有任何之前的记忆
2. **一次性完成倾向**: 智能体倾向于尝试一次性完成整个项目，导致上下文耗尽
3. **过早宣布完成**: 智能体在部分功能完成后就认为项目已完成
4. **状态不一致**: 会话结束后留下半成品或未记录的进度

### 2.2 失败模式分析

| 问题 | 表现 |
|------|------|
| 一次性完成 | 尝试在一个上下文窗口内完成所有功能，中途上下文耗尽 |
| 过早完成 | 看到部分进度后就宣布整个项目完成 |
| 状态混乱 | 留下未完成的代码，下次会话需要猜测发生了什么 |
| 测试不足 | 标记功能完成但未进行端到端测试 |

---

## 三、解决方案框架

### 3.1 双智能体架构 (Two-Agent Pattern)

Anthropic提出了一个双智能体解决方案：

```
┌─────────────────────────────────────────────────────────────┐
│                    长时间运行智能体框架                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌───────────────────┐      ┌───────────────────┐         │
│   │   初始化智能体     │      │    编码智能体      │         │
│   │ (Initializer Agent)│─────▶│  (Coding Agent)   │         │
│   └───────────────────┘      └───────────────────┘         │
│           │                           │                      │
│           ▼                           ▼                      │
│   ┌───────────────────┐      ┌───────────────────┐         │
│   │ - 创建项目结构     │      │ - 增量式开发       │         │
│   │ - 生成功能列表     │      │ - 读取进度文件     │         │
│   │ - 编写init.sh     │      │ - 实现单个功能     │         │
│   │ - 初始git提交     │      │ - 编写测试验证     │         │
│   │ - 创建进度文件     │      │ - 更新git提交     │         │
│   └───────────────────┘      └───────────────────┘         │
│                                                              │
│   ┌─────────────────────────────────────────────┐          │
│   │              持久化状态文件                   │          │
│   │  - feature_list.json (功能清单)              │          │
│   │  - claude-progress.txt (进度日志)            │          │
│   │  - init.sh (启动脚本)                        │          │
│   │  - Git历史 (版本控制)                        │          │
│   └─────────────────────────────────────────────┘          │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 初始化智能体 (Initializer Agent)

**职责**: 在第一个会话中设置整个项目环境

**核心任务**:
1. 解析用户需求规范
2. 创建详细的功能需求列表（可达200+条）
3. 编写 `init.sh` 启动脚本
4. 创建 `claude-progress.txt` 进度文件
5. 初始化Git仓库并进行首次提交

### 3.3 编码智能体 (Coding Agent)

**职责**: 在后续每个会话中增量式地推进项目

**每个会话的标准流程**:
1. **定位环境** - 运行 `pwd` 确认工作目录
2. **了解进度** - 读取git日志和进度文件
3. **选择任务** - 从功能列表中选择下一个未完成的功能
4. **增量开发** - 只专注于一个功能的实现
5. **测试验证** - 使用浏览器自动化工具进行端到端测试
6. **更新状态** - 更新功能状态、提交git、更新进度文件

---

## 四、关键文件结构

### 4.1 feature_list.json (功能列表)

```json
{
  "features": [
    {
      "id": "F001",
      "category": "functional",
      "description": "用户可以创建新对话并发送消息",
      "steps": [
        "导航到主界面",
        "点击'新对话'按钮",
        "输入消息内容",
        "按回车发送",
        "验证收到AI响应"
      ],
      "priority": "high",
      "passes": false
    }
  ]
}
```

**关键原则**:
- 使用JSON格式（比Markdown更不易被意外修改）
- 每个功能都有明确的测试步骤
- `passes`字段只能在完全测试通过后才能改为`true`
- 使用强烈的措辞防止智能体不当修改

### 4.2 claude-progress.txt (进度日志)

```
# Claude Agent Progress Log

## Session 1 - 2025-11-26 10:00
- 初始化项目结构
- 创建基础文件
- 完成功能 F001 的实现
- 状态: 用户认证功能已实现并测试通过

## Session 2 - 2025-11-26 14:00
- 修复了登录页面的样式问题
- 开始实现 F002 消息发送功能
- 状态: 消息发送功能开发中，需要继续完成验证逻辑
```

### 4.3 init.sh (启动脚本)

```bash
#!/bin/bash
# 项目初始化脚本

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 等待服务器启动
sleep 5

echo "开发服务器已启动在 http://localhost:3000"
```

---

## 五、提示工程最佳实践

### 5.1 初始化智能体提示模板

```
你是项目的初始化智能体。你的任务是：

1. 分析用户需求，创建详细的功能列表 (feature_list.json)
2. 编写项目初始化脚本 (init.sh)
3. 创建进度跟踪文件 (claude-progress.txt)
4. 初始化Git仓库并进行首次提交

重要规则：
- 功能列表必须足够详细，包含所有端到端测试场景
- 每个功能必须包含明确的验证步骤
- 所有功能初始状态为 passes: false
- init.sh 必须能够一键启动整个开发环境
```

### 5.2 编码智能体提示模板

```
你是项目的编码智能体。每个会话你必须：

1. 会话开始时：
   - 运行 pwd 确认工作目录
   - 读取 claude-progress.txt 了解历史进度
   - 读取 feature_list.json 选择下一个待完成的功能
   - 查看 git log 了解最近的代码变更
   - 运行 init.sh 启动开发服务器并验证基本功能

2. 开发过程中：
   - 每次只专注于一个功能
   - 必须进行端到端测试验证
   - 使用浏览器自动化工具测试用户交互

3. 会话结束时：
   - 更新 feature_list.json 中相应功能的 passes 状态
   - 编写清晰的 git commit 消息
   - 更新 claude-progress.txt 记录本次会话的进展

严禁：
- 删除或修改测试用例
- 在未完全测试通过前标记功能为完成
- 一次性尝试实现多个功能
- 在代码中留下未完成的状态
```

### 5.3 强措辞提示示例

```
It is unacceptable to remove or edit tests because this could lead to missing or buggy functionality.

You MUST NOT mark a feature as passing until you have personally verified it works end-to-end using browser automation tools.

DO NOT attempt to implement multiple features in a single session. Focus on ONE feature at a time.
```

---

## 六、测试策略

### 6.1 端到端测试要求

智能体必须使用浏览器自动化工具（如Puppeteer MCP）进行测试：

```javascript
// 测试示例
await page.goto('http://localhost:3000');
await page.click('#new-chat-button');
await page.type('#message-input', 'Hello, Claude!');
await page.press('#message-input', 'Enter');
await page.waitForSelector('.ai-response');
```

### 6.2 测试截图验证

智能体应截取测试过程中的截图作为证据：

```
[Assistant] Let me verify the feature works correctly.
[Tool Use] <puppeteer - screenshot>
[Assistant] I can see from the screenshot that the chat interface is working. The user's message appears in the chat and the AI has responded.
```

---

## 七、会话启动模式

每个编码智能体会话的标准启动序列：

```
[Assistant] I'll start by getting my bearings and understanding the current state of the project.
[Tool Use] <bash - pwd>
[Tool Use] <read - claude-progress.txt>
[Tool Use] <read - feature_list.json>
[Assistant] Let me check the git log to see recent work.
[Tool Use] <bash - git log --oneline -20>
[Assistant] Now let me check if there's an init.sh script to restart the servers.
<Starts the development server>
[Assistant] Excellent! Now let me navigate to the application and verify that some fundamental features are still working.
<Tests basic functionality>
[Assistant] Based on my verification testing, I can see that the fundamental functionality is working well. Now let me review the feature_list.json file to understand what needs to be implemented next.
<Starts work on a new feature>
```

---

## 八、失败模式与解决方案对照表

| 问题 | 初始化智能体行为 | 编码智能体行为 |
|------|-----------------|----------------|
| 过早宣布项目完成 | 创建详细的功能列表文件 | 每次只处理一个功能 |
| 留下bug或未记录的进度 | 初始化git仓库和进度文件 | 读取进度文件和git日志，运行基本测试 |
| 过早标记功能完成 | 设置功能列表文件 | 自验证所有功能，仅在仔细测试后标记为"通过" |
| 花时间弄清楚如何运行应用 | 编写init.sh脚本 | 读取init.sh并启动服务器 |

---

## 九、技术栈要求

### 9.1 核心依赖

```
# Python
anthropic>=0.40.0
claude-agent-sdk>=0.1.0

# Node.js (用于浏览器自动化)
puppeteer
@anthropic-ai/mcp-server-puppeteer
```

### 9.2 Claude Agent SDK 安装

```bash
# Python
pip install claude-agent-sdk

# 或使用 uv
uv pip install claude-agent-sdk
```

---

## 十、未来方向

1. **多智能体专业化**: 考虑使用专门的测试智能体、QA智能体、代码清理智能体
2. **领域泛化**: 将这些原则应用于科学研究、金融建模等领域
3. **自动化程度提升**: 更智能的上下文管理和任务调度

---

## 十一、参考资源

### 官方资源
- [Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- [Claude Quickstarts Repository](https://github.com/anthropics/claude-quickstarts)
- [Claude Agent SDK Documentation](https://platform.claude.com/docs/en/agent-sdk/overview)
- [Claude Agent SDK Python](https://github.com/anthropics/claude-agent-sdk-python)

### 社区资源
- [Reddit讨论 - r/ClaudeCode](https://www.reddit.com/r/ClaudeCode/comments/1p7sfo8/anthropic_just_showed_how_to_make_ai_agents_work/)
- [Hacker News讨论](https://news.ycombinator.com/item?id=46081704)
- [Agent Harnesses: From DIY Patterns to Product](https://paddo.dev/blog/agent-harnesses-from-diy-to-product/)

---

## 十二、总结

Anthropic的长时运行智能体框架的核心思想是：

1. **分离关注点**: 将初始化和增量开发分离为两个专门的智能体
2. **状态持久化**: 使用文件系统（feature_list.json、claude-progress.txt、git）持久化状态
3. **增量式工作**: 每次只专注于一个小任务
4. **自我验证**: 强制智能体进行端到端测试验证
5. **清洁状态**: 每个会话结束时保持代码在可提交状态

这个框架的成功在于它模仿了人类工程师的最佳实践：详细的需求规划、增量式开发、持续的测试验证、清晰的进度跟踪。通过将这些实践制度化到智能体的工作流程中，可以显著提高长时间运行任务的可靠性和质量。
