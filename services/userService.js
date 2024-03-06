const User = require("../models/user-model");

async function createUser(profileId, displayName) {
    try {
        // check if user already exists in our own db
        const currentUser = await User.findOne({ googleId: profileId });

        if (currentUser) {
            console.log("User is:", currentUser);
            // Do something with existing user
        } else {
            // Create new user if not found
            const newUser = new User({
                googleId: profileId,
                username: displayName,
            });
            const savedUser = await newUser.save();
            console.log("New user created:", savedUser);
        }
    } catch (error) {
        console.error("Error creating user:", error);
    }
}

module.exports = createUser;
