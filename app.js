$('#twitter-button').on('click', function() {
  OAuth.initialize('I7ocZ6F4fh2Tt4rhXs68Gd3XGS8');
  OAuth.popup('twitter').done(function(result) {
    console.log(result);
    // do some stuff with result
  });
  // Initialize with your OAuth.io app public key
  // OAuth.initialize('I7ocZ6F4fh2Tt4rhXs68Gd3XGS8');
  // // Use popup for OAuth
  // OAuth.popup('twitter').then(twitter => {
  //   console.log('twitter:', twitter);
  //   // Prompts 'welcome' message with User's email on successful login
  //   // #me() is a convenient method to retrieve user data without requiring you
  //   // to know which OAuth provider url to call
  //   twitter.me().then(data => {
  //     console.log('data:', data);
  //     alert(
  //       'Twitter says your email is:' +
  //         data.email +
  //         ".\nView browser 'Console Log' for more details"
  //     );
  //   });
  //   // Retrieves user data from OAuth provider by using #get() and
  //   // OAuth provider url
  //   twitter
  //     .get('/1.1/account/verify_credentials.json?include_email=true')
  //     .then(data => {
  //       console.log('self data:', data);
  //     });
  // });
});

$(document).ready = function() {};
