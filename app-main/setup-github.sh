#!/bin/bash

echo "🚀 Configurando repositório GitHub para o Portfólio"
echo "=================================================="
echo ""

# Cores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

cd /app/frontend

# Inicializar git se não existir
if [ ! -d ".git" ]; then
    echo -e "${BLUE}📦 Inicializando repositório Git...${NC}"
    git init
    git branch -M main
fi

# Adicionar arquivos
echo -e "${BLUE}📝 Adicionando arquivos...${NC}"
git add .

# Commit
echo -e "${BLUE}💾 Fazendo commit...${NC}"
git commit -m "🎉 Portfólio Isabela Costa Nunes - React Portfolio" || echo "Nada para commitar"

echo ""
echo -e "${GREEN}✅ Repositório preparado!${NC}"
echo ""
echo "📋 Próximos passos:"
echo "1. Crie um repositório no GitHub: https://github.com/new"
echo "2. Nome sugerido: portfolio-isabela-nunes"
echo "3. Execute os comandos:"
echo ""
echo -e "${BLUE}git remote add origin https://github.com/isacosta15/portfolio-isabela-nunes.git${NC}"
echo -e "${BLUE}git push -u origin main${NC}"
echo ""
