# 🚀 Como Subir o Portfólio para o GitHub

## Passo 1: Criar o Repositório no GitHub

1. Acesse https://github.com/isacosta15
2. Clique em **"New"** (novo repositório)
3. Configure:
   - **Repository name**: `portfolio-isabela-nunes` (ou outro nome que preferir)
   - **Description**: "Portfólio profissional - Isabela Costa Nunes"
   - **Public** ✓ (já selecionado)
   - **NÃO** marque "Add a README file"
4. Clique em **"Create repository"**

## Passo 2: Preparar o Projeto Localmente

Abra o terminal na sua máquina e execute:

```bash
# Criar pasta do projeto
mkdir portfolio-isabela
cd portfolio-isabela

# Inicializar git
git init
git branch -M main
```

## Passo 3: Baixar os Arquivos

Você tem duas opções:

### Opção A: Via Emergent Export
1. Use o botão "Export" na interface do Emergent
2. Baixe o ZIP e extraia dentro da pasta `portfolio-isabela`

### Opção B: Manualmente (se necessário)
Copie os seguintes arquivos e pastas do Emergent para sua máquina:

```
portfolio-isabela/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── data/
│   │   │   └── mock.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

## Passo 4: Fazer o Push para o GitHub

```bash
# Adicionar todos os arquivos
git add .

# Fazer o commit
git commit -m "🎉 Primeiro commit: Portfólio Isabela Costa Nunes"

# Conectar ao repositório remoto (SUBSTITUA pelo seu repo)
git remote add origin https://github.com/isacosta15/portfolio-isabela-nunes.git

# Fazer o push
git push -u origin main
```

## Passo 5: Rodar o Projeto Localmente

Depois de clonar/baixar, execute:

```bash
# Entrar na pasta frontend
cd frontend

# Instalar dependências
npm install
# ou
yarn install

# Rodar o projeto
npm start
# ou
yarn start
```

O projeto abrirá em http://localhost:3000

## 🔧 Comandos Úteis para Atualizar o GitHub

Depois de fazer mudanças:

```bash
git add .
git commit -m "Descrição das mudanças"
git push
```

## 📦 Deploy (Opcional)

Para colocar online gratuitamente, você pode usar:

### Vercel (Recomendado)
1. Acesse https://vercel.com
2. Conecte sua conta do GitHub
3. Selecione o repositório `portfolio-isabela-nunes`
4. Configure:
   - Framework: **Create React App**
   - Root Directory: **frontend**
5. Clique em **Deploy**

### Netlify
1. Acesse https://netlify.com
2. Conecte sua conta do GitHub
3. Selecione o repositório
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `frontend/build`
5. Clique em **Deploy**

## 🆘 Problemas Comuns

**Erro: "npm: command not found"**
- Instale o Node.js: https://nodejs.org

**Erro ao fazer push**
- Configure seu nome e email:
```bash
git config --global user.name "Isabela Costa Nunes"
git config --global user.email "seu-email@email.com"
```

**Erro de permissão no GitHub**
- Use GitHub CLI ou configure SSH keys
- Ou use HTTPS com token pessoal

---

**Precisa de ajuda?** Me chame aqui no Emergent! 💜
