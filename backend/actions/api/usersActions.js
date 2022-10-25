const User = require('../../../backend/database/models/user')


class UserActions {

    async getAllUser(req, res) {
        const doc = await User.find({})
        console.log(doc)
        res.status(200).json(doc)
    }

    async getUser(req, res) {
        const id = req.params.id
        const user = await User.findOne({
            _id: id
        })
        res.status(200).json(user)
    }



    async addUser(req, res) {
        const first_name = req.body.first_name;
        const body = req.body.body;

        let newUser

        try {
            newUser = new User({
                first_name,
                body
            })
            await newUser.save()
        }
        catch(err) {
            return res.status (422).json({message: err.message})
        }
        res.status(201).json(newUser)
    }




    putUser(req, res) {
        res.put('Edycja komentarza - uytkownika')
    }

    async deleteUser(req, res) {
        const id = req.params.id
        await User.deleteOne({
            _id: id
        })

        res.sendStatus(204)
    }
}

module.exports = new UserActions()