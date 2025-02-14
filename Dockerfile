FROM node:22 as build

# Define diretório de trabalho
WORKDIR /app

# Copia os arquivos de configuração e dependências
COPY package.json package-lock.json ./

# Instala dependências
RUN npm ci --omit=dev

# Copia o código da aplicação
COPY . .

# Compila a aplicação Angular para produção
RUN npm run build -- --configuration=production

# Etapa final: Servidor Nginx
FROM nginx:alpine

# Copia os arquivos do build Angular para o Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Remove configuração padrão e adiciona a customizada
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta usada pelo Nginx
EXPOSE 80

# Comando de inicialização
CMD ["nginx", "-g", "daemon off;"]
