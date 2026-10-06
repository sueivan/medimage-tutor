function tip(id){
 const tips={
 t1:"轴位连续滚动时，先找成对的侧脑室。T1w 中脑脊液通常较暗；不要只凭一个切面判断结构。",
 t2:"在侧脑室附近建立深部灰质的空间关系。先辨认丘脑的大致位置，再逐步学习基底节各组成部分。",
 t3:"正中矢状位最适合建立胼胝体、脑干及中线结构的整体关系。先看轮廓，再看局部。",
 t4:"后颅窝重点看脑干、小脑和第四脑室区域，并比较左右是否基本对称。"
 };
 document.getElementById("tipbox").textContent=tips[id]||"";
}
function grade(){
 const ans={q1:"b",q2:"b",q3:"a"}; let score=0,done=0;
 Object.keys(ans).forEach(q=>{const x=document.querySelector('input[name="'+q+'"]:checked');if(x){done++;if(x.value===ans[q])score++;}});
 const r=document.getElementById("result");
 if(done<3){r.textContent="请先完成 3 题。";return;}
 r.innerHTML="得分："+score+"/3。"+(score===3?" 已掌握本节核心阅读原则。":" 建议重新滚片并复习：T1w 脑脊液低信号；先确认序列和方向；占位效应要看中线、脑室和脑沟脑池。");
}