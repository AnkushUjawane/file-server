FROM node:18-bullseye

WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of code
COPY . .

# Create required folders
RUN mkdir -p uploads logs

EXPOSE 5000

CMD ["node", "server.js"]