(window.webpackJsonp=window.webpackJsonp||[]).push([[7,6,23,24,25,26,27,28,29,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],{"+o/5":function(t,e){t.exports="dist/images/17.e681121d03cf6edca03e63a95fc33899.jpg"},"0Pcb":function(t,e,i){"use strict";const s=function(){const t=window.navigator.userAgent;return window.location.href,function(t){const e={},i=t.indexOf("iPhone")>=0||t.indexOf("iPad")>=0||t.indexOf("iPod")>=0,s=t.indexOf("Android")>0;return e.ios=i,e.android=s,e.mobile=i||s,e.pc=!i&&!s,e}(t)}();e.a=s},"2C+m":function(t,e){t.exports="dist/images/25.eba6bbe68c76fbdd0677ef6b0ecaa846.jpg"},"2mwZ":function(t,e){t.exports="dist/images/5.0277eb1ff78570dede8ff84d9d194809.jpg"},"4cLG":function(t,e){t.exports="dist/images/21.e75740aa255c117c00b44e4548fd9123.jpg"},"6BM6":function(t,e){t.exports="dist/images/31.89c24cfbe7eb38d303fc91be6c5423a0.jpg"},"70nu":function(t,e){t.exports="dist/images/14.da2c44a249cdafbfe5833b4900efab44.jpg"},"9d0C":function(t,e){t.exports="dist/images/8.a2ba31aaf41c1d002c776ffff902d2ed.jpg"},DoPr:function(t,e){t.exports="dist/images/10.423b34a0a67987b4ff4140b850953e2f.jpg"},HYut:function(t,e,i){"use strict";i.r(e);var s=i("Qb4n"),a=i("d4kT");e.default=class extends s.a{constructor(t,e){super(),this.ctx=this.getContext("2d"),this.meteorCount=50,this.meteors=[],this.initCanvasSize(t,e),this.createMeteor()}createMeteor(){let t,{meteorCount:e,width:i,height:s,ctx:n}=this;for(let i=0;i<e;i++)setTimeout(()=>{t={isBlink:!1,isMeteor:!0},this.meteors.push(new a.default(n,t))},300*i)}drawMeteor(){for(let t of this.meteors)t.render()}render(){let{ctx:t,width:e,height:i}=this;return t.clearRect(0,0,e,i),this.drawMeteor(),this}}},Iqvv:function(t,e){t.exports="dist/images/7.80fbdb20b58c0f12a3e9c8adab4cc5da.jpg"},"K2/Z":function(t,e,i){"use strict";i.r(e);var s=i("Qb4n");e.default=class extends s.a{constructor(t,e,i){super(),this.ctx=this.getContext("2d"),this.images=i,this.marginLeft=20,this.marginTop=Math.floor(this.marginLeft*e/t),this.maxAngle=45,this.angle=this.random(-this.maxAngle,this.maxAngle),this.nextAngle=this.random(-this.maxAngle,this.maxAngle),this.index=-1,this.alpha=1,this.duration=180,this.show=this.duration,this.initCanvasSize(t,e)}random(t,e){return Math.floor(Math.random()*(e-t+1))+t}rotate(t){let{ctx:e}=this;e.rotate(t*Math.PI/180)}translate(){let{ctx:t,width:e,height:i}=this;t.translate(e/2,i/2)}clip(){let{ctx:t,marginLeft:e,marginTop:i,width:s,height:a}=this;t.beginPath(),t.rect(e,i,s-2*e,a-2*i),t.clip()}computeSize(t){let{width:e,height:i}=this,s=t.width;return{dstW:e,dstH:e*t.height/s}}renderImage(){let{ctx:t,width:e,height:i,alpha:s,index:a,images:n}=this,h=n[a],r=n[(this.index+1)%n.length],o=this.computeSize(r),d=o.dstW,c=o.dstH;r&&(t.save(),this.rotate(this.nextAngle),t.globalAlpha=1-s,this.ctx.drawImage(r,-d/2,-c/2,d,c),t.restore()),h&&(t.save(),t.globalAlpha=s,d=(o=this.computeSize(h)).dstW,c=o.dstH,this.rotate(this.angle),this.ctx.drawImage(h,-d/2,-c/2,d,c),t.restore())}render(){let{ctx:t,width:e,height:i,maxAngle:s,images:a}=this;return a.length?(t.clearRect(0,0,e,i),t.save(),this.clip(),this.translate(),this.duration<=0&&(this.alpha=1,this.index+=1,this.angle=this.nextAngle,this.nextAngle=this.random(-s,s),this.duration=this.show),this.duration<30&&(this.alpha-=1/30),this.index>=this.images.length&&(this.index=0),this.duration-=1,this.renderImage(),t.restore(),this):this}}},LGf6:function(t,e,i){"use strict";i.r(e);var s=i("Qb4n"),a=i("d4kT");e.default=class extends s.a{constructor(t,e){super(),this.ctx=this.getContext("2d"),this.starCount=280,this.stars=[],this.initCanvasSize(t,e),this.createStars()}drawBg(t){t.save(),t.fillStyle="hsla(217, 84%, 6%, 2)",t.fillRect(0,0,this.width,this.height),t.restore()}createStars(){let t,{starCount:e,width:i,height:s,ctx:n}=this;for(let i=0;i<e;i++)t={isBlink:!1,isMeteor:!1},this.stars.push(new a.default(n,t))}drawStars(){for(let t of this.stars)t.render()}render(){let{ctx:t,width:e,height:i}=this;return t.clearRect(0,0,e,i),this.drawBg(this.ctx),this.drawStars(),this}}},Pcl3:function(t,e){t.exports="dist/images/16.ffbdfb40a6cb31b23507a3413b3c1ebe.jpg"},"Q/K1":function(t,e){t.exports="dist/images/1.7d6d9da5ebbd9cb985ed67f1672ff1b1.jpg"},Qb4n:function(t,e,i){"use strict";var s=i("kZAv");e.a=class{constructor(){this.el=document.createElement("canvas")}initCanvasSize(t,e){this.el.width=t,this.el.height=e,this.width=t,this.height=e}getContext(t,e){return this.el.getContext(t,e)}render(t){this.container=t;let{width:e,height:i}=t.getBoundingClientRect();this.initCanvasSize(e||s.d,i||s.b),this.container.innerHTML="",this.container.appendChild(this.el)}}},QmmR:function(t,e,i){"use strict";i.r(e);e.default=class{constructor(t,e,i,s){this.value=t,this.x=e,this.y=i,this.alpha=s,this.gray=.98,this.count=0}drop(t,e){this.x+=t,this.y+=e+this.gray*this.count,this.count+=1/60}}},RIS0:function(t,e){t.exports="dist/images/12.56e67a0874204535bb9ae9d8f997fcef.jpg"},ReMq:function(t,e,i){"use strict";i.r(e);var s=i("Qb4n");e.default=class extends s.a{constructor(t,e){super(),this.ctx=this.getContext("2d"),this.radius=5,this.count=6,this.index=0,this.duration=10,this.show=this.duration,this.margin=10,this.color="#f48041",this.initCanvasSize(t,e),this.point=this.computerPoint()}computerPoint(){let t=[],{width:e,count:i,radius:s,margin:a}=this,n=(e-(i*s*2+(i-1)*a))/2;for(let e=0;e<i;e++)t[e]=n+s+(2*s+a)*e;return t}renderArc(t,e){let{ctx:i,radius:s,point:a,height:n}=this,h=a[t],r=n/2;i.save(),i.beginPath(),i.arc(h,r,s*e,0,2*Math.PI),i.fill(),i.restore()}startLoading(){let{index:t,count:e,margin:i,duration:s,show:a}=this;for(let i=0;i<e;i++)i===t?this.renderArc(i,.8+.6*s/a):this.renderArc(i,.8)}render(){let{ctx:t,width:e,height:i,color:s,count:a,show:n}=this;return this.duration<1&&(this.duration=n,this.index+=1),this.index>=a&&(this.index=0),this.duration-=1,t.clearRect(0,0,e,i),t.save(),t.fillStyle=s,this.startLoading(),t.restore(),this}}},"Rn/i":function(t,e){t.exports="dist/images/9.a1942c74daf925c96720e63bccd9e5d5.jpg"},WSPY:function(t,e){t.exports="dist/images/24.c7fc91bdb428ed1d875eb5632d8c94a2.jpg"},X6iU:function(t,e){t.exports="dist/images/6.b32366f9db801ea9db7910b853f46a15.jpg"},"Xg+O":function(t,e){t.exports="dist/images/23.2da23ff31d0c767922af6df989cc2c99.jpg"},bMxf:function(t,e,i){"use strict";i.r(e);var s=i("Qb4n"),a=i("QmmR");e.default=class extends s.a{constructor(t,e){super(),this.ctx=this.getContext("2d"),this.btnWidth=160,this.btnHeight=40,this.btnLeft=t/2-this.btnWidth/2,this.btnTop=.75*e,this.startDrop=!1,this.lines=[],this.btnText=[],this.duration=0,this.isOut=!1,this.gray=.98,this.initCanvasSize(t,e),this.createTextLine(),this.createBtnText()}createTextLine(){let t,{ctx:e,width:i,height:s}=this,n=.3*s,h=[{text:"小猪猪",space:30,y:n},{text:"对不起",space:10,y:n+60},{text:"不要生气",space:10,y:n+120}];for(let[s,{text:n,space:r,y:o}]of h.entries()){this.lines[s]=[];let h=n.split("");t=i/2-(e.measureText(n).width+r*(h.length-1))/2;for(let i of h){let n=e.measureText(i).width;this.lines[s].push(new a.default(i,t,o,1)),t=t+n+r}}}createBtnText(){let t,{ctx:e,btnTop:i,btnHeight:s,width:n}=this,h=i+s/2+e.measureText("M").width/2,r="接受道歉".split("");t=n/2-(e.measureText("接受道歉").width+6*(r.length-1))/2;for(let i of r){let s=e.measureText(i).width;this.btnText.push(new a.default(i,t,h,1)),t=t+s+6}}drawBtn(){let{ctx:t,btnLeft:e,btnTop:i,btnWidth:s,btnHeight:a,btnText:n,startDrop:h,duration:r,gray:o}=this;t.save(),t.fillStyle="#ffffff",t.shadowOffsetX=3,t.shadowOffsetY=3,t.shadowBlur=4,t.shadowColor="#cea3a3",t.fillRect(e,i,s,a),t.restore(),t.save(),t.font="18px sans-serif",t.fillStyle="#916c2b";for(let e of n)h&&e.drop(-.6,1),t.fillText(e.value,e.x,e.y);h&&(this.btnLeft-=.6,this.btnTop+=1+o*(r/60)),t.restore()}drawText(){let{ctx:t,width:e,height:i,lines:s,startDrop:a,duration:n}=this;t.save(),t.font="18px sans-serif",t.fillStyle="#ffffff";let h,r,o=Math.floor(n/20);for(let n=0,d=s.length;n<d;n++)for(let c=0,g=(h=s[n]).length;c<g;c++)r=h[c],a&&c+n*d<=o&&r.drop(-1,.2*n+1),t.fillText(r.value,r.x,r.y),this.isOut=n===d-1&&c===g-1&&(r.x>e||r.y>i);t.restore()}drop(){this.startDrop=!0}render(){let{ctx:t,width:e,height:i,startDrop:s}=this;return t.clearRect(0,0,e,i),this.drawText(),this.drawBtn(),s&&(this.duration+=1),this}}},ctPg:function(t,e){t.exports="dist/media/bgm.d12f266adcddb6b3fb6dc5a9548bd59d.mp3"},d4kT:function(t,e,i){"use strict";i.r(e);e.default=class{constructor(t,e){this.renderCtx=t,this.isBlink=!!e.isBlink,this.isMeteor=!!e.isMeteor;let{x:i,y:s}=this.createPoint();this.x=i,this.y=s,this.radius=this.isMeteor?this.random(3,8):this.random(1,3),this.alpha=this.isMeteor?1:this.random(0,1),this.initCanvas()}initCanvas(){let t=this.radius,e=document.createElement("canvas");e.width=2*t,e.height=2*t;let i=e.getContext("2d"),s=i.createRadialGradient(t,t,0,t,t,t);s.addColorStop(.25,"#fff"),s.addColorStop(.4,"#ccc"),s.addColorStop(.9,"hsl(217, 61%, 33%)"),s.addColorStop(1,"transparent"),i.fillStyle=s,i.beginPath(),i.arc(t,t,t,0,2*Math.PI),i.fill(),this.canvas=e}random(t,e){return Math.floor(Math.random()*(e-t+1))+t}createPoint(){let{renderCtx:t,isMeteor:e,radius:i}=this,{width:s,height:a}=t.canvas;return{x:this.random(0,e?2*s:s),y:e?-3:this.random(0,a)}}blink(){this.isBlink&&(this.alpha<0?this.alpha+=.01:this.alpha-=.01)}meteor(){let{renderCtx:t}=this,{width:e,height:i}=t.canvas;if(this.x<0||this.y>i){let{x:t,y:e}=this.createPoint();this.x=t,this.y=e}this.x-=1*this.radius/10,this.y+=2*this.radius/10}render(){let{renderCtx:t,canvas:e,isMeteor:i,isBlink:s}=this;return s&&this.blink(),i&&this.meteor(),t.save(),t.globalAlpha=this.alpha,t.drawImage(e,this.x,this.y,this.radius,this.radius),t.restore(),this}}},"e+Dm":function(t,e){t.exports="dist/images/13.9f5dc1a9e208373c6bad054a029255fe.jpg"},ePGt:function(t,e){t.exports="dist/images/3.9db0e0e9044cd6f5d1b1855382ee8b87.jpg"},ekPa:function(t,e){t.exports="dist/images/2.fd1e5d12d881bce10de767cc00a6fcdc.jpg"},gAp7:function(t,e,i){var s={"./1.jpg":"Q/K1","./10.jpg":"DoPr","./11.jpg":"sQL6","./12.jpg":"RIS0","./13.jpg":"e+Dm","./14.jpg":"70nu","./15.jpg":"gOSJ","./16.jpg":"Pcl3","./17.jpg":"+o/5","./18.jpg":"icJf","./19.jpg":"hWNC","./2.jpg":"ekPa","./20.jpg":"rjXB","./21.jpg":"4cLG","./22.jpg":"ow/0","./23.jpg":"Xg+O","./24.jpg":"WSPY","./25.jpg":"2C+m","./26.jpg":"rtUp","./27.jpg":"nQqT","./28.jpg":"io3w","./29.jpg":"o1tX","./3.jpg":"ePGt","./30.jpg":"hS7P","./31.jpg":"6BM6","./32.jpg":"uy+u","./33.jpg":"lWpA","./4.jpg":"iwPU","./5.jpg":"2mwZ","./6.jpg":"X6iU","./7.jpg":"Iqvv","./8.jpg":"9d0C","./9.jpg":"Rn/i"};function a(t){var e=n(t);return i(e)}function n(t){var e=s[t];if(!(e+1)){var i=new Error('Cannot find module "'+t+'".');throw i.code="MODULE_NOT_FOUND",i}return e}a.keys=function(){return Object.keys(s)},a.resolve=n,t.exports=a,a.id="gAp7"},gOSJ:function(t,e){t.exports="dist/images/15.d408f6054fef92780ea1a90ee10d17f5.jpg"},hS7P:function(t,e){t.exports="dist/images/30.32032a9467839ab31d4824479c6e3533.jpg"},hWNC:function(t,e){t.exports="dist/images/19.67dafd4ddfc70afb92a4dfa8899df2f3.jpg"},icJf:function(t,e){t.exports="dist/images/18.926401fa7d4b954352937f99e20ba29d.jpg"},io3w:function(t,e){t.exports="dist/images/28.8d45efdf4168c1568d61753a52c0b498.jpg"},iwPU:function(t,e){t.exports="dist/images/4.e85c75de9bfa6814a3b6327cd49ffa46.jpg"},kZAv:function(t,e,i){"use strict";i.d(e,"d",function(){return s}),i.d(e,"b",function(){return a}),i.d(e,"a",function(){return n}),i.d(e,"c",function(){return h});const s=500,a=500,n=`${i("0Pcb").a.pc?24:16}px sans-serif`,h="https://snayan.github.io/canvas-demo/"},lWpA:function(t,e){t.exports="dist/images/33.891398418682f1e1777650458da7a979.jpg"},nQqT:function(t,e){t.exports="dist/images/27.a50f7cd33127024c1fe90bb7e51fc8cc.jpg"},o1tX:function(t,e){t.exports="dist/images/29.5c8fe007a12506edc298ba9af3c009ea.jpg"},"ow/0":function(t,e){t.exports="dist/images/22.7c0b6113a2edcc29654a15864884ffe0.jpg"},qJqN:function(t,e,i){"use strict";i.r(e);var s=i("Qb4n"),a=i("ysz4"),n=i("LGf6"),h=i("K2/Z"),r=i("HYut"),o=i("ReMq"),d=i("bMxf");let c=i("ctPg");e.default=class extends s.a{constructor(){super(),this.images=[],this.ctx=this.getContext("2d"),this.imgPromise=this.loadImages(),this.audioPromise=this.loadBgm(),this.hasInteract=!1,this.showLoading=!0,this.onClickBtn()}loadImages(){return new Promise(t=>{for(let e=0;e<33;e++){let s=i("gAp7")(`./${e+1}.jpg`),a=new Image;a.src=s,a.onload=(()=>{this.images.push(a);let e=this.images.length;(e>5||33===e)&&t()})}}).then(()=>void 0)}loadBgm(){let t,e=document.createElement("audio");return this.el.appendChild(e),this.audioElement=e,e.muted=!1,e.loop=!0,e.src=c,e.load(),(t=e.play())&&"function"==typeof t.then?t.then(()=>!0).catch(()=>!1):Promise.resolve(!1)}onClickBtn(){this.el.addEventListener("click",t=>{let{x:e,y:i}=t,{ctx:s,width:n,height:h}=this,{btnLeft:r,btnTop:o,btnWidth:d,btnHeight:c}=this.apologizeCanvas,g=Object(a.h)(this.el,e,i);if(s.beginPath(),s.rect(r,o,d,c),s.isPointInPath(g.x,g.y)){this.hasInteract=!0,this.apologizeCanvas.drop();try{let e=this.audioElement.play();e&&"function"==typeof e.then&&e.then(()=>!0).catch(()=>!1)}catch(t){}}})}startSh(){let{width:t,height:e,ctx:i,showLoading:s,hasInteract:a}=this;i.clearRect(0,0,t,e),this.bgCanvas.render(),this.meteorCanvas.render(),this.ctx.drawImage(this.bgCanvas.el,0,0),this.ctx.drawImage(this.meteorCanvas.el,0,0),s?(this.loadingCanvas.render(),this.ctx.drawImage(this.loadingCanvas.el,0,0)):this.apologizeCanvas.isOut?(this.imgCanvas.render(),this.ctx.drawImage(this.imgCanvas.el,0,0)):(this.apologizeCanvas.render(),this.ctx.drawImage(this.apologizeCanvas.el,0,0)),requestAnimationFrame(this.startSh.bind(this))}async render(t){return super.render(t),this.bgCanvas=new n.default(this.width,this.height),this.meteorCanvas=new r.default(this.width,this.height),this.loadingCanvas=new o.default(this.width,this.height),this.startSh(),await this.imgPromise,await this.audioPromise,this.showLoading=!1,this.apologizeCanvas=new d.default(this.width,this.height),this.imgCanvas=new h.default(this.width,this.height,this.images),this}}},rjXB:function(t,e){t.exports="dist/images/20.efbaee53899a473b72250b964fb512e3.jpg"},rtUp:function(t,e){t.exports="dist/images/26.9460919bc455ef86785a660cbbf10d09.jpg"},sQL6:function(t,e){t.exports="dist/images/11.548bebbb1c98b2935990628ac14626ef.jpg"},"uy+u":function(t,e){t.exports="dist/images/32.8327328e39e4a25eeb5f5f6ae11472ce.jpg"}}]);