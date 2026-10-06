# MedImage Tutor V0.3.1｜内置正常脑 MRI 阅片版

## 核心改变
- 不再把 IDC/NIH Viewer 作为初学者唯一入口。
- Papaya Viewer 直接嵌入 MedImage Tutor。
- 默认加载 Mango/Papaya T1 标准示例脑 NIfTI。
- 右侧同步提供“滚片→找脑室→深部结构→脑干/小脑→系统判断”的教学任务。
- 保留空白屏处理和本地 NIfTI 备用载入路径。

## 重要说明
默认示例是标准/示例 T1 脑影像，用于验证内置 Viewer 和正常解剖教学流程；不表述为某位临床受试者“影像学正常”。

## 部署
覆盖 GitHub Pages 根目录的 index.html、style.css、app.js。
本版运行时需要网络访问 unpkg（Papaya JS/CSS）和 mangoviewer.com（示例 NIfTI）。
若中国大陆课堂访问不稳定，下一阶段应把 Papaya 静态资源和获准再分发的教学 NIfTI 一并托管到可稳定访问的对象存储/CDN。
