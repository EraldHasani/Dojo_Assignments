const AuthorController= require("../controllers/author.contorller")

module.exports=(app) =>{

    app.get('/api/authors',AuthorController.findAll)
    app.get('/api/author/:id',AuthorController.findOne)
    app.post('/api/authors/new',AuthorController.create)
    app.patch('/api/author/edit/:id',AuthorController.update)
    app.delete('/api/author/:id',AuthorController.delete)
    app.patch('/api/author/:id',AuthorController.getOneAuthorAndAddReview)


}
