const {User} = require('../models/user')
const {Dive} = require('../models/dive')
const {Country} = require('../models/country')

module.exports = {
    // getDives: async (req, res) => {
    //     try {
    //         const dives = await Dive.findAll({

    //         })
    //     } catch (err) {
    //         console.log(error)
    //         console.log('getDives not working')
    //         res.sendStatus(400)
    //     }
    // },

    addDive: async (req, res) => {
        try{
            const {diveSite, date, duration, maxDepth, visibility, img, notes, userId, countryId} = req.body 
            await Post.create({
                diveSite,
                date,
                duration,
                maxDepth,
                visibility,
                img,
                notes,
                userId,
                countryId
            })
            res.sendStatus(200)
            return
        }
        catch(error) {
            console.log(error)
            res.sendStatus(400)
        }
    }
}