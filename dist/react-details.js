var e=require("react"),t=require("prop-types");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(e),u=n(t);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(t){var n=t.summaryContent,u=t.open,o=void 0!==u&&u,l=t.onToggle,s=void 0===l?function(){}:l,f=t.styles,i=void 0===f?{details:"__react-details",summary:"__react-details-summary"}:f,c=t.children,d=function(e,t){if(null==e)return{};var n,r,u={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(u[n]=e[n]);return u}(t,["summaryContent","open","onToggle","styles","children"]),m=e.useRef(null),p=e.useState(o),y=p[0],g=p[1];return e.useEffect(function(){if(m){var e=function(){var e=m.current.open;g(e),s(e)};return m.current.addEventListener("toggle",e),function(){return m.current.removeEventListener("toggle",e,!1)}}},[m,s]),c?r.default.createElement("details",a({className:i.details,open:y,ref:m},d),n&&r.default.createElement("summary",{className:i.summary},n),y&&c):null}o.propTypes={summaryContent:u.default.oneOfType([u.default.string,u.default.object]),open:u.default.bool,onToggle:u.default.func,children:u.default.oneOfType([u.default.string,u.default.object]).isRequired},module.exports=o;
//# sourceMappingURL=react-details.js.map
