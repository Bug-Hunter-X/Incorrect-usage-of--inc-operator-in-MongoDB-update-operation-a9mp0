# Incorrect usage of $inc operator in MongoDB update operation
This code demonstrates an incorrect usage of the `$inc` operator in a MongoDB update operation. The `$inc` operator is used to increment a numeric field by a specified value. However, in this example, a string '1' is provided as the increment value, which will lead to an unexpected result.
## Bug
The bug lies in the following line:
```javascript
db.collection('myCollection').updateOne( { "_id": ObjectId("651919c652778961a966075") }, { $inc: { "field": '1' } } );
```
The correct way to use the `$inc` operator with the numeric value 1 would be:
```javascript
db.collection('myCollection').updateOne( { "_id": ObjectId("651919c652778961a966075") }, { $inc: { "field": 1 } } );
```
The original code treats '1' as a string rather than a number resulting in the error.  This can lead to data inconsistencies and unexpected behavior in your application.