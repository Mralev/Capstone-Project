const models = require('../../models');
const Op = models.Sequelize.Op;

//add clinic to user favorite
exports.addFavoriteClinic = async (req, res) => {

    res.setHeader("Content-Type", "application/json");

    const userRequestBody = req.body;

    models.favorite_clinic.create({
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

// get Favorite Clinic By User
exports.getFavoriteClinicByUser = (req, res) => {

    res.setHeader("Content-Type", "application/json");

    models.favorite_clinic.findAll({
        where: {
            userId: req.body.userId,
            isActive: 1
        },
        include: [
            {
                model: models.clinics,
                where: { isActive: 1} //
            },
        ]
    }).then(user => {
        res.status(200).send(JSON.stringify(user));
    })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"' + error.errors[0].message + '"}'));
        });
};

//remove clinic from user favorite
exports.removeFavoriteClinic = (req, res) => {

    res.setHeader("Content-Type", "application/json");
    const requestBody = req.body;

    models.favorite_clinic.update(
        {isActive: 0},
        {
            where: {
                clinicId: requestBody.clinicId,
                userId: requestBody.userId
            },
        }
    ).then(user => {
        res.status(200).send(JSON.parse('{"status":"deleted"}'));
    })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"' + error.errors[0].message + '"}'));
        });
};
