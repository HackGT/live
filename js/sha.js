var sha256=function(){function r(r){return a(e(u(r)))}function n(r,n){return h(o(u(r),u(n)))}function t(r,n,t){return c(o(u(r),u(n)),t)}function e(r){return g(M(f(r),8*r.length))}function o(r,n){var t=f(r);t.length>16&&(t=M(t,8*r.length));for(var e=Array(16),o=Array(16),a=0;a<16;a++)e[a]=909522486^t[a],o[a]=1549556828^t[a];var h=M(e.concat(f(n)),512+8*n.length);return g(M(o.concat(h),768))}function a(r){for(var n,t=b?"0123456789ABCDEF":"0123456789abcdef",e="",o=0;o<r.length;o++)n=r.charCodeAt(o),e+=t.charAt(n>>>4&15)+t.charAt(15&n);return e}function h(r){for(var n="",t=r.length,e=0;e<t;e+=3)for(var o=r.charCodeAt(e)<<16|(e+1<t?r.charCodeAt(e+1)<<8:0)|(e+2<t?r.charCodeAt(e+2):0),a=0;a<4;a++)8*e+6*a>8*r.length?n+=w:n+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(o>>>6*(3-a)&63);return n}function c(r,n){var t,e,o,a,h=n.length,c=Array(),u=Array(Math.ceil(r.length/2));for(t=0;t<u.length;t++)u[t]=r.charCodeAt(2*t)<<8|r.charCodeAt(2*t+1);for(;u.length>0;){for(a=Array(),o=0,t=0;t<u.length;t++)o=(o<<16)+u[t],o-=(e=Math.floor(o/h))*h,(a.length>0||e>0)&&(a[a.length]=e);c[c.length]=o,u=a}var f="";for(t=c.length-1;t>=0;t--)f+=n.charAt(c[t]);var g=Math.ceil(8*r.length/(Math.log(n.length)/Math.log(2)));for(t=f.length;t<g;t++)f=n[0]+f;return f}function u(r){for(var n,t,e="",o=-1;++o<r.length;)n=r.charCodeAt(o),t=o+1<r.length?r.charCodeAt(o+1):0,55296<=n&&n<=56319&&56320<=t&&t<=57343&&(n=65536+((1023&n)<<10)+(1023&t),o++),n<=127?e+=String.fromCharCode(n):n<=2047?e+=String.fromCharCode(192|n>>>6&31,128|63&n):n<=65535?e+=String.fromCharCode(224|n>>>12&15,128|n>>>6&63,128|63&n):n<=2097151&&(e+=String.fromCharCode(240|n>>>18&7,128|n>>>12&63,128|n>>>6&63,128|63&n));return e}function f(r){for(var n=Array(r.length>>2),t=0;t<n.length;t++)n[t]=0;for(t=0;t<8*r.length;t+=8)n[t>>5]|=(255&r.charCodeAt(t/8))<<24-t%32;return n}function g(r){for(var n="",t=0;t<32*r.length;t+=8)n+=String.fromCharCode(r[t>>5]>>>24-t%32&255);return n}function l(r,n){return r>>>n|r<<32-n}function i(r,n){return r>>>n}function A(r,n,t){return r&n^~r&t}function C(r,n,t){return r&n^r&t^n&t}function v(r){return l(r,2)^l(r,13)^l(r,22)}function d(r){return l(r,6)^l(r,11)^l(r,25)}function y(r){return l(r,7)^l(r,18)^i(r,3)}function m(r){return l(r,17)^l(r,19)^i(r,10)}function M(r,n){var t,e,o,a,h,c,u,f,g,l,i,M,b=new Array(1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225),w=new Array(64);for(r[n>>5]|=128<<24-n%32,r[15+(n+64>>9<<4)]=n,g=0;g<r.length;g+=16){for(t=b[0],e=b[1],o=b[2],a=b[3],h=b[4],c=b[5],u=b[6],f=b[7],l=0;l<64;l++)w[l]=l<16?r[l+g]:S(S(S(m(w[l-2]),w[l-7]),y(w[l-15])),w[l-16]),i=S(S(S(S(f,d(h)),A(h,c,u)),x[l]),w[l]),M=S(v(t),C(t,e,o)),f=u,u=c,c=h,h=S(a,i),a=o,o=e,e=t,t=S(i,M);b[0]=S(t,b[0]),b[1]=S(e,b[1]),b[2]=S(o,b[2]),b[3]=S(a,b[3]),b[4]=S(h,b[4]),b[5]=S(c,b[5]),b[6]=S(u,b[6]),b[7]=S(f,b[7])}return b}function S(r,n){var t=(65535&r)+(65535&n);return(r>>16)+(n>>16)+(t>>16)<<16|65535&t}var b=0,w="",x=new Array(1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998);return{hex:r,b64:n,any:t,hex_hmac:function(r,n){return a(o(u(r),u(n)))},b64_hmac:n,any_hmac:t}}();