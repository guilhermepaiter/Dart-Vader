class DynamicTitle extends HTMLElement {
    constructor () {
        super();

        const shadow = this.attachShadow({mode: "open"})

        //base do componente <h1>Felipe</h1>
        const componenteRoot = document.createElement("h1");
        componenteRoot.textContent = this.getAttribute("title");

        //estilizar o component
        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: red;
            }
        `
        ;

        //enviar o componente para o shadow DOM
        shadow.appendChild(componenteRoot);
        shadow.appendChild(style);
    }
}
customElements.define("dinamic-title", DynamicTitle);