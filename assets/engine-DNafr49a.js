import{c as v}from"./index-DnHrgYjD.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=v("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=v("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=v("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]),c=1/60;function y(a,e,i){const{v1:d,v2:h,v3:o,cl1:m,cl2:n,cl3:r,ke0:k}=e,s=m/d,l=n/d,u=r/d,x=n/h,M=r/o,f=a.a1/d,p=-(s+l+u)*a.a1+x*a.a2+M*a.a3+i,T=l*a.a1-x*a.a2,S=u*a.a1-M*a.a3,V=k*(f-a.ce);return{da1:p,da2:T,da3:S,dce:V}}function j(a,e,i){const d=y(a,e,i),h={a1:a.a1+.5*c*d.da1,a2:a.a2+.5*c*d.da2,a3:a.a3+.5*c*d.da3,ce:a.ce+.5*c*d.dce,time:a.time+.5*c},o=y(h,e,i),m={a1:a.a1+.5*c*o.da1,a2:a.a2+.5*c*o.da2,a3:a.a3+.5*c*o.da3,ce:a.ce+.5*c*o.dce,time:a.time+.5*c},n=y(m,e,i),r={a1:a.a1+c*n.da1,a2:a.a2+c*n.da2,a3:a.a3+c*n.da3,ce:a.ce+c*n.dce,time:a.time+c},k=y(r,e,i);return{a1:Math.max(0,a.a1+c/6*(d.da1+2*o.da1+2*n.da1+k.da1)),a2:Math.max(0,a.a2+c/6*(d.da2+2*o.da2+2*n.da2+k.da2)),a3:Math.max(0,a.a3+c/6*(d.da3+2*o.da3+2*n.da3+k.da3)),ce:Math.max(0,a.ce+c/6*(d.dce+2*o.dce+2*n.dce+k.dce)),time:a.time+c,infusionRate:i}}function z(){return{a1:0,a2:0,a3:0,ce:0,time:0,infusionRate:0}}export{D as S,H as T,g as a,z as i,j as r};
