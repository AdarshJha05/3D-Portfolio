import{Et as e,St as t,gt as n,wt as r}from"./index-BpqCbqzH.js";e();var i=n(),a=r.div`
  width: 100%;
  max-width: 330px;
  height: 100%;
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
  object-fit: cover;
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
`,c=r.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme:e})=>e.primary};
  background-color: ${({theme:e})=>e.primary+15};
  padding: 2px 8px;
  border-radius: 10px;
`,l=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`,u=r.div`
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
`,d=r.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({theme:e})=>e.text_secondary+80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`,f=r.div`
  font-weight: 400;
  color: ${({theme:e})=>e.text_secondary+99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`,p=r.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`,m=r.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({theme:e})=>e.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({theme:e})=>e.card};
`,h=r.a`
  color: ${({theme:e})=>e.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
`,g=({project:e})=>(0,i.jsxs)(a,{children:[(0,i.jsx)(o,{src:e.image}),(0,i.jsx)(s,{children:e.tags?.map((e,t)=>(0,i.jsx)(c,{children:e},t))}),(0,i.jsxs)(l,{children:[(0,i.jsx)(u,{children:e.title}),(0,i.jsx)(d,{children:e.date}),(0,i.jsx)(f,{children:e.description})]}),(0,i.jsx)(p,{children:e.member?.map((e,t)=>(0,i.jsx)(m,{src:e.img},t))}),(0,i.jsx)(h,{href:e.github,target:`_blank`,children:`View Code`})]}),_=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  padding: 0px 16px;
  position: relative;
  z-index: 1;
  align-items: center;
`,v=r.div`
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
`,y=r.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:e})=>e.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,b=r.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({theme:e})=>e.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,x=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`,S=()=>(0,i.jsx)(_,{id:`Projects`,children:(0,i.jsxs)(v,{children:[(0,i.jsx)(y,{children:`Projects`}),(0,i.jsx)(b,{style:{marginBottom:`40px`},children:`I have worked on a wide range of projects.Here are some of my projects.`}),(0,i.jsx)(x,{children:t.map(e=>(0,i.jsx)(g,{project:e},e.id))})]})});export{S as default};