fetch('cases/cases.json').then(r=>r.json()).then(cases=>{
 const el=document.getElementById('cards');
 cases.forEach(c=>{
   const ready=c.status==='ready';
   const d=document.createElement('article'); d.className='card';
   d.innerHTML=`<span class="badge ${ready?'':'pending'}">${ready?'可测试':'待核验 UID'}</span>
   <h3>${c.title}</h3>
   <div class="meta">${c.collection}<br>${c.modality}<br>${c.source}</div>
   <p class="purpose">${c.purpose}</p>
   ${ready?`<a class="btn" href="${c.viewer}" target="_blank" rel="noopener">打开 IDC 阅片器</a>`:`<span class="btn disabled">暂不开放</span>`}`;
   el.appendChild(d);
 });
}).catch(e=>document.getElementById('cards').textContent='病例索引加载失败：'+e);
