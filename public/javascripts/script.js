// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
// addFood(steak[0], '#steak', () => {
//   // ... your code here
//   addFood(steak[1], '#steak', () => {
//     
//   })
// });
const table = document.querySelector('#table')


//  addFood(steak[0], '#steak', () => {
//   console.log(steak[0])
//   addFood(steak[1], '#steak', () => {
//     console.log(steak[1])
//     addFood(steak[2], '#steak', () => {
//       console.log(steak[2])
//       addFood(steak[3], '#steak', () => {
//         console.log(steak[3])
//         addFood(steak[4], '#steak', () => {
//           console.log(steak[4])
//           addFood(steak[5], '#steak', () => {
//             console.log(steak[5])
//             addFood(steak[6], '#steak', () => {
//               console.log(steak[6])
//               addFood(steak[7], '#steak', () => {
//                 console.log(steak[7])
//                 const steakImg = document.createElement('img')
//                 steakImg.src = 'public/images/steak.jpg'
//                 table.appendChild(steakImg)
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });



// Iteration 2 using `.then()`
// addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
//   // ... your code here
//   addFood(mashPotatoes[1], '#mashPotatoes')
// });

 
// addFood(mashPotatoes[0], '#mashPotatoes')
// .then(() => {
//   return addFood(mashPotatoes[1], '#mashPotatoes')
// })
// .then(()=>{
//   return addFood(mashPotatoes[2], '#mashPotatoes')
// })
// .then(()=>{
//   return addFood(mashPotatoes[3], '#mashPotatoes')
// })
// .then(()=>{
//   return addFood(mashPotatoes[4], '#mashPotatoes'); 
// })
// .then(()=>{
//   const potatoImg = document.createElement('img')
//   potatoImg.src = 'public/images/mashPotatoes.jpg'
//    table.appendChild(potatoImg)
// })
// .catch((err) => console.log(err));



// // Iteration 3 using async and await

  async function makeFood(step, id, name) {
    for(i=0;i<step.length; i++){
      await addFood(step[i], id)
    }

     let img = document.createElement('img')
     img.src = `public/images/${name}.jpg` 
     table.append(img)
  }

  // makeFood(brusselSprouts, '#brusselSprouts', "brusselSprouts")
  // makeFood(mashPotatoes, '#mashPotatoes', "mashPotatoes");
  // makeFood(steak, '#steak', "steak");
 
  
// only 3 length??





async function meal(){
  
 const makeMash =  await makeFood(mashPotatoes, '#mashPotatoes', "mashPotatoes");
 const makeSteak =  await makeFood(steak, '#steak', "steak");
 const makeSprout = await makeFood(brusselSprouts, '#brusselSprouts', "brusselSprouts");
 }


//makeFood(eachStep)

function doneButton(){
  const table = document.querySelector('#table')
  const alertButton = document.createElement("button")
  alertButton.innerHTML = 'Dinner is served.'
  table.appendChild(alertButton)
}

/// sound not working anuy way i try
// const sound = document.createElement("audio")
// sound.src =  "public/media/dinnerIsServed.mp3"
// sound.play()
/// in html why not??  <audio id="serveSound" src="public/media/dinnerIsServed.mp3"></audio>


  Promise.all([meal()])
  .then(() => {
    doneButton()
   
    // sound!!!
  })
  .catch((err) => console.log(err));
