(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{Bfb3:function(o,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("XNiG"),e=r("fXoL");let a=(()=>{class o{constructor(){this.refreshAssets=new n.a,this.editAssets=new n.a}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=e.Bc({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},KCrP:function(o,t,r){"use strict";r.d(t,"a",(function(){return e}));var n=r("fXoL");let e=(()=>{class o{constructor(){this.onFileDropped=new n.u,this.background="#ffffff",this.opacity="1"}onDragOver(o){o.preventDefault(),o.stopPropagation(),this.background="#9ecbec",this.opacity="0.8",console.log("Drag Over Works")}onDragLeave(o){o.preventDefault(),o.stopPropagation(),this.background="#fff",this.opacity="1",console.log("Drag Leave Works")}ondrop(o){o.preventDefault(),o.stopPropagation(),this.background="#f5fcff",this.opacity="1";let t=o.dataTransfer.files;t.length>0&&this.onFileDropped.emit(t)}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275dir=n.Ac({type:o,selectors:[["","appDragAndDrop",""]],hostVars:4,hostBindings:function(o,t){1&o&&n.Xc("dragover",(function(o){return t.onDragOver(o)}))("dragleave",(function(o){return t.onDragLeave(o)}))("drop",(function(o){return t.ondrop(o)})),2&o&&n.xd("background-color",t.background)("opacity",t.opacity)},outputs:{onFileDropped:"onFileDropped"}}),o})()}}]);