# Use lightweight Node image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Expose app port
EXPOSE 8080

# Start the server
CMD ["node", "server"]