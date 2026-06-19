import{Et as e,St as t,gt as n,wt as r}from"./index-BKFgUvAR.js";e();var i=n(),a=r.div`
  width: 330px;
  height: 490px;
  background-color: ${({theme:e})=>e.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`,o=r.img`
  width: 100%;
  height: 180px;
  background-color: ${({theme:e})=>e.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`,s=r.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`,c=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`,l=r.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:e})=>e.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,u=r.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_secondary+80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`,d=r.div`
  font-weight: 400;
  color: ${({theme:e})=>e.text_secondary+99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`,f=r.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`,p=r.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({theme:e})=>e.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({theme:e})=>e.card};
`,m=r.a`
  color: ${({theme:e})=>e.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
`,h=({project:e})=>(0,i.jsxs)(a,{children:[(0,i.jsx)(o,{src:e.image}),(0,i.jsx)(s,{}),(0,i.jsxs)(c,{children:[(0,i.jsx)(l,{children:e.title}),(0,i.jsx)(u,{children:e.date}),(0,i.jsx)(d,{children:e.description})]}),(0,i.jsx)(f,{children:e.member?.map(e=>(0,i.jsx)(p,{src:e.img}))}),(0,i.jsx)(m,{href:e.github,target:`_blank`,children:`View Code`})]}),g=r.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  margin-top: 50px;
  padding: 0px 16px;
  position: rlative;
  z-index: 1;
  align-items: center;
`,_=r.div`
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
`,v=r.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:e})=>e.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,y=r.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({theme:e})=>e.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,b=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`,x=()=>(0,i.jsx)(g,{id:`Projects`,children:(0,i.jsxs)(_,{children:[(0,i.jsx)(v,{children:`Projects`}),(0,i.jsx)(y,{style:{marginBottom:`40px`},children:`I have worked on a wide range of projects.Here are some of my projects.`}),(0,i.jsx)(b,{children:t.map(e=>(0,i.jsx)(h,{project:e}))})]})});export{x as default};