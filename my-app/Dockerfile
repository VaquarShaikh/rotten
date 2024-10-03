# Stage 1: Build the application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and lock files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Install only production dependencies
RUN npm ci --only=production

# Stage 2: Serve the application with Nginx
FROM node:18-alpine AS runner

WORKDIR /app

# Copy production build from the builder stage
COPY --from=builder /app ./

# Expose the default Next.js port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
