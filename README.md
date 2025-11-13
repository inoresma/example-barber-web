# Web Profesional para Peluquería

Sitio web profesional para peluquerías desarrollado con Vue.js 3 y TailwindCSS. Diseño elegante, moderno y completamente responsive.

## Características

- ✨ Diseño profesional y elegante con paleta de colores oscura y dorada
- 📱 Completamente responsive (mobile-first)
- 🎨 Animaciones y transiciones suaves
- 📅 Sistema de reservas visual e interactivo
- 🖼️ Galería con lightbox
- 👥 Sección de equipo
- 💬 Testimonios con carrusel automático
- 📞 Formulario de contacto
- 🧭 Navegación suave entre secciones

## Tecnologías Utilizadas

- Vue.js 3 (Composition API)
- Vue Router
- TailwindCSS
- Vite

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build para Producción

```bash
npm run build
```

## Estructura del Proyecto

```
src/
├── components/          # Componentes Vue
│   ├── Button.vue
│   ├── Card.vue
│   ├── SectionTitle.vue
│   ├── Modal.vue
│   ├── Navbar.vue
│   ├── Footer.vue
│   ├── HeroSection.vue
│   ├── AboutSection.vue
│   ├── ServicesSection.vue
│   ├── GallerySection.vue
│   ├── TeamSection.vue
│   ├── BookingSection.vue
│   ├── TestimonialsSection.vue
│   └── ContactSection.vue
├── views/              # Vistas
│   └── Home.vue
├── router/             # Configuración de rutas
│   └── index.js
├── assets/             # Recursos estáticos
├── App.vue             # Componente raíz
├── main.js             # Punto de entrada
└── style.css           # Estilos globales
```

## Secciones

1. **Inicio/Hero** - Sección principal con llamada a la acción
2. **Sobre Nosotros** - Historia y valores de la peluquería
3. **Servicios** - Lista de servicios con precios
4. **Galería** - Trabajos realizados con lightbox
5. **Equipo** - Información del equipo de barberos
6. **Reservas** - Formulario interactivo de reserva de citas
7. **Testimonios** - Opiniones de clientes con carrusel
8. **Contacto** - Información de contacto y formulario

## Personalización

### Colores

Los colores pueden ser personalizados en `tailwind.config.js`:

- `barber-black`: #000000
- `barber-dark`: #1a1a1a
- `barber-gray`: #2d2d2d
- `barber-light-gray`: #4a4a4a
- `barber-gold`: #d4af37
- `barber-light-gold`: #f4d03f

### Contenido

Todo el contenido está en español y puede ser modificado directamente en los componentes correspondientes.

## Notas

- El sistema de reservas es visual/interactivo y no incluye backend
- Las imágenes de la galería utilizan placeholders (emojis) - reemplazar con imágenes reales
- El mapa de contacto es un placeholder - integrar con Google Maps API para funcionalidad completa

## Licencia

Este proyecto es de código abierto y está disponible para uso personal y comercial.

