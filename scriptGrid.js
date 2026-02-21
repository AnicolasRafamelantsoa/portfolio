const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0)
});

let menu = document.querySelector('#icon-menu');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-bx-menu');
    navlist.classList.toggle('active');
}

window.onscroll = () => {
    // menu.classList.toggle('bx-x');
    navlist.classList.remove('active');
}

const sr = ScrollReveal ({
    distance: '45px',
    duration: 2700,
    reset: true
})

sr.reveal('.home-text', {delay:350, origin:'left'})
sr.reveal('.home-img', {delay:350, origin:'right'})

sr.reveal('.sub-service, .about, .portfolio, .service, .cta, .contact', {delay:200, origin:'bottom'})


function openWindowMirasa(){
    window.open("project/association_mirasa.html","_parent");
}

function openWindowBeach(){
    window.open("project/Dola_Beach.html","_parent");
}

 function openWindowMandroal(){
     window.open("project/mandroal.html","_parent");
 }

 function openWindowRufus(){
     window.open("project/rufus.html","_parent");
 }

 function openWindowNavix(){
     window.open("project/navix.html","_parent");
 }

 function openWindowTragnorek(){
     window.open("project/tragnorek.html","_parent");
 }

 function openWindowShako(){
     window.open("project/shako.html","_parent");
 }

 function openWindowDixi(){
     window.open("project/dixi.html","_parent");
 }

 function openWindowLongoza(){
     window.open("project/longoza.html","_parent");
 }

 function openWindowAsyf(){
     window.open("project/asc_asyf.html","_parent");
 }


  function openWindowService(){
     window.open("service.html","_parent");
 }

