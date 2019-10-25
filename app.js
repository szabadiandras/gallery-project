const express = require('express');
const PORT = 8000;
const app = express();

// const images = [
//   {url: }
// ]

app.use(express.static('./static/style.css'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(PORT, () => {
  console.log(`\n*** Server is running ***\nListening on port ${PORT}`);
});

//object