const nt="ENTRIES",V="KEYS",T="VALUES",F="";class D{set;_type;_path;constructor(t,s){const n=t._tree,u=Array.from(n.keys());this.set=t,this._type=s,this._path=u.length>0?[{node:n,keys:u}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:s}=E(this._path);if(E(s)===F)return{done:!1,value:this.result()};const n=t.get(E(s));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=E(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>E(t)).filter(t=>t!==F).join("")}value(){return E(this._path).node.get(F)}result(){switch(this._type){case T:return this.value();case V:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const E=e=>e[e.length-1],ut=(e,t,s)=>{const n=new Map;if(t===void 0)return n;const u=t.length+1,o=u+s,i=new Uint8Array(o*u).fill(s+1);for(let r=0;r<u;++r)i[r]=r;for(let r=1;r<o;++r)i[r*u]=r;return R(e,t,s,n,i,1,u,""),n},R=(e,t,s,n,u,o,i,r)=>{const d=o*i;t:for(const l of e.keys())if(l===F){const a=u[d-1];a<=s&&n.set(r,[e.get(l),a])}else{let a=o;for(let h=0;h<l.length;++h,++a){const m=l[h],p=i*a,f=p-i;let c=u[p];const g=Math.max(0,a-s-1),_=Math.min(i-1,a+s);for(let y=g;y<_;++y){const b=m!==t[y],z=u[f+y]+ +b,A=u[f+y+1]+1,w=u[p+y]+1,L=u[p+y+1]=Math.min(z,A,w);L<c&&(c=L)}if(c>s)continue t}R(e.get(l),t,s,n,u,a,i,r+l)}};class C{_tree;_prefix;_size=void 0;constructor(t=new Map,s=""){this._tree=t,this._prefix=s}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[s,n]=x(this._tree,t.slice(this._prefix.length));if(s===void 0){const[u,o]=M(n);for(const i of u.keys())if(i!==F&&i.startsWith(o)){const r=new Map;return r.set(i.slice(o.length),u.get(i)),new C(r,t)}}return new C(s,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,ot(this._tree,t)}entries(){return new D(this,nt)}forEach(t){for(const[s,n]of this)t(s,n,this)}fuzzyGet(t,s){return ut(this._tree,t,s)}get(t){const s=I(this._tree,t);return s!==void 0?s.get(F):void 0}has(t){const s=I(this._tree,t);return s!==void 0&&s.has(F)}keys(){return new D(this,V)}set(t,s){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,O(this._tree,t).set(F,s),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=O(this._tree,t);return n.set(F,s(n.get(F))),this}fetch(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=O(this._tree,t);let u=n.get(F);return u===void 0&&n.set(F,u=s()),u}values(){return new D(this,T)}[Symbol.iterator](){return this.entries()}static from(t){const s=new C;for(const[n,u]of t)s.set(n,u);return s}static fromObject(t){return C.from(Object.entries(t))}}const x=(e,t,s=[])=>{if(t.length===0||e==null)return[e,s];for(const n of e.keys())if(n!==F&&t.startsWith(n))return s.push([e,n]),x(e.get(n),t.slice(n.length),s);return s.push([e,t]),x(void 0,"",s)},I=(e,t)=>{if(t.length===0||e==null)return e;for(const s of e.keys())if(s!==F&&t.startsWith(s))return I(e.get(s),t.slice(s.length))},O=(e,t)=>{const s=t.length;t:for(let n=0;e&&n<s;){for(const o of e.keys())if(o!==F&&t[n]===o[0]){const i=Math.min(s-n,o.length);let r=1;for(;r<i&&t[n+r]===o[r];)++r;const d=e.get(o);if(r===o.length)e=d;else{const l=new Map;l.set(o.slice(r),d),e.set(t.slice(n,n+r),l),e.delete(o),e=l}n+=r;continue t}const u=new Map;return e.set(t.slice(n),u),u}return e},ot=(e,t)=>{const[s,n]=x(e,t);if(s!==void 0){if(s.delete(F),s.size===0)W(n);else if(s.size===1){const[u,o]=s.entries().next().value;q(n,u,o)}}},W=e=>{if(e.length===0)return;const[t,s]=M(e);if(t.delete(s),t.size===0)W(e.slice(0,-1));else if(t.size===1){const[n,u]=t.entries().next().value;n!==F&&q(e.slice(0,-1),n,u)}},q=(e,t,s)=>{if(e.length===0)return;const[n,u]=M(e);n.set(u+t,s),n.delete(u)},M=e=>e[e.length-1],it=(e,t)=>{const s=e._idToShortId.get(t);if(s!=null)return e._storedFields.get(s)},rt=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,S="or",$="and",ct="and_not",lt=(e,t)=>{e.includes(t)||e.push(t)},P=(e,t)=>{for(const s of t)e.includes(s)||e.push(s)},N=({score:e},{score:t})=>t-e,ht=()=>new Map,k=e=>{const t=new Map;for(const s of Object.keys(e))t.set(parseInt(s,10),e[s]);return t},G=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,dt={[S]:(e,t)=>{for(const s of t.keys()){const n=e.get(s);if(n==null)e.set(s,t.get(s));else{const{score:u,terms:o,match:i}=t.get(s);n.score=n.score+u,n.match=Object.assign(n.match,i),P(n.terms,o)}}return e},[$]:(e,t)=>{const s=new Map;for(const n of t.keys()){const u=e.get(n);if(u==null)continue;const{score:o,terms:i,match:r}=t.get(n);P(u.terms,i),s.set(n,{score:u.score+o,terms:u.terms,match:Object.assign(u.match,r)})}return s},[ct]:(e,t)=>{for(const s of t.keys())e.delete(s);return e}},at=(e,t,s,n,u,o)=>{const{k:i,b:r,d}=o;return Math.log(1+(s-t+.5)/(t+.5))*(d+e*(i+1)/(e+i*(1-r+r*n/u)))},ft=e=>(t,s,n)=>{const u=typeof e.fuzzy=="function"?e.fuzzy(t,s,n):e.fuzzy||!1,o=typeof e.prefix=="function"?e.prefix(t,s,n):e.prefix===!0;return{term:t,fuzzy:u,prefix:o}},H=(e,t,s,n)=>{for(const u of Object.keys(e._fieldIds))if(e._fieldIds[u]===s){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${n}" was not present in field "${u}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},gt=(e,t,s,n)=>{if(!e._index.has(n)){H(e,s,t,n);return}const u=e._index.fetch(n,ht),o=u.get(t);o==null||o.get(s)==null?H(e,s,t,n):o.get(s)<=1?o.size<=1?u.delete(t):o.delete(s):o.set(s,o.get(s)-1),e._index.get(n).size===0&&e._index.delete(n)},mt={k:1.2,b:.7,d:.5},pt={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(rt),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof console?.[e]=="function"&&console[e](t)},autoVacuum:!0},J={combineWith:S,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:mt},Ft={combineWith:$,prefix:(e,t,s)=>t===s.length-1},_t={batchSize:1e3,batchWait:10},U={minDirtFactor:.1,minDirtCount:20},yt={..._t,...U},Y=(e,t=S)=>{if(e.length===0)return new Map;const s=t.toLowerCase();return e.reduce(dt[s])||new Map},B=(e,t,s,n,u,o,i,r,d=new Map)=>{if(u==null)return d;for(const l of Object.keys(o)){const a=o[l],h=e._fieldIds[l],m=u.get(h);if(m==null)continue;let p=m.size;const f=e._avgFieldLength[h];for(const c of m.keys()){if(!e._documentIds.has(c)){gt(e,h,c,s),p-=1;continue}const g=i?i(e._documentIds.get(c),s,e._storedFields.get(c)):1;if(!g)continue;const _=m.get(c),y=e._fieldLength.get(c)[h],b=at(_,p,e._documentCount,y,f,r),z=n*a*g*b,A=d.get(c);if(A){A.score+=z,lt(A.terms,t);const w=G(A.match,s);w?w.push(l):A.match[s]=[l]}else d.set(c,{score:z,terms:[t],match:{[s]:[l]}})}}return d},At=(e,t,s)=>{const n={...e._options.searchOptions,...s},u=(n.fields||e._options.fields).reduce((c,g)=>({...c,[g]:G(n.boost,g)||1}),{}),{boostDocument:o,weights:i,maxFuzzy:r,bm25:d}=n,{fuzzy:l,prefix:a}={...J.weights,...i},h=e._index.get(t.term),m=B(e,t.term,t.term,1,h,u,o,d);let p,f;if(t.prefix&&(p=e._index.atPrefix(t.term)),t.fuzzy){const c=t.fuzzy===!0?.2:t.fuzzy,g=c<1?Math.min(r,Math.round(t.term.length*c)):c;g&&(f=e._index.fuzzyGet(t.term,g))}if(p)for(const[c,g]of p){const _=c.length-t.term.length;if(!_)continue;f?.delete(c);const y=a*c.length/(c.length+.3*_);B(e,t.term,c,y,g,u,o,d,m)}if(f)for(const c of f.keys()){const[g,_]=f.get(c);if(!_)continue;const y=l*c.length/(c.length+_);B(e,t.term,c,y,g,u,o,d,m)}return m},X=(e,t,s={})=>{if(typeof t!="string"){const a={...s,...t,queries:void 0},h=t.queries.map(m=>X(e,m,a));return Y(h,a.combineWith)}const{tokenize:n,processTerm:u,searchOptions:o}=e._options,i={tokenize:n,processTerm:u,...o,...s},{tokenize:r,processTerm:d}=i,l=r(t).flatMap(a=>d(a)).filter(a=>!!a).map(ft(i)).map(a=>At(e,a,i));return Y(l,i.combineWith)},K=(e,t,s={})=>{const n=X(e,t,s),u=[];for(const[o,{score:i,terms:r,match:d}]of n){const l=r.length,a={id:e._documentIds.get(o),score:i*l,terms:Object.keys(d),match:d};Object.assign(a,e._storedFields.get(o)),(s.filter==null||s.filter(a))&&u.push(a)}return u.sort(N),u},Ct=(e,t,s={})=>{s={...e._options.autoSuggestOptions,...s};const n=new Map;for(const{score:o,terms:i}of K(e,t,s)){const r=i.join(" "),d=n.get(r);d!=null?(d.score+=o,d.count+=1):n.set(r,{score:o,terms:i,count:1})}const u=[];for(const[o,{score:i,terms:r,count:d}]of n)u.push({suggestion:o,terms:r,score:i/d});return u.sort(N),u};class Et{_options;_index;_documentCount;_documentIds;_idToShortId;_fieldIds;_fieldLength;_avgFieldLength;_nextId;_storedFields;_dirtCount;_currentVacuum;_enqueuedVacuum;_enqueuedVacuumConditions;constructor(t){if(t?.fields==null)throw new Error('SlimSearch: option "fields" must be provided');const s=t.autoVacuum==null||t.autoVacuum===!0?yt:t.autoVacuum;this._options={...pt,...t,autoVacuum:s,searchOptions:{...J,...t.searchOptions||{}},autoSuggestOptions:{...Ft,...t.autoSuggestOptions||{}}},this._index=new C,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=U,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[s,n]of this._index){const u={};for(const[o,i]of n)u[o]=Object.fromEntries(i);t.push([s,u])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,serializationVersion:2}}addFields(t){for(let s=0;s<t.length;s++)this._fieldIds[t[s]]=s}}const zt=({index:e,documentCount:t,nextId:s,documentIds:n,fieldIds:u,fieldLength:o,averageFieldLength:i,storedFields:r,dirtCount:d,serializationVersion:l},a)=>{if(l!==1&&l!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const h=new Et(a);h._documentCount=t,h._nextId=s,h._documentIds=k(n),h._idToShortId=new Map,h._fieldIds=u,h._fieldLength=k(o),h._avgFieldLength=i,h._storedFields=k(r),h._dirtCount=d||0,h._index=new C;for(const[m,p]of h._documentIds)h._idToShortId.set(p,m);for(const[m,p]of e){const f=new Map;for(const c of Object.keys(p)){let g=p[c];l===1&&(g=g.ds),f.set(parseInt(c,10),k(g))}h._index.set(m,f)}return h},Q=Object.entries,wt=Object.fromEntries,j=(e,t)=>{const s=e.toLowerCase(),n=t.toLowerCase(),u=[];let o=0,i=0;const r=(l,a=!1)=>{let h="";i===0?h=l.length>20?`… ${l.slice(-20)}`:l:a?h=l.length+i>100?`${l.slice(0,100-i)}… `:l:h=l.length>20?`${l.slice(0,20)} … ${l.slice(-20)}`:l,h&&u.push(h),i+=h.length,a||(u.push(["mark",t]),i+=t.length,i>=100&&u.push(" …"))};let d=s.indexOf(n,o);if(d===-1)return null;for(;d>=0;){const l=d+n.length;if(r(e.slice(o,d)),o=l,i>100)break;d=s.indexOf(n,o)}return i<100&&r(e.slice(o),!0),u},Z=/[\u4e00-\u9fa5]/g,tt=(e={})=>({fuzzy:.2,prefix:!0,processTerm:t=>{const s=t.match(Z)||[],n=t.replace(Z,"").toLowerCase();return n?[n,...s]:[...s]},...e}),xt=(e,t)=>t.contents.reduce((s,[,n])=>s+n,0)-e.contents.reduce((s,[,n])=>s+n,0),kt=(e,t)=>Math.max(...t.contents.map(([,s])=>s))-Math.max(...e.contents.map(([,s])=>s)),et=(e,t,s={})=>{const n={};return K(t,e,tt({boost:{h:2,t:1,c:4},...s})).forEach(u=>{const{id:o,terms:i,score:r}=u,d=o.includes("@"),l=o.includes("#"),[a,h]=o.split(/[#@]/),m=i.sort((f,c)=>f.length-c.length).filter((f,c)=>i.slice(c+1).every(g=>!g.includes(f))),{contents:p}=n[a]??={title:"",contents:[]};if(d)p.push([{type:"customField",key:a,index:h,display:m.map(f=>u.c.map(c=>j(c,f))).flat().filter(f=>f!==null)},r]);else{const f=m.map(c=>j(u.h,c)).filter(c=>c!==null);if(f.length&&p.push([{type:l?"heading":"title",key:a,...l&&{anchor:h},display:f},r]),"t"in u)for(const c of u.t){const g=m.map(_=>j(c,_)).filter(_=>_!==null);g.length&&p.push([{type:"text",key:a,...l&&{anchor:h},display:g},r])}}}),Q(n).sort(([,u],[,o])=>"max"==="total"?xt(u,o):kt(u,o)).map(([u,{title:o,contents:i}])=>{if(!o){const r=it(t,u);r&&(o=r.h)}return{title:o,contents:i.map(([r])=>r)}})},st=(e,t,s={})=>Ct(t,e,tt(s)).map(({suggestion:n})=>n),v=wt(Q(JSON.parse("{\"/\":{\"documentCount\":139,\"nextId\":139,\"documentIds\":{\"0\":\"v-39a2059c\",\"1\":\"v-22a39d25\",\"2\":\"v-22a39d25#许可与版权\",\"3\":\"v-ce159204\",\"4\":\"v-ce159204#v0-1-12-4-2023-11-24\",\"5\":\"v-ce159204#问题修复\",\"6\":\"v-ce159204#特性改动\",\"7\":\"v-ce159204#v0-1-12-3-2023-09-05\",\"8\":\"v-ce159204#问题修复-1\",\"9\":\"v-ce159204#视觉改进\",\"10\":\"v-ce159204#新特性\",\"11\":\"v-ce159204#杂项\",\"12\":\"v-ce159204#v0-1-12-2-2023-07-05\",\"13\":\"v-ce159204#v0-1-12-1-2023-06-17\",\"14\":\"v-ce159204#v0-1-12-2023-06-11\",\"15\":\"v-ce159204#新特性-1\",\"16\":\"v-ce159204#问题修复-2\",\"17\":\"v-ce159204#视觉改进-1\",\"18\":\"v-ce159204#性能改进\",\"19\":\"v-ce159204#杂项-1\",\"20\":\"v-8daa1a0e\",\"21\":\"v-8daa1a0e#🚀-安装与使用\",\"22\":\"v-8daa1a0e#✨-问题反馈-求助\",\"23\":\"v-79316b45\",\"24\":\"v-79316b45#谱面编辑-预览\",\"25\":\"v-79316b45#高级编辑\",\"26\":\"v-79316b45#延迟调整\",\"27\":\"v-79316b45#timing\",\"28\":\"v-79316b45#界面\",\"29\":\"v-79316b45#功能键-导入导出\",\"30\":\"v-20536710\",\"31\":\"v-20536710#表达式\",\"32\":\"v-20536710#hold-属性的修改\",\"33\":\"v-4f4ccb8f\",\"34\":\"v-4f4ccb8f#基础配置\",\"35\":\"v-4f4ccb8f#fullscreen\",\"36\":\"v-4f4ccb8f#resolutionw-resolutionh\",\"37\":\"v-4f4ccb8f#fps\",\"38\":\"v-4f4ccb8f#autosave\",\"39\":\"v-4f4ccb8f#language\",\"40\":\"v-4f4ccb8f#theme\",\"41\":\"v-4f4ccb8f#autoupdate\",\"42\":\"v-4f4ccb8f#simplify\",\"43\":\"v-4f4ccb8f#graphics\",\"44\":\"v-4f4ccb8f#graphics-aa\",\"45\":\"v-4f4ccb8f#graphics-vsync\",\"46\":\"v-4f4ccb8f#进阶配置\",\"47\":\"v-4f4ccb8f#fmod-mp3-delay\",\"48\":\"v-4f4ccb8f#announcement-max-limit\",\"49\":\"v-4f4ccb8f#信息\",\"50\":\"v-4f4ccb8f#version\",\"51\":\"v-34c019a3\",\"52\":\"v-34c019a3#编辑模式\",\"53\":\"v-34c019a3#音符\",\"54\":\"v-34c019a3#放置音符\",\"55\":\"v-34c019a3#移动音符\",\"56\":\"v-34c019a3#选中音符\",\"57\":\"v-34c019a3#吸附音符\",\"58\":\"v-34c019a3#批量操作\",\"59\":\"v-34c019a3#批量移动音符-吸附音符\",\"60\":\"v-34c019a3#批量删除音符\",\"61\":\"v-34c019a3#批量调节音符宽度\",\"62\":\"v-34c019a3#复制音符宽度\",\"63\":\"v-34c019a3#复制音符\",\"64\":\"v-34c019a3#粘贴音符\",\"65\":\"v-34c019a3#对称-镜像音符\",\"66\":\"v-34c019a3#撤销与还原\",\"67\":\"v-34c019a3#默认宽度\",\"68\":\"v-34c019a3#设置默认宽度\",\"69\":\"v-34c019a3#设置默认宽度模式\",\"70\":\"v-34c019a3#宽度一致\",\"71\":\"v-34c019a3#视觉一致\",\"72\":\"v-34c019a3#正侧面分离\",\"73\":\"v-34c019a3#三面分离\",\"74\":\"v-34c019a3#编辑侧\",\"75\":\"v-34c019a3#切换编辑侧\",\"76\":\"v-34c019a3#透明化非编辑侧音符\",\"77\":\"v-34c019a3#切换侧面下落类型\",\"78\":\"v-34c019a3#网格吸附与拍线\",\"79\":\"v-34c019a3#节拍线\",\"80\":\"v-34c019a3#节拍线样式\",\"81\":\"v-34c019a3#节拍细分-组\",\"82\":\"v-34c019a3#自定义节拍细分\",\"83\":\"v-34c019a3#网格吸附的开关\",\"84\":\"v-34c019a3#编辑界面\",\"85\":\"v-34c019a3#回放预览\",\"86\":\"v-34c019a3#设置背景图片\",\"87\":\"v-34c019a3#设置背景视频\",\"88\":\"v-34c019a3#重设背景\",\"89\":\"v-34c019a3#bar\",\"90\":\"v-34c019a3#设置-删除全局-bar-信息\",\"91\":\"v-34c019a3#切换-bar-time-显示\",\"92\":\"v-34c019a3#延迟调整\",\"93\":\"v-34c019a3#批量调整谱面音符时间\",\"94\":\"v-34c019a3#设备音乐播放延迟调整\",\"95\":\"v-34c019a3#工具栏\",\"96\":\"v-34c019a3#音乐-打击音\",\"97\":\"v-34c019a3#背景亮度\",\"98\":\"v-34c019a3#其它\",\"99\":\"v-34c019a3#全屏模式\",\"100\":\"v-34c019a3#更改谱面标题\",\"101\":\"v-3f1b9939\",\"102\":\"v-3f1b9939#导出-xml-谱面\",\"103\":\"v-3f1b9939#误差修正\",\"104\":\"v-3f1b9939#在-dynamite-上游玩\",\"105\":\"v-3f1b9939#导出适用于-dynamaker-modified-的谱面格式\",\"106\":\"v-3f1b9939#对校时的默认处理\",\"107\":\"v-b79caf7c\",\"108\":\"v-b79caf7c#dyn\",\"109\":\"v-b79caf7c#xml\",\"110\":\"v-fb0f0066\",\"111\":\"v-fb0f0066#下载-安装\",\"112\":\"v-fb0f0066#从-dynode-开始\",\"113\":\"v-fb0f0066#从-dynamaker-开始\",\"114\":\"v-fb0f0066#基本操作方式\",\"115\":\"v-fb0f0066#从-dynamaker-中导入谱面\",\"116\":\"v-fb0f0066#校时与节拍细分\",\"117\":\"v-fb0f0066#在这之后\",\"118\":\"v-138687e8\",\"119\":\"v-138687e8#导入-xml-dyn-谱面\",\"120\":\"v-138687e8#导入-osu-谱面\",\"121\":\"v-fffb8e28\",\"122\":\"v-4c81344c\",\"123\":\"v-4c81344c#项目所包含的\",\"124\":\"v-4c81344c#新建项目\",\"125\":\"v-4c81344c#打开项目\",\"126\":\"v-4c81344c#保存项目\",\"127\":\"v-db4fab3a\",\"128\":\"v-db4fab3a#timing-point\",\"129\":\"v-db4fab3a#编辑-timing\",\"130\":\"v-db4fab3a#添加-timing-point\",\"131\":\"v-db4fab3a#删除-timing-point\",\"132\":\"v-db4fab3a#手动修改\",\"133\":\"v-db4fab3a#撤销-还原\",\"134\":\"v-db4fab3a#导入-timing\",\"135\":\"v-db4fab3a#从-osu-file-中导入-timing\",\"136\":\"v-db4fab3a#从-dynamaker-中导入-timing\",\"137\":\"v-db4fab3a#dynode-与-bar\",\"138\":\"v-db4fab3a#mp3-与-wav-格式的延迟\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[1],\"1\":[1],\"2\":[1],\"3\":[1],\"4\":[8],\"5\":[1],\"6\":[1],\"7\":[8],\"8\":[1],\"9\":[1],\"10\":[1],\"11\":[1],\"12\":[8],\"13\":[7],\"14\":[7],\"15\":[1],\"16\":[1],\"17\":[1],\"18\":[1],\"19\":[1],\"20\":[1],\"21\":[2],\"22\":[3],\"23\":[1],\"24\":[2],\"25\":[1],\"26\":[1],\"27\":[1],\"28\":[1],\"29\":[2],\"30\":[1],\"31\":[1],\"32\":[2],\"33\":[1],\"34\":[1],\"35\":[1],\"36\":[2],\"37\":[1],\"38\":[1],\"39\":[1],\"40\":[1],\"41\":[1],\"42\":[1],\"43\":[1],\"44\":[2],\"45\":[2],\"46\":[1],\"47\":[3],\"48\":[3],\"49\":[1],\"50\":[1],\"51\":[1],\"52\":[1],\"53\":[1],\"54\":[1],\"55\":[1],\"56\":[1],\"57\":[1],\"58\":[1],\"59\":[2],\"60\":[1],\"61\":[1],\"62\":[1],\"63\":[1],\"64\":[1],\"65\":[2],\"66\":[1],\"67\":[1],\"68\":[1],\"69\":[1],\"70\":[1],\"71\":[1],\"72\":[1],\"73\":[1],\"74\":[1],\"75\":[1],\"76\":[1],\"77\":[1],\"78\":[1],\"79\":[1],\"80\":[1],\"81\":[3],\"82\":[1],\"83\":[1],\"84\":[1],\"85\":[1],\"86\":[1],\"87\":[1],\"88\":[1],\"89\":[1],\"90\":[4],\"91\":[4],\"92\":[1],\"93\":[1],\"94\":[1],\"95\":[1],\"96\":[2],\"97\":[1],\"98\":[1],\"99\":[1],\"100\":[1],\"101\":[1],\"102\":[3],\"103\":[1],\"104\":[3],\"105\":[4],\"106\":[1],\"107\":[1],\"108\":[2],\"109\":[2],\"110\":[1],\"111\":[2],\"112\":[3],\"113\":[3],\"114\":[1],\"115\":[3],\"116\":[1],\"117\":[2],\"118\":[1],\"119\":[4],\"120\":[3],\"121\":[1],\"122\":[1],\"123\":[1],\"124\":[1],\"125\":[1],\"126\":[1],\"127\":[1],\"128\":[2],\"129\":[2],\"130\":[3],\"131\":[3],\"132\":[1],\"133\":[2],\"134\":[2],\"135\":[5],\"136\":[4],\"137\":[3],\"138\":[4]},\"averageFieldLength\":[1.7122302158273381],\"storedFields\":{\"0\":{\"h\":\"常见问题\"},\"1\":{\"h\":\"关于\"},\"2\":{\"h\":\"许可与版权\"},\"3\":{\"h\":\"更新日志\"},\"4\":{\"h\":\"v0.1.12.4 (2023-11-24)\"},\"5\":{\"h\":\"问题修复\"},\"6\":{\"h\":\"特性改动\"},\"7\":{\"h\":\"v0.1.12.3 (2023-09-05)\"},\"8\":{\"h\":\"问题修复\"},\"9\":{\"h\":\"视觉改进\"},\"10\":{\"h\":\"新特性\"},\"11\":{\"h\":\"杂项\"},\"12\":{\"h\":\"v0.1.12.2 (2023-07-05)\"},\"13\":{\"h\":\"v0.1.12.1 (2023-06-17)\"},\"14\":{\"h\":\"v0.1.12 (2023-06-11)\"},\"15\":{\"h\":\"新特性\"},\"16\":{\"h\":\"问题修复\"},\"17\":{\"h\":\"视觉改进\"},\"18\":{\"h\":\"性能改进\"},\"19\":{\"h\":\"杂项\"},\"20\":{\"h\":\"主页\"},\"21\":{\"h\":\"🚀 安装与使用\"},\"22\":{\"h\":\"✨ 问题反馈 / 求助\"},\"23\":{\"h\":\"快捷键\"},\"24\":{\"h\":\"谱面编辑 & 预览\"},\"25\":{\"h\":\"高级编辑\"},\"26\":{\"h\":\"延迟调整\"},\"27\":{\"h\":\"Timing\"},\"28\":{\"h\":\"界面\"},\"29\":{\"h\":\"功能键 & 导入导出\"},\"30\":{\"h\":\"高级功能\"},\"31\":{\"h\":\"表达式\"},\"32\":{\"h\":\"HOLD 属性的修改\"},\"33\":{\"h\":\"配置\"},\"34\":{\"h\":\"基础配置\"},\"35\":{\"h\":\"fullscreen\"},\"36\":{\"h\":\"resolutionW / resolutionH\"},\"37\":{\"h\":\"FPS\"},\"38\":{\"h\":\"autosave\"},\"39\":{\"h\":\"language\"},\"40\":{\"h\":\"theme\"},\"41\":{\"h\":\"autoupdate\"},\"42\":{\"h\":\"simplify\"},\"43\":{\"h\":\"graphics\"},\"44\":{\"h\":\"graphics.AA\"},\"45\":{\"h\":\"graphics.VSync\"},\"46\":{\"h\":\"进阶配置\"},\"47\":{\"h\":\"FMOD_MP3_DELAY\"},\"48\":{\"h\":\"ANNOUNCEMENT_MAX_LIMIT\"},\"49\":{\"h\":\"信息\"},\"50\":{\"h\":\"version\"},\"51\":{\"h\":\"谱面编辑\"},\"52\":{\"h\":\"编辑模式\"},\"53\":{\"h\":\"音符\"},\"54\":{\"h\":\"放置音符\"},\"55\":{\"h\":\"移动音符\"},\"56\":{\"h\":\"选中音符\"},\"57\":{\"h\":\"吸附音符\"},\"58\":{\"h\":\"批量操作\"},\"59\":{\"h\":\"批量移动音符 / 吸附音符\"},\"60\":{\"h\":\"批量删除音符\"},\"61\":{\"h\":\"批量调节音符宽度\"},\"62\":{\"h\":\"复制音符宽度\"},\"63\":{\"h\":\"复制音符\"},\"64\":{\"h\":\"粘贴音符\"},\"65\":{\"h\":\"对称 / 镜像音符\"},\"66\":{\"h\":\"撤销与还原\"},\"67\":{\"h\":\"默认宽度\"},\"68\":{\"h\":\"设置默认宽度\"},\"69\":{\"h\":\"设置默认宽度模式\"},\"70\":{\"h\":\"宽度一致\"},\"71\":{\"h\":\"视觉一致\"},\"72\":{\"h\":\"正侧面分离\"},\"73\":{\"h\":\"三面分离\"},\"74\":{\"h\":\"编辑侧\"},\"75\":{\"h\":\"切换编辑侧\"},\"76\":{\"h\":\"透明化非编辑侧音符\"},\"77\":{\"h\":\"切换侧面下落类型\"},\"78\":{\"h\":\"网格吸附与拍线\"},\"79\":{\"h\":\"节拍线\"},\"80\":{\"h\":\"节拍线样式\"},\"81\":{\"h\":\"节拍细分（组）\"},\"82\":{\"h\":\"自定义节拍细分\"},\"83\":{\"h\":\"网格吸附的开关\"},\"84\":{\"h\":\"编辑界面\"},\"85\":{\"h\":\"回放预览\"},\"86\":{\"h\":\"设置背景图片\"},\"87\":{\"h\":\"设置背景视频\"},\"88\":{\"h\":\"重设背景\"},\"89\":{\"h\":\"Bar\"},\"90\":{\"h\":\"设置/删除全局 Bar 信息\"},\"91\":{\"h\":\"切换 Bar / Time 显示\"},\"92\":{\"h\":\"延迟调整\"},\"93\":{\"h\":\"批量调整谱面音符时间\"},\"94\":{\"h\":\"设备音乐播放延迟调整\"},\"95\":{\"h\":\"工具栏\"},\"96\":{\"h\":\"音乐 / 打击音\"},\"97\":{\"h\":\"背景亮度\"},\"98\":{\"h\":\"其它\"},\"99\":{\"h\":\"全屏模式\"},\"100\":{\"h\":\"更改谱面标题\"},\"101\":{\"h\":\"谱面导出\"},\"102\":{\"h\":\"导出 .xml 谱面\"},\"103\":{\"h\":\"误差修正\"},\"104\":{\"h\":\"在 Dynamite 上游玩\"},\"105\":{\"h\":\"导出适用于 Dynamaker-modified 的谱面格式\"},\"106\":{\"h\":\"对校时的默认处理\"},\"107\":{\"h\":\"文件格式\"},\"108\":{\"h\":\".dyn\"},\"109\":{\"h\":\".xml\"},\"110\":{\"h\":\"快速上手\"},\"111\":{\"h\":\"下载 & 安装\"},\"112\":{\"h\":\"从 DyNode 开始\"},\"113\":{\"h\":\"从 Dynamaker 开始\"},\"114\":{\"h\":\"基本操作方式\"},\"115\":{\"h\":\"从 Dynamaker 中导入谱面\"},\"116\":{\"h\":\"校时与节拍细分\"},\"117\":{\"h\":\"在这之后...\"},\"118\":{\"h\":\"谱面导入\"},\"119\":{\"h\":\"导入 .xml/.dyn 谱面\"},\"120\":{\"h\":\"导入 .osu 谱面\"},\"121\":{\"h\":\"指南\"},\"122\":{\"h\":\"项目\"},\"123\":{\"h\":\"项目所包含的\"},\"124\":{\"h\":\"新建项目\"},\"125\":{\"h\":\"打开项目\"},\"126\":{\"h\":\"保存项目\"},\"127\":{\"h\":\"Timing\"},\"128\":{\"h\":\"Timing Point\"},\"129\":{\"h\":\"编辑 Timing\"},\"130\":{\"h\":\"添加 Timing Point\"},\"131\":{\"h\":\"删除 Timing Point\"},\"132\":{\"h\":\"手动修改\"},\"133\":{\"h\":\"撤销/还原\"},\"134\":{\"h\":\"导入 Timing\"},\"135\":{\"h\":\"从 Osu File 中导入 Timing\"},\"136\":{\"h\":\"从 Dynamaker 中导入 Timing\"},\"137\":{\"h\":\"DyNode 与 Bar\"},\"138\":{\"h\":\"MP3 与 WAV 格式的延迟\"}},\"dirtCount\":0,\"index\":[[\"格式的延迟\",{\"0\":{\"138\":1}}],[\"wav\",{\"0\":{\"138\":1}}],[\"与\",{\"0\":{\"137\":1,\"138\":1}}],[\"中导入\",{\"0\":{\"135\":1,\"136\":1}}],[\"中导入谱面\",{\"0\":{\"115\":1}}],[\"还原\",{\"0\":{\"133\":1}}],[\"撤销\",{\"0\":{\"133\":1}}],[\"撤销与还原\",{\"0\":{\"66\":1}}],[\"手动修改\",{\"0\":{\"132\":1}}],[\"删除\",{\"0\":{\"131\":1}}],[\"删除全局\",{\"0\":{\"90\":1}}],[\"添加\",{\"0\":{\"130\":1}}],[\"point\",{\"0\":{\"128\":1,\"130\":1,\"131\":1}}],[\"保存项目\",{\"0\":{\"126\":1}}],[\"打开项目\",{\"0\":{\"125\":1}}],[\"打击音\",{\"0\":{\"96\":1}}],[\"新建项目\",{\"0\":{\"124\":1}}],[\"新特性\",{\"0\":{\"10\":1,\"15\":1}}],[\"项目所包含的\",{\"0\":{\"123\":1}}],[\"项目\",{\"0\":{\"122\":1}}],[\"指南\",{\"0\":{\"121\":1}}],[\"osu\",{\"0\":{\"120\":1,\"135\":1}}],[\"校时与节拍细分\",{\"0\":{\"116\":1}}],[\"基本操作方式\",{\"0\":{\"114\":1}}],[\"基础配置\",{\"0\":{\"34\":1}}],[\"开始\",{\"0\":{\"112\":1,\"113\":1}}],[\"从\",{\"0\":{\"112\":1,\"113\":1,\"115\":1,\"135\":1,\"136\":1}}],[\"安装\",{\"0\":{\"111\":1}}],[\"安装与使用\",{\"0\":{\"21\":1}}],[\"下载\",{\"0\":{\"111\":1}}],[\"快速上手\",{\"0\":{\"110\":1}}],[\"快捷键\",{\"0\":{\"23\":1}}],[\"文件格式\",{\"0\":{\"107\":1}}],[\"对校时的默认处理\",{\"0\":{\"106\":1}}],[\"对称\",{\"0\":{\"65\":1}}],[\"的谱面格式\",{\"0\":{\"105\":1}}],[\"上游玩\",{\"0\":{\"104\":1}}],[\"dynode\",{\"0\":{\"112\":1,\"137\":1}}],[\"dyn\",{\"0\":{\"108\":1,\"119\":1}}],[\"dynamaker\",{\"0\":{\"105\":1,\"113\":1,\"115\":1,\"136\":1}}],[\"dynamite\",{\"0\":{\"104\":1}}],[\"delay\",{\"0\":{\"47\":1}}],[\"在这之后\",{\"0\":{\"117\":1}}],[\"在\",{\"0\":{\"104\":1}}],[\"误差修正\",{\"0\":{\"103\":1}}],[\"xml\",{\"0\":{\"102\":1,\"109\":1,\"119\":1}}],[\"导入\",{\"0\":{\"119\":1,\"120\":1,\"134\":1}}],[\"导入导出\",{\"0\":{\"29\":1}}],[\"导出适用于\",{\"0\":{\"105\":1}}],[\"导出\",{\"0\":{\"102\":1}}],[\"谱面导入\",{\"0\":{\"118\":1}}],[\"谱面导出\",{\"0\":{\"101\":1}}],[\"谱面\",{\"0\":{\"102\":1,\"119\":1,\"120\":1}}],[\"谱面编辑\",{\"0\":{\"24\":1,\"51\":1}}],[\"更改谱面标题\",{\"0\":{\"100\":1}}],[\"更新日志\",{\"0\":{\"3\":1}}],[\"全屏模式\",{\"0\":{\"99\":1}}],[\"其它\",{\"0\":{\"98\":1}}],[\"背景亮度\",{\"0\":{\"97\":1}}],[\"音乐\",{\"0\":{\"96\":1}}],[\"音符\",{\"0\":{\"53\":1}}],[\"工具栏\",{\"0\":{\"95\":1}}],[\"设备音乐播放延迟调整\",{\"0\":{\"94\":1}}],[\"设置\",{\"0\":{\"90\":1}}],[\"设置背景视频\",{\"0\":{\"87\":1}}],[\"设置背景图片\",{\"0\":{\"86\":1}}],[\"设置默认宽度模式\",{\"0\":{\"69\":1}}],[\"设置默认宽度\",{\"0\":{\"68\":1}}],[\"显示\",{\"0\":{\"91\":1}}],[\"bar\",{\"0\":{\"89\":1,\"90\":1,\"91\":1,\"137\":1}}],[\"重设背景\",{\"0\":{\"88\":1}}],[\"回放预览\",{\"0\":{\"85\":1}}],[\"网格吸附的开关\",{\"0\":{\"83\":1}}],[\"网格吸附与拍线\",{\"0\":{\"78\":1}}],[\"自定义节拍细分\",{\"0\":{\"82\":1}}],[\"组\",{\"0\":{\"81\":1}}],[\"节拍细分\",{\"0\":{\"81\":1}}],[\"节拍线样式\",{\"0\":{\"80\":1}}],[\"节拍线\",{\"0\":{\"79\":1}}],[\"切换\",{\"0\":{\"91\":1}}],[\"切换侧面下落类型\",{\"0\":{\"77\":1}}],[\"切换编辑侧\",{\"0\":{\"75\":1}}],[\"透明化非编辑侧音符\",{\"0\":{\"76\":1}}],[\"编辑\",{\"0\":{\"129\":1}}],[\"编辑界面\",{\"0\":{\"84\":1}}],[\"编辑侧\",{\"0\":{\"74\":1}}],[\"编辑模式\",{\"0\":{\"52\":1}}],[\"三面分离\",{\"0\":{\"73\":1}}],[\"正侧面分离\",{\"0\":{\"72\":1}}],[\"视觉一致\",{\"0\":{\"71\":1}}],[\"视觉改进\",{\"0\":{\"9\":1,\"17\":1}}],[\"宽度一致\",{\"0\":{\"70\":1}}],[\"默认宽度\",{\"0\":{\"67\":1}}],[\"镜像音符\",{\"0\":{\"65\":1}}],[\"粘贴音符\",{\"0\":{\"64\":1}}],[\"复制音符\",{\"0\":{\"63\":1}}],[\"复制音符宽度\",{\"0\":{\"62\":1}}],[\"批量调整谱面音符时间\",{\"0\":{\"93\":1}}],[\"批量调节音符宽度\",{\"0\":{\"61\":1}}],[\"批量删除音符\",{\"0\":{\"60\":1}}],[\"批量移动音符\",{\"0\":{\"59\":1}}],[\"批量操作\",{\"0\":{\"58\":1}}],[\"吸附音符\",{\"0\":{\"57\":1,\"59\":1}}],[\"选中音符\",{\"0\":{\"56\":1}}],[\"移动音符\",{\"0\":{\"55\":1}}],[\"放置音符\",{\"0\":{\"54\":1}}],[\"信息\",{\"0\":{\"49\":1,\"90\":1}}],[\"limit\",{\"0\":{\"48\":1}}],[\"language\",{\"0\":{\"39\":1}}],[\"modified\",{\"0\":{\"105\":1}}],[\"max\",{\"0\":{\"48\":1}}],[\"mp3\",{\"0\":{\"47\":1,\"138\":1}}],[\"进阶配置\",{\"0\":{\"46\":1}}],[\"version\",{\"0\":{\"50\":1}}],[\"vsync\",{\"0\":{\"45\":1}}],[\"v0\",{\"0\":{\"4\":1,\"7\":1,\"12\":1,\"13\":1,\"14\":1}}],[\"announcement\",{\"0\":{\"48\":1}}],[\"aa\",{\"0\":{\"44\":1}}],[\"autoupdate\",{\"0\":{\"41\":1}}],[\"autosave\",{\"0\":{\"38\":1}}],[\"graphics\",{\"0\":{\"43\":1,\"44\":1,\"45\":1}}],[\"simplify\",{\"0\":{\"42\":1}}],[\"time\",{\"0\":{\"91\":1}}],[\"timing\",{\"0\":{\"27\":1,\"127\":1,\"128\":1,\"129\":1,\"130\":1,\"131\":1,\"134\":1,\"135\":1,\"136\":1}}],[\"theme\",{\"0\":{\"40\":1}}],[\"file\",{\"0\":{\"135\":1}}],[\"fmod\",{\"0\":{\"47\":1}}],[\"fps\",{\"0\":{\"37\":1}}],[\"fullscreen\",{\"0\":{\"35\":1}}],[\"resolutionh\",{\"0\":{\"36\":1}}],[\"resolutionw\",{\"0\":{\"36\":1}}],[\"配置\",{\"0\":{\"33\":1}}],[\"属性的修改\",{\"0\":{\"32\":1}}],[\"hold\",{\"0\":{\"32\":1}}],[\"表达式\",{\"0\":{\"31\":1}}],[\"高级功能\",{\"0\":{\"30\":1}}],[\"高级编辑\",{\"0\":{\"25\":1}}],[\"功能键\",{\"0\":{\"29\":1}}],[\"界面\",{\"0\":{\"28\":1}}],[\"延迟调整\",{\"0\":{\"26\":1,\"92\":1}}],[\"预览\",{\"0\":{\"24\":1}}],[\"求助\",{\"0\":{\"22\":1}}],[\"问题反馈\",{\"0\":{\"22\":1}}],[\"问题修复\",{\"0\":{\"5\":1,\"8\":1,\"16\":1}}],[\"✨\",{\"0\":{\"22\":1}}],[\"🚀\",{\"0\":{\"21\":1}}],[\"主页\",{\"0\":{\"20\":1}}],[\"性能改进\",{\"0\":{\"18\":1}}],[\"杂项\",{\"0\":{\"11\":1,\"19\":1}}],[\"06\",{\"0\":{\"13\":1,\"14\":1}}],[\"07\",{\"0\":{\"12\":1}}],[\"05\",{\"0\":{\"7\":1,\"12\":1}}],[\"09\",{\"0\":{\"7\":1}}],[\"3\",{\"0\":{\"7\":1}}],[\"特性改动\",{\"0\":{\"6\":1}}],[\"2\",{\"0\":{\"12\":1}}],[\"24\",{\"0\":{\"4\":1}}],[\"2023\",{\"0\":{\"4\":1,\"7\":1,\"12\":1,\"13\":1,\"14\":1}}],[\"4\",{\"0\":{\"4\":1}}],[\"17\",{\"0\":{\"13\":1}}],[\"11\",{\"0\":{\"4\":1,\"14\":1}}],[\"12\",{\"0\":{\"4\":1,\"7\":1,\"12\":1,\"13\":1,\"14\":1}}],[\"1\",{\"0\":{\"4\":1,\"7\":1,\"12\":1,\"13\":2,\"14\":1}}],[\"许可与版权\",{\"0\":{\"2\":1}}],[\"关于\",{\"0\":{\"1\":1}}],[\"常见问题\",{\"0\":{\"0\":1}}]],\"serializationVersion\":2}}")).map(([e,t])=>[e,zt(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:s,options:n}})=>{e==="suggest"?self.postMessage(st(t,v[s],n)):e==="search"?self.postMessage(et(t,v[s],n)):self.postMessage({suggestions:st(t,v[s],n),results:et(t,v[s],n)})};
//# sourceMappingURL=index.js.map
