import{f as lt,g as _e,h as A,i as it,j as Te,k as jt,l as S,p as Ft,q as Mt,s as ke,u as P,v as Ve,x as Yt,y as oe,z as Re,A as ce,B as xt,C as Kt,D as Le,E as Zt,_ as Xt,m as Jt,G as Qt,w as ht,r as Pe,o as en,b as X,a as ue,e as we}from"./index-czIB9irx.js";import{u as tn}from"./EventsStore-C9D0SW9d.js";/**
  * vee-validate v4.13.2
  * (c) 2024 Abdelrahman Awad
  * @license MIT
  */function L(e){return typeof e=="function"}function It(e){return e==null}const Oe=e=>e!==null&&!!e&&typeof e=="object"&&!Array.isArray(e);function ut(e){return Number(e)>=0}function nn(e){const t=parseFloat(e);return isNaN(t)?e:t}function rn(e){return typeof e=="object"&&e!==null}function an(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function yt(e){if(!rn(e)||an(e)!=="[object Object]")return!1;if(Object.getPrototypeOf(e)===null)return!0;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Me(e,t){return Object.keys(t).forEach(n=>{if(yt(t[n])&&yt(e[n])){e[n]||(e[n]={}),Me(e[n],t[n]);return}e[n]=t[n]}),e}function Fe(e){const t=e.split(".");if(!t.length)return"";let n=String(t[0]);for(let a=1;a<t.length;a++){if(ut(t[a])){n+=`[${t[a]}]`;continue}n+=`.${t[a]}`}return n}const ln={};function un(e){return ln[e]}function gt(e,t,n){typeof n.value=="object"&&(n.value=E(n.value)),!n.enumerable||n.get||n.set||!n.configurable||!n.writable||t==="__proto__"?Object.defineProperty(e,t,n):e[t]=n.value}function E(e){if(typeof e!="object")return e;var t=0,n,a,u,i=Object.prototype.toString.call(e);if(i==="[object Object]"?u=Object.create(e.__proto__||null):i==="[object Array]"?u=Array(e.length):i==="[object Set]"?(u=new Set,e.forEach(function(s){u.add(E(s))})):i==="[object Map]"?(u=new Map,e.forEach(function(s,f){u.set(E(f),E(s))})):i==="[object Date]"?u=new Date(+e):i==="[object RegExp]"?u=new RegExp(e.source,e.flags):i==="[object DataView]"?u=new e.constructor(E(e.buffer)):i==="[object ArrayBuffer]"?u=e.slice(0):i.slice(-6)==="Array]"&&(u=new e.constructor(e)),u){for(a=Object.getOwnPropertySymbols(e);t<a.length;t++)gt(u,a[t],Object.getOwnPropertyDescriptor(e,a[t]));for(t=0,a=Object.getOwnPropertyNames(e);t<a.length;t++)Object.hasOwnProperty.call(u,n=a[t])&&u[n]===e[n]||gt(u,n,Object.getOwnPropertyDescriptor(e,n))}return u||e}const qe=Symbol("vee-validate-form"),on=Symbol("vee-validate-field-instance"),Ue=Symbol("Default empty value"),sn=typeof window<"u";function tt(e){return L(e)&&!!e.__locatorRef}function se(e){return!!e&&L(e.parse)&&e.__type==="VVTypedSchema"}function De(e){return!!e&&L(e.validate)}function Ie(e){return e==="checkbox"||e==="radio"}function dn(e){return Oe(e)||Array.isArray(e)}function cn(e){return Array.isArray(e)?e.length===0:Oe(e)&&Object.keys(e).length===0}function We(e){return/^\[.+\]$/i.test(e)}function fn(e){return Ct(e)&&e.multiple}function Ct(e){return e.tagName==="SELECT"}function vn(e,t){const n=![!1,null,void 0,0].includes(t.multiple)&&!Number.isNaN(t.multiple);return e==="select"&&"multiple"in t&&n}function mn(e,t){return!vn(e,t)&&t.type!=="file"&&!Ie(t.type)}function Pt(e){return ot(e)&&e.target&&"submit"in e.target}function ot(e){return e?!!(typeof Event<"u"&&L(Event)&&e instanceof Event||e&&e.srcElement):!1}function bt(e,t){return t in e&&e[t]!==Ue}function Y(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,a,u;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(a=n;a--!==0;)if(!Y(e[a],t[a]))return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a of e.entries())if(!t.has(a[0]))return!1;for(a of e.entries())if(!Y(a[1],t.get(a[0])))return!1;return!0}if(_t(e)&&_t(t))return!(e.size!==t.size||e.name!==t.name||e.lastModified!==t.lastModified||e.type!==t.type);if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a of e.entries())if(!t.has(a[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(a=n;a--!==0;)if(e[a]!==t[a])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();for(u=Object.keys(e),n=u.length,a=n;a--!==0;){var i=u[a];if(!Y(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function _t(e){return sn?e instanceof File:!1}function st(e){return We(e)?e.replace(/\[|\]/gi,""):e}function J(e,t,n){return e?We(t)?e[st(t)]:(t||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((u,i)=>dn(u)&&i in u?u[i]:n,e):n}function he(e,t,n){if(We(t)){e[st(t)]=n;return}const a=t.split(/\.|\[(\d+)\]/).filter(Boolean);let u=e;for(let i=0;i<a.length;i++){if(i===a.length-1){u[a[i]]=n;return}(!(a[i]in u)||It(u[a[i]]))&&(u[a[i]]=ut(a[i+1])?[]:{}),u=u[a[i]]}}function Qe(e,t){if(Array.isArray(e)&&ut(t)){e.splice(Number(t),1);return}Oe(e)&&delete e[t]}function pt(e,t){if(We(t)){delete e[st(t)];return}const n=t.split(/\.|\[(\d+)\]/).filter(Boolean);let a=e;for(let i=0;i<n.length;i++){if(i===n.length-1){Qe(a,n[i]);break}if(!(n[i]in a)||It(a[n[i]]))break;a=a[n[i]]}const u=n.map((i,s)=>J(e,n.slice(0,s).join(".")));for(let i=u.length-1;i>=0;i--)if(cn(u[i])){if(i===0){Qe(e,n[0]);continue}Qe(u[i-1],n[i-1])}}function te(e){return Object.keys(e)}function wt(e,t=void 0){const n=Le();return(n==null?void 0:n.provides[e])||jt(e,t)}function Vt(e,t,n){if(Array.isArray(e)){const a=[...e],u=a.findIndex(i=>Y(i,t));return u>=0?a.splice(u,1):a.push(t),a}return Y(e,t)?n:t}function Ot(e,t=0){let n=null,a=[];return function(...u){return n&&clearTimeout(n),n=setTimeout(()=>{const i=e(...u);a.forEach(s=>s(i)),a=[]},t),new Promise(i=>a.push(i))}}function hn(e,t){return Oe(t)&&t.number?nn(e):e}function nt(e,t){let n;return async function(...u){const i=e(...u);n=i;const s=await i;return i!==n?s:(n=void 0,t(s,u))}}function rt(e){return Array.isArray(e)?e:e?[e]:[]}function Ne(e,t){const n={};for(const a in e)t.includes(a)||(n[a]=e[a]);return n}function yn(e){let t=null,n=[];return function(...a){const u=ce(()=>{if(t!==u)return;const i=e(...a);n.forEach(s=>s(i)),n=[],t=null});return t=u,new Promise(i=>n.push(i))}}function dt(e,t,n){return t.slots.default?typeof e=="string"||!e?t.slots.default(n()):{default:()=>{var a,u;return(u=(a=t.slots).default)===null||u===void 0?void 0:u.call(a,n())}}:t.slots.default}function et(e){if(Nt(e))return e._value}function Nt(e){return"_value"in e}function gn(e){return e.type==="number"||e.type==="range"?Number.isNaN(e.valueAsNumber)?e.value:e.valueAsNumber:e.value}function ze(e){if(!ot(e))return e;const t=e.target;if(Ie(t.type)&&Nt(t))return et(t);if(t.type==="file"&&t.files){const n=Array.from(t.files);return t.multiple?n:n[0]}if(fn(t))return Array.from(t.options).filter(n=>n.selected&&!n.disabled).map(et);if(Ct(t)){const n=Array.from(t.options).find(a=>a.selected);return n?et(n):t.value}return gn(t)}function Bt(e){const t={};return Object.defineProperty(t,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),e?Oe(e)&&e._$$isNormalized?e:Oe(e)?Object.keys(e).reduce((n,a)=>{const u=bn(e[a]);return e[a]!==!1&&(n[a]=St(u)),n},t):typeof e!="string"?t:e.split("|").reduce((n,a)=>{const u=_n(a);return u.name&&(n[u.name]=St(u.params)),n},t):t}function bn(e){return e===!0?[]:Array.isArray(e)||Oe(e)?e:[e]}function St(e){const t=n=>typeof n=="string"&&n[0]==="@"?pn(n.slice(1)):n;return Array.isArray(e)?e.map(t):e instanceof RegExp?[e]:Object.keys(e).reduce((n,a)=>(n[a]=t(e[a]),n),{})}const _n=e=>{let t=[];const n=e.split(":")[0];return e.includes(":")&&(t=e.split(":").slice(1).join(":").split(",")),{name:n,params:t}};function pn(e){const t=n=>J(n,e)||n[e];return t.__locatorRef=e,t}function Vn(e){return Array.isArray(e)?e.filter(tt):te(e).filter(t=>tt(e[t])).map(t=>e[t])}const On={generateMessage:({field:e})=>`${e} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let Sn=Object.assign({},On);const pe=()=>Sn;async function Tt(e,t,n={}){const a=n==null?void 0:n.bails,u={name:(n==null?void 0:n.name)||"{field}",rules:t,label:n==null?void 0:n.label,bails:a??!0,formData:(n==null?void 0:n.values)||{}},i=await An(u,e);return Object.assign(Object.assign({},i),{valid:!i.errors.length})}async function An(e,t){const n=e.rules;if(se(n)||De(n))return jn(t,Object.assign(Object.assign({},e),{rules:n}));if(L(n)||Array.isArray(n)){const f={field:e.label||e.name,name:e.name,label:e.label,form:e.formData,value:t},d=Array.isArray(n)?n:[n],c=d.length,_=[];for(let b=0;b<c;b++){const j=d[b],g=await j(t,f);if(!(typeof g!="string"&&!Array.isArray(g)&&g)){if(Array.isArray(g))_.push(...g);else{const H=typeof g=="string"?g:Rt(f);_.push(H)}if(e.bails)return{errors:_}}}return{errors:_}}const a=Object.assign(Object.assign({},e),{rules:Bt(n)}),u=[],i=Object.keys(a.rules),s=i.length;for(let f=0;f<s;f++){const d=i[f],c=await Fn(a,t,{name:d,params:a.rules[d]});if(c.error&&(u.push(c.error),e.bails))return{errors:u}}return{errors:u}}function En(e){return!!e&&e.name==="ValidationError"}function kt(e){return{__type:"VVTypedSchema",async parse(n,a){var u;try{return{output:await e.validate(n,{abortEarly:!1,context:(a==null?void 0:a.formData)||{}}),errors:[]}}catch(i){if(!En(i))throw i;if(!(!((u=i.inner)===null||u===void 0)&&u.length)&&i.errors.length)return{errors:[{path:i.path,errors:i.errors}]};const s=i.inner.reduce((f,d)=>{const c=d.path||"";return f[c]||(f[c]={errors:[],path:c}),f[c].errors.push(...d.errors),f},{});return{errors:Object.values(s)}}}}}async function jn(e,t){const a=await(se(t.rules)?t.rules:kt(t.rules)).parse(e,{formData:t.formData}),u=[];for(const i of a.errors)i.errors.length&&u.push(...i.errors);return{value:a.value,errors:u}}async function Fn(e,t,n){const a=un(n.name);if(!a)throw new Error(`No such validator '${n.name}' exists.`);const u=Mn(n.params,e.formData),i={field:e.label||e.name,name:e.name,label:e.label,value:t,form:e.formData,rule:Object.assign(Object.assign({},n),{params:u})},s=await a(t,u,i);return typeof s=="string"?{error:s}:{error:s?void 0:Rt(i)}}function Rt(e){const t=pe().generateMessage;return t?t(e):"Field is invalid"}function Mn(e,t){const n=a=>tt(a)?a(t):a;return Array.isArray(e)?e.map(n):Object.keys(e).reduce((a,u)=>(a[u]=n(e[u]),a),{})}async function In(e,t){const a=await(se(e)?e:kt(e)).parse(E(t)),u={},i={};for(const s of a.errors){const f=s.errors,d=(s.path||"").replace(/\["(\d+)"\]/g,(c,_)=>`[${_}]`);u[d]={valid:!f.length,errors:f},f.length&&(i[d]=f[0])}return{valid:!a.errors.length,results:u,errors:i,values:a.value,source:"schema"}}async function Cn(e,t,n){const u=te(e).map(async c=>{var _,b,j;const g=(_=n==null?void 0:n.names)===null||_===void 0?void 0:_[c],N=await Tt(J(t,c),e[c],{name:(g==null?void 0:g.name)||c,label:g==null?void 0:g.label,values:t,bails:(j=(b=n==null?void 0:n.bailsMap)===null||b===void 0?void 0:b[c])!==null&&j!==void 0?j:!0});return Object.assign(Object.assign({},N),{path:c})});let i=!0;const s=await Promise.all(u),f={},d={};for(const c of s)f[c.path]={valid:c.valid,errors:c.errors},c.valid||(i=!1,d[c.path]=c.errors[0]);return{valid:i,results:f,errors:d,source:"schema"}}let At=0;function Pn(e,t){const{value:n,initialValue:a,setInitialValue:u}=wn(e,t.modelValue,t.form);if(!t.form){let d=function(g){var N;"value"in g&&(n.value=g.value),"errors"in g&&_(g.errors),"touched"in g&&(j.touched=(N=g.touched)!==null&&N!==void 0?N:j.touched),"initialValue"in g&&u(g.initialValue)};const{errors:c,setErrors:_}=Tn(),b=At>=Number.MAX_SAFE_INTEGER?0:++At,j=Bn(n,a,c,t.schema);return{id:b,path:e,value:n,initialValue:a,meta:j,flags:{pendingUnmount:{[b]:!1},pendingReset:!1},errors:c,setState:d}}const i=t.form.createPathState(e,{bails:t.bails,label:t.label,type:t.type,validate:t.validate,schema:t.schema}),s=A(()=>i.errors);function f(d){var c,_,b;"value"in d&&(n.value=d.value),"errors"in d&&((c=t.form)===null||c===void 0||c.setFieldError(P(e),d.errors)),"touched"in d&&((_=t.form)===null||_===void 0||_.setFieldTouched(P(e),(b=d.touched)!==null&&b!==void 0?b:!1)),"initialValue"in d&&u(d.initialValue)}return{id:Array.isArray(i.id)?i.id[i.id.length-1]:i.id,path:e,value:n,errors:s,meta:i,initialValue:a,flags:i.__flags,setState:f}}function wn(e,t,n){const a=oe(P(t));function u(){return n?J(n.initialValues.value,P(e),P(a)):P(a)}function i(c){if(!n){a.value=c;return}n.setFieldInitialValue(P(e),c,!0)}const s=A(u);if(!n)return{value:oe(u()),initialValue:s,setInitialValue:i};const f=Nn(t,n,s,e);return n.stageInitialValue(P(e),f,!0),{value:A({get(){return J(n.values,P(e))},set(c){n.setFieldValue(P(e),c,!1)}}),initialValue:s,setInitialValue:i}}function Nn(e,t,n,a){return ke(e)?P(e):e!==void 0?e:J(t.values,P(a),P(n))}function Bn(e,t,n,a){const u=A(()=>{var s,f,d;return(d=(f=(s=S(a))===null||s===void 0?void 0:s.describe)===null||f===void 0?void 0:f.call(s).required)!==null&&d!==void 0?d:!1}),i=Re({touched:!1,pending:!1,valid:!0,required:u,validated:!!P(n).length,initialValue:A(()=>P(t)),dirty:A(()=>!Y(P(e),P(t)))});return Ve(n,s=>{i.valid=!s.length},{immediate:!0,flush:"sync"}),i}function Tn(){const e=oe([]);return{errors:e,setErrors:t=>{e.value=rt(t)}}}function kn(e,t,n){return Ie(n==null?void 0:n.type)?Un(e,t,n):Ut(e,t,n)}function Ut(e,t,n){const{initialValue:a,validateOnMount:u,bails:i,type:s,checkedValue:f,label:d,validateOnValueUpdate:c,uncheckedValue:_,controlled:b,keepValueOnUnmount:j,syncVModel:g,form:N}=Rn(n),H=b?wt(qe):void 0,p=N||H,q=A(()=>Fe(S(e))),R=A(()=>{if(S(p==null?void 0:p.schema))return;const O=P(t);return De(O)||se(O)||L(O)||Array.isArray(O)?O:Bt(O)}),de=!L(R.value)&&se(S(t)),{id:x,value:z,initialValue:Q,meta:U,setState:ae,errors:T,flags:I}=Pn(q,{modelValue:a,form:p,bails:i,label:d,type:s,validate:R.value?F:void 0,schema:de?t:void 0}),ne=A(()=>T.value[0]);g&&Dn({value:z,prop:g,handleChange:C,shouldValidate:()=>c&&!I.pendingReset});const ye=(m,O=!1)=>{U.touched=!0,O&&K()};async function fe(m){var O,D;if(p!=null&&p.validateSchema){const{results:M}=await p.validateSchema(m);return(O=M[S(q)])!==null&&O!==void 0?O:{valid:!0,errors:[]}}return R.value?Tt(z.value,R.value,{name:S(q),label:S(d),values:(D=p==null?void 0:p.values)!==null&&D!==void 0?D:{},bails:i}):{valid:!0,errors:[]}}const K=nt(async()=>(U.pending=!0,U.validated=!0,fe("validated-only")),m=>(I.pendingUnmount[ee.id]||(ae({errors:m.errors}),U.pending=!1,U.valid=m.valid),m)),W=nt(async()=>fe("silent"),m=>(U.valid=m.valid,m));function F(m){return(m==null?void 0:m.mode)==="silent"?W():K()}function C(m,O=!0){const D=ze(m);Se(D,O)}Ft(()=>{if(u)return K();(!p||!p.validateSchema)&&W()});function le(m){U.touched=m}function ge(m){var O;const D=m&&"value"in m?m.value:Q.value;ae({value:E(D),initialValue:E(D),touched:(O=m==null?void 0:m.touched)!==null&&O!==void 0?O:!1,errors:(m==null?void 0:m.errors)||[]}),U.pending=!1,U.validated=!1,W()}const Ce=Le();function Se(m,O=!0){z.value=Ce&&g?hn(m,Ce.props.modelModifiers):m,(O?K:W)()}function ct(m){ae({errors:Array.isArray(m)?m:[m]})}const Ee=A({get(){return z.value},set(m){Se(m,c)}}),ee={id:x,name:q,label:d,value:Ee,meta:U,errors:T,errorMessage:ne,type:s,checkedValue:f,uncheckedValue:_,bails:i,keepValueOnUnmount:j,resetField:ge,handleReset:()=>ge(),validate:F,handleChange:C,handleBlur:ye,setState:ae,setTouched:le,setErrors:ct,setValue:Se};if(Mt(on,ee),ke(t)&&typeof P(t)!="function"&&Ve(t,(m,O)=>{Y(m,O)||(U.validated?K():W())},{deep:!0}),!p)return ee;const $e=A(()=>{const m=R.value;return!m||L(m)||De(m)||se(m)||Array.isArray(m)?{}:Object.keys(m).reduce((O,D)=>{const M=Vn(m[D]).map(ve=>ve.__locatorRef).reduce((ve,ie)=>{const me=J(p.values,ie)||p.values[ie];return me!==void 0&&(ve[ie]=me),ve},{});return Object.assign(O,M),O},{})});return Ve($e,(m,O)=>{if(!Object.keys(m).length)return;!Y(m,O)&&(U.validated?K():W())}),Yt(()=>{var m;const O=(m=S(ee.keepValueOnUnmount))!==null&&m!==void 0?m:S(p.keepValuesOnUnmount),D=S(q);if(O||!p||I.pendingUnmount[ee.id]){p==null||p.removePathState(D,x);return}I.pendingUnmount[ee.id]=!0;const M=p.getPathState(D);if(Array.isArray(M==null?void 0:M.id)&&(M!=null&&M.multiple)?M!=null&&M.id.includes(ee.id):(M==null?void 0:M.id)===ee.id){if(M!=null&&M.multiple&&Array.isArray(M.value)){const ie=M.value.findIndex(me=>Y(me,S(ee.checkedValue)));if(ie>-1){const me=[...M.value];me.splice(ie,1),p.setFieldValue(D,me)}Array.isArray(M.id)&&M.id.splice(M.id.indexOf(ee.id),1)}else p.unsetPathValue(S(q));p.removePathState(D,x)}}),ee}function Rn(e){const t=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,label:void 0,validateOnValueUpdate:!0,keepValueOnUnmount:void 0,syncVModel:!1,controlled:!0}),n=!!(e!=null&&e.syncVModel),a=typeof(e==null?void 0:e.syncVModel)=="string"?e.syncVModel:(e==null?void 0:e.modelPropName)||"modelValue",u=n&&!("initialValue"in(e||{}))?at(Le(),a):e==null?void 0:e.initialValue;if(!e)return Object.assign(Object.assign({},t()),{initialValue:u});const i="valueProp"in e?e.valueProp:e.checkedValue,s="standalone"in e?!e.standalone:e.controlled,f=(e==null?void 0:e.modelPropName)||(e==null?void 0:e.syncVModel)||!1;return Object.assign(Object.assign(Object.assign({},t()),e||{}),{initialValue:u,controlled:s??!0,checkedValue:i,syncVModel:f})}function Un(e,t,n){const a=n!=null&&n.standalone?void 0:wt(qe),u=n==null?void 0:n.checkedValue,i=n==null?void 0:n.uncheckedValue;function s(f){const d=f.handleChange,c=A(()=>{const b=S(f.value),j=S(u);return Array.isArray(b)?b.findIndex(g=>Y(g,j))>=0:Y(j,b)});function _(b,j=!0){var g,N;if(c.value===((g=b==null?void 0:b.target)===null||g===void 0?void 0:g.checked)){j&&f.validate();return}const H=S(e),p=a==null?void 0:a.getPathState(H),q=ze(b);let R=(N=S(u))!==null&&N!==void 0?N:q;a&&(p!=null&&p.multiple)&&p.type==="checkbox"?R=Vt(J(a.values,H)||[],R,void 0):(n==null?void 0:n.type)==="checkbox"&&(R=Vt(S(f.value),R,S(i))),d(R,j)}return Object.assign(Object.assign({},f),{checked:c,checkedValue:u,uncheckedValue:i,handleChange:_})}return s(Ut(e,t,n))}function Dn({prop:e,value:t,handleChange:n,shouldValidate:a}){const u=Le();if(!u||!e)return;const i=typeof e=="string"?e:"modelValue",s=`update:${i}`;i in u.props&&(Ve(t,f=>{Y(f,at(u,i))||u.emit(s,f)}),Ve(()=>at(u,i),f=>{if(f===Ue&&t.value===void 0)return;const d=f===Ue?void 0:f;Y(d,t.value)||n(d,a())}))}function at(e,t){if(e)return e.props[t]}const zn=lt({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>pe().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:Ue},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1},keepValue:{type:Boolean,default:void 0}},setup(e,t){const n=_e(e,"rules"),a=_e(e,"name"),u=_e(e,"label"),i=_e(e,"uncheckedValue"),s=_e(e,"keepValue"),{errors:f,value:d,errorMessage:c,validate:_,handleChange:b,handleBlur:j,setTouched:g,resetField:N,handleReset:H,meta:p,checked:q,setErrors:R,setValue:de}=kn(a,n,{validateOnMount:e.validateOnMount,bails:e.bails,standalone:e.standalone,type:t.attrs.type,initialValue:qn(e,t),checkedValue:t.attrs.value,uncheckedValue:i,label:u,validateOnValueUpdate:e.validateOnModelUpdate,keepValueOnUnmount:s,syncVModel:!0}),x=function(I,ne=!0){b(I,ne)},z=A(()=>{const{validateOnInput:T,validateOnChange:I,validateOnBlur:ne,validateOnModelUpdate:ye}=Ln(e);function fe(C){j(C,ne),L(t.attrs.onBlur)&&t.attrs.onBlur(C)}function K(C){x(C,T),L(t.attrs.onInput)&&t.attrs.onInput(C)}function W(C){x(C,I),L(t.attrs.onChange)&&t.attrs.onChange(C)}const F={name:e.name,onBlur:fe,onInput:K,onChange:W};return F["onUpdate:modelValue"]=C=>x(C,ye),F}),Q=A(()=>{const T=Object.assign({},z.value);Ie(t.attrs.type)&&q&&(T.checked=q.value);const I=Et(e,t);return mn(I,t.attrs)&&(T.value=d.value),T}),U=A(()=>Object.assign(Object.assign({},z.value),{modelValue:d.value}));function ae(){return{field:Q.value,componentField:U.value,value:d.value,meta:p,errors:f.value,errorMessage:c.value,validate:_,resetField:N,handleChange:x,handleInput:T=>x(T,!1),handleReset:H,handleBlur:z.value.onBlur,setTouched:g,setErrors:R,setValue:de}}return t.expose({value:d,meta:p,errors:f,errorMessage:c,setErrors:R,setTouched:g,setValue:de,reset:N,validate:_,handleChange:b}),()=>{const T=it(Et(e,t)),I=dt(T,t,ae);return T?Te(T,Object.assign(Object.assign({},t.attrs),Q.value),I):I}}});function Et(e,t){let n=e.as||"";return!e.as&&!t.slots.default&&(n="input"),n}function Ln(e){var t,n,a,u;const{validateOnInput:i,validateOnChange:s,validateOnBlur:f,validateOnModelUpdate:d}=pe();return{validateOnInput:(t=e.validateOnInput)!==null&&t!==void 0?t:i,validateOnChange:(n=e.validateOnChange)!==null&&n!==void 0?n:s,validateOnBlur:(a=e.validateOnBlur)!==null&&a!==void 0?a:f,validateOnModelUpdate:(u=e.validateOnModelUpdate)!==null&&u!==void 0?u:d}}function qn(e,t){return Ie(t.attrs.type)?bt(e,"modelValue")?e.modelValue:void 0:bt(e,"modelValue")?e.modelValue:t.attrs.value}const Wn=zn;let $n=0;const Be=["bails","fieldsCount","id","multiple","type","validate"];function Dt(e){const t=(e==null?void 0:e.initialValues)||{},n=Object.assign({},S(t)),a=P(e==null?void 0:e.validationSchema);return a&&se(a)&&L(a.cast)?E(a.cast(n)||{}):E(n)}function Gn(e){var t;const n=$n++;let a=0;const u=oe(!1),i=oe(!1),s=oe(0),f=[],d=Re(Dt(e)),c=oe([]),_=oe({}),b=oe({}),j=yn(()=>{b.value=c.value.reduce((l,r)=>(l[Fe(S(r.path))]=r,l),{})});function g(l,r){const o=F(l);if(!o){typeof l=="string"&&(_.value[Fe(l)]=rt(r));return}if(typeof l=="string"){const v=Fe(l);_.value[v]&&delete _.value[v]}o.errors=rt(r),o.valid=!o.errors.length}function N(l){te(l).forEach(r=>{g(r,l[r])})}e!=null&&e.initialErrors&&N(e.initialErrors);const H=A(()=>{const l=c.value.reduce((r,o)=>(o.errors.length&&(r[o.path]=o.errors),r),{});return Object.assign(Object.assign({},_.value),l)}),p=A(()=>te(H.value).reduce((l,r)=>{const o=H.value[r];return o!=null&&o.length&&(l[r]=o[0]),l},{})),q=A(()=>c.value.reduce((l,r)=>(l[r.path]={name:r.path||"",label:r.label||""},l),{})),R=A(()=>c.value.reduce((l,r)=>{var o;return l[r.path]=(o=r.bails)!==null&&o!==void 0?o:!0,l},{})),de=Object.assign({},(e==null?void 0:e.initialErrors)||{}),x=(t=e==null?void 0:e.keepValuesOnUnmount)!==null&&t!==void 0?t:!1,{initialValues:z,originalInitialValues:Q,setInitialValues:U}=Yn(c,d,e),ae=Hn(c,d,Q,p),T=A(()=>c.value.reduce((l,r)=>{const o=J(d,r.path);return he(l,r.path,o),l},{})),I=e==null?void 0:e.validationSchema;function ne(l,r){var o,v;const y=A(()=>J(z.value,S(l))),V=b.value[S(l)],h=(r==null?void 0:r.type)==="checkbox"||(r==null?void 0:r.type)==="radio";if(V&&h){V.multiple=!0;const re=a++;return Array.isArray(V.id)?V.id.push(re):V.id=[V.id,re],V.fieldsCount++,V.__flags.pendingUnmount[re]=!1,V}const B=A(()=>J(d,S(l))),k=S(l),$=le.findIndex(re=>re===k);$!==-1&&le.splice($,1);const w=A(()=>{var re,je,Ke,Ze;const Xe=S(I);if(se(Xe))return(je=(re=Xe.describe)===null||re===void 0?void 0:re.call(Xe,S(l)).required)!==null&&je!==void 0?je:!1;const Je=S(r==null?void 0:r.schema);return se(Je)&&(Ze=(Ke=Je.describe)===null||Ke===void 0?void 0:Ke.call(Je).required)!==null&&Ze!==void 0?Ze:!1}),G=a++,Z=Re({id:G,path:l,touched:!1,pending:!1,valid:!0,validated:!!(!((o=de[k])===null||o===void 0)&&o.length),required:w,initialValue:y,errors:Zt([]),bails:(v=r==null?void 0:r.bails)!==null&&v!==void 0?v:!1,label:r==null?void 0:r.label,type:(r==null?void 0:r.type)||"default",value:B,multiple:!1,__flags:{pendingUnmount:{[G]:!1},pendingReset:!1},fieldsCount:1,validate:r==null?void 0:r.validate,dirty:A(()=>!Y(P(B),P(y)))});return c.value.push(Z),b.value[k]=Z,j(),p.value[k]&&!de[k]&&ce(()=>{be(k,{mode:"silent"})}),ke(l)&&Ve(l,re=>{j();const je=E(B.value);b.value[re]=Z,ce(()=>{he(d,re,je)})}),Z}const ye=Ot(mt,5),fe=Ot(mt,5),K=nt(async l=>await(l==="silent"?ye():fe()),(l,[r])=>{const o=te(m.errorBag.value),y=[...new Set([...te(l.results),...c.value.map(V=>V.path),...o])].sort().reduce((V,h)=>{var B;const k=h,$=F(k)||C(k),w=((B=l.results[k])===null||B===void 0?void 0:B.errors)||[],G=S($==null?void 0:$.path)||k,Z=xn({errors:w,valid:!w.length},V.results[G]);return V.results[G]=Z,Z.valid||(V.errors[G]=Z.errors[0]),$&&_.value[G]&&delete _.value[G],$?($.valid=Z.valid,r==="silent"||r==="validated-only"&&!$.validated||g($,Z.errors),V):(g(G,w),V)},{valid:l.valid,results:{},errors:{},source:l.source});return l.values&&(y.values=l.values,y.source=l.source),te(y.results).forEach(V=>{var h;const B=F(V);B&&r!=="silent"&&(r==="validated-only"&&!B.validated||g(B,(h=y.results[V])===null||h===void 0?void 0:h.errors))}),y});function W(l){c.value.forEach(l)}function F(l){const r=typeof l=="string"?Fe(l):l;return typeof r=="string"?b.value[r]:r}function C(l){return c.value.filter(o=>l.startsWith(o.path)).reduce((o,v)=>o?v.path.length>o.path.length?v:o:v,void 0)}let le=[],ge;function Ce(l){return le.push(l),ge||(ge=ce(()=>{[...le].sort().reverse().forEach(o=>{pt(d,o)}),le=[],ge=null})),ge}function Se(l){return function(o,v){return function(V){return V instanceof Event&&(V.preventDefault(),V.stopPropagation()),W(h=>h.touched=!0),u.value=!0,s.value++,Ae().then(h=>{const B=E(d);if(h.valid&&typeof o=="function"){const k=E(T.value);let $=l?k:B;return h.values&&($=h.source==="schema"?h.values:Object.assign({},$,h.values)),o($,{evt:V,controlledValues:k,setErrors:N,setFieldError:g,setTouched:Ge,setFieldTouched:ie,setValues:M,setFieldValue:O,resetForm:He,resetField:ft})}!h.valid&&typeof v=="function"&&v({values:B,evt:V,errors:h.errors,results:h.results})}).then(h=>(u.value=!1,h),h=>{throw u.value=!1,h})}}}const Ee=Se(!1);Ee.withControlled=Se(!0);function ee(l,r){const o=c.value.findIndex(y=>y.path===l&&(Array.isArray(y.id)?y.id.includes(r):y.id===r)),v=c.value[o];if(!(o===-1||!v)){if(ce(()=>{be(l,{mode:"silent",warn:!1})}),v.multiple&&v.fieldsCount&&v.fieldsCount--,Array.isArray(v.id)){const y=v.id.indexOf(r);y>=0&&v.id.splice(y,1),delete v.__flags.pendingUnmount[r]}(!v.multiple||v.fieldsCount<=0)&&(c.value.splice(o,1),vt(l),j(),delete b.value[l])}}function $e(l){te(b.value).forEach(r=>{r.startsWith(l)&&delete b.value[r]}),c.value=c.value.filter(r=>!r.path.startsWith(l)),ce(()=>{j()})}const m={formId:n,values:d,controlledValues:T,errorBag:H,errors:p,schema:I,submitCount:s,meta:ae,isSubmitting:u,isValidating:i,fieldArrays:f,keepValuesOnUnmount:x,validateSchema:P(I)?K:void 0,validate:Ae,setFieldError:g,validateField:be,setFieldValue:O,setValues:M,setErrors:N,setFieldTouched:ie,setTouched:Ge,resetForm:He,resetField:ft,handleSubmit:Ee,useFieldModel:$t,defineInputBinds:Gt,defineComponentBinds:Ht,defineField:xe,stageInitialValue:qt,unsetInitialValue:vt,setFieldInitialValue:Ye,createPathState:ne,getPathState:F,unsetPathValue:Ce,removePathState:ee,initialValues:z,getAllPathStates:()=>c.value,destroyPath:$e,isFieldTouched:me,isFieldDirty:zt,isFieldValid:Lt};function O(l,r,o=!0){const v=E(r),y=typeof l=="string"?l:l.path;F(y)||ne(y),he(d,y,v),o&&be(y)}function D(l,r=!0){te(d).forEach(o=>{delete d[o]}),te(l).forEach(o=>{O(o,l[o],!1)}),r&&Ae()}function M(l,r=!0){Me(d,l),f.forEach(o=>o&&o.reset()),r&&Ae()}function ve(l,r){const o=F(S(l))||ne(l);return A({get(){return o.value},set(v){var y;const V=S(l);O(V,v,(y=S(r))!==null&&y!==void 0?y:!1)}})}function ie(l,r){const o=F(l);o&&(o.touched=r)}function me(l){const r=F(l);return r?r.touched:c.value.filter(o=>o.path.startsWith(l)).some(o=>o.touched)}function zt(l){const r=F(l);return r?r.dirty:c.value.filter(o=>o.path.startsWith(l)).some(o=>o.dirty)}function Lt(l){const r=F(l);return r?r.valid:c.value.filter(o=>o.path.startsWith(l)).every(o=>o.valid)}function Ge(l){if(typeof l=="boolean"){W(r=>{r.touched=l});return}te(l).forEach(r=>{ie(r,!!l[r])})}function ft(l,r){var o;const v=r&&"value"in r?r.value:J(z.value,l),y=F(l);y&&(y.__flags.pendingReset=!0),Ye(l,E(v),!0),O(l,v,!1),ie(l,(o=r==null?void 0:r.touched)!==null&&o!==void 0?o:!1),g(l,(r==null?void 0:r.errors)||[]),ce(()=>{y&&(y.__flags.pendingReset=!1)})}function He(l,r){let o=E(l!=null&&l.values?l.values:Q.value);o=r!=null&&r.force?o:Me(Q.value,o),o=se(I)&&L(I.cast)?I.cast(o):o,U(o,{force:r==null?void 0:r.force}),W(v=>{var y;v.__flags.pendingReset=!0,v.validated=!1,v.touched=((y=l==null?void 0:l.touched)===null||y===void 0?void 0:y[v.path])||!1,O(v.path,J(o,v.path),!1),g(v.path,void 0)}),r!=null&&r.force?D(o,!1):M(o,!1),N((l==null?void 0:l.errors)||{}),s.value=(l==null?void 0:l.submitCount)||0,ce(()=>{Ae({mode:"silent"}),W(v=>{v.__flags.pendingReset=!1})})}async function Ae(l){const r=(l==null?void 0:l.mode)||"force";if(r==="force"&&W(h=>h.validated=!0),m.validateSchema)return m.validateSchema(r);i.value=!0;const o=await Promise.all(c.value.map(h=>h.validate?h.validate(l).then(B=>({key:h.path,valid:B.valid,errors:B.errors,value:B.value})):Promise.resolve({key:h.path,valid:!0,errors:[],value:void 0})));i.value=!1;const v={},y={},V={};for(const h of o)v[h.key]={valid:h.valid,errors:h.errors},h.value&&he(V,h.key,h.value),h.errors.length&&(y[h.key]=h.errors[0]);return{valid:o.every(h=>h.valid),results:v,errors:y,values:V,source:"fields"}}async function be(l,r){var o;const v=F(l);if(v&&(r==null?void 0:r.mode)!=="silent"&&(v.validated=!0),I){const{results:y}=await K((r==null?void 0:r.mode)||"validated-only");return y[l]||{errors:[],valid:!0}}return v!=null&&v.validate?v.validate(r):(!v&&(o=r==null?void 0:r.warn),Promise.resolve({errors:[],valid:!0}))}function vt(l){pt(z.value,l)}function qt(l,r,o=!1){Ye(l,r),he(d,l,r),o&&!(e!=null&&e.initialValues)&&he(Q.value,l,E(r))}function Ye(l,r,o=!1){he(z.value,l,E(r)),o&&he(Q.value,l,E(r))}async function mt(){const l=P(I);if(!l)return{valid:!0,results:{},errors:{},source:"none"};i.value=!0;const r=De(l)||se(l)?await In(l,d):await Cn(l,d,{names:q.value,bailsMap:R.value});return i.value=!1,r}const Wt=Ee((l,{evt:r})=>{Pt(r)&&r.target.submit()});Ft(()=>{if(e!=null&&e.initialErrors&&N(e.initialErrors),e!=null&&e.initialTouched&&Ge(e.initialTouched),e!=null&&e.validateOnMount){Ae();return}m.validateSchema&&m.validateSchema("silent")}),ke(I)&&Ve(I,()=>{var l;(l=m.validateSchema)===null||l===void 0||l.call(m,"validated-only")}),Mt(qe,m);function xe(l,r){const o=L(r)||r==null?void 0:r.label,v=F(S(l))||ne(l,{label:o}),y=()=>L(r)?r(Ne(v,Be)):r||{};function V(){var w;v.touched=!0,((w=y().validateOnBlur)!==null&&w!==void 0?w:pe().validateOnBlur)&&be(v.path)}function h(){var w;((w=y().validateOnInput)!==null&&w!==void 0?w:pe().validateOnInput)&&ce(()=>{be(v.path)})}function B(){var w;((w=y().validateOnChange)!==null&&w!==void 0?w:pe().validateOnChange)&&ce(()=>{be(v.path)})}const k=A(()=>{const w={onChange:B,onInput:h,onBlur:V};return L(r)?Object.assign(Object.assign({},w),r(Ne(v,Be)).props||{}):r!=null&&r.props?Object.assign(Object.assign({},w),r.props(Ne(v,Be))):w});return[ve(l,()=>{var w,G,Z;return(Z=(w=y().validateOnModelUpdate)!==null&&w!==void 0?w:(G=pe())===null||G===void 0?void 0:G.validateOnModelUpdate)!==null&&Z!==void 0?Z:!0}),k]}function $t(l){return Array.isArray(l)?l.map(r=>ve(r,!0)):ve(l)}function Gt(l,r){const[o,v]=xe(l,r);function y(){v.value.onBlur()}function V(B){const k=ze(B);O(S(l),k,!1),v.value.onInput()}function h(B){const k=ze(B);O(S(l),k,!1),v.value.onChange()}return A(()=>Object.assign(Object.assign({},v.value),{onBlur:y,onInput:V,onChange:h,value:o.value}))}function Ht(l,r){const[o,v]=xe(l,r),y=F(S(l));function V(h){o.value=h}return A(()=>{const h=L(r)?r(Ne(y,Be)):r||{};return Object.assign({[h.model||"modelValue"]:o.value,[`onUpdate:${h.model||"modelValue"}`]:V},v.value)})}return Object.assign(Object.assign({},m),{values:xt(d),handleReset:()=>He(),submitForm:Wt})}function Hn(e,t,n,a){const u={touched:"some",pending:"some",valid:"every"},i=A(()=>!Y(t,P(n)));function s(){const d=e.value;return te(u).reduce((c,_)=>{const b=u[_];return c[_]=d[b](j=>j[_]),c},{})}const f=Re(s());return Kt(()=>{const d=s();f.touched=d.touched,f.valid=d.valid,f.pending=d.pending}),A(()=>Object.assign(Object.assign({initialValues:P(n)},f),{valid:f.valid&&!te(a.value).length,dirty:i.value}))}function Yn(e,t,n){const a=Dt(n),u=oe(a),i=oe(E(a));function s(f,d){d!=null&&d.force?(u.value=E(f),i.value=E(f)):(u.value=Me(E(u.value)||{},E(f)),i.value=Me(E(i.value)||{},E(f))),d!=null&&d.updateFields&&e.value.forEach(c=>{if(c.touched)return;const b=J(u.value,c.path);he(t,c.path,E(b))})}return{initialValues:u,originalInitialValues:i,setInitialValues:s}}function xn(e,t){return t?{valid:e.valid&&t.valid,errors:[...e.errors,...t.errors]}:e}const Kn=lt({name:"Form",inheritAttrs:!1,props:{as:{type:null,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0},onInvalidSubmit:{type:Function,default:void 0},keepValues:{type:Boolean,default:!1}},setup(e,t){const n=_e(e,"validationSchema"),a=_e(e,"keepValues"),{errors:u,errorBag:i,values:s,meta:f,isSubmitting:d,isValidating:c,submitCount:_,controlledValues:b,validate:j,validateField:g,handleReset:N,resetForm:H,handleSubmit:p,setErrors:q,setFieldError:R,setFieldValue:de,setValues:x,setFieldTouched:z,setTouched:Q,resetField:U}=Gn({validationSchema:n.value?n:void 0,initialValues:e.initialValues,initialErrors:e.initialErrors,initialTouched:e.initialTouched,validateOnMount:e.validateOnMount,keepValuesOnUnmount:a}),ae=p((F,{evt:C})=>{Pt(C)&&C.target.submit()},e.onInvalidSubmit),T=e.onSubmit?p(e.onSubmit,e.onInvalidSubmit):ae;function I(F){ot(F)&&F.preventDefault(),N(),typeof t.attrs.onReset=="function"&&t.attrs.onReset()}function ne(F,C){return p(typeof F=="function"&&!C?F:C,e.onInvalidSubmit)(F)}function ye(){return E(s)}function fe(){return E(f.value)}function K(){return E(u.value)}function W(){return{meta:f.value,errors:u.value,errorBag:i.value,values:s,isSubmitting:d.value,isValidating:c.value,submitCount:_.value,controlledValues:b.value,validate:j,validateField:g,handleSubmit:ne,handleReset:N,submitForm:ae,setErrors:q,setFieldError:R,setFieldValue:de,setValues:x,setFieldTouched:z,setTouched:Q,resetForm:H,resetField:U,getValues:ye,getMeta:fe,getErrors:K}}return t.expose({setFieldError:R,setErrors:q,setFieldValue:de,setValues:x,setFieldTouched:z,setTouched:Q,resetForm:H,validate:j,validateField:g,resetField:U,getValues:ye,getMeta:fe,getErrors:K,values:s,meta:f,errors:u}),function(){const C=e.as==="form"?e.as:e.as?it(e.as):null,le=dt(C,t,W);return C?Te(C,Object.assign(Object.assign(Object.assign({},C==="form"?{novalidate:!0}:{}),t.attrs),{onSubmit:T,onReset:I}),le):le}}}),Zn=Kn,Xn=lt({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(e,t){const n=jt(qe,void 0),a=A(()=>n==null?void 0:n.errors.value[e.name]);function u(){return{message:a.value}}return()=>{if(!a.value)return;const i=e.as?it(e.as):e.as,s=dt(i,t,u),f=Object.assign({role:"alert"},t.attrs);return!i&&(Array.isArray(s)||!s)&&(s!=null&&s.length)?s:(Array.isArray(s)||!s)&&!(s!=null&&s.length)?Te(i||"span",f,a.value):Te(i,f,s)}}}),Jn=Xn,Qn={name:"RegisterPage",components:{Form:Zn,Field:Wn,ErrorMessage:Jn},data(){return{fullName:"",email:"",user:{}}},computed:{...Jt(tn,["users"])},methods:{validateName(e){return e?/^[A-Za-zА-Яа-яЁёІіЇїЄє' -]{2,}$/.test(e)?!0:"This field must be a valid name.":"This field is required."},validateBirth(e){if(!e)return"This field is required.";const t=new Date(e);if(isNaN(t.getTime()))return"Please enter a valid date.";const n=t.getFullYear();return n<1950||n>new Date().getFullYear()?"The year must be greater than 1950 but <= to the current year.":!0},validateEmail(e){return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?!0:"This field must be a valid email address.":"This field is required."},saveUser(){this.user={id:Date.now(),name:this.fullName,email:this.email},this.users.push(this.user),alert("You are registered"),this.$router.push({name:"EventsPage"})}}},er={class:"form__field"},tr={class:"form__field"},nr={class:"form__field"},rr={class:"form__field"},ar={class:"form__radioGroup"},lr={class:"form__radioLabel"},ir={class:"form__radioLabel"},ur={class:"form__radioLabel"},or={class:"form__actions"};function sr(e,t,n,a,u,i){const s=Pe("Field"),f=Pe("ErrorMessage"),d=Pe("RouterLink"),c=Pe("Form");return en(),Qt(c,{class:"form",onSubmit:i.saveUser},{default:ht(()=>[X("div",er,[t[2]||(t[2]=X("label",{for:"full__name",class:"form__label"}," Full name ",-1)),ue(s,{rules:i.validateName,id:"full__name",class:"form__input",type:"text",name:"full_name",placeholder:"Full name",modelValue:u.fullName,"onUpdate:modelValue":t[0]||(t[0]=_=>u.fullName=_)},null,8,["rules","modelValue"]),ue(f,{name:"full_name",class:"form__error"})]),X("div",tr,[t[3]||(t[3]=X("label",{for:"email",class:"form__label"}," Email ",-1)),ue(s,{rules:i.validateEmail,id:"email",class:"form__input",type:"email",name:"email",placeholder:"Email",modelValue:u.email,"onUpdate:modelValue":t[1]||(t[1]=_=>u.email=_)},null,8,["rules","modelValue"]),ue(f,{name:"email",class:"form__error"})]),X("div",nr,[t[4]||(t[4]=X("label",{for:"birth",class:"form__label"}," Date of birth ",-1)),ue(s,{rules:i.validateBirth,id:"birth",class:"form__input",type:"date",name:"birth__date",placeholder:"Birth date"},null,8,["rules"]),ue(f,{name:"birth__date",class:"form__error"})]),X("div",rr,[t[8]||(t[8]=X("label",{class:"form__label"},"Where did you hear about this event?",-1)),X("div",ar,[X("label",lr,[ue(s,{type:"radio",name:"source",value:"socialMedia",class:"form__radio"}),t[5]||(t[5]=we(" Social Media "))]),X("label",ir,[ue(s,{type:"radio",name:"source",value:"friends",class:"form__radio"}),t[6]||(t[6]=we(" Friends "))]),X("label",ur,[ue(s,{type:"radio",name:"source",value:"foundMyself",class:"form__radio"}),t[7]||(t[7]=we(" Found myself "))])]),ue(f,{name:"source",class:"form__error"})]),X("div",or,[t[10]||(t[10]=X("button",{type:"submit",class:"form__button"},"Registration",-1)),ue(d,{class:"form__allEvents",to:{name:"EventsPage"}},{default:ht(()=>t[9]||(t[9]=[we("All events")])),_:1})])]),_:1},8,["onSubmit"])}const fr=Xt(Qn,[["render",sr],["__scopeId","data-v-3e872eba"]]);export{fr as default};
