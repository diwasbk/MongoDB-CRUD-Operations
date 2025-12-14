// Use the school database
use "school"

// Create the 'users' collection
db.createCollection("users")

// Insert multiple user documents with nested profile and skills array
db.users.insertMany([
    {
        u_id: 23018,
        profile: {
            name: "Diwas Bishwokarma",
            company: "Infotech Pvt.Ltd",
            role: "Backend Developer",
            skills: [
                {
                    category: "programming",
                    level: 5
                },
                {
                    category: "designing",
                    level: 4
                },
                {
                    category: "hosting",
                    level: 3
                }
            ]
        }
    },
    {
        u_id: 23019,
        profile: {
            name: "Ram Thapa",
            company: "NextGen Pvt.Ltd",
            role: "Frontend Developer",
            skills: [
                {
                    category: "programming",
                    level: 4
                },
                {
                    category: "designing",
                    level: 3
                },
                {
                    category: "hosting",
                    level: 2
                }
            ]
        }
    }
])

// Update name inside nested field profile.name for user 23018
db.users.updateOne(
    { u_id: 23018 },
    { $set: { "profile.name": "Diwas Bk" } }
)

// Add (push) a new skill object into the skills array
db.users.updateOne(
    { u_id: 23018 },
    { $push: { "profile.skills": { category: "riding", level: 6 } } }
)

// Update the level of the first skill (index 0) in the skills array
db.users.updateOne(
    { u_id: 23018 },
    { $set: { "profile.skills.0.level": 6 } }
)

// Update skill level only for the skill whose category is "riding"
// Using arrayFilters to target specific array element
db.users.updateOne(
    { u_id: 23018 },
    { $set: { "profile.skills.$[s].level": 8 } },
    { arrayFilters: [{ "s.category": "riding" }] }
)
