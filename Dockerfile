# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todo el proyecto
COPY . .

# Construye la aplicación
RUN npm run build

# Instala un servidor estático para servir la aplicación
RUN npm install -g serve

# Expone el puerto de la aplicación
EXPOSE 4174

# Comando para ejecutar la aplicación
CMD ["serve", "-s", "dist", "-l", "4174"]