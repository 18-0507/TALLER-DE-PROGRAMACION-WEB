# 📚 Biblioteca Digital | Proyecto Final
**Taller de Programación Web (100000I57N) | UTP - 2026-I**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla%20ES6-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Status](https://img.shields.io/badge/Status-Completado-4CAF50?style=flat)]()

> **Plataforma web integral para la gestión, exploración y préstamo de recursos bibliográficos.** 
> Desarrollada bajo estándares modernos de maquetación responsiva, diseño centrado en el usuario (UX) y lógica de negocio con JavaScript Vanilla.

---

## 📑 Índice
1. [Resumen Ejecutivo](#-resumen-ejecutivo)
2. [Matriz de Cumplimiento Académico](#-matriz-de-cumplimiento-académico-sílabo)
3. [Arquitectura y Estructura](#-arquitectura-y-estructura-del-proyecto)
4. [Módulos y Funcionalidades](#-módulos-y-funcionalidades)
5. [Detalles Técnicos de Implementación](#-detalles-técnicos-de-implementación)
6. [Guía de Ejecución](#-guía-de-ejecución)
7. [Autoría](#-autoría)

---

## 🎯 Resumen Ejecutivo
**Biblioteca Digital** es un ecosistema web estático y dinámico que simula un portal bibliotecario real. El proyecto integra más de 20 páginas interconectadas, gestionando catálogos complejos, sistemas de reservas, calculadoras de penalidades, evaluaciones interactivas (Quizzes) y paneles de configuración de usuario. Todo el frontend ha sido construido desde cero utilizando **HTML5 semántico**, **CSS3 avanzado (Grid/Flexbox/Animaciones)** y **JavaScript Vanilla** para la manipulación del DOM y estructuras de datos.

---

## 🎓 Matriz de Cumplimiento Académico (Sílabo)
*Evidencia directa de los Logros Específicos de Aprendizaje (APF) y el Proyecto Final (PROY).*

| Hito | Unidad / Semana | Requerimiento del Sílabo | Implementación en el Proyecto |
| :--- | :--- | :--- | :--- |
| **APF1** | **U1: HTML** (Sem 1-5) | Estructura semántica, formularios, tablas y multimedia. | Formularios complejos (Contacto, Reservas), Tablas de inventario, integración de `<audio>` ambiente y `<video>`/`<iframe>` promocionales. |
| **APF2** | **U2: CSS** (Sem 6-10) | Diseño Responsivo, Flexbox, Grid, Animaciones y DevTools. | Layouts con **CSS Grid** (Catálogo, Autores) y **Flexbox** (Géneros, Nav). Animaciones `@keyframes` (fade-in, slide-in). Media Queries para menú hamburguesa. |
| **APF3** | **U3: JS** (Sem 11-15) | DOM, Eventos, Estructuras de control, Arreglos, Modales. | Inyección dinámica del Header, Árbol de categorías (traversing DOM), Quizzes con arreglos de objetos, Ventanas modales (Reservas/Perfil). |
| **PROY** | **Integración** (Sem 16-18)| Integración HTML+CSS+JS, Menú responsivo, Ventanas flotantes. | Sistema de temas (Claro/Oscuro/Sepia), traducciones ES/EN, calculadora de multas con `switch/prompt`, ordenamiento de matrices (Burbuja). |

---

## 🏗️ Arquitectura y Estructura del Proyecto
El proyecto sigue una arquitectura modular para separar responsabilidades y facilitar el mantenimiento.
text
biblioteca-digital/
├── css/ # Hojas de estilo modulares
│ ├── global.css # Variables CSS (:root), Reset, Layouts base, Componentes globales
│ ├── autores.css # Estilos específicos para Grid de autores
│ ├── generos.css # Estilos específicos para Flexbox de géneros
│ └── quizz.css # Estilos para la gamificación
├── js/ # Lógica de negocio y manipulación DOM
│ ├── global.js # Inyección de Header, Menú Hamburguesa, DOM Tree Traversal
│ ├── catalogo-avanzado.js # Algoritmo de ordenamiento (Burbuja) sobre Matrices
│ ├── multas.js # Lógica de cálculo con switch y validaciones
│ ├── reserva.js # Validación de formularios y control de Modales
│ ├── configuration.js # Objeto JSON para traducciones y manipulación de temas
│ └── quizz-*.js # Motores de evaluación con arreglos de objetos
├── images/ & videos/ # Assets multimedia optimizados
├── index.html # Landing Page (Punto de entrada)
└── [modulos].html # Páginas de módulos (Catálogo, Perfil, Quizzes, etc.)

---

## 🧩 Módulos y Funcionalidades

### 1. 📖 Exploración y Catálogo Inteligente
* **Catálogo General:** Grid responsivo con tarjetas de libros, filtros laterales (checkboxes/radios) y paginación.
* **Inventario Ordenable:** Tabla dinámica que utiliza un **Algoritmo de Ordenamiento Burbuja** en JavaScript para ordenar matrices bidimensionales por Código, Título o Año.
* **Árbol de Categorías:** Navegación jerárquica (Literatura -> Clásicos -> Griegos) con expansión/colapso dinámico.
* **Perfiles de Autores y Críticos:** Fichas detalladas con biografías, logros y videos de análisis literario.

### 2. ⚙️ Servicios Administrativos (Lógica JS)
* **Calculadora de Multas:** Simulador que aplica tarifas según tipo de material (`switch`), evalúa estado del libro y aplica descuentos mediante códigos ingresados por `prompt`.
* **Reserva de Salas:** Formulario con validación de disponibilidad en tiempo real (`onchange`), selección de equipamiento y confirmación mediante **Ventanas Modales (Pop-ups)**.
* **Historial de Préstamos:** Dashboard visual con estados (Activo, Devuelto, Retrasado) y geolocalización de la sede física mediante `<iframe>` de Google Maps.

### 3. 🧠 Gamificación (Centro de Quizzes)
* **Motor de Evaluación:** Sistema de preguntas múltiples (Autores, Libros, Géneros) almacenadas en **Arreglos de Objetos**.
* **Feedback Visual:** Cambios de estilo en el DOM (verde/rojo) al responder, cálculo de puntaje en tiempo real y mensajes condicionales según el porcentaje de éxito.

### 4. 👤 Experiencia de Usuario (UX) y Accesibilidad
* **Dashboard de Perfil:** Historial de lectura, actividad reciente y edición de datos mediante Modales.
* **Centro de Configuración Avanzado:**
  * **Temas:** Claro, Oscuro, Sepia (manipulación de `document.body.style`).
  * **Accesibilidad:** Alto contraste, ajuste de tamaño de fuente.
  * **Internacionalización (i18n):** Cambio de idioma (ES/EN) inyectando textos desde un objeto JSON de traducciones.
* **Navegación Adaptativa:** Menú hamburguesa funcional para móviles con inyección dinámica del `<header>` mediante `insertAdjacentHTML`.

---

## 💻 Detalles Técnicos de Implementación (Highlights)

| Concepto Técnico | Dónde se aplica |
| :--- | :--- |
| **CSS Variables (`:root`)** | Paleta de colores global (`--primary`, `--accent`) para mantenimiento y temas dinámicos. |
| **CSS Grid & Flexbox** | Maquetación del Catálogo (Grid), Géneros (Flexbox) y Perfiles. |
| **DOM Traversal** | `global.js`: Uso de `parentNode`, `childNodes`, `nextSibling` para el árbol de categorías. |
| **Matrices (2D Arrays)** | `catalogo-avanzado.js`: Inventario de 50+ libros ordenado algorítmicamente. |
| **Métodos Nativos JS** | Uso estricto de `alert()`, `confirm()` y `prompt()` para interacción y validación de datos. |
| **Inyección Dinámica** | `global.js`: Generación del Header y Footer reutilizable en todas las páginas sin repetir código HTML. |

---

## 🚀 Guía de Ejecución
Al ser una aplicación 100% Frontend (Client-Side), no requiere compilación ni servidores backend.

1. **Clonar/Descargar:** Obtén los archivos del repositorio.
2. **Servidor Local (Recomendado):** 
   * Abre el proyecto en **VS Code**.
   * Instala la extensión **Live Server**.
   * Haz clic derecho en `index.html` y selecciona *"Open with Live Server"*.
3. **Ejecución Directa:** Alternativamente, abre `index.html` directamente en tu navegador (Chrome/Edge).
4. **Diagnóstico:** Abre la **Consola del Navegador (F12)** para ver los logs de validación, traversing del DOM y resultados de los algoritmos de ordenamiento.

---

## 👨‍💻 Autoría
* **Estudiante:** Fabio Manuel Ventura Gallegos, Lucero Kheit Gina Turpo Villalba, Javier Emilio Gutierrez Hancco
* **Código:** U24205376, U24263234, U24242406
* **Universidad:** Universidad Tecnológica del Perú
* **Carrera:** Ingeniería de Sistemas
* **Curso:** Taller de Programación Web (100000I57N)
* **Sección:** 28107
* **Ciclo:** 2026 - I / Ciclo 1 Marzo

---
*Proyecto desarrollado con fines académicos, aplicando los estándares de la industria para el desarrollo web frontend.*
