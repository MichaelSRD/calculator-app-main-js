const Vespera= document.getElementById('espera');
const VActual= document.getElementById('actual');
const Numero = document.querySelectorAll('.numeros');
const operator = document.querySelectorAll('.operadores');


x="0";
xi=1;
coma = 0;
ni=0;
op="no";

operator.forEach(btn =>{
   btn.addEventListener('click', operar)
})
Numero.forEach(btn => {
     btn.addEventListener('click', number)
});

function number(){
    btnvalue = this.value,
    calculator(btnvalue);
}

function calculator(xx) {  
    
    
    if (x=="0" || xi==1  ) {  
       VActual.innerHTML=xx; 
       x=xx;
      
   if(xx==".") {
      VActual.innerHTML="0.";
      x=xx;
      coma=1 ;
   }
       }
    else { 
       
      if (xx=="." && coma==0){
         VActual.innerHTML += xx;
         x+=xx;
         coma=1 ;
      }
      else if(xx=="." && coma==1){}
      else{
         VActual.innerHTML+=xx; 
         x+=xx; 
      }
    }
    xi=0 
 }

function operar(){
   igualar();
   ni= new Decimal(x);
   op= this.value;
   Vespera.innerHTML = ni + this.value;
   VActual.innerHTML = "";
   coma=0 ;
   xi=1; 

}
function igualar(){
   if(op =="no"){
     VActual.innerHTML=x;
     Vespera.innerHTML="";
   }
   else{

      switch (op) {
         case "+":
            sol = ni.plus(x).toNumber();
            break;

         case "-":
            sol = ni.plus(x).toNumber();
            break;
         case "*":
            sol =  ni.mul(x).toNumber();
            break;

         case "/":
            sol = ni.dividedBy(x).toDecimalPlaces(4).toString();
            
            
            break;
         default:
            break;
      }
      
      if (sol == Infinity) {
         VActual.innerHTML= 'error';
         Vespera.innerHTML="";
      }else{
         x=sol;
      xi=1;
      VActual.innerHTML=sol;
      Vespera.innerHTML="";
      op="no";

      }

      
      
   }
  
}

function retro(){ 
  
   cifras=x.length; 
   br=x.substr(cifras-1,cifras) 
   x=x.substr(0,cifras-1) 
   if (x=="") {x="0";} 
   if (br==".") {coma=0;} 
   VActual.innerHTML=x;
   }

   function borradoTotal() {
      VActual.innerHTML=0; 
      Vespera.innerHTML="";
      x="0"; 
      coma=0; 
      ni=0 
      op="no" 

}


    
    


