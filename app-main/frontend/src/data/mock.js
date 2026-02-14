// Mock data for Isabela's Portfolio
import fotoPerfil from 'src/data/img/Perfil.jpg';
import aura from 'src/data/img/aura.png';
import sportse from 'src/data/img/sportse.png'
import italents from 'src/data/img/italents.png';
import senai from 'src/data/img/senai.png';
import EcoTrack from 'src/data/img/Eco.png';
import Yomu from 'src/data/img/Yomu.jpg';
import Arduino from 'src/data/img/Arduino.png';
import Alzheimer from 'src/data/img/Alzheimer.png';

export const personalInfo = {
  name: "Isabela Costa Nunes",
  title: "Desenvolvedora Back-end",
  subtitle: "Fullstack • Java • JavaScript • React • Node.js • SQL",
  quote: "Transformo ideias em soluções digitais criativas e funcionais.",
  email: "isabela.costa.dev@gmail.com",
  linkedin: "https://linkedin.com/in/isabela-nunes-dev",
  github: "https://github.com/isacosta15",
  profileImage: fotoPerfil,
};

export const about = {
  description: `Sou estudante do 1º semestre da graduação Técnologa em Análise e Desenvolvimento de Sistemas na FATEC de Carapicuíba.
Tenho grande interesse por desenvolvimento de software e inovação tecnológica, com experiência prática em Java, JavaScript, React, Node.js e SQL.

Desenvolvi habilidades sólidas em trabalho em equipe, resolução de problemas, liderança e comunicação, participando de diversas competições e hackathons voltados à tecnologia e inovação.

Busco constantemente novos desafios que me permitam evoluir e contribuir para projetos que unam tecnologia e impacto social.`
};

export const hardSkills = [
  "Java",
  "JavaScript",
  "Python",
  "C#",
  "SQL",
  "React.js",
  "Node.js",
  ".NET",
  "MySQL",
  "MongoDB",
  "Git",
  "Postman",
  "Figma",
  "VS Code",
  "APIs RESTful",
  "TensorFlow",
  "Scrum/Kanban"
];

export const softSkills = [
  "Comunicação e Liderança",
  "Trabalho em equipe",
  "Proatividade",
  "Criatividade e Inovação",
  "Foco em resultados"
];

export const projects = [
  {
    id: 1,
    title: "Aura",
    subtitle: "TCC do Curso de Desenvolvimento de Sistemas - ETEC de Carapicuíba, 2024",
    description: "Plataforma digital de suporte emocional com assistente virtual (Aurora) que oferece acolhimento, orientação em saúde mental e promove acessibilidade e cuidado responsável.",
    image: aura,
    siteUrl: "https://aura-tcc-frontend-main.vercel.app/",
    tags: ["React", "JavaScript", "NLP", "Node.js", "Express.js"]
  },
  {
    id: 2,
    title: "Sportse",
    subtitle: "Technovation Summer School for Girls, Grace / ICMC-USP, 2025",
    description: "Solução tecnológica que promove acessibilidade e personalização no esporte, conectando inclusão, bem-estar e inovação para tornar a prática esportiva mais acessível.",
    image: sportse,
    siteUrl: "https://www.youtube.com/watch?v=0-_3vTrn5_k",
    tags: ["MIT App Inventor", "Business Model Canvas", "Acessibilidade"]
  },
  {
    id: 3,
    title: "EcoTrack",
    subtitle: "Hackteen (Venturus/Fundação Iochpe, 2025)",
    description: "Plataforma gamificada de reciclagem com reconhecimento de materiais via TensorFlow, sistema de pontuação e painel administrativo.",
    image: EcoTrack,
    siteUrl: "https://ecotrack-frontend-deploy.vercel.app/",
    tags: ["TensorFlow", "React", "Gamificação"]
  },
  {
    id: 4,
    title: "YOMU - Você no Mundo!",
    subtitle: "Desafio Learning Sectors (British Council, 2025)",
    description: "Plataforma inclusiva voltada à aprendizagem de crianças com deficiência visual e auditiva.",
    image: Yomu,
    siteUrl: "https://youtu.be/QSfhEHnZLyY",
    tags: ["Acessibilidade", "Educação", "React"]
  },
  {
    id: 5,
    title: "Arduino PlayTech",
    subtitle: "Campus Party Brasil 16 (2024)",
    description: "Projeto de robótica educativa apresentado como startup.",
    image: Arduino,
    siteUrl: "https://youtu.be/GItG0J0CYiY?si=G97eT3D3PEfABEzM",
    tags: ["Arduino", "IoT", "Educação"]
  },
  {
    id: 6,
     title: "Alzheimer-Care",
    subtitle: "X-Mostra de Projetos COTUCA - UNICAMP(2024)",
    description: "Aplicativo móvel criado para auxiliar no monitoramento de pacientes com Alzheimer.",
    image: Alzheimer,
    siteUrl: "https://github.com/isacosta15/alzheimer-care",
    tags: ["Mobile", "React Native", "Java", "Monitoramento"]
  }
];

export const certifications = [
  {
    id: 1,
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
  },
  {
    id: 2,
    title: "Project Management Fundamentals",
    issuer: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
  },
  {
    id: 3,
    title: "CyberOps Associate",
    issuer: "Cisco",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg"
  },
  {
    id: 4,
    title: "CCNA 1",
    issuer: "Cisco",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg"
  },
  {
    id: 5,
    title: "Network Security",
    issuer: "SENAI/SC",
    logo: senai
  },
  {
    id: 6,
    title: "Fundamentos de UX",
    issuer: "iTalents",
    logo: italents
  }
];

export const education = [
  {
    institution: "ETEC de Carapicuíba",
    course: "Técnico em Desenvolvimento de Sistemas",
    conclusion: "Conclusão: Dezembro 2026"
  },
  {
    institution: "Fatec de Carapicuíba",
    course: "Técnologo em Análise e Desenvolvimento de Sistemas",
    conclusion: "Conclusão Prevista: Dezembro 2027"
  }
];