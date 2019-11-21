# COEP-MIS-Feedback-Helper

A Simple Script to Ease your Feedback filling on COEP MIS Portal - http://portal.coep.org.in:9093/FeedBackResponse

## How to Use 

Follow the simple steps given below to ease the feedback process:

- Copy the code from the file `feedback.js` OR Simply copy it from below:

```
var rating = document.getElementsByClassName('FeedBackRatingID form-control')
var i;
for (i of rating) {
  i.value = '<Enter your value from (1-5) here>'
}
```
- **NOTE** - Plese do NOT forget to change the `<Enter your value from (1-5) here>` to the value from 1-5. <br>
The rating mapping is provided below.
- Go to the feedback filling link - http://portal.coep.org.in:9093/FeedBackResponse (The link may change in the future)
- Open the Developer menu by pressing <kbd>F12</kbd> on your keyboard
- Paste the code copied from the file into the console tab in the developer tools
- Press <kbd>Enter</kbd> to see your ratings autofilled!

### Ratings

Use one of the values from 1 to 5 to replace the `<Enter your value from (1-5) here>`

- 1 - Poor
- 2 - Average
- 3 - Good
- 4 - Best
- 5 - Excellent

#### Don't forget to star the repo if you liked it! :)
