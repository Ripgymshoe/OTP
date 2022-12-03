/*CMD
  command: /EnterPassKey
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter Code In Next Message
  keyboard: /EnterPassKey
  aliases: 
CMD*/

var msg = "Access denied. Password is: `5467` /login"

if (message == "5467") {
  Bot.setProperty(
      "admin_chat",
       chat.chatid,
      "string"
  )

  msg = "You admin now. Please wait messages from users"
}

Bot.sendMessage(msg)

