// // Productos disponibles
// const productos = [
//     { id: 1, nombre: "Producto A", precio: 50, imagen: "book-a.jpg" },
//     { id: 2, nombre: "Producto B", precio: 75, imagen: "book-b.jpg" },
//     { id: 3, nombre: "Producto C", precio: 100, imagen: "book-c.jpg" }
// ];

// let carrito = [];

// // Mostrar productos en productos.html
// function mostrarProductos() {
//     const productosDiv = document.getElementById("productos");
//     productos.forEach((producto) => {
//         const col = document.createElement("div");
//         col.className = "col-md-4 mb-4";
//         col.innerHTML = `
//             <div class="card">
//                 <img src="${producto.imagen}" class="card-img-top producto-imagen" alt="${producto.nombre}" data-id="${producto.id}">
//                 <div class="card-body text-center">
//                     <h5 class="card-title">${producto.nombre}</h5>
//                     <p class="card-text">$${producto.precio.toFixed(2)}</p>
//                 </div>
//             </div>
//         `;
//         productosDiv.appendChild(col);
//     });

//     // Añadir evento para imágenes
//     document.querySelectorAll(".producto-imagen").forEach((imagen) => {
//         imagen.addEventListener("click", (e) => {
//             const id = parseInt(e.target.dataset.id);
//             const producto = productos.find((p) => p.id === id);
//             agregarAlCarrito(producto);
//             window.location.href = "carrito.html";
//         });
//     });
// }

// // Agregar producto al carrito
// function agregarAlCarrito(producto) {
//     carrito.push(producto);
//     guardarCarrito();
// }

// // Guardar carrito en localStorage
// function guardarCarrito() {
//     localStorage.setItem("carrito", JSON.stringify(carrito));
// }

// // Cargar carrito desde localStorage
// function cargarCarrito() {
//     const carritoGuardado = localStorage.getItem("carrito");
//     carrito = carritoGuardado ? JSON.parse(carritoGuardado) : [];
// }

// // Mostrar carrito en carrito.html
// function mostrarCarrito() {
//     const carritoDiv = document.getElementById("carrito");
//     const totalP = document.getElementById("total");
//     carritoDiv.innerHTML = ""; // Limpiar carrito
//     let total = 0;

//     carrito.forEach((producto, index) => {
//         const item = document.createElement("div");
//         item.className = "list-group-item d-flex justify-content-between align-items-center";
//         item.innerHTML = `
//             ${producto.nombre} - $${producto.precio.toFixed(2)}
//             <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})">Eliminar</button>
//         `;
//         carritoDiv.appendChild(item);
//         total += producto.precio;
//     });

//     totalP.textContent = `Total: $${total.toFixed(2)}`;
// }

// // Eliminar producto del carrito
// function eliminarProducto(index) {
//     carrito.splice(index, 1);
//     guardarCarrito();
//     mostrarCarrito();
// }

// // Finalizar compra
// function finalizarCompra() {
//     if (carrito.length === 0) {
//         alert("El carrito está vacío.");
//         return;
//     }
//     alert("¡Gracias por tu compra!");
//     carrito = [];
//     guardarCarrito();
//     mostrarCarrito();
// }

// // Inicialización
// if (window.location.pathname.includes("productos.html")) {
//     mostrarProductos();
// } else if (window.location.pathname.includes("carrito.html")) {
//     cargarCarrito();
//     mostrarCarrito();
// }



// Productos disponibles
const productos = [
    { id: 1, nombre: "Producto A", precio: 50, imagen: "book-a.jpg", descripcion: "Un libro fascinante sobre desarrollo personal." },
    { id: 2, nombre: "Producto B", precio: 75, imagen: "book-b.jpg", descripcion: "Una guía completa para aprender JavaScript." },
    { id: 3, nombre: "Producto C", precio: 100, imagen: "book-c.jpg", descripcion: "El mejor libro de diseño web para principiantes." },
    { id: 4, nombre: "Producto D", precio: 100, imagen: "book-d.jpg", descripcion: "El mejor libro de diseño web para principiantes." },
    { id: 5, nombre: "Producto E", precio: 100, imagen: "book-e.jpg", descripcion: "El mejor libro de diseño web para principiantes." },
    { id: 6, nombre: "Producto F", precio: 100, imagen: "book-f.jpg", descripcion: "El mejor libro de diseño web para principiantes." },
    { id: 7, nombre: "Producto G", precio: 100, imagen: "book-g.jpg", descripcion: "El mejor libro de diseño web para principiantes." }
];

