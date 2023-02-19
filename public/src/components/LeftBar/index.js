class CustomMessage extends HTMLElement {

  static get observedAttributes() {
      return ["message"];
  }

  constructor() {
      super();
      this.attachShadow({ mode: "open" }); // encapsulation, mode open means this is reachable for js on your web
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
   
      <div>
      <section>
      <button>
      principal
      </button>
      <button>
      popular
      </button>
      </section>
      </div>


      <div>
      <section>
      <button>
      Gaming
      </button>
      <button>
      Sports
      </button>
      <button>
     Business
      </button>
      <button>
     Crypto
      </button>
      <button>
     Televisión
      </button>
      <button>
     Celebrity
      </button>
      <button>
     More topics...
      </button>
      </section>
      </div>



      <link rel="stylesheet" href="./src/components/leftBar/index.css">

      <p>${this.message || 'Hello, world'}</p>
      `;
  }
}

customElements.define('custom-message', CustomMessage);
export default CustomMessage;