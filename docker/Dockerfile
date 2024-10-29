# Usar uma imagem base
FROM node

# Criar um diretório para a aplicação
WORKDIR /usr/src/app

# Copiar os arquivos package.json e package-lock.json
COPY ../backend/package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos da aplicação
COPY ../backend .

# Expor a porta que a aplicação irá rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "./backend/server.mjs"] 
