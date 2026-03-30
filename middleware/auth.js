const API_KEY = '12345678';

function verificarApiKey(req, res, next) {
    const Key = req.headers['x-api-key'];

    if(Key !== API_KEY) {
        return res.status(401).json({ error: 'No autorizado' });
    }
    next();
}

module.exports = verificarApiKey;
