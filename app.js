// $('#twitter-button').on('click', function() {
//   // Initialize with your OAuth.io app public key
//   OAuth.initialize('I7ocZ6F4fh2Tt4rhXs68Gd3XGS8');
//   // Use popup for OAuth
//   OAuth.popup('twitter').then(twitter => {
//     console.log('twitter:', twitter);
//     // Prompts 'welcome' message with User's email on successful login
//     // #me() is a convenient method to retrieve user data without requiring you
//     // to know which OAuth provider url to call
//     twitter.me().then(data => {
//       console.log('data:', data);
//       alert(
//         'Twitter says your email is:' +
//           data.email +
//           ".\nView browser 'Console Log' for more details"
//       );
//     });
//     // Retrieves user data from OAuth provider by using #get() and
//     // OAuth provider url
//     twitter
//       .get('/1.1/account/verify_credentials.json?include_email=true')
//       .then(data => {
//         console.log('self data:', data);
//       });
//     twitter.get('/1.1/friends/list.json?').then(data => {
//       console.log('friends:', data);
//     });
//   });
// });

$('#twitter-button').on('click', function() {
  $.ajax({
    url: 'http://api.twitter.com/1/statuses/home_timeline.json?callback=?',
    method: 'GET',
    dataType: 'jasonp'
  }).then(function() {
    console.log(hello);
  });
});

// $.getJSON(
//   'http://api.twitter.com/1/statuses/home_timeline.json?callback=http://127.0.0.1:5500/',
//   function(json) {
//     console.log(json);
//   }
// );
