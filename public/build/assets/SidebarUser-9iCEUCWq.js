import{q as n,j as e}from"./app-D5IJSCvg.js";const i="/build/assets/home-B0r255Lv.png",m="/build/assets/folder-DfghISGh.png",r="/build/assets/drone-D-Hg5WIo.png",o="/build/assets/newspaper-B5IxeW6l.png",d="/build/assets/sale-B7fr44QS.png",c="/build/assets/call-DNjObZmH.png",l=[{nama:"Home",gambar:i,link:"/"},{nama:"About",gambar:m,link:"/about"},{nama:"Portofolio",gambar:r,link:"/portofolio"},{nama:"Blog",gambar:o,link:"/blog"},{nama:"Price List",gambar:d,link:"/price"},{nama:"Whatsapp",gambar:c,link:"https://wa.me/6281326903289?text=hallo..."}];function p(){const{url:t}=n();return e.jsxs("div",{children:[e.jsx("div",{className:"hidden md:block z-40 fixed top-0 p-2 w-full text-end py-2 pr-10",children:e.jsx("p",{className:"text-gray-500 text-[10px] font-light",children:"Copy Right © 2024 Mizan Story.Id Reserved."})}),e.jsxs("div",{className:"hidden md:block z-50 bg-white fixed w-[60px] md:w-32 h-screen border-r shadow",children:[e.jsx("img",{src:"logo.png",alt:"",className:"w-20 mx-auto pt-2"}),e.jsx("hr",{}),e.jsx("div",{children:l.map((s,a)=>e.jsxs("a",{href:s.link,className:`flex flex-col items-center text-xs mt-10 mb-8 ${t===s.link?"text-white":"text-black"}`,children:[e.jsx("img",{src:s.gambar,alt:"",className:"w-7 md:w-12"}),e.jsx("span",{className:`mt-2 text-[5px] md:text-[8px] px-1 rounded shadow ${t===s.link?"bg-blue-400 animate-pulse":"bg-none"}`,children:s.nama})]},a))})]}),e.jsx("div",{className:"md:hidden z-50 bg-white fixed bottom-0 w-full h-[60px] border-t",children:e.jsx("div",{className:"w-full flex justify-center items-center",children:l.map((s,a)=>e.jsx("div",{className:"mt-2 flex justify-between items-center",children:e.jsx("a",{href:s.link,className:`mx-3 text-center text-xs p-2 rounded-lg ${t===s.link?"bg-gray-100 shadow-lg":"bg-white"}`,children:e.jsx("img",{src:s.gambar,alt:"",className:"w-32"})},a)},a))})})]})}export{p as S};
