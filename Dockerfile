
# Use official Node.js LTS image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package files first (to leverage caching)
COPY package*.json ./

# Install dependencies
RUN npm install



# Copy the rest of the app code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
