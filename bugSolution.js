```javascript
function findDocuments(field, array) {
  if (array.length === 0) {
    // Return all documents if the array is empty
    return db.collection.find({});
  } else {
    // Use $in operator if the array is not empty
    return db.collection.find({field: {$in: array}});
  }
}
```