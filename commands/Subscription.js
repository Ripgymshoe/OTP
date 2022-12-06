/*CMD
  command: Subscription
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: Anything Else?
  keyboard: Bank Log, Cash App, /start
  aliases: 
CMD*/

var buttons = [
  { title: "Cash App 1Day $20", url: "https://cash.app/launch/bitcoin/$bayseanw/U3rFTjO7uX" },
  { title: "Cash App 4Day $60", url: "https://cash.app/launch/bitcoin/$bayseanw/U3rFTjO7uX" },
  { title: "Cash App 1week $100", url: "https://cash.app/launch/bitcoin/$bayseanw/U3rFTjO7uX" },     
  { title: "Cash App 1Month $300", url: "https://cash.app/launch/bitcoin/$bayseanw/U3rFTjO7uX" },
  { title: "Cash App 2month $650", url: "https://cash.app/launch/bitcoin/$bayseanw/U3rFTjO7uX" },
  { title: "Cash App 4month $1,200", url: "https://cash.app/launch/bitcoin/$bayseanw/U3rFTjO7uX" },  
  { title: "Cash App 6months $2,000", url: "https://cash.app/launch/bitcoin/$bayseanw/U3rFTjO7uX" },  
  { title: "Cash App Lifetime $,5000", url: "https://cash.app/launch/bitcoin/$bayseanw/U3rFTjO7uX" },

]

Bot.sendInlineKeyboard(
  buttons,
  "Please select membership. After purchase, contact Admin for authentication Key" ); 
