var ninja = {
  name: 'Kyle',
  MEAN_belt: 10,
  iOS_belt: 10,
  python_belt: 10,
  php_belt: 10,
  ruby_belt: 10,
  nested_object: {
    property1: "this is cool",
    property2: [1,3,4,5,5],
    property3: 100
  }
}
// console.log(ninja.name, ninja.MEAN_belt, ninja["name"], ninja["MEAN_belt"]);
// we can call upon object values by using either dot notation or calling it like a hash(ruby)/dictionary(python)
ninja.nested_object.property2 = "this is awesome!"
console.log(ninja.nested_object.property2)
ninja.new_property = 'you can append?'
console.log(ninja);
