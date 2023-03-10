import * as components from "./components/index.js";

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); 
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


