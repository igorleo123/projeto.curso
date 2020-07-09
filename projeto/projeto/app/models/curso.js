
var mongoose = require('mongoose');
module.exports = function () {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        ativo: {
			type: Boolean,
			required: false,
			default: function (v) {
				this.ativo = true
			}
		},
        cargaHoraria: {
            type: Number,
            required: true,
            enum : [40,80],
            default: 40 
        }, 
        valor: {
            type: Number,
            required: true,
            min: [this.valor >= 99]
        }, 
        dataInicio: {
            type: Date,
            required: true,
        }, 
        dataTermino: {
            type: Date,
            required: true,
            max: [this.dataInicio > this.dataTermino]
        }, 
            created: {
            type: Date,
            default: Date.now,
            required: false
        }, 
            instrutores: [{
            type: mongoose.Schema.ObjectId,
            ref: 'Instrutor',
            required: true
        }]
    });
    
    return mongoose.model('Curso', schema);
}

