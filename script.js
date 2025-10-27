const PLANETS = {
  mercury:{name:"Mercurio",desc:"El planeta más cercano al Sol, rocoso y lleno de cráteres.",facts:["Radio: 2.440 km","Distancia al Sol: 58 millones km","Lunas: 0"]},
  venus:{name:"Venus",desc:"Similar en tamaño a la Tierra, pero con una atmósfera muy caliente y densa.",facts:["Radio: 6.052 km","Distancia al Sol: 108 millones km","Lunas: 0"]},
  earth:{name:"Tierra",desc:"Nuestro hogar azul, el único planeta conocido con vida.",facts:["Radio: 6.371 km","Distancia al Sol: 150 millones km","Lunas: 1"]},
  mars:{name:"Marte",desc:"El planeta rojo, frío y rocoso.",facts:["Radio: 3.390 km","Distancia al Sol: 228 millones km","Lunas: 2"]},
  jupiter:{name:"Júpiter",desc:"El planeta más grande, un gigante gaseoso.",facts:["Radio: 69.900 km","Distancia al Sol: 778 millones km","Lunas: 79+"]},
  saturn:{name:"Saturno",desc:"Famoso por sus hermosos anillos de hielo y roca.",facts:["Radio: 58.000 km","Distancia al Sol: 1.4 mil millones km","Lunas: 80+"]},
  uranus:{name:"Urano",desc:"Gigante helado azul verdoso que gira de lado.",facts:["Radio: 25.300 km","Distancia al Sol: 2.9 mil millones km","Lunas: 27"]},
  neptune:{name:"Neptuno",desc:"Gigante helado azul, muy frío y con vientos intensos.",facts:["Radio: 24.600 km","Distancia al Sol: 4.5 mil millones km","Lunas: 14"]}
};

const modal=document.getElementById("planet-modal");
const title=document.getElementById("modal-title");
const desc=document.getElementById("modal-description");
const facts=document.getElementById("modal-facts");
const closeBtn=document.getElementById("close-modal");

document.querySelectorAll(".sidebar button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const key=btn.dataset.planet;
    openModal(key);
  });
});

function openModal(key){
  const planet=PLANETS[key];
  if(!planet)return;
  title.textContent=planet.name;
  desc.textContent=planet.desc;
  facts.innerHTML="";
  planet.facts.forEach(f=>{
    const li=document.createElement("li");
    li.textContent=f;
    facts.appendChild(li);
  });
  modal.classList.remove("hidden");
}

closeBtn.addEventListener("click",()=>modal.classList.add("hidden"));
modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.add("hidden");});
window.addEventListener("keydown",e=>{if(e.key==="Escape")modal.classList.add("hidden");});
