const models = require('../../models');
const Op = models.Sequelize.Op;

exports.getClinicAgingList = (req, res) => {

    res.setHeader("Content-Type", "application/json");
    console.log(req.session.username);
    models.clinic_aging.findAll({

    }).then(user => {
        res.status(200).send(JSON.stringify(user));
    })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"' + error.errors[0].message + '"}'));
        });
};

exports.createClinicAging = async (req, res) => {

    res.setHeader("Content-Type", "application/json");

    const userRequestBody = req.body;

    models.clinic_aging.create({
        ...userRequestBody
    })
        .then(createRequestBody => {
            res.json(createRequestBody);
        })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"' + error.errors[0].message + '"}'));
        })
};
