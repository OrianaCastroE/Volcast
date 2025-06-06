function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('.contenido-seccion');
  const links = document.querySelectorAll('.nav-link');

  secciones.forEach(seccion => seccion.classList.add('d-none'));
  const target = document.getElementById(id);
  if (target) target.classList.remove('d-none');

  // Si estás entrando a la sección contacto, también mostramos cta-contacto
  if (id === 'contacto') {
    const cta = document.getElementById('cta-contacto');
    if (cta) cta.classList.remove('d-none');
  }

  links.forEach(link => link.classList.remove('active'));
  const activeLink = Array.from(links).find(link => link.getAttribute('onclick')?.includes(id));
  if (activeLink) activeLink.classList.add('active');
}

// Mostrar sección por defecto
mostrarSeccion('inicio');

function toggleDetalles(tipo) {
  const detalles = {
    pequena: {
      titulo: "Volqueta Pequeña",
      descripcion: "Ideal para... medidas:"
    },
    mediana: {
      titulo: "Volqueta Mediana",
      descripcion: "Ideal para... medidas:"
    },
    grande: {
      titulo: "Volqueta Grande",
      descripcion: "Ideal para... medidas:"
    }
  };

  const contenedor = document.getElementById("detalles-volqueta");
  const actual = document.getElementById("titulo-detalle").innerText;

  // Si ya está mostrando ese detalle, lo oculta
  if (contenedor.style.display === "block" && actual === detalles[tipo].titulo) {
    contenedor.style.display = "none";
  } else {
    document.getElementById("titulo-detalle").innerText = detalles[tipo].titulo;
    document.getElementById("descripcion-detalle").innerText = detalles[tipo].descripcion;
    contenedor.style.display = "block";
  }
}

function ocultarDetalles() {
  document.getElementById("detalles-volqueta").style.display = "none";
}