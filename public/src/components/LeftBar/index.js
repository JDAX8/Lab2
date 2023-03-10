class CustomMessage extends HTMLElement {

  static get observedAttributes() {
      return ["message"];
  }

  constructor() {
      super();
      this.attachShadow({ mode: "open" }); 
  }

  connectedCallback() {
      this.render();
  }

  attributeChangedCallback(propName, oldValue, newValue) {
      this[propName] = newValue;
      this.render();
  }

  render(){
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./src/components/LeftBar/index.css">

     <section id= "botones">
      <div id="div1">
      <p id="subtitulo">Feeds</p>
      <button id= "principal"><img id="home" src="./fotos/icons8-página-principal-48.png"
      width="20px">
      
      principal
      </button>
      <button id="principal"><img src="./fotos/icons8-calificaciones-30.png">
      popular
      </button>
      
      </div>

      <div id="div2">
      <p id="subtitulo2">Temas</p>
      <button id="section2">
      Gaming
      </button>
      <button id="section2">
      Sports
      </button>
      <button id="section2">
     Business
      </button>
      <button id="section2">
     Crypto
      </button>
      <button id="section2">
     Televisión
      </button>
      <button id="section2">
     Celebrity
      </button>
      <button id="topic">
     More topics...
      </button>
      
      </div>
      </section>
      `
         
      ;
  }
}

customElements.define('custom-message', CustomMessage);
export default CustomMessage;