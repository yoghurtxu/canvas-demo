(window.webpackJsonp=window.webpackJsonp||[]).push([[20,6,44],{"+jL+":function(t,i,e){"use strict";e.r(i);var a=e("Qb4n"),s=e("6397"),r=e("0Pcb"),h=e("ysz4");i.default=class extends a.a{constructor(){super(),this.ctx=this.getContext("2d"),this.initData(),this.bindMouseEvent()}initData(){let t=[0,100],i=[0,100],e=[];for(let a=0;a<10;a++)e.push({x:Object(h.d)(t[0],t[1]),y:Object(h.d)(i[0],i[1])});this.data=e}bindMouseEvent(){let{el:t}=this;t.addEventListener(r.a.mobile?"touchmove":"mousemove",Object(h.e)(this.drawGuide.bind(this),100),!1)}drawGuide(t){let i,e,{el:a}=this;t.preventDefault(),r.a.pc?(i=(t=t).x,e=t.y):(i=t.changedTouches[0].pageX,e=t.changedTouches[0].pageY);let s=Object(h.h)(a,i,e);this.axes.drawGuide(s.x,s.y)}render(t){super.render(t),this.axes=new s.default(this.ctx,this.data),this.axes.render()}}},"0Pcb":function(t,i,e){"use strict";const a=function(){const t=window.navigator.userAgent;return window.location.href,function(t){const i={},e=t.indexOf("iPhone")>=0||t.indexOf("iPad")>=0||t.indexOf("iPod")>=0,a=t.indexOf("Android")>0;return i.ios=e,i.android=a,i.mobile=e||a,i.pc=!e&&!a,i}(t)}();i.a=a},6397:function(t,i,e){"use strict";e.r(i);var a=e("0Pcb");i.default=class{constructor(t,i,e){let s={...{axisColor:"#000",tickColor:"#666",dataLineColor:"#DE0B27",guideColor:"rgba(0,0,230,0.4)",tickLineWidth:1,dataLineWidth:1},...e};this.ctx=t,this.data=i.sort((t,i)=>t.x-i.x),this.axisColor=s.axisColor,this.tickColor=s.tickColor,this.dataLineColor=s.dataLineColor,this.guideColor=s.guideColor,this.tickLineWidth=s.tickLineWidth,this.dataLineWidth=s.dataLineWidth,this.tickSize=a.a.pc?6:4,this.minTickSpacing=10,this.horizontalTickSpacing=10,this.verticalTickSpacing=10,this.computeSize(),this.computeDelta()}saveDrawingSurface(){let{ctx:t}=this,i=t.canvas;this.cacheImgData=t.getImageData(0,0,i.width,i.height)}restoreDrawingSurface(){let{ctx:t,cacheImgData:i}=this,e=t.canvas;t.clearRect(0,0,e.width,e.height),t.putImageData(i,0,0)}computeSize(){let{ctx:t,horizontalTickSpacing:i,verticalTickSpacing:e}=this,a=t.canvas.width,s=t.canvas.height,r=Math.min(a,s),h=.8*r,n=.8*r;this.left=(a-h)/2,this.top=(s-n)/2,this.numHorizontalTicks=Math.floor(h/i),this.numVerticalTicks=Math.floor(n/e),this.width=h,this.height=n}computeDelta(){let{data:t,numHorizontalTicks:i,numVerticalTicks:e}=this,a=Number.MIN_SAFE_INTEGER,s=Number.MAX_SAFE_INTEGER,r=Number.MIN_SAFE_INTEGER,h=Number.MAX_SAFE_INTEGER;for(let{x:i,y:e}of t)a=Math.max(a,i),s=Math.min(s,i),r=Math.max(r,e),h=Math.min(h,e);this.xPerTick=Math.ceil((a-s)/i),this.yPerTick=Math.ceil((r-h)/e),this.startX=a-this.xPerTick*i,this.startY=r-this.yPerTick*e,this.startX=Math.max(Math.min(this.startX,s),0),this.startY=Math.max(Math.min(this.startY,h),0),this.startX=Math.floor(this.startX),this.startY=Math.floor(this.startY)}drawHorizontalLine(t){let{ctx:i,left:e,width:a}=this;i.beginPath(),i.moveTo(e,t-.5),i.lineTo(e+a,t-.5),i.stroke()}drawVerticalLine(t){let{ctx:i,left:e,top:a,height:s}=this;i.beginPath(),i.moveTo(t-.5,a+s),i.lineTo(t-.5,a),i.stroke()}drawHorizontalTicks(){let t,i,{ctx:e,data:a,left:s,top:r,width:h,height:n,xPerTick:o,startX:c,tickSize:l,numHorizontalTicks:d,horizontalTickSpacing:u}=this;e.beginPath();let g,k=e.measureText("W").width,x=r+n;for(let a=0;a<d;a++)g=s+u*a-.5,a>0&&(e.moveTo(g,x),e.lineTo(g,x-l*(.75*+!(a%5)+1))),t=a*o+c,i=e.measureText(t).width,0!==a&&a%5!=0||e.strokeText(t,g-i/2,x+k+6);e.stroke()}drawVerticalTicks(){let t,i,{ctx:e,left:a,top:s,height:r,yPerTick:h,startY:n,tickSize:o,numVerticalTicks:c,verticalTickSpacing:l}=this;e.beginPath();let d,u=e.measureText("W").width,g=a;for(let a=0;a<c;a++)d=s+r-l*a-.5,a>0&&(e.moveTo(g,d),e.lineTo(g+o*(.75*+!(a%5)+1),d)),t=a*h+n,i=e.measureText(t).width,0!==a&&a%5!=0||e.strokeText(t,g-i-10,d+u/2);e.stroke()}drawData(){let{ctx:t,data:i}=this;t.save(),t.beginPath();let e,a,s,r=i.length;r&&(e=i[0],a=this.toCanvasX(e.x),s=this.toCanvasY(e.y),t.moveTo(a,s));for(let h=1;h<r;h++)e=i[h],a=this.toCanvasX(e.x),s=this.toCanvasY(e.y),t.lineTo(a,s);t.stroke();for(let h=0;h<r;h++)t.beginPath(),e=i[h],a=this.toCanvasX(e.x),s=this.toCanvasY(e.y),t.arc(a,s,3,0,2*Math.PI,!1),t.fill();t.fill(),t.restore()}toCanvasX(t){let{left:i,startX:e,xPerTick:a,horizontalTickSpacing:s}=this;return i+(t-e)*s/a}toCanvasY(t){let{top:i,height:e,startY:a,yPerTick:s,verticalTickSpacing:r}=this;return i+e-(t-a)*r/s}toDataX(t){let{left:i,startX:e,xPerTick:a,horizontalTickSpacing:s}=this;return((t-i)*a/s+e).toFixed(2)}toDataY(t){let{top:i,height:e,startY:a,yPerTick:s,verticalTickSpacing:r}=this;return((i+e-t)*s/r+a).toFixed(2)}drawGuide(t,i){let{ctx:e,left:a,top:s,width:r,height:h,guideColor:n}=this;t>a&&t<a+r&&i>s&&i<s+h&&(this.restoreDrawingSurface(),e.save(),e.strokeStyle=n,e.lineWidth=.5,this.drawHorizontalLine(i),this.drawVerticalLine(t),e.strokeText(`${this.toDataX(t)} , ${this.toDataY(i)}`,t+10,i+10),e.restore())}render(){let{ctx:t,left:i,top:e,height:a,axisColor:s,tickColor:r,dataLineColor:h,dataLineWidth:n,tickLineWidth:o}=this;t.save(),t.lineWidth=.5,t.strokeStyle=s,this.drawHorizontalLine(e+a),this.drawVerticalLine(i),t.lineWidth=o,t.strokeStyle=r,this.drawHorizontalTicks(),this.drawVerticalTicks(),t.lineWidth=n,t.strokeStyle=h,t.fillStyle=h,this.drawData(),t.restore(),this.saveDrawingSurface()}}},Qb4n:function(t,i,e){"use strict";var a=e("kZAv");i.a=class{constructor(){this.el=document.createElement("canvas")}initCanvasSize(t,i){this.el.width=t,this.el.height=i,this.width=t,this.height=i}getContext(t,i){return this.el.getContext(t,i)}render(t){this.container=t;let{width:i,height:e}=t.getBoundingClientRect();this.initCanvasSize(i||a.d,e||a.b),this.container.innerHTML="",this.container.appendChild(this.el)}}},kZAv:function(t,i,e){"use strict";e.d(i,"d",function(){return a}),e.d(i,"b",function(){return s}),e.d(i,"a",function(){return r}),e.d(i,"c",function(){return h});const a=500,s=500,r=`${e("0Pcb").a.pc?24:16}px sans-serif`,h="https://snayan.github.io/canvas-demo/"}}]);