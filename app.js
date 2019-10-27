const express = require('express');
const PORT = 8000;
const app = express();

const images = [
  { url: "./static/assets/icons/1.jpg", name: "Mountains", description: "Mountains amoung the clouds, covered in snow", thumbnail: "../thumbnail/1.jpg" },
  { url: "./static/assets/icons/2.jpg", name: "Beach", description: "Sandy beach from the perspective of a bird's eye", thumbnail: "../thumbnail/1.jpg" },
  { url: "./static/assets/icons/3.jpg", name: "Flat Iron Building", description: "The iconic building in New York", thumbnail: "../thumbnail/1.jpg" },
  { url: "./static/assets/icons/4.jpg", name: "Atlantic Ocean", description: "The strong wind creating huge waves", thumbnail: "../thumbnail/1.jpg" },
  { url: "./static/assets/icons/5.jpg", name: "Morning Desert", description: "The chilly morning in the desert", thumbnail: "../thumbnail/1.jpg" },
  { url: "./static/assets/icons/6.jpg", name: "Desert", description: "During the day the temperature in the desert can be extremely high", thumbnail: "../thumbnail/1.jpg" },
  { url: "./static/assets/icons/7.jpg", name: "Night Desert", description: "At night in the desert the temperature decreases vastly", thumbnail: "../thumbnail/1.jpg" },
  { url: "./static/assets/icons/8.jpg", name: "Pacific Ocean", description: "The strong wids create extremely strong waves", thumbnail: "../thumbnail/1.jpg" }
];

for (let i = 6; i <= images.length - 1; i++) {
  console.log('File' + (i + 1) + ' : ' + images[i].name);

  app.get('/', (req, res) => {
    req.query.name;
    req.query.imgindex;
    req.query.description;
    req.query.next;
    req.query.previous;
    
    res.render('index.ejs', { 
      name: images[i].name, 
      imgindex: (i + 1),
      next: next(),
      previous: previous(),
      description: images[i].description
    });
  });
}

app.use(express.static('static'));
app.set('view engine', 'ejs');

app.listen(PORT, () => {
  console.log(`\n*** Server is running ***\nAccess at localhost:${PORT}`);
});

// OnClick Functions

let nextStarter = 0;
function next() {
  let incrementor = 1;
  nextStarter += incrementor;
  console.log('onclick data of NEXT button: ' + nextStarter);
  return;
}

let previousStarter = 0;
function previous() {
  let decrementor = -1;
  previousStarter += decrementor;
  console.log('onclick data of PREV button: ' + previousStarter);
  return;
}

