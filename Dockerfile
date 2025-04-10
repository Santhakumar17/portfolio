# Use Node.js as the base image
FROM node:20-slim

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for caching dependencies)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project into the container
COPY . .

# Expose the default Vite port
EXPOSE 5173

# Start the application
CMD ["npm", "run", "dev", "--", "--host"]


# Use Node.js as the base image
#FROM node:18-alpine

# Set working directory inside the container
#WORKDIR /app

# Install dependencies more efficiently
#COPY package.json package-lock.json ./
#RUN npm ci  # More reliable than 'npm install' for reproducible builds

# Copy the application code after installing dependencies
#COPY . .

# Ensure node_modules are accessible
#RUN chown -R node /app

# Use non-root user for security
#USER node

# Expose the default Vite port
#EXPOSE 5173

# Start the application
#CMD ["npm", "run", "dev", "--", "--host"]