import{Ct as e,Et as t,gt as n,ht as r,wt as i}from"./index-BpqCbqzH.js";t();var a=n(),o=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`,s=i.div`
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
`,c=i.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:e})=>e.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,l=i.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({theme:e})=>e.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,u=i.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 50px;
  justify-content: center;
`,d=i.div`
  width: 100%;
  max-width: 500px;
  background-color: ${({theme:e})=>e.card};
  border: 1px solid ${({theme:e})=>e.text_secondary+50};
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`,f=i.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({theme:e})=>e.text_secondary};
`,p=i.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`,m=i.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_primary+80};
  border: 1px solid ${({theme:e})=>e.text_primary+80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`,h=i.img`
  width: 24px;
  height: 24px;
`,g=()=>(0,a.jsx)(o,{id:`Skills`,children:(0,a.jsxs)(s,{children:[(0,a.jsx)(c,{children:`Skills`}),(0,a.jsx)(l,{style:{marginBottom:`40px`},children:`Here are some of my skills on which I have been working on for the past 3 years.`}),(0,a.jsx)(u,{children:e.map((e,t)=>(0,a.jsx)(r,{children:(0,a.jsxs)(d,{children:[(0,a.jsx)(f,{children:e.title}),(0,a.jsx)(p,{children:e.skills.map((e,t)=>(0,a.jsxs)(m,{children:[(0,a.jsx)(h,{src:e.image}),e.name]},`skill-x-${t}`))})]})},`skill-${t}`))})]})});export{g as default};