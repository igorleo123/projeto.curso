
module.exports = function (app) {
    var controller = {};
    var instrutor = app.models.instrutor;


    controller.salvaInstrutor = function (req, res) {
        instrutor.create(req.body).then(
            function (instrutor) {
                res.status(201).json(instrutor)
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.listaInstrutores = function (req, res) {
        instrutor.find().exec().then(
            function (instrutor) {
                res.status(200).json(instrutor);
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.alteraInstrutor = function (req, res) {
        var _id = req.body._id;
        instrutor.findByIdAndUpdate(_id, req.body).exec().then(
            function (instrutor) {
                res.status(200).json(instrutor);
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.removeInstrutor = function (req, res) {
        var _id = req.params.id;
        instrutor.remove({"_id": _id}).exec().then(
            function (instrutor) {
                res.status(204).end();
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.obtemInstrutor = function (req, res) {
        var _id = req.params.id;
        instrutor.findById(_id).exec().then(
            function (instrutor) {
                if (!instrutor) {
                    res.status(404).end();
                } else {
                    res.status(200).json(instrutor);
                }
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    return controller;
}
