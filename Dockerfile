# Uses the node base image with the latest LTS version
FROM node:16
# Informs Docker that the container listens on the 
# specified network ports at runtime
EXPOSE 4000
# Copies index.js and the two package files from the local 
# directory to a new app directory on the container
COPY /src/index.ts package.json pnpm-lock.yaml  app/
# Changes working directory to the new directory just created
WORKDIR /app
#install pnpm
RUN curl -fsSL https://get.pnpm.io/install.sh | bash -
# Installs npm dependencies on container
RUN npm install
# Command container will actually run when called
CMD ["node", "index.ts"]