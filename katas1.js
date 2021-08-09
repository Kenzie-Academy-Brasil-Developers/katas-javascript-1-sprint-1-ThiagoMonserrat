function contador(){
  let num = " "
  for (let i = 1; i <= 20; i++) {
    num = num + i + ", "
  }
  return num
}
console.log(contador())

function contador1(){
  let num = " "
  for (let i = 2; i <= 20; i+=2) {
    num = num + i + ", "
  }
  return num
}
console.log(contador1())

function contador2(){
  let num = " "
  for (let i = 1; i <= 20; i+=2) {
    num = num + i + ", "
  }
  return num
}
console.log(contador2())

function contador3(){
  let num = " "
  for (let i = 5; i <= 100; i+=5) {
    num = num + i + ", "
  }
  return num
}
console.log(contador3())

function contador4(){
  let num = " "
  for (let i = 1; i <= 10; i++) {
    num = num + i * i + ", "
  }
  return num
}
console.log(contador4())

function contador5(){
  let num = " "
  for (let i = 20; i >= 1; i--) {
    num = num + i + ", "
  }
  return num
}
console.log(contador5())

function contador6(){
  let num = " "
  for (let i = 20; i >= 2; i-=2) {
    num = num + i + ", "
  }
  return num
}
console.log(contador6())

function contador7(){
  let num = " "
  for (let i = 19; i >= 1; i-=2) {
    num = num + i + ", "
  }
  return num
}
console.log(contador7())

function contador8(){
  let num = " "
  for (let i = 100; i >= 5; i-=5) {
    num = num + i + ", "
  }
  return num
}
console.log(contador8())

function contador9(){
  let num = " "
  for (let i = 10; i >= 1; i--) {
    num = num + i * i + ", "
  }
  return num
}
console.log(contador9())
