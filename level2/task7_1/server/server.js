const express = require('express');
const fs = require('fs');
const cartRouter = require('./cartRouter');
const app = express();
const path = require('path');

app.use(express.json());
app.use('/', express.static(path.resolve(__dirname, '../public/')));
app.use('/api/cart', cartRouter);

const catalogJSONPath = path.resolve(__dirname, './db/products.json');

app.get('/api/products', (req, res) => {
    fs.readFile(catalogJSONPath, 'utf-8', (err, data) => {
        if (err) {
            res.send(JSON.stringify({
                result: 0,
                text: err
            }));
        } else {
            res.send(data);
        }
    });
});

const port = process.env.PORT || 4010;

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});