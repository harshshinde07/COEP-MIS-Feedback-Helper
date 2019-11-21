/*  Simple code to auto fill the Feedback on COEP MIS
 *
 * Just change the value of variable i to give the feedback.
 * The values are as follows:
 * 1 - Poor
 * 2 - Average
 * 3 - Good
 * 4 - Best
 * 5 - Excellent
 */

var rating = document.getElementsByClassName('FeedBackRatingID form-control')
var i;
for (i of rating) {
  i.value = '<Enter your value from (1-5) here>'
}