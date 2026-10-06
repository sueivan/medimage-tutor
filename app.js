const seq={A:{a:"T2w",f:"CSF 高信号；灰质相对白质偏亮。",u:"T2w：对含水量增加较敏感。"},B:{a:"T1w",f:"CSF 低信号；白质相对灰质偏亮。",u:"T1w：适合解剖结构与结构评估。"},C:{a:"FLAIR",f:"CSF 被抑制呈暗，同时保留 T2 加权对比。",u:"FLAIR：有助突出邻近 CSF 的 T2 高信号病变。"}};let cur="A";
function pick(k){cur=k;document.getElementById("state").textContent="当前：序列 "+k+"（名称隐藏）";document.querySelectorAll(".pane").forEach(x=>x.classList.remove("active"));document.getElementById("pane"+k).classList.add("active");document.querySelectorAll(".tabs button").forEach((b,i)=>b.classList.toggle("active",["A","B","C"][i]===k));document.getElementById("guess").value="";document.getElementById("feedback").textContent="先观察影像，再提交。";document.getElementById("use").textContent="答对后显示核心用途。"}
function judge(){let g=document.getElementById("guess").value,s=seq[cur],f=document.getElementById("feedback");if(!g){f.textContent="请先选择。";return}if(g===s.a){f.innerHTML="✓ 正确：<b>"+s.a+"</b>。"+s.f;document.getElementById("use").textContent=s.u}else f.innerHTML="✗ 再看两个线索：<b>CSF 亮/暗</b>和<b>灰白质关系</b>。";}
function fitPapayaMobile(){
  if(window.innerWidth>700) return;
  document.querySelectorAll(".pane.active .papayaContainer").forEach(function(el){
    el.style.maxWidth="100%";
    el.style.width="100%";
    el.style.overflow="hidden";
  });
  setTimeout(function(){
    window.dispatchEvent(new Event("resize"));
  },120);
}
const oldPick=pick;
pick=function(k){oldPick(k);setTimeout(fitPapayaMobile,180);}
window.addEventListener("resize",fitPapayaMobile);
window.addEventListener("orientationchange",function(){setTimeout(fitPapayaMobile,300);});
window.addEventListener("load",function(){setTimeout(fitPapayaMobile,500);});
