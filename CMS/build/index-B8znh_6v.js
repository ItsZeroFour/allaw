import{cs as R,ct as T}from"./strapi-Ck8xygrr.js";import{a as t}from"./index-BRVyLNfZ.js";function N(s,a){var i,c;R(1,arguments);var e=T(s);if(isNaN(e.getTime()))throw new RangeError("Invalid time value");var o=String((i=a?.format)!==null&&i!==void 0?i:"extended"),r=String((c=a?.representation)!==null&&c!==void 0?c:"complete");if(o!=="extended"&&o!=="basic")throw new RangeError("format must be 'extended' or 'basic'");if(r!=="date"&&r!=="time"&&r!=="complete")throw new RangeError("representation must be 'date', 'time', or 'complete'");var n="",v="",m=o==="extended"?"-":"",g=o==="extended"?":":"";if(r!=="time"){var f=t(e.getDate(),2),u=t(e.getMonth()+1,2),p=t(e.getFullYear(),4);n="".concat(p).concat(m).concat(u).concat(m).concat(f)}if(r!=="date"){var d=e.getTimezoneOffset();if(d!==0){var l=Math.abs(d),h=t(Math.floor(l/60),2),w=t(l%60,2),x=d<0?"+":"-";v="".concat(x).concat(h,":").concat(w)}else v="Z";var D=t(e.getHours(),2),b=t(e.getMinutes(),2),M=t(e.getSeconds(),2),S=n===""?"":"T",E=[D,b,M].join(g);n="".concat(n).concat(S).concat(E).concat(v)}return n}export{N as f};
