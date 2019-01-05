// A dictionary is a type of data structure that is supported natively in all major interpreted languages such as JavaScript, Python, Ruby and PHP, where it’s known as an Object, Dictionary, Hash and Array, respectively. In simple terms, a dictionary is a collection of unique keys and their values. The values can typically be of any primitive type (i.e an integer, boolean, double, string etc) or other dictionaries (dictionaries can be nested). However, for this exercise assume that values are either an integer, a string or another dictionary.

// Given a dictionary dict, write a function flattenDictionary that returns a flattened version of it .

// If you’re using a compiled language such Java, C++, C#, Swift and Go, you may want to use a Map/Dictionary/Hash Table that maps strings (keys) to a generic type (e.g. Object in Java, AnyObject in Swift etc.) to allow nested dictionaries.

// If a certain key is empty, it should be excluded from the output (see e in the example below).

// input:  dict = {
//     "Key1" : "1",
//     "Key2" : {
//         "a" : "2",
//         "b" : "3",
//         "c" : {
//             "d" : "3",
//             "e" : {
//                 "" : "1"
//             }
//         }
//     }
// }

// output: {
//     "Key1" : "1",
//     "Key2.a" : "2",
//     "Key2.b" : "3",
//     "Key2.c.d" : "3",
//     "Key2.c.e" : "1"
// }

// Input of a nested dictionary
// Unnest the dictionary and return an output of a dictionary with the keys of the original in one layer
// Using recursion, find a solution
// Values can be assumed to be of any primitive type
// If the key is empty, I should exclude it from the output dictionary

function flattenDictionary(dict) {
  let output = {};
  for (let key in dict) {
    if (dict[key] instanceof Object) {
      let child = flattenDictionary(dict[key]);
      for (let childKey in child) {
        if (childKey === "") {
          output[key] = child[childKey];
        } else if (key === "") {
          output[childKey] = child[childKey];
        } else {
          output[key + "." + childKey] = child[childKey];
        }
      }
    } else {
      output[key] = dict[key];
    }
  }
  return output;
}
