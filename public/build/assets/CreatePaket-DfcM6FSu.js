import{r as i,j as e,a as K}from"./app-DIXEbt7d.js";import{M as v,T as _}from"./TextInput-DYLcJunQ.js";import{B as g}from"./Button-DVWaxQgd.js";import{T as q}from"./TextArea-BbNF39jT.js";import{S as n}from"./SelectInput-CuwPXDvC.js";function D(){const[r,P]=i.useState(!1),[o,k]=i.useState(""),[l,S]=i.useState(""),[s,b]=i.useState(""),[u,T]=i.useState(""),[d,f]=i.useState(""),[p,B]=i.useState(""),[c,L]=i.useState(""),[h,C]=i.useState(""),[m,E]=i.useState(""),[x,O]=i.useState(""),[j,y]=i.useState(""),N=async a=>{a.preventDefault();try{const t=new FormData;t.append("nama_paket",o),t.append("nama",l),t.append("jumlah_baterai",s),t.append("jam_terbang",u),t.append("operator",d),t.append("video",p),t.append("output",c),t.append("jam_pilot",h),t.append("lokasi",m),t.append("harga",x),t.append("deskripsi",j),await K.post("http://127.0.0.1:8000/tambahpaket",t,{headers:{"Content-Type":"multipart/form-data"}}),P(!0)}catch(t){t.response&&(alert("Data gagal dimasukkan"),window.location.reload())}};return e.jsxs("div",{className:"md:w-[600px]",children:[r&&e.jsx("div",{className:"relative w-[300px] h-screen mt-32",children:e.jsxs(v,{children:[e.jsx("h1",{className:"text-xs text-center",children:"Data berhasil dimasukan"}),e.jsx("div",{onClick:()=>window.location.reload(),className:"text-center mt-5",children:e.jsx(g,{className:"w-32",children:"ok"})})]})}),e.jsx(v,{children:e.jsxs("form",{onSubmit:N,className:`flex flex-col md:flex-row ${r?"hidden":"block"}`,content:"",children:[e.jsxs("div",{children:[e.jsxs(n,{value:o,onChange:a=>k(a.target.value),name:"nama_paket",required:!0,children:[e.jsx("option",{value:"",children:"Pilih drone"}),e.jsx("option",{value:"AERIAL",children:"AERIAL"}),e.jsx("option",{value:"FPV",children:"FPV"})]}),e.jsxs(n,{value:l,onChange:a=>S(a.target.value),name:"nama",required:!0,children:[e.jsx("option",{value:"",children:"Pilih paket"}),e.jsx("option",{value:"PAKET BRONZE",children:"PAKET BRONZE"}),e.jsx("option",{value:"PAKET SILVER",children:"PAKET SILVER"}),e.jsx("option",{value:"PAKET GOLD",children:"PAKET GOLD"})]}),e.jsxs(n,{value:s,onChange:a=>b(a.target.value),name:"jumlah_baterai",required:!0,children:[e.jsx("option",{value:"",children:"Pilih baterai"}),e.jsx("option",{value:"1 Baterai",children:"1 Baterai"}),e.jsx("option",{value:"2 Baterai",children:"2 Baterai"}),e.jsx("option",{value:"3 Baterai",children:"3 Baterai"})]}),e.jsxs(n,{value:u,onChange:a=>T(a.target.value),name:"jam_terbang",required:!0,children:[e.jsx("option",{value:"",children:"Pilih jam terbang"}),e.jsx("option",{value:"Terbang 15-30 Menit 1 Kali",children:"Terbang 15-30 Menit 1 Kali"}),e.jsx("option",{value:"Terbang 15-30 Menit 2 Kali",children:"Terbang 15-30 Menit 2 Kali"}),e.jsx("option",{value:"Terbang 15-30 Menit 1 Kali",children:"Terbang 15-30 Menit 3 Kali"})]}),e.jsxs(n,{value:d,onChange:a=>f(a.target.value),name:"operator",required:!0,children:[e.jsx("option",{value:"",children:"Pilih operator"}),e.jsx("option",{value:"Pilot",children:"Pilot"}),e.jsx("option",{value:"Operator",children:"Operator"}),e.jsx("option",{value:"Pilot/Operator",children:"Pilot/Operator"})]}),e.jsxs(n,{value:p,onChange:a=>B(a.target.value),name:"video",required:!0,children:[e.jsx("option",{value:"",children:"Pilih durasi video"}),e.jsx("option",{value:"Foto Video Terbatas",children:"Foto Video Terbatas"}),e.jsx("option",{value:"Foto Video Unlimited",children:"Foto Video Unlimited"})]})]}),e.jsxs("div",{className:"ml-0 md:ml-5",children:[e.jsxs(n,{value:c,onChange:a=>L(a.target.value),name:"output",required:!0,children:[e.jsx("option",{value:"",children:"Pilih output"}),e.jsx("option",{value:"Output File Mentah",children:"Output File Mentah"}),e.jsx("option",{value:"Output File Jadi",children:"Output File Jadi"})]}),e.jsxs(n,{value:h,onChange:a=>C(a.target.value),name:"jam_pilot",required:!0,children:[e.jsx("option",{value:"",children:"Pilih stand by pilot"}),e.jsx("option",{value:"Pilot Stand By 1-2 Jam",children:"Pilot Stand By 1-2 Jam"}),e.jsx("option",{value:"Pilot Stand By 2-4 Jam",children:"Pilot Stand By 2-4 Jam"}),e.jsx("option",{value:"Pilot Stand By 5-7 Jam",children:"Pilot Stand By 5-7 Jam"})]}),e.jsxs(n,{value:m,onChange:a=>E(a.target.value),name:"lokasi",required:!0,children:[e.jsx("option",{value:"",children:"Pilih lokasi"}),e.jsx("option",{value:"1 Lokasi",children:"1 Lokasi"}),e.jsx("option",{value:"1-2 Lokasi",children:"1-2 Lokasi"}),e.jsx("option",{value:"2-4 Lokasi",children:"2-4 Lokasi"})]}),e.jsx(_,{type:"number",name:"harga",value:x,onChange:a=>O(a.target.value),placeholder:"Harga",minLength:5,maxLength:25,required:!0}),e.jsx(q,{type:"text",name:"deskripsi",value:j,onChange:a=>y(a.target.value),placeholder:"Deskripsi",minLength:5,maxLength:200,required:!0}),e.jsx("div",{className:"flex justify-end",children:e.jsx(g,{className:"w-full",children:"Submit"})})]})]})})]})}export{D as default};