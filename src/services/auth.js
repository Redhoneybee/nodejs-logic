const { randomBytes } = require('crypto');
const argon2 = require('argon2');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config/index');


module.exports = class AuthService {
    constructor() { }

    getToken(user) {
        const today = new Date();
        const exp = new Date(today);
        exp.setDate(today.getDate() + 60);

        return jwt.sign(
            {
                _id: user._id,
                role: user.role,
                name: user.name,
                exp: exp.getTime() / 1000
            },
            config.jwt_secret
        )
    };

    async signUp(userDTO) {
        try {
            const salt = randomBytes(32);

            const hashPassword = await argon2.hash(userDTO.password, { salt });

            const recode = await User.create({
                ...userDTO,
                password: hashPassword,
                salt: salt.toString('hex')
            });

            const token = this.getToken(recode);

            const user = recode.toObject();

            return { user, token };
        } catch (err) {
            throw err;
        }
    }

}
