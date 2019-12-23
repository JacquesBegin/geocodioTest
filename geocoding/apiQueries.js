// Example queries:
// https://api.geocod.io/v1.4/geocode?q=1109+N+Highland+St%2c+Arlington+VA&api_key=YOUR_API_KEY
// https://api.geocod.io/v1.4/geocode?street=1109+N+Highland+St&city=Arlington&state=VA&api_key=YOUR_API_KEY

require('dotenv').config()
let api_key = `&api_key=${process.env.API_KEY}`;

let singleQueryURL = "https://api.geocod.io/v1.4/geocode";

// URL Parameters
let street = "street=";
let city = "city=";
let state = "state=";
let postal_code = "postal_code=";
let country = "country";
let limit = "limit=" // Used to limit the number of results for a given address

