import { productos } from "./productos.js";

window.onload = function(){

    //Creamos el header y su contenido
    let header = document.createElement("header");
    let h1 = document.createElement("h1");
    h1.textContent = "Productos clasificados";
    header.appendChild(h1);
    document.body.appendChild(header);

    //Creamos los 2 contenedores grandes. Grupos donde irán los grupos A y B y la carta en donde irán todos los plaltos
    let grupos = document.createElement("div");
    grupos.classList.add("grupos");

    let carta = document.createElement("div");
    carta.classList.add("carta");

    //Creamos un contenedor principal main en donde irá todo el contenido de los platos.
    let main = document.createElement("main");
    document.body.appendChild(main);

    //Agregamos contenedortes al main
    document.querySelector("main").appendChild(carta);
    document.querySelector("main").appendChild(grupos);

    //Creamos contenedores de la derecha (los grupos) donde incluiremos los platos. Grupo A
    let grupoA = document.createElement("div");
    grupoA.classList.add("grupo");
    grupoA.setAttribute("id","grupoA");

    let h2a = document.createElement("h2");
    h2a.textContent = "Grupo A";
    grupoA.appendChild(h2a);

     //Creamos contenedores de la derecha (los grupos) donde incluiremos los platos. Grupo A
    let grupoB = document.createElement("div");
    grupoB.classList.add("grupo");
    grupoB.setAttribute("id","grupoB");
    let h2b = document.createElement("h2");
    h2b.textContent = "Grupo B";
    grupoB.appendChild(h2b);

    //Div donde iran los platos agregados a la derecha, para darle propiedad flex row
    let grupoPlatosA = document.createElement("div");
    grupoPlatosA.classList.add("grupoPlatos");

    let grupoPlatosB = document.createElement("div");
    grupoPlatosB.classList.add("grupoPlatos");

    document.querySelector(".grupos").appendChild(grupoA);
    document.querySelector(".grupos").appendChild(grupoB);



    //Iteramos sonbre el JSON y vamos agregando todos los platos.
    for(let producto of productos){
        //Creamos un div para cada plato.
        let div = document.createElement("div");
        div.classList.add("plato");
        div.setAttribute("id", `plato${producto.id}`)

        //Asignamos imagen del plato
        let img = document.createElement("img");
        img.src = `./imagenes/${producto.foto}`;
        

        //Creamos contenedor INFO donde ira toda la información del plato.
        let divInfo = document.createElement("div");
        
        //Titulo del plato
        let h2 = document.createElement("h2");
        h2.textContent = producto.denominacion;

        //Descripción del plato.
        let texto = document.createElement("p");
        texto.textContent = producto.comentario;

        //Div donde irán los 2 botones.
        let divBotones = document.createElement("div");
        divBotones.classList.add("botones");

        //Boton A
        let botonA = document.createElement("button");
        botonA.textContent="Grupo A";
        botonA.setAttribute("id", `plato${producto.id}`);

        //Boton B
        let botonB = document.createElement("button");
        botonB.textContent="Grupo B";
        botonB.setAttribute("id", `plato${producto.id}`);

        //Agregamos todos los elementos creados dinamicamente.
        div.appendChild(img);
        divInfo.appendChild(h2);
        divInfo.appendChild(texto);
        divBotones.appendChild(botonA);
        divBotones.appendChild(botonB);
        divInfo.appendChild(divBotones);
        div.appendChild(divInfo);
        carta.appendChild(div);

        //Agregamos todo el conetido generado al div principal "carta".
        document.querySelector(".carta").appendChild(div);


        //addEventListener de el boton A. Pasamos como parametros el producto y los 2 botones.
        botonA.addEventListener("click", () => agregaA(botonA, producto, botonB));

        //addEventListener de el boton B. Pasamos como parametros el producto y los 2 botones.
        botonB.addEventListener("click", () => agregaB(producto, botonB, botonA));
    }


    //Funciones que agregan producto a A o a B. Reciben como parametros el producto (SOLO EL QUE ESTAMOS ASIGNANDO), y los 2 botones.
    function agregaA(producto,botonA, botonB){
        //Creamos un div donde ira la imagen y el titulo del plato.
        let div = document.createElement("div");
        div.classList.add("mini");

        //Asignamos la imagen que estamos recibiendo del producto.
        let img = document.createElement("img");
        img.src = `./imagenes/${producto.foto}`;

        //Asignamos la denominacion del producto que estamos recibiendo
        let span = document.createElement("span");
        span.textContent = producto.denominacion;

        //Agregamos al contenedor mini.
        div.appendChild(img);
        div.appendChild(span);

        //Agregamos contenedor creado al contenedor de Platos A
        grupoPlatosA.appendChild(div);

        //Agregamos Contenedor de Platos al contenedor princpial de platos A.
        document.querySelector("#grupoA").appendChild(grupoPlatosA);

        //Deshabilitamos el botón.
        botonA.disabled = true;
        //Eliminamos el otro boton.
        botonB.remove();

        //Cambiamos estilos del botón
        botonA.style.width = "100%";
        botonA.style.backgroundColor = "black";
    }

    

    //Misma función que la anterior pero referente al Grupo B.
    //Se que esto se podria mejorar, ya que repito mucho código pero en este tiempo es lo que se me ha ocurrido para que funcione.
    function agregaB(producto, botonB, botonA){
        let div = document.createElement("div");
        div.classList.add("mini");

        let img = document.createElement("img");
        img.src = `./imagenes/${producto.foto}`;

        let span = document.createElement("span");
        span.textContent = producto.denominacion;

        div.appendChild(img);
        div.appendChild(span);

        grupoPlatosB.appendChild(div);

        document.querySelector("#grupoB").appendChild(grupoPlatosB);

        botonB.disabled = true;
        botonA.remove();

        botonB.style.width = "100%";
        botonB.style.backgroundColor = "black";
    }
}