# 📚 Biblioteca Digital 
**Proyecto Final - Taller de Programación Web**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📖 Descripción del Proyecto
**Biblioteca Digital** es una plataforma web interactiva, responsiva y dinámica diseñada para la gestión, exploración y préstamo de recursos bibliográficos. El proyecto integra múltiples módulos que permiten a los usuarios explorar el catálogo, interactuar con el sistema de préstamos, calcular multas, reservar salas de estudio y evaluar sus conocimientos literarios mediante quizzes.

Desarrollado como proyecto integrador para el curso de **Taller de Programación Web**, aplicando estándares modernos de maquetado, diseño responsivo y lógica de negocio con JavaScript Vanilla.

---

## ✨ Funcionalidades Principales

### 🌐 Exploración y Catálogo
* **Catálogo Inteligente:** Filtros por categoría, disponibilidad y año. Incluye una tabla de inventario ordenable dinámicamente (Algoritmo de Ordenamiento Burbuja).
* **Autores y Géneros:** Grillas animadas con perfiles detallados de autores (ej. Ricardo Palma) y categorías literarias.
* **Detalle de Libros:** Fichas técnicas con sinopsis, reseñas de usuarios, videos de análisis y recomendaciones de críticos literarios.

### ⚙️ Servicios Interactivos
* **Calculadora de Multas:** Simulador que calcula deudas basado en el tipo de material, días de retraso, estado del libro y aplicación de códigos de descuento.
* **Reserva de Salas:** Formulario con validación de disponibilidad, selección de equipamiento y confirmación mediante ventanas modales (Pop-ups).
* **Historial de Préstamos:** Visualización del estado de los libros (Activo, Devuelto, Retrasado) e información de la sede física.

### 🧠 Gamificación y Comunidad
* **Centro de Quizzes:** Evaluaciones interactivas sobre Autores, Libros y Géneros Literarios con cálculo de puntaje y feedback visual.
* **Blog y Novedades:** Sección de artículos literarios y tendencias.

### 👤 Experiencia de Usuario (UX)
* **Perfil y Configuración:** Panel de usuario con edición de datos (Modales), historial de lectura y actividad reciente.
* **Personalización:** Cambios de tema (Claro/Oscuro/Sepia), idioma (ES/EN), tamaño de fuente y alto contraste mediante JavaScript.
* **Menú Responsivo:** Navegación adaptable con menú hamburguesa para dispositivos móviles.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica, formularios complejos, etiquetas multimedia (`audio`, `video`, `iframe`).
* **CSS3:** 
  * Variables CSS (`:root`).
  * Maquetación con **Flexbox** y **CSS Grid**.
  * Animaciones y transiciones (`@keyframes`, `hover`, `fade-in`).
  * Diseño 100% Responsivo (`@media queries`).
* **JavaScript (Vanilla):**
  * Manipulación y traversing del DOM (`parentNode`, `childNodes`, `nextSibling`).
  * Estructuras de control (`if/else`, `switch`) y bucles (`for`, `while`).
  * Manejo de Arreglos Bidimensionales (Matrices) para el inventario.
  * Eventos del navegador (`onclick`, `onchange`, `DOMContentLoaded`).
  * Interacción con el usuario (`alert`, `confirm`, `prompt`).

---

## 📂 Estructura del Proyecto

```text
biblioteca-digital/
│
├── css/                # Hojas de estilo (global.css, estilos de páginas específicas)
├── js/                 # Lógica de negocio, quizzes, configuración y DOM
├── images/             # Portadas de libros, fotos de autores, íconos y logos
├── videos/             # Videos promocionales y análisis de libros
├── audio/              # Archivos de sonido ambiente
│
├── index.html          # Página de inicio
├── catalogo.html       # Catálogo general y filtros
├── autores.html        # Grid de autores
├── generos.html        # Categorías literarias
├── calculadora-multas.html # Simulador de penalidades
├── reservas-salas.html # Sistema de reserva de espacios
├── Quizz-Menu.html     # Hub de evaluaciones
├── perfil-usuario.html # Dashboard del usuario
├── contacto.html       # Formulario de contacto y mapa
└── README.md           # Documentación del proyecto
