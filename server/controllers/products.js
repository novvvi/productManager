var mongoose = require("mongoose");

const Product = mongoose.model('Product');

module.exports = {
    index: (req, res) => {
        Product.find({}, (err, product) => {
            if (err) {
                res.json({msg: "fail", errors: err});
            }
            else {
                res.json(product);
            };
        });
    },

    show: (req, res) => {
        Product.findOne({_id: req.params.id}, (err, product) => {
            if (err) {
                res.json({msg: "fail", errors: err});
            }
            else {
                res.json({msg: "success", result: product});
            };
        });
    },

    create: (req, res) => {
        Product.create(req.body, (err, results) => {
            if (err) {
                res.json({msg: "fail", errors: err});
            }
            else {
                res.json({msg: "success", result: product});
            };
        });
    },

    update: (req, res) => {
        Product.update({_id: req.params.id}, req.body, (err, result) => {
            if (err) {
                res.json({msg: "fail", errors: err});
            }
            else {
                res.json({msg: "success", result: result});
            };
        });
    },
    
    destroy: (req, res) => {
        Product.remove({_id : req.params.id}, (err, result) => {
            if (err) {
                res.json({msg: "fail", errors: err});
            }
            else {
                res.json({msg: "success", result: result});
            };
        });
    }
};