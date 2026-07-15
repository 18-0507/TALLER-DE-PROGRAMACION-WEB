
// CLASE LIBRO 
class Libro {
    constructor(codigo, titulo, anio) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.anio = anio;
    }

    // Método para convertir a arreglo (compatibilidad con tabla)
    toArray() {
        return [this.codigo, this.titulo, this.anio];
    }
}

// ARREGLO DE LIBROS POR DEFECTO (instancias)

let inventario = [
    new Libro("978-0451524935", "1984", 1949),
    new Libro("978-0307474728", "Cien años de soledad", 1967),
    new Libro("978-8497592858", "El origen de las especies", 1859),
    new Libro("978-1285740621", "Calculus", 2015),
    new Libro("978-8424116019", "Don Quijote de la Mancha", 1605),
    new Libro("978-8437604947", "Pedro Páramo", 1955),
    new Libro("978-8420412146", "La ciudad y los perros", 1963),
    new Libro("978-8437600864", "Rayuela", 1963),
    new Libro("978-0062316097", "Sapiens", 2011),
    new Libro("978-0140449136", "Crimen y castigo", 1866)
];

// =========================================
// CONTROL DE ORDENAMIENTO
// =========================================
let ordenActual = {
    columna: 'anio',
    ascendente: true
};

// =========================================
// FUNCIONES DE ORDENAMIENTO (Burbuja con WHILE)
// =========================================
function ordenarPor(columna) {
    if (ordenActual.columna === columna) {
        ordenActual.ascendente = !ordenActual.ascendente;
    } else {
        ordenActual.columna = columna;
        ordenActual.ascendente = true;
    }
    aplicarOrdenamientoBurbuja();
    actualizarIndicadores();
}

function invertirOrden() {
    ordenActual.ascendente = !ordenActual.ascendente;
    aplicarOrdenamientoBurbuja();
    actualizarIndicadores();
}

function aplicarOrdenamientoBurbuja() {
    let n = inventario.length;
    let swapped;
    let i = 0;

    let indiceComparacion;
    switch (ordenActual.columna) {
        case 'codigo': indiceComparacion = 'codigo'; break;
        case 'titulo': indiceComparacion = 'titulo'; break;
        case 'anio':   indiceComparacion = 'anio';   break;
    }

    while (i < n - 1) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            let valor1 = inventario[j][indiceComparacion];
            let valor2 = inventario[j + 1][indiceComparacion];
            let debeIntercambiar = false;

            if (typeof valor1 === 'string') {
                debeIntercambiar = ordenActual.ascendente
                    ? valor1 > valor2
                    : valor1 < valor2;
            } else {
                debeIntercambiar = ordenActual.ascendente
                    ? valor1 > valor2
                    : valor1 < valor2;
            }

            if (debeIntercambiar) {
                let temp = inventario[j];
                inventario[j] = inventario[j + 1];
                inventario[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
        i++;
    }
    renderizarTabla();
    console.log(`Ordenado por ${ordenActual.columna} (${ordenActual.ascendente ? 'ASC' : 'DESC'})`);
}

function actualizarIndicadores() {
    document.getElementById('ind-codigo').textContent = '';
    document.getElementById('ind-titulo').textContent = '';
    document.getElementById('ind-anio').textContent = '';
    let indicador = ordenActual.ascendente ? '▲' : '▼';
    document.getElementById(`ind-${ordenActual.columna}`).textContent = indicador;
}

// =========================================
// RENDERIZAR TABLA (con botón eliminar)
// =========================================
function renderizarTabla() {
    const tbody = document.querySelector('#tabla-inventario tbody');
    if (!tbody) return;
    tbody.innerHTML = "";

    inventario.forEach((libro, index) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${libro.codigo}</td>
            <td>${libro.titulo}</td>
            <td>${libro.anio}</td>
            <td><button class="btn-eliminar" onclick="eliminarLibro(${index})"> Eliminar</button></td>
        `;
        tbody.appendChild(tr);
    });
}

// =========================================
// INSERTAR LIBRO (desde formulario)
// =========================================
function agregarLibro() {
    const codigo = document.getElementById('nuevoCodigo').value.trim();
    const titulo = document.getElementById('nuevoTitulo').value.trim();
    const anio   = parseInt(document.getElementById('nuevoAnio').value);

    if (!codigo || !titulo || isNaN(anio)) {
        alert("⚠️ Complete todos los campos correctamente.");
        return;
    }

    // Validar código duplicado
    const existe = inventario.some(l => l.codigo === codigo);
    if (existe) {
        alert("⚠️ Ya existe un libro con ese código.");
        return;
    }

    // Crear instancia de la clase Libro e insertar
    const nuevoLibro = new Libro(codigo, titulo, anio);
    inventario.push(nuevoLibro);

    // Limpiar formulario y actualizar
    document.getElementById('nuevoCodigo').value = '';
    document.getElementById('nuevoTitulo').value = '';
    document.getElementById('nuevoAnio').value = '';

    aplicarOrdenamientoBurbuja(); // Re-ordena y renderiza
    console.log(`✅ Libro agregado: ${nuevoLibro.titulo}`);
}

// =========================================
// ELIMINAR LIBRO
// =========================================
function eliminarLibro(index) {
    const libro = inventario[index];
    if (confirm(`¿Eliminar "${libro.titulo}"?`)) {
        inventario.splice(index, 1);
        renderizarTabla();
        console.log(`🗑️ Libro eliminado: ${libro.titulo}`);
    }
}

// =========================================
// BUSCAR LIBRO
// =========================================
function buscarLibro() {
    const texto = document.getElementById('buscarInput').value.toLowerCase().trim();
    const tbody = document.querySelector('#tabla-inventario tbody');
    tbody.innerHTML = "";

    const resultados = inventario.filter(libro =>
        libro.codigo.toLowerCase().includes(texto) ||
        libro.titulo.toLowerCase().includes(texto) ||
        libro.anio.toString().includes(texto)
    );

    if (resultados.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;">Sin resultados</td></tr>`;
        return;
    }

    resultados.forEach((libro, indexOriginal) => {
        const realIndex = inventario.indexOf(libro);
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${libro.codigo}</td>
            <td>${libro.titulo}</td>
            <td>${libro.anio}</td>
            <td><button class="btn-eliminar" onclick="eliminarLibro(${realIndex})"> Eliminar</button></td>
        `;
        tbody.appendChild(tr);
    });
}

// INICIALIZAR
document.addEventListener('DOMContentLoaded', () => {
    aplicarOrdenamientoBurbuja();
    actualizarIndicadores();
});
