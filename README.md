# Virtual Joystick - Hand Gesture Control

Un proyecto de control de objetos mediante gestos de mano utilizando webcam en tiempo real. Captura vídeo de tu cámara web, detecta gestos con tus manos y controla objetos en pantalla de forma intuitiva.

## Características

- 🎥 **Captura en tiempo real**: Utiliza tu webcam para capturar gestos
- 🤚 **Detección de gestos**: Reconoce y procesa movimientos de mano
- 🎮 **Control intuitivo**: Mueve y rota objetos con tus gestos
- 📱 **Interfaz web**: Compatible con navegadores modernos
- ⚙️ **Configurable**: Parámetros ajustables para diferentes casos de uso

## Descripción del Proyecto

Virtual Joystick permite controlar objetos en una aplicación web usando únicamente gestos de mano capturados a través de la webcam. El sistema:

1. Captura el vídeo en tiempo real desde tu dispositivo
2. Detecta el color y posición de tu mano (o un marcador visual)
3. Calcula la inclinación y posición del objeto detectado
4. Actualiza la posición y rotación de objetos en pantalla basándose en los gestos

## Archivos Principales

- **`index.html`** - Interfaz web principal con canvas para visualización
- **`main.js`** - Lógica principal del procesamiento de gestos y control de objetos
- **`camera.js`** - Gestión de acceso a la cámara web y captura de vídeo
- **`vobject.js`** - Definición de objetos virtuales detectados
- **`utils.js`** - Funciones auxiliares y utilidades
- **`car.png`** - Imagen de ejemplo para demostración

## Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/tu-usuario/virtual-joystick.git
cd virtual-joystick
```

2. Abre `index.html` en tu navegador web (requiere HTTPS o localhost)

## Uso

1. Abre la aplicación en tu navegador
2. Permite el acceso a tu cámara web cuando se solicite
3. Colócate frente a la cámara
4. Realiza gestos con tu mano para controlar el objeto
5. El objeto se rotará siguiendo la inclinación de tu mano

## Configuración

Puedes ajustar los siguientes parámetros en `main.js`:

- `OBJECT_COLOR` - Color RGB del objeto a detectar (por defecto: azul)
- `MARKER_COLOR` - Color del marcador de referencia (por defecto: rojo)
- `DISTANCE_THRESHOLD` - Umbral de distancia para detección de píxeles
- `SENSIBILITY_ROTATE` - Sensibilidad de rotación del objeto
- `DEBUG_MARKS` - Mostrar marcadores de depuración
- `DEBUD_DEGREES` - Mostrar ángulos de inclinación

## Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Acceso a cámara web
- Conexión HTTPS (excepción: localhost)

## Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo [LICENSE](LICENSE) para más detalles.

## Autor y Créditos

**Federico Albujer Zornoza**

Copyright © 2026 Federico Albujer Zornoza. Todos los derechos reservados.

Este proyecto fue creado por Federico Albujer Zornoza como una solución innovadora para el control de objetos mediante gestos de mano capturados en tiempo real a través de webcam.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para sugerencias y mejoras.

---

**Nota**: Este proyecto requiere permisos de cámara web. Asegúrate de usar HTTPS en producción o localhost para desarrollo.