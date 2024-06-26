// Using Node.js `require()`
const mongoose = require('mongoose');

module.exports = {
    mongooseConnect: function () {
        return new Promise((resolve, reject) => {
            var db = mongoose.connect('mongodb://admin:secret@localhost:27017/springboot', {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });

            db.then(resolve)
                .catch(reject);
        });
    }
}