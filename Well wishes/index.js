function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  }
  
  const collectiveWisdom = {
    adjective: ['Amazing', 'Incredible', 'Fantastic', 'Phenomenal'],
    hopes: ['get everything you have been working for', 'are happy and healthy', 'crush your goals', 'believe in your self'],
    wishes: ['astonishing luck', 'superb luck', 'extraordinary luck', 'excellent luck', 'great luck']
  }
  
  // Store the 'wisdom' in an array
  let wisdom = []
  
  // Iterate over the object
  for(let prop in collectiveWisdom) {
    let optionId = generateRandomNumber(collectiveWisdom[prop].length)
  
    // use the object's properties to customize the message being added to wisdom  
    switch(prop) {
      case 'adjective':
        wisdom.push(`Hi you are doing ${collectiveWisdom[prop][optionId]}`)
        break
      case 'wishes':
        wisdom.push(`  I wish you ${collectiveWisdom[prop][optionId]}. `)
        break
      case 'hopes':
        wisdom.push(` I hope you ${collectiveWisdom[prop][optionId]}`)
        break
      default:
        wisdom.push('There is not enough info.')
    }
  }
  
  function formatWisdom(wisdom) {
    
    const formatted = wisdom.join('\n')
    console.log(formatted)
  }
  
  formatWisdom(wisdom);

  const saying = document.querySelector('.message')

   saying.innerHTML = wisdom

   const refreshButton = document.querySelector('.button');

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage)