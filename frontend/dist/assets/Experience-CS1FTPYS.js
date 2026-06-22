import{Et as e,Tt as t,gt as n,wt as r,xt as i}from"./index-BpqCbqzH.js";import{t as a}from"./style.min-ppELKTbx.js";e();var o=a(),s=n(),c=r.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`,l=r.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`,u=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,d=r.div`
  font-size: 18px;
  font-weight: 600px;
  color: ${({theme:e})=>e.text_primary+99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`,f=r.div`
  font-size: 14px;
  font-weight: 500px;
  color: ${({theme:e})=>e.text_secondary+99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,p=r.div`
  font-size: 12px;
  font-weight: 400px;
  color: ${({theme:e})=>e.text_secondary+80};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`,m=r.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_primary+99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,h=r.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`,g=r.div`
  display: -webkit-box;
  max-width: 100%;
`,_=r.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_primary+99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,v=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,y=({experience:e})=>{let n=t();return(0,s.jsxs)(o.VerticalTimelineElement,{icon:(0,s.jsx)(`img`,{width:`100%`,height:`100%`,alt:e?.company,style:{borderRadius:`50%`,objectFit:`cover`},src:e?.img}),contentStyle:{display:`flex`,flexDirection:`column`,gap:`12px`,background:n.card,color:n.text_primary,boxShadow:`rgba(23, 92, 230, 0.15) 0px 4px 24px`,backgroundColor:n.card,border:`1px solid ${n.text_secondary+50}`,borderRadius:`6px`},contentArrowStyle:{borderRight:`7px solid ${n.card}`},date:e?.date,children:[(0,s.jsxs)(c,{children:[(0,s.jsx)(l,{src:e?.img}),(0,s.jsxs)(u,{children:[(0,s.jsx)(d,{children:e?.role}),(0,s.jsx)(f,{children:e?.company}),(0,s.jsx)(p,{children:e?.date})]})]}),(0,s.jsxs)(m,{children:[e?.desc&&(0,s.jsx)(g,{children:e.desc}),e?.skills&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`br`,{}),(0,s.jsxs)(h,{children:[(0,s.jsx)(`b`,{children:`Skills`}),(0,s.jsx)(v,{children:e?.skills?.map((e,t)=>(0,s.jsxs)(_,{children:[`• `,e]}))})]})]})]})]})},b=r.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  margin-top: 50px;
  position: rlative;
  z-index: 1;
  align-items: center;
`,x=r.div`
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
`,S=r.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:e})=>e.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,C=r.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({theme:e})=>e.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,w=()=>(0,s.jsx)(b,{id:`Experience`,children:(0,s.jsxs)(x,{children:[(0,s.jsx)(S,{children:`Experience`}),(0,s.jsx)(C,{style:{marginBottom:`40px`},children:`My work experience as a software engineer and working on different companies and projects.`}),(0,s.jsx)(o.VerticalTimeline,{children:i.map((e,t)=>(0,s.jsx)(y,{experience:e},`experience-${t}`))})]})});export{w as default};