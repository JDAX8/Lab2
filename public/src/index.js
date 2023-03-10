<<<<<<< HEAD
import * as components from "./components/index.js";

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); // encapsulation, mode open means this is reachable for js on your web
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `

    <custom-message></custom-message>
    
    `
    ;
    
  }
}

customElements.define("app-container", AppContainer);
=======
import * as components from "./components/Papa.js"
import data from "./data.js "

class Principal extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }
    connectedCallback()
    {
        this.render();
    }
}
customElements.define("p-container", Principal);
>>>>>>> 7292cf35ca77df6c4bbb7ecbdefedc76da0e2cf6
