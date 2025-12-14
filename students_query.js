// Use the school database
use "school"

// Create a new collection named 'students'
db.createCollection("students")

// Insert one student document
db.students.insertOne({
    s_id: 101,
    name: "Diwas Bishwokarma",
    age: 20,
    grade: 12,
    city: "Butwal"
})

// Insert multiple student documents
db.students.insertMany([
    {
        s_id: 102,
        name: "Ram Thapa",
        age: 19,
        grade: 11,
        city: "Pokhara"
    },
    {
        s_id: 103,
        name: "Sita Gurung",
        age: 17,
        grade: 10,
        city: "Butwal"
    },
    {
        s_id: 104,
        name: "Ramesh Khatri",
        age: 18,
        grade: 11,
        city: "Lalitpur"
    },
    {
        s_id: 105,
        name: "Shilpa Shrestha",
        age: 20,
        grade: 12,
        city: "Pokhara"
    }
])

// Display all documents in the students collection
db.students.find()

// Find a document with s_id 101
db.students.findOne({ s_id: 101 })

// Find a document with a specific name
db.students.findOne({ name: "Diwas Bishwokarma" })

// Find all students in grade 12
db.students.find({ grade: 12 })

// Find students with age greater than or equal to 20
db.students.find({ age: { $gte: 20 } })

// Find students aged between 18 and 20 (inclusive)
db.students.find({ age: { $gte: 18, $lte: 20 } })

// Find students whose name starts with the letter 'D'
db.students.find({ name: /^D/ })

// Find students from Butwal or Pokhara
db.students.find({ city: { $in: ["Butwal", "Pokhara"] } })

// Find students in grade 12 who live in Pokhara
db.students.find({ grade: 12, city: "Pokhara" })

// Find students who do NOT have a 'city' field
db.students.find({
    city: { $exists: false }
})

// Update name of student with s_id 101
db.students.updateOne(
    { s_id: 101 },
    { $set: { name: "Diwas Bk" } }
)

// Update city to London for all students in grade 12
db.students.updateMany(
    { grade: 12 },
    { $set: { city: "London" } }
)

// Delete a single student with s_id 103
db.students.deleteOne({ s_id: 103 })

// Delete all students whose grade is less than 12
db.students.deleteMany({ grade: { $lt: 12 } })

// Drop (delete) the entire students collection
db.students.drop()

// Drop the whole school database
db.dropDatabase()
