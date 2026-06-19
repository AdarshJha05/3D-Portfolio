import{Et as e,gt as t,jt as n,wt as r}from"./index-BKFgUvAR.js";var i=n(e()),a=class{constructor(e=0,t=`Network Error`){this.status=e,this.text=t}},o={origin:`https://api.emailjs.com`,blockHeadless:!1,storageProvider:(()=>{if(!(typeof localStorage>`u`))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},s=e=>e?typeof e==`string`?{publicKey:e}:e.toString()===`[object Object]`?e:{}:{},c=(e,t=`https://api.emailjs.com`)=>{if(!e)return;let n=s(e);o.publicKey=n.publicKey,o.blockHeadless=n.blockHeadless,o.storageProvider=n.storageProvider,o.blockList=n.blockList,o.limitRate=n.limitRate,o.origin=n.origin||t},l=async(e,t,n={})=>{let r=await fetch(o.origin+e,{method:`POST`,headers:n,body:t}),i=await r.text(),s=new a(r.status,i);if(r.ok)return s;throw s},u=(e,t,n)=>{if(!e||typeof e!=`string`)throw`The public key is required. Visit https://dashboard.emailjs.com/admin/account`;if(!t||typeof t!=`string`)throw`The service ID is required. Visit https://dashboard.emailjs.com/admin`;if(!n||typeof n!=`string`)throw`The template ID is required. Visit https://dashboard.emailjs.com/admin/templates`},d=e=>{if(e&&e.toString()!==`[object Object]`)throw`The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/`},f=e=>e.webdriver||!e.languages||e.languages.length===0,p=()=>new a(451,`Unavailable For Headless Browser`),m=(e,t)=>{if(!Array.isArray(e))throw`The BlockList list has to be an array`;if(typeof t!=`string`)throw`The BlockList watchVariable has to be a string`},h=e=>!e.list?.length||!e.watchVariable,g=(e,t)=>e instanceof FormData?e.get(t):e[t],_=(e,t)=>{if(h(e))return!1;m(e.list,e.watchVariable);let n=g(t,e.watchVariable);return typeof n==`string`?e.list.includes(n):!1},v=()=>new a(403,`Forbidden`),y=(e,t)=>{if(typeof e!=`number`||e<0)throw`The LimitRate throttle has to be a positive number`;if(t&&typeof t!=`string`)throw`The LimitRate ID has to be a non-empty string`},b=async(e,t,n)=>{let r=Number(await n.get(e)||0);return t-Date.now()+r},x=async(e,t,n)=>{if(!t.throttle||!n)return!1;y(t.throttle,t.id);let r=t.id||e;return await b(r,t.throttle,n)>0?!0:(await n.set(r,Date.now().toString()),!1)},S=()=>new a(429,`Too Many Requests`),C=async(e,t,n,r)=>{let i=s(r),a=i.publicKey||o.publicKey,c=i.blockHeadless||o.blockHeadless,m=i.storageProvider||o.storageProvider,h={...o.blockList,...i.blockList},g={...o.limitRate,...i.limitRate};return c&&f(navigator)?Promise.reject(p()):(u(a,e,t),d(n),n&&_(h,n)?Promise.reject(v()):await x(location.pathname,g,m)?Promise.reject(S()):l(`/api/v1.0/email/send`,JSON.stringify({lib_version:`4.4.1`,user_id:a,service_id:e,template_id:t,template_params:n}),{"Content-type":`application/json`}))},w=e=>{if(!e||e.nodeName!==`FORM`)throw`The 3rd parameter is expected to be the HTML form element or the style selector of the form`},T=e=>typeof e==`string`?document.querySelector(e):e,E={init:c,send:C,sendForm:async(e,t,n,r)=>{let i=s(r),a=i.publicKey||o.publicKey,c=i.blockHeadless||o.blockHeadless,d=o.storageProvider||i.storageProvider,m={...o.blockList,...i.blockList},h={...o.limitRate,...i.limitRate};if(c&&f(navigator))return Promise.reject(p());let g=T(n);u(a,e,t),w(g);let y=new FormData(g);return _(m,y)?Promise.reject(v()):await x(location.pathname,h,d)?Promise.reject(S()):(y.append(`lib_version`,`4.4.1`),y.append(`service_id`,e),y.append(`template_id`,t),y.append(`user_id`,a),l(`/api/v1.0/email/send-form`,y))},EmailJSResponseStatus:a},D=t(),O=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`,k=r.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,A=r.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:e})=>e.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,j=r.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({theme:e})=>e.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,M=r.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.card};
  border: 1px solid ${({theme:e})=>e.text_secondary+50};
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`,N=r.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({theme:e})=>e.text_primary};
`,P=r.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({theme:e})=>e.text_secondary+50};
  outline: none;
  font-size: 18px;
  color: ${({theme:e})=>e.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({theme:e})=>e.primary};
  }
`,F=r.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({theme:e})=>e.text_secondary+50};
  outline: none;
  font-size: 18px;
  color: ${({theme:e})=>e.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({theme:e})=>e.primary};
  }
`,I=r.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({theme:e})=>e.text_primary};
  font-size: 18px;
  font-weight: 600;
`,L=()=>{let e=(0,i.useRef)();return(0,D.jsx)(O,{id:`Education`,children:(0,D.jsxs)(k,{children:[(0,D.jsx)(A,{children:`Contact`}),(0,D.jsx)(j,{style:{marginBottom:`40px`},children:`Feel free to reach out to me for any questions or opportunities!`}),(0,D.jsxs)(M,{ref:e,onSubmit:async t=>{t.preventDefault();try{await E.sendForm(`service_q70ivne`,`template_4uark1h`,e.current,{publicKey:`0iupQKOvHiwm3mHaq`}),alert(`Message Sent Successfully!`),e.current.reset()}catch(e){console.error(e),alert(`Failed to send message: `+(e.text||e.message||JSON.stringify(e)))}},children:[(0,D.jsx)(N,{children:`Let's Connect`}),(0,D.jsx)(P,{type:`email`,placeholder:`Your Email Address`,name:`from_email`,required:!0}),(0,D.jsx)(P,{placeholder:`Your Full Name`,name:`from_name`,required:!0}),(0,D.jsx)(P,{placeholder:`Company / Organization (Optional)`,name:`company`}),(0,D.jsx)(P,{placeholder:`Subject`,name:`subject`,required:!0}),(0,D.jsx)(F,{placeholder:`How can I help you?`,name:`message`,rows:5,required:!0}),(0,D.jsx)(I,{type:`submit`,value:`Send Message`})]})]})})};export{L as default};