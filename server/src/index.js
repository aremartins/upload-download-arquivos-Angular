const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');

const app = express();
app.arguments(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cors = {
  origin: '*',
  optionsSuccessStatus: 200,
}
app.use(cors(corsOptions))

const multipartMiddleware = multipart({ uploadDir: './uploads' });
app.post('/upload', multipartMiddleware, (req, res)=> {
  const files = req.files;
  console.log(files)
  req.json({ message: files })
} )

app.use((err, req, res, next) => req.json({error: err.message}))

app.listen(8000, () => {
  console.log('Server is running on port 8000');
})
