const fruitBasket = {
    apple: 27, 
    grape: 0,
    pear: 14 
  }
  const getNumFruit = fruit => {
    return fruitBasket[fruit]
  }
  
  // const numApples = getNumFruit('apple')
  // console.log(numApples) // 27

  // const control = async _ => {
  //   console.log('Start')
  
  //   const numApples = await getNumFruit('apple')
  //   console.log(numApples)
    
  //   const numGrapes = await getNumFruit('grape')
  //   console.log(numGrapes)
  
  //   const numPears = await getNumFruit('pear')
  //   console.log(numPears)
  
  //   console.log('End')
  // }

  //control();

  //-------Await in a for loop

  const fruitsToGet = ['apple', 'grape', 'pear']

  const forLoop = async () => {
    console.log('Start')
  
    for (let i = 0; i< fruitsToGet.length; i++) {
      const fruit = fruitsToGet[i]
      const numFruit = await getNumFruit(fruit)
      console.log(numFruit)
    }
  
    console.log('End')
  }
  //forLoop();

  //-------------Await in a forEach loop

  const forEachLoop = _ => {
    console.log('Start')
  
    fruitsToGet.forEach(async fruit => {
      const numFruit = await getNumFruit(fruit)
      console.log(numFruit)
    })
  
    console.log('End')
  }
  //You cannot use await in forEach.
  //forEachLoop();

  //---------------Await with map

  const mapLoopPromise = async _ => {
    console.log('Start')
  
    const numFruits = await fruitsToGet.map(async fruit => {
      const numFruit = await getNumFruit(fruit)
      return numFruit
    })
  
    console.log(numFruits)
  
    console.log('End')
  }
  //map will always return an array of promise. This is because asynchronous functions always return promises.

 // mapLoopPromise();

//--------------
//Since map always return promises (if you use await), you have to wait for the array of promises to get resolved.
// You can do this with await Promise.all(arrayOfPromises).

 const mapLoop = async _ => {
  console.log('Start')

  const promises = fruitsToGet.map(async fruit => {
    const numFruit = await getNumFruit(fruit)
    return numFruit
  })
  
  const numFruits = await Promise.all(promises)
  console.log(numFruits)

  console.log('End')
}

//mapLoop();

//--------------------Await with filter
/*
There are three steps to use await and filter properly:
1.Use map to return an array promises
2.await the array of promises
3.filter the resolved values
*/

const filterLoop = async _ => {
  console.log('Start')

  const promises = await fruitsToGet.map(fruit => getNumFruit(fruit))
  const numFruits = await Promise.all(promises)
  
  const moreThan20 = fruitsToGet.filter((fruit, index) => {
    const numFruit = numFruits[index]
    return numFruit > 20
  })

  console.log(moreThan20)
  console.log('End')
}
 //filterLoop();

 //-------------Await with reduce

 const reduceLoop1 = async _ => {
  console.log('Start')

  const sum = await fruitsToGet.reduce(async (promisedSum, fruit) => {
    const sum = await promisedSum
    const numFruit = await getNumFruit(fruit)
    return sum + numFruit
  }, 0)

  console.log(sum)
  console.log('End')
}


/*
The simplest (and most efficient way) to use await in reduce is to:

   1. Use map to return an array promises
   2.await the array of promises
   3. reduce the resolved values

*/

const reduceLoop = async _ => {
  console.log('Start')

  const promises = fruitsToGet.map(getNumFruit)
  const numFruits = await Promise.all(promises)
  const sum = numFruits.reduce((sum, fruit) => sum + fruit)

  console.log(sum)
  console.log('End')
}

reduceLoop();