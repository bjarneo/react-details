import e,{useRef as n,useState as r,useEffect as t}from"react";import o from"prop-types";function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function i(o){var i=o.summaryContent,l=o.open,s=void 0!==l&&l,u=o.onToggle,c=void 0===u?function(){}:u,m=o.styles,f=void 0===m?{details:"__react-details",summary:"__react-details-summary"}:m,p=o.children,y=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n.indexOf(r=a[t])>=0||(o[r]=e[r]);return o}(o,["summaryContent","open","onToggle","styles","children"]),d=n(null),g=r(s),v=g[0],h=g[1];return t(function(){if(d){var e=function(){var e=d.current.open;h(e),c(e)};return d.current.addEventListener("toggle",e),function(){return d.current.removeEventListener("toggle",e,!1)}}},[d,c]),p?e.createElement("details",a({className:f.details,open:v,ref:d},y),i&&e.createElement("summary",{className:f.summary},i),v&&p):null}i.propTypes={summaryContent:o.oneOfType([o.string,o.object]),open:o.bool,onToggle:o.func,children:o.oneOfType([o.string,o.object]).isRequired};export default i;
//# sourceMappingURL=react-details.module.js.map