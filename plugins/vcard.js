const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Ktb.addCommand({ pattern: 'shazz ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

//coded by saidali
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Badboy moder [Badboy]\n' // full name
            + 'ORG:BADBMODER;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=+12052932125:+919645697828\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "BADBMODER [Badboy]", vcard: vcard}, MessageType.contact)
}))
