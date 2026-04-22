# 远程待办网站

一个简单的在线待办事项管理网站，部署后可从外网访问。

## 部署到 Render.com（免费）

1. **注册 Render 账号**: https://render.com 注册并登录

2. **创建 Web Service**:
   - 点击 "New +" → "Web Service"
   - 连接你的 GitHub 仓库（或直接上传 ZIP）
   - 设置以下配置：
     - **Name**: `your-todo-app`（自定义）
     - **Environment**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Plan**: Free

3. **等待部署完成**:
   - 几分钟后，你会获得一个 URL，如: `https://your-todo-app.onrender.com`
   - 这个 URL 就可以从外网访问了！

## 本地运行

```bash
cd todo-app
npm install
npm start
```

访问 http://localhost:3000

## 功能特点

- ✅ 添加/删除/编辑待办事项
- ✅ 标记完成/未完成
- ✅ 筛选（全部/待完成/已完成）
- ✅ 统计数据展示
- ✅ 数据存储在服务器端（重启后保留）
- ✅ 响应式设计，支持手机访问

## 注意事项

- 免费版 Render 服务在闲置时会休眠，首次访问可能需要等待几秒启动
- 免费版每月有750小时限制
- 数据存储在内存中，服务重启后会重置