// module imports and configs
const JWT = require('jsonwebtoken');

// mysql configurations
const db = require('../../Config/config');

// model imports
const { status, responseInstance } = require('../../Models/response');
const documentation = require('../../documentation/statusCodeDocumentation.json');

module.exports = (req, res) => {
    let update = (body) => {
        return new Promise((resolve, reject) => {
            db.getConnection((error, connection) => {
                if (error) {
                    reject(new responseInstance(new status(7001), 'this is backend issue'));
                }

                // const sql = 'CALL insertProfileData(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
                // const values = [body.username, body.employmentStatus, body.rangeOfSearch, body.rightPath, body.careFree, body.innocent, body.lowKey, body.organized, body.onGoing, body.tense];

                
                let sql = 'CALL getProfileData(?)';
                let values = [body.username];

                connection.query(sql, values, (err, result) => {
                    if (err)
                        console.log(err);
                    else {
                        result[0][0].kindOfPerson = result[1];
                        resolve(result[0][0]);
                    }
                });
            })
        })
    }

    let sender = (result) => {
        res.send(new responseInstance(new status(1030), result));
    }

    update(req.body)
        .then((result) => sender(result))
        .catch((error) => { res.send(error) })
}