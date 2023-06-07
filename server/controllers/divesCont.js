const {User} = require('../models/user')
const {Dive} = require('../models/dive')
const {Country} = require('../models/country')

module.exports = {
    getDives: async (req, res) => {
        const {id} = req.params
        try {
            const dives = await Dive.findAll({
                where: {userId: id},
                include: [{
                    model: Country
                }]
            })
            res.status(200).send(dives)
        } catch (err) {
            console.log(err)
            console.log('getDives not working')
            res.sendStatus(400)
        }
    },

    getDetails : async (req, res) => {
        try{
            const {id} = req.params
            const details = await Dive.findOne({
                where: {id: id},
                include: [{
                    model: Country
                }]
            })
            res.status(200).send(details)
        } catch(err) {
            console.log(err)
            res.sendStatus(400)
        }
    },
    addDive: async (req, res) => {
        try{
            const {diveSite, date, duration, maxDepth, visibility, img, notes, city, userId, countryId} = req.body 
            await Dive.create({
                diveSite,
                date,
                duration,
                maxDepth,
                visibility,
                img,
                notes,
                userId,
                countryId,
                city
            })
            res.sendStatus(200)
        }
        catch(error) {
            console.log(error)
            res.sendStatus(400)
        }
    },

    getAllCountries: async (req, res) => {
        try{
            const countries = await Country.findAll()
            res.status(200).send(countries)
        }
        catch(err) {
            console.log(err)
            res.sendStatus(400)
        }
    },

    filterCountry: async (req, res) => {
        const {id} = req.params
        try {
            const dives = await Dive.findAll({
                where: {userId: id},
                include: [{
                    model: Country
                }]
            })
            res.status(200).send(dives)
        } catch (err) {
            console.log(err)
            console.log('filter not working')
            res.sendStatus(400)
        }
    }
}