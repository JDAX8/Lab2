class CustomBar extends HTMLElement {

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


        <div id = "all">
  
       <section id= "botones">
        <div id="div1">
        
        <button id= "principal">
        Principal
        </button>
        <button id="principal">
        Popular
        </button>
        
        </div>
  
        <div id="div2">
        
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
        <div id="div3">
        
        </div>
        </section>
        </div>
        `
           
        ;
    }
  }
  
  customElements.define('custom-bar', CustomBar);
  export default CustomBar;
  