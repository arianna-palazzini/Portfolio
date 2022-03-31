//DARK-MODE
const toggle = document.getElementById('toggletest');
const main = document.querySelector('main');
const header = document.getElementById('header');
const footer = document.querySelector('footer');
const menu = document.getElementsByClassName('menu');
const h3 = document.getElementsByTagName('h3');
const h5 = document.getElementsByTagName('h5');
const small = document.getElementsByTagName('small');
const email = document.getElementById('email');
const btn = document.getElementsByClassName('btn');
const btnContact = document.getElementsByClassName('btnContact');
const skills = document.getElementById('skills');
const lineaEmail = document.getElementById('vl');
const lineaWork = document.getElementsByClassName('workingExp');
const card = document.getElementsByClassName('card');
const accordionBtn = document.getElementsByClassName('accordion-button');
const logo = document.getElementById('logo');
const html = document.getElementById('htmlSkill');
const css = document.getElementById('cssSkill');
const bs = document.getElementById('bsSkill');
const sass = document.getElementById('sassSkill');
const js = document.getElementById('jsSkill');
const jq = document.getElementById('jqSkill');
const ts = document.getElementById('tsSkill');
const ang = document.getElementById('angSkill');
var x = false;




toggle.addEventListener("click", function(){
    main.classList.toggle('active');
    header.classList.toggle('active');
    footer.classList.toggle('active');
    email.classList.toggle('active');
    skills.classList.toggle('active');
    lineaEmail.classList.toggle('active');


    for(let element of menu){
        element.classList.toggle('active');
    };

    for(let element of h3){
        element.classList.toggle('active');
    };

    for(let element of h5){
        element.classList.toggle('active');
    };

    for(let element of small){
        element.classList.toggle('active');
    };
    
    for(let element of btn){
        element.classList.toggle('active');
    };

    for(let element of btnContact){
        element.classList.toggle('active');
    };

    for(let element of lineaWork){
        element.classList.toggle('active');
    };

    for(let element of card){
        element.classList.toggle('active');
    };

    for(let element of accordionBtn){
        element.classList.toggle('active');
    };

    // toggle immagini
    if (x === true) {
        logo.src="img/logo1.png";
        html.src="img/html1.png";
        css.src="img/css1.png";
        sass.src="img/sass1.png";
        bs.src="img/bootstrap1.png";
        js.src="img/javascript1.png";
        jq.src="img/jquery1.png";
        ts.src="img/typescript1.png";
        ang.src="img/angular1.png";
    } else {
        logo.src="img/logo2.png";
        html.src="img/html2.png";
        css.src="img/css2.png";
        sass.src="img/sass2.png";
        bs.src="img/bootstrap2.png";
        js.src="img/javascript2.png";
        jq.src="img/jquery2.png";
        ts.src="img/typescript2.png";
        ang.src="img/angular2.png";
    }
    x = !x; 

  });