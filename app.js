(() => {
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const content = $('#content');
  const tabs = $('#salesTabs');
  const toast = $('#toast');
  let page = 'Sales', tab = 'Takings', period = '14 days', channel = 'All';
  const orders = [
    ['HW-48346','The Copper Kettle','£712.80','Stockists','New'],
    ['HW-48345','Zara Becker','£68.00','Web shop','New'],
    ['HW-48344','Zara Haddad','£18.00','Web shop','New'],
    ['HW-48343','Daniel Park','£42.00','Marketplace','New'],
    ['HW-48326','Ingrid Doyle','£68.00','Web shop','Packing'],
    ['HW-48333','Owen Becker','£194.00','Web shop','Packing'],
    ['HW-48331','Rhys Koya','£72.00','Stockists','Packing'],
    ['HW-48318','Maya Chen','£126.00','Markets','On the way'],
    ['HW-48309','Amira Patel','£89.00','Web shop','Delivered'],
    ['HW-48298','Leo Martin','£54.00','Marketplace','Delivered']
  ];
  const salesBars = [55,74,82,69,42,60,28,45,54,62,58,39,31,48];
  const channels = [
    {name:'Web shop',value:'£17,986',share:'63% of sales',color:'#ff6138',width:63},
    {name:'Stockists',value:'£5,808',share:'20% of sales',color:'#e5a84e',width:20},
    {name:'Markets',value:'£2,070',share:'7% of sales',color:'#858b93',width:7},
    {name:'Marketplace',value:'£2,660',share:'9% of sales',color:'#78aee7',width:10}
  ];
  const money = n => '£' + Number(n).toLocaleString('en-GB',{minimumFractionDigits:2,maximumFractionDigits:2});
  function notify(message){toast.textContent=message;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200)}
  function chart(values=salesBars){
    return `<div class="chart-wrap"><span class="chart-tag">£2.8k</span><div class="bar-chart">${values.map((v,i)=>`<div class="bar-col"><span class="bar ${i%4===0?'gray':''}" style="--h:${v}%"></span><small>${['Wed 28','Thu 29','Fri 30','Sat 31','Sun 1','Mon 2','Tue 3','Wed 4','Thu 5','Fri 6','Sat 7','Sun 8','Mon 9','Tue 10'][i]}</small></div>`).join('')}</div></div>`;
  }
  function takings(){
    const amount=period==='14 days'?'£36,164':period==='30 days'?'£72,840':'£182,420';
    const vals=period==='14 days'?salesBars:period==='30 days'?salesBars.map((v,i)=>Math.min(96,v+((i*7)%20))):salesBars.map((v,i)=>Math.min(100,v+30));
    return `<div class="card">
      <div class="card-title">Takings against target <span class="muted"> · Every sale, every channel — ember means the day beat its target</span></div>
      <div class="metric-row"><div class="metric"><div class="tiny">Taken</div><div class="value">${amount}</div><div class="tiny">£5.0k <span class="delta">↑ 8.4% vs last period</span></div></div><div class="metric"><div class="tiny">Best target</div><div class="value" style="font-size:15px">8 of 14 days</div></div><div class="metric"><div class="tiny">Target</div><div class="value" style="font-size:15px">£2,800 <span class="tiny">a day</span></div></div><div class="metric"><div class="tiny">Best day</div><div class="value" style="font-size:15px">£3,821 <span class="tiny">Fri 30</span></div></div><div class="periods">${['14 days','30 days','13 weeks'].map(p=>`<button data-period="${p}" class="${period===p?'active':''}">${p}</button>`).join('')}</div></div>
      <div class="filters">${['All','Web shop','Stockists','Markets','Marketplace'].map(c=>`<button data-channel="${c}" class="${channel===c?'active':''}">${c==='All'?'All':c}</button>`).join('')}</div>${chart(vals)}
    </div>
    <div class="bottom-grid"><div class="card"><div class="card-title">When people buy</div><p class="tiny">Most orders arrive between 10am and 2pm</p><div class="mini-chart">${[35,58,75,45,68,88,62,44,72,55,36,49].map(h=>`<span style="--h:${h}%"></span>`).join('')}</div></div><div class="card"><div class="card-title">Day by day</div><p class="tiny">This week compared with last week</p><div class="hbar"><span>Web shop</span><div class="track"><span style="width:78%"></span></div><b>£8.1k</b></div><div class="hbar"><span>Stockists</span><div class="track"><span style="width:53%;background:#e5a84e"></span></div><b>£2.8k</b></div><div class="hbar"><span>Markets</span><div class="track"><span style="width:28%;background:#858b93"></span></div><b>£1.2k</b></div></div></div>`;
  }
  function channelPage(){
    return `<div class="card"><div class="card-title">Where November came from <span class="muted"> · £28,524 across four channels</span></div><div class="channels-bar">${channels.map(c=>`<span style="width:${c.width}%"></span>`).join('')}</div><div class="channel-grid">${channels.map(c=>`<div class="channel-card ${channel===c.name?'selected':''}" data-pick="${c.name}"><div class="tiny"><i class="dot" style="background:${c.color}"></i>${c.name}</div><div class="value">${c.value}</div><div class="tiny">${c.share}</div></div>`).join('')}</div></div>
    <div class="split-grid"><div class="card"><div class="card-title">${channel==='All'?'Web shop':channel} · 30 days</div><p class="tiny">Pick a channel above — the line shows daily takings</p><svg class="line-chart" viewBox="0 0 600 160" preserveAspectRatio="none"><path class="gridline" d="M0 35H600M0 80H600M0 125H600"/><path d="M0 105 C25 95 25 80 48 87 S85 110 104 82 S130 92 150 40 S180 130 205 92 S245 102 260 64 S295 110 320 82 S355 55 372 82 S405 105 420 60 S455 93 480 70 S515 84 540 45 S570 100 600 30"/></svg></div><div class="card"><div class="card-title">This month against last</div>${channels.map(c=>`<div class="hbar"><span>${c.name}</span><div class="track"><span style="width:${c.width*1.15}%;background:${c.color}"></span></div><b>${c.value}</b></div>`).join('')}<div class="tiny">Orders <b>224</b> vs 220 · Avg basket <b>£127.34</b></div></div></div>`;
  }
  function bestSellers(){
    const products=[['✺','Hearthwell Signature Candle','£42.00','142 sold','£5,964'],['◉','Amber Glass Diffuser','£36.00','96 sold','£3,456'],['✿','Cedar & Sage Refill','£18.00','83 sold','£1,494'],['▧','Copper Kettle Set','£68.00','51 sold','£3,468'],['✧','Evening Ritual Bundle','£54.00','44 sold','£2,376'],['◌','Linen Room Spray','£24.00','39 sold','£936']];
    return `<div class="card"><div class="card-title">Best sellers <span class="muted"> · November to date</span></div><div class="data-table table-wrap"><table class="data-table"><thead><tr><th>PRODUCT</th><th>PRICE</th><th>UNITS SOLD</th><th>REVENUE</th><th>STOCK</th></tr></thead><tbody>${products.map((p,i)=>`<tr><td><b>${p[0]} &nbsp; ${p[1]}</b></td><td>${p[2]}</td><td>${p[3]}</td><td>${p[4]}</td><td class="${i===3?'status pending':'status'}">${i===3?'Low stock':'In stock'}</td></tr>`).join('')}</tbody></table></div></div>`;
  }
  function ordersPage(){
    const lanes=['New','Packing','On the way','Delivered'];
    return `<div class="tabs"><button class="tab active">Dispatch board <span class="muted">38</span></button><button class="tab">All orders</button></div><div class="kanban">${lanes.map((lane,i)=>`<div class="lane"><div class="lane-head"><b><i class="dot" style="background:${['#ff6138','#e5a84e','#78aee7','#75c59b'][i]}"></i>${lane}</b><span class="muted">${[16,22,49,137][i]}</span></div>${orders.filter(o=>o[4]===lane).map(o=>`<div class="order-card"><span class="pill">${o[0]}</span><b>${o[1]}</b><small>${o[3]} · 1 item</small><strong>${o[2]}</strong><small>Today · 10:32</small></div>`).join('')}</div>`).join('')}</div>`;
  }
  function overview(){
    return `<div class="channel-grid">${[['Takings','£28,524','↑ 8.4%'],['Orders','224','↑ 1.8%'],['Avg. basket','£127.34','↑ 4.2%'],['Returns','1.3%','↓ 0.2%']].map(x=>`<div class="channel-card"><div class="tiny">${x[0]}</div><div class="value">${x[1]}</div><div class="tiny" style="color:var(--green)">${x[2]}</div></div>`).join('')}</div><div class="bottom-grid"><div class="card"><div class="card-title">Takings against target</div><div class="metric-row"><div class="metric"><div class="value">£42,025</div><div class="tiny">Taken this month</div></div></div>${chart()}</div><div class="card"><div class="card-title">Wallet</div><div class="value" style="font-size:25px;margin:15px 0">£14,293.30</div><div class="tiny">Ready to pay out</div><div class="track" style="margin-top:20px"><span style="width:70%"></span></div><button class="primary" style="margin-top:20px" onclick="window.dispatchEvent(new Event('walletAction'))">Pay out</button></div></div>`;
  }
  function genericPage(){
    const rows=page==='Customers'?[['Noor Castellanos','noor@example.com','18','£2,184'],['Zara Becker','zara@example.com','12','£1,240'],['Owen Becker','owen@example.com','8','£892'],['Ingrid Doyle','ingrid@example.com','7','£760']]:[['Hearthwell Signature Candle','HW-P01','142','£42.00'],['Amber Glass Diffuser','HW-P02','96','£36.00'],['Cedar & Sage Refill','HW-P03','83','£18.00']];
    if(page==='Products')return `<div class="product-grid">${rows.map(r=>`<div class="product-card"><div class="product-thumb">✺</div><b>${r[0]}</b><div class="tiny">${r[1]}</div><div class="value" style="font-size:16px;margin-top:8px">${r[3]}</div><div class="tiny">${r[2]} sold this month</div></div>`).join('')}</div>`;
    return `<div class="card"><div class="card-title">${page} <span class="muted"> · Hearthwell workspace</span></div><div class="table-wrap"><table class="data-table"><thead><tr>${(page==='Customers'?['CUSTOMER','EMAIL','ORDERS','LIFETIME VALUE']:['PRODUCT','SKU','UNITS SOLD','PRICE']).map(x=>`<th>${x}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(v=>`<td>${v}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`;
  }
  function render(){
    $('#pageTitle').textContent=page;
    $('#pageSub').textContent=({Sales:'What Hearthwell took, where it came from, and what sold.',Orders:'38 orders to pack and ship · 227 in the last ten days.',Overview:'Good morning, Noor. Here is how Hearthwell is doing today.',Products:'Your catalogue, stock levels and product performance.',Customers:'People who shop with Hearthwell.'})[page]||`Manage your ${page.toLowerCase()} workspace.`;
    tabs.style.display=page==='Sales'?'flex':'none';
    if(page==='Sales')content.innerHTML=tab==='Takings'?takings():tab==='Channels'?channelPage():bestSellers();
    else if(page==='Orders')content.innerHTML=ordersPage();
    else if(page==='Overview')content.innerHTML=overview();
    else content.innerHTML=genericPage();
    $$('.nav-item[data-page]').forEach(b=>b.classList.toggle('active',b.dataset.page===page));
    $$('.tab[data-tab]').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));
    $$('[data-period]').forEach(b=>b.classList.toggle('active',b.dataset.period===period));
    $$('[data-channel]').forEach(b=>b.classList.toggle('active',b.dataset.channel===channel));
    $$('[data-pick]').forEach(b=>b.addEventListener('click',()=>{channel=b.dataset.pick;render()}));
  }
  $$('.nav-item[data-page]').forEach(b=>b.addEventListener('click',()=>{page=b.dataset.page;render()}));
  tabs.addEventListener('click',e=>{const b=e.target.closest('[data-tab]');if(b){tab=b.dataset.tab;render()}});
  content.addEventListener('click',e=>{
    const p=e.target.closest('[data-period]');if(p){period=p.dataset.period;render()}
    const c=e.target.closest('[data-channel]');if(c){channel=c.dataset.channel;render()}
  });
  $('#themeBtn').addEventListener('click',()=>document.body.classList.toggle('light'));
  $('#newOrder').addEventListener('click',()=>$('#modal').classList.add('show'));
  $('#closeModal').addEventListener('click',()=>$('#modal').classList.remove('show'));
  $('#modal').addEventListener('click',e=>{if(e.target.id==='modal')$('#modal').classList.remove('show')});
  $('#saveOrder').addEventListener('click',()=>{
    const name=$('#customerName').value.trim(), value=Number($('#orderValue').value), ch=$('#orderChannel').value;
    if(!name||!value||value<=0){notify('Enter a customer and a valid order value');return}
    orders.unshift([`HW-${Math.floor(49000+Math.random()*900)}`,name,money(value),ch,'New']);
    $('#modal').classList.remove('show');$('#customerName').value='';$('#orderValue').value='';
    page='Orders';render();notify('Order created in this demo');
  });
  $('#exportBtn').addEventListener('click',()=>{
    const csv=[['Order','Customer','Value','Channel','Status'],...orders].map(row=>row.map(v=>`"${String(v).replaceAll('"','""')}"`).join(',')).join('\\n');
    const blob=new Blob([csv],{type:'text/csv'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='ignara-orders.csv';a.click();URL.revokeObjectURL(a.href);notify('CSV export ready');
  });
  $('#search').addEventListener('input',e=>{
    const q=e.target.value.toLowerCase();
    if(!q){render();return}
    page='Orders';render();
    const matching=orders.filter(o=>o.join(' ').toLowerCase().includes(q));
    content.innerHTML=`<div class="card"><div class="card-title">Search results <span class="muted"> · ${matching.length} orders</span></div>${matching.length?matching.map(o=>`<div class="order-card"><span class="pill">${o[0]}</span><b>${o[1]}</b><small>${o[3]} · ${o[4]}</small><strong>${o[2]}</strong></div>`).join(''):'<div class="empty">No matching orders found</div>'}</div>`;
  });
  $('#search').addEventListener('keydown',e=>{if(e.key==='Escape'){e.target.value='';render()}});
  document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();$('#search').focus()}if(e.key.toLowerCase()==='n'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName))$('#modal').classList.add('show')});
  window.addEventListener('walletAction',()=>notify('Payout action is a frontend demo'));
  render();
})();