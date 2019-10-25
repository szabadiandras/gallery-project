const express = require('express');
const PORT = 8000;
const app = express();

const images = [
  {url: "./static/assets/icons/1.jpg", name: "Mountains", description: "Mountains amoung the clouds, covered in snow", thumbnail: "../thumbnail/1.jpg"},
  {url: "./static/assets/icons/2.png", name: "Beach", description: "Sandy beach from the perspective of a bird's eye", thumbnail: "../thumbnail/1.jpg"},
  {url: "./static/assets/icons/3.jpg", name: "Flat Iron Building", description: "The iconic building in New York", thumbnail: "../thumbnail/1.jpg"},
  {url: "./static/assets/icons/4.jpg", name: "Atlantic Ocean", description: "The strong wind creating huge waves", thumbnail: "../thumbnail/1.jpg"},
  {url: "./static/assets/icons/5.jpeg", name: "Morning Desert", description: "The chilly morning in the desert", thumbnail: "../thumbnail/1.jpg"},
  {url: "./static/assets/icons/6.jpeg", name: "Desert", description: "During the day the temperature in the desert can be extremely high", thumbnail: "../thumbnail/1.jpg"},
  {url: "./static/assets/icons/7.jpeg", name: "Night Desert", description: "At night in the desert the temperature decreases vastly", thumbnail: "../thumbnail/1.jpg"},
  {url: "./static/assets/icons/8.jpg", name: "Pacific Ocean", description: "The strong wids create extremely strong waves", thumbnail: "../thumbnail/1.jpg"}
]

app.use(express.static('static'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(PORT, () => {
  console.log(`\n*** Server is running ***\nListening on port ${PORT}`);
});

//object