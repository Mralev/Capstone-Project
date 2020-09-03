const models = require('../../models');
const Op = models.Sequelize.Op;
const bcrypt = require('bcryptjs');

// List all users
exports.getUserList = (req, res) => {

    res.setHeader("Content-Type", "application/json");

    models.users.findAll({
        where: {
            //CatAssignDept: req.body.CatAssignDept
        }
    }).then(user => {
        res.status(200).send(JSON.stringify(user));
    })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"'+error.errors[0].message+'"}'));
        });
};

// List all the users by userName
exports.getUserByUserName = (req, res) => {

    res.setHeader("Content-Type", "application/json");

    models.users.findAll({
        where: {
            userName: req.body.userName
        }
    }).then(user => {
        res.status(200).send(JSON.stringify(user));
    })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"'+error.errors[0].message+'"}'));
        });
};

// create a new user
exports.createUser = async (req, res) => {

    res.setHeader("Content-Type", "application/json");

    const userRequestBody = req.body;

    try{
        const hashedPassword = await bcrypt.hash(userRequestBody.password, 10)

    models.users.create({
        firstName: userRequestBody.firstName,
        lastName: userRequestBody.lastName,
        userName: userRequestBody.userName,
        email: userRequestBody.email,
        password: hashedPassword,
        isActive: userRequestBody.isActive,
        isAdmin: userRequestBody.isAdmin,
        dateCreated: userRequestBody.dateCreated
    })
        .then(createRequestBody => {
            res.json(createRequestBody);
        })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"'+error.errors[0].message+'"}'));
        })
    } catch {

    }
};

// update user password
exports.updateUserPassword = (req, res) => {

    res.setHeader("Content-Type", "application/json");

    const user = req.body;

    models.users.update(
        {password: user.password},
        {
            returning: true, where: {userName: user.userName}
        })
        .then(rows => {
            res.send(JSON.parse('{"status":"password updated"}'))
        })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"'+error.errors[0].message+'"}'));
        });
};

/**
 * delete user
 * deleting a user will make the user inactive
 */

exports.deleteUser = (req, res) => {

    res.setHeader("Content-Type", "application/json");

    const user = req.body;

    models.users.update(
        {isActive: 0},
        {
            returning: true, where: {userName: user.userName}
        })
        .then(rows => {
            res.send(JSON.parse('{"status":"user deleted"}'))
        })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"'+error.errors[0].message+'"}'));
        });
};

/**
 * restore user
 * restoring a user will make the user active
 */

exports.restoreUser = (req, res) => {

    res.setHeader("Content-Type", "application/json");

    const user = req.body;

    models.users.update(
        {isActive: 1},
        {
            returning: true, where: {userName: user.userName}
        })
        .then(rows => {
            res.send(JSON.parse('{"status":"user restored"}'))
        })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"'+error.errors[0].message+'"}'));
        });
};

// make user admin
exports.makeUserAdmin = (req, res) => {

    res.setHeader("Content-Type", "application/json");

    const user = req.body;

    models.users.update(
        {isAdmin: 1},
        {
            returning: true, where: {userName: user.userName}
        })
        .then(rows => {
            res.send(JSON.parse('{"status":"admin right added"}'))
        })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"'+error.errors[0].message+'"}'));
        });
};

// remove admin right
exports.removeAdminRight = (req, res) => {

    res.setHeader("Content-Type", "application/json");

    const user = req.body;

    models.users.update(
        {isAdmin: 0},
        {
            returning: true, where: {userName: user.userName}
        })
        .then(rows => {
            res.send(JSON.parse('{"status":"admin right removed"}'))
        })
        .catch(error => {
            console.log(error);
            res.status(500).send(JSON.parse('{"error":"'+error.errors[0].message+'"}'));
        });
};

// update a user
exports.updateUser = async (req, res) => {

    res.setHeader("Content-Type", "application/json");

    const userRequestBody = req.body;

    console.log(userRequestBody);

        models.users.update({
            firstName: userRequestBody.firstName,
            lastName: userRequestBody.lastName,
            userName: userRequestBody.userName,
            email: userRequestBody.email,
            // password: hashedPassword,
            isActive: userRequestBody.isActive,
            isAdmin: userRequestBody.isAdmin,
            dateCreated: userRequestBody.dateCreated
        }, {
            where: {userId: userRequestBody.userId}
        })
            .then(createRequestBody => {
                res.json(createRequestBody);
            })
            .catch(error => {
                console.log(error);
                res.status(500).send(JSON.parse('{"error":"'+error.errors[0].message+'"}'));
            })
};
