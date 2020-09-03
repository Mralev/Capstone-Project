const models = require('../../models');
const Op = models.Sequelize.Op;

exports.getClinicmtbDistributionList = (req, res) => {

    res.setHeader("Content-Type", "application/json");
    console.log(req.session.username);
    models.mtb_distribution.findAll({

    }).then(user => {
        res.status(200).send(JSON.stringify(user));
    })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"' + error.errors[0].message + '"}'));
        });
};

exports.createClinicmtbDistribution = async (req, res) => {

    res.setHeader("Content-Type", "application/json");

    const userRequestBody = req.body;

    models.mtb_distribution.create({
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
