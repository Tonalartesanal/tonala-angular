FROM node:8.9.4

USER node
RUN mkdir /home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
RUN npm install -g @angular/cli

USER root

# docker run -it -p 4200:4200 -v $(pwd):/app -w /app/tonala-angular/src --name tonala node-angular-cli:1.6.8 bash
# docker build -t node-angular-cli:1.6.8 .