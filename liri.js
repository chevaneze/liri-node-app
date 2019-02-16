require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment"); 
var timeFormat = moment().format("ddd, MM/DD/YYYY");

let command = process.argv[2];
let userSong = process.argv[3];

function spotifySearch {
let spotify = new Spotify(keys.spotify);
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
console.log("Artist: " + response )
console.log("Track: " +response  ); 
console.log("Preview URL: " + response);
console.log("Album: "+response );
});

function movieSearch () {
axios.get("http://www.omdbapi.com/?t=" + userMovie + "&y=&plot=short&apikey=trilogy").then(
 function (response) {

console.log("Title: " + response);
console.log("Release Year: " + response);
console.log("IMDB Rating: " + response);
console.log("Country Produced: " + response);
console.log("Language: " + response);
console.log("Plot: " + response);
console.log("Actors: " + response );

      } };
 function concertSearch () {
axios.get("https://rest.bandsintown.com/artists/" + userConcert + "/events?app_id=codingbootcamp").then(
 function (response) {
for (let i = 0; i < response.data.length; i++) {
console.log("Venue: "+response);
console.log("City: "+ response);
console.log("Date: " + response );
 }

};