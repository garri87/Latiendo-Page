
    const header = document.createElement("header");
   

    header.setAttribute("id", "Navigation");
    
    const logo = document.createElement("h1");
    logo.setAttribute("class","logo");
    logo.innerHTML = "Latiendo Distinto";
    const nav = document.createElement("nav");
    const inicio = createNavLink("Inicio");
    const nosotres = createNavLink("Nosotros");
    const novedades = createNavLink("Novedades");
    const historias = createNavLink("Historias");
    const Contacto = createNavLink("Contacto");
    
    inicio.setAttribute("href", "index.html");
    nosotres.setAttribute("href", "");
    

    document.body.appendChild(header);
    header.appendChild(logo);
    header.appendChild(nav);
    nav.appendChild(inicio);
    nav.appendChild(nosotres);
    nav.appendChild(novedades = createNavLink(");
    nav.appendChild(historias);
    nav.appendChild(Contacto);

function createNavLink(title) {

    const link = document.createElement("a");
    link.innerHTML = title;
    return link;
}
