require('dotenv').config()
const http = require('http')

const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Julio Flores - Portafolio & CV Profesional</title>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-primary: #0f172a;
            --bg-card: rgba(30, 41, 59, 0.7);
            --accent-blue: #38bdf8;
            --accent-purple: #818cf8;
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --border-glow: rgba(56, 189, 248, 0.2);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Plus Jakarta Sans', sans-serif;
        }

        body {
            background-color: var(--bg-primary);
            color: var(--text-main);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2rem 1rem;
            background-image: 
                radial-gradient(at 0% 0%, rgba(56, 189, 248, 0.12) 0px, transparent 50%),
                radial-gradient(at 100% 100%, rgba(129, 140, 248, 0.12) 0px, transparent 50%);
        }

        .container {
            max-width: 900px;
            width: 100%;
        }

        header {
            text-align: center;
            padding: 3rem 1.5rem;
            background: var(--bg-card);
            backdrop-filter: blur(12px);
            border: 1px solid var(--border-glow);
            border-radius: 24px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            margin-bottom: 2rem;
        }

        .avatar {
            width: 110px;
            height: 110px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.8rem;
            margin: 0 auto 1.5rem;
            box-shadow: 0 0 25px rgba(56, 189, 248, 0.4);
        }

        h1 {
            font-size: 2.5rem;
            font-weight: 800;
            background: linear-gradient(to right, #38bdf8, #818cf8, #c084fc);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 0.5rem;
        }

        .subtitle {
            color: var(--text-muted);
            font-size: 1.1rem;
            font-weight: 400;
            margin-bottom: 1.5rem;
        }

        .badge-status {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(16, 185, 129, 0.1);
            color: #34d399;
            border: 1px solid rgba(52, 211, 153, 0.3);
            padding: 0.4rem 1rem;
            border-radius: 9999px;
            font-size: 0.875rem;
            font-weight: 600;
        }

        .dot {
            width: 8px;
            height: 8px;
            background-color: #34d399;
            border-radius: 50%;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(1.2); }
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .card {
            background: var(--bg-card);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 20px;
            padding: 1.8rem;
            transition: all 0.3s ease;
        }

        .card:hover {
            transform: translateY(-5px);
            border-color: var(--accent-blue);
            box-shadow: 0 10px 30px rgba(56, 189, 248, 0.15);
        }

        .card h2 {
            font-size: 1.3rem;
            color: var(--accent-blue);
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 0.6rem;
        }

        .skill-tag {
            background: rgba(56, 189, 248, 0.1);
            color: #7dd3fc;
            border: 1px solid rgba(56, 189, 248, 0.2);
            padding: 0.4rem 0.8rem;
            border-radius: 10px;
            font-size: 0.85rem;
            font-weight: 600;
        }

        .project-item {
            margin-bottom: 1rem;
        }

        .project-item h3 {
            font-size: 1.05rem;
            color: #f1f5f9;
        }

        .project-item p {
            font-size: 0.9rem;
            color: var(--text-muted);
            margin-top: 0.2rem;
        }

        footer {
            text-align: center;
            padding: 2rem;
            color: var(--text-muted);
            font-size: 0.9rem;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .btn {
            display: inline-block;
            background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
            color: white;
            padding: 0.8rem 1.8rem;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 600;
            margin-top: 1rem;
            box-shadow: 0 4px 15px rgba(56, 189, 248, 0.3);
            transition: opacity 0.2s ease;
        }

        .btn:hover {
            opacity: 0.9;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <div class="avatar">👨‍💻</div>
            <h1>Julio Alfredo Flores</h1>
            <p class="subtitle">Desarrollador de Software & Aplicaciones Web | Tecsup</p>
            <div class="badge-status">
                <span class="dot"></span>
                <span>Servidor Backend & Frontend Desplegado en Render</span>
            </div>
        </header>

        <div class="grid">
            <div class="card">
                <h2>🚀 Proyectos Destacados</h2>
                <div class="project-item">
                    <h3>📱 Urbsend App (Ciudades)</h3>
                    <p>Plataforma web interactiva para gestión y monitoreo urbano inteligente.</p>
                </div>
                <div class="project-item">
                    <h3>🔐 Backend Autenticación JWT</h3>
                    <p>API REST segura en Node.js con tokens JWT y despliegue continuo en Render.</p>
                </div>
            </div>

            <div class="card">
                <h2>🛠️ Habilidades Técnicas</h2>
                <div class="skills">
                    <span class="skill-tag">Node.js</span>
                    <span class="skill-tag">Express</span>
                    <span class="skill-tag">JavaScript ES6+</span>
                    <span class="skill-tag">HTML5 / CSS3</span>
                    <span class="skill-tag">Git / GitHub</span>
                    <span class="skill-tag">Render Cloud</span>
                    <span class="skill-tag">JWT Security</span>
                    <span class="skill-tag">Vite / React</span>
                </div>
            </div>

            <div class="card">
                <h2>🎓 Educación & Certificaciones</h2>
                <div class="project-item">
                    <h3>Tecsup - Tecnología Digital</h3>
                    <p>Diseño y Desarrollo de Software - Laboratorio N° 8 (Despliegue de Aplicaciones Web).</p>
                </div>
            </div>
        </div>

        <footer>
            <p>© 2026 Julio Alfredo Flores - Desplegado exitosamente en Render Cloud</p>
            <a href="https://github.com/floresjulioalfredo1080-stack/desplegando-js" target="_blank" class="btn">Ver Código en GitHub</a>
        </footer>
    </div>
</body>
</html>`

function requestController(req, res){
    console.log('Petición recibida en el servidor desplegado')
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end(htmlContent)
}

const server = http.createServer(requestController)

const PORT = process.env.PORT || 4000

server.listen(PORT, function(){
    console.log("Aplicación web corriendo en: " + PORT)
})
