const bcrypt = require('bcryptjs');

exports.hashInput = (input) => {
    return bcrypt.genSalt(10).then(salt => bcrypt.hash(input, salt));
};
