//Generate a random answer choice (A,B,C,D)
const randomNums = () => {
  const choices = ['A','B','C','D']
  let letter = choices[Math.floor(Math.random() * 4)]
  return letter
}

//Generate Random Answer Key
const answerKey = () => {
  answerKeyarr = []
  for (let i = 1; i <=30; i++) {
    addLetters = randomNums()
    answerKeyarr.push(addLetters)
  }
return(answerKeyarr)
}

//Generate Random Student Choice
const studentChoices = () => {
  studentsChoicesarr = []
  for (let i = 1; i <=30; i++) {
    addLetter = randomNums()
    studentsChoicesarr.push(addLetter)
  }
return(studentsChoicesarr)
}

// Compare student choice vs answer/ returns counter
const simulate = () => {
  counter = 0
  const realAnswers = answerKey()
  const studentsAnswers = studentChoices()
  for (let i = 1; i <=30; i++) {
    if (realAnswers[i] === studentsAnswers[i]){
      counter ++
    }
}
  percentage = ((counter/30)*100)
  //Output response
  return counter
}

//Simulate 10000 times
const sim1000times = () => {
lists = []
for (let i = 1; i<=1000; i++){
 var simmy = simulate()
  lists.push(simmy)
}
return lists
}

//Return average of array
const calculateAvg = (array) => {
    var sum = 0
    var len = array.length
  for (let i = 0; i<array.length; i++){
    sum = sum + array[i]
  }
  return sum/len
}


console.log(calculateAvg(sim1000times()))
