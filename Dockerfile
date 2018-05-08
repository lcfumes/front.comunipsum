FROM node:8.4

WORKDIR /app

RUN apt-get update && apt-get install -y curl apt-transport-https && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn

COPY . .

RUN yarn install

RUN yarn build

RUN yarn global add serve

EXPOSE 5000

ENTRYPOINT serve -s build
