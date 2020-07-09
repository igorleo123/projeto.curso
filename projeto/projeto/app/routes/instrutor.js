
module.exports = function (app) {
    var controller = app.controllers.instrutor;

    app.post('/instrutor', controller.salvaInstrutor);
    app.get('/instrutores', controller.listaInstrutores);
    app.put('/instrutores', controller.alteraInstrutor);
    app.delete('/instrutores/:id', controller.removeInstrutor);
    app.get('/instrutores/:id', controller.obtemInstrutor);

};