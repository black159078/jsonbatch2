(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))h(u);new MutationObserver(u=>{for(const y of u)if(y.type==="childList")for(const E of y.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&h(E)}).observe(document,{childList:!0,subtree:!0});function s(u){const y={};return u.integrity&&(y.integrity=u.integrity),u.referrerPolicy&&(y.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?y.credentials="include":u.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function h(u){if(u.ep)return;u.ep=!0;const y=s(u);fetch(u.href,y)}})();var hi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=function(r){const n=[];let s=0;for(let h=0;h<r.length;h++){let u=r.charCodeAt(h);u<128?n[s++]=u:u<2048?(n[s++]=u>>6|192,n[s++]=u&63|128):(u&64512)===55296&&h+1<r.length&&(r.charCodeAt(h+1)&64512)===56320?(u=65536+((u&1023)<<10)+(r.charCodeAt(++h)&1023),n[s++]=u>>18|240,n[s++]=u>>12&63|128,n[s++]=u>>6&63|128,n[s++]=u&63|128):(n[s++]=u>>12|224,n[s++]=u>>6&63|128,n[s++]=u&63|128)}return n},Tr=function(r){const n=[];let s=0,h=0;for(;s<r.length;){const u=r[s++];if(u<128)n[h++]=String.fromCharCode(u);else if(u>191&&u<224){const y=r[s++];n[h++]=String.fromCharCode((u&31)<<6|y&63)}else if(u>239&&u<365){const y=r[s++],E=r[s++],_=r[s++],A=((u&7)<<18|(y&63)<<12|(E&63)<<6|_&63)-65536;n[h++]=String.fromCharCode(55296+(A>>10)),n[h++]=String.fromCharCode(56320+(A&1023))}else{const y=r[s++],E=r[s++];n[h++]=String.fromCharCode((u&15)<<12|(y&63)<<6|E&63)}}return n.join("")},Di={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,n){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=n?this.byteToCharMapWebSafe_:this.byteToCharMap_,h=[];for(let u=0;u<r.length;u+=3){const y=r[u],E=u+1<r.length,_=E?r[u+1]:0,A=u+2<r.length,T=A?r[u+2]:0,Z=y>>2,z=(y&3)<<4|_>>4;let P=(_&15)<<2|T>>6,G=T&63;A||(G=64,E||(P=64)),h.push(s[Z],s[z],s[P],s[G])}return h.join("")},encodeString(r,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(r):this.encodeByteArray(bi(r),n)},decodeString(r,n){return this.HAS_NATIVE_SUPPORT&&!n?atob(r):Tr(this.decodeStringToByteArray(r,n))},decodeStringToByteArray(r,n){this.init_();const s=n?this.charToByteMapWebSafe_:this.charToByteMap_,h=[];for(let u=0;u<r.length;){const y=s[r.charAt(u++)],_=u<r.length?s[r.charAt(u)]:0;++u;const T=u<r.length?s[r.charAt(u)]:64;++u;const z=u<r.length?s[r.charAt(u)]:64;if(++u,y==null||_==null||T==null||z==null)throw new Ir;const P=y<<2|_>>4;if(h.push(P),T!==64){const G=_<<4&240|T>>2;if(h.push(G),z!==64){const b=T<<6&192|z;h.push(b)}}}return h},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Ir extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sr=function(r){const n=bi(r);return Di.encodeByteArray(n,!0)},pe=function(r){return Sr(r).replace(/\./g,"")},br=function(r){try{return Di.decodeString(r,!0)}catch(n){console.error("base64Decode failed: ",n)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=()=>Dr().__FIREBASE_DEFAULTS__,Rr=()=>{if(typeof process>"u"||typeof hi>"u")return;const r=hi.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Pr=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const n=r&&br(r[1]);return n&&JSON.parse(n)},Ci=()=>{try{return Cr()||Rr()||Pr()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Or=r=>{var n,s;return(s=(n=Ci())===null||n===void 0?void 0:n.emulatorHosts)===null||s===void 0?void 0:s[r]},Nr=r=>{const n=Or(r);if(!n)return;const s=n.lastIndexOf(":");if(s<=0||s+1===n.length)throw new Error(`Invalid host ${n} with no separate hostname and port!`);const h=parseInt(n.substring(s+1),10);return n[0]==="["?[n.substring(1,s-1),h]:[n.substring(0,s),h]},Ri=()=>{var r;return(r=Ci())===null||r===void 0?void 0:r.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((n,s)=>{this.resolve=n,this.reject=s})}wrapCallback(n){return(s,h)=>{s?this.reject(s):this.resolve(h),typeof n=="function"&&(this.promise.catch(()=>{}),n.length===1?n(s):n(s,h))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(r,n){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const s={alg:"none",type:"JWT"},h=n||"demo-project",u=r.iat||0,y=r.sub||r.user_id;if(!y)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const E=Object.assign({iss:`https://securetoken.google.com/${h}`,aud:h,iat:u,exp:u+3600,auth_time:u,sub:y,user_id:y,firebase:{sign_in_provider:"custom",identities:{}}},r);return[pe(JSON.stringify(s)),pe(JSON.stringify(E)),""].join(".")}function Mr(){try{return typeof indexedDB=="object"}catch{return!1}}function jr(){return new Promise((r,n)=>{try{let s=!0;const h="validate-browser-context-for-indexeddb-analytics-module",u=self.indexedDB.open(h);u.onsuccess=()=>{u.result.close(),s||self.indexedDB.deleteDatabase(h),r(!0)},u.onupgradeneeded=()=>{s=!1},u.onerror=()=>{var y;n(((y=u.error)===null||y===void 0?void 0:y.message)||"")}}catch(s){n(s)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="FirebaseError";class St extends Error{constructor(n,s,h){super(s),this.code=n,this.customData=h,this.name=Br,Object.setPrototypeOf(this,St.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pi.prototype.create)}}class Pi{constructor(n,s,h){this.service=n,this.serviceName=s,this.errors=h}create(n,...s){const h=s[0]||{},u=`${this.service}/${n}`,y=this.errors[n],E=y?xr(y,h):"Error",_=`${this.serviceName}: ${E} (${u}).`;return new St(u,_,h)}}function xr(r,n){return r.replace(Ur,(s,h)=>{const u=n[h];return u!=null?String(u):`<${h}?>`})}const Ur=/\{\$([^}]+)}/g;function Ye(r,n){if(r===n)return!0;const s=Object.keys(r),h=Object.keys(n);for(const u of s){if(!h.includes(u))return!1;const y=r[u],E=n[u];if(ai(y)&&ai(E)){if(!Ye(y,E))return!1}else if(y!==E)return!1}for(const u of h)if(!s.includes(u))return!1;return!0}function ai(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(r){return r&&r._delegate?r._delegate:r}class Gt{constructor(n,s,h){this.name=n,this.instanceFactory=s,this.type=h,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(n){return this.instantiationMode=n,this}setMultipleInstances(n){return this.multipleInstances=n,this}setServiceProps(n){return this.serviceProps=n,this}setInstanceCreatedCallback(n){return this.onInstanceCreated=n,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(n,s){this.name=n,this.container=s,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(n){const s=this.normalizeInstanceIdentifier(n);if(!this.instancesDeferred.has(s)){const h=new Lr;if(this.instancesDeferred.set(s,h),this.isInitialized(s)||this.shouldAutoInitialize())try{const u=this.getOrInitializeService({instanceIdentifier:s});u&&h.resolve(u)}catch{}}return this.instancesDeferred.get(s).promise}getImmediate(n){var s;const h=this.normalizeInstanceIdentifier(n==null?void 0:n.identifier),u=(s=n==null?void 0:n.optional)!==null&&s!==void 0?s:!1;if(this.isInitialized(h)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:h})}catch(y){if(u)return null;throw y}else{if(u)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(n){if(n.name!==this.name)throw Error(`Mismatching Component ${n.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=n,!!this.shouldAutoInitialize()){if(Vr(n))try{this.getOrInitializeService({instanceIdentifier:gt})}catch{}for(const[s,h]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);try{const y=this.getOrInitializeService({instanceIdentifier:u});h.resolve(y)}catch{}}}}clearInstance(n=gt){this.instancesDeferred.delete(n),this.instancesOptions.delete(n),this.instances.delete(n)}async delete(){const n=Array.from(this.instances.values());await Promise.all([...n.filter(s=>"INTERNAL"in s).map(s=>s.INTERNAL.delete()),...n.filter(s=>"_delete"in s).map(s=>s._delete())])}isComponentSet(){return this.component!=null}isInitialized(n=gt){return this.instances.has(n)}getOptions(n=gt){return this.instancesOptions.get(n)||{}}initialize(n={}){const{options:s={}}=n,h=this.normalizeInstanceIdentifier(n.instanceIdentifier);if(this.isInitialized(h))throw Error(`${this.name}(${h}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const u=this.getOrInitializeService({instanceIdentifier:h,options:s});for(const[y,E]of this.instancesDeferred.entries()){const _=this.normalizeInstanceIdentifier(y);h===_&&E.resolve(u)}return u}onInit(n,s){var h;const u=this.normalizeInstanceIdentifier(s),y=(h=this.onInitCallbacks.get(u))!==null&&h!==void 0?h:new Set;y.add(n),this.onInitCallbacks.set(u,y);const E=this.instances.get(u);return E&&n(E,u),()=>{y.delete(n)}}invokeOnInitCallbacks(n,s){const h=this.onInitCallbacks.get(s);if(h)for(const u of h)try{u(n,s)}catch{}}getOrInitializeService({instanceIdentifier:n,options:s={}}){let h=this.instances.get(n);if(!h&&this.component&&(h=this.component.instanceFactory(this.container,{instanceIdentifier:$r(n),options:s}),this.instances.set(n,h),this.instancesOptions.set(n,s),this.invokeOnInitCallbacks(h,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,h)}catch{}return h||null}normalizeInstanceIdentifier(n=gt){return this.component?this.component.multipleInstances?n:gt:n}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $r(r){return r===gt?void 0:r}function Vr(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(n){this.name=n,this.providers=new Map}addComponent(n){const s=this.getProvider(n.name);if(s.isComponentSet())throw new Error(`Component ${n.name} has already been registered with ${this.name}`);s.setComponent(n)}addOrOverwriteComponent(n){this.getProvider(n.name).isComponentSet()&&this.providers.delete(n.name),this.addComponent(n)}getProvider(n){if(this.providers.has(n))return this.providers.get(n);const s=new Hr(n,this);return this.providers.set(n,s),s}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(D||(D={}));const Gr={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Xr=D.INFO,Wr={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},Kr=(r,n,...s)=>{if(n<r.logLevel)return;const h=new Date().toISOString(),u=Wr[n];if(u)console[u](`[${h}]  ${r.name}:`,...s);else throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`)};class Oi{constructor(n){this.name=n,this._logLevel=Xr,this._logHandler=Kr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(n){if(!(n in D))throw new TypeError(`Invalid value "${n}" assigned to \`logLevel\``);this._logLevel=n}setLogLevel(n){this._logLevel=typeof n=="string"?Gr[n]:n}get logHandler(){return this._logHandler}set logHandler(n){if(typeof n!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=n}get userLogHandler(){return this._userLogHandler}set userLogHandler(n){this._userLogHandler=n}debug(...n){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...n),this._logHandler(this,D.DEBUG,...n)}log(...n){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...n),this._logHandler(this,D.VERBOSE,...n)}info(...n){this._userLogHandler&&this._userLogHandler(this,D.INFO,...n),this._logHandler(this,D.INFO,...n)}warn(...n){this._userLogHandler&&this._userLogHandler(this,D.WARN,...n),this._logHandler(this,D.WARN,...n)}error(...n){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...n),this._logHandler(this,D.ERROR,...n)}}const qr=(r,n)=>n.some(s=>r instanceof s);let li,ui;function Jr(){return li||(li=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yr(){return ui||(ui=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ni=new WeakMap,Qe=new WeakMap,Li=new WeakMap,Ge=new WeakMap,rn=new WeakMap;function Qr(r){const n=new Promise((s,h)=>{const u=()=>{r.removeEventListener("success",y),r.removeEventListener("error",E)},y=()=>{s(lt(r.result)),u()},E=()=>{h(r.error),u()};r.addEventListener("success",y),r.addEventListener("error",E)});return n.then(s=>{s instanceof IDBCursor&&Ni.set(s,r)}).catch(()=>{}),rn.set(n,r),n}function Zr(r){if(Qe.has(r))return;const n=new Promise((s,h)=>{const u=()=>{r.removeEventListener("complete",y),r.removeEventListener("error",E),r.removeEventListener("abort",E)},y=()=>{s(),u()},E=()=>{h(r.error||new DOMException("AbortError","AbortError")),u()};r.addEventListener("complete",y),r.addEventListener("error",E),r.addEventListener("abort",E)});Qe.set(r,n)}let Ze={get(r,n,s){if(r instanceof IDBTransaction){if(n==="done")return Qe.get(r);if(n==="objectStoreNames")return r.objectStoreNames||Li.get(r);if(n==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return lt(r[n])},set(r,n,s){return r[n]=s,!0},has(r,n){return r instanceof IDBTransaction&&(n==="done"||n==="store")?!0:n in r}};function ts(r){Ze=r(Ze)}function es(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(n,...s){const h=r.call(Xe(this),n,...s);return Li.set(h,n.sort?n.sort():[n]),lt(h)}:Yr().includes(r)?function(...n){return r.apply(Xe(this),n),lt(Ni.get(this))}:function(...n){return lt(r.apply(Xe(this),n))}}function ns(r){return typeof r=="function"?es(r):(r instanceof IDBTransaction&&Zr(r),qr(r,Jr())?new Proxy(r,Ze):r)}function lt(r){if(r instanceof IDBRequest)return Qr(r);if(Ge.has(r))return Ge.get(r);const n=ns(r);return n!==r&&(Ge.set(r,n),rn.set(n,r)),n}const Xe=r=>rn.get(r);function is(r,n,{blocked:s,upgrade:h,blocking:u,terminated:y}={}){const E=indexedDB.open(r,n),_=lt(E);return h&&E.addEventListener("upgradeneeded",A=>{h(lt(E.result),A.oldVersion,A.newVersion,lt(E.transaction),A)}),s&&E.addEventListener("blocked",A=>s(A.oldVersion,A.newVersion,A)),_.then(A=>{y&&A.addEventListener("close",()=>y()),u&&A.addEventListener("versionchange",T=>u(T.oldVersion,T.newVersion,T))}).catch(()=>{}),_}const rs=["get","getKey","getAll","getAllKeys","count"],ss=["put","add","delete","clear"],We=new Map;function ci(r,n){if(!(r instanceof IDBDatabase&&!(n in r)&&typeof n=="string"))return;if(We.get(n))return We.get(n);const s=n.replace(/FromIndex$/,""),h=n!==s,u=ss.includes(s);if(!(s in(h?IDBIndex:IDBObjectStore).prototype)||!(u||rs.includes(s)))return;const y=async function(E,..._){const A=this.transaction(E,u?"readwrite":"readonly");let T=A.store;return h&&(T=T.index(_.shift())),(await Promise.all([T[s](..._),u&&A.done]))[0]};return We.set(n,y),y}ts(r=>({...r,get:(n,s,h)=>ci(n,s)||r.get(n,s,h),has:(n,s)=>!!ci(n,s)||r.has(n,s)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(n){this.container=n}getPlatformInfoString(){return this.container.getProviders().map(s=>{if(hs(s)){const h=s.getImmediate();return`${h.library}/${h.version}`}else return null}).filter(s=>s).join(" ")}}function hs(r){const n=r.getComponent();return(n==null?void 0:n.type)==="VERSION"}const tn="@firebase/app",fi="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=new Oi("@firebase/app"),as="@firebase/app-compat",ls="@firebase/analytics-compat",us="@firebase/analytics",cs="@firebase/app-check-compat",fs="@firebase/app-check",ps="@firebase/auth",gs="@firebase/auth-compat",ds="@firebase/database",ms="@firebase/data-connect",ys="@firebase/database-compat",vs="@firebase/functions",Es="@firebase/functions-compat",_s="@firebase/installations",ws="@firebase/installations-compat",As="@firebase/messaging",Ts="@firebase/messaging-compat",Is="@firebase/performance",Ss="@firebase/performance-compat",bs="@firebase/remote-config",Ds="@firebase/remote-config-compat",Cs="@firebase/storage",Rs="@firebase/storage-compat",Ps="@firebase/firestore",Os="@firebase/vertexai",Ns="@firebase/firestore-compat",Ls="firebase",ks="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en="[DEFAULT]",Ms={[tn]:"fire-core",[as]:"fire-core-compat",[us]:"fire-analytics",[ls]:"fire-analytics-compat",[fs]:"fire-app-check",[cs]:"fire-app-check-compat",[ps]:"fire-auth",[gs]:"fire-auth-compat",[ds]:"fire-rtdb",[ms]:"fire-data-connect",[ys]:"fire-rtdb-compat",[vs]:"fire-fn",[Es]:"fire-fn-compat",[_s]:"fire-iid",[ws]:"fire-iid-compat",[As]:"fire-fcm",[Ts]:"fire-fcm-compat",[Is]:"fire-perf",[Ss]:"fire-perf-compat",[bs]:"fire-rc",[Ds]:"fire-rc-compat",[Cs]:"fire-gcs",[Rs]:"fire-gcs-compat",[Ps]:"fire-fst",[Ns]:"fire-fst-compat",[Os]:"fire-vertex","fire-js":"fire-js",[Ls]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge=new Map,js=new Map,nn=new Map;function pi(r,n){try{r.container.addComponent(n)}catch(s){it.debug(`Component ${n.name} failed to register with FirebaseApp ${r.name}`,s)}}function de(r){const n=r.name;if(nn.has(n))return it.debug(`There were multiple attempts to register component ${n}.`),!1;nn.set(n,r);for(const s of ge.values())pi(s,r);for(const s of js.values())pi(s,r);return!0}function Bs(r,n){const s=r.container.getProvider("heartbeat").getImmediate({optional:!0});return s&&s.triggerHeartbeat(),r.container.getProvider(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ut=new Pi("app","Firebase",xs);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(n,s,h){this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},s),this._name=s.name,this._automaticDataCollectionEnabled=s.automaticDataCollectionEnabled,this._container=h,this.container.addComponent(new Gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(n){this.checkDestroyed(),this._automaticDataCollectionEnabled=n}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(n){this._isDeleted=n}checkDestroyed(){if(this.isDeleted)throw ut.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=ks;function ki(r,n={}){let s=r;typeof n!="object"&&(n={name:n});const h=Object.assign({name:en,automaticDataCollectionEnabled:!1},n),u=h.name;if(typeof u!="string"||!u)throw ut.create("bad-app-name",{appName:String(u)});if(s||(s=Ri()),!s)throw ut.create("no-options");const y=ge.get(u);if(y){if(Ye(s,y.options)&&Ye(h,y.config))return y;throw ut.create("duplicate-app",{appName:u})}const E=new zr(u);for(const A of nn.values())E.addComponent(A);const _=new Us(s,h,E);return ge.set(u,_),_}function Hs(r=en){const n=ge.get(r);if(!n&&r===en&&Ri())return ki();if(!n)throw ut.create("no-app",{appName:r});return n}function At(r,n,s){var h;let u=(h=Ms[r])!==null&&h!==void 0?h:r;s&&(u+=`-${s}`);const y=u.match(/\s|\//),E=n.match(/\s|\//);if(y||E){const _=[`Unable to register library "${u}" with version "${n}":`];y&&_.push(`library name "${u}" contains illegal characters (whitespace or "/")`),y&&E&&_.push("and"),E&&_.push(`version name "${n}" contains illegal characters (whitespace or "/")`),it.warn(_.join(" "));return}de(new Gt(`${u}-version`,()=>({library:u,version:n}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s="firebase-heartbeat-database",Vs=1,Xt="firebase-heartbeat-store";let Ke=null;function Mi(){return Ke||(Ke=is($s,Vs,{upgrade:(r,n)=>{switch(n){case 0:try{r.createObjectStore(Xt)}catch(s){console.warn(s)}}}}).catch(r=>{throw ut.create("idb-open",{originalErrorMessage:r.message})})),Ke}async function zs(r){try{const s=(await Mi()).transaction(Xt),h=await s.objectStore(Xt).get(ji(r));return await s.done,h}catch(n){if(n instanceof St)it.warn(n.message);else{const s=ut.create("idb-get",{originalErrorMessage:n==null?void 0:n.message});it.warn(s.message)}}}async function gi(r,n){try{const h=(await Mi()).transaction(Xt,"readwrite");await h.objectStore(Xt).put(n,ji(r)),await h.done}catch(s){if(s instanceof St)it.warn(s.message);else{const h=ut.create("idb-set",{originalErrorMessage:s==null?void 0:s.message});it.warn(h.message)}}}function ji(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=1024,Xs=30*24*60*60*1e3;class Ws{constructor(n){this.container=n,this._heartbeatsCache=null;const s=this.container.getProvider("app").getImmediate();this._storage=new qs(s),this._heartbeatsCachePromise=this._storage.read().then(h=>(this._heartbeatsCache=h,h))}async triggerHeartbeat(){var n,s;try{const u=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),y=di();return((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((s=this._heartbeatsCache)===null||s===void 0?void 0:s.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===y||this._heartbeatsCache.heartbeats.some(E=>E.date===y)?void 0:(this._heartbeatsCache.heartbeats.push({date:y,agent:u}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(E=>{const _=new Date(E.date).valueOf();return Date.now()-_<=Xs}),this._storage.overwrite(this._heartbeatsCache))}catch(h){it.warn(h)}}async getHeartbeatsHeader(){var n;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const s=di(),{heartbeatsToSend:h,unsentEntries:u}=Ks(this._heartbeatsCache.heartbeats),y=pe(JSON.stringify({version:2,heartbeats:h}));return this._heartbeatsCache.lastSentHeartbeatDate=s,u.length>0?(this._heartbeatsCache.heartbeats=u,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),y}catch(s){return it.warn(s),""}}}function di(){return new Date().toISOString().substring(0,10)}function Ks(r,n=Gs){const s=[];let h=r.slice();for(const u of r){const y=s.find(E=>E.agent===u.agent);if(y){if(y.dates.push(u.date),mi(s)>n){y.dates.pop();break}}else if(s.push({agent:u.agent,dates:[u.date]}),mi(s)>n){s.pop();break}h=h.slice(1)}return{heartbeatsToSend:s,unsentEntries:h}}class qs{constructor(n){this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mr()?jr().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const s=await zs(this.app);return s!=null&&s.heartbeats?s:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(n){var s;if(await this._canUseIndexedDBPromise){const u=await this.read();return gi(this.app,{lastSentHeartbeatDate:(s=n.lastSentHeartbeatDate)!==null&&s!==void 0?s:u.lastSentHeartbeatDate,heartbeats:n.heartbeats})}else return}async add(n){var s;if(await this._canUseIndexedDBPromise){const u=await this.read();return gi(this.app,{lastSentHeartbeatDate:(s=n.lastSentHeartbeatDate)!==null&&s!==void 0?s:u.lastSentHeartbeatDate,heartbeats:[...u.heartbeats,...n.heartbeats]})}else return}}function mi(r){return pe(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(r){de(new Gt("platform-logger",n=>new os(n),"PRIVATE")),de(new Gt("heartbeat",n=>new Ws(n),"PRIVATE")),At(tn,fi,r),At(tn,fi,"esm2017"),At("fire-js","")}Js("");var Ys="firebase",Qs="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At(Ys,Qs,"app");var yi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bi;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function n(g,a){function c(){}c.prototype=a.prototype,g.D=a.prototype,g.prototype=new c,g.prototype.constructor=g,g.C=function(f,p,m){for(var l=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)l[tt-2]=arguments[tt];return a.prototype[p].apply(f,l)}}function s(){this.blockSize=-1}function h(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}n(h,s),h.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function u(g,a,c){c||(c=0);var f=Array(16);if(typeof a=="string")for(var p=0;16>p;++p)f[p]=a.charCodeAt(c++)|a.charCodeAt(c++)<<8|a.charCodeAt(c++)<<16|a.charCodeAt(c++)<<24;else for(p=0;16>p;++p)f[p]=a[c++]|a[c++]<<8|a[c++]<<16|a[c++]<<24;a=g.g[0],c=g.g[1],p=g.g[2];var m=g.g[3],l=a+(m^c&(p^m))+f[0]+3614090360&4294967295;a=c+(l<<7&4294967295|l>>>25),l=m+(p^a&(c^p))+f[1]+3905402710&4294967295,m=a+(l<<12&4294967295|l>>>20),l=p+(c^m&(a^c))+f[2]+606105819&4294967295,p=m+(l<<17&4294967295|l>>>15),l=c+(a^p&(m^a))+f[3]+3250441966&4294967295,c=p+(l<<22&4294967295|l>>>10),l=a+(m^c&(p^m))+f[4]+4118548399&4294967295,a=c+(l<<7&4294967295|l>>>25),l=m+(p^a&(c^p))+f[5]+1200080426&4294967295,m=a+(l<<12&4294967295|l>>>20),l=p+(c^m&(a^c))+f[6]+2821735955&4294967295,p=m+(l<<17&4294967295|l>>>15),l=c+(a^p&(m^a))+f[7]+4249261313&4294967295,c=p+(l<<22&4294967295|l>>>10),l=a+(m^c&(p^m))+f[8]+1770035416&4294967295,a=c+(l<<7&4294967295|l>>>25),l=m+(p^a&(c^p))+f[9]+2336552879&4294967295,m=a+(l<<12&4294967295|l>>>20),l=p+(c^m&(a^c))+f[10]+4294925233&4294967295,p=m+(l<<17&4294967295|l>>>15),l=c+(a^p&(m^a))+f[11]+2304563134&4294967295,c=p+(l<<22&4294967295|l>>>10),l=a+(m^c&(p^m))+f[12]+1804603682&4294967295,a=c+(l<<7&4294967295|l>>>25),l=m+(p^a&(c^p))+f[13]+4254626195&4294967295,m=a+(l<<12&4294967295|l>>>20),l=p+(c^m&(a^c))+f[14]+2792965006&4294967295,p=m+(l<<17&4294967295|l>>>15),l=c+(a^p&(m^a))+f[15]+1236535329&4294967295,c=p+(l<<22&4294967295|l>>>10),l=a+(p^m&(c^p))+f[1]+4129170786&4294967295,a=c+(l<<5&4294967295|l>>>27),l=m+(c^p&(a^c))+f[6]+3225465664&4294967295,m=a+(l<<9&4294967295|l>>>23),l=p+(a^c&(m^a))+f[11]+643717713&4294967295,p=m+(l<<14&4294967295|l>>>18),l=c+(m^a&(p^m))+f[0]+3921069994&4294967295,c=p+(l<<20&4294967295|l>>>12),l=a+(p^m&(c^p))+f[5]+3593408605&4294967295,a=c+(l<<5&4294967295|l>>>27),l=m+(c^p&(a^c))+f[10]+38016083&4294967295,m=a+(l<<9&4294967295|l>>>23),l=p+(a^c&(m^a))+f[15]+3634488961&4294967295,p=m+(l<<14&4294967295|l>>>18),l=c+(m^a&(p^m))+f[4]+3889429448&4294967295,c=p+(l<<20&4294967295|l>>>12),l=a+(p^m&(c^p))+f[9]+568446438&4294967295,a=c+(l<<5&4294967295|l>>>27),l=m+(c^p&(a^c))+f[14]+3275163606&4294967295,m=a+(l<<9&4294967295|l>>>23),l=p+(a^c&(m^a))+f[3]+4107603335&4294967295,p=m+(l<<14&4294967295|l>>>18),l=c+(m^a&(p^m))+f[8]+1163531501&4294967295,c=p+(l<<20&4294967295|l>>>12),l=a+(p^m&(c^p))+f[13]+2850285829&4294967295,a=c+(l<<5&4294967295|l>>>27),l=m+(c^p&(a^c))+f[2]+4243563512&4294967295,m=a+(l<<9&4294967295|l>>>23),l=p+(a^c&(m^a))+f[7]+1735328473&4294967295,p=m+(l<<14&4294967295|l>>>18),l=c+(m^a&(p^m))+f[12]+2368359562&4294967295,c=p+(l<<20&4294967295|l>>>12),l=a+(c^p^m)+f[5]+4294588738&4294967295,a=c+(l<<4&4294967295|l>>>28),l=m+(a^c^p)+f[8]+2272392833&4294967295,m=a+(l<<11&4294967295|l>>>21),l=p+(m^a^c)+f[11]+1839030562&4294967295,p=m+(l<<16&4294967295|l>>>16),l=c+(p^m^a)+f[14]+4259657740&4294967295,c=p+(l<<23&4294967295|l>>>9),l=a+(c^p^m)+f[1]+2763975236&4294967295,a=c+(l<<4&4294967295|l>>>28),l=m+(a^c^p)+f[4]+1272893353&4294967295,m=a+(l<<11&4294967295|l>>>21),l=p+(m^a^c)+f[7]+4139469664&4294967295,p=m+(l<<16&4294967295|l>>>16),l=c+(p^m^a)+f[10]+3200236656&4294967295,c=p+(l<<23&4294967295|l>>>9),l=a+(c^p^m)+f[13]+681279174&4294967295,a=c+(l<<4&4294967295|l>>>28),l=m+(a^c^p)+f[0]+3936430074&4294967295,m=a+(l<<11&4294967295|l>>>21),l=p+(m^a^c)+f[3]+3572445317&4294967295,p=m+(l<<16&4294967295|l>>>16),l=c+(p^m^a)+f[6]+76029189&4294967295,c=p+(l<<23&4294967295|l>>>9),l=a+(c^p^m)+f[9]+3654602809&4294967295,a=c+(l<<4&4294967295|l>>>28),l=m+(a^c^p)+f[12]+3873151461&4294967295,m=a+(l<<11&4294967295|l>>>21),l=p+(m^a^c)+f[15]+530742520&4294967295,p=m+(l<<16&4294967295|l>>>16),l=c+(p^m^a)+f[2]+3299628645&4294967295,c=p+(l<<23&4294967295|l>>>9),l=a+(p^(c|~m))+f[0]+4096336452&4294967295,a=c+(l<<6&4294967295|l>>>26),l=m+(c^(a|~p))+f[7]+1126891415&4294967295,m=a+(l<<10&4294967295|l>>>22),l=p+(a^(m|~c))+f[14]+2878612391&4294967295,p=m+(l<<15&4294967295|l>>>17),l=c+(m^(p|~a))+f[5]+4237533241&4294967295,c=p+(l<<21&4294967295|l>>>11),l=a+(p^(c|~m))+f[12]+1700485571&4294967295,a=c+(l<<6&4294967295|l>>>26),l=m+(c^(a|~p))+f[3]+2399980690&4294967295,m=a+(l<<10&4294967295|l>>>22),l=p+(a^(m|~c))+f[10]+4293915773&4294967295,p=m+(l<<15&4294967295|l>>>17),l=c+(m^(p|~a))+f[1]+2240044497&4294967295,c=p+(l<<21&4294967295|l>>>11),l=a+(p^(c|~m))+f[8]+1873313359&4294967295,a=c+(l<<6&4294967295|l>>>26),l=m+(c^(a|~p))+f[15]+4264355552&4294967295,m=a+(l<<10&4294967295|l>>>22),l=p+(a^(m|~c))+f[6]+2734768916&4294967295,p=m+(l<<15&4294967295|l>>>17),l=c+(m^(p|~a))+f[13]+1309151649&4294967295,c=p+(l<<21&4294967295|l>>>11),l=a+(p^(c|~m))+f[4]+4149444226&4294967295,a=c+(l<<6&4294967295|l>>>26),l=m+(c^(a|~p))+f[11]+3174756917&4294967295,m=a+(l<<10&4294967295|l>>>22),l=p+(a^(m|~c))+f[2]+718787259&4294967295,p=m+(l<<15&4294967295|l>>>17),l=c+(m^(p|~a))+f[9]+3951481745&4294967295,g.g[0]=g.g[0]+a&4294967295,g.g[1]=g.g[1]+(p+(l<<21&4294967295|l>>>11))&4294967295,g.g[2]=g.g[2]+p&4294967295,g.g[3]=g.g[3]+m&4294967295}h.prototype.u=function(g,a){a===void 0&&(a=g.length);for(var c=a-this.blockSize,f=this.B,p=this.h,m=0;m<a;){if(p==0)for(;m<=c;)u(this,g,m),m+=this.blockSize;if(typeof g=="string"){for(;m<a;)if(f[p++]=g.charCodeAt(m++),p==this.blockSize){u(this,f),p=0;break}}else for(;m<a;)if(f[p++]=g[m++],p==this.blockSize){u(this,f),p=0;break}}this.h=p,this.o+=a},h.prototype.v=function(){var g=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);g[0]=128;for(var a=1;a<g.length-8;++a)g[a]=0;var c=8*this.o;for(a=g.length-8;a<g.length;++a)g[a]=c&255,c/=256;for(this.u(g),g=Array(16),a=c=0;4>a;++a)for(var f=0;32>f;f+=8)g[c++]=this.g[a]>>>f&255;return g};function y(g,a){var c=_;return Object.prototype.hasOwnProperty.call(c,g)?c[g]:c[g]=a(g)}function E(g,a){this.h=a;for(var c=[],f=!0,p=g.length-1;0<=p;p--){var m=g[p]|0;f&&m==a||(c[p]=m,f=!1)}this.g=c}var _={};function A(g){return-128<=g&&128>g?y(g,function(a){return new E([a|0],0>a?-1:0)}):new E([g|0],0>g?-1:0)}function T(g){if(isNaN(g)||!isFinite(g))return z;if(0>g)return N(T(-g));for(var a=[],c=1,f=0;g>=c;f++)a[f]=g/c|0,c*=4294967296;return new E(a,0)}function Z(g,a){if(g.length==0)throw Error("number format error: empty string");if(a=a||10,2>a||36<a)throw Error("radix out of range: "+a);if(g.charAt(0)=="-")return N(Z(g.substring(1),a));if(0<=g.indexOf("-"))throw Error('number format error: interior "-" character');for(var c=T(Math.pow(a,8)),f=z,p=0;p<g.length;p+=8){var m=Math.min(8,g.length-p),l=parseInt(g.substring(p,p+m),a);8>m?(m=T(Math.pow(a,m)),f=f.j(m).add(T(l))):(f=f.j(c),f=f.add(T(l)))}return f}var z=A(0),P=A(1),G=A(16777216);r=E.prototype,r.m=function(){if(j(this))return-N(this).m();for(var g=0,a=1,c=0;c<this.g.length;c++){var f=this.i(c);g+=(0<=f?f:4294967296+f)*a,a*=4294967296}return g},r.toString=function(g){if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(b(this))return"0";if(j(this))return"-"+N(this).toString(g);for(var a=T(Math.pow(g,6)),c=this,f="";;){var p=rt(c,a).g;c=mt(c,p.j(a));var m=((0<c.g.length?c.g[0]:c.h)>>>0).toString(g);if(c=p,b(c))return m+f;for(;6>m.length;)m="0"+m;f=m+f}},r.i=function(g){return 0>g?0:g<this.g.length?this.g[g]:this.h};function b(g){if(g.h!=0)return!1;for(var a=0;a<g.g.length;a++)if(g.g[a]!=0)return!1;return!0}function j(g){return g.h==-1}r.l=function(g){return g=mt(this,g),j(g)?-1:b(g)?0:1};function N(g){for(var a=g.g.length,c=[],f=0;f<a;f++)c[f]=~g.g[f];return new E(c,~g.h).add(P)}r.abs=function(){return j(this)?N(this):this},r.add=function(g){for(var a=Math.max(this.g.length,g.g.length),c=[],f=0,p=0;p<=a;p++){var m=f+(this.i(p)&65535)+(g.i(p)&65535),l=(m>>>16)+(this.i(p)>>>16)+(g.i(p)>>>16);f=l>>>16,m&=65535,l&=65535,c[p]=l<<16|m}return new E(c,c[c.length-1]&-2147483648?-1:0)};function mt(g,a){return g.add(N(a))}r.j=function(g){if(b(this)||b(g))return z;if(j(this))return j(g)?N(this).j(N(g)):N(N(this).j(g));if(j(g))return N(this.j(N(g)));if(0>this.l(G)&&0>g.l(G))return T(this.m()*g.m());for(var a=this.g.length+g.g.length,c=[],f=0;f<2*a;f++)c[f]=0;for(f=0;f<this.g.length;f++)for(var p=0;p<g.g.length;p++){var m=this.i(f)>>>16,l=this.i(f)&65535,tt=g.i(p)>>>16,bt=g.i(p)&65535;c[2*f+2*p]+=l*bt,Y(c,2*f+2*p),c[2*f+2*p+1]+=m*bt,Y(c,2*f+2*p+1),c[2*f+2*p+1]+=l*tt,Y(c,2*f+2*p+1),c[2*f+2*p+2]+=m*tt,Y(c,2*f+2*p+2)}for(f=0;f<a;f++)c[f]=c[2*f+1]<<16|c[2*f];for(f=a;f<2*a;f++)c[f]=0;return new E(c,0)};function Y(g,a){for(;(g[a]&65535)!=g[a];)g[a+1]+=g[a]>>>16,g[a]&=65535,a++}function X(g,a){this.g=g,this.h=a}function rt(g,a){if(b(a))throw Error("division by zero");if(b(g))return new X(z,z);if(j(g))return a=rt(N(g),a),new X(N(a.g),N(a.h));if(j(a))return a=rt(g,N(a)),new X(N(a.g),a.h);if(30<g.g.length){if(j(g)||j(a))throw Error("slowDivide_ only works with positive integers.");for(var c=P,f=a;0>=f.l(g);)c=qt(c),f=qt(f);var p=Q(c,1),m=Q(f,1);for(f=Q(f,2),c=Q(c,2);!b(f);){var l=m.add(f);0>=l.l(g)&&(p=p.add(c),m=l),f=Q(f,1),c=Q(c,1)}return a=mt(g,p.j(a)),new X(p,a)}for(p=z;0<=g.l(a);){for(c=Math.max(1,Math.floor(g.m()/a.m())),f=Math.ceil(Math.log(c)/Math.LN2),f=48>=f?1:Math.pow(2,f-48),m=T(c),l=m.j(a);j(l)||0<l.l(g);)c-=f,m=T(c),l=m.j(a);b(m)&&(m=P),p=p.add(m),g=mt(g,l)}return new X(p,g)}r.A=function(g){return rt(this,g).h},r.and=function(g){for(var a=Math.max(this.g.length,g.g.length),c=[],f=0;f<a;f++)c[f]=this.i(f)&g.i(f);return new E(c,this.h&g.h)},r.or=function(g){for(var a=Math.max(this.g.length,g.g.length),c=[],f=0;f<a;f++)c[f]=this.i(f)|g.i(f);return new E(c,this.h|g.h)},r.xor=function(g){for(var a=Math.max(this.g.length,g.g.length),c=[],f=0;f<a;f++)c[f]=this.i(f)^g.i(f);return new E(c,this.h^g.h)};function qt(g){for(var a=g.g.length+1,c=[],f=0;f<a;f++)c[f]=g.i(f)<<1|g.i(f-1)>>>31;return new E(c,g.h)}function Q(g,a){var c=a>>5;a%=32;for(var f=g.g.length-c,p=[],m=0;m<f;m++)p[m]=0<a?g.i(m+c)>>>a|g.i(m+c+1)<<32-a:g.i(m+c);return new E(p,g.h)}h.prototype.digest=h.prototype.v,h.prototype.reset=h.prototype.s,h.prototype.update=h.prototype.u,E.prototype.add=E.prototype.add,E.prototype.multiply=E.prototype.j,E.prototype.modulo=E.prototype.A,E.prototype.compare=E.prototype.l,E.prototype.toNumber=E.prototype.m,E.prototype.toString=E.prototype.toString,E.prototype.getBits=E.prototype.i,E.fromNumber=T,E.fromString=Z,Bi=E}).apply(typeof yi<"u"?yi:typeof self<"u"?self:typeof window<"u"?window:{});var fe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var r,n=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,e,i){return t==Array.prototype||t==Object.prototype||(t[e]=i.value),t};function s(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof fe=="object"&&fe];for(var e=0;e<t.length;++e){var i=t[e];if(i&&i.Math==Math)return i}throw Error("Cannot find global object")}var h=s(this);function u(t,e){if(e)t:{var i=h;t=t.split(".");for(var o=0;o<t.length-1;o++){var d=t[o];if(!(d in i))break t;i=i[d]}t=t[t.length-1],o=i[t],e=e(o),e!=o&&e!=null&&n(i,t,{configurable:!0,writable:!0,value:e})}}function y(t,e){t instanceof String&&(t+="");var i=0,o=!1,d={next:function(){if(!o&&i<t.length){var v=i++;return{value:e(v,t[v]),done:!1}}return o=!0,{done:!0,value:void 0}}};return d[Symbol.iterator]=function(){return d},d}u("Array.prototype.values",function(t){return t||function(){return y(this,function(e,i){return i})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var E=E||{},_=this||self;function A(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function T(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Z(t,e,i){return t.call.apply(t.bind,arguments)}function z(t,e,i){if(!t)throw Error();if(2<arguments.length){var o=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(d,o),t.apply(e,d)}}return function(){return t.apply(e,arguments)}}function P(t,e,i){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Z:z,P.apply(null,arguments)}function G(t,e){var i=Array.prototype.slice.call(arguments,1);return function(){var o=i.slice();return o.push.apply(o,arguments),t.apply(this,o)}}function b(t,e){function i(){}i.prototype=e.prototype,t.aa=e.prototype,t.prototype=new i,t.prototype.constructor=t,t.Qb=function(o,d,v){for(var w=Array(arguments.length-2),C=2;C<arguments.length;C++)w[C-2]=arguments[C];return e.prototype[d].apply(o,w)}}function j(t){const e=t.length;if(0<e){const i=Array(e);for(let o=0;o<e;o++)i[o]=t[o];return i}return[]}function N(t,e){for(let i=1;i<arguments.length;i++){const o=arguments[i];if(A(o)){const d=t.length||0,v=o.length||0;t.length=d+v;for(let w=0;w<v;w++)t[d+w]=o[w]}else t.push(o)}}class mt{constructor(e,i){this.i=e,this.j=i,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Y(t){return/^[\s\xa0]*$/.test(t)}function X(){var t=_.navigator;return t&&(t=t.userAgent)?t:""}function rt(t){return rt[" "](t),t}rt[" "]=function(){};var qt=X().indexOf("Gecko")!=-1&&!(X().toLowerCase().indexOf("webkit")!=-1&&X().indexOf("Edge")==-1)&&!(X().indexOf("Trident")!=-1||X().indexOf("MSIE")!=-1)&&X().indexOf("Edge")==-1;function Q(t,e,i){for(const o in t)e.call(i,t[o],o,t)}function g(t,e){for(const i in t)e.call(void 0,t[i],i,t)}function a(t){const e={};for(const i in t)e[i]=t[i];return e}const c="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function f(t,e){let i,o;for(let d=1;d<arguments.length;d++){o=arguments[d];for(i in o)t[i]=o[i];for(let v=0;v<c.length;v++)i=c[v],Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}}function p(t){var e=1;t=t.split(":");const i=[];for(;0<e&&t.length;)i.push(t.shift()),e--;return t.length&&i.push(t.join(":")),i}function m(t){_.setTimeout(()=>{throw t},0)}function l(){var t=Ee;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class tt{constructor(){this.h=this.g=null}add(e,i){const o=bt.get();o.set(e,i),this.h?this.h.next=o:this.g=o,this.h=o}}var bt=new mt(()=>new Fi,t=>t.reset());class Fi{constructor(){this.next=this.g=this.h=null}set(e,i){this.h=e,this.g=i,this.next=null}reset(){this.next=this.g=this.h=null}}let Dt,Ct=!1,Ee=new tt,ln=()=>{const t=_.Promise.resolve(void 0);Dt=()=>{t.then(Hi)}};var Hi=()=>{for(var t;t=l();){try{t.h.call(t.g)}catch(i){m(i)}var e=bt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ct=!1};function st(){this.s=this.s,this.C=this.C}st.prototype.s=!1,st.prototype.ma=function(){this.s||(this.s=!0,this.N())},st.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function B(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}B.prototype.h=function(){this.defaultPrevented=!0};var $i=function(){if(!_.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const i=()=>{};_.addEventListener("test",i,e),_.removeEventListener("test",i,e)}catch{}return t}();function Rt(t,e){if(B.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var i=this.type=t.type,o=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(qt){t:{try{rt(e.nodeName);var d=!0;break t}catch{}d=!1}d||(e=null)}}else i=="mouseover"?e=t.fromElement:i=="mouseout"&&(e=t.toElement);this.relatedTarget=e,o?(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Vi[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Rt.aa.h.call(this)}}b(Rt,B);var Vi={2:"touch",3:"pen",4:"mouse"};Rt.prototype.h=function(){Rt.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Jt="closure_listenable_"+(1e6*Math.random()|0),zi=0;function Gi(t,e,i,o,d){this.listener=t,this.proxy=null,this.src=e,this.type=i,this.capture=!!o,this.ha=d,this.key=++zi,this.da=this.fa=!1}function Yt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Qt(t){this.src=t,this.g={},this.h=0}Qt.prototype.add=function(t,e,i,o,d){var v=t.toString();t=this.g[v],t||(t=this.g[v]=[],this.h++);var w=we(t,e,o,d);return-1<w?(e=t[w],i||(e.fa=!1)):(e=new Gi(e,this.src,v,!!o,d),e.fa=i,t.push(e)),e};function _e(t,e){var i=e.type;if(i in t.g){var o=t.g[i],d=Array.prototype.indexOf.call(o,e,void 0),v;(v=0<=d)&&Array.prototype.splice.call(o,d,1),v&&(Yt(e),t.g[i].length==0&&(delete t.g[i],t.h--))}}function we(t,e,i,o){for(var d=0;d<t.length;++d){var v=t[d];if(!v.da&&v.listener==e&&v.capture==!!i&&v.ha==o)return d}return-1}var Ae="closure_lm_"+(1e6*Math.random()|0),Te={};function un(t,e,i,o,d){if(Array.isArray(e)){for(var v=0;v<e.length;v++)un(t,e[v],i,o,d);return null}return i=pn(i),t&&t[Jt]?t.K(e,i,T(o)?!!o.capture:!!o,d):Xi(t,e,i,!1,o,d)}function Xi(t,e,i,o,d,v){if(!e)throw Error("Invalid event type");var w=T(d)?!!d.capture:!!d,C=Se(t);if(C||(t[Ae]=C=new Qt(t)),i=C.add(e,i,o,w,v),i.proxy)return i;if(o=Wi(),i.proxy=o,o.src=t,o.listener=i,t.addEventListener)$i||(d=w),d===void 0&&(d=!1),t.addEventListener(e.toString(),o,d);else if(t.attachEvent)t.attachEvent(fn(e.toString()),o);else if(t.addListener&&t.removeListener)t.addListener(o);else throw Error("addEventListener and attachEvent are unavailable.");return i}function Wi(){function t(i){return e.call(t.src,t.listener,i)}const e=Ki;return t}function cn(t,e,i,o,d){if(Array.isArray(e))for(var v=0;v<e.length;v++)cn(t,e[v],i,o,d);else o=T(o)?!!o.capture:!!o,i=pn(i),t&&t[Jt]?(t=t.i,e=String(e).toString(),e in t.g&&(v=t.g[e],i=we(v,i,o,d),-1<i&&(Yt(v[i]),Array.prototype.splice.call(v,i,1),v.length==0&&(delete t.g[e],t.h--)))):t&&(t=Se(t))&&(e=t.g[e.toString()],t=-1,e&&(t=we(e,i,o,d)),(i=-1<t?e[t]:null)&&Ie(i))}function Ie(t){if(typeof t!="number"&&t&&!t.da){var e=t.src;if(e&&e[Jt])_e(e.i,t);else{var i=t.type,o=t.proxy;e.removeEventListener?e.removeEventListener(i,o,t.capture):e.detachEvent?e.detachEvent(fn(i),o):e.addListener&&e.removeListener&&e.removeListener(o),(i=Se(e))?(_e(i,t),i.h==0&&(i.src=null,e[Ae]=null)):Yt(t)}}}function fn(t){return t in Te?Te[t]:Te[t]="on"+t}function Ki(t,e){if(t.da)t=!0;else{e=new Rt(e,this);var i=t.listener,o=t.ha||t.src;t.fa&&Ie(t),t=i.call(o,e)}return t}function Se(t){return t=t[Ae],t instanceof Qt?t:null}var be="__closure_events_fn_"+(1e9*Math.random()>>>0);function pn(t){return typeof t=="function"?t:(t[be]||(t[be]=function(e){return t.handleEvent(e)}),t[be])}function x(){st.call(this),this.i=new Qt(this),this.M=this,this.F=null}b(x,st),x.prototype[Jt]=!0,x.prototype.removeEventListener=function(t,e,i,o){cn(this,t,e,i,o)};function H(t,e){var i,o=t.F;if(o)for(i=[];o;o=o.F)i.push(o);if(t=t.M,o=e.type||e,typeof e=="string")e=new B(e,t);else if(e instanceof B)e.target=e.target||t;else{var d=e;e=new B(o,t),f(e,d)}if(d=!0,i)for(var v=i.length-1;0<=v;v--){var w=e.g=i[v];d=Zt(w,o,!0,e)&&d}if(w=e.g=t,d=Zt(w,o,!0,e)&&d,d=Zt(w,o,!1,e)&&d,i)for(v=0;v<i.length;v++)w=e.g=i[v],d=Zt(w,o,!1,e)&&d}x.prototype.N=function(){if(x.aa.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var i=t.g[e],o=0;o<i.length;o++)Yt(i[o]);delete t.g[e],t.h--}}this.F=null},x.prototype.K=function(t,e,i,o){return this.i.add(String(t),e,!1,i,o)},x.prototype.L=function(t,e,i,o){return this.i.add(String(t),e,!0,i,o)};function Zt(t,e,i,o){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var d=!0,v=0;v<e.length;++v){var w=e[v];if(w&&!w.da&&w.capture==i){var C=w.listener,L=w.ha||w.src;w.fa&&_e(t.i,w),d=C.call(L,o)!==!1&&d}}return d&&!o.defaultPrevented}function gn(t,e,i){if(typeof t=="function")i&&(t=P(t,i));else if(t&&typeof t.handleEvent=="function")t=P(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:_.setTimeout(t,e||0)}function dn(t){t.g=gn(()=>{t.g=null,t.i&&(t.i=!1,dn(t))},t.l);const e=t.h;t.h=null,t.m.apply(null,e)}class qi extends st{constructor(e,i){super(),this.m=e,this.l=i,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:dn(this)}N(){super.N(),this.g&&(_.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pt(t){st.call(this),this.h=t,this.g={}}b(Pt,st);var mn=[];function yn(t){Q(t.g,function(e,i){this.g.hasOwnProperty(i)&&Ie(e)},t),t.g={}}Pt.prototype.N=function(){Pt.aa.N.call(this),yn(this)},Pt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var De=_.JSON.stringify,Ji=_.JSON.parse,Yi=class{stringify(t){return _.JSON.stringify(t,void 0)}parse(t){return _.JSON.parse(t,void 0)}};function Ce(){}Ce.prototype.h=null;function vn(t){return t.h||(t.h=t.i())}function Qi(){}var Ot={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Re(){B.call(this,"d")}b(Re,B);function Pe(){B.call(this,"c")}b(Pe,B);var yt={},En=null;function Oe(){return En=En||new x}yt.La="serverreachability";function _n(t){B.call(this,yt.La,t)}b(_n,B);function Nt(t){const e=Oe();H(e,new _n(e))}yt.STAT_EVENT="statevent";function wn(t,e){B.call(this,yt.STAT_EVENT,t),this.stat=e}b(wn,B);function $(t){const e=Oe();H(e,new wn(e,t))}yt.Ma="timingevent";function An(t,e){B.call(this,yt.Ma,t),this.size=e}b(An,B);function Lt(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return _.setTimeout(function(){t()},e)}function kt(){this.g=!0}kt.prototype.xa=function(){this.g=!1};function Zi(t,e,i,o,d,v){t.info(function(){if(t.g)if(v)for(var w="",C=v.split("&"),L=0;L<C.length;L++){var S=C[L].split("=");if(1<S.length){var U=S[0];S=S[1];var F=U.split("_");w=2<=F.length&&F[1]=="type"?w+(U+"="+S+"&"):w+(U+"=redacted&")}}else w=null;else w=v;return"XMLHTTP REQ ("+o+") [attempt "+d+"]: "+e+`
`+i+`
`+w})}function tr(t,e,i,o,d,v,w){t.info(function(){return"XMLHTTP RESP ("+o+") [ attempt "+d+"]: "+e+`
`+i+`
`+v+" "+w})}function vt(t,e,i,o){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+nr(t,i)+(o?" "+o:"")})}function er(t,e){t.info(function(){return"TIMEOUT: "+e})}kt.prototype.info=function(){};function nr(t,e){if(!t.g)return e;if(!e)return null;try{var i=JSON.parse(e);if(i){for(t=0;t<i.length;t++)if(Array.isArray(i[t])){var o=i[t];if(!(2>o.length)){var d=o[1];if(Array.isArray(d)&&!(1>d.length)){var v=d[0];if(v!="noop"&&v!="stop"&&v!="close")for(var w=1;w<d.length;w++)d[w]=""}}}}return De(i)}catch{return e}}var Ne={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ir={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Le;function te(){}b(te,Ce),te.prototype.g=function(){return new XMLHttpRequest},te.prototype.i=function(){return{}},Le=new te;function ot(t,e,i,o){this.j=t,this.i=e,this.l=i,this.R=o||1,this.U=new Pt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tn}function Tn(){this.i=null,this.g="",this.h=!1}var In={},ke={};function Me(t,e,i){t.L=1,t.v=re(et(e)),t.m=i,t.P=!0,Sn(t,null)}function Sn(t,e){t.F=Date.now(),ee(t),t.A=et(t.v);var i=t.A,o=t.R;Array.isArray(o)||(o=[String(o)]),Un(i.i,"t",o),t.C=0,i=t.j.J,t.h=new Tn,t.g=ii(t.j,i?e:null,!t.m),0<t.O&&(t.M=new qi(P(t.Y,t,t.g),t.O)),e=t.U,i=t.g,o=t.ca;var d="readystatechange";Array.isArray(d)||(d&&(mn[0]=d.toString()),d=mn);for(var v=0;v<d.length;v++){var w=un(i,d[v],o||e.handleEvent,!1,e.h||e);if(!w)break;e.g[w.key]=w}e=t.H?a(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Nt(),Zi(t.i,t.u,t.A,t.l,t.R,t.m)}ot.prototype.ca=function(t){t=t.target;const e=this.M;e&&nt(t)==3?e.j():this.Y(t)},ot.prototype.Y=function(t){try{if(t==this.g)t:{const F=nt(this.g);var e=this.g.Ba();const wt=this.g.Z();if(!(3>F)&&(F!=3||this.g&&(this.h.h||this.g.oa()||Xn(this.g)))){this.J||F!=4||e==7||(e==8||0>=wt?Nt(3):Nt(2)),je(this);var i=this.g.Z();this.X=i;e:if(bn(this)){var o=Xn(this.g);t="";var d=o.length,v=nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ct(this),Mt(this);var w="";break e}this.h.i=new _.TextDecoder}for(e=0;e<d;e++)this.h.h=!0,t+=this.h.i.decode(o[e],{stream:!(v&&e==d-1)});o.length=0,this.h.g+=t,this.C=0,w=this.h.g}else w=this.g.oa();if(this.o=i==200,tr(this.i,this.u,this.A,this.l,this.R,F,i),this.o){if(this.T&&!this.K){e:{if(this.g){var C,L=this.g;if((C=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(C)){var S=C;break e}}S=null}if(i=S)vt(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Be(this,i);else{this.o=!1,this.s=3,$(12),ct(this),Mt(this);break t}}if(this.P){i=!0;let q;for(;!this.J&&this.C<w.length;)if(q=rr(this,w),q==ke){F==4&&(this.s=4,$(14),i=!1),vt(this.i,this.l,null,"[Incomplete Response]");break}else if(q==In){this.s=4,$(15),vt(this.i,this.l,w,"[Invalid Chunk]"),i=!1;break}else vt(this.i,this.l,q,null),Be(this,q);if(bn(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),F!=4||w.length!=0||this.h.h||(this.s=1,$(16),i=!1),this.o=this.o&&i,!i)vt(this.i,this.l,w,"[Invalid Chunked Response]"),ct(this),Mt(this);else if(0<w.length&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.ba&&!U.M&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+w.length),Ve(U),U.M=!0,$(11))}}else vt(this.i,this.l,w,null),Be(this,w);F==4&&ct(this),this.o&&!this.J&&(F==4?Zn(this.j,this):(this.o=!1,ee(this)))}else wr(this.g),i==400&&0<w.indexOf("Unknown SID")?(this.s=3,$(12)):(this.s=0,$(13)),ct(this),Mt(this)}}}catch{}finally{}};function bn(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function rr(t,e){var i=t.C,o=e.indexOf(`
`,i);return o==-1?ke:(i=Number(e.substring(i,o)),isNaN(i)?In:(o+=1,o+i>e.length?ke:(e=e.slice(o,o+i),t.C=o+i,e)))}ot.prototype.cancel=function(){this.J=!0,ct(this)};function ee(t){t.S=Date.now()+t.I,Dn(t,t.I)}function Dn(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Lt(P(t.ba,t),e)}function je(t){t.B&&(_.clearTimeout(t.B),t.B=null)}ot.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(er(this.i,this.A),this.L!=2&&(Nt(),$(17)),ct(this),this.s=2,Mt(this)):Dn(this,this.S-t)};function Mt(t){t.j.G==0||t.J||Zn(t.j,t)}function ct(t){je(t);var e=t.M;e&&typeof e.ma=="function"&&e.ma(),t.M=null,yn(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function Be(t,e){try{var i=t.j;if(i.G!=0&&(i.g==t||xe(i.h,t))){if(!t.K&&xe(i.h,t)&&i.G==3){try{var o=i.Da.g.parse(e)}catch{o=null}if(Array.isArray(o)&&o.length==3){var d=o;if(d[0]==0){t:if(!i.u){if(i.g)if(i.g.F+3e3<t.F)ue(i),ae(i);else break t;$e(i),$(18)}}else i.za=d[1],0<i.za-i.T&&37500>d[2]&&i.F&&i.v==0&&!i.C&&(i.C=Lt(P(i.Za,i),6e3));if(1>=Pn(i.h)&&i.ca){try{i.ca()}catch{}i.ca=void 0}}else pt(i,11)}else if((t.K||i.g==t)&&ue(i),!Y(e))for(d=i.Da.g.parse(e),e=0;e<d.length;e++){let S=d[e];if(i.T=S[0],S=S[1],i.G==2)if(S[0]=="c"){i.K=S[1],i.ia=S[2];const U=S[3];U!=null&&(i.la=U,i.j.info("VER="+i.la));const F=S[4];F!=null&&(i.Aa=F,i.j.info("SVER="+i.Aa));const wt=S[5];wt!=null&&typeof wt=="number"&&0<wt&&(o=1.5*wt,i.L=o,i.j.info("backChannelRequestTimeoutMs_="+o)),o=i;const q=t.g;if(q){const ce=q.g?q.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ce){var v=o.h;v.g||ce.indexOf("spdy")==-1&&ce.indexOf("quic")==-1&&ce.indexOf("h2")==-1||(v.j=v.l,v.g=new Set,v.h&&(Ue(v,v.h),v.h=null))}if(o.D){const ze=q.g?q.g.getResponseHeader("X-HTTP-Session-Id"):null;ze&&(o.ya=ze,R(o.I,o.D,ze))}}i.G=3,i.l&&i.l.ua(),i.ba&&(i.R=Date.now()-t.F,i.j.info("Handshake RTT: "+i.R+"ms")),o=i;var w=t;if(o.qa=ni(o,o.J?o.ia:null,o.W),w.K){On(o.h,w);var C=w,L=o.L;L&&(C.I=L),C.B&&(je(C),ee(C)),o.g=w}else Yn(o);0<i.i.length&&le(i)}else S[0]!="stop"&&S[0]!="close"||pt(i,7);else i.G==3&&(S[0]=="stop"||S[0]=="close"?S[0]=="stop"?pt(i,7):He(i):S[0]!="noop"&&i.l&&i.l.ta(S),i.v=0)}}Nt(4)}catch{}}var sr=class{constructor(t,e){this.g=t,this.map=e}};function Cn(t){this.l=t||10,_.PerformanceNavigationTiming?(t=_.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(_.chrome&&_.chrome.loadTimes&&_.chrome.loadTimes()&&_.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Rn(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Pn(t){return t.h?1:t.g?t.g.size:0}function xe(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ue(t,e){t.g?t.g.add(e):t.h=e}function On(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Cn.prototype.cancel=function(){if(this.i=Nn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Nn(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const i of t.g.values())e=e.concat(i.D);return e}return j(t.i)}function or(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(A(t)){for(var e=[],i=t.length,o=0;o<i;o++)e.push(t[o]);return e}e=[],i=0;for(o in t)e[i++]=t[o];return e}function hr(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(A(t)||typeof t=="string"){var e=[];t=t.length;for(var i=0;i<t;i++)e.push(i);return e}e=[],i=0;for(const o in t)e[i++]=o;return e}}}function Ln(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(A(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var i=hr(t),o=or(t),d=o.length,v=0;v<d;v++)e.call(void 0,o[v],i&&i[v],t)}var kn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ar(t,e){if(t){t=t.split("&");for(var i=0;i<t.length;i++){var o=t[i].indexOf("="),d=null;if(0<=o){var v=t[i].substring(0,o);d=t[i].substring(o+1)}else v=t[i];e(v,d?decodeURIComponent(d.replace(/\+/g," ")):"")}}}function ft(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof ft){this.h=t.h,ne(this,t.j),this.o=t.o,this.g=t.g,ie(this,t.s),this.l=t.l;var e=t.i,i=new xt;i.i=e.i,e.g&&(i.g=new Map(e.g),i.h=e.h),Mn(this,i),this.m=t.m}else t&&(e=String(t).match(kn))?(this.h=!1,ne(this,e[1]||"",!0),this.o=jt(e[2]||""),this.g=jt(e[3]||"",!0),ie(this,e[4]),this.l=jt(e[5]||"",!0),Mn(this,e[6]||"",!0),this.m=jt(e[7]||"")):(this.h=!1,this.i=new xt(null,this.h))}ft.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Bt(e,jn,!0),":");var i=this.g;return(i||e=="file")&&(t.push("//"),(e=this.o)&&t.push(Bt(e,jn,!0),"@"),t.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i=this.s,i!=null&&t.push(":",String(i))),(i=this.l)&&(this.g&&i.charAt(0)!="/"&&t.push("/"),t.push(Bt(i,i.charAt(0)=="/"?cr:ur,!0))),(i=this.i.toString())&&t.push("?",i),(i=this.m)&&t.push("#",Bt(i,pr)),t.join("")};function et(t){return new ft(t)}function ne(t,e,i){t.j=i?jt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ie(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function Mn(t,e,i){e instanceof xt?(t.i=e,gr(t.i,t.h)):(i||(e=Bt(e,fr)),t.i=new xt(e,t.h))}function R(t,e,i){t.i.set(e,i)}function re(t){return R(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function jt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Bt(t,e,i){return typeof t=="string"?(t=encodeURI(t).replace(e,lr),i&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function lr(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var jn=/[#\/\?@]/g,ur=/[#\?:]/g,cr=/[#\?]/g,fr=/[#\?@]/g,pr=/#/g;function xt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ht(t){t.g||(t.g=new Map,t.h=0,t.i&&ar(t.i,function(e,i){t.add(decodeURIComponent(e.replace(/\+/g," ")),i)}))}r=xt.prototype,r.add=function(t,e){ht(this),this.i=null,t=Et(this,t);var i=this.g.get(t);return i||this.g.set(t,i=[]),i.push(e),this.h+=1,this};function Bn(t,e){ht(t),e=Et(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function xn(t,e){return ht(t),e=Et(t,e),t.g.has(e)}r.forEach=function(t,e){ht(this),this.g.forEach(function(i,o){i.forEach(function(d){t.call(e,d,o,this)},this)},this)},r.na=function(){ht(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),i=[];for(let o=0;o<e.length;o++){const d=t[o];for(let v=0;v<d.length;v++)i.push(e[o])}return i},r.V=function(t){ht(this);let e=[];if(typeof t=="string")xn(this,t)&&(e=e.concat(this.g.get(Et(this,t))));else{t=Array.from(this.g.values());for(let i=0;i<t.length;i++)e=e.concat(t[i])}return e},r.set=function(t,e){return ht(this),this.i=null,t=Et(this,t),xn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.V(t),0<t.length?String(t[0]):e):e};function Un(t,e,i){Bn(t,e),0<i.length&&(t.i=null,t.g.set(Et(t,e),j(i)),t.h+=i.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var i=0;i<e.length;i++){var o=e[i];const v=encodeURIComponent(String(o)),w=this.V(o);for(o=0;o<w.length;o++){var d=v;w[o]!==""&&(d+="="+encodeURIComponent(String(w[o]))),t.push(d)}}return this.i=t.join("&")};function Et(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function gr(t,e){e&&!t.j&&(ht(t),t.i=null,t.g.forEach(function(i,o){var d=o.toLowerCase();o!=d&&(Bn(this,o),Un(this,d,i))},t)),t.j=e}function dr(t,e){const i=new kt;if(_.Image){const o=new Image;o.onload=G(at,i,"TestLoadImage: loaded",!0,e,o),o.onerror=G(at,i,"TestLoadImage: error",!1,e,o),o.onabort=G(at,i,"TestLoadImage: abort",!1,e,o),o.ontimeout=G(at,i,"TestLoadImage: timeout",!1,e,o),_.setTimeout(function(){o.ontimeout&&o.ontimeout()},1e4),o.src=t}else e(!1)}function mr(t,e){const i=new kt,o=new AbortController,d=setTimeout(()=>{o.abort(),at(i,"TestPingServer: timeout",!1,e)},1e4);fetch(t,{signal:o.signal}).then(v=>{clearTimeout(d),v.ok?at(i,"TestPingServer: ok",!0,e):at(i,"TestPingServer: server error",!1,e)}).catch(()=>{clearTimeout(d),at(i,"TestPingServer: error",!1,e)})}function at(t,e,i,o,d){try{d&&(d.onload=null,d.onerror=null,d.onabort=null,d.ontimeout=null),o(i)}catch{}}function yr(){this.g=new Yi}function vr(t,e,i){const o=i||"";try{Ln(t,function(d,v){let w=d;T(d)&&(w=De(d)),e.push(o+v+"="+encodeURIComponent(w))})}catch(d){throw e.push(o+"type="+encodeURIComponent("_badmap")),d}}function se(t){this.l=t.Ub||null,this.j=t.eb||!1}b(se,Ce),se.prototype.g=function(){return new oe(this.l,this.j)},se.prototype.i=function(t){return function(){return t}}({});function oe(t,e){x.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(oe,x),r=oe.prototype,r.open=function(t,e){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,Ft(this)},r.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||_).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ut(this)),this.readyState=0},r.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ft(this)),this.g&&(this.readyState=3,Ft(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof _.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fn(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fn(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}r.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ut(this):Ft(this),this.readyState==3&&Fn(this)}},r.Ra=function(t){this.g&&(this.response=this.responseText=t,Ut(this))},r.Qa=function(t){this.g&&(this.response=t,Ut(this))},r.ga=function(){this.g&&Ut(this)};function Ut(t){t.readyState=4,t.l=null,t.j=null,t.v=null,Ft(t)}r.setRequestHeader=function(t,e){this.u.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var i=e.next();!i.done;)i=i.value,t.push(i[0]+": "+i[1]),i=e.next();return t.join(`\r
`)};function Ft(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(oe.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Hn(t){let e="";return Q(t,function(i,o){e+=o,e+=":",e+=i,e+=`\r
`}),e}function Fe(t,e,i){t:{for(o in i){var o=!1;break t}o=!0}o||(i=Hn(i),typeof t=="string"?i!=null&&encodeURIComponent(String(i)):R(t,e,i))}function O(t){x.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(O,x);var Er=/^https?$/i,_r=["POST","PUT"];r=O.prototype,r.Ha=function(t){this.J=t},r.ea=function(t,e,i,o){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Le.g(),this.v=this.o?vn(this.o):vn(Le),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(v){$n(this,v);return}if(t=i||"",i=new Map(this.headers),o)if(Object.getPrototypeOf(o)===Object.prototype)for(var d in o)i.set(d,o[d]);else if(typeof o.keys=="function"&&typeof o.get=="function")for(const v of o.keys())i.set(v,o.get(v));else throw Error("Unknown input type for opt_headers: "+String(o));o=Array.from(i.keys()).find(v=>v.toLowerCase()=="content-type"),d=_.FormData&&t instanceof _.FormData,!(0<=Array.prototype.indexOf.call(_r,e,void 0))||o||d||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[v,w]of i)this.g.setRequestHeader(v,w);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gn(this),this.u=!0,this.g.send(t),this.u=!1}catch(v){$n(this,v)}};function $n(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,Vn(t),he(t)}function Vn(t){t.A||(t.A=!0,H(t,"complete"),H(t,"error"))}r.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,H(this,"complete"),H(this,"abort"),he(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),he(this,!0)),O.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?zn(this):this.bb())},r.bb=function(){zn(this)};function zn(t){if(t.h&&typeof E<"u"&&(!t.v[1]||nt(t)!=4||t.Z()!=2)){if(t.u&&nt(t)==4)gn(t.Ea,0,t);else if(H(t,"readystatechange"),nt(t)==4){t.h=!1;try{const w=t.Z();t:switch(w){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var i;if(!(i=e)){var o;if(o=w===0){var d=String(t.D).match(kn)[1]||null;!d&&_.self&&_.self.location&&(d=_.self.location.protocol.slice(0,-1)),o=!Er.test(d?d.toLowerCase():"")}i=o}if(i)H(t,"complete"),H(t,"success");else{t.m=6;try{var v=2<nt(t)?t.g.statusText:""}catch{v=""}t.l=v+" ["+t.Z()+"]",Vn(t)}}finally{he(t)}}}}function he(t,e){if(t.g){Gn(t);const i=t.g,o=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||H(t,"ready");try{i.onreadystatechange=o}catch{}}}function Gn(t){t.I&&(_.clearTimeout(t.I),t.I=null)}r.isActive=function(){return!!this.g};function nt(t){return t.g?t.g.readyState:0}r.Z=function(){try{return 2<nt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Ji(e)}};function Xn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function wr(t){const e={};t=(t.g&&2<=nt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let o=0;o<t.length;o++){if(Y(t[o]))continue;var i=p(t[o]);const d=i[0];if(i=i[1],typeof i!="string")continue;i=i.trim();const v=e[d]||[];e[d]=v,v.push(i)}g(e,function(o){return o.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ht(t,e,i){return i&&i.internalChannelParams&&i.internalChannelParams[t]||e}function Wn(t){this.Aa=0,this.i=[],this.j=new kt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ht("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ht("baseRetryDelayMs",5e3,t),this.cb=Ht("retryDelaySeedMs",1e4,t),this.Wa=Ht("forwardChannelMaxRetries",2,t),this.wa=Ht("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Cn(t&&t.concurrentRequestLimit),this.Da=new yr,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Wn.prototype,r.la=8,r.G=1,r.connect=function(t,e,i,o){$(0),this.W=t,this.H=e||{},i&&o!==void 0&&(this.H.OSID=i,this.H.OAID=o),this.F=this.X,this.I=ni(this,null,this.W),le(this)};function He(t){if(Kn(t),t.G==3){var e=t.U++,i=et(t.I);if(R(i,"SID",t.K),R(i,"RID",e),R(i,"TYPE","terminate"),$t(t,i),e=new ot(t,t.j,e),e.L=2,e.v=re(et(i)),i=!1,_.navigator&&_.navigator.sendBeacon)try{i=_.navigator.sendBeacon(e.v.toString(),"")}catch{}!i&&_.Image&&(new Image().src=e.v,i=!0),i||(e.g=ii(e.j,null),e.g.ea(e.v)),e.F=Date.now(),ee(e)}ei(t)}function ae(t){t.g&&(Ve(t),t.g.cancel(),t.g=null)}function Kn(t){ae(t),t.u&&(_.clearTimeout(t.u),t.u=null),ue(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&_.clearTimeout(t.s),t.s=null)}function le(t){if(!Rn(t.h)&&!t.s){t.s=!0;var e=t.Ga;Dt||ln(),Ct||(Dt(),Ct=!0),Ee.add(e,t),t.B=0}}function Ar(t,e){return Pn(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=Lt(P(t.Ga,t,e),ti(t,t.B)),t.B++,!0)}r.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const d=new ot(this,this.j,t);let v=this.o;if(this.S&&(v?(v=a(v),f(v,this.S)):v=this.S),this.m!==null||this.O||(d.H=v,v=null),this.P)t:{for(var e=0,i=0;i<this.i.length;i++){e:{var o=this.i[i];if("__data__"in o.map&&(o=o.map.__data__,typeof o=="string")){o=o.length;break e}o=void 0}if(o===void 0)break;if(e+=o,4096<e){e=i;break t}if(e===4096||i===this.i.length-1){e=i+1;break t}}e=1e3}else e=1e3;e=Jn(this,d,e),i=et(this.I),R(i,"RID",t),R(i,"CVER",22),this.D&&R(i,"X-HTTP-Session-Id",this.D),$t(this,i),v&&(this.O?e="headers="+encodeURIComponent(String(Hn(v)))+"&"+e:this.m&&Fe(i,this.m,v)),Ue(this.h,d),this.Ua&&R(i,"TYPE","init"),this.P?(R(i,"$req",e),R(i,"SID","null"),d.T=!0,Me(d,i,null)):Me(d,i,e),this.G=2}}else this.G==3&&(t?qn(this,t):this.i.length==0||Rn(this.h)||qn(this))};function qn(t,e){var i;e?i=e.l:i=t.U++;const o=et(t.I);R(o,"SID",t.K),R(o,"RID",i),R(o,"AID",t.T),$t(t,o),t.m&&t.o&&Fe(o,t.m,t.o),i=new ot(t,t.j,i,t.B+1),t.m===null&&(i.H=t.o),e&&(t.i=e.D.concat(t.i)),e=Jn(t,i,1e3),i.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Ue(t.h,i),Me(i,o,e)}function $t(t,e){t.H&&Q(t.H,function(i,o){R(e,o,i)}),t.l&&Ln({},function(i,o){R(e,o,i)})}function Jn(t,e,i){i=Math.min(t.i.length,i);var o=t.l?P(t.l.Na,t.l,t):null;t:{var d=t.i;let v=-1;for(;;){const w=["count="+i];v==-1?0<i?(v=d[0].g,w.push("ofs="+v)):v=0:w.push("ofs="+v);let C=!0;for(let L=0;L<i;L++){let S=d[L].g;const U=d[L].map;if(S-=v,0>S)v=Math.max(0,d[L].g-100),C=!1;else try{vr(U,w,"req"+S+"_")}catch{o&&o(U)}}if(C){o=w.join("&");break t}}}return t=t.i.splice(0,i),e.D=t,o}function Yn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;Dt||ln(),Ct||(Dt(),Ct=!0),Ee.add(e,t),t.v=0}}function $e(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=Lt(P(t.Fa,t),ti(t,t.v)),t.v++,!0)}r.Fa=function(){if(this.u=null,Qn(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Lt(P(this.ab,this),t)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$(10),ae(this),Qn(this))};function Ve(t){t.A!=null&&(_.clearTimeout(t.A),t.A=null)}function Qn(t){t.g=new ot(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var e=et(t.qa);R(e,"RID","rpc"),R(e,"SID",t.K),R(e,"AID",t.T),R(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&R(e,"TO",t.ja),R(e,"TYPE","xmlhttp"),$t(t,e),t.m&&t.o&&Fe(e,t.m,t.o),t.L&&(t.g.I=t.L);var i=t.g;t=t.ia,i.L=1,i.v=re(et(e)),i.m=null,i.P=!0,Sn(i,t)}r.Za=function(){this.C!=null&&(this.C=null,ae(this),$e(this),$(19))};function ue(t){t.C!=null&&(_.clearTimeout(t.C),t.C=null)}function Zn(t,e){var i=null;if(t.g==e){ue(t),Ve(t),t.g=null;var o=2}else if(xe(t.h,e))i=e.D,On(t.h,e),o=1;else return;if(t.G!=0){if(e.o)if(o==1){i=e.m?e.m.length:0,e=Date.now()-e.F;var d=t.B;o=Oe(),H(o,new An(o,i)),le(t)}else Yn(t);else if(d=e.s,d==3||d==0&&0<e.X||!(o==1&&Ar(t,e)||o==2&&$e(t)))switch(i&&0<i.length&&(e=t.h,e.i=e.i.concat(i)),d){case 1:pt(t,5);break;case 4:pt(t,10);break;case 3:pt(t,6);break;default:pt(t,2)}}}function ti(t,e){let i=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(i*=2),i*e}function pt(t,e){if(t.j.info("Error code "+e),e==2){var i=P(t.fb,t),o=t.Xa;const d=!o;o=new ft(o||"//www.google.com/images/cleardot.gif"),_.location&&_.location.protocol=="http"||ne(o,"https"),re(o),d?dr(o.toString(),i):mr(o.toString(),i)}else $(2);t.G=0,t.l&&t.l.sa(e),ei(t),Kn(t)}r.fb=function(t){t?(this.j.info("Successfully pinged google.com"),$(2)):(this.j.info("Failed to ping google.com"),$(1))};function ei(t){if(t.G=0,t.ka=[],t.l){const e=Nn(t.h);(e.length!=0||t.i.length!=0)&&(N(t.ka,e),N(t.ka,t.i),t.h.i.length=0,j(t.i),t.i.length=0),t.l.ra()}}function ni(t,e,i){var o=i instanceof ft?et(i):new ft(i);if(o.g!="")e&&(o.g=e+"."+o.g),ie(o,o.s);else{var d=_.location;o=d.protocol,e=e?e+"."+d.hostname:d.hostname,d=+d.port;var v=new ft(null);o&&ne(v,o),e&&(v.g=e),d&&ie(v,d),i&&(v.l=i),o=v}return i=t.D,e=t.ya,i&&e&&R(o,i,e),R(o,"VER",t.la),$t(t,o),o}function ii(t,e,i){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ca&&!t.pa?new O(new se({eb:i})):new O(t.pa),e.Ha(t.J),e}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ri(){}r=ri.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function W(t,e){x.call(this),this.g=new Wn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!Y(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Y(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new _t(this)}b(W,x),W.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},W.prototype.close=function(){He(this.g)},W.prototype.o=function(t){var e=this.g;if(typeof t=="string"){var i={};i.__data__=t,t=i}else this.u&&(i={},i.__data__=De(t),t=i);e.i.push(new sr(e.Ya++,t)),e.G==3&&le(e)},W.prototype.N=function(){this.g.l=null,delete this.j,He(this.g),delete this.g,W.aa.N.call(this)};function si(t){Re.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const i in e){t=i;break t}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}b(si,Re);function oi(){Pe.call(this),this.status=1}b(oi,Pe);function _t(t){this.g=t}b(_t,ri),_t.prototype.ua=function(){H(this.g,"a")},_t.prototype.ta=function(t){H(this.g,new si(t))},_t.prototype.sa=function(t){H(this.g,new oi)},_t.prototype.ra=function(){H(this.g,"b")},W.prototype.send=W.prototype.o,W.prototype.open=W.prototype.m,W.prototype.close=W.prototype.close,Ne.NO_ERROR=0,Ne.TIMEOUT=8,Ne.HTTP_ERROR=6,ir.COMPLETE="complete",Qi.EventType=Ot,Ot.OPEN="a",Ot.CLOSE="b",Ot.ERROR="c",Ot.MESSAGE="d",x.prototype.listen=x.prototype.K,O.prototype.listenOnce=O.prototype.L,O.prototype.getLastError=O.prototype.Ka,O.prototype.getLastErrorCode=O.prototype.Ba,O.prototype.getStatus=O.prototype.Z,O.prototype.getResponseJson=O.prototype.Oa,O.prototype.getResponseText=O.prototype.oa,O.prototype.send=O.prototype.ea,O.prototype.setWithCredentials=O.prototype.Ha}).apply(typeof fe<"u"?fe:typeof self<"u"?self:typeof window<"u"?window:{});const vi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(n){this.uid=n}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(n){return n.uid===this.uid}}V.UNAUTHENTICATED=new V(null),V.GOOGLE_CREDENTIALS=new V("google-credentials-uid"),V.FIRST_PARTY=new V("first-party-uid"),V.MOCK_USER=new V("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kt="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new Oi("@firebase/firestore");function J(r,...n){if(It.logLevel<=D.DEBUG){const s=n.map(sn);It.debug(`Firestore (${Kt}): ${r}`,...s)}}function xi(r,...n){if(It.logLevel<=D.ERROR){const s=n.map(sn);It.error(`Firestore (${Kt}): ${r}`,...s)}}function Zs(r,...n){if(It.logLevel<=D.WARN){const s=n.map(sn);It.warn(`Firestore (${Kt}): ${r}`,...s)}}function sn(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(s){return JSON.stringify(s)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(r="Unexpected state"){const n=`FIRESTORE (${Kt}) INTERNAL ASSERTION FAILED: `+r;throw xi(n),new Error(n)}function Vt(r,n){r||Wt()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends St{constructor(n,s){super(n,s),this.code=n,this.message=s,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(){this.promise=new Promise((n,s)=>{this.resolve=n,this.reject=s})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(n,s){this.user=s,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${n}`)}}class to{getToken(){return Promise.resolve(null)}invalidateToken(){}start(n,s){n.enqueueRetryable(()=>s(V.UNAUTHENTICATED))}shutdown(){}}class eo{constructor(n){this.token=n,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(n,s){this.changeListener=s,n.enqueueRetryable(()=>s(this.token.user))}shutdown(){this.changeListener=null}}class no{constructor(n){this.t=n,this.currentUser=V.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(n,s){Vt(this.o===void 0);let h=this.i;const u=A=>this.i!==h?(h=this.i,s(A)):Promise.resolve();let y=new zt;this.o=()=>{this.i++,this.currentUser=this.u(),y.resolve(),y=new zt,n.enqueueRetryable(()=>u(this.currentUser))};const E=()=>{const A=y;n.enqueueRetryable(async()=>{await A.promise,await u(this.currentUser)})},_=A=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=A,this.o&&(this.auth.addAuthTokenListener(this.o),E())};this.t.onInit(A=>_(A)),setTimeout(()=>{if(!this.auth){const A=this.t.getImmediate({optional:!0});A?_(A):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),y.resolve(),y=new zt)}},0),E()}getToken(){const n=this.i,s=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(s).then(h=>this.i!==n?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):h?(Vt(typeof h.accessToken=="string"),new Ui(h.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const n=this.auth&&this.auth.getUid();return Vt(n===null||typeof n=="string"),new V(n)}}class io{constructor(n,s,h){this.l=n,this.h=s,this.P=h,this.type="FirstParty",this.user=V.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const n=this.I();return n&&this.T.set("Authorization",n),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class ro{constructor(n,s,h){this.l=n,this.h=s,this.P=h}getToken(){return Promise.resolve(new io(this.l,this.h,this.P))}start(n,s){n.enqueueRetryable(()=>s(V.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class so{constructor(n){this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oo{constructor(n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(n,s){Vt(this.o===void 0);const h=y=>{y.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${y.error.message}`);const E=y.token!==this.R;return this.R=y.token,J("FirebaseAppCheckTokenProvider",`Received ${E?"new":"existing"} token.`),E?s(y.token):Promise.resolve()};this.o=y=>{n.enqueueRetryable(()=>h(y))};const u=y=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=y,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(y=>u(y)),setTimeout(()=>{if(!this.appCheck){const y=this.A.getImmediate({optional:!0});y?u(y):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const n=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(n).then(s=>s?(Vt(typeof s.token=="string"),this.R=s.token,new so(s.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(n,s,h){s===void 0?s=0:s>n.length&&Wt(),h===void 0?h=n.length-s:h>n.length-s&&Wt(),this.segments=n,this.offset=s,this.len=h}get length(){return this.len}isEqual(n){return me.comparator(this,n)===0}child(n){const s=this.segments.slice(this.offset,this.limit());return n instanceof me?n.forEach(h=>{s.push(h)}):s.push(n),this.construct(s)}limit(){return this.offset+this.length}popFirst(n){return n=n===void 0?1:n,this.construct(this.segments,this.offset+n,this.length-n)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(n){return this.segments[this.offset+n]}isEmpty(){return this.length===0}isPrefixOf(n){if(n.length<this.length)return!1;for(let s=0;s<this.length;s++)if(this.get(s)!==n.get(s))return!1;return!0}isImmediateParentOf(n){if(this.length+1!==n.length)return!1;for(let s=0;s<this.length;s++)if(this.get(s)!==n.get(s))return!1;return!0}forEach(n){for(let s=this.offset,h=this.limit();s<h;s++)n(this.segments[s])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(n,s){const h=Math.min(n.length,s.length);for(let u=0;u<h;u++){const y=n.get(u),E=s.get(u);if(y<E)return-1;if(y>E)return 1}return n.length<s.length?-1:n.length>s.length?1:0}}class K extends me{construct(n,s,h){return new K(n,s,h)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...n){const s=[];for(const h of n){if(h.indexOf("//")>=0)throw new M(k.INVALID_ARGUMENT,`Invalid segment (${h}). Paths must not contain // in them.`);s.push(...h.split("/").filter(u=>u.length>0))}return new K(s)}static emptyPath(){return new K([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(n){this.path=n}static fromPath(n){return new dt(K.fromString(n))}static fromName(n){return new dt(K.fromString(n).popFirst(5))}static empty(){return new dt(K.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(n){return this.path.length>=2&&this.path.get(this.path.length-2)===n}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(n){return n!==null&&K.comparator(this.path,n.path)===0}toString(){return this.path.toString()}static comparator(n,s){return K.comparator(n.path,s.path)}static isDocumentKey(n){return n.length%2==0}static fromSegments(n){return new dt(new K(n.slice()))}}function ho(r){return r.name==="IndexedDbTransactionError"}class ye{constructor(n,s){this.projectId=n,this.database=s||"(default)"}static empty(){return new ye("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(n){return n instanceof ye&&n.projectId===this.projectId&&n.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(n,s=null,h=[],u=[],y=null,E="F",_=null,A=null){this.path=n,this.collectionGroup=s,this.explicitOrderBy=h,this.filters=u,this.limit=y,this.limitType=E,this.startAt=_,this.endAt=A,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function lo(r){return new ao(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ei,I;(I=Ei||(Ei={}))[I.OK=0]="OK",I[I.CANCELLED=1]="CANCELLED",I[I.UNKNOWN=2]="UNKNOWN",I[I.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",I[I.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",I[I.NOT_FOUND=5]="NOT_FOUND",I[I.ALREADY_EXISTS=6]="ALREADY_EXISTS",I[I.PERMISSION_DENIED=7]="PERMISSION_DENIED",I[I.UNAUTHENTICATED=16]="UNAUTHENTICATED",I[I.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",I[I.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",I[I.ABORTED=10]="ABORTED",I[I.OUT_OF_RANGE=11]="OUT_OF_RANGE",I[I.UNIMPLEMENTED=12]="UNIMPLEMENTED",I[I.INTERNAL=13]="INTERNAL",I[I.UNAVAILABLE=14]="UNAVAILABLE",I[I.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Bi([4294967295,4294967295],0);function qe(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(n,s,h=1e3,u=1.5,y=6e4){this.li=n,this.timerId=s,this.Qo=h,this.Ko=u,this.$o=y,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(n){this.cancel();const s=Math.floor(this.Uo+this.Ho()),h=Math.max(0,Date.now()-this.Go),u=Math.max(0,s-h);u>0&&J("ExponentialBackoff",`Backing off for ${u} ms (base delay: ${this.Uo} ms, delay with jitter: ${s} ms, last attempt: ${h} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,u,()=>(this.Go=Date.now(),n())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(n,s,h,u,y){this.asyncQueue=n,this.timerId=s,this.targetTimeMs=h,this.op=u,this.removalCallback=y,this.deferred=new zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(E=>{})}get promise(){return this.deferred.promise}static createAndSchedule(n,s,h,u,y){const E=Date.now()+h,_=new on(n,s,E,u,y);return _.start(h),_}start(n){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),n)}skipDelay(){return this.handleDelayElapsed()}cancel(n){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(k.CANCELLED,"Operation cancelled"+(n?": "+n:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(n=>this.deferred.resolve(n))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var _i,wi;(wi=_i||(_i={})).na="default",wi.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(r){const n={};return r.timeoutSeconds!==void 0&&(n.timeoutSeconds=r.timeoutSeconds),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=new Map;function fo(r,n,s,h){if(n===!0&&h===!0)throw new M(k.INVALID_ARGUMENT,`${r} and ${s} cannot be used together.`)}function Ti(r){if(dt.isDocumentKey(r))throw new M(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function po(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const n=function(h){return h.constructor?h.constructor.name:null}(r);return n?`a custom ${n} object`:"an object"}}return typeof r=="function"?"a function":Wt()}function go(r,n){if("_delegate"in r&&(r=r._delegate),!(r instanceof n)){if(n.name===r.constructor.name)throw new M(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const s=po(r);throw new M(k.INVALID_ARGUMENT,`Expected type '${n.name}', but it was: ${s}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(n){var s,h;if(n.host===void 0){if(n.ssl!==void 0)throw new M(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=(s=n.ssl)===null||s===void 0||s;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,this.localCache=n.localCache,n.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(n.cacheSizeBytes!==-1&&n.cacheSizeBytes<1048576)throw new M(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}fo("experimentalForceLongPolling",n.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",n.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:n.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=co((h=n.experimentalLongPollingOptions)!==null&&h!==void 0?h:{}),function(y){if(y.timeoutSeconds!==void 0){if(isNaN(y.timeoutSeconds))throw new M(k.INVALID_ARGUMENT,`invalid long polling timeout: ${y.timeoutSeconds} (must not be NaN)`);if(y.timeoutSeconds<5)throw new M(k.INVALID_ARGUMENT,`invalid long polling timeout: ${y.timeoutSeconds} (minimum allowed value is 5)`);if(y.timeoutSeconds>30)throw new M(k.INVALID_ARGUMENT,`invalid long polling timeout: ${y.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!n.useFetchStreams}isEqual(n){return this.host===n.host&&this.ssl===n.ssl&&this.credentials===n.credentials&&this.cacheSizeBytes===n.cacheSizeBytes&&this.experimentalForceLongPolling===n.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===n.experimentalAutoDetectLongPolling&&function(h,u){return h.timeoutSeconds===u.timeoutSeconds}(this.experimentalLongPollingOptions,n.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===n.ignoreUndefinedProperties&&this.useFetchStreams===n.useFetchStreams}}class hn{constructor(n,s,h,u){this._authCredentials=n,this._appCheckCredentials=s,this._databaseId=h,this._app=u,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ii({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(n){if(this._settingsFrozen)throw new M(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ii(n),n.credentials!==void 0&&(this._authCredentials=function(h){if(!h)return new to;switch(h.type){case"firstParty":return new ro(h.sessionIndex||"0",h.iamToken||null,h.authTokenFactory||null);case"provider":return h.client;default:throw new M(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(n.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(s){const h=Ai.get(s);h&&(J("ComponentProvider","Removing Datastore"),Ai.delete(s),h.terminate())}(this),Promise.resolve()}}function mo(r,n,s,h={}){var u;const y=(r=go(r,hn))._getSettings(),E=`${n}:${s}`;if(y.host!=="firestore.googleapis.com"&&y.host!==E&&Zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},y),{host:E,ssl:!1})),h.mockUserToken){let _,A;if(typeof h.mockUserToken=="string")_=h.mockUserToken,A=V.MOCK_USER;else{_=kr(h.mockUserToken,(u=r._app)===null||u===void 0?void 0:u.options.projectId);const T=h.mockUserToken.sub||h.mockUserToken.user_id;if(!T)throw new M(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new V(T)}r._authCredentials=new eo(new Ui(_,A))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(n,s,h){this.converter=s,this._query=h,this.type="query",this.firestore=n}withConverter(n){return new an(this.firestore,n,this._query)}}class ve{constructor(n,s,h){this.converter=s,this._key=h,this.type="document",this.firestore=n}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tt(this.firestore,this.converter,this._key.path.popLast())}withConverter(n){return new ve(this.firestore,n,this._key)}}class Tt extends an{constructor(n,s,h){super(n,s,lo(h)),this._path=h,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const n=this._path.popLast();return n.isEmpty()?null:new ve(this.firestore,null,new dt(n))}withConverter(n){return new Tt(this.firestore,n,this._path)}}function yo(r,n,...s){if(r=Fr(r),r instanceof hn){const h=K.fromString(n,...s);return Ti(h),new Tt(r,null,h)}{if(!(r instanceof ve||r instanceof Tt))throw new M(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const h=r._path.child(K.fromString(n,...s));return Ti(h),new Tt(r.firestore,null,h)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(n=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new uo(this,"async_queue_retry"),this.fu=()=>{const h=qe();h&&J("AsyncQueue","Visibility state changed to "+h.visibilityState),this.r_.Jo()},this.gu=n;const s=qe();s&&typeof s.addEventListener=="function"&&s.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(n){this.enqueue(n)}enqueueAndForgetEvenWhileRestricted(n){this.pu(),this.yu(n)}enterRestrictedMode(n){if(!this.Eu){this.Eu=!0,this.Vu=n||!1;const s=qe();s&&typeof s.removeEventListener=="function"&&s.removeEventListener("visibilitychange",this.fu)}}enqueue(n){if(this.pu(),this.Eu)return new Promise(()=>{});const s=new zt;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(n().then(s.resolve,s.reject),s.promise)).then(()=>s.promise)}enqueueRetryable(n){this.enqueueAndForget(()=>(this.Iu.push(n),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(n){if(!ho(n))throw n;J("AsyncQueue","Operation failed with retryable error: "+n)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(n){const s=this.gu.then(()=>(this.Ru=!0,n().catch(h=>{this.Au=h,this.Ru=!1;const u=function(E){let _=E.message||"";return E.stack&&(_=E.stack.includes(E.message)?E.stack:E.message+`
`+E.stack),_}(h);throw xi("INTERNAL UNHANDLED ERROR: ",u),h}).then(h=>(this.Ru=!1,h))));return this.gu=s,s}enqueueAfterDelay(n,s,h){this.pu(),this.mu.indexOf(n)>-1&&(s=0);const u=on.createAndSchedule(this,n,s,h,y=>this.Su(y));return this.du.push(u),u}pu(){this.Au&&Wt()}verifyOperationInProgress(){}async bu(){let n;do n=this.gu,await n;while(n!==this.gu)}Du(n){for(const s of this.du)if(s.timerId===n)return!0;return!1}vu(n){return this.bu().then(()=>{this.du.sort((s,h)=>s.targetTimeMs-h.targetTimeMs);for(const s of this.du)if(s.skipDelay(),n!=="all"&&s.timerId===n)break;return this.bu()})}Cu(n){this.mu.push(n)}Su(n){const s=this.du.indexOf(n);this.du.splice(s,1)}}class vo extends hn{constructor(n,s,h,u){super(n,s,h,u),this.type="firestore",this._queue=new Si,this._persistenceKey=(u==null?void 0:u.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const n=this._firestoreClient.terminate();this._queue=new Si(n),this._firestoreClient=void 0,await n}}}function Eo(r,n){const s=typeof r=="object"?r:Hs(),h=typeof r=="string"?r:"(default)",u=Bs(s,"firestore").getImmediate({identifier:h});if(!u._initialized){const y=Nr("firestore");y&&mo(u,...y)}return u}(function(n,s=!0){(function(u){Kt=u})(Fs),de(new Gt("firestore",(h,{instanceIdentifier:u,options:y})=>{const E=h.getProvider("app").getImmediate(),_=new vo(new no(h.getProvider("auth-internal")),new oo(h.getProvider("app-check-internal")),function(T,Z){if(!Object.prototype.hasOwnProperty.apply(T.options,["projectId"]))throw new M(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ye(T.options.projectId,Z)}(E,u),E);return y=Object.assign({useFetchStreams:s},y),_._setSettings(y),_},"PUBLIC").setMultipleInstances(!0)),At(vi,"4.7.5",n),At(vi,"4.7.5","esm2017")})();const _o={apiKey:"AIzaSyDko_MeQPaGYSBUcj8rxUlT3cnK8BBKXrI",authDomain:"my-first-project-c0802.firebaseapp.com",projectId:"my-first-project-c0802",storageBucket:"my-first-project-c0802.firebasestorage.app",messagingSenderId:"85295203241",appId:"1:85295203241:web:05ae79af041ceb257f7ab8"},wo=ki(_o),Ao=Eo(wo);function To(r,n){yo(Ao,"chats")}document.querySelector(".chatrooms");document.querySelector(".chat-ul");const Je=document.querySelector(".chat-form"),Io=document.querySelector(".user-form");document.querySelector(".msg");const So=document.querySelector(".roomtitle"),bo=localStorage.username?localStorage.username:"Guest";Io.username.placeholder=`username is ${bo}`;const Do=To();So.textContent="General";Je.addEventListener("submit",r=>{r.preventDefault();const n=Je.message.value.trim();Do.addChat(n).then(()=>Je.reset()).catch(s=>console.log(s))});
