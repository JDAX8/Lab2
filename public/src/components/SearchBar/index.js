class Searchbar extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode: "open"})
    }
    attributeChangedCallback(propname, oldValue, newValue) {
        if(oldValue !== newValue){
          this[propname] = newValue;
          this.render();
        }
      }

    connectedCallBack(){
        this.render();
    }


    render(){
        this.shadowRoot.innerHTML = `
        <nav class="navbar">
        <div class="navbar-left">
        <a href="#" class="navbar-home">Inicio</a>
        </div>
        <div class="navbar-center">
        <form class="navbar-search">
        <input type="text" placeholder="Buscar...">
        <button type="submit"><i class="fa fa-search"></i></button>
        </form>
        </div>
        <div class="navbar-right">
        <a href="#" class="navbar-link">Registrarse</a>
        <a href="#" class="navbar-link">Iniciar sesión</a>
        <a href="#" class="navbar-link"><i class="fa fa-cog"></i></a>
        </div>
        </nav>
        `
        
    }
}

customElements.define("Search-Bar",Searchbar);
export default Searchbar