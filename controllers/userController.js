const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.post = ((req,res,next) => {
    //instancia um nvo objeto (usuário)
    var user = new User();
    //setando os valores no objeto
    user.name = req.body.name;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = 
    user.save();

    res.status(200).send({
        message: "Usuário cadastrado com sucesso."
    })
});

exports.put = ((req,res,next) => {
    res.status(200).send({
        text: "Acessando API pela rota users"
    })
});

exports.delete = ((req,res,next) => {
    res.status(200).send({
        text: "Acessando API pela rota users"
    })
});