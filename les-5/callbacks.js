function func1() {
  console.log('hey')
}

const func2 = () => {
  console.log('hey')
}

const obj1 = {
  key1: func2,
  key2: func1,
}


const toUpperCase = (input) => {
  return str(input).toUpperCase()
}

const toLowerCase = (input) => {
  return str(input).toLowerCase()
}

const count = (input) => {
  return str(input).length
}

const stringHelpers = {
  up: toUpperCase,
  lower: toLowerCase,
  length: count
}

function func4(input) {
  //console.log('de callback zegt:', input)
  return input
}


function func3(input, callback) {
  const output = input.toLowerCase()

  callback(output)

  console.log()
}

const x = "hey"









const natureArr = ["tree", "river", "mountain", "flower"];

natureArr.filter(mijnfiltercallback)

function mijnfiltercallback(value, index1, deHeleLijst) {
  console.log(value, index1, deHeleLijst)
}