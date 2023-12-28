const ProductController = require('../controllers/product.controller');
module.exports = (app) => {
    app.get('/products', ProductController.findAllProducts);
    app.get('/product/:id', ProductController.findOneProduct);
    app.post('/products', ProductController.CreateNewProduct);
    app.put('/product/edit/:id', ProductController.updateProduct);
    app.delete('/product/:id', ProductController.deleteProduct);
}



