module.exports = (req, res) => {
    const debugg = require('debug')('getchat:');

    const { schemaValidate, dbOperation, sender } = require('../../Controllers/chat/chat');

    schemaValidate(req, schemaValidate)
        .then((body) => dbOperation(body, 'getchat'))
        .then((result) => sender(result, 'getchat', res))
        .catch((error) => { debugg(error); res.send(error) });
}