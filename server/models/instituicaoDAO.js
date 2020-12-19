const { instituicao } = require('../config/db');

module.exports = {

    update(req, res) {

        const data = req.body;
    
        if(!req.file){
            let mudaSenha = false;
    
            if(data['novaSenha'] != null){
                mudaSenha = true
                if(data['novaSenha'] != data['novaSenhaConfirma'])
                    return res.status(202).json('Senhas não conferem')
    
                else if(data['novaSenha'].length < 5)
                    return res.status(202).json('A senha deve ter no mínimo 5 digitos')
    
            }
            if(Object.keys(data).length == 1)
                return res.status(202).json('Você precisa atualizar no mínimo um campo!')
                
            instituicao.findOne({_id: decodeJWT(req.headers['authorization']._id)}, (err, result) => {
                if(err)
                    return res.status(500).json('Internal server error!')
    
                if(data.senha == result.senha){
                    if(mudaSenha){
                        data['senha'] = data['novaSenha']
                        delete data ['novaSenha']
                        delete data ['novaSenhaConfirma']
                    }
    
                    instituicao.updateOne({_id: decodeJWT(req.headers['authorization']._id)},data)
                        .then(response => {
                            instituicao.findOne({_id: decodeJWT(req.headers['authorization']._id)}, (err, result) =>
                                res.status(200).json({result, token: getJWT(result.toJSON()) })
                            )
                        }).catch(err => res.status(202).json('Internal server error!'))
                } else
                    return res.status(202).json('Senha Incorreta!')
            })
        }
    
    },

    get(req, res) {
        instituicao.find()
        .select('nomeFantasia pessoaResponsavel email')
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
        const instituicaoData = await instituicao.findByIdAndDelete(id);

        let msg;
        if(instituicaoData === null) {
            msg = 'Invalid ID';
            res.status(202);
        }else{
            msg = 'Insituicao Deletada';
            res.status(200);
        }

        return res.json({msg});
    }

}