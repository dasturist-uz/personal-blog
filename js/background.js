// Programmer-themed animated background
document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.createElement('canvas');
    canvas.id = 'code-background';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '1';
    canvas.style.opacity = '1';
    document.body.insertBefore(canvas, document.body.firstChild);

    const ctx = canvas.getContext('2d');
    let width, height;

    // Programming keywords only
    const keywords = ['function', 'docker', 'nginx', 'ubuntu', 'const', 'let', 'var', 'if', 'else', 'for', 'while', 'return', 'class', 'import', 'export', 'async', 'await', 'try', 'catch', 'PHP', 'Python', 'JS', 'SQL', 'API', 'Git', 'Yii', 'Laravel', 'React', 'Vue', 'MySQL', 'PostgreSQL', 'backend', 'frontend', 'database', 'server', 'client', 'code', 'debug', 'deploy'];

    // Floating code snippets
    class CodeSnippet {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.text = keywords[Math.floor(Math.random() * keywords.length)];
            this.size = Math.random() * 16 + 14;
            this.speedX = (Math.random() - 0.5) * 1.5;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.3 + 0.2;
            this.direction = Math.random() > 0.5 ? 1 : -1;
        }

        update() {
            this.x += this.speedX * this.direction;
            this.y += this.speedY;

            // Smooth wrap around screen
            if (this.x > width + 150) {
                this.x = -150;
                this.y = Math.random() * height;
            }
            if (this.x < -150) {
                this.x = width + 150;
                this.y = Math.random() * height;
            }
            if (this.y > height + 50) this.y = -50;
            if (this.y < -50) this.y = height + 50;
        }

        draw() {
            ctx.font = `${this.size}px 'Courier New', monospace`;
            ctx.fillStyle = `rgba(100, 200, 100, ${this.opacity})`;
            ctx.fillText(this.text, this.x, this.y);
        }
    }

    let snippets = [];
    const snippetCount = 25;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    function init() {
        resize();
        snippets = [];

        for (let i = 0; i < snippetCount; i++) {
            snippets.push(new CodeSnippet());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Draw floating snippets
        snippets.forEach(snippet => {
            snippet.update();
            snippet.draw();
        });

        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        resize();
        snippets = [];
        for (let i = 0; i < snippetCount; i++) {
            snippets.push(new CodeSnippet());
        }
    });

    init();
    animate();
});
