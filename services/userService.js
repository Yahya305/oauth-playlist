const User = require("../models/user-model");

async function createUser(profileId, displayName) {
    try {
        const newUser = new User({
            googleId: profileId,
            username: displayName,
        });
        const savedUser = await newUser.save();
        console.log("New user created:", savedUser);
    } catch (error) {
        console.error("Error creating user:", error);
    }
}

module.exports = createUser;