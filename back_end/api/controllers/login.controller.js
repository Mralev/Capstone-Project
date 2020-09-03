const models = require('../../models');
const bcrypt = require('bcryptjs');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

// login
exports.login = (request, response) => {

    response.setHeader("Content-Type", "application/json");

    models.users.findAll({
        where: {
            userName: request.body.userName,
            isActive: 1
        }
    }).then(user => {

        if (JSON.stringify(user).length <= 2) { // empty file, no user found
            return response.status(500).send(JSON.parse('{"error":"username not found"}'));
        }

        if (request.body.userName == user[0].userName) {

            bcrypt.compare(request.body.password, user[0].password, function (err, res) {
                if (err) {
                    // handle error
                }
                if (res) {
                    // check admin right
                    response.status(200).json(
                        {
                            userName: user[0].userName,
                            firstName: user[0].firstName,
                            lastName: user[0].lastName,
                            isAdmin: cryptr.encrypt(user[0].isAdmin),
                            id: user[0].userId
                        })
                } else {
                    response.status(404).send(JSON.parse('{"error":"incorrect password"}'));
                }
            });

        } else {
            res.status(500).send(JSON.parse('{"error":"incorrect username"}'));
        }
    })
        .catch(error => {
            console.log(error);
            response.status(500).send(JSON.parse('{"error":"' + error.errors[0].message + '"}'));
        });
};
