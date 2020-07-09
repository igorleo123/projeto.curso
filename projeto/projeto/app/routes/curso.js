
module.exports = function (app) {
    var controller = app.controllers.curso;

    app.post('/cursos', controller.salvaCurso);
    app.get('/cursos', controller.listaCursos);
    app.put('/cursos', controller.alteraCurso);
    app.delete('/cursos/:id', controller.removeCurso);
    app.get('/cursos/:id', controller.obtemCurso);

};