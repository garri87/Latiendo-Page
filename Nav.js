
    const header = document.getElementById('navigation');
      

    const nav = document.createElement("nav");
    const inicio = createNavLink("Inicio");
    const quienes = createNavLink("Quienes Somos");
    const mision = createNavLink("Mision");
    const novedades = createNavLink("Novedades");
    const relatos = createNavLink("Relatos");
    const contacto = createNavLink("Contacto");
    
    inicio.setAttribute("href", "index.html");
    quienes.setAttribute("href", "index.html#quienes");
    mision.setAttribute("href", "index.html#mision");
    contacto.setAttribute("href", "index.html#contacto");
    relatos.setAttribute("href", "Relatos.html");
    novedades.setAttribute("href", "index.html#novedades");


    header.appendChild(nav);
    nav.appendChild(inicio);
    nav.appendChild(novedades);
    nav.appendChild(quienes);
    nav.appendChild(mision);
    nav.appendChild(relatos);
    nav.appendChild(contacto);

function createNavLink(title) {

    const link = document.createElement("a");
    link.innerHTML = title;
    return link;
}
