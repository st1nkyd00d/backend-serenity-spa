const jwt = require('jsonwebtoken');


const validateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]; // descomposición del bearer token

    if (!token) {
        res.status(401).send('No existe un token de autenticación');
        return;
    }
    try {
        const admin = await jwt.verify(token, process.env.secret);
        req.admin = admin.username;
        console.log(admin)
        next();
    } catch (error) {
        res.status(403).send('El token no es válido. Por lo tanto, no tienes permiso para acceder a esta ruta.');
        return;
    }
};

module.exports = validateToken;
