"use strict";(self.webpackChunkcrmdemo1=self.webpackChunkcrmdemo1||[]).push([[9947],{9947:function(e,t,n){n.r(t);var s=n(4165),i=n(5861),r=n(9439),o=n(2791),c=n(7689),a=n(919),l=n(1063),u=n(5134),d=n(9856),p=n(5103),f=n(8047),m=n(5048),h=n(9777),x=n(8715),b=n(184);t.default=function(){var e={id:"",default:!1},t=(0,o.useState)([e]),n=(0,r.Z)(t,2),j=n[0],C=n[1],y=(0,o.useState)(e),v=(0,r.Z)(y,2),g=v[0],N=v[1],k=(0,o.useState)(""),w=(0,r.Z)(k,2),S=w[0],z=w[1],Z=(0,o.useState)(!1),F=(0,r.Z)(Z,2),I=F[0],R=F[1],A=(0,c.s0)(),E=(0,o.useRef)(null),O=(0,o.useRef)(null),T=(0,h.C)((function(e){return e.currencies.currencies}),m.wU),P=(0,h.T)();(0,o.useEffect)((function(){P(x.gC.getCurrencies())}),[P]);var V=function(){R(!1)},D=function(){var t=(0,i.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:g.default||(P(x.gC.deleteCurrency(g.id)),V(),N(e),O.current.show({severity:"success",summary:"Successful",detail:"Item has been deleted",life:3e3}),setTimeout((function(){P(x.gC.getCurrencies())}),300));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),G=(0,b.jsx)("div",{className:"table-header",children:(0,b.jsxs)("span",{className:"p-input-icon-left",children:[(0,b.jsx)("i",{className:"pi pi-search"}),(0,b.jsx)(p.o,{type:"search",onInput:function(e){E.current.reset(),z(e.target.value)},placeholder:"Search..."})]})}),H=(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(a.z,{label:"No",icon:"pi pi-times",className:"p-button-text",onClick:V}),(0,b.jsx)(a.z,{label:"Yes",icon:"pi pi-check",className:"p-button-text",onClick:D})]});return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f.F,{ref:O}),(0,b.jsxs)("div",{className:"grid pt-2",children:[(0,b.jsx)("div",{className:"col text-left",children:(0,b.jsx)("h3",{className:"caption",children:"Currencies"})}),(0,b.jsxs)("div",{className:"col text-right",children:[(0,b.jsx)(a.z,{icon:"pi pi-plus",className:"p-button-rounded p-button-outlined",tooltip:"Add Currency",onClick:function(){A("/currency/add")}}),"\xa0",(0,b.jsx)(a.z,{icon:"pi pi-external-link",className:"p-button-rounded p-button-outlined",tooltip:"Export Currencies",onClick:function(){E.current.exportCSV()}})]})]}),(0,b.jsxs)(u.w,{ref:E,dataKey:"id",value:T,paginator:!0,rows:10,rowsPerPageOptions:[10,25,50,100],selectionMode:"single",selection:j,onSelectionChange:function(e){return C(e.value)},resizableColumns:!0,globalFilter:S,header:G,showGridlines:!0,children:[(0,b.jsx)(l.s,{field:"name",header:"Currency Name",sortable:!0}),(0,b.jsx)(l.s,{field:"isO4217",header:"ISO 4217 Code",sortable:!0}),(0,b.jsx)(l.s,{field:"symbol",header:"Currency Symbol",sortable:!0}),(0,b.jsx)(l.s,{field:"conversionRate",header:"Conversion Rate",sortable:!0}),(0,b.jsx)(l.s,{field:"status",header:"Status",body:function(e){return e.status?"Active":"Inactive"},sortable:!0}),(0,b.jsx)(l.s,{body:function(e){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(a.z,{icon:"pi pi-pencil",className:"p-button-rounded p-button-outlined mr-2",tooltip:"Edit",onClick:function(){return function(e){A("/currency/edit/".concat(e.id))}(e)}}),(0,b.jsx)(a.z,{icon:"pi pi-trash",className:"p-button-rounded p-button-outlined",tooltip:"Delete",onClick:function(){return function(e){N(e),R(!0)}(e)}})]})},exportable:!1,style:{minWidth:"8rem"}})]}),(0,b.jsx)("p",{children:"* Table columns are sortable and resizable."}),(0,b.jsx)(d.V,{visible:I,style:{width:"450px"},header:"Confirm",modal:!0,footer:H,onHide:V,children:(0,b.jsxs)("div",{className:"confirmation-content",children:[(0,b.jsx)("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),(0,b.jsx)("strong",{children:"Are you sure you want to delete this item?"})]})})]})}}}]);
//# sourceMappingURL=9947.e32f296c.chunk.js.map