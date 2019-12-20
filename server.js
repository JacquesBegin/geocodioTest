require('dotenv').config()

const Geocodio = require('geocodio-library-node');
const geocoder = new Geocodio(process.env.API_KEY);

geocoder
  .geocode('111 Main St, Dansville, NY')
  .then(response => {
    console.log(response.results[0].location);
  })
  .catch(error => {
    console.error(error);
  });


  // geocoder
  // .geocode('1109 N Highland St, Arlington, VA')
  // .then(response => {
  //   console.log(response);
  // .catch(error => {
  //   console.error(error);
  // });