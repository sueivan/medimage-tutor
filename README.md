# MedImage Tutor V0.4｜MRI 序列识别训练

## 本版目标
同一受试者、同一 session 比较 T1w / T2w / FLAIR，采用“盲判 → 信号线索 → 判断 → 用途”的训练流程。

## 数据
OpenNeuro ds005752，sub-ON00400 / ses-01，CC0。

- T1w: MPRAGE
- T2w: CUBE
- FLAIR: 3dCUBE

三个 NIfTI 均已作为同源文件放在 `data/` 中，避免跨站影像加载。

## 上传
解压 ZIP 后，将 `index.html`、`style.css`、`app.js`、`README.md` 和整个 `data/` 文件夹上传到 GitHub 仓库根目录。
