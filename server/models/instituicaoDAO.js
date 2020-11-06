const {instituicao} = require('../config/db')

module.exports = {

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