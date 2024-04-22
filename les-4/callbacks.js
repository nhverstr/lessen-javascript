// Extra uitleg callbacks
// https://builtin.com/software-engineering-perspectives/callback-function


const cb = function () {
  console.log("cb");
};

const cb2 = () => {
  console.log("cb2");
};

setTimeout(() => {
  console.log("inline");
}, 1000);

setTimeout(cb, 2000);

// console.log(cb)

function greet(name, callback) {
  console.log("name:", name);
  console.log("callback:", callback);

  callback();
}

// greet("nathan", () => {
//   console.log("inline");
// });

// greet("virginie", cb2);
