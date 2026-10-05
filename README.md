# MedImage Tutor V0.1

技术验证目标：不把医学影像存入 GitHub，只保存病例索引；点击病例后由 IDC 官方 Viewer / DICOMweb 云端读取。

## 当前病例
1. Vestibular-Schwannoma-SEG：真实 StudyInstanceUID，验证脑 MRI + 标注。
2. UPENN-GBM-00001：真实 Study/Series UID，验证脑 MRI 远程加载。
3. LDCT-and-Projection-data 头颅 CT：数据集已确认包含 non-contrast head CT，但具体 UID 尚未核验，因此刻意保持 disabled。

## GitHub Pages
把本目录内容上传到仓库根目录，Settings → Pages → Deploy from a branch → main / root。

## 原则
- 不在 GitHub 保存 DICOM。
- 不把未经核验的 UID 写成正式病例。
- V0.1 不接 AI、不登录、不保存学生数据。
- 仅用于教学技术验证，不用于临床诊断。
