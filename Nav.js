
    const header = document.getElementById('Navigation');
      

    const nav = document.createElement("nav");
    const inicio = createNavLink("Inicio");
    const quienes = createNavLink("Quienes Somos");
    const novedades = createNavLink("Novedades");
    const relatos = createNavLink("Relatos");
    const Contacto = createNavLink("Contacto");
    
    inicio.setAttribute("href", "index.html");
    quienes.setAttribute("href", "");
    
    header.appendChild(nav);
    nav.appendChild(inicio);
    nav.appendChild(quienes);
    nav.appendChild(novedades);
    nav.appendChild(relatos);
    nav.appendChild(Contacto);

function createNavLink(title) {

    const link = document.createElement("a");
    link.innerHTML = title;
    return link;
}
