
class TypeWritter{
  constructor(txtElement, words, wait = 3000){
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
  }
  type(){
    //indice actual de la palabra
    const current = this.wordIndex % this.words.length;
    //obtener el texto completo de la palabra actual
    const fullTxt = this.words[current];

    //Chequeamos si se borro
    if(this.isDeleting){
      //Eliminamos un caracteres
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    }else{
      //Añadimos caracteres
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //Insertamos txt dentro del elemento
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //velocidad de tipeo
    let typeSpeed = 300;

    if(this.isDeleting){
      typeSpeed /= 2;
    }

    //Si la palabra esta completa

    if(!this.isDeleting && this.txt === fullTxt){
      //Hacer una pausa al final
      typeSpeed = this.wait;
      //Seteamos deleting a true
      this.isDeleting = true;
    }else if(this.isDeleting && this.txt === ''){
      this.isDeleting = false;
      //saltamos a la siguiente palabra
      this.wordIndex++;
      //Pausa antes de iniciar a escribir
      typeSpeed = 500;
    }
    setTimeout(() => this.type(), typeSpeed)
  }
}

document.addEventListener('DOMContentLoaded', init);

//innit app
function init(){
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait')
  //Inicializamos TypeWritter
  new TypeWritter(txtElement, words, wait);
}
