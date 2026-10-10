# 📘 LABORATORIO N° 8: DESPLIEGUE DE APLICACIONES CON JWT

> **Asignatura:** Desarrollo de Aplicaciones Web Avanzado  
> **Institución:** Tecsup - Departamento de Tecnología Digital  
> **Tema:** Despliegue de Aplicaciones Node.js a Producción (Render & Git)

---

## 🚀 Parte 1: Código Creado en esta carpeta (`despliegue01`)

Esta carpeta ya contiene todos los archivos requeridos según las **páginas 2 a 6 del laboratorio**:

1. **`index.js`** $\rightarrow$ Servidor HTTP con `dotenv`.
2. **`package.json`** $\rightarrow$ Dependencias (`dotenv`, `nodemon`) y scripts (`start`, `dev`).
3. **`.env`** $\rightarrow$ Configuración de puerto `PORT=4000`.
4. **`.gitignore`** $\rightarrow$ Filtro para ignorar `node_modules` y `.env`.

---

## 🛠️ Comandos para Subir a GitHub (Páginas 6–8)

Abre la terminal en esta carpeta (`despliegue01`) y ejecuta:

```bash
# 1. Inicializar Git
git init

# 2. Configurar tu nombre y correo
git config --global user.name "Tu Nombre"
git config --global user.email "tu_correo@tecsup.edu.pe"

# 3. Guardar archivos
git add .
git commit -m "Primer commit: Servidor backend basico"

# 4. Conectar con tu repositorio en GitHub y subir
git branch -M main
git remote add github https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u github main
```

---

## 🌐 Despliegue en Render (Páginas 9–14)

1. Entra a **[Render Dashboard](https://dashboard.render.com/)**.
2. Haz clic en **New +** $\rightarrow$ **Web Service** y conecta tu GitHub.
3. Elige tu repositorio `desplegando-js`.
4. Configura:
   - **Build Command:** `npm install`
   - **Start Command:** `node index.js`
   - **Instance Type:** `Free`
5. Presiona **Deploy Web Service** y copia la URL pública que te genere Render.

---

## 🎬 Guión para la Grabación del Video (Máximo 4 Minutos - Página 16)

Graba tu pantalla (usando OBS, Loom o PowerPoint) y lee/explica lo siguiente:

* **0:00 - 0:45 (Presentación):**  
  *"Hola, soy [Tu Nombre]. Hoy presentaré el Laboratorio 8: Despliegue de aplicaciones Node.js en la nube con Git, GitHub y Render."*
* **0:45 - 2:00 (Explicación del Código):**  
  *"En VS Code mostramos `index.js` donde levantamos el servidor HTTP usando la variable de entorno `PORT`. En `package.json` definimos los scripts `start` y `dev`, y en `.gitignore` protegemos nuestras credenciales y `node_modules`."*
* **2:00 - 3:15 (Demostración de Git y Render):**  
  *"Subimos el código a GitHub y creamos el Web Service en Render. Configuramos el Build Command `npm install` y Start Command `node index.js`. En los logs vemos que se despliega correctamente."*
* **3:15 - 4:00 (Demostración en Vivo):**  
  *"Abrimos la URL en el navegador y vemos que la aplicación responde 'Bienvenidos al curso'. ¡Gracias por su atención!"*

---

## 📝 Textos para Copiar y Pegar en el Informe (Página 17)

### 📌 OBSERVACIONES
• **Inclusión obligatoria del archivo `.gitignore`:** Durante el proceso de control de versiones con Git, se observó que incluir la carpeta `node_modules` y el archivo `.env` en el repositorio remoto incrementa innecesariamente el peso del código y expone variables sensibles. Por ello, se verificó que `.gitignore` estuviera correctamente configurado antes de realizar el primer `git push`.  
• **Asignación dinámica de puertos en el entorno Cloud:** Se observó que servicios de hosting como Render asignan automáticamente la variable de entorno `process.env.PORT` durante el despliegue. Fue necesario definir la escucha del puerto como `process.env.PORT || 4000` para evitar fallos de enlace (*port binding error*) en producción.  
• **Diferenciación de comandos Build y Start:** Se notó que Render requiere especificar de forma clara el comando de construcción (`npm install`) separado del comando de inicio (`node index.js`) para gestionar adecuadamente las dependencias en la nube.  
• **Comportamiento del Plan Gratuito en Render:** Se observó que en el plan gratuito de Render, el servicio entra en modo reposo (*spin down*) tras 15 minutos de inactividad, tardando aproximadamente 50 segundos en reanudar la respuesta ante la primera petición entrante.  
• **Comprobación de registros en tiempo real (*Live Logs*):** El uso de los logs de la consola de Render facilitó la detección inmediata de errores durante la fase de *building* y *deploying*, permitiendo validar la ejecución del código `index.js`.

---

### 💡 CONCLUSIONES
• **Eficiencia en la Integración Continua (CI/CD):** Se concluye que enlazar un repositorio de GitHub con una plataforma PaaS como Render simplifica y automatiza el despliegue continuo. Cualquier actualización enviada mediante `git push` a la rama principal desencadena una reconstrucción automática del servicio en producción.  
• **Seguridad y Gestión de Credenciales:** La utilización de la librería `dotenv` para la lectura de variables de entorno garantiza el principio de separación de configuración y código de la arquitectura de 12 factores (*Twelve-Factor App*), previniendo la filtración de credenciales sensibles.  
• **Portabilidad y Despliegue Ligero:** Se comprobó que al no incluir las dependencias (`node_modules`) en el repositorio remoto, el código se vuelve portátil y ligero. La plataforma en la nube reconstruye el entorno exacto basándose únicamente en la definición del archivo `package.json`.  
• **Validación del Ciclo de Vida del Desarrollo Web:** A través de este laboratorio se logró cubrir de manera exitosa todo el flujo de trabajo moderno de software: desarrollo local, control de versiones distribuido con Git/GitHub y publicación en la nube accesible desde cualquier navegador web.  
• **Opinión Crítica de lo Realizado:** El procedimiento ejecutado aporta una experiencia práctica esencial para entender cómo los backends de aplicaciones reales pasan de entornos locales a producción. Dominar este proceso es fundamental para integrar soluciones completas compuestas por Frontend, Backend y bases de datos alojadas en la nube.
