
Rol y Objetivo:
Actúa como un Senior Frontend Developer y Arquitecto de Software. Tu objetivo es desarrollar una Landing Page robusta, escalable y moderna para una empresa de servicios de albañilería.

Paso 1: Definición de Arquitectura (Obligatorio antes de codificar)

Lee el archivo STACK.MD para identificar las tecnologías, el framework y las herramientas a utilizar.

Crea una carpeta llamada docs (o skills si tu sistema lo requiere) y genera un archivo architecture.md. En este archivo debes redactar:

Estructura de carpetas propuesta.

Patrones de diseño a implementar (ej. Atomic Design, separación de lógica y UI).

Estándares de componentes (reutilización, tipado, manejo de estado).

Esta documentación servirá como regla base estricta para cualquier cambio futuro que se te solicite.

Paso 2: Diseño y UI/UX

Paleta de Colores: Utiliza un esquema de alto contraste basado en Negro y Amarillo (colores industriales/construcción). Agrega un tercer color complementario (como un gris neutro claro o blanco humo) para fondos de secciones y legibilidad, manteniendo el equilibrio visual.

Tipografía: Selecciona una fuente sin serifa, altamente legible para todas las edades (ej. Inter, Roboto o sans-serif nativa).

Layout y Componentes Base:

Crea un componente Navbar que sea fixed en la parte superior.

Modulariza el Header y el Footer para que sean componentes independientes y reutilizables en cualquier futura página.

Toda la landing page debe ser un ensamble de componentes modulares.

Paso 3: Secciones de la Landing Page (Single Page Application layout)
Desarrolla las siguientes secciones en orden:

Hero Section: Una sola imagen de fondo representativa y de alta calidad (con un overlay oscuro para que el texto resalte), un título de impacto (H1) ofreciendo los servicios, y un botón de Call to Action principal.

Quiénes Somos (About Us): Sección breve que genere confianza y credibilidad sobre la experiencia de la empresa.

Servicios (Services): Un grid de tarjetas (cards) mostrando los servicios. Incluye:

Fundición de pisos y patios.

Construcción e instalación de pérgolas.

Trabajos de impermeabilización.

Reparaciones en exteriores.

Agrega 2 servicios adicionales de relleno (ej. Levantamiento de muros, Acabados) que luego podré eliminar o modificar.

Proyectos (Gallery/Projects): Una sección visual para mostrar el portafolio de trabajos terminados.

Contáctanos (Contact):

Un formulario funcional que recoja: Nombre, Correo, Teléfono, y un <select></select> (Dropdown) donde el cliente elija el tipo de trabajo (Fundición, Pérgolas, Impermeabilización, etc.).

El formulario debe estar preparado para enviar los datos directamente al correo electrónico (deja el cascarón de la función listo para conectar un servicio como EmailJS o el endpoint del backend).

Paso 4: Integraciones Especiales

Botón Flotante de WhatsApp: Implementa un componente de botón flotante (burbuja de chat) fijo en la esquina inferior derecha. Debe redirigir directamente al enlace [https://wa.me/50235207760](https://wa.me/50235207760) (incluyendo el código de país de Guatemala +502) con un mensaje predeterminado de saludo.

Instrucciones de entrega:
No omitas ningún paso. Comienza confirmando que has leído el STACK.MD, procede a generar la documentación de arquitectura y luego genera el código de los componentes paso a paso asegurando las mejores prácticas.
