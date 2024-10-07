import Joi from 'joi';

const userSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    cpf: Joi.string().length(11).allow(null), // se necessário
    phone: Joi.string().length(15).allow(null), // se necessário
    tipo_usuario: Joi.string().valid('admin', 'regular').required()
});

export const validateUser = (req, res, next) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};
