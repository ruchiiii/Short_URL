const express = require('express');
const path = require('path');
const urlRoutes = require('./routes/url.js');
const connectToMongoDB = require('./connect.js');
const  staticRouter = require('./routes/staticRouter.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use('/', staticRouter);

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() => {
    console.log('Connected to MongoDB');
}
).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

app.use('/url', urlRoutes);
app.get("/.well-known/appspecific/com.chrome.devtools.json", (req, res) => res.sendStatus(204));
const PORT = 3001;

app.listen(PORT, () => {
   console.log('Server started at port', PORT);
})