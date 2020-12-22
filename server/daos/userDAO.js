const { user } = require('../config/db');

const emailRegex = /\S+@\S+\.\S+/;
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6})/;


module.exports = {

    signup (req, res) {

        let dataNewUser = req.body
    
        //checks if the email received is really an email
        if(!dataNewUser.email.match(emailRegex))
            return res.status(202).json('Email inválido.')
    
        else if(dataNewUser.password.length < 5)
            return res.status(202).json('A senha deve ter no mínimo 5 digitos')
    
        //if no errors are found, check if the email already exists, if not a new user is created
        user.findOne({email: dataNewUser.email}, (err, result) => {
            if(err)
                return res.status(500).json('Internal server error')
    
            else if(result !== null)
                return res.status(202).json('O email já está em uso')
    
            else {
                delete dataNewUser.confirmPassword
                new user(dataNewUser).save(err => 
                    err ?
                        res.status(202).json('Erro cadastrando usuário: ' + err) :
                        res.status(200).json('Instituição criada com sucesso!')
                )
            }
        })
    
       
    },

    update(req, res) {

        const data = req.body;
    
        if(!req.file){
            let changePassword = false;
    
            if(data['newPassword'] != null){
                changePassword = true
                if(data['newPassword'] != data['newPasswordConfirm'])
                    return res.status(202).json('Senhas não conferem')
    
                else if(data['newPassword'].length < 5)
                    return res.status(202).json('A senha deve ter no mínimo 5 digitos')
    
            }
            if(Object.keys(data).length == 1)
                return res.status(202).json('Você precisa atualizar no mínimo um campo!')
                
            user.findOne({_id: decodeJWT(req.headers['authorization']._id)}, (err, result) => {
                if(err)
                    return res.status(500).json('Internal server error!')
    
                if(data.password == result.password){
                    if(changePassword){
                        data['password'] = data['newPassword']
                        delete data ['newPassword']
                        delete data ['newPasswordConfirm']
                    }
    
                    user.updateOne({_id: decodeJWT(req.headers['authorization']._id)},data)
                        .then(response => {
                            user.findOne({_id: decodeJWT(req.headers['authorization']._id)}, (err, result) =>
                                res.status(200).json({result, token: getJWT(result.toJSON()) })
                            )
                        }).catch(err => res.status(202).json('Internal server error!'))
                } else
                    return res.status(202).json('Senha Incorreta!')
            })
        }
    
    },

    get(req, res) {
        user.find()
        .select('fantasyName responsiblePerson email')
        .exec((err, response) => {
            if(err) {
                console.log(err);
                return res.status(500).json("Error on server side");
            }
            return res.status(200).json(response);
        });
    },

    async delete(req, res) {
        const id = req.params.id;
        const userData = await user.findByIdAndDelete(id);

        let msg;
        if(userData === null) {
            msg = 'Invalid ID';
            res.status(202);
        }else{
            msg = 'Usuário Deletado';
            res.status(200);
        }

        return res.json({msg});
    }

}