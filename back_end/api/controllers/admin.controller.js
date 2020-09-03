const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');


exports.isAdmin = (request, response) => {
    response.setHeader("Content-Type", "application/json");
    const decryptedString = cryptr.decrypt(request.body.isAdmin);
    response.status(200).json({
        status: decryptedString
    })
};
