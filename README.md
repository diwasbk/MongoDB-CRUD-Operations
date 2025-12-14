# MongoDB School Database Queries

This repository contains MongoDB query examples using a sample **school database**.  
It demonstrates **CRUD operations**, **filtering**, and **nested document handling** in MongoDB using the MongoDB shell (JavaScript).  
It is beginner-friendly and perfect for learning basic MongoDB concepts.

---

## Files Included

- `students_query.js` → Queries for the `students` collection
- `users_query.js` → Queries for the `users` collection with nested documents and arrays

---

## Students Collection (`students_query.js`)

### Features
- Create `students` collection
- Insert single and multiple student records
- Read data using various filters and conditions
- Update one or many documents
- Delete documents
- Drop collection and database

### Concepts Covered
- `insertOne()`, `insertMany()`
- `find()`, `findOne()`
- Comparison operators: `$gte`, `$lte`, `$lt`
- Regex queries
- `$in` operator
- `$set` updates
- `deleteOne()`, `deleteMany()`

---

## Users Collection (`users_query.js`)

### Features
- Create `users` collection
- Nested documents (`profile`)
- Array of objects (`skills`)
- Update nested fields
- Push new objects into arrays
- Update specific array elements using conditions

### Concepts Covered
- Dot notation for nested fields (`profile.name`)
- `$push` for arrays
- Updating array elements by index
- `arrayFilters` for conditional array updates

---

## Learning Outcomes

- Understand MongoDB CRUD operations
- Practice filtering and querying techniques
- Work with nested documents and arrays
- Apply MongoDB in real-world database scenarios


## Author

[Diwas Bk](https://github.com/diwasbk)
