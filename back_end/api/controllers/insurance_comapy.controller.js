const models = require('../../models');
const Op = models.Sequelize.Op;

exports.getInsuranceCompanyList = (req, res) => {

    res.setHeader("Content-Type", "application/json");

    models.insurance_company.findAll({
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

exports.getAllInsuranceCompanyList = (req, res) => {

    res.setHeader("Content-Type", "application/json");

    models.insurance_company.findAll({
        // where: {
        //     isActive: 1
        // },
    }).then(user => {
        res.status(200).send(JSON.stringify(user));
    })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"' + error.errors[0].message + '"}'));
        });
};

exports.createInsuranceCompany = async (req, res) => {

    res.setHeader("Content-Type", "application/json");

    const userRequestBody = req.body;

    models.insurance_company.create({
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
exports.deleteInsuranceCompany = (req, res) => {

    res.setHeader("Content-Type", "application/json");
    const requestBody = req.body;

    models.insurance_company.update(
        {isActive: 0},
        {
            where: {
                insuranceCompId: requestBody.insuranceCompId
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

exports.getInsuranceCompanyById = (req, res) => {

    res.setHeader("Content-Type", "application/json");

    models.insurance_company.findAll({
        where: {
            isActive: 1,
            insuranceCompId: req.body.insuranceCompId
        },
    }).then(user => {
        res.status(200).send(JSON.stringify(user));
    })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"' + error.errors[0].message + '"}'));
        });
};

// update insurance company
exports.updateInsuranceCompany = (req, res) => {

    res.setHeader("Content-Type", "application/json");

    const userRequestBody = req.body;

    console.log(userRequestBody);

    models.insurance_company.update({
        name: userRequestBody.name,
        phone: userRequestBody.phone,
        fax: userRequestBody.fax,
        note: userRequestBody.note,
        isActive: userRequestBody.isActive
    }, {
        where: {insuranceCompId: userRequestBody.insuranceCompId}
    } )
        .then(createRequestBody => {
            res.json(createRequestBody);
        })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"' + error.errors[0].message + '"}'));
        })
};
