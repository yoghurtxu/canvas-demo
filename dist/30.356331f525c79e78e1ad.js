(window.webpackJsonp=window.webpackJsonp||[]).push([[30,6,31],{"0Pcb":function(t,e,i){"use strict";const s=function(){const t=window.navigator.userAgent;return window.location.href,function(t){const e={},i=t.indexOf("iPhone")>=0||t.indexOf("iPad")>=0||t.indexOf("iPod")>=0,s=t.indexOf("Android")>0;return e.ios=i,e.android=s,e.mobile=i||s,e.pc=!i&&!s,e}(t)}();e.a=s},Dd8r:function(t,e,i){"use strict";i.r(e);var s=i("Qb4n"),r=i("0Pcb"),n=i("ysz4"),h=i("w69y");e.default=class extends s.a{constructor(){super(),this.ctx=this.getContext("2d"),this.letterSpace=0,this.fontSize=r.a.pc?24:16,this.lineHeight=2*this.fontSize,this.margin=20,this.lines=[],this.nextWord={lineNum:0,wordIndex:0},this.focus=!1}calculateLines(){let{lineHeight:t,editorAreaLeft:e,editorAreaTop:i,editorAreaWidth:s}=this;for(let r=0,n=this.lines.length;r<n;r++)this.lines[r]={left:e,bottom:i+t*(r+1)+.5,width:s,height:t,words:[]}}calculateWordWidth(){let{ctx:t}=this;return t.measureText("M").width}calculateLetterSpace(){let{ctx:t,lines:e}=this,i=this.calculateWordWidth(),s=e[0].width,r=Math.floor(s/i);this.letterSpace=(s-r*i)/(r-1)}calculateEditorArea(){let{margin:t,lineHeight:e,width:i,height:s}=this,r=Math.floor((s-2*t-e)/e);this.lines.length=r,this.editorAreaLeft=t,this.editorAreaTop=t+e,this.editorAreaWidth=i-2*t,this.editorAreaHeight=r*e}isPointInEditor(t,e){let{ctx:i,margin:s,editorAreaLeft:r,editorAreaTop:n,editorAreaWidth:h,editorAreaHeight:o}=this;return i.rect(r,n-.5,h,o-1),i.isPointInPath(t,e)}measureLineText(t,e){let{ctx:i,lines:s,letterSpace:r}=this,n=s[t].words;return!n.length||e<0?0:i.measureText(n.slice(0,e+1).join("")).width+r*e}calculateNextWord(t,e){let{ctx:i,lines:s,editorAreaLeft:r}=this,n=this.findLineByPoint(t,e),h=s[n];if(h){let e=h.words.length,i=0,s=this.measureLineText(n,i);for(;s<t-r&&i<e;)i+=1,s=this.measureLineText(n,i);this.nextWord={lineNum:n,wordIndex:i}}}advanceNextWord(){let{nextWord:t,lines:e,editorAreaWidth:i,letterSpace:s}=this,{lineNum:r,wordIndex:n}=t,h=(e[r],this.calculateWordWidth());this.measureLineText(r,n)+h+s>i?(r+=1,n=0):n+=1,this.nextWord={lineNum:r,wordIndex:n}}reorganizeWords(t){let e,{lines:i,editorAreaWidth:s}=this;for(let r=t,n=i.length;r<n;r++)for(let t=0,h=i[r].words.length;t<h;t++)this.measureLineText(r,t)>s&&(e=i[r].words.slice(t),i[r].words=i[r].words.slice(0,t),r<n-1&&(i[r+1].words=[...e,...i[r+1].words]))}findLineByPoint(t,e){let{editorAreaTop:i}=this;if(!this.isPointInEditor(t,e))return-1;let s=e-i;return Math.floor(s/this.lineHeight)}addWord(t){let{ctx:e,lines:i,letterSpace:s,nextWord:r}=this,{lineNum:n,wordIndex:h}=r,o=i[n].words;h=Math.min(h,o.length),o.splice(h,0,t),this.advanceNextWord(),this.reorganizeWords(n)}removeWord(){let{nextWord:t,lines:e}=this,{lineNum:i,wordIndex:s}=t;0===s?0!==i&&e[i-1].words.length&&(s=e[i-=1].words.length-1):s-=1,e[i].words.splice(s,1),this.nextWord={lineNum:i,wordIndex:s}}changeLine(){let{nextWord:t,lines:e}=this,{lineNum:i,wordIndex:s}=t;i<e.length-1&&(i+=1),this.nextWord={lineNum:i,wordIndex:s},this.drawCursor()}bindFocusEvent(){this.container.addEventListener("click",t=>{let{x:e,y:i}=Object(n.h)(this.el,t.x,t.y);this.isPointInEditor(e,i)&&(this.focus=!0,this.calculateNextWord(e,i),this.drawCursor())},!1)}bindInputEvent(){window.addEventListener("keyup",t=>{let{key:e,keyCode:i}=t,{ctx:s,focus:r,editorAreaWidth:n,letterSpace:h}=this;return!!r&&(8===i?this.removeWord():13===i?this.changeLine():this.addWord(e),this.draw(),!0)})}drawPaper(){let{ctx:t,lines:e,lineHeight:i}=this;t.save(),t.strokeStyle="rgba(0,0,0,0.5)",t.beginPath();let s=e[0];s&&(t.moveTo(s.left,s.bottom-i),t.lineTo(s.left+s.width,s.bottom-i));for(let{left:i,bottom:s,width:r,height:n}of e)t.moveTo(i,s),t.lineTo(i+r,s);t.stroke(),t.restore()}drawDateHeader(){let{ctx:t,lines:e,lineHeight:i}=this,s=e[0];if(t.save(),t.fillStyle="#666",s){let e=new Date,r="DATE："+e.getFullYear()+" - "+("0"+(e.getMonth()+1)).slice(-2)+" - "+("0"+e.getDate()).slice(-2),n=t.measureText(r).width;t.fillText(r,s.left+s.width-n-10,s.bottom-i-10)}t.restore()}drawWords(){let t,{ctx:e,lines:i,letterSpace:s}=this;for(let r=0,n=i.length;r<n;r++){let{words:n,left:h,bottom:o}=i[r];for(let i=0,l=n.length;i<l;i++)t=this.measureLineText(r,i-1),i>0&&(t+=s),e.fillText(n[i],h+t,o)}}drawCursor(){let{cursor:t,focus:e,nextWord:i,lines:s,letterSpace:r}=this;if(e){let{lineNum:e,wordIndex:r}=i,n=s[e];t.move(n.left+this.measureLineText(e,r-1),n.bottom)}}erase(){let{ctx:t,width:e,height:i}=this;t.clearRect(0,0,e,i)}draw(){let{ctx:t}=this;this.erase(),this.drawPaper(),this.drawDateHeader(),this.drawCursor(),this.drawWords()}render(t){super.render(t),this.ctx.font=`${this.fontSize}px sans-serif`,this.ctx.lineWidth=.5,this.ctx.textBaseline="bottom",this.cursor=new h.default(this.ctx),this.calculateEditorArea(),this.calculateLines(),this.calculateLetterSpace(),this.bindFocusEvent(),this.bindInputEvent(),this.draw()}}},Qb4n:function(t,e,i){"use strict";var s=i("kZAv");e.a=class{constructor(){this.el=document.createElement("canvas")}initCanvasSize(t,e){this.el.width=t,this.el.height=e,this.width=t,this.height=e}getContext(t,e){return this.el.getContext(t,e)}render(t){this.container=t;let{width:e,height:i}=t.getBoundingClientRect();this.initCanvasSize(e||s.d,i||s.b),this.container.innerHTML="",this.container.appendChild(this.el)}}},kZAv:function(t,e,i){"use strict";i.d(e,"d",function(){return s}),i.d(e,"b",function(){return r}),i.d(e,"a",function(){return n}),i.d(e,"c",function(){return h});const s=500,r=500,n=`${i("0Pcb").a.pc?24:16}px sans-serif`,h="https://snayan.github.io/canvas-demo/"},w69y:function(t,e,i){"use strict";i.r(e);e.default=class{constructor(t,e={}){this.ctx=t,this.width=e.width||1,this.height=e.height||this.getHeight(),this.fillStyle="rgba(0,0,0,0.8)",this.blinkOn=500,this.blinkOff=500,this.lastShowTime=0}getHeight(){let{ctx:t}=this,e=t.measureText("M").width;return e+e/6}erase(){let{ctx:t,imgData:e,width:i,height:s,left:r,bottom:n}=this;e&&t.putImageData(e,0,0,r-1,n-s-1,i+2,s+2)}draw(){let{ctx:t,left:e,bottom:i,width:s,height:r,fillStyle:n}=this;t.save(),t.fillStyle=n,t.lineWidth=s,t.fillRect(e,i-r,s,r),t.restore()}blink(t){let{ctx:e,blinkOn:i,blinkOff:s,lastShowTime:r}=this,n=t-r;n>i+s?(this.draw(),this.lastShowTime=t):n>i&&this.erase(),this.timer=window.requestAnimationFrame(this.blink.bind(this))}move(t,e){let{ctx:i,width:s,height:r,timer:n}=this;this.erase(),this.imgData=i.getImageData(0,0,i.canvas.width,i.canvas.height),this.left=t,this.bottom=e,this.lastShowTime=0,window.cancelAnimationFrame(n),this.blink(performance.now())}}}}]);