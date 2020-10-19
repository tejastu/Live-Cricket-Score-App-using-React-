const API_KEY = "2ddrPiV5NoRO0j2elb9ZqE4aRFg1";
const News_KEY = "e5623c8b167045c3a1dd5925095a8824";  

//get all the matches
export const getMatches = () => {
   const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;

   return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log("ERROR : ", error));
};

export const getMatchDetail = (id) => {
   const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;
   return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error));
};

export const getNews = () => {
   const link = `http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${News_KEY}`;

   return fetch(link)
   .then((response) => response.json())
   .catch((error) => console.log("ERROR: ", error));
}
