const Discord = require("discord.js")
const db = require("croxydb") 
exports.run = async (client, message, args) => {

  if (!args[0]) {

    const embed = new Discord.MessageEmbed() 

.setDescription("<:codesty_cross:844468546930606100> Bir argümant girmen lazım! `yaş` **|** `açıklama` **|** `durum` **|** `durum-emoji` **|** `banner` **|** `xbox` **|** `youtube` **|** `github`") 

.setColor("RED") 

} 

if(args[0] == "yaş") {

db.set(`yas_${message.author.id}`, args[1])

return message.inlineReply('<:calisiyor:798582407393312808> Yaşın ayarlandı!')

};

if(args[0] == "açıklama") {

db.set(`aciklama_${message.author.id}`, args.slice(1).join(" "))

return message.inlineReply('<:calisiyor:798582407393312808> Açıklama ayarlandı!')

};

if(args[0] == "durum") {

db.set(`durum_${message.author.id}`, args.slice(1).join(" "))

return message.inlineReply('<:calisiyor:798582407393312808> Durum ayarlandı!')

};

if(args[0] == "durum-emoji") {

db.set(`durume_${message.author.id}`, args[1])

return message.inlineReply('<:calisiyor:798582407393312808> Durum emoji ayarlandı!')

};

if(args[0] == "banner") {

db.set(`banner_${message.author.id}`, args[1])

return message.inlineReply('<:calisiyor:798582407393312808> Banner ayarlandı!')

};

if(args[0] == "xbox") {

db.set(`xbox_${message.author.id}`, args[1])

return message.inlineReply('<:calisiyor:798582407393312808> Xbox ayarlandı!')

};

if(args[0] == "youtube") {

db.set(`youtube_${message.author.id}`, args[1])

return message.inlineReply('<:calisiyor:798582407393312808> YouTube ayarlandı!')

};

if(args[0] == "github") {

db.set(`github_${message.author.id}`, args[1])

return message.inlineReply('<:calisiyor:798582407393312808> Github ayarlandı!')

};

} 

exports.conf = {

aliases: [] 

}

exports.help = {

name: "profil-ayarla" 

} 