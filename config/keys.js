// add this file to .gitignore
require("dotenv").config();

module.exports = {
    google: {
        clientID: process.env.clientID,
        clientSecret: process.env.clientSecret,
    },
    mongodb: {
        dbURI: "mongodb+srv://Yahya:samyaya2003305@notesapp.k0xfpfx.mongodb.net/oauth?retryWrites=true&w=majority",
    },
};
