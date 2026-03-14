# MLS Sistemas Automatizados - Landing Page HTML

Landing page profissional para **MLS Sistemas Automatizados**, desenvolvida em **HTML5, CSS3 e JavaScript puro**. Uma versão estática e totalmente independente, sem dependências de servidor.

## 📋 Características

- ✨ **Design Moderno e Elegante** - Paleta de cores premium (dourado, azul marinho, ciano)
- 🎬 **Animações Fluidas** - Efeitos ao scroll, parallax e transições suaves
- 📱 **Totalmente Responsivo** - Otimizado para mobile, tablet e desktop
- ⚡ **Performance Otimizada** - Sem dependências externas, apenas CSS e JS vanilla
- 🔒 **Segurança** - Sem processamento no servidor, totalmente estático
- 🎨 **Tipografia Premium** - Fontes Google (Syne + Plus Jakarta Sans)
- 🚀 **SEO Friendly** - Meta tags, estrutura semântica HTML5
- 📦 **Fácil Deploy** - Funciona em qualquer servidor (Apache, Nginx, GitHub Pages, etc.)

## 📁 Estrutura de Arquivos

```
mlssistemas/
├── index.html          # Página principal
├── assets/
│   ├── css/
│   │   └── styles.css  # Estilos CSS (todas as páginas)
│   ├── img/            # Imagens do site
│   └── js/
│       └── script.js   # JavaScript para interatividade
├── traderbots/
│   └── index.html      # Página MLS TraderBots
├── README.md           # Este arquivo
└── .gitignore          # (Opcional) Para Git
```

## 🚀 Instalação & Uso

### Opção 1: Abrir Localmente
1. Baixe ou clone os arquivos
2. Abra `index.html` diretamente no navegador
3. Pronto! A página funcionará sem necessidade de servidor

### Opção 2: Servidor Local (Python)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Acesse: `http://localhost:8000`

### Opção 3: Servidor Local (Node.js)
```bash
# Instalar http-server
npm install -g http-server

# Iniciar servidor
http-server
```
Acesse: `http://localhost:8080`

### Opção 4: Fazer Upload para Servidor Web
1. Fazer upload dos 3 arquivos via FTP/SFTP
2. Acessar via domínio
3. Pronto!

## 🏠 Hospedagem Recomendada

### Gratuita
- **GitHub Pages** - Perfeito para projetos estáticos
- **Netlify** - Deploy automático com Git
- **Vercel** - Otimizado para performance
- **Firebase Hosting** - Google Cloud

### Paga
- **Hostinger** - Compartilhada
- **Bluehost** - Compartilhada
- **AWS S3 + CloudFront** - Cloud
- **DigitalOcean** - VPS

## 🎨 Personalização

### Cores da Marca
Edite as variáveis CSS em `assets/css/styles.css`:

```css
:root {
    --mls-gold: #D4AF37;      /* Dourado */
    --mls-navy: #001F3F;      /* Azul Marinho */
    --mls-cyan: #00D4FF;      /* Ciano */
    --mls-dark-navy: #0a1929; /* Azul Escuro */
}
```

### Conteúdo
Edite o arquivo `index.html` para:
- Alterar textos e descrições
- Adicionar/remover seções
- Atualizar informações de contato
- Modificar links e CTAs

### Logo
O logo está sendo carregado via CDN. Para usar um logo local:
1. Baixe a imagem do logo
2. Coloque na mesma pasta que `index.html`
3. Atualize o `src` em `index.html`:
```html
<img src="logo.png" alt="MLS Sistemas Logo" class="logo-image">
```

## 📊 Seções da Página

### 1. Navegação
- Logo com gradiente
- Menu responsivo
- Botão CTA "Solicitar Demo"

### 2. Hero Section
- Fundo com efeito parallax
- Título com gradiente
- Dois botões CTA
- Animações ao carregar

### 3. Serviços
- 2 cards principais (Sistemas Customizados e Automação com IA)
- Ícones animados
- Lista de benefícios
- Efeitos hover

### 4. Diferenciais
- 3 cards com ícones
- Animações ao scroll
- Destaque de vantagens competitivas

### 5. Call-to-Action
- Seção de conversão
- Dois botões de ação
- Fundo com gradiente

### 6. Footer
- Informações da empresa
- Links de navegação
- Contato
- Copyright

## 🎬 Animações

A página utiliza animações CSS e JavaScript:

- **Fade In** - Elementos aparecem suavemente
- **Fade In Up** - Elementos entram de baixo para cima
- **Fade In Left/Right** - Elementos entram dos lados
- **Float** - Ícones flutuam continuamente
- **Parallax** - Fundo se move com scroll
- **Hover Effects** - Efeitos ao passar o mouse

## ⚡ Performance

### Otimizações Implementadas

1. **CSS Minificado** - Reduz tamanho do arquivo
2. **JavaScript Otimizado** - Lazy loading, debounce, throttle
3. **Imagens Otimizadas** - Carregadas via CDN com formato WebP
4. **Sem Dependências Externas** - Apenas CSS e JS vanilla

### Métricas Esperadas

- **Tempo de Carregamento:** < 1s
- **Lighthouse Score:** 95+
- **Performance Index:** < 2s

## 📱 Responsividade

A página é totalmente responsiva com breakpoints:

- **Mobile:** < 480px
- **Tablet:** 480px - 768px
- **Desktop:** > 768px

## 🔧 Modificações Avançadas

### Adicionar Formulário de Contato
```html
<form id="contact-form" method="POST" action="https://seu-servico.com/form">
    <input type="text" name="name" placeholder="Seu Nome" required>
    <input type="email" name="email" placeholder="Seu Email" required>
    <textarea name="message" placeholder="Sua Mensagem" required></textarea>
    <button type="submit" class="btn btn-primary">Enviar</button>
</form>
```

### Integrar Google Analytics
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Adicionar Chatbot
```html
<!-- Exemplo: Drift, Intercom, ou similar -->
<script>
  // Código do seu chatbot aqui
</script>
```

## 🚀 Deploy com GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings → Pages
4. Selecione "main" como branch
5. Pronto! Sua página estará em `https://seu-usuario.github.io/seu-repo`

## 📝 Licença

Todos os direitos reservados © 2026 MLS Sistemas Automatizados

## 🤝 Suporte

Para dúvidas ou sugestões, entre em contato com a equipe MLS Sistemas.

---

**Desenvolvido com ❤️ para MLS Sistemas Automatizados**
