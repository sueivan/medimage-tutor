document.getElementById("quiz").addEventListener("submit",function(e){
 e.preventDefault();
 const get=n=>document.querySelector(`input[name="${n}"]:checked`);
 const q1=get("q1"),q2=get("q2"),q3=get("q3");
 if(!q1||!q2||!q3){alert("请先完成第 3–5 关的选择题，再查看专家解析。");return;}
 let score=0, rows=[];
 const tests=[
  ["发现异常",q1.value,"发现"],
  ["病灶定位",q2.value,"桥小脑角/内听道区域"],
  ["阅片顺序",q3.value,"描述"]
 ];
 tests.forEach(([name,val,ans])=>{
   const ok=val===ans; if(ok)score++;
   rows.push(`<p class="${ok?"good":"bad"}">${ok?"✓":"✗"} ${name}：${ok?"正确":"需要复习"}</p>`);
 });
 const desc=document.getElementById("desc").value.trim();
 const result=document.getElementById("result");
 document.getElementById("score").innerHTML=`<h3>本次基础判读：${score}/3</h3>${rows.join("")}${desc?`<p><strong>你的影像描述：</strong>${escapeHtml(desc)}</p>`:"<p class='bad'>你还没有写自己的影像描述。下一次建议补写。</p>"}`;
 result.classList.add("show");
 result.scrollIntoView({behavior:"smooth"});
});
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}