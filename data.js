// data related with axios goes here
const BASE_DATA_URL = "https://api.foursquare.com/v3/places/";
const API_KEY = "fsq3bzBRnEE5HLqGM3bDBptK7/LlEConGGlgT0reewUQ/Ok=";

const headers = {
  //l7 basically telling 4square api server that the format of data we are sending is JSON
  Accept: "application/json",
  Authorization: API_KEY,
};

async function main() {
  let ll = "1.3521,103.8198"; // for leaflet , lat lng is an array , for foursquare  long lat

  let response = await axios.get(BASE_DATA_URL + "search", {
    headers: headers,
    params: { "ll": ll, 
        v: "20210903", 
        "query": "chicken rice", 
        "radius": 25000 ,
        "limit":50,},
  });
  console.log(response.data);
}
main();
