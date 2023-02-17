class RedditPost extends HTMLElement {
    constructor() {
      super();
  
      // Cree un sombreado DOM para nuestro componente
      const shadow = this.attachShadow({ mode: "open" });
  
      // Cree un formulario y agregue campos de entrada
      const form = document.createElement("form");
      const titleInput = document.createElement("input");
      const urlInput = document.createElement("input");
      const submitButton = document.createElement("button");
  
      titleInput.setAttribute("type", "text");
      titleInput.setAttribute("placeholder", "Título");
  
      urlInput.setAttribute("type", "text");
      urlInput.setAttribute("placeholder", "URL");
  
      submitButton.setAttribute("type", "submit");
      submitButton.textContent = "Publicar";
  
      // Agregue un evento de escucha para enviar el formulario
      form.addEventListener("submit", (event) => {
        event.preventDefault();
  
        // Obtenga los valores de entrada del usuario
        const title = titleInput.value;
        const url = urlInput.value;
  
        // Construya una URL para enviar la solicitud POST a Reddit
        const redditURL = "https://www.reddit.com/api/v1/access_token";
        const clientID = "TU_CLIENT_ID_AQUI";
        const clientSecret = "TU_CLIENT_SECRET_AQUI";
        const username = "TU_USUARIO_DE_REDDIT_AQUI";
        const password = "TU_CONTRASEÑA_DE_REDDIT_AQUI";
        const authString = btoa(`${clientID}:${clientSecret}`);
  
        // Envíe una solicitud POST a Reddit con los datos del usuario y el post
        fetch(redditURL, {
          method: "POST",
          headers: {
            Authorization: `Basic ${authString}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `grant_type=password&username=${username}&password=${password}`,
        })
          .then((response) => response.json())
          .then((data) => {
            const accessToken = data.access_token;
  
            fetch("https://oauth.reddit.com/api/submit", {
              method: "POST",
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: `sr=${subreddit}&title=${title}&url=${url}`,
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
              })
              .catch((error) => {
                console.error(error);
              });
          })
          .catch((error) => {
            console.error(error);
          });
      });
  
      // Agregue los campos de entrada y el botón de envío al formulario
      form.appendChild(titleInput);
      form.appendChild(urlInput);
      form.appendChild(submitButton);
  
      // Agregue el formulario al sombreado DOM
      shadow.appendChild(form);
    }
  }
  
  // Registre el componente personalizado con el navegador
  customElements.define("reddit-post", RedditPost);