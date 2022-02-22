FROM fusuf/kingamda-X:latest

RUN git clone https://github.com/NishNishendanidu/kingamda-Xwabot.git/root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
