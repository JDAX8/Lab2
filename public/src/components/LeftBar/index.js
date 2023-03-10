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
      <button id= "principal"><img id="home" src="./fotos/icons8-página-principal-48.png" width="20px">
      Principal
      </button>
      <button id="principal"><img src="./fotos/icons8-calificaciones-30.png"
      width="20px">
      Popular
      </button>
      
      </div>

      <div id="div2">
      <p id="subtitulo2">Temas</p>
      <button id="section2"><img src="./fotos/icons8-gaming-64.png" width = "20px">
      Gaming
      </button>
      <button id="section2"><img src="./fotos/icons8-sports-66.png" width = "20px"> 
      Sports
      </button>
      <button id="section2"><img src="./fotos/icons8-bussiness-64.png" width = "20px">
     Business
      </button>
      <button id="section2"><img src="./fotos/icons8-cryptocurrency-64.png" width = "20px">
     Crypto
      </button>
      <button id="section2"><img src="./fotos/icons8-programa-de-televisión-30.png" width = "20px">
     Televisión
      </button>
      <button id="section2"><img src="./fotos/icons8-rockstar-64.png" width = "20px">
     Celebrity
      </button>
      <button id="topic"><img src="./fotos/icons8-herramientas-del-administrador-50.png" width = "20px">
     More topics...
      </button>
      
      </div>
      <div id="div3">
      <button id = "Reddit"> Unete a Reddit</button>
      </div>
      </section>
      `
         
      ;
  }
}

customElements.define('custom-message', CustomMessage);
export default CustomMessage;

