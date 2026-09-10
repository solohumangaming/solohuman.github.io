
document.addEventListener("DOMContentLoaded",function(){
  const cards=[...document.querySelectorAll(".software-card")];
  const count=document.getElementById("softwareResultCount");
  let type="all",genre="all";
  function render(){
    let n=0;
    cards.forEach(c=>{
      const ok=(type==="all"||c.dataset.type===type)&&(genre==="all"||c.dataset.genre===genre);
      c.classList.toggle("soft-hidden",!ok);
      if(ok)n++;
    });
    count.textContent=n;
  }
  document.querySelectorAll(".soft-filter").forEach(b=>b.addEventListener("click",()=>{
    document.querySelectorAll(".soft-filter").forEach(x=>x.classList.remove("active"));
    b.classList.add("active"); type=b.dataset.type; render();
  }));
  document.querySelectorAll(".soft-genre").forEach(b=>b.addEventListener("click",()=>{
    document.querySelectorAll(".soft-genre").forEach(x=>x.classList.remove("active"));
    b.classList.add("active"); genre=b.dataset.genre; render();
  }));
  document.querySelectorAll(".soft-favorite").forEach(b=>b.addEventListener("click",()=>{
    b.classList.toggle("saved"); b.textContent=b.classList.contains("saved")?"♥":"♡";
  }));
  render();
});
