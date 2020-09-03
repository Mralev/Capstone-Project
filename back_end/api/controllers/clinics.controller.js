const models = require('../../models');
const Op = models.Sequelize.Op;

// List all clinics
exports.getClinicsList = (req, res) => {

    res.setHeader("Content-Type", "application/json");
    console.log(req.session.username);
    models.clinics.findAll({
        where: {
            isActive: 1
        },
        include: [
            {model: models.clinic_billing},
            {model: models.clinic_notes},
            {model: models.clinic_aging},
            {model: models.clinic_patient_statement},
            {model: models.clinic_deposit_entry},
            {model: models.clinic_month_end},
            {model: models.clinic_remits},
            {model: models.clinic_network},
            {model: models.website_logins},
            {model: models.clinic_office_hours},
            {model: models.clinic_contact},
        ]
    }).then(user => {
        res.status(200).send(JSON.stringify(user));
    })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"' + error.errors[0].message + '"}'));
        });
};

// create a new clinic
exports.createClinic = async (req, res) => {

    res.setHeader("Content-Type", "application/json");

    const userRequestBody = req.body;

    models.clinics.create({
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

// search a clinic by id
exports.getClinicsListById = (req, res) => {

    res.setHeader("Content-Type", "application/json");

    models.clinics.findAll({
        where: {
            clinicId: req.body.clinicId
        },
        include: [
            {model: models.clinic_billing},
            {model: models.clinic_notes},
            {model: models.clinic_aging},
            {model: models.clinic_patient_statement},
            {model: models.clinic_deposit_entry},
            {model: models.clinic_month_end},
            {model: models.clinic_remits},
            {model: models.clinic_network},
            {model: models.website_logins},
            {model: models.clinic_office_hours},
            {model: models.clinic_contact},
        ]
    }).then(user => {
        res.status(200).send(JSON.stringify(user));
    })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"' + error.errors[0].message + '"}'));
        });
}

// search a clinic by name or mtb code or infinidi code
exports.getClinicsListByFilter = (req, res) => {

    res.setHeader("Content-Type", "application/json");
    const requestBody = req.body;

    if (requestBody.displayName === undefined) {
        searchByMtbCode(req, res);
    } else {
        searchByClinicDisplayName(req, res);
    }
};

// search features
function searchByClinicDisplayName(req, res) {
    models.clinics.findAll({
        where: {
            displayName: req.body.displayName
        },
        include: [
            {model: models.clinic_billing},
            {model: models.clinic_notes},
            {model: models.clinic_aging},
            {model: models.clinic_patient_statement},
            {model: models.clinic_deposit_entry},
            {model: models.clinic_month_end},
            {model: models.clinic_remits},
            {model: models.clinic_network},
            {model: models.website_logins},
            {model: models.clinic_office_hours},
            {model: models.clinic_contact},
        ]
    }).then(user => {
        res.status(200).send(JSON.stringify(user));
    })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"' + error.errors[0].message + '"}'));
        });
}

function searchByMtbCode(req, res) {
    models.clinics.findAll({
        where: {
            mtbCode: req.body.mtbCode
        },
        include: [
            {model: models.clinic_billing},
            {model: models.clinic_notes},
            {model: models.clinic_aging},
            {model: models.clinic_patient_statement},
            {model: models.clinic_deposit_entry},
            {model: models.clinic_month_end},
            {model: models.clinic_remits},
            {model: models.clinic_network},
            {model: models.website_logins},
            {model: models.clinic_office_hours},
            {model: models.clinic_contact},
        ]
    }).then(user => {
        res.status(200).send(JSON.stringify(user));
    })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"' + error.errors[0].message + '"}'));
        });
}

// delete a clinic
exports.deleteClinic = (req, res) => {

    res.setHeader("Content-Type", "application/json");
    const requestBody = req.body;

    models.clinics.update(
        {isActive: 0},
        {
            where: {
                displayName: requestBody.displayName
            }
        }
    ).then(user => {
        res.status(200).send(JSON.parse('{"status":"deleted"}'));
    })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"' + error.errors[0].message + '"}'));
        });
};

// delete a clinic
exports.restoreClinic = (req, res) => {

    res.setHeader("Content-Type", "application/json");
    const requestBody = req.body;

    models.clinics.update(
        {isActive: 1},
        {
            where: {
                displayName: requestBody.displayName
            }
        }
    ).then(user => {
        res.status(200).send(JSON.parse('{"status":"restored"}'));
    })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"' + error.errors[0].message + '"}'));
        });
};
