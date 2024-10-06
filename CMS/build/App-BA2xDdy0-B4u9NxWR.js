import{r as N,u as I,b$ as $e,c0 as Ie,j as e,d as B,P as F,h6 as X,R as Be,a as de,c as pe,au as Pe,aq as fe,o as K,ar as xe,s as V,aP as je,h7 as ke,g6 as be,h8 as Oe,g9 as Ue,bp as ye,v as ie,bb as Re,b as Y,U as _,bf as Ne,eA as W,B as J,b4 as Fe,aS as q,F as x,gq as We,H as He,bj as Ge,T as j,h9 as qe,bo as Me,ha as re,hb as Qe,hc as Ye,b9 as oe,bk as _e,bl as Ze,g8 as Ce,M as U,O as Je,Q as Xe,W as w,Y as Ke,ab as Ve,ac as et,al as tt,hd as st,aX as at,aY as nt,bY as Te,bZ as Se,S as ce,a4 as it,eT as le,bm as Z,he as rt,hf as ot,bu as lt,gs as dt,cm as ct,hg as ut,hh as gt,L as ht,b8 as mt,ae as pt,af as ft,aR as H,C as xt,G,hi as jt,hj as se,hk as bt,aE as yt,cB as Rt,hl as Mt,b7 as Ct,hm as ae,e7 as Tt,hn as St}from"./strapi-Ck8xygrr.js";import{f as ne}from"./index-DSl3Q3_O.js";import{t as Dt,a as zt,R as wt,z as At}from"./schemas-DdA2ic2U-BJFwI5c7.js";import{f as Lt}from"./index-B8znh_6v.js";import"./index-BRVyLNfZ.js";function De(t,s,u){var a=Dt(t,u),i=zt(s,a,!0),r=new Date(a.getTime()-i),h=new Date(0);return h.setFullYear(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()),h.setHours(r.getUTCHours(),r.getUTCMinutes(),r.getUTCSeconds(),r.getUTCMilliseconds()),h}const vt=["years","months","days","hours","minutes","seconds"],ze=N.forwardRef(({timestamp:t,customIntervals:s=[],...u},a)=>{const{formatRelativeTime:i,formatDate:r,formatTime:h}=I(),l=$e({start:t,end:Date.now()}),m=vt.find(n=>l[n]>0&&Object.keys(l).includes(n)),d=Ie(t)?-l[m]:l[m],b=s.find(n=>l[n.unit]<n.threshold),y=b?b.text:i(d,m,{numeric:"auto"});return e.jsx("time",{ref:a,dateTime:t.toISOString(),role:"time",title:`${r(t)} ${h(t)}`,...u,children:y})}),we=({handleClose:t,open:s,handleSubmit:u,initialValues:a,isLoading:i=!1})=>{const{formatMessage:r}=I(),{pathname:h}=fe(),l=h===`/plugins/${bt}`,{timezoneList:m,systemTimezone:d={value:"UTC+00:00-Africa/Abidjan "}}=Ce(a.scheduledAt?new Date(a.scheduledAt):new Date),b=n=>{const{date:g,time:S,timezone:p}=n;if(!g||!S||!p)return null;const R=p.split("&")[1];return At(`${g} ${S}`,R)},y=()=>m.find(g=>g.value.split("&")[1]===a.timezone)?.value||d.value;return e.jsx(U.Root,{open:s,onOpenChange:t,children:e.jsxs(U.Content,{children:[e.jsx(U.Header,{children:e.jsx(U.Title,{children:r({id:"content-releases.modal.title",defaultMessage:"{isCreatingRelease, select, true {New release} other {Edit release}}"},{isCreatingRelease:l})})}),e.jsx(Je,{onSubmit:n=>{u({...n,timezone:n.timezone?n.timezone.split("&")[1]:null,scheduledAt:n.isScheduled?b(n):null})},initialValues:{...a,timezone:a.timezone?y():d.value},validationSchema:wt,validateOnChange:!1,children:({values:n,errors:g,handleChange:S,setFieldValue:p})=>e.jsxs(Xe,{children:[e.jsx(U.Body,{children:e.jsxs(x,{direction:"column",alignItems:"stretch",gap:6,children:[e.jsxs(w.Root,{name:"name",error:g.name&&r({id:g.name,defaultMessage:g.name}),required:!0,children:[e.jsx(w.Label,{children:r({id:"content-releases.modal.form.input.label.release-name",defaultMessage:"Name"})}),e.jsx(Ke,{value:n.name,onChange:S}),e.jsx(w.Error,{})]}),e.jsx(J,{width:"max-content",children:e.jsx(Ve,{name:"isScheduled",checked:n.isScheduled,onCheckedChange:R=>{p("isScheduled",R),R?(p("date",a.date),p("time",a.time),p("timezone",a.timezone??d?.value)):(p("date",null),p("time",""),p("timezone",null))},children:e.jsx(j,{textColor:n.isScheduled?"primary600":"neutral800",fontWeight:n.isScheduled?"semiBold":"regular",children:r({id:"modal.form.input.label.schedule-release",defaultMessage:"Schedule release"})})})}),n.isScheduled&&e.jsxs(e.Fragment,{children:[e.jsxs(x,{gap:4,alignItems:"start",children:[e.jsx(J,{width:"100%",children:e.jsxs(w.Root,{name:"date",error:g.date&&r({id:g.date,defaultMessage:g.date}),required:!0,children:[e.jsx(w.Label,{children:r({id:"content-releases.modal.form.input.label.date",defaultMessage:"Date"})}),e.jsx(et,{onChange:R=>{const D=R?Lt(R,{representation:"date"}):null;p("date",D)},clearLabel:r({id:"content-releases.modal.form.input.clearLabel",defaultMessage:"Clear"}),onClear:()=>{p("date",null)},value:n.date?new Date(n.date):new Date,minDate:De(new Date,n.timezone.split("&")[1])}),e.jsx(w.Error,{})]})}),e.jsx(J,{width:"100%",children:e.jsxs(w.Root,{name:"time",error:g.time&&r({id:g.time,defaultMessage:g.time}),required:!0,children:[e.jsx(w.Label,{children:r({id:"content-releases.modal.form.input.label.time",defaultMessage:"Time"})}),e.jsx(tt,{onChange:R=>{p("time",R)},clearLabel:r({id:"content-releases.modal.form.input.clearLabel",defaultMessage:"Clear"}),onClear:()=>{p("time","")},value:n.time||void 0}),e.jsx(w.Error,{})]})})]}),e.jsx(Et,{timezoneOptions:m})]})]})}),e.jsxs(U.Footer,{children:[e.jsx(U.Close,{children:e.jsx(_,{variant:"tertiary",name:"cancel",children:r({id:"cancel",defaultMessage:"Cancel"})})}),e.jsx(_,{name:"submit",loading:i,type:"submit",children:r({id:"content-releases.modal.form.button.submit",defaultMessage:"{isCreatingRelease, select, true {Continue} other {Save}}"},{isCreatingRelease:l})})]})]})})]})})},Et=({timezoneOptions:t})=>{const{values:s,errors:u,setFieldValue:a}=st(),{formatMessage:i}=I(),[r,h]=N.useState(t);return N.useEffect(()=>{if(s.date){const{timezoneList:l}=Ce(new Date(s.date));h(l);const m=s.timezone&&l.find(d=>d.value.split("&")[1]===s.timezone.split("&")[1]);m&&a("timezone",m.value)}},[a,s.date,s.timezone]),e.jsxs(w.Root,{name:"timezone",error:u.timezone&&i({id:u.timezone,defaultMessage:u.timezone}),required:!0,children:[e.jsx(w.Label,{children:i({id:"content-releases.modal.form.input.label.timezone",defaultMessage:"Timezone"})}),e.jsx(at,{autocomplete:{type:"list",filter:"contains"},value:s.timezone||void 0,textValue:s.timezone?s.timezone.replace(/&/," "):void 0,onChange:l=>{a("timezone",l)},onTextValueChange:l=>{a("timezone",l)},onClear:()=>{a("timezone","")},children:r.map(l=>e.jsx(nt,{value:l.value,children:l.value.replace(/&/," ")},l.value))}),e.jsx(w.Error,{})]})},$t=yt,Ae=t=>typeof t<"u"&&t.name!==void 0,It=B(pe)`
  display: block;
`,Bt=B(ze)`
  display: inline-block;
  &::first-letter {
    text-transform: uppercase;
  }
`,Le=t=>{let s;switch(t){case"ready":s="success";break;case"blocked":s="warning";break;case"failed":s="danger";break;case"done":s="primary";break;case"empty":default:s="neutral"}return{textColor:`${s}600`,backgroundColor:`${s}100`,borderColor:`${s}200`}},ue=({sectionTitle:t,releases:s=[],isError:u=!1})=>{const{formatMessage:a}=I();return u?e.jsx(F.Error,{}):s?.length===0?e.jsx(Te,{content:a({id:"content-releases.page.Releases.tab.emptyEntries",defaultMessage:"No releases"},{target:t}),icon:e.jsx(Se,{width:"16rem"})}):e.jsx(ce.Root,{gap:4,children:s.map(({id:i,name:r,scheduledAt:h,status:l})=>e.jsx(ce.Item,{col:3,s:6,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(It,{tag:it,to:`${i}`,isExternal:!1,children:e.jsxs(x,{direction:"column",justifyContent:"space-between",padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",width:"100%",alignItems:"start",gap:4,children:[e.jsxs(x,{direction:"column",alignItems:"start",gap:1,children:[e.jsx(j,{textColor:"neutral800",tag:"h3",variant:"delta",fontWeight:"bold",children:r}),e.jsx(j,{variant:"pi",textColor:"neutral600",children:h?e.jsx(Bt,{timestamp:new Date(h)}):a({id:"content-releases.pages.Releases.not-scheduled",defaultMessage:"Not scheduled"})})]}),e.jsx(le,{...Le(l),children:l})]})})},i))})},Pt=B(Pe)`
  button {
    display: none;
  }
  p + div {
    margin-left: auto;
  }
`,kt={name:"",date:ne(new Date,"yyyy-MM-dd"),time:"",isScheduled:!0,scheduledAt:null,timezone:null},Ot=()=>{const t=fe(),[s,u]=N.useState(!1),{toggleNotification:a}=K(),{formatMessage:i}=I(),r=xe(),{formatAPIError:h}=V(),[{query:l},m]=je(),d=ke(l),{data:b,isLoading:y}=be(),[n,{isLoading:g}]=Oe(),{getFeature:S}=Ue(),{maximumReleases:p=3}=S("cms-content-releases"),{trackUsage:R}=ye(),{allowedActions:{canCreate:D}}=ie(X),{isLoading:v,isSuccess:A,isError:o}=d,k=d?.currentData?.meta?.activeTab||"pending";N.useEffect(()=>{t?.state?.errors&&(a({type:"danger",title:i({id:"content-releases.pages.Releases.notification.error.title",defaultMessage:"Your request could not be processed."}),message:i({id:"content-releases.pages.Releases.notification.error.message",defaultMessage:"Please try again or open another release."})}),r("",{replace:!0,state:null}))},[i,t?.state?.errors,r,a]);const T=()=>{u(z=>!z)};if(v||y)return e.jsx(F.Loading,{});const M=A&&d.currentData?.meta?.pendingReleasesCount||0,P=M>=p,O=z=>{m({...l,page:1,pageSize:d?.currentData?.meta?.pagination?.pageSize||16,filters:{releasedAt:{$notNull:z!=="pending"}}})},E=async({name:z,scheduledAt:C,timezone:c})=>{const f=await n({name:z,scheduledAt:C,timezone:c});"data"in f?(a({type:"success",message:i({id:"content-releases.modal.release-created-notification-success",defaultMessage:"Release created."})}),R("didCreateRelease"),r(f.data.data.id.toString())):Z(f.error)?a({type:"danger",message:h(f.error)}):a({type:"danger",message:i({id:"notification.error",defaultMessage:"An error occurred"})})};return e.jsxs(Re,{"aria-busy":v||y,children:[e.jsx(Y.Header,{title:i({id:"content-releases.pages.Releases.title",defaultMessage:"Releases"}),subtitle:i({id:"content-releases.pages.Releases.header-subtitle",defaultMessage:"Create and manage content updates"}),primaryAction:D?e.jsx(_,{startIcon:e.jsx(Ne,{}),onClick:T,disabled:P,children:i({id:"content-releases.header.actions.add-release",defaultMessage:"New release"})}):null}),e.jsx(Y.Content,{children:e.jsxs(e.Fragment,{children:[P&&e.jsx(Pt,{marginBottom:6,action:e.jsx(pe,{href:"https://strapi.io/pricing-cloud",isExternal:!0,children:i({id:"content-releases.pages.Releases.max-limit-reached.action",defaultMessage:"Explore plans"})}),title:i({id:"content-releases.pages.Releases.max-limit-reached.title",defaultMessage:"You have reached the {number} pending {number, plural, one {release} other {releases}} limit."},{number:p}),onClose:()=>{},closeLabel:"",children:i({id:"content-releases.pages.Releases.max-limit-reached.message",defaultMessage:"Upgrade to manage an unlimited number of releases."})}),e.jsxs(W.Root,{variant:"simple",onValueChange:O,value:k,children:[e.jsxs(J,{paddingBottom:8,children:[e.jsxs(W.List,{"aria-label":i({id:"content-releases.pages.Releases.tab-group.label",defaultMessage:"Releases list"}),children:[e.jsx(W.Trigger,{value:"pending",children:i({id:"content-releases.pages.Releases.tab.pending",defaultMessage:"Pending ({count})"},{count:M})}),e.jsx(W.Trigger,{value:"done",children:i({id:"content-releases.pages.Releases.tab.done",defaultMessage:"Done"})})]}),e.jsx(Fe,{})]}),e.jsx(W.Content,{value:"pending",children:e.jsx(ue,{sectionTitle:"pending",releases:d?.currentData?.data,isError:o})}),e.jsx(W.Content,{value:"done",children:e.jsx(ue,{sectionTitle:"done",releases:d?.currentData?.data,isError:o})})]}),e.jsxs(q.Root,{...d?.currentData?.meta?.pagination,defaultPageSize:d?.currentData?.meta?.pagination?.pageSize,children:[e.jsx(q.PageSize,{options:["8","16","32","64"]}),e.jsx(q.Links,{})]})]})}),e.jsx(we,{open:s,handleClose:T,handleSubmit:E,isLoading:g,initialValues:{...kt,timezone:b?.data.defaultTimezone?b.data.defaultTimezone.split("&")[1]:null}})]})},Ut=B(x)`
  align-self: stretch;
  border-bottom-right-radius: ${({theme:t})=>t.borderRadius};
  border-bottom-left-radius: ${({theme:t})=>t.borderRadius};
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,ge=B(We)`
  svg path {
    fill: ${({theme:t,disabled:s})=>s&&t.colors.neutral500};
  }
  span {
    color: ${({theme:t,disabled:s})=>s&&t.colors.neutral500};
  }

  &:hover {
    background: ${({theme:t,$variant:s="neutral"})=>t.colors[`${s}100`]};
  }
`,Nt=B(He)`
  width: ${({theme:t})=>t.spaces[4]};
  height: ${({theme:t})=>t.spaces[4]};
  path {
    fill: ${({theme:t})=>t.colors.neutral600};
  }
`,Ft=B(Ge)`
  width: ${({theme:t})=>t.spaces[4]};
  height: ${({theme:t})=>t.spaces[4]};
  path {
    fill: ${({theme:t})=>t.colors.danger600};
  }
`,Wt=B(j)`
  max-width: 300px;
`,Ht=({action:t,schema:s,entry:u,status:a})=>{const{formatMessage:i}=I(),{validate:r,isLoading:h}=Rt({collectionType:s?.kind??"",model:s?.uid??""},{skip:!0}),l=(d,b="")=>Object.keys(d).length===0?"":Object.entries(d).map(([y,n])=>n==null?"":typeof n=="string"?i({id:n,defaultMessage:n},{field:b?`${b}.${y}`:y}):typeof n=="object"&&n!==null&&"id"in n&&"defaultMessage"in n?i({id:`${n.id}.withField`,defaultMessage:n.defaultMessage},{field:b?`${b}.${y}`:y}):l(n,y)).join(" ");if(h)return null;const m=r(u)??{};if(t==="publish"){if(Object.keys(m).length>0){const d=l(m);return e.jsxs(x,{gap:2,children:[e.jsx(Mt,{fill:"danger600"}),e.jsx(Ct,{description:d,children:e.jsx(Wt,{textColor:"danger600",variant:"omega",fontWeight:"semiBold",ellipsis:!0,children:d})})]})}if(a==="draft")return e.jsxs(x,{gap:2,children:[e.jsx(ae,{fill:"success600"}),e.jsx(j,{children:i({id:"content-releases.pages.ReleaseDetails.entry-validation.ready-to-publish",defaultMessage:"Ready to publish"})})]});if(a==="modified")return e.jsxs(x,{gap:2,children:[e.jsx(Tt,{fill:"alternative600"}),e.jsx(j,{children:i({id:"content-releases.pages.ReleaseDetails.entry-validation.modified",defaultMessage:"Ready to publish changes"})})]});if(a==="published")return e.jsxs(x,{gap:2,children:[e.jsx(ae,{fill:"success600"}),e.jsx(j,{children:i({id:"content-releases.pages.ReleaseDetails.entry-validation.already-published",defaultMessage:"Already published"})})]})}return e.jsxs(x,{gap:2,children:[e.jsx(ae,{fill:"success600"}),u.publishedAt?e.jsx(j,{children:i({id:"content-releases.pages.ReleaseDetails.entry-validation.ready-to-unpublish",defaultMessage:"Ready to unpublish"})}):e.jsx(j,{textColor:"success600",fontWeight:"bold",children:i({id:"content-releases.pages.ReleaseDetails.entry-validation.already-unpublished",defaultMessage:"Already unpublished"})})]})},he=({toggleEditReleaseModal:t,toggleWarningSubmit:s,children:u})=>{const{formatMessage:a,formatDate:i,formatTime:r}=I(),{releaseId:h}=Me(),{data:l,isLoading:m,error:d}=re({id:h},{skip:!h}),[b,{isLoading:y}]=rt(),{toggleNotification:n}=K(),{formatAPIError:g}=V(),{allowedActions:S}=ie(X),{canUpdate:p,canDelete:R,canPublish:D}=S,v=$t(),{trackUsage:A}=ye(),o=l?.data,k=c=>async()=>{const f=await b({id:c});if("data"in f){n({type:"success",message:a({id:"content-releases.pages.ReleaseDetails.publish-notification-success",defaultMessage:"Release was published successfully."})});const{totalEntries:L,totalPublishedEntries:$,totalUnpublishedEntries:Q}=f.data.meta;A("didPublishRelease",{totalEntries:L,totalPublishedEntries:$,totalUnpublishedEntries:Q})}else Z(f.error)?n({type:"danger",message:g(f.error)}):n({type:"danger",message:a({id:"notification.error",defaultMessage:"An error occurred"})})},T=()=>{v(St.util.invalidateTags([{type:"ReleaseAction",id:"LIST"},{type:"Release",id:h}]))},M=()=>o?.createdBy?o.createdBy.username?o.createdBy.username:o.createdBy.firstname?`${o.createdBy.firstname} ${o.createdBy.lastname||""}`.trim():o.createdBy.email:null;if(m)return e.jsx(F.Loading,{});if(Ae(d)&&"code"in d||!o)return e.jsx(oe,{to:"..",state:{errors:[{code:d?.code}]}});const P=o.actions.meta.count||0,O=!!M(),E=o.scheduledAt&&o.timezone,z=a({id:"content-releases.pages.Details.header-subtitle",defaultMessage:"{number, plural, =0 {No entries} one {# entry} other {# entries}}"},{number:P}),C=E?a({id:"content-releases.pages.ReleaseDetails.header-subtitle.scheduled",defaultMessage:"Scheduled for {date} at {time} ({offset})"},{date:i(new Date(o.scheduledAt),{weekday:"long",day:"numeric",month:"long",year:"numeric",timeZone:o.timezone}),time:r(new Date(o.scheduledAt),{timeZone:o.timezone,hourCycle:"h23"}),offset:ot(o.timezone,new Date(o.scheduledAt))}):"";return e.jsxs(Re,{"aria-busy":m,children:[e.jsx(Y.Header,{title:o.name,subtitle:e.jsxs(x,{gap:2,lineHeight:6,children:[e.jsx(j,{textColor:"neutral600",variant:"epsilon",children:z+(E?` - ${C}`:"")}),e.jsx(le,{...Le(o.status),children:o.status})]}),navigationAction:e.jsx(lt,{}),primaryAction:!o.releasedAt&&e.jsxs(x,{gap:2,children:[e.jsxs(Gt,{label:e.jsx(dt,{}),variant:"tertiary",endIcon:null,paddingLeft:"7px",paddingRight:"7px","aria-label":a({id:"content-releases.header.actions.open-release-actions",defaultMessage:"Release edit and delete menu"}),popoverPlacement:"bottom-end",children:[e.jsx(ge,{disabled:!p,onSelect:t,children:e.jsxs(x,{alignItems:"center",gap:2,hasRadius:!0,width:"100%",children:[e.jsx(Nt,{}),e.jsx(j,{ellipsis:!0,children:a({id:"content-releases.header.actions.edit",defaultMessage:"Edit"})})]})}),e.jsx(ge,{disabled:!R,onSelect:s,$variant:"danger",children:e.jsxs(x,{alignItems:"center",gap:2,hasRadius:!0,width:"100%",children:[e.jsx(Ft,{}),e.jsx(j,{ellipsis:!0,textColor:"danger600",children:a({id:"content-releases.header.actions.delete",defaultMessage:"Delete"})})]})}),e.jsxs(Ut,{direction:"column",justifyContent:"center",alignItems:"flex-start",gap:1,padding:4,children:[e.jsx(j,{variant:"pi",fontWeight:"bold",children:a({id:"content-releases.header.actions.created",defaultMessage:"Created"})}),e.jsxs(j,{variant:"pi",color:"neutral300",children:[e.jsx(ze,{timestamp:new Date(o.createdAt)}),a({id:"content-releases.header.actions.created.description",defaultMessage:"{hasCreatedByUser, select, true { by {createdBy}} other { by deleted user}}"},{createdBy:M(),hasCreatedByUser:O})]})]})]}),e.jsx(_,{size:"S",variant:"tertiary",onClick:T,children:a({id:"content-releases.header.actions.refresh",defaultMessage:"Refresh"})}),D?e.jsx(_,{size:"S",variant:"default",onClick:k(o.id.toString()),loading:y,disabled:o.actions.meta.count===0,children:a({id:"content-releases.header.actions.publish",defaultMessage:"Publish"})}):null]})}),u]})},Gt=B(qe)`
  & > span {
    display: flex;
  }
`,qt=["contentType","locale","action"],Qt=["contentType","action"],me=t=>t==="locale"?{id:"content-releases.pages.ReleaseDetails.groupBy.option.locales",defaultMessage:"Locales"}:t==="action"?{id:"content-releases.pages.ReleaseDetails.groupBy.option.actions",defaultMessage:"Actions"}:{id:"content-releases.pages.ReleaseDetails.groupBy.option.content-type",defaultMessage:"Content-Types"},Yt=({releaseId:t})=>{const{formatMessage:s}=I(),[{query:u},a]=je(),{toggleNotification:i}=K(),{formatAPIError:r}=V(),{data:h,isLoading:l,error:m}=re({id:t}),{allowedActions:{canUpdate:d}}=ie(X),b=ct("ReleaseDetailsPage",c=>c.runHookWaterfall),{displayedHeaders:y,hasI18nEnabled:n}=b("ContentReleases/pages/ReleaseDetails/add-locale-in-releases",{displayedHeaders:[{label:{id:"content-releases.page.ReleaseDetails.table.header.label.name",defaultMessage:"name"},name:"name"}],hasI18nEnabled:!1}),g=h?.data,S=u?.groupBy||"contentType",{isLoading:p,isFetching:R,isError:D,data:v,error:A}=ut({...u,releaseId:t}),[o]=gt(),k=async(c,f,L)=>{const $=await o({params:{releaseId:t,actionId:f},body:{type:c.target.value},query:u,actionPath:L});"error"in $&&(Z($.error)?i({type:"danger",message:r($.error)}):i({type:"danger",message:s({id:"notification.error",defaultMessage:"An error occurred"})}))};if(p||l)return e.jsx(F.Loading,{});const T=v?.data,M=v?.meta,P=M?.contentTypes||{},O=M?.components||{};if(Ae(m)||!g){const c=[];return m&&"code"in m&&c.push({code:m.code}),A&&"code"in A&&c.push({code:A.code}),e.jsx(oe,{to:"..",state:{errors:c}})}if(D||!T)return e.jsx(F.Error,{});if(Object.keys(T).length===0)return e.jsx(Y.Content,{children:e.jsx(Te,{action:e.jsx(ht,{tag:mt,to:{pathname:"/content-manager"},style:{textDecoration:"none"},variant:"secondary",children:s({id:"content-releases.page.Details.button.openContentManager",defaultMessage:"Open the Content Manager"})}),icon:e.jsx(Se,{width:"16rem"}),content:s({id:"content-releases.pages.Details.tab.emptyEntries",defaultMessage:"This release is empty. Open the Content Manager, select an entry and add it to the release."})})});const E=s({id:"content-releases.pages.ReleaseDetails.groupBy.aria-label",defaultMessage:"Group by"}),z=[...y,{label:{id:"content-releases.page.ReleaseDetails.table.header.label.content-type",defaultMessage:"content-type"},name:"content-type"},{label:{id:"content-releases.page.ReleaseDetails.table.header.label.action",defaultMessage:"action"},name:"action"},...g.releasedAt?[]:[{label:{id:"content-releases.page.ReleaseDetails.table.header.label.status",defaultMessage:"status"},name:"status"}]],C=n?qt:Qt;return e.jsx(Y.Content,{children:e.jsxs(x,{gap:8,direction:"column",alignItems:"stretch",children:[e.jsx(x,{children:e.jsx(pt,{placeholder:E,"aria-label":E,customizeContent:c=>s({id:"content-releases.pages.ReleaseDetails.groupBy.label",defaultMessage:"Group by {groupBy}"},{groupBy:c}),value:s(me(S)),onChange:c=>a({groupBy:c}),children:C.map(c=>e.jsx(ft,{value:c,children:s(me(c))},c))})}),Object.keys(T).map(c=>e.jsxs(x,{gap:4,direction:"column",alignItems:"stretch",children:[e.jsx(x,{role:"separator","aria-label":c,children:e.jsx(le,{children:c})}),e.jsx(H.Root,{rows:T[c].map(f=>({...f,id:Number(f.entry.id)})),headers:z,isLoading:p||R,children:e.jsxs(H.Content,{children:[e.jsx(H.Head,{children:z.map(({label:f,name:L})=>e.jsx(H.HeaderCell,{label:s(f),name:L},L))}),e.jsx(H.Loading,{}),e.jsx(H.Body,{children:T[c].map(({id:f,contentType:L,locale:$,type:Q,entry:ee,status:ve},Ee)=>e.jsxs(xt,{children:[e.jsx(G,{width:"25%",maxWidth:"200px",children:e.jsx(j,{ellipsis:!0,children:`${L.mainFieldValue||ee.id}`})}),n&&e.jsx(G,{width:"10%",children:e.jsx(j,{children:`${$?.name?$.name:"-"}`})}),e.jsx(G,{width:"10%",children:e.jsx(j,{children:L.displayName||""})}),e.jsx(G,{width:"20%",children:g.releasedAt?e.jsx(j,{children:s({id:"content-releases.page.ReleaseDetails.table.action-published",defaultMessage:"This entry was <b>{isPublish, select, true {published} other {unpublished}}</b>."},{isPublish:Q==="publish",b:te=>e.jsx(j,{fontWeight:"bold",children:te})})}):e.jsx(jt,{selected:Q,handleChange:te=>k(te,f,[c,Ee]),name:`release-action-${f}-type`,disabled:!d})}),!g.releasedAt&&e.jsxs(e.Fragment,{children:[e.jsx(G,{width:"20%",minWidth:"200px",children:e.jsx(Ht,{action:Q,schema:P?.[L.uid],components:O,entry:ee,status:ve})}),e.jsx(G,{children:e.jsx(x,{justifyContent:"flex-end",children:e.jsxs(se.Root,{children:[e.jsx(se.ReleaseActionEntryLinkItem,{contentTypeUid:L.uid,documentId:ee.documentId,locale:$?.code}),e.jsx(se.DeleteReleaseActionItem,{releaseId:g.id,actionId:f})]})})})]})]},f))})]})})]},`releases-group-${c}`)),e.jsxs(q.Root,{...M?.pagination,defaultPageSize:M?.pagination?.pageSize,children:[e.jsx(q.PageSize,{}),e.jsx(q.Links,{})]})]})})},_t=()=>{const{formatMessage:t}=I(),{releaseId:s}=Me(),{toggleNotification:u}=K(),{formatAPIError:a}=V(),i=xe(),[r,h]=N.useState(!1),[l,m]=N.useState(!1),{isLoading:d,data:b,isSuccess:y}=re({id:s},{skip:!s}),{data:n,isLoading:g}=be(),[S,{isLoading:p}]=Qe(),[R]=Ye(),D=()=>{h(C=>!C)},v=()=>o?.timezone?o.timezone:n?.data.defaultTimezone?n.data.defaultTimezone:null,A=()=>m(C=>!C);if(d||g)return e.jsx(he,{toggleEditReleaseModal:D,toggleWarningSubmit:A,children:e.jsx(F.Loading,{})});if(!s)return e.jsx(oe,{to:".."});const o=y&&b?.data||null,k=o?.name||"",T=v(),M=o?.scheduledAt&&T?De(o.scheduledAt,T):null,P=M?ne(M,"yyyy-MM-dd"):void 0,O=M?ne(M,"HH:mm"):"",E=async C=>{const c=await S({id:s,name:C.name,scheduledAt:C.scheduledAt,timezone:C.timezone});"data"in c?(u({type:"success",message:t({id:"content-releases.modal.release-updated-notification-success",defaultMessage:"Release updated."})}),D()):Z(c.error)?u({type:"danger",message:a(c.error)}):u({type:"danger",message:t({id:"notification.error",defaultMessage:"An error occurred"})})},z=async()=>{const C=await R({id:s});"data"in C?i(".."):Z(C.error)?u({type:"danger",message:a(C.error)}):u({type:"danger",message:t({id:"notification.error",defaultMessage:"An error occurred"})})};return e.jsxs(he,{toggleEditReleaseModal:D,toggleWarningSubmit:A,children:[e.jsx(Yt,{releaseId:s}),e.jsx(we,{open:r,handleClose:D,handleSubmit:E,isLoading:d||p,initialValues:{name:k||"",scheduledAt:M,date:P,time:O,isScheduled:!!M,timezone:T}}),e.jsx(_e.Root,{open:l,onOpenChange:A,children:e.jsx(Ze,{onConfirm:z,children:t({id:"content-releases.dialog.confirmation-message",defaultMessage:"Are you sure you want to delete this release?"})})})]})},es=()=>e.jsx(F.Protect,{permissions:X.main,children:e.jsxs(Be,{children:[e.jsx(de,{index:!0,element:e.jsx(Ot,{})}),e.jsx(de,{path:":releaseId",element:e.jsx(_t,{})})]})});export{es as App};