let carrito = [];

// Mostrar productos en productos.html
function mostrarProductos() {
    const productosDiv = document.getElementById("productos");
    productos.forEach((producto) => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";
        col.innerHTML = `
            <div class="card">
                <img src="${producto.imagen}" class="card-img-top producto-imagen" alt="${producto.nombre}" data-id="${producto.id}">
                <div class="card-body text-center">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">$${producto.precio.toFixed(2)}</p>
                    <button class="btn btn-info btn-sm descripcion-btn" data-id="${producto.id}">Descripción</button>
                    <p class="descripcion-texto text-muted mt-2" id="descripcion-${producto.id}" style="display: none;">
                        ${producto.descripcion}
                    </p>
                </div>
            </div>
        `;
        productosDiv.appendChild(col);
    });

    // Añadir eventos para imágenes
    document.querySelectorAll(".producto-imagen").forEach((imagen) => {
        imagen.addEventListener("click", (e) => {
            const id = parseInt(e.target.dataset.id);
            const producto = productos.find((p) => p.id === id);
            agregarAlCarrito(producto);
            window.location.href = "carrito.html";
        });
    });

    // Añadir eventos para los botones de descripción
    document.querySelectorAll(".descripcion-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const id = e.target.dataset.id;
            const descripcion = document.getElementById(`descripcion-${id}`);
            if (descripcion.style.display === "none") {
                descripcion.style.display = "block";
            } else {
                descripcion.style.display = "none";
            }
        });
    });
}

// Agregar producto al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    guardarCarrito();
}

// Guardar carrito en localStorage
function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Cargar carrito desde localStorage
function cargarCarrito() {
    const carritoGuardado = localStorage.getItem("carrito");
    carrito = carritoGuardado ? JSON.parse(carritoGuardado) : [];
}

// Mostrar carrito en carrito.html
function mostrarCarrito() {
    const carritoDiv = document.getElementById("carrito");
    const totalP = document.getElementById("total");
    carritoDiv.innerHTML = ""; // Limpiar carrito
    let total = 0;

    carrito.forEach((producto, index) => {
        const item = document.createElement("div");
        item.className = "list-group-item d-flex justify-content-between align-items-center";
        item.innerHTML = `
            ${producto.nombre} - $${producto.precio.toFixed(2)}
            <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})">Eliminar</button>
        `;
        carritoDiv.appendChild(item);
        total += producto.precio;
    });

    totalP.textContent = `Total: $${total.toFixed(2)}`;
}

// Eliminar producto del carrito
function eliminarProducto(index) {
    carrito.splice(index, 1);
    guardarCarrito();
    mostrarCarrito();
}

// Finalizar compra
function finalizarCompra() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }
    alert("¡Gracias por tu compra!");
    carrito = [];
    guardarCarrito();
    mostrarCarrito();
}

// Inicialización
if (window.location.pathname.includes("productos.html")) {
    mostrarProductos();
} else if (window.location.pathname.includes("carrito.html")) {
    cargarCarrito();
    mostrarCarrito();
}





// Integración con una API
async function obtenerProductosDesdeAPI() {
    try {
        const respuesta = await fetch('https://openlibrary.org/search.json?q=litarature'); // API de ejemplo
        const datos = await respuesta.json();
        datos.forEach((productoAPI) => {
            const producto = {
                id: productos.length + 1,
                nombre: productoAPI.title,
                precio: productoAPI.price,
                imagen: productoAPI.image,
                descripcion: productoAPI.description,
            };
            productos.push(producto);
        });
        mostrarProductos();
    } catch (error) {
        console.error("Error al obtener productos desde la API:", error);
    }
}

// Llamar a la función para cargar productos desde la API
if (window.location.pathname.includes("productos.html")) {
    obtenerProductosDesdeAPI();
}
