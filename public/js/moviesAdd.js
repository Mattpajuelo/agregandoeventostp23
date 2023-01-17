window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let inputTitle = document.querySelector('#titulo')
   
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
   
    formulario.classList.add('fondoCRUD');
    
    function getRandomInt() {
        return Math.floor(Math.random() * 3);
      }
      let colores=['blue','red','black']
    titulo.addEventListener('mouseover', ()=>{
        
        titulo.style.color = `${colores[getRandomInt()]}`
    })
    let estadoSecreto = 0
    let s=["s","e","c","r","e","t","o"]
    let numero=0

    inputTitle.addEventListener('keydown', (event) => {
       numero=estadoSecreto
        for (let index = 0; index <= numero; index++) {
            if (index==numero) {
                if(event.key ==s[index]){
                estadoSecreto=numero+1
                
                if (event.key == "o" && estadoSecreto == 7) {
                    alert("SECRETO MÁGICO")
                    estadoSecreto=0
                }
                
                
            }else{
                estadoSecreto=0
                
            }
            }
            
            
        }
      
    })



}