const models = require('../../models');
const Op = models.Sequelize.Op;

// List all clinics
exports.getClinicContactList = (req, res) => {

    res.setHeader("Content-Type", "application/json");

    models.clinic_contact.findAll({
        where: {
            clinicId: req.body.clinicId
        }
    }).then(user => {
        res.status(200).send(JSON.stringify(user));
    })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"' + error.errors[0].message + '"}'));
        });
};

// create a new clinic contact
exports.createClinicContact = (req, res) => {

    res.setHeader("Content-Type", "application/json");

    const userRequestBody = req.body;

    models.clinic_contact.create({
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
