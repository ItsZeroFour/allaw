import{cu as l,cL as p}from"./strapi-Ck8xygrr.js";const r=l.injectEndpoints({endpoints:t=>({getRelations:t.query({query:({model:a,id:e,targetField:s,params:n})=>({url:`/content-manager/relations/${a}/${e}/${s}`,method:"GET",config:{params:n}}),serializeQueryArgs:a=>{const{endpointName:e,queryArgs:s}=a;return{endpointName:e,model:s.model,id:s.id,targetField:s.targetField,locale:s.params?.locale,status:s.params?.status}},merge:(a,e)=>{if(a.pagination&&e.pagination)if(a.pagination.page<e.pagination.page){const s=a.results.map(i=>i.documentId),n=e.results.filter(i=>!s.includes(i.documentId));a.results.push(...o(n,a.results)),a.pagination=e.pagination}else e.pagination.page===1&&(a.results=o(e.results),a.pagination=e.pagination)},forceRefetch({currentArg:a,previousArg:e}){return!a?.params&&!e?.params?!1:a?.params?.page!==e?.params?.page||a?.params?.pageSize!==e?.params?.pageSize},transformResponse:a=>"results"in a&&a.results?{...a,results:o(a.results.toReversed())}:a,providesTags:["Relations"]}),searchRelations:t.query({query:({model:a,targetField:e,params:s})=>({url:`/content-manager/relations/${a}/${e}`,method:"GET",config:{params:s}}),serializeQueryArgs:a=>{const{endpointName:e,queryArgs:s}=a;return{endpointName:e,model:s.model,targetField:s.targetField,_q:s.params?._q,idsToOmit:s.params?.idsToOmit,idsToInclude:s.params?.idsToInclude}},merge:(a,e)=>{if(a.pagination&&e.pagination)if(a.pagination.page<e.pagination.page){const s=a.results.map(i=>i.documentId),n=e.results.filter(i=>!s.includes(i.documentId));a.results.push(...n),a.pagination=e.pagination}else e.pagination.page===1&&(a.results=e.results,a.pagination=e.pagination)},forceRefetch({currentArg:a,previousArg:e}){return!a?.params&&!e?.params?!1:a?.params?.page!==e?.params?.page||a?.params?.pageSize!==e?.params?.pageSize},transformResponse:a=>a.results?{...a,results:a.results}:a})})}),o=(t,a=[])=>{const[e]=a.slice(0),s=p(null,e?.__temp_key__??null,t.length);return t.map((n,i)=>({...n,__temp_key__:s[i]}))},{useGetRelationsQuery:u,useLazySearchRelationsQuery:m}=r,d=(t,a)=>{const e=a&&t[a.name]?t[a.name]:null;return typeof e=="string"?e:t.documentId};export{m as a,d as g,u};
