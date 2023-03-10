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