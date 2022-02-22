/* Copyright (C) 2021 fasil-vkn.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Fasil-vkn Paathu
re edited by BADBMODER
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'mascot', fromMe: true, desc: 'random pubg charector images'}, (async (message, match) => {

    var r_text = new Array ();

r_text[0] = "https://i.ibb.co/c2Zgj5G/0381c39b0aa8ff813412523265d775bb.png";
r_text[1] = "https://i.ibb.co/PNtYcpp/0ae45200ed62a5aeacff3c5987ca7033.png";
r_text[2] = "https://i.ibb.co/R0gh8G6/5d0661e8d98024b4912419240777c5c3.png";
r_text[3] = "https://i.ibb.co/yVTtXJ0/79d799f4d80d36e50a4c64393420ae63.png";
r_text[4] = "https://i.ibb.co/Sr1rFD8/7f80d2b5725fc5a499e6a619529e23f2.png";
r_text[5] = "https://i.ibb.co/KWz3hYg/a6016272684f3712a9fdb0bac86a6115.png";
r_text[6] = "https://i.ibb.co/8zSVSCz/akm-gun-5354229-1280.png";
r_text[7] = "https://i.ibb.co/Bn4CCr1/bear-5730216-640.png";
r_text[8] = "https://i.ibb.co/JRDMDgH/d6df1daf756e3ab662946b95871ecc96.png";
r_text[9] = "https://i.ibb.co/ss6904D/IMG-20200829-095542-min.png";
r_text[10] = "https://i.ibb.co/zs8ZVFQ/IMG-20200829-095554-min.png";
r_text[11] = "https://i.ibb.co/kqQtJNR/IMG-20200829-095605-min.png";
r_text[12] = "https://i.ibb.co/myBPGhW/IMG-20200829-095616-min.png";
r_text[13] = "https://i.ibb.co/n14n1gP/IMG-20200829-095632-min.png";
r_text[14] = "https://i.ibb.co/9bjss53/IMG-20200829-095727-min.png";
r_text[15] = "https://i.ibb.co/nw7mCJv/joker-5354262-960-720.png";
r_text[16] = "https://i.ibb.co/VwZs5k3/man-5730206-1280.png";
r_text[17] = "https://i.ibb.co/jbwH2jN/mascot-4800858-1280.png";
r_text[18] = "https://i.ibb.co/0Xn7Py4/Mascot-Gaming-Pubg-Mobile-Character-Season-12-5354254.webp";
r_text[19] = "https://i.ibb.co/D7dFBZ5/PUBG-Character-PNG-Download-Image.png";
r_text[20] = "https://i.ibb.co/f90sYhm/Pubg-Mascot-Logo-1-1024x1024.png";
r_text[21] = "https://i.ibb.co/mqzVr8x/Pubg-Mascot-Logo-17-988x1024.png";
r_text[22] = "https://i.ibb.co/CKw6Yt1/Pubg-Pubg-Mobile-Pubg-Mascot-Pigeon-Joker-Mascot-5224888.png";
r_text[23] = "https://i.ibb.co/mG75hpH/Pubg-Mascot-01-min.png";
r_text[24] = "https://i.ibb.co/Z8KVmdL/Pubg-Mascot-07-min.png";

var i = Math.floor(25*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '✯ɪͥᴛͭsᷤᴍͫᴇͤ☚⃟፝✪𝙱𝙰𝙳𝙱𝙾𝚈✯'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'mascot', fromMe: false, desc:'random pubg charector images '}, (async (message, match) => {

    var r_text = new Array ();

r_text[0] = "https://i.ibb.co/c2Zgj5G/0381c39b0aa8ff813412523265d775bb.png";
r_text[1] = "https://i.ibb.co/PNtYcpp/0ae45200ed62a5aeacff3c5987ca7033.png";
r_text[2] = "https://i.ibb.co/R0gh8G6/5d0661e8d98024b4912419240777c5c3.png";
r_text[3] = "https://i.ibb.co/yVTtXJ0/79d799f4d80d36e50a4c64393420ae63.png";
r_text[4] = "https://i.ibb.co/Sr1rFD8/7f80d2b5725fc5a499e6a619529e23f2.png";
r_text[5] = "https://i.ibb.co/KWz3hYg/a6016272684f3712a9fdb0bac86a6115.png";
r_text[6] = "https://i.ibb.co/8zSVSCz/akm-gun-5354229-1280.png";
r_text[7] = "https://i.ibb.co/Bn4CCr1/bear-5730216-640.png";
r_text[8] = "https://i.ibb.co/JRDMDgH/d6df1daf756e3ab662946b95871ecc96.png";
r_text[9] = "https://i.ibb.co/ss6904D/IMG-20200829-095542-min.png";
r_text[10] = "https://i.ibb.co/zs8ZVFQ/IMG-20200829-095554-min.png";
r_text[11] = "https://i.ibb.co/kqQtJNR/IMG-20200829-095605-min.png";
r_text[12] = "https://i.ibb.co/myBPGhW/IMG-20200829-095616-min.png";
r_text[13] = "https://i.ibb.co/n14n1gP/IMG-20200829-095632-min.png";
r_text[14] = "https://i.ibb.co/9bjss53/IMG-20200829-095727-min.png";
r_text[15] = "https://i.ibb.co/nw7mCJv/joker-5354262-960-720.png";
r_text[16] = "https://i.ibb.co/VwZs5k3/man-5730206-1280.png";
r_text[17] = "https://i.ibb.co/jbwH2jN/mascot-4800858-1280.png";
r_text[18] = "https://i.ibb.co/0Xn7Py4/Mascot-Gaming-Pubg-Mobile-Character-Season-12-5354254.webp";
r_text[19] = "https://i.ibb.co/D7dFBZ5/PUBG-Character-PNG-Download-Image.png";
r_text[20] = "https://i.ibb.co/f90sYhm/Pubg-Mascot-Logo-1-1024x1024.png";
r_text[21] = "https://i.ibb.co/mqzVr8x/Pubg-Mascot-Logo-17-988x1024.png";
r_text[22] = "https://i.ibb.co/CKw6Yt1/Pubg-Pubg-Mobile-Pubg-Mascot-Pigeon-Joker-Mascot-5224888.png";
r_text[23] = "https://i.ibb.co/mG75hpH/Pubg-Mascot-01-min.png";
r_text[24] = "https://i.ibb.co/Z8KVmdL/Pubg-Mascot-07-min.png";

var i = Math.floor(25*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '✯ɪͥᴛͭsᷤᴍͫᴇͤ☚⃟፝✪𝙱𝙰𝙳𝙱𝙾𝚈✯'})

    }));
}
