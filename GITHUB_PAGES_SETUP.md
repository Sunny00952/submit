# GitHub Pages 部署指南

## 快速开始

### 1. 初始化 Git 仓库（如果还没有）
```bash
cd submit
git init
git add .
git commit -m "Initial commit: Add PDF viewer"
```

### 2. 添加远程仓库并推送
```bash
git remote add origin https://github.com/yourusername/submit.git
git branch -M main
git push -u origin main
```

### 3. 启用 GitHub Pages

访问你的仓库设置：
- 🔗 `https://github.com/yourusername/submit/settings/pages`

配置步骤：
1. 在 **Source** 下选择 **Deploy from a branch**（或 **GitHub Actions**）
2. 选择分支：**main** 
3. 选择目录：**/root**（如果web在根目录）或 **/docs**
4. **Save**

### 4. 访问你的 PDF 查看器

你的网站将在以下地址可用：
```
https://yourusername.github.io/submit/web/
```

## 更新 PDF 文件

1. 将新的 PDF 放入 `web/pdfs/submit.pdf`
2. 提交并推送更改：
```bash
git add web/pdfs/submit.pdf
git commit -m "Update PDF document"
git push
```
3. 网站将在几秒内自动更新

## 常见问题

### PDF 不显示
- ✅ 确保 `submit.pdf` 存在于 `web/pdfs/` 文件夹
- ✅ 确保 GitHub Pages 已启用
- ✅ 检查浏览器开发工具（F12 → Console）查看错误信息
- ✅ 清除浏览器缓存（Ctrl+Shift+Delete）

### 页面样式错乱
- 清除浏览器缓存
- 等待 GitHub Pages 重新部署（通常 1-2 分钟）

### 文件未更新
- 稍等几分钟让 GitHub Pages 重新构建
- 检查文件是否正确推送到 main 分支

## 自定义域名（可选）

1. 在 `submit` 根目录创建 `CNAME` 文件，内容为你的域名：
```
yourdomain.com
```

2. 提交并推送：
```bash
git add CNAME
git commit -m "Add custom domain"
git push
```

3. 在 GitHub Pages 设置中确认域名配置

## 使用 GitHub Actions 自动部署（推荐）

`.github/workflows/deploy.yml` 已配置。任何推送到 main 分支都会自动部署。

## 本地测试

部署前可以本地测试：
```bash
cd web
python -m http.server 8000
```
浏览器访问：`http://localhost:8000`

## 总结

| 步骤 | 命令 |
|------|------|
| 初始化 | `git init` |
| 添加远程 | `git remote add origin URL` |
| 首次提交 | `git push -u origin main` |
| 启用 Pages | 在 Settings 中配置 |
| 访问网站 | `https://yourusername.github.io/submit/web/` |

---

有问题？查看 [GitHub Pages 官方文档](https://pages.github.com/)
