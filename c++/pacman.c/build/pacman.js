
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},e),ba=[],ca="./this.program",k=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,t="",fa,u,v,fs,w,ha;
if(ea)t=l?require("path").dirname(t)+"/":__dirname+"/",ha=()=>{w||(fs=require("fs"),w=require("path"))},fa=function(a,b){ha();a=w.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")},v=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a},u=(a,b,c)=>{ha();a=w.normalize(a);fs.readFile(a,function(d,f){d?c(d):b(f.buffer)})},1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/")),ba=process.argv.slice(2),"undefined"!=typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof
x))throw a;}),process.on("unhandledRejection",function(a){throw a;}),k=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof x||y("exiting due to exception: "+b);process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da||l)l?t=self.location.href:"undefined"!=typeof document&&document.currentScript&&(t=document.currentScript.src),t=0!==t.indexOf("blob:")?t.substr(0,t.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);
b.send(null);return b.responseText},l&&(v=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),u=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};e.print||console.log.bind(console);var y=e.printErr||console.warn.bind(console);Object.assign(e,aa);aa=null;e.arguments&&(ba=e.arguments);
e.thisProgram&&(ca=e.thisProgram);e.quit&&(k=e.quit);var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime=e.noExitRuntime||!0;"object"!=typeof WebAssembly&&A("no native wasm support detected");var ia,ja=!1;
function ka(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var r=(n.length<<2)+1;p=B(r);C(n,D,p,r)}return p},array:function(n){var p=B(n.length);la.set(n,p);return p}};a=e["_"+a];var f=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=ma()),f[g]=m(c[g])):f[g]=c[g]}b=a.apply(null,f);b=function(n){0!==h&&na(h);return n}(b)}var oa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function E(a,b){if(a){var c=D,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&oa)a=oa.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var h=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var g=c[a++]&63;f=224==(f&240)?(f&15)<<12|h<<6|g:(f&7)<<18|h<<12|g<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function C(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function pa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}var la,D,qa,ra,F,sa,ta,G,ua,va=[],wa=[],xa=[],ya=[],za=[];function Aa(){var a=e.preRun.shift();va.unshift(a)}var H=0,Ba=null,I=null;function A(a){if(e.onAbort)e.onAbort(a);a="Aborted("+a+")";y(a);ja=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}
function Ca(){return K.startsWith("data:application/octet-stream;base64,")}var K;K="pacman.wasm";if(!Ca()){var Da=K;K=e.locateFile?e.locateFile(Da,t):t+Da}function Ea(){var a=K;try{if(a==K&&z)return new Uint8Array(z);if(v)return v(a);throw"both async and sync fetching of the wasm failed";}catch(b){A(b)}}
function Fa(){if(!z&&(da||l)){if("function"==typeof fetch&&!K.startsWith("file://"))return fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Ea()});if(u)return new Promise(function(a,b){u(K,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ea()})}
function L(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.lc;"number"==typeof c?void 0===b.Nb?M(c)():M(c)(b.Nb):c(void 0===b.Nb?null:b.Nb)}}}function M(a){return ua.get(a)}var Ga=0;function Ha(){for(var a=N.length-1;0<=a;--a)Ia(a);N=[];O=[]}var O=[];function Ja(){if(Ga&&Ka.Ib)for(var a=0;a<O.length;++a){var b=O[a];O.splice(a,1);--a;b.tc.apply(null,b.ic)}}var N=[];function Ia(a){var b=N[a];b.target.removeEventListener(b.Ab,b.cc,b.Bb);N.splice(a,1)}
function P(a){function b(d){++Ga;Ka=a;Ja();a.Db(d);Ja();--Ga}if(a.Cb)a.cc=b,a.target.addEventListener(a.Ab,b,a.Bb),N.push(a),La||(ya.push(Ha),La=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].Ab==a.Ab&&Ia(c--)}function Ma(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var La,Ka,Na,Oa,Q,Pa,Qa,Ra,Sa,Ta=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function R(a){a=2<a?E(a):a;return Ta[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function Ua(a){return 0>Ta.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function Va(a,b,c,d,f,h){Na||(Na=S(256));a={target:R(a),Ab:h,Cb:d,Db:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Na;C(Ma(g.target),D,n+0,128);C(m,D,n+128,128);M(d)(f,n,b)&&g.preventDefault()},Bb:c};P(a)}
function Wa(a,b,c,d,f,h){Oa||(Oa=S(176));a={target:R(a),Ib:!0,Ab:h,Cb:d,Db:function(g){var m=Oa;G[m>>3]=g.timeStamp;var n=m>>2;F[n+2]=g.location;F[n+3]=g.ctrlKey;F[n+4]=g.shiftKey;F[n+5]=g.altKey;F[n+6]=g.metaKey;F[n+7]=g.repeat;F[n+8]=g.charCode;F[n+9]=g.keyCode;F[n+10]=g.which;C(g.key||"",D,m+44,32);C(g.code||"",D,m+76,32);C(g.char||"",D,m+108,32);C(g.locale||"",D,m+140,32);M(d)(f,m,b)&&g.preventDefault()},Bb:c};P(a)}
function Xa(a,b,c){G[a>>3]=b.timeStamp;a>>=2;F[a+2]=b.screenX;F[a+3]=b.screenY;F[a+4]=b.clientX;F[a+5]=b.clientY;F[a+6]=b.ctrlKey;F[a+7]=b.shiftKey;F[a+8]=b.altKey;F[a+9]=b.metaKey;qa[2*a+20]=b.button;qa[2*a+21]=b.buttons;F[a+11]=b.movementX;F[a+12]=b.movementY;c=Ua(c);F[a+13]=b.clientX-c.left;F[a+14]=b.clientY-c.top}
function T(a,b,c,d,f,h){Q||(Q=S(72));a=R(a);P({target:a,Ib:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Ab:h,Cb:d,Db:function(g){g=g||event;Xa(Q,g,a);M(d)(f,Q,b)&&g.preventDefault()},Bb:c})}function Ya(a,b,c,d,f){Pa||(Pa=S(260));P({target:a,Ab:f,Cb:d,Db:function(h){h=h||event;var g=Pa,m=document.pointerLockElement||document.Hb||document.Qb||document.Pb;F[g>>2]=!!m;var n=m&&m.id?m.id:"";C(Ma(m),D,g+4,128);C(n,D,g+132,128);M(d)(20,g,b)&&h.preventDefault()},Bb:c})}
function Za(a,b,c,d,f){P({target:a,Ab:f,Cb:d,Db:function(h){h=h||event;M(d)(38,0,b)&&h.preventDefault()},Bb:c})}
function $a(a,b,c,d){Qa||(Qa=S(36));a=R(a);P({target:a,Ab:"resize",Cb:d,Db:function(f){f=f||event;if(f.target==a){var h=document.body;if(h){var g=Qa;F[g>>2]=f.detail;F[g+4>>2]=h.clientWidth;F[g+8>>2]=h.clientHeight;F[g+12>>2]=innerWidth;F[g+16>>2]=innerHeight;F[g+20>>2]=outerWidth;F[g+24>>2]=outerHeight;F[g+28>>2]=pageXOffset;F[g+32>>2]=pageYOffset;M(d)(10,g,b)&&f.preventDefault()}}},Bb:c})}
function ab(a,b,c,d,f,h){Ra||(Ra=S(1696));a=R(a);P({target:a,Ib:"touchstart"==h||"touchend"==h,Ab:h,Cb:d,Db:function(g){for(var m,n={},p=g.touches,r=0;r<p.length;++r)m=p[r],m.Sb=m.Tb=0,n[m.identifier]=m;for(r=0;r<g.changedTouches.length;++r)m=g.changedTouches[r],m.Sb=1,n[m.identifier]=m;for(r=0;r<g.targetTouches.length;++r)n[g.targetTouches[r].identifier].Tb=1;p=Ra;G[p>>3]=g.timeStamp;var q=p>>2;F[q+3]=g.ctrlKey;F[q+4]=g.shiftKey;F[q+5]=g.altKey;F[q+6]=g.metaKey;q+=7;var J=Ua(a),eb=0;for(r in n)if(m=
n[r],F[q]=m.identifier,F[q+1]=m.screenX,F[q+2]=m.screenY,F[q+3]=m.clientX,F[q+4]=m.clientY,F[q+5]=m.pageX,F[q+6]=m.pageY,F[q+7]=m.Sb,F[q+8]=m.Tb,F[q+9]=m.clientX-J.left,F[q+10]=m.clientY-J.top,q+=13,31<++eb)break;F[p+8>>2]=eb;M(d)(f,p,b)&&g.preventDefault()},Bb:c})}function bb(a,b,c,d,f,h){a={target:R(a),Ab:h,Cb:d,Db:function(g){g=g||event;M(d)(f,0,b)&&g.preventDefault()},Bb:c};P(a)}
function cb(a,b,c,d){Sa||(Sa=S(104));P({target:a,Ib:!0,Ab:"wheel",Cb:d,Db:function(f){f=f||event;var h=Sa;Xa(h,f,a);G[h+72>>3]=f.deltaX;G[h+80>>3]=f.deltaY;G[h+88>>3]=f.deltaZ;F[h+96>>2]=f.deltaMode;M(d)(9,h,b)&&f.preventDefault()},Bb:c})}
function db(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,h){b.drawArraysInstancedANGLE(c,d,f,h)},a.drawElementsInstanced=function(c,d,f,h,g){b.drawElementsInstancedANGLE(c,d,f,h,g)})}
function fb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function gb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}function hb(a){a.oc=a.getExtension("WEBGL_multi_draw")}
var ib=1,jb=[],U=[],kb=[],V=[],W=[],X=[],lb=[],mb={};function Y(a){nb||(nb=a)}function ob(a){for(var b=ib++,c=a.length;c<b;c++)a[c]=null;return b}function pb(a,b){a.Hb||(a.Hb=a.getContext,a.getContext=function(d,f){f=a.Hb(d,f);return"webgl"==d==f instanceof WebGLRenderingContext?f:null});var c=a.getContext("webgl",b);return c?qb(c,b):0}function qb(a,b){var c=ob(lb),d={mc:c,attributes:b,version:b.fc,Mb:a};a.canvas&&(a.canvas.hc=d);lb[c]=d;("undefined"==typeof b.Rb||b.Rb)&&rb(d);return c}
function rb(a){a||(a=sb);if(!a.ec){a.ec=!0;var b=a.Mb;db(b);fb(b);gb(b);b.kc=b.getExtension("EXT_disjoint_timer_query");hb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var nb,sb,tb=["default","low-power","high-performance"];function ub(a,b,c,d){for(var f=0;f<a;f++){var h=Z[c](),g=h&&ob(d);h?(h.name=g,d[g]=h):Y(1282);F[b+4*f>>2]=g}}
function vb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":Y(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 34068:c=0;break;default:Y(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||
d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){Y(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:Y(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}F[b>>2]=c}else Y(1281)}function wb(a){var b=pa(a)+1,c=S(b);C(a,D,c,b);return c}
function xb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}
var Z,Db={N:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},ca:function(a,b,c){a=R(a);if(!a)return-4;a=Ua(a);G[b>>3]=a.width;G[c>>3]=a.height;return 0},Ta:function(a,b,c){D.copyWithin(a,b,b+c)},Aa:function(a,b){function c(d){M(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Sa:function(){A("OOM")},K:function(a,b,c,d){Va(a,b,c,d,12,"blur");return 0},H:function(a,b,c){a=R(a);if(!a)return-4;a.width=b;a.height=c;return 0},L:function(a,b,c,d){Va(a,b,c,d,13,"focus");
return 0},V:function(a,b,c,d){Wa(a,b,c,d,2,"keydown");return 0},T:function(a,b,c,d){Wa(a,b,c,d,1,"keypress");return 0},U:function(a,b,c,d){Wa(a,b,c,d,3,"keyup");return 0},$:function(a,b,c,d){T(a,b,c,d,5,"mousedown");return 0},Y:function(a,b,c,d){T(a,b,c,d,33,"mouseenter");return 0},X:function(a,b,c,d){T(a,b,c,d,34,"mouseleave");return 0},Z:function(a,b,c,d){T(a,b,c,d,8,"mousemove");return 0},_:function(a,b,c,d){T(a,b,c,d,6,"mouseup");return 0},O:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||
document.body.Hb||document.body.Qb||document.body.Pb))return-1;a=R(a);if(!a)return-4;Ya(a,b,c,d,"pointerlockchange");Ya(a,b,c,d,"mozpointerlockchange");Ya(a,b,c,d,"webkitpointerlockchange");Ya(a,b,c,d,"mspointerlockchange");return 0},M:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Hb||document.body.Qb||document.body.Pb))return-1;a=R(a);if(!a)return-4;Za(a,b,c,d,"pointerlockerror");Za(a,b,c,d,"mozpointerlockerror");Za(a,b,c,d,"webkitpointerlockerror");Za(a,b,c,d,
"mspointerlockerror");return 0},Oa:function(a,b,c,d){$a(a,b,c,d);return 0},P:function(a,b,c,d){ab(a,b,c,d,25,"touchcancel");return 0},Q:function(a,b,c,d){ab(a,b,c,d,23,"touchend");return 0},R:function(a,b,c,d){ab(a,b,c,d,24,"touchmove");return 0},S:function(a,b,c,d){ab(a,b,c,d,22,"touchstart");return 0},J:function(a,b,c,d){bb(a,b,c,d,31,"webglcontextlost");return 0},I:function(a,b,c,d){bb(a,b,c,d,32,"webglcontextrestored");return 0},W:function(a,b,c,d){a=R(a);return"undefined"!=typeof a.onwheel?(cb(a,
b,c,d),0):-1},aa:function(a,b){b>>=2;b={alpha:!!F[b],depth:!!F[b+1],stencil:!!F[b+2],antialias:!!F[b+3],premultipliedAlpha:!!F[b+4],preserveDrawingBuffer:!!F[b+5],powerPreference:tb[F[b+6]],failIfMajorPerformanceCaveat:!!F[b+7],fc:F[b+8],nc:F[b+9],Rb:F[b+10],dc:F[b+11],pc:F[b+12],qc:F[b+13]};a=R(a);return!a||b.dc?0:pb(a,b)},Pa:function(a,b){a=lb[a];b=E(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&db(Z);"OES_vertex_array_object"==b&&fb(Z);"WEBGL_draw_buffers"==b&&gb(Z);"WEBGL_multi_draw"==
b&&hb(Z);return!!a.Mb.getExtension(b)},Ra:function(a){a>>=2;for(var b=0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+8]=F[a+10]=1},Qa:function(a){sb=lb[a];e.jc=Z=sb&&sb.Mb;return!a||Z?0:-5},F:function(a){Z.activeTexture(a)},v:function(a,b){Z.attachShader(U[a],X[b])},g:function(a,b){Z.bindBuffer(a,jb[b])},e:function(a,b){Z.bindFramebuffer(a,kb[b])},sa:function(a,b){Z.bindRenderbuffer(a,V[b])},f:function(a,b){Z.bindTexture(a,W[b])},A:function(a,b,c,d){Z.blendColor(a,b,c,d)},B:function(a,b){Z.blendEquationSeparate(a,
b)},C:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},ua:function(a,b,c,d){Z.bufferData(a,c?D.subarray(c,c+b):b,d)},w:function(a,b,c,d){Z.bufferSubData(a,b,D.subarray(d,d+c))},p:function(a){return Z.checkFramebufferStatus(a)},cb:function(a){Z.clear(a)},fb:function(a,b,c,d){Z.clearColor(a,b,c,d)},eb:function(a){Z.clearDepth(a)},db:function(a){Z.clearStencil(a)},h:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},fa:function(a){Z.compileShader(X[a])},pa:function(a,b,c,d,f,h,g,m){Z.compressedTexImage2D(a,
b,c,d,f,h,m?D.subarray(m,m+g):null)},ma:function(){var a=ob(U),b=Z.createProgram();b.name=a;b.Lb=b.Jb=b.Kb=0;b.Ob=1;U[a]=b;return a},ia:function(a){var b=ob(X);X[b]=Z.createShader(a);return b},x:function(a){Z.cullFace(a)},Ca:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],f=jb[d];f&&(Z.deleteBuffer(f),f.name=0,jb[d]=null)}},o:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],f=kb[d];f&&(Z.deleteFramebuffer(f),f.name=0,kb[d]=null)}},E:function(a){if(a){var b=U[a];b?(Z.deleteProgram(b),b.name=
0,U[a]=null):Y(1281)}},G:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],f=V[d];f&&(Z.deleteRenderbuffer(f),f.name=0,V[d]=null)}},k:function(a){if(a){var b=X[a];b?(Z.deleteShader(b),X[a]=null):Y(1281)}},Ba:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],f=W[d];f&&(Z.deleteTexture(f),f.name=0,W[d]=null)}},n:function(a){Z.depthFunc(a)},m:function(a){Z.depthMask(!!a)},a:function(a){Z.disable(a)},D:function(a){Z.disableVertexAttribArray(a)},Ua:function(a,b,c){Z.drawArrays(a,b,c)},Va:function(a,
b,c,d){Z.drawArraysInstanced(a,b,c,d)},Wa:function(a,b,c,d){Z.drawElements(a,b,c,d)},Xa:function(a,b,c,d,f){Z.drawElementsInstanced(a,b,c,d,f)},c:function(a){Z.enable(a)},Ya:function(a){Z.enableVertexAttribArray(a)},j:function(a,b,c,d){Z.framebufferRenderbuffer(a,b,c,V[d])},q:function(a,b,c,d,f){Z.framebufferTexture2D(a,b,c,W[d],f)},y:function(a){Z.frontFace(a)},va:function(a,b){ub(a,b,"createBuffer",jb)},r:function(a,b){ub(a,b,"createFramebuffer",kb)},ta:function(a,b){ub(a,b,"createRenderbuffer",
V)},qa:function(a,b){ub(a,b,"createTexture",W)},da:function(a,b){return Z.getAttribLocation(U[a],E(b))},b:function(a,b){vb(a,b)},ka:function(a,b,c,d){a=Z.getProgramInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},u:function(a,b,c){if(c)if(a>=ib)Y(1281);else if(a=U[a],35716==b)a=Z.getProgramInfoLog(a),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b){if(!a.Lb)for(b=0;b<Z.getProgramParameter(a,35718);++b)a.Lb=Math.max(a.Lb,Z.getActiveUniform(a,b).name.length+
1);F[c>>2]=a.Lb}else if(35722==b){if(!a.Jb)for(b=0;b<Z.getProgramParameter(a,35721);++b)a.Jb=Math.max(a.Jb,Z.getActiveAttrib(a,b).name.length+1);F[c>>2]=a.Jb}else if(35381==b){if(!a.Kb)for(b=0;b<Z.getProgramParameter(a,35382);++b)a.Kb=Math.max(a.Kb,Z.getActiveUniformBlockName(a,b).length+1);F[c>>2]=a.Kb}else F[c>>2]=Z.getProgramParameter(a,b);else Y(1281)},ea:function(a,b,c,d){a=Z.getShaderInfoLog(X[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},s:function(a,b,c){c?35716==
b?(a=Z.getShaderInfoLog(X[a]),null===a&&(a="(unknown error)"),F[c>>2]=a?a.length+1:0):35720==b?(a=Z.getShaderSource(X[a]),F[c>>2]=a?a.length+1:0):F[c>>2]=Z.getShaderParameter(X[a],b):Y(1281)},Da:function(a){var b=mb[a];if(!b){switch(a){case 7939:b=Z.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=wb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||Y(1280);b=b&&wb(b);break;case 7938:b=wb("OpenGL ES 2.0 ("+Z.getParameter(7938)+")");break;
case 35724:b=Z.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=wb(b);break;default:Y(1280)}mb[a]=b}return b},t:function(a,b){b=E(b);if(a=U[a]){var c=a,d=c.Gb,f=c.ac,h;if(!d)for(c.Gb=d={},c.$b={},h=0;h<Z.getProgramParameter(c,35718);++h){var g=Z.getActiveUniform(c,h);var m=g.name;g=g.size;var n=xb(m);n=0<n?m.slice(0,n):m;var p=c.Ob;c.Ob+=g;f[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.$b[p++]=n}c=
a.Gb;d=0;f=b;h=xb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,f=b.slice(0,h));if((f=a.ac[f])&&d<f[0]&&(d+=f[1],c[d]=c[d]||Z.getUniformLocation(a,b)))return d}else Y(1281);return-1},la:function(a){a=U[a];Z.linkProgram(a);a.Gb=0;a.ac={}},z:function(a,b){Z.polygonOffset(a,b)},ra:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},gb:function(a,b,c,d){Z.scissor(a,b,c,d)},ga:function(a,b,c,d){for(var f="",h=0;h<b;++h){var g=d?F[d+4*h>>2]:-1;f+=E(F[c+4*h>>2],0>g?void 0:g)}Z.shaderSource(X[a],f)},ya:function(a,
b,c){Z.stencilFunc(a,b,c)},bb:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},l:function(a){Z.stencilMask(a)},xa:function(a,b,c){Z.stencilOp(a,b,c)},ab:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},na:function(a,b,c,d,f,h,g,m,n){var p=Z,r=p.texImage2D;if(n){var q=m-5120;q=1==q?D:4==q?F:6==q?ta:5==q||28922==q?sa:ra;var J=31-Math.clz32(q.BYTES_PER_ELEMENT);n=q.subarray(n>>J,n+f*(d*({5:3,6:4,8:2,29502:3,29504:4}[g-6402]||1)*(1<<J)+4-1&-4)>>J)}else n=null;r.call(p,a,b,c,d,f,h,g,m,n)},d:function(a,
b,c){Z.texParameteri(a,b,c)},ja:function(a,b){var c=Z,d=c.uniform1i;var f=Z.bc;if(f){var h=f.Gb[a];"number"==typeof h&&(f.Gb[a]=h=Z.getUniformLocation(f,f.$b[a]+(0<h?"["+h+"]":"")));a=h}else Y(1282),a=void 0;d.call(c,a,b)},i:function(a){a=U[a];Z.useProgram(a);Z.bc=a},_a:function(a,b){Z.vertexAttribDivisor(a,b)},$a:function(a,b,c,d,f,h){Z.vertexAttribPointer(a,b,c,!!d,f,h)},ba:function(a,b,c,d){Z.viewport(a,b,c,d)},Na:function(){e.Ub=function(a){0!=yb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",
e.Ub)},Ma:function(){e.Zb=function(a){a=a.clipboardData.getData("text");ka("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",e.Zb)},La:function(a){e.rc=[];a=E(a);a=document.getElementById(a);e.Vb=function(b){b.stopPropagation();b.preventDefault()};e.Wb=function(b){b.stopPropagation();b.preventDefault()};e.Xb=function(b){b.stopPropagation();b.preventDefault()};e.Yb=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;e.sc=c;zb(c.length);var d;for(d=0;d<
c.length;d++)ka("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Ab(b.clientX,b.clientY)};a.addEventListener("dragenter",e.Vb,!1);a.addEventListener("dragleave",e.Wb,!1);a.addEventListener("dragover",e.Xb,!1);a.addEventListener("drop",e.Yb,!1)},za:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},Ja:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Bb()});
document.body.append(a)},Ia:function(){document.getElementById("_sokol_app_input_element").focus()},ib:function(a){a=E(a);e.Fb=document.getElementById(a);e.Fb||console.log("sokol_app.h: invalid target:"+a);e.Fb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ga:function(){window.removeEventListener("beforeunload",e.Ub)},Fa:function(){window.removeEventListener("paste",e.Zb)},Ea:function(a){a=E(a);a=document.getElementById(a);a.removeEventListener("dragenter",
e.Vb);a.removeEventListener("dragleave",e.Wb);a.removeEventListener("dragover",e.Xb);a.removeEventListener("drop",e.Yb)},Ka:function(){e.Fb&&e.Fb.requestPointerLock&&e.Fb.requestPointerLock()},wa:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var f=d.getContext("2d"),h=f.createImageData(a,b);h.data.set(D.subarray(c,c+a*b*4));f.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},
Ha:function(){document.getElementById("_sokol_app_input_element").blur()},hb:function(){return e.Eb?e.Eb.bufferSize:0},oa:function(a,b,c){e.zb=null;e.Eb=null;"undefined"!==typeof AudioContext?e.zb=new AudioContext({sampleRate:a,latencyHint:"interactive"}):"undefined"!==typeof webkitAudioContext?e.zb=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}):(e.zb=null,console.log("sokol_audio.h: no WebAudio support"));return e.zb?(console.log("sokol_audio.h: sample rate ",e.zb.sampleRate),e.Eb=
e.zb.createScriptProcessor(c,0,b),e.Eb.onaudioprocess=function(d){var f=d.outputBuffer.length,h=Cb(f);if(h)for(var g=d.outputBuffer.numberOfChannels,m=0;m<g;m++)for(var n=d.outputBuffer.getChannelData(m),p=0;p<f;p++)n[p]=ta[(h>>2)+(g*p+m)]},e.Eb.connect(e.zb.destination),a=function(){e.zb&&"suspended"===e.zb.state&&e.zb.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},ha:function(){return e.zb?
e.zb.sampleRate:0},Za:function(){null!==e.zb&&(e.Eb&&e.Eb.disconnect(),e.zb.close(),e.zb=null,e.Eb=null)}};
(function(){function a(f){e.asm=f.exports;ia=e.asm.jb;f=ia.buffer;e.HEAP8=la=new Int8Array(f);e.HEAP16=qa=new Int16Array(f);e.HEAP32=F=new Int32Array(f);e.HEAPU8=D=new Uint8Array(f);e.HEAPU16=ra=new Uint16Array(f);e.HEAPU32=sa=new Uint32Array(f);e.HEAPF32=ta=new Float32Array(f);e.HEAPF64=G=new Float64Array(f);ua=e.asm.lb;wa.unshift(e.asm.kb);H--;e.monitorRunDependencies&&e.monitorRunDependencies(H);0==H&&(null!==Ba&&(clearInterval(Ba),Ba=null),I&&(f=I,I=null,f()))}function b(f){a(f.instance)}function c(f){return Fa().then(function(h){return WebAssembly.instantiate(h,
d)}).then(function(h){return h}).then(f,function(h){y("failed to asynchronously prepare wasm: "+h);A(h)})}var d={a:Db};H++;e.monitorRunDependencies&&e.monitorRunDependencies(H);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return y("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return z||"function"!=typeof WebAssembly.instantiateStreaming||Ca()||K.startsWith("file://")||ea||"function"!=typeof fetch?c(b):fetch(K,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,
d).then(b,function(h){y("wasm streaming compile failed: "+h);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.kb).apply(null,arguments)};var Bb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Bb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.mb).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.nb).apply(null,arguments)};
var yb=e.__sapp_html5_get_ask_leave_site=function(){return(yb=e.__sapp_html5_get_ask_leave_site=e.asm.ob).apply(null,arguments)},zb=e.__sapp_emsc_begin_drop=function(){return(zb=e.__sapp_emsc_begin_drop=e.asm.pb).apply(null,arguments)};e.__sapp_emsc_drop=function(){return(e.__sapp_emsc_drop=e.asm.qb).apply(null,arguments)};var Ab=e.__sapp_emsc_end_drop=function(){return(Ab=e.__sapp_emsc_end_drop=e.asm.rb).apply(null,arguments)};
e.__sapp_emsc_invoke_fetch_cb=function(){return(e.__sapp_emsc_invoke_fetch_cb=e.asm.sb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.tb).apply(null,arguments)};
var Cb=e.__saudio_emsc_pull=function(){return(Cb=e.__saudio_emsc_pull=e.asm.ub).apply(null,arguments)},S=e._malloc=function(){return(S=e._malloc=e.asm.vb).apply(null,arguments)},ma=e.stackSave=function(){return(ma=e.stackSave=e.asm.wb).apply(null,arguments)},na=e.stackRestore=function(){return(na=e.stackRestore=e.asm.xb).apply(null,arguments)},B=e.stackAlloc=function(){return(B=e.stackAlloc=e.asm.yb).apply(null,arguments)},Eb;
function x(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}I=function Fb(){Eb||Gb();Eb||(I=Fb)};function Hb(a){var b=e._main;a=a||[];a.unshift(ca);var c=a.length,d=B(4*(c+1)),f=d>>2;a.forEach(g=>{var m=F,n=f++,p=pa(g)+1,r=B(p);C(g,la,r,p);m[n]=r});F[f]=0;try{var h=b(c,d);Ib(h)}catch(g){g instanceof x||"unwind"==g||k(1,g)}finally{}}
function Gb(a){function b(){if(!Eb&&(Eb=!0,e.calledRun=!0,!ja)){L(wa);L(xa);if(e.onRuntimeInitialized)e.onRuntimeInitialized();Jb&&Hb(a);if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var c=e.postRun.shift();za.unshift(c)}L(za)}}a=a||ba;if(!(0<H)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Aa();L(va);0<H||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):
b())}}e.run=Gb;function Ib(a){if(!noExitRuntime){if(e.onExit)e.onExit(a);ja=!0}k(a,new x(a))}if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Jb=!0;e.noInitialRun&&(Jb=!1);Gb();
