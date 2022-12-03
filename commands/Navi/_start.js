/*CMD
  command: /start
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Navi

  <<ANSWER
🥾GymshoeOTP Subscription Prices 🎊

1Day | $20
4Day | $60
1week | 100$
1Month | $300$
2Month | $650
4Month | $1,200
6Month | $2,000
Lifetime | $5,000

Our channel - https://t.me/GymshoeOTP

Admin - @GymshoeAdmin 
  ANSWER
  keyboard: Purchase, /Help
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
  "Please select membership. After purchase, contact Admin for authentication Key "
  )
// Install the Java helper library from twilio.com/docs/libraries/java
import java.net.URI;
import java.net.URISyntaxException;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Call;
import com.twilio.type.PhoneNumber;

public class MakePhoneCall {
    // Get your Account SID and Auth Token from https://twilio.com/console
    // To set up environment variables, see http://twil.io/secure
    public static final String ACCOUNT_SID = System.getenv("TWILIO_ACCOUNT_SID");
    public static final String AUTH_TOKEN = System.getenv("TWILIO_AUTH_TOKEN");

    public static void main(String[] args) throws URISyntaxException {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);

        String from = "+15017122661";
        String to = "+14155551212";

        Call call = Call.creator(new PhoneNumber(to), new PhoneNumber(from),
                new URI("http://demo.twilio.com/docs/voice.xml")).create();

        System.out.println(call.getSid());
    }
}

