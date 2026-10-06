const seqs={
 A:{file:"data/t2w.nii.gz",answer:"T2w",feature:"CSF 明显高信号；灰质相对白质偏亮。",use:"T2w：对含水量增加较敏感，是观察水肿、炎症及多种病变信号的重要基础序列。"},
 B:{file:"data/t1w.nii.gz",answer:"T1w",feature:"CSF 低信号；白质相对灰质偏亮。",use:"T1w：解剖结构显示清楚，常用于结构评估、体积/萎缩观察，并作为增强前后比较基础。"},
 C:{file:"data/flair.nii.gz",answer:"FLAIR",feature:"CSF 被抑制呈暗，但脑实质仍保留明显 T2 加权对比。",use:"FLAIR：抑制自由水后，可突出邻近脑室和脑沟的 T2 高信号病变。"}
};
let current="A", papayaContainer=null;
function buildViewer(k){
 current=k; document.getElementById("state").textContent="当前：序列 "+k+"（名称隐藏）";
 document.getElementById("feedback").textContent="先观察影像，再提交。";document.getElementById("use").textContent="答对后显示该序列的核心用途。";
 document.getElementById("guess").value="";
 document.querySelectorAll(".tabs button").forEach((b,i)=>b.classList.toggle("active",["A","B","C"][i]===k));
 const host=document.getElementById("viewer");host.innerHTML='<div class="papaya" data-params="params"></div>';
 window.params=[];params["images"]=[seqs[k].file];params["worldSpace"]=true;params["showOrientation"]=true;params["orthogonal"]=true;params["allowScroll"]=true;params["showControlBar"]=true;
 params["loadingComplete"]=()=>document.getElementById("load").textContent="✓ 序列 "+k+" 已载入。请先盲判，再提交。";
 papaya.Container.startPapaya();
}
function pick(k){buildViewer(k)}
function submitGuess(){
 const g=document.getElementById("guess").value,s=seqs[current],f=document.getElementById("feedback");
 if(!g){f.textContent="请先选择 T1w、T2w 或 FLAIR。";return}
 if(g===s.answer){f.innerHTML="✓ 正确：<b>"+s.answer+"</b>。"+s.feature;document.getElementById("use").textContent=s.use}
 else{f.innerHTML="✗ 暂不揭晓答案。再看两个线索：<b>脑脊液亮/暗</b>，以及<b>灰质与白质谁更亮</b>。"}
}
function miniQuiz(){const x=document.querySelector('input[name="q"]:checked'),r=document.getElementById("qresult");if(!x){r.textContent=" 请先选择。";return}r.textContent=x.value==="T2w"?" ✓ 正确。":" ✗ 再看“CSF 很亮”这一关键线索。"}
window.addEventListener("load",()=>buildViewer("A"));