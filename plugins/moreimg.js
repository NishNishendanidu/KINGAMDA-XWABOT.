/* Codded by @afnanplk - farhandqz
re edited by BADBMODER
Badboy
*/

const Badboy = require('../events');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

if (Config.WORKTYPE == 'private') {

Badboy.addCommand({pattern: 'moretxt', fromMe: true, desc: 'more txtit commands'}, (async (message, match) => {
  
  await message.sendMessage('\n\n\n📱command : .break\n💎desc : change your text to wall breaking image.\n\n📱command : .phub\n💎desc : change your text into pornhub logo.\n🏷️example : .phuh BOT;X.\n\n📱command : .blood\n💎desc : change your text frozen blood on a glass\n\n📱command : .1917\n💎desc : change your text to a 1917 model image\n\n📱command : .maskman\n💎desc : change your text to mask man bg\n🏷️example : .avengers its;BOT X.\n\n📱command : .boxed\n💎desc : change your text to 3d boxed design\n\n📱command : .window\n💎desc : write your text on a foggy window \n\n📱command : .skywal\n💎desc : random sky wallpaper with given text\n\n📱command : .holo\n💎desc : change your text to holo design\n\n📱command : .drop\n💎desc : change your text into rain water drop.n\n📱command : .flame\n💎desc : text with fire effect.\n\n📱command : .vtext\n💎desc : text to video.\n\n📱command : .ptext\n💎desc : text to video.\n\n📱command : .colortext\n💎desc : text to colorfull video\n\n📱command : .cloud\n💎desc : text on cloud\n\n📱command : .2ninja\n💎desc : random ninja logo with given name.');
  
}));

Badboy.addCommand({pattern: 'break ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=x2RjJIcchXaUJEO8gurQU0Kdrun&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg })

}));
  
  Badboy.addCommand({pattern: 'phub ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/ph?text=${topText}&text2=${bottomText}&APIKEY=65654c74a7169de8`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.AFN})

    }));
  
   Badboy.addCommand({pattern: 'blood ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/bloodontheroastedglass?text=${match[1]}&APIKEY=65654c74a7169de8`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
  Badboy.addCommand({pattern: '1917 ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/1917?text=${match[1]}&APIKEY=c809c9b2f07400c2`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
   Badboy.addCommand({ pattern: 'maskman?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/anonymhacker?apikey=990580a2e31add15990665b0&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

    }));
  
   
         Badboy.addCommand({pattern: 'boxed ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=Ekqqy3DmxtTHPAuA7inIHpxjFIC&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

}));
  
  Badboy.addCommand({pattern: 'ffire ?(.*)', fromMe: true, dontAddCommandList: false, desc: 'add your text to random freefire logo'}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=Ekqqy3DmxtTHPAuA7inIHpxjFIC&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

}));
  
  Badboy.addCommand({pattern: 'window ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`http://lolhuman.herokuapp.com/api/ephoto1/wetglass?apikey=5a6dac45b721fc4298b40b81&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
   Badboy.addCommand({pattern: 'skywal ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`http://docs-jojo.herokuapp.com/api/galaxywp?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg ,caption: Config.AFN})

}));
  
   Badboy.addCommand({pattern: 'holo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/holographic3d?text=${match[1]}&APIKEY=c809c9b2f07400c2`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

    Badboy.addCommand({pattern: '2ninja ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg })

   }));
  
   Badboy.addCommand({pattern: 'drop ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=x2RjJIcchXaUJEO8gurQU0Kdrun&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   Badboy.addCommand({pattern: 'cloud ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/cloudtext?text=${match[1]}&APIKEY=90308f042eac38b7`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

 Badboy.addCommand({pattern: 'emo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        
      if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }
        
      var uri = encodeURI(match[1]);
  
      var ttinullimage = await axios.get('https://api.zeks.xyz/api/emoji-image?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&emoji='+ uri, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg})
  
    }));

    Badboy.addCommand({pattern: 'flame ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/photooxy/flaming?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

    Badboy.addCommand({pattern: 'vtext ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/retro?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: Config.AFN})

    }));

    Badboy.addCommand({pattern: 'ptext ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/poly?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: Config.AFN})

    }));

    Badboy.addCommand({pattern: 'colortext ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/colorful?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: Config.AFN})

    }));
}

else if (Config.WORKTYPE == 'public') {

Badboy.addCommand({pattern: 'moretxt', fromMe: false, desc: 'more txtit commands'}, (async (message, match) => {
  
  await message.sendMessage('\n\n\n📱command : .break\n💎desc : change your text to wall breaking image.\n\n📱command : .phub\n💎desc : change your text into pornhub logo.\n🏷️example : .phuh BOT;X.\n\n📱command : .blood\n💎desc : change your text frozen blood on a glass\n\n📱command : .1917\n💎desc : change your text to a 1917 model image\n\n📱command : .avengers\n💎desc : change your text to avangers logo\n🏷️example : .avengers its;BOT X.\n\n📱command : .boxed\n💎desc : change your text to 3d boxed design\n\n📱command : .window\n💎desc : write your text on a foggy window \n\n📱command : .skywal\n💎desc : random sky wallpaper with given text\n\n📱command : .holo\n💎desc : change your text to holo design\n\n📱command : .drop\n💎desc : change your text into rain water drop.n\n📱command : .flame\n💎desc : text with fire effect.\n\n📱command : .vtext\n💎desc : text to video.\n\n📱command : .ptext\n💎desc : text to video.\n\n📱command : .colortext\n💎desc : text to colorfull video\n\n📱command : .cloud\n💎desc : text on cloud\n\n📱command : .2ninja\n💎desc : random ninja logo with given name.');
  
}));

Badboy.addCommand({pattern: 'break ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=x2RjJIcchXaUJEO8gurQU0Kdrun&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg })

}));
  
  Badboy.addCommand({pattern: 'phub ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/ph?text=${topText}&text2=${bottomText}&APIKEY=65654c74a7169de8`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: Config.AFN})

    }));
  
   Badboy.addCommand({pattern: 'blood ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/bloodontheroastedglass?text=${match[1]}&APIKEY=65654c74a7169de8`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
  Badboy.addCommand({pattern: '1917 ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/1917?text=${match[1]}&APIKEY=c809c9b2f07400c2`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
   Badboy.addCommand({ pattern: 'maskman?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/anonymhacker?apikey=990580a2e31add15990665b0&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
   
         Badboy.addCommand({pattern: 'boxed ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=Ekqqy3DmxtTHPAuA7inIHpxjFIC&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

}));
  
  Badboy.addCommand({pattern: 'ffire ?(.*)', fromMe: false, dontAddCommandList: false, desc: 'add your text to random freefire logo'}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=Ekqqy3DmxtTHPAuA7inIHpxjFIC&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

}));
  
  Badboy.addCommand({pattern: 'window ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`http://lolhuman.herokuapp.com/api/ephoto1/wetglass?apikey=5a6dac45b721fc4298b40b81&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
  
   Badboy.addCommand({pattern: 'skywal ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`http://docs-jojo.herokuapp.com/api/galaxywp?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg ,caption: Config.AFN})

}));
  
   Badboy.addCommand({pattern: 'holo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/holographic3d?text=${match[1]}&APIKEY=c809c9b2f07400c2`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

    Badboy.addCommand({pattern: '2ninja ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg })

   }));
  
   Badboy.addCommand({pattern: 'drop ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=x2RjJIcchXaUJEO8gurQU0Kdrun&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
   Badboy.addCommand({pattern: 'cloud ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.xteam.xyz/textpro/cloudtext?text=${match[1]}&APIKEY=90308f042eac38b7`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

 Badboy.addCommand({pattern: 'emo ?(.*)', fromMe: false, desc: 'emogi to png'}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        
      if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }
        
      var uri = encodeURI(match[1]);
  
      var ttinullimage = await axios.get('https://api.zeks.xyz/api/emoji-image?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&emoji='+ uri, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg})
  
    }));

    Badboy.addCommand({pattern: 'flame ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/photooxy/flaming?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

    Badboy.addCommand({pattern: 'vtext ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/retro?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: Config.AFN})

    }));

    Badboy.addCommand({pattern: 'ptext ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/poly?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: Config.AFN})

    }));

    Badboy.addCommand({pattern: 'colortext ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://xteam.xyz/videomaker/colorful?text=${match[1]}&APIKEY=d9f297dbf7b0bbf4`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.video, {mimetype: Mimetype.mp4, caption: Config.AFN})

    }));
    
    Badboy.addCommand({pattern: 'wanted ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/wanted/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
    
    Badboy.addCommand({ pattern: '2ttp ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://api.xteam.xyz/ttp?file&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0").replace(/#/g, "\n")}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail:"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" })

    }));

    Badboy.addCommand({ pattern: '2attp ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

    var ttinullimage = await axios.get(`https://api.xteam.xyz/attp?file&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0").replace(/#/g, "\n")}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp,quoted : message.data})

    }));
    
    Badboy.addCommand({pattern: 'page ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://zenzapi.xyz/api/image/nulis?text=${match[1]}&apikey=07d3f898a6`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '```HERE IT IS```'})

    }));

    Badboy.addCommand({pattern: 'ycm ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://zenzapi.xyz/api/image/ytcomment?image=https://i.ibb.co/KjSBWx4/PicsArt_08-08-12.27.04.jpg&text=${bottomText}&username=${topText}&apikey=07d3f898a6`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
    
   Badboy.addCommand({pattern: 'phc ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://zenzapi.xyz/api/image/phcomment?image=https://i.ibb.co/KjSBWx4/Pics-Art-02-07-11-45-03.jpg&text=${bottomText}&username=${topText}&apikey=07d3f898a6`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

    }));
    
    Badboy.addCommand({pattern: 'botc ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD);

    var webimage = await axios.get(`https://zenzapi.xyz/api/image/botcomment?text=${match[1]}&apikey=07d3f898a6`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.AFN})

    }));

    Badboy.addCommand({ pattern: 'delete ?(.*)', fromMe: true, desc: "make photo effec" }, async (message, match) => {
    
    if (match === '') return await message.sendMessage('give me a url')
        
    const { buffer } = await getBuffer(`https://zenzapi.xyz/api/image/delete?image=${match}&apikey=SPARK-SHADOW`)
    
    await message.sendMessage(buffer, { Mimetype: Mimetype.jpg }, MessageType.image, {quoted: message.data})
    
    });
   
    Badboy.addCommand({ pattern: 'jail ?(.*)', fromMe: true, desc: "make jail photo effec" }, async (message, match) => {
    
    if (match === '') return await message.sendMessage('give me a url')
        
    const { buffer } = await getBuffer(`https://zenzapi.xyz/api/image/jail?image=${match}&apikey=SPARK-SHADOW`)
        
    await message.sendMessage(buffer, { Mimetype: Mimetype.jpg }, MessageType.image, {quoted: message.data})

    });

    Badboy.addCommand({ pattern: 'gta ?(.*)', fromMe: true, desc: "make gta poster photo effec" }, async (message, match) => {
    
    if (match === '') return await message.sendMessage('give me a url')
        
    const { buffer } = await getBuffer(`https://zenzapi.xyz/api/photooxy/gtaposter?image=${match}&apikey=SPARK-SHADOW`)
       
    await message.sendMessage(buffer, { Mimetype: Mimetype.jpg }, MessageType.image, {quoted: message.data})

    });

    Badboy.addCommand({ pattern: 'passed ?(.*)', fromMe: true, desc: "make mission passed photo effec" }, async (message, match) => {
    
    if (match === '') return await message.sendMessage('give me a url')
        
    const { buffer } = await getBuffer(`https://zenzapi.xyz/api/image/passed?image=${match}&apikey=SPARK-SHADOW`)
       
    await message.sendMessage(buffer, { Mimetype: Mimetype.jpg }, MessageType.image, {quoted: message.data})

    });

    Badboy.addCommand({ pattern: 'contrast ?(.*)', fromMe: true, desc: "make contrast effect on photo" }, async (message, match) => {
    
    if (match === '') return await message.sendMessage('give me a url')
        
    const { buffer } = await getBuffer(`https://zenzapi.xyz/api/contrast?intensity=+1&image=${match}&apikey=SPARK-SHADOW`)
        
    await message.sendMessage(buffer, { Mimetype: Mimetype.jpg }, MessageType.image, {quoted: message.data})

    });

    Badboy.addCommand({ pattern: 'ccrop ?(.*)', fromMe: true, desc: "crop sticker in the shape of circle" }, async (message, match) => {
    
    if (match === '') return await message.sendMessage('give me a url')
       
    const { buffer } = await getBuffer(`https://zenzapi.xyz/api/circle?image=${match}&apikey=SPARK-SHADOW`)
       
    await message.sendMessage(buffer, { Mimetype: Mimetype.jpg }, MessageType.image, {quoted: message.data})

    });

    Badboy.addCommand({ pattern: 'gray ?(.*)', fromMe: true, desc: "edit photo as gray collor" }, async (message, match) => {
  
    if (match === '') return await message.sendMessage('give me a url')
        
    const { buffer } = await getBuffer(`https://zenzapi.xyz/api/greyscale?image=${match}&apikey=SPARK-SHADOW`)
    
    await message.sendMessage(buffer, { Mimetype: Mimetype.jpg }, MessageType.image, {quoted: message.data})
    
    });

 }
