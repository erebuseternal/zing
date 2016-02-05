var first_names = ['amy', 'joe', 'greg', 'sally', 'rose', 'nathan', 'joseph',
'georgia', 'john', 'carla', 'hellen', 'mike', 'tristan', 'peter'];
var last_names = ['smith', 'bach', 'mozart', 'einstein', 'kant', 'johnson',
'carlsen', 'dirac'];
var middle_inits = 'abcdefghijklmnopqrstuvwxyz';
var hair_colors = ['red', 'blonde', 'brunette', 'white'];
var eye_colors = ['blue', 'grey', 'green', 'brown', 'black'];
var fruit_options = ['apple', 'banana', 'pineapple', 'lemon', 'strawberry', 'blueberry', 'grape'];

function random(upper) {
  return Math.floor(Math.random()*upper + 1);
}

var names = [];
var count = 0;
var people = []

while (names.length < first_names.length * last_names.length * 26) {
  var first = first_names[random(first_names.length - 1)];
  var middle = middle_inits[random(middle_inits.length - 1)];
  var last = last_names[random(last_names.length - 1)]
  if (names.indexOf([first, middle, last]) == -1) {
    names.push([first, middle, last]);
    var name = {'first' : first, 'middle' : middle, 'last' : last};
    var age = random(100);
    var hair = hair_colors[random(hair_colors.length - 1)];
    var eye = eye_colors[random(eye_colors.length - 1)];
    var fruits = [];
    while (fruits.length < 3) {
      var fruit = fruit_options[random(fruit_options.length - 1)];
      if (fruits.indexOf(fruit) == -1) {
        fruits.push(fruit);
      }
    }
    var document = {'name' : name, 'age' : age, 'hair' : hair, 'eye' : eye, 'fruit' : fruits};
    people.push(document);
    count += 1;
  }
}
print('' + count + ' records created and place in variable people');
