
load("/root/zing/Chapter_2/create_data.js");
db.people.drop();
db.people.insert(people);

function writeResults(cursor,number=10) {
  for (i=0;i<number;i++) {
    person = cursor.next();
    printjson(person);
  }
}

/* working people */
function Query1() {
  query = {"age" : {"$gte" : 16, "$lte" : 65}};
  cursor = db.people.find(query, {"age" : 1, "name": 1, "_id" : 0}).sort({"age" : 1});
  print("youngest");
  writeResults(cursor);
  cursor = db.people.find(query, {"age" : 1, "name": 1, "_id" : 0}).sort({"age" : -1});
  print("oldest");
  writeResults(cursor);
}

/* not a kant */
function Query2() {
  query = {"name.last" : {"$ne" : "kant"}};
  cursor = db.people.find(query, {"name" : 1, "_id" : 0});
  writeResults(cursor);
}

/* someone with a girls name */
function Query3() {
  query = {"name.first" : {"$in" : ['amy', 'sally', 'rose',
  'georgia', 'carla', 'hellen',]}};
  cursor =db.people.find(query, {"name.first" : 1, "_id" : 0}).sort({"age" : 1});
  writeResults(cursor);
}

/* anyone who DOESN'T have a pretensious name */
function Query4() {
  query = {"name.last" : {"$nin" : ['bach', 'mozart', 'einstein', 'kant',
  'dirac']}};
  cursor = db.people.find(query, {"name.last" : 1, "_id" : 0})
  writeResults(cursor);
}

/* banana xor apple */ m
function Query5() {
  query = {"$or" : [{"$and" : [{"fruit" : "banana"}, {"fruit" : {"$not" : {"$in": ["apple"]}}}]}, {"$and" : [{"fruit" : "apple"}, {"fruit" : {"$not" : {"$in": ["apple"]}}}]}]};
  cursor = db.people.find(query, {"fruit" : 1,  "_id" : 0});
  writeResults(cursor, 20);
}
