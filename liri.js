require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment"); 
var timeFormat = moment().format("ddd, MM/DD/YYYY");

let command = process.argv[2];
let userSong = process.argv[3];
// Artist(s)

// * The song's name

// * A preview link of the song from Spotify

// * The album that the song is from

function spotifySearch {
let spotify = new Spotify(keys.spotify);
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
console.log("Artist: " +  )
console.log("Track: " +  ); 
console.log("Preview URL: " + );
console.log("Album: "+  );
});

};