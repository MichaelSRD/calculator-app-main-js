const  fondo = document.body;
const pantalla = document.getElementById("resultado")
const cabeza = document.getElementById("calhead");
const cuerpo = document.getElementById("calc-main");
const delet = document.querySelector('.del');
const rese = document.querySelector('.reset');
const btnc = document.querySelectorAll(".numeros");
const opt = document.querySelectorAll(".operadores");
const toggle = document.getElementById("switch-toggle");
const igual = document.querySelector(".igual");


function tema(t){
 
  switch (t) {
     case "one":
      fondo.classList.remove('tema-dos')
      pantalla.classList.remove('d-dos'); 
      cabeza.classList.remove('h-dos');
      cuerpo.classList.remove('c-dos');
      delet.classList.remove('borrar-dos');
      rese.classList.remove('rese-dos');
      btnc.forEach(btn =>{
        btn.classList.remove("numeros-dos");
      });   
      opt.forEach(opts => {
        opts.classList.remove("numeros-dos");
    });
    toggle.classList.remove("toggle");
    // tres
    fondo.classList.remove('tema-tres');
        pantalla.classList.remove('d-tres');
        cabeza.classList.remove('h-tres');
        cuerpo.classList.remove('c-tres');
        delet.classList.remove('borrar-tres');
        rese.classList.remove('rese-tres');
        btnc.forEach(btn =>{
          btn.classList.remove("numeros-tres");
        });
        opt.forEach(opts => {
            opts.classList.remove("numeros-tres");
        });
        toggle.classList.remove("toggle-tres");
        igual.classList.remove("igual-tres");
        break;
     case "two":
      fondo.classList.add('tema-dos');
      pantalla.classList.add('d-dos');
      cabeza.classList.add('h-dos');
      cuerpo.classList.add('c-dos');
      delet.classList.add('borrar-dos');
      rese.classList.add('rese-dos');
      btnc.forEach(btn =>{
        btn.classList.add("numeros-dos");
      });
      opt.forEach(opts => {
          opts.classList.add("numeros-dos");
      });
      toggle.classList.add("toggle");
      fondo.classList.remove('tema-tres');
        pantalla.classList.remove('d-tres');
        cabeza.classList.remove('h-tres');
        cuerpo.classList.remove('c-tres');
        delet.classList.remove('borrar-tres');
        rese.classList.remove('rese-tres');
        btnc.forEach(btn =>{
          btn.classList.remove("numeros-tres");
        });
        opt.forEach(opts => {
            opts.classList.remove("numeros-tres");
        });
        toggle.classList.remove("toggle-tres");
        igual.classList.remove("igual-tres");
      break;
      case "three":

        fondo.classList.add('tema-tres');
        pantalla.classList.add('d-tres');
        cabeza.classList.add('h-tres');
        cuerpo.classList.add('c-tres');
        delet.classList.add('borrar-tres');
        rese.classList.add('rese-tres');
        btnc.forEach(btn =>{
          btn.classList.add("numeros-tres");
        });
        opt.forEach(opts => {
            opts.classList.add("numeros-tres");
        });
        toggle.classList.add("toggle-tres");
        igual.classList.add("igual-tres");
          break;
     default:
        break;
  }
}    