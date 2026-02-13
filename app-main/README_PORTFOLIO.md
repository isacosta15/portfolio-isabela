# 💜 Portfólio Isabela Costa Nunes

Portfólio pessoal moderno e profissional desenvolvido com React, apresentando projetos, habilidades, certificações e formação.

## 🎨 Características

- **Design Moderno**: Interface limpa em tons de violeta (#7A3E9D)
- **One-Page**: Navegação fluida entre seções com scroll suave
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações**: Efeitos suaves de entrada e hover
- **Menu Fixo**: Header com blur effect ao fazer scroll
- **Componentes Shadcn**: Uso de componentes modernos e acessíveis

## 📂 Estrutura do Projeto

```
frontend/
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Menu fixo com navegação
│   │   ├── Hero.jsx           # Seção inicial com CTA
│   │   ├── About.jsx          # Sobre mim
│   │   ├── Skills.jsx         # Hard e Soft Skills
│   │   ├── Projects.jsx       # Cards de projetos
│   │   ├── Certifications.jsx # Certificações
│   │   ├── Education.jsx      # Formação acadêmica
│   │   ├── Contact.jsx        # Links de contato
│   │   └── Footer.jsx         # Rodapé
│   ├── data/
│   │   └── mock.js            # Dados do portfólio
│   └── components/ui/         # Componentes Shadcn
```

## 🎯 Seções do Portfólio

### 1. Hero Section
- Nome completo
- Título e tecnologias
- Frase inspiradora
- Botões de ação (Ver Projetos, Entrar em Contato)
- Links sociais (LinkedIn, GitHub, Email)
- Foto de perfil

### 2. Sobre Mim
- Descrição profissional
- Experiência e objetivos
- Estatísticas (3º Ano ETEC, 6+ Certificações, 4 Projetos)

### 3. Habilidades
- **Hard Skills**: Java, JavaScript, React, .NET, SQL, etc.
- **Soft Skills**: Comunicação, Liderança, Proatividade, etc.

### 4. Projetos
Cards com:
- Imagem do projeto
- Título e subtítulo (competição/hackathon)
- Descrição breve
- Tags de tecnologias
- Botões: Site, GitHub, Pitch

**Projetos incluídos:**
1. 🌿 EcoTrack (Hackteen - Venturus/Fundação Iochpe, 2024)
2. 🧩 YOMU (British Council, 2024)
3. 📊 Desafio dos Dados (Vivo, 2024)
4. 🤖 Arduino PlayTech (Campus Party Brasil 16, 2023)

### 5. Certificações
Cards minimalistas com:
- Logo da instituição
- Nome da certificação
- Emissor

**Certificações:**
- IBM: AI Fundamentals, Project Management
- Cisco: CyberOps Associate, CCNA 1
- SENAI/SC: Network Security
- iTalents: Fundamentos de UX

### 6. Formação
- ETEC de Carapicuíba
- Ensino Médio Técnico em Desenvolvimento de Sistemas (AMS)
- Conclusão prevista: 2025

### 7. Contato
Cards interativos com:
- 📧 Email
- 💼 LinkedIn
- 💻 GitHub

## 🔧 Como Personalizar

### Editar Informações Pessoais

Abra o arquivo `/app/frontend/src/data/mock.js` e atualize:

```javascript
export const personalInfo = {
  name: "Isabela Costa Nunes",
  email: "seu.email@email.com",
  linkedin: "https://linkedin.com/in/seu-perfil",
  github: "https://github.com/seu-usuario",
  profileImage: "URL_DA_SUA_FOTO"
};
```

### Adicionar/Editar Projetos

```javascript
export const projects = [
  {
    id: 1,
    title: "Nome do Projeto",
    subtitle: "Competição/Evento (Ano)",
    description: "Descrição breve do projeto",
    image: "URL_DA_IMAGEM",
    siteUrl: "https://...",
    githubUrl: "https://github.com/...",
    pitchUrl: "https://youtube.com/...",
    tags: ["Tecnologia1", "Tecnologia2"]
  }
];
```

### Atualizar Skills

```javascript
export const hardSkills = [
  "Java", "JavaScript", "Python", // ... adicione mais
];

export const softSkills = [
  "Comunicação e Liderança", // ... adicione mais
];
```

### Adicionar Certificações

```javascript
export const certifications = [
  {
    id: 1,
    title: "Nome da Certificação",
    issuer: "Instituição",
    logo: "URL_DO_LOGO"
  }
];
```

## 🎨 Personalizar Cores

As cores principais estão no código. Para alterar:

1. **Cor principal** (#7A3E9D): Procure por `#7A3E9D` nos arquivos
2. **Cor secundária** (#B67DDC): Procure por `#B67DDC`
3. **Fundo** (#FAF8FB): Procure por `#FAF8FB`

## 📱 Responsividade

O portfólio é totalmente responsivo e funciona em:
- 📱 Mobile (375px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## ✨ Funcionalidades

- ✅ Scroll suave entre seções
- ✅ Menu fixo com indicador de seção ativa
- ✅ Animações de entrada ao fazer scroll
- ✅ Hover effects em cards e botões
- ✅ Menu mobile com hamburger
- ✅ Links diretos para redes sociais
- ✅ Design acessível com foco visível

## 🚀 Como Executar

O projeto já está rodando! Acesse:
- Frontend: http://localhost:3000

Para reiniciar os serviços:
```bash
sudo supervisorctl restart frontend
```

## 📝 Próximos Passos Sugeridos

1. **Substituir imagens**: Coloque suas fotos reais dos projetos
2. **Atualizar links**: Adicione os URLs reais dos seus projetos
3. **Foto de perfil**: Substitua pela sua foto profissional
4. **Conteúdo**: Revise e personalize os textos
5. **Testar**: Navegue pelo site e teste todos os links

## 💡 Dicas

- Use imagens otimizadas (WebP, JPEG) para melhor performance
- Mantenha descrições de projetos concisas (2-3 linhas)
- Atualize regularmente com novos projetos e certificações
- Teste em diferentes dispositivos e navegadores

## 🎓 Tecnologias Utilizadas

- React 19
- Tailwind CSS
- Shadcn/ui Components
- Lucide React Icons
- Google Fonts (Poppins)

---

**Desenvolvido com 💜 por E1 (Emergent AI)**

*Este é um portfólio frontend-only. Nenhum backend foi necessário para esta versão.*
