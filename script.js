const hidden = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

hidden.forEach(el=>observer.observe(el));

document.querySelector("button").onclick = () =>{

document.querySelector("#about").scrollIntoView({

behavior:"smooth"

});

};