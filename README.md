# 🔐 Página de Login — React + Tailwind CSS

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-Primitives-161618?style=for-the-badge&logo=radixui&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-222?style=for-the-badge&logo=github&logoColor=white)

**Uma página de login moderna com UI glassmorphism, animações fluidas e design responsivo.**

[🌐 Ver Demo ao Vivo](https://jovemegidio.github.io/Pagina-de-Login)

</div>

---

## ✨ Funcionalidades

- 🎨 **Glassmorphism UI** — Card de login com efeito glass blur e bordas sutis
- 🌊 **Overlay animado** — Gradientes que alternam automaticamente a cada 5 segundos
- 👤 **Avatar dinâmico** — Gera avatar em tempo real conforme o email é digitado
- ✅ **Validação de formulário** — Validação client-side com feedback visual instantâneo
- 👁️ **Toggle de senha** — Botão para mostrar/ocultar a senha
- 📱 **100% Responsivo** — Adaptado para mobile, tablet e desktop
- 🎭 **Micro-interações** — Partículas flutuantes, orbs animados e transições suaves
- 🌙 **Dark theme** — Tema escuro profissional com acentos em indigo

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| **React 19** | Biblioteca de UI com Hooks |
| **Tailwind CSS 3.4** | Estilização utility-first |
| **Radix UI** | Componentes acessíveis (Checkbox, Label, Input) |
| **Lucide React** | Ícones SVG leves |
| **CRACO** | Configuração customizada do CRA sem eject |
| **GitHub Actions** | CI/CD com deploy automático |

## 📸 Preview

<div align="center">

> Acesse a [demo ao vivo](https://jovemegidio.github.io/Pagina-de-Login) para ver as animações em ação.

</div>

## 🏗️ Estrutura do Projeto

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/ui/    # Componentes reutilizáveis (shadcn/ui)
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utilitários
│   ├── pages/
│   │   └── LoginPage.jsx # Página principal de login
│   ├── App.js            # Rotas da aplicação
│   ├── App.css           # Estilos globais
│   └── index.css         # Design tokens e variáveis CSS
├── tailwind.config.js
├── craco.config.js
└── package.json
```

## 🚀 Como rodar localmente

```bash
# Entrar na pasta do frontend
cd frontend

# Instalar dependências
npm install

# Rodar em modo de desenvolvimento
npm start
```

A aplicação vai abrir em `http://localhost:3000`.

## 📦 Build de Produção

```bash
cd frontend
npm run build
```

Os arquivos otimizados ficam na pasta `frontend/build/`.

## 🌐 Deploy

O deploy é feito automaticamente via **GitHub Actions** toda vez que um push é feito na branch `main`. O site fica disponível em:

**https://jovemegidio.github.io/Pagina-de-Login**

---

## 📫 Contato

**Antonio Egidio Neto**

[![GitHub](https://img.shields.io/badge/-jovemegidio-181717?style=flat-square&logo=github)](https://github.com/jovemegidio)
[![Instagram](https://img.shields.io/badge/-egidiocode-E4405F?style=flat-square&logo=instagram&logoColor=white)](https://instagram.com/egidiocode)
