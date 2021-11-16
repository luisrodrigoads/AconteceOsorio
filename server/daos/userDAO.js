const { user, culturalEvent } = require('../config/db');

const emailRegex = /\S+@\S+\.\S+/;
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6})/;


module.exports = {

    signup (req, res) {

        let dataNewUser = req.body

        let paths = new Array()

        if(req.files)
            req.files.forEach(pic => paths.push(pic.filename))

        dataNewUser.otherPictures = paths

        if(req.body.areasOfExpertise)
            dataNewUser.areasOfExpertise = JSON.parse(req.body.areasOfExpertise);
    
        if(req.body.targetAudience)
            dataNewUser.targetAudience = JSON.parse(req.body.targetAudience);

        if(req.body.portfolioLinks)
            dataNewUser.portfolioLinks = JSON.parse(req.body.portfolioLinks);

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
                        res.status(200).json('Usuário criado com sucesso!')
                )
            }
        })
    
       
    },

    update(req, res) {

        let data = req.body;
        
        let paths = new Array()
        if (req.files) {
            req.files.forEach(pic => paths.push(pic.filename));
        }
       
        let changePassword = false;

        if(data['newPassword'] != null){
            changePassword = true
            if(data['newPassword'] != data['newPasswordConfirm'])
                return res.status(202).json('Senhas não conferem')

            else if(data['newPassword'].length < 5)
                return res.status(202).json('A senha deve ter no mínimo 5 digitos')

        }

//        if(Object.keys(data).length == 0)
//            return res.status(202).json('Você precisa atualizar no mínimo um campo!')
            
        delete(data.otherPictures);
        user.findOneAndUpdate({_id: req.decoded._id}, {...data, $push:{otherPictures: paths} }, {new: true}, (err, result) => {
            if(err)
                return res.status(500).json('Internal server error!')
            
            return res.status(200).json(result)
        }) 
        
    
    },


    updateImg(req, res) {
        
        if (req.file)
        user.findOneAndUpdate({_id: req.decoded._id}, {profilePhoto: req.file.filename}, {new: true}, (err, result) => {
            if(err)
                return res.status(500).json('Internal server error!')

            console.log(result);
            return res.status(200).json(result)

        }) 
        

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

    
    disableUser(req, res){
        user.updateOne({_id: req.decoded._id},
        {
            accountActivation: false
        })
        .then(response => {
            user.findOne({_id: req.decoded._id}, (err, result) =>
                res.status(200).json(result)
            )
        }).catch(err => res.status(202).json('Internal server error!'))

    },

    enableUser(req, res){
        user.updateOne({_id: req.decoded._id},
        {
            accountActivation: true
        })
        .then(response => {
            user.findOne({_id: req.decoded._id}, (err, result) =>
                res.status(200).json(result)
            )
        }).catch(err => res.status(202).json('Internal server error!'))

    },

    getAllArtist(req, res){
        user.find({userType: 'ARTIST'})
         .select('_id fantasyName phone address email userType profilePhoto facebook instagram spotify linkedin youtube otherLink otherPictures areasOfExpertise targetAudience portfolioLinks description')
         .exec((err, response) => {
            if(err) {
                console.log(err);
                return res.status(500).json("Error on server side - get artists");
            }
            return res.status(200).json(response);
        });
    },

    getAllInstitution(req, res){
        user.find({userType: 'INSTITUTION'})
         .select('_id fantasyName cnpj responsiblePerson phone address email institutionType userType instagram spotify linkedin youtube otherLink profilePhoto description')
         .exec((err, response) => {
            if(err) {
                console.log(err);
                return res.status(500).json("Error on server side - get artists");
            }
            return res.status(200).json(response);
        });
    },

    getAllCulturalPlace(req, res){
        user.find({userType: 'CULTURAL_PLACE'})
         .select('_id fantasyName cnpj responsiblePerson linkedInstitution address email chargingFee bathroom diaperChanger wheelchairAccessibility facebook instagram spotify linkedin youtube otherLink userType profilePhoto description otherPictures')
         .exec((err, response) => {
            if(err) {
                console.log(err);
                return res.status(500).json("Error on server side - get artists");
            }
            return res.status(200).json(response);
        });
    },

    getAllCulturalPromoter(req, res){
        user.find({userType: 'PROMOTER'})
         .select('_id fantasyName  phone email address linkedInstitution userType profilePhoto facebook instagram spotify linkedin youtube otherLink description')
         .exec((err, response) => {
            if(err) {
                console.log(err);
                return res.status(500).json("Error on server side - get artists");
            }
            return res.status(200).json(response);
        });
    },

    getInstitutions(req, res){
        user.find({userType: 'INSTITUTION'})
        .select('fantasyName')
        .exec((err, response) => {
           if(err) {
               console.log(err);
               return res.status(500).json("Error on server side - get artists");
           }
           return res.status(200).json(response);
       });
    },

    getCulturalPlaces(req, res){
        user.find({userType: 'CULTURAL_PLACE'})
        .select('fantasyName')
        .exec((err, response) => {
           if(err) {
               console.log(err);
               return res.status(500).json("Error on server side - get artists");
           }
           return res.status(200).json(response);
       });
    },

    delete(req, res) {
        const idUser = req.params.id;
        /*const userData = user.findByIdAndDelete(idUser);*/
        user
            .deleteOne({ _id : idUser})

            .exec((err, result) => {
                if(err) res.status(400).json(err);
                else {
                    culturalEvent.deleteMany({whoCreated: idUser});
                    res.status(200);
                    return res.json('Usuário deletado');
                }
            })

    }

}