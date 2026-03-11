function show(id){
  document.querySelectorAll('.psec').forEach(function(s){s.classList.remove('active')});
  document.querySelectorAll('.ntb').forEach(function(b){b.classList.remove('active')});
  var s=document.getElementById('sec-'+id);
  if(s)s.classList.add('active');
  document.querySelectorAll('.ntb').forEach(function(b){
    if(b.getAttribute('onclick')==="show('"+id+"')")b.classList.add('active');
  });
  document.getElementById('mobNav').classList.remove('open');
  window.scrollTo({top:0,behavior:'smooth'});
  if(id==='inicio')animCtrs();
}
document.getElementById('ham').addEventListener('click',function(){
  document.getElementById('mobNav').classList.toggle('open');
});
function animCtrs(){
  document.querySelectorAll('.hs-n[data-t]').forEach(function(el){
    var t=parseInt(el.dataset.t),sf=el.dataset.s||'',c=0,step=Math.ceil(t/40);
    var tmr=setInterval(function(){c=Math.min(c+step,t);el.textContent=c+sf;if(c>=t)clearInterval(tmr);},35);
  });
}
animCtrs();
document.getElementById('cform').addEventListener('submit',function(e){
  e.preventDefault();
  var n=document.getElementById('nombre').value.trim();
  var t=document.getElementById('tel').value.trim();
  if(!n||!t){toast('Complet\u00e1 al menos tu nombre y tel\u00e9fono.','#78350f','#fffbeb');return;}
  toast('\u2705 \u00a1Mensaje enviado! Te contactamos pronto.','#166534','#f0fdf4');
  this.reset();
});
function toast(msg,color,bg){
  var el=document.getElementById('tmsg');
  el.textContent=msg;el.style.background=bg;el.style.color=color;
  el.classList.add('show');setTimeout(function(){el.classList.remove('show');},3800);
}

// ── INFINITE MARQUEE — JS driven, always full ──────────
(function(){
  var track = document.getElementById('mqTrack');
  if(!track) return;
  var pos = 0;
  var speed = 0.6; // px per frame
  function step(){
    pos -= speed;
    // When first half scrolled away, reset to start seamlessly
    var half = track.scrollWidth / 2;
    if(Math.abs(pos) >= half) pos = 0;
    track.style.transform = 'translateX(' + pos + 'px)';
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
})();

// ── LIVE BADGE — disponible solo 8:00 a 18:00 ──────────
(function(){
  var badge = document.querySelector('.live-badge');
  var dot = document.querySelector('.ldot');
  if(!badge) return;

  var hora = new Date().getHours();
  var disponible = hora >= 8 && hora < 18;

  if(disponible){
    badge.innerHTML = '<div class="ldot"></div>Servicio disponible ahora';
    dot.style.background = '#4ade80'; // verde
  } else {
    badge.innerHTML = '<div class="ldot ldot-off"></div>Oficinas cerradas, dejanos tu mensaje.';
    badge.style.opacity = '0.6';
  }
})();