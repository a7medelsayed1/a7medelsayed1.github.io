document.documentElement.classList.add('js');
var rv=[].slice.call(document.querySelectorAll('.rv'));
function chk(){var h=innerHeight*.94;rv=rv.filter(function(el){if(el.getBoundingClientRect().top<h){el.classList.add('on');return false}return true})}
chk();addEventListener('scroll',chk,{passive:true});addEventListener('resize',chk);setTimeout(chk,300);
var pg=document.getElementById('prog');
addEventListener('scroll',function(){var h=document.documentElement;pg.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'},{passive:true});
var roles=['Flutter Engineer','Clean Architecture','Native Android and iOS interop','Backends with Laravel'],ri=0,ci=0,del=false,el=document.querySelector('.role span');
function type(){var w=roles[ri];ci+=del?-1:1;el.textContent=w.slice(0,ci);var t=del?35:70;if(!del&&ci===w.length){del=true;t=1400}else if(del&&ci===0){del=false;ri=(ri+1)%roles.length;t=300}setTimeout(type,t)}
if(!matchMedia('(prefers-reduced-motion: reduce)').matches)type();
var cv=document.getElementById('bg'),cx=cv.getContext('2d'),W,H,P=[],mx=-999,my=-999;
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;P=[];var n=Math.min(70,Math.floor(W*H/18000));for(var i=0;i<n;i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4})}
rs();addEventListener('resize',rs);addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY});
function draw(){cx.clearRect(0,0,W,H);for(var i=0;i<P.length;i++){var a=P[i];a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1;cx.fillStyle='rgba(205,195,170,.55)';cx.beginPath();cx.arc(a.x,a.y,1.6,0,6.3);cx.fill();for(var j=i+1;j<P.length;j++){var b=P[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<130){cx.strokeStyle='rgba(201,164,95,'+(.35*(1-d/130))+')';cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(b.x,b.y);cx.stroke()}}var m=Math.hypot(a.x-mx,a.y-my);if(m<160){cx.strokeStyle='rgba(143,168,150,'+(.6*(1-m/160))+')';cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(mx,my);cx.stroke()}}requestAnimationFrame(draw)}
if(!matchMedia('(prefers-reduced-motion: reduce)').matches)draw();
