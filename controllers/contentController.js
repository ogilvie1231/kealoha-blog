const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.ContentModel
        .find({ category: req.params.id })
        .then(dbModel => res.json(dbModel))
        .catch({
            if (error) {
                throw error
            }
        });

    },
    findById: function(req, res) {
        db.ContentModel
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    create: function(req, res) {
        // console.log('db: ', db)
        // console.log('contentModel: ', ContentModel)
        // console.log('req: ', req)
        // console.log('res: ', res)
        db.ContentModel
        .create(req.body.newContent)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    update: function(req, res) {
        db.ContentModel
        .findOneAndUpdate({_id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    remove: function(req, res) {
        db.ContentModel
        .findById({_id: req.params.id})
        .then(dbModel => dbModel.deleteOne())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }
};