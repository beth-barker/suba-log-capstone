const {User} = require('../models/user')
const bcrypt = require('bcrypt')

module.exports = {
    register: async (req, res) => {
        console.log('registeredddd')
        try{
            const {username, password} = req.body

            let foundUser = await User.findOne({where: {username}})
            console.log(foundUser)
            if(foundUser) {
                alert('That username is already taken!')
                res.status(400).send("That username is already taken!")
            } else {
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(password, salt)

                const newUser = await User.create({
                    username,
                    hashedPass: hash
                })

                req.session.user = {
                    userId: newUser.dataValues.id,
                    username: newUser.dataValues.username

                }

                res.status(200).send(req.session.user)
            }
        } catch(err){
            console.log(err)
            res.sendStatus(500);
        }
    },
    login: async (req, res) => {
        console.log('logged innn', req.session)
        try{
            const {username, password} = req.body

            let foundUser = await User.findOne({where: {username}})
            if(foundUser) {
               const isAuthenticated = bcrypt.compareSync(password, foundUser.hashedPass)

               if(isAuthenticated){
                req.session.user = {
                    userId: foundUser.dataValues.id,
                    username: foundUser.dataValues.username

                }

                res.status(200).send(req.session.user)
               } else {
                res.status(400).send('That password is incorrect')
               }
            } else {
                res.status(400).send('No user with that username exists')
            }
        } catch(err){
            console.log(err)
            res.sendStatus(500);
        }

    },
    checkUser: (req, res) => {
        console.log(req.session)
        if(req.session.user){
            res.status(200).send(req.session.user)
        } else {
            res.status(400).send('No user found')
        }
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }

}