import{r as i,j as e,a as r}from"./app-D5IJSCvg.js";import{S as L,P as S}from"./Sidebar-fSIhMEZl.js";import"./index-BfdzS_qj.js";import{u as k}from"./Url-CSIjk-8F.js";import{a as o}from"./Api-DcJJrnSJ.js";import{P as l}from"./PopOver-DrEeyAhp.js";import M from"./CreateFoto-KwBWGGxX.js";import{B as a}from"./Button-D40j8xhE.js";import{C as d}from"./CloseButton-DyjPtixA.js";import T from"./EditFoto-BcT4ypnt.js";import R from"./CreateVideo-CPZB8Xwl.js";import q from"./EditVideo-BDsZRnJ1.js";import{M as A}from"./TextInput-Ub2rYonD.js";import"./TextArea-D_xG-DAP.js";import"./ImagePreviewInput-CBGWkbo8.js";function re({fotos:c,videos:n}){const[E,h]=i.useState(!1),[m,p]=i.useState(!1),[j,v]=i.useState(!1),[x,u]=i.useState(!1),[f,N]=i.useState(!1),g=20,b=c.length,y=b/g*100,C=10,V=n.length,w=V/C*100,F="Galeri foto",$="Galeri video",[P,z]=i.useState(null),[I,O]=i.useState(null),B=async s=>{try{const t=await r.get(`${o}editfoto${s}`);z(t.data),v(!0)}catch(t){console.error("Error fetching foto data:",t)}},D=async s=>{try{await r.delete(`${o}hapusfoto${s}`),h(!0)}catch(t){console.error(t)}},G=async s=>{try{const t=await r.get(`${o}editvideo${s}`);O(t.data),N(!0)}catch(t){console.error("Error fetching foto data:",t)}},H=async s=>{try{await r.delete(`${o}hapusvideo${s}`),h(!0)}catch(t){console.error(t)}};return e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(L,{})}),E&&e.jsx(l,{children:e.jsx("div",{className:"relative w-[300px] h-screen mt-32",children:e.jsxs(A,{children:[e.jsx("h1",{className:"text-xs text-center",children:"Data berhasil dihapus"}),e.jsx("div",{onClick:()=>window.location.reload(),className:"text-center mt-5",children:e.jsx(a,{className:"w-32",children:"ok"})})]})})}),e.jsxs("div",{className:"pt-5 mx-5 md:mx-0 md:ml-[150px] md:pt-20",children:[e.jsxs("div",{className:"flex mb-10",children:[e.jsx("div",{className:"w-full",children:e.jsx(S,{progress:y,nama:F,progressComplete:b,progressValue:g,totalProgress:y.toFixed(2)})}),e.jsx("div",{className:"w-full ml-20 mr-5",children:e.jsx(S,{progress:w,nama:$,progressComplete:V,progressValue:C,totalProgress:w.toFixed(2)})})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs md:text-sm font-bold mb-4",children:"Foto"})}),e.jsxs("div",{className:"flex mx-5",children:[c.length<20&&e.jsx("div",{onClick:()=>p(!m),children:e.jsx(a,{children:"Tambah foto"})}),n.length<10&&e.jsx("div",{onClick:()=>u(!x),className:"ml-5",children:e.jsx(a,{children:"Tambah video"})})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mt-5 grid grid-cols-1 md:grid-cols-4 gap-5 md:mr-5 mb-20",children:c.map((s,t)=>e.jsx("div",{className:"",children:e.jsxs("div",{children:[e.jsx("img",{src:k+s.gambar,alt:"",className:"w-full h-[250px] md:h-[200px] object-cover rounded hover:rounded-none"}),e.jsx("h1",{className:"px-2 text-xs capitalize font-bold mt-2",children:s.nama}),e.jsx("p",{className:"px-2 mt-2 text-gray-400 text-[10px] h-4",children:s.deskripsi}),e.jsxs("div",{className:"px-2 text-[10px] flex justify-between items-center",children:[e.jsxs("div",{className:"flex",children:[e.jsx("span",{className:"material-symbols-outlined text-xs text-gray-500",children:"visibility"}),e.jsxs("p",{className:"ml-3 text-gray-500 w-20 truncate",children:[s.viewer.toLocaleString()," ","views"]})]}),e.jsxs("div",{className:"flex",children:[e.jsx("div",{onClick:()=>B(s.id),children:e.jsx(a,{className:"w-12",children:"Edit"})}),e.jsx("div",{onClick:()=>D(s.id),className:"ml-3",children:e.jsx(a,{className:"w-12",children:"Hapus"})})]})]})]})},t))}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs md:text-sm font-bold my-4",children:"Video"})}),e.jsx("div",{className:"mt-5 grid grid-cols-1 md:grid-cols-4 gap-5 md:mr-5 mb-20",children:n.map((s,t)=>e.jsx("div",{className:"",children:e.jsxs("div",{children:[e.jsx("video",{src:k+s.gambar,alt:"",autoPlay:!0,muted:!0,loop:!0,className:"transition-all duration-500 w-full h-[250px] md:h-[200px] object-cover rounded hover:rounded-none hover:brightness-90"}),e.jsx("h1",{className:"px-2 text-xs capitalize font-bold mt-2",children:s.nama}),e.jsx("p",{className:"px-2 mt-2 text-gray-400 text-[10px] h-4",children:s.deskripsi}),e.jsxs("div",{className:"px-2 text-[10px] flex justify-between items-center",children:[e.jsxs("div",{className:"flex",children:[e.jsx("span",{className:"material-symbols-outlined text-xs text-gray-500",children:"visibility"}),e.jsxs("p",{className:"ml-3 text-gray-500 w-20 truncate",children:[s.viewer.toLocaleString()," ","views"]})]}),e.jsxs("div",{className:"flex",children:[e.jsx("div",{onClick:()=>G(s.id),children:e.jsx(a,{className:"w-12",children:"Edit"})}),e.jsx("div",{onClick:()=>H(s.id),className:"ml-3",children:e.jsx(a,{className:"w-12",children:"Hapus"})})]})]})]})},t))})]}),m&&e.jsx(l,{children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute top-2 right-2 z-50",onClick:()=>p(!m),children:e.jsx(d,{})}),e.jsx(M,{})]})}),j&&e.jsx(l,{children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute top-2 right-2 z-50",onClick:()=>v(!j),children:e.jsx(d,{})}),e.jsx(T,{foto:P})]})}),x&&e.jsx(l,{children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute top-2 right-2 z-50",onClick:()=>u(!x),children:e.jsx(d,{})}),e.jsx(R,{})]})}),f&&e.jsx(l,{children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute top-2 right-2 z-50",onClick:()=>N(!f),children:e.jsx(d,{})}),e.jsx(q,{video:I})]})})]})]})}export{re as default};