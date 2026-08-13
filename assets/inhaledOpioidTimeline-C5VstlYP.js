import{e as t}from"./index-CwHrNYzn.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r=t("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]),n="anesdose.inhaledOpioidTimeline.v1",o="anesdose:inhaled-opioid-timeline-updated";function l(){try{const e=JSON.parse(localStorage.getItem(n)??"null");return!e||typeof e.drugId!="string"||typeof e.drugLabel!="string"||typeof e.unit!="string"||!Array.isArray(e.points)?null:{...e,points:e.points.filter(i=>Number.isFinite(i?.time)&&Number.isFinite(i?.ce)).slice(-1441)}}catch{return null}}function a(e){try{const i={...e,points:e.points.slice(-1441),updatedAt:Date.now()};localStorage.setItem(n,JSON.stringify(i)),window.dispatchEvent(new CustomEvent(o))}catch{}}export{o as I,r as T,l,a as p};
