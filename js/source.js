const mostrarPopUp = document.querySelectorAll("button.receta-boton");
const popUp = document.querySelector("section.popup");
const cerrarPopUp = document.querySelector("button.btn-cerrar-receta")
const contenedorImg = document.querySelectorAll("img.popup-imagen");
const imagenes = document.querySelectorAll("img.receta-imagen");
const parrafos = document.querySelectorAll("p.parrafo-receta");
let createImg= document.createElement("img");
const r1 = "En una licuadora tritura la leche de nueces, el aguacate, el plátano y las espinacas -reserva alguna hoja para decorar- hasta   obtener una crema homogénea.Sirve en boles y añade por encima el kiwi, las fresas, la avena y las nueces.Añade las hojas de espinaca reservadas para decorar";
const r2 = "Mezcle el jugo de limón verde, el aceite, la cebolla, el vinagre, la miel y la sal en un tazón mediano. Pique los kiwis, el plátano y la manzana en cubitos. Agregue la fruta y la menta (si la utiliza) al aderezo. Revuelva para cubrir uniformemente. Refrigere las sobras dentro de las siguientes 2 horas";
const r3 = "Ponemos una sartén a fuego alto, con 4 cucharadas de margarina y vamos añadiendo poco a poco las verduras en función del tiempo de cocción que necesite cada una. Por ejemplo, la cebolla y los pimientos tardan más en hacerse que los champiñones. Removemos con frecuencia las verduras para asegurarnos de que se cocinen de manera uniforme y evitamos que se quemen. Según se vayan dorando esto nos indicará que la verdura ya está hecha";
const r4 = "Mezcla de pimientos rojos, amarillos y verdes cortados en tiras y asados. En sartén. Saltear sin descongelar con un poco de aceite y sal al gusto durante 5 - 7 minutos.";
const r5 = "Primero pica la cebolla roja en juliana muy fina y ponla en agua fría para que pierda fuerza mientras haces el resto de elaboraciones. En una sartén (si es grande te sirve la misma en la que has tostado el arroz) pon el caldo de pollo y deja que se caliente. Añade entonces la carne picada y cocinalá lentamente.En un bol grande mezcla la cebolla roja (que ya habrá perdido potencia), las cebolletas cortadas en aros finos, el chile picado, y dos buenos puñados de cilantro y menta picados. Incorpora la carne y los copos de chile.";
const r6 = " Precalienta el horno a 200ºC ó 400ºF.Lava, pela y trocea las remolachas.Échalas en un bol junto con el resto de ingredientes y remueve hasta que estén bien integrados.Pon las remolachas en una bandeja para horno (con papel de hornear o no) y hornea durante unos 30-40 minutos o hasta que estén tiernas y doradas (en mi horno estuvieron listas en unos 40 minutos).Sirve inmediatamente o guarda las sobras en un recipiente hermético en la nevera durante 5-7 días.";
const recetas = [ ];
recetas.push(r1,r2,r3,r4,r5,r6);
    for (let index = 0; index < recetas.length; index++) {
        mostrarPopUp.forEach((boton,i) => { 
            boton.addEventListener("click", (evento) => {
                evento.preventDefault;
                popUp.classList.add("popup-show");
                    parrafos.forEach(parrafo  => {
                        recetas.forEach((receta, j)=> {
                            contenedorImg.forEach((img)=>{     
                                imagenes.forEach((imagen, k )=> {
                                    if(i == j && i == k && j == k) {
                                        parrafo.innerHTML = recetas[j];
                                        var imagenUrl =imagenes[k].src;
                                        createImg.classList.add("popup-imagen");
                                        createImg.setAttribute("src" , imagenUrl );
                                        createImg.setAttribute("alt" , "comida-sana" );
                                        createImg.classList.add("popup-imagen-show")     
                                        img.replaceWith(createImg);
                                    } 
                                });  
                            })      
                        });
                    });
                    
                })    
            });
    break;
    }
cerrarPopUp.addEventListener("click",(evento)=>{
    evento.defaultPrevented;
    popUp.classList.remove("popup-show");
    createImg.classList.remove("popup-imagen-show")
});