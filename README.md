# 🚀 Portfólio Profissional - Obedys Júnio

<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Página profissional moderna e responsiva para apresentação de portfólio de Analista de Dados e Logística**

[🌐 Ver Demo](#) • [📧 Contato](mailto:obedysjunio@email.com) • [💼 LinkedIn](https://linkedin.com)

</div>

---

## 📋 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Stack Tecnológica](#-stack-tecnológica)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação e Execução](#-instalação-e-execução)
- [Componentes Principais](#-componentes-principais)
- [Design System](#-design-system)
- [Otimizações e Performance](#-otimizações-e-performance)
- [Responsividade](#-responsividade)
- [Integração com EmailJS](#-integração-com-emailjs)
- [Deploy](#-deploy)
- [Roadmap](#-roadmap)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

Este projeto é uma **Single Page Application (SPA)** desenvolvida para apresentar de forma profissional e impactante o portfólio de um Analista de Dados especializado em Logística e Operações. A aplicação foi construída com foco em:

- ✨ **Design Premium**: Interface moderna com glassmorphism, gradientes e micro-animações
- 📊 **Showcase de Projetos**: Galeria interativa com modal detalhado para 15+ projetos reais
- 🎨 **UX de Alto Nível**: Navegação fluida com scroll spy e transições suaves
- 📱 **Mobile First**: Totalmente responsivo para todos os dispositivos
- ⚡ **Performance**: Otimizado para carregamento rápido e SEO

### 🎨 Preview das Seções

A aplicação é dividida em **7 seções principais**:

1. **Hero** - Apresentação pessoal com CTA e links sociais
2. **Sobre** - Resumo profissional e áreas de atuação
3. **Experiência** - Timeline interativa com histórico profissional
4. **Projetos** - Galeria de cases com modal de detalhes
5. **Habilidades** - Competências técnicas e comportamentais
6. **Formação** - Educação formal e certificações
7. **Contato** - Formulário de contato e informações

---

## ✨ Funcionalidades

### 🧭 Navegação Inteligente
- **Scroll Spy**: Destaque automático da seção ativa no menu
- **Smooth Scroll**: Navegação suave entre seções
- **Menu Responsivo**: Hamburger menu para mobile com animações

### 📂 Galeria de Projetos Avançada
- **Modal Interativo**: Visualização detalhada de cada projeto
- **Carrossel de Imagens**: Navegação entre múltiplas screenshots
- **Categorização**: Filtros por tipo (BI, Logística, Automação)
- **Links Externos**: Acesso direto a demos e repositórios

### 🎨 Experiência Visual
- **Animações Suaves**: Transições e hover effects em todos os elementos
- **Gradientes Dinâmicos**: Paleta de cores profissional (Slate + Emerald)
- **Ícones Lucide**: Biblioteca de ícones moderna e consistente
- **Tipografia Premium**: Google Fonts (Inter + Poppins)

### 📧 Sistema de Contato
- **Formulário Funcional**: Integração com EmailJS (preparado)
- **Validação de Campos**: Feedback visual para o usuário
- **Links Diretos**: Email, telefone e redes sociais

---

## 🛠 Stack Tecnológica

### Core
```json
{
  "runtime": "React 18.3.1",
  "language": "TypeScript 5.5.3",
  "bundler": "Vite 5.4.2",
  "styling": "TailwindCSS 3.4.1"
}
```

### Dependências Principais

| Biblioteca | Versão | Propósito |
|-----------|--------|-----------|
| **React** | 18.3.1 | Framework UI |
| **TypeScript** | 5.5.3 | Type safety |
| **Vite** | 5.4.2 | Build tool & dev server |
| **TailwindCSS** | 3.4.1 | Utility-first CSS |
| **Lucide React** | 0.344.0 | Ícones modernos |
| **EmailJS Browser** | 4.4.1 | Envio de emails |

### DevDependencies

- **ESLint** - Linting de código
- **PostCSS** - Processamento CSS
- **Autoprefixer** - Compatibilidade cross-browser
- **@vitejs/plugin-react** - Fast Refresh

---

## 📁 Estrutura do Projeto

```
pagepessoal/
├── 📂 src/
│   ├── 📂 components/          # Componentes React
│   │   ├── Hero.tsx           # Seção inicial
│   │   ├── Resume.tsx         # Sobre mim
│   │   ├── Timeline.tsx       # Experiência profissional
│   │   ├── Projects.tsx       # Galeria de projetos
│   │   ├── Skills.tsx         # Habilidades técnicas
│   │   ├── Studies.tsx        # Formação acadêmica
│   │   └── Contact.tsx        # Formulário de contato
│   ├── App.tsx                # Componente principal + navegação
│   ├── main.tsx               # Entry point
│   └── index.css              # Estilos globais + Tailwind
├── 📂 assets/                  # Imagens, PDFs e recursos
│   ├── fotoperfil.png
│   ├── curriculo_teste.pdf
│   ├── [84 assets de projetos]
│   └── ...
├── 📂 public/                  # Arquivos estáticos
├── index.html                 # HTML template
├── package.json               # Dependências
├── tsconfig.json              # Configuração TypeScript
├── tailwind.config.js         # Configuração Tailwind
├── vite.config.ts             # Configuração Vite
└── README.md                  # Este arquivo
```

### 🗂 Detalhamento dos Componentes

#### `App.tsx` (6.2KB)
- **Responsabilidade**: Orquestração da aplicação
- **Features**:
  - Gerenciamento de estado da navegação
  - Scroll spy para seções ativas
  - Menu desktop e mobile responsivo
  - Estrutura de layout principal

#### `Hero.tsx` (6.1KB)
- **Responsabilidade**: Primeira impressão
- **Elementos**:
  - Foto de perfil com efeitos de borda
  - Título e subtítulo com gradiente
  - CTAs (Contato + Download CV)
  - Links para redes sociais
  - Background com overlay

#### `Projects.tsx` (24.4KB) - **Componente Mais Complexo**
- **Responsabilidade**: Showcase de portfólio
- **Features**:
  - Grid responsivo de cards de projetos
  - Modal fullscreen com detalhes
  - Carrossel de imagens (prev/next/dots)
  - 15 projetos catalogados com:
    - Título, descrição, problema, solução
    - Tecnologias utilizadas
    - Links para demo/código
    - Categorização (BI, Logística, Automação)

#### `Skills.tsx` (4.6KB)
- **Responsabilidade**: Demonstração de competências
- **Estrutura**:
  - 4 categorias de hard skills com progress bars
  - Soft skills em badges interativos
  - Níveis de proficiência percentuais

#### `Timeline.tsx` (7.3KB)
- **Responsabilidade**: Histórico profissional
- **Features**:
  - Timeline vertical com marcadores
  - 4 experiências profissionais
  - Achievements em grid de 2 colunas
  - Badges de período e localização

#### `Studies.tsx` (4.8KB)
- **Responsabilidade**: Formação acadêmica
- **Conteúdo**:
  - 2 formações acadêmicas
  - 6 certificações profissionais
  - Layout em 2 colunas (desktop)

#### `Contact.tsx` (7.5KB)
- **Responsabilidade**: Canal de comunicação
- **Elementos**:
  - Formulário de contato (4 campos)
  - Cards de informações (email, telefone, localização)
  - Botões de redes sociais
  - Footer com copyright

---

## 🚀 Instalação e Execução

### Pré-requisitos

- **Node.js** >= 18.x
- **npm** >= 9.x ou **yarn** >= 1.22

### Instalação

```bash
# Clone o repositório
git clone https://github.com/ObedysGois/minhapagina.git

# Entre no diretório
cd pagepessoal

# Instale as dependências
npm install
```

### Executar em Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados em `dist/`

### Preview da Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

---

## 🎨 Design System

### Paleta de Cores

```css
/* Background */
--slate-900: #0f172a;  /* Background principal */
--slate-800: #1e293b;  /* Cards e containers */

/* Text */
--slate-50: #f8fafc;   /* Títulos */
--slate-300: #cbd5e1;  /* Texto secundário */
--slate-400: #94a3b8;  /* Texto terciário */

/* Accent */
--emerald-500: #10b981; /* Primary action */
--emerald-400: #34d399; /* Hover states */

/* Borders */
--slate-700: #334155;  /* Borders padrão */
```

### Tipografia

```css
/* Headings */
font-family: 'Poppins', sans-serif;
font-weight: 700-900;

/* Body */
font-family: 'Inter', sans-serif;
font-weight: 300-600;
```

### Espaçamento

- **Seções**: `py-24` (6rem vertical)
- **Cards**: `p-6` ou `p-8`
- **Gaps**: `gap-4`, `gap-6`, `gap-8`

### Efeitos Visuais

- **Glassmorphism**: `backdrop-blur-md` + `bg-opacity`
- **Shadows**: `shadow-lg`, `shadow-2xl`, `shadow-emerald-500/20`
- **Transitions**: `transition-all duration-300`
- **Hover Effects**: `scale-110`, `translate-x-1`

---

## ⚡ Otimizações e Performance

### Build Otimizado

- **Code Splitting**: Vite automaticamente divide o código
- **Tree Shaking**: Remoção de código não utilizado
- **Minificação**: CSS e JS minificados
- **Lazy Loading**: Imagens carregadas sob demanda

### Imagens

- **Formatos Modernos**: WebP para backgrounds
- **Compressão**: Todas as imagens otimizadas
- **Total de Assets**: 84 arquivos (imagens + PDFs)

### Lighthouse Score (Estimado)

- ⚡ Performance: 90+
- ♿ Accessibility: 95+
- 🎯 Best Practices: 95+
- 🔍 SEO: 90+

---

## 📱 Responsividade

### Breakpoints Tailwind

```css
sm: 640px   /* Tablets pequenos */
md: 768px   /* Tablets */
lg: 1024px  /* Desktops */
xl: 1280px  /* Desktops grandes */
```

### Estratégia Mobile-First

- **Layout**: Flexbox e Grid responsivos
- **Navegação**: Menu hamburger em mobile
- **Imagens**: Dimensões adaptativas
- **Tipografia**: Escalas fluidas (`text-xl md:text-2xl lg:text-3xl`)

### Testado em

- ✅ iPhone (Safari)
- ✅ Android (Chrome)
- ✅ iPad (Safari)
- ✅ Desktop (Chrome, Firefox, Edge)

---

## 📧 Integração com EmailJS

### Configuração

O projeto está preparado para integração com EmailJS. Para ativar:

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Configure um serviço de email
3. Crie um template de email
4. Adicione as credenciais no componente `Contact.tsx`:

```typescript
import emailjs from '@emailjs/browser';

const sendEmail = (e: FormEvent) => {
  e.preventDefault();
  
  emailjs.sendForm(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    e.target as HTMLFormElement,
    'YOUR_PUBLIC_KEY'
  )
  .then(() => {
    alert('Mensagem enviada com sucesso!');
  })
  .catch(() => {
    alert('Erro ao enviar mensagem.');
  });
};
```

---

## 🌐 Deploy

### Opções Recomendadas

#### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

#### Netlify

```bash
npm run build
# Arraste a pasta dist/ para Netlify Drop
```

#### GitHub Pages

```bash
# Adicione ao package.json
"homepage": "https://obedysgois.github.io/minhapagina",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

npm install --save-dev gh-pages
npm run deploy
```

### Variáveis de Ambiente

Crie um arquivo `.env` para configurações sensíveis:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 🗺 Roadmap

### ✅ Concluído
- [x] Design e estrutura da aplicação
- [x] Todos os componentes principais
- [x] Sistema de navegação com scroll spy
- [x] Galeria de projetos com modal
- [x] Responsividade completa
- [x] Otimização de assets

### 🚧 Em Desenvolvimento
- [ ] Integração completa com EmailJS
- [ ] Animações de entrada (AOS/Framer Motion)
- [ ] Modo escuro/claro
- [ ] Internacionalização (PT/EN)

### 🔮 Futuro
- [ ] Blog integrado
- [ ] Dashboard de métricas de acesso
- [ ] Sistema de CMS para projetos
- [ ] Testes automatizados (Jest + RTL)

---

## 📄 Licença

Este projeto é de propriedade de **Obedys Júnio dos Santos Gois** e está disponível para visualização pública. 

**Todos os direitos reservados** © 2025

Para uso comercial ou redistribuição, entre em contato: [obedysjunio@email.com](mailto:obedysjunio@email.com)

---

## 👨‍💻 Autor

**Obedys Júnio dos Santos Gois**

- 💼 Analista de Dados | Logística & Operações
- 📍 Joinville, SC - Brasil
- 📧 obedysjunio@email.com
- 💼 [LinkedIn](https://linkedin.com)
- 🐙 [GitHub](https://github.com/ObedysGois)

---

<div align="center">

**Desenvolvido com ❤️ e ☕ por Obedys Júnio**

Se este projeto foi útil, considere dar uma ⭐!

</div>