const express = require('express');
const connectDB = require('./config/database.config');
const userRoutes = require('./routes/product.routes');
const path = require('path');

const app = express();

connectDB();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.set('views', path.join(__dirname, 'views')); // Cấu hình đường dẫn tới thư mục views
app.set('view engine', 'ejs');

app.use('/', userRoutes);

const POST = 3000;
app.listen(POST,()=>{
    console.log(`seveer in runing on port ${POST}`);
});