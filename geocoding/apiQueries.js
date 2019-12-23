// Example queries:
// https://api.geocod.io/v1.4/geocode?q=1109+N+Highland+St%2c+Arlington+VA&api_key=YOUR_API_KEY
// https://api.geocod.io/v1.4/geocode?street=1109+N+Highland+St&city=Arlington&state=VA&api_key=YOUR_API_KEY

require('dotenv').config()


let singleQueryURL = "https://api.geocod.io/v1.4/geocode";



let street = "";
let city = "";
let state = "";
let postal_code = "";
let country = "";

