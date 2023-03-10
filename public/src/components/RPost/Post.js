class RPost extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode: "open"})
    }

    static get observedAttributes() {
        return ["username", "hoursSincePost", "postText", "postImage","postTitle"];
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
        <div class="post">
        <section class="reddit-wrap">
          <div class="post-header">
            <div class="post-title">
              <a href="#">Título del post</a>
            </div>
            <div class="post-subtitle">
              <span class="post-subreddit">${this.username}</span>
              <span class="post-divider">|</span>
              <span class="post-author">${this.username}</span>
              <span class="post-divider">|</span>
              <span class="post-timestamp">${this.hoursSincePost}</span>
            </div>
          </div>
          <div class="post-content">
            Contenido del post
            <img class="reddit-image" src="https://pbs.twimg.com/media/Fq0XTM7WYAA4e7W?format=jpg&name=large" alt="">
          </div>
          <div class="post-imag">
          <img src="${this.postImage}" alt="">
        </div>
          <div class="post-footer">
            <div class="post-score">
              <span class="post-upvote">&#9650;</span>
              <span class="post-downvote">&#9660;</span>
              <span class="post-score-number">123</span>
            </div>
            <div class="post-comments">
              <a href="#">12 comentarios</a>
            </div>
          </div>
        </section>
        </div>
        `
        
    }
}

customElements.define("Reddit-Post",RPost);
export default RPost