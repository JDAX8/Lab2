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
            <a href="#" class="navbar-brand"><img class="Rima" src="https://1000marcas.net/wp-content/uploads/2021/04/Reddit-logo.png" alt=""></a>
            <div class="navbar-search">
            <form>
                <input type="text" placeholder="Busca en Reddit">
                <button type="submit">Buscar</button>
            </form>
            </div>
            <div class="navbar-menu">
            <ul>
                <li><button><a href="#">Registrarse</a></button></li>
                <li><button><a href="#">Iniciar sesión</a></button></li>
                <li><a href="#">Configuración</a></li>
            </ul>
            </div>
        </nav>
        `
        
    }
}

customElements.define("Search-Bar",Searchbar);
export default Searchbar