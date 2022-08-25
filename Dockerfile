FROM node:16-buster-slim

WORKDIR /usr/src/mongo-maria-poc-api

COPY ./ ./

RUN npm install 

CMD ["/bin/bash"]