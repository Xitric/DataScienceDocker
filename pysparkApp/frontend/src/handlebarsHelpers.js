var fs = require('fs');

helpers = {
    //Add handlebars helpers here as functions, eg:
    toCaps: function (value) {
        return value.toUpperCase()
    },

    readData: function (file) {
        let contents = fs.readFileSync(file, 'utf-8');
        contents = contents.split(',');

        return contents;
    }
};

module.exports.helpers = helpers;