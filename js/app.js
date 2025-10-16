let btnAgregar = document.querySelector(".btnAgregar");
let Tareanueva = document.querySelector(".nuevaTarea");
let ListaTareas = document.querySelector(".ListaTareas");


btnAgregar.addEventListener("click", function() {
    let nuevaTarea = Tareanueva.value;
    if(nuevaTarea !== "") {
        let li = document.createElement("li");
        li.textContent = nuevaTarea;
        ListaTareas.appendChild(li);
        Tareanueva.value = "";
        guardarTareas();
    }
});

function cargarTareas() {
    let tareas = localStorage.getItem("tareas");
    if(tareas) {
        ListaTareas.innerHTML = tareas;
    }
}

function guardarTareas() {
    localStorage.setItem("tareas", ListaTareas.innerHTML);
}

function eliminarTarea(event) {
    if(event.target.tagName === "LI") {
        event.target.classList.toggle("completada");
        guardarTareas();
    }
}

ListaTareas.addEventListener("click", eliminarTarea);
document.addEventListener("DOMContentLoaded", cargarTareas);