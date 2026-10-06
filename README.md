# MedImage Tutor V0.3.3

真实正常脑 MRI 教学版。

## 核心变化
- 淘汰 V0.3.2 的教学 phantom。
- 内置真实、去标识的健康研究志愿者 3D T1w MPRAGE NIfTI。
- 影像与 GitHub Pages 同源加载，避免跨站 NIfTI CORS 问题。
- 教学流程：方向 → 脑室 → 深部结构 → 中线 → 后颅窝 → 系统性正常判断 → 自测。

## 数据
- OpenNeuro dataset: ds005752
- Subject/session: sub-ON00400 / ses-01
- Acquisition: MPRAGE T1w
- Local filename: `data/healthy-adult-t1w.nii.gz`
- Size: 11564518 bytes
- Matrix: 208 × 256 × 256
- Voxel size: 1 × 1 × 1 mm
- SHA-256: `0addf7cdb2298eee003375b3bf5d029f3af678cdf61aadf63e5f17bb2b6c9f79`
- Dataset license: CC0

## 上传到 GitHub
请解压 ZIP 后，把根目录文件以及整个 `data/` 文件夹上传到 `sueivan/medimage-tutor` 根目录并提交。
不要只上传 ZIP 文件本身。

V0.3.3 仍从 unpkg 加载 Papaya JS/CSS；MRI 文件本身已完全本地化/同源化。
