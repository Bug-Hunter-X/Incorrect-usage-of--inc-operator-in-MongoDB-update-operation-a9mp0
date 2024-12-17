```javascript
// Incorrect usage of $inc operator
db.collection('myCollection').updateOne( { "_id": ObjectId("651919c652778961a966075") }, { $inc: { "field": '1' } } );
```