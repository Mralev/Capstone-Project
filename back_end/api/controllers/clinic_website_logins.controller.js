const models = require('../../models');
const Op = models.Sequelize.Op;

exports.getWebsiteLoginsList = (req, res) => {

    res.setHeader("Content-Type", "application/json");

    models.website_logins.findAll({
        where: {
            isActive: 1
        },
    }).then(user => {
        res.status(200).send(JSON.stringify(user));
    })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"' + error.errors[0].message + '"}'));
        });
};

exports.createWebsiteLogin = async (req, res) => {

    res.setHeader("Content-Type", "application/json");

    const userRequestBody = req.body;

    models.website_logins.create({
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

// delete by id
exports.deleteWebsiteLogin = (req, res) => {

    res.setHeader("Content-Type", "application/json");
    const requestBody = req.body;

    models.website_logins.update(
        {isActive: 0},
        {
            where: {
                websiteLoginsId: requestBody.websiteLoginsId
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
