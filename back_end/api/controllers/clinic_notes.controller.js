const models = require('../../models');
const Op = models.Sequelize.Op;

// List all clinic notes by clinic name
exports.getClinicNotes = (req, res) => {

    res.setHeader("Content-Type", "application/json");

    models.clinic_notes.findAll({
        where: {
            clinicId: req.body.clinicId,
            isDeleted: 0
        }
    }).then(user => {
        res.status(200).send(JSON.stringify(user));
    })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"' + error.errors[0].message + '"}'));
        });
};

// create a new clinic note by clinic name
exports.createClinicNote = (req, res) => {

    res.setHeader("Content-Type", "application/json");

    const userRequestBody = req.body;

    models.clinic_notes.create({
        ... userRequestBody
    })
        .then(createRequestBody => {
            res.json(createRequestBody);
        })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"' + error.errors[0].message + '"}'));
        })
};

// delete a clinic
exports.deleteClinicNote = (req, res) => {

    res.setHeader("Content-Type", "application/json");
    const requestBody = req.body;

    models.clinic_notes.update(
        {isDeleted: 1},
        {
            where: {
                clinicNotesId: requestBody.clinicNotesId
            }
        }
    ).then(note => {
        res.status(200).send(JSON.parse('{"status":"deleted"}'));
    })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"' + error.errors[0].message + '"}'));
        });
};
