document.addEventListener("DOMContentLoaded",()=>{
  const cards=[...document.querySelectorAll(".card")];
  const count=document.getElementById("wallResultCount");
  let type="all",genre="all";
  function render(){
    let n=0;
    cards.forEach(c=>{
      const show=(type==="all"||c.dataset.type===type)&&(genre==="all"||c.dataset.genre===genre);
      c.classList.toggle("hidden",!show);
      if(show)n++;
    });
    count.textContent=n;
  }
  document.querySelectorAll(".type-filter").forEach(btn=>btn.addEventListener("click",()=>{
    document.querySelectorAll(".type-filter").forEach(x=>x.classList.remove("active"));
    btn.classList.add("active"); type=btn.dataset.type; render();
  }));
  document.querySelectorAll(".genre-filter").forEach(btn=>btn.addEventListener("click",()=>{
    document.querySelectorAll(".genre-filter").forEach(x=>x.classList.remove("active"));
    btn.classList.add("active"); genre=btn.dataset.genre; render();
  }));
  document.querySelectorAll(".fav").forEach(btn=>btn.addEventListener("click",()=>{
    btn.classList.toggle("saved"); btn.textContent=btn.classList.contains("saved")?"♥":"♡";
  }));
  render();
});
