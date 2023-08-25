import React from "react"
import boxes from "./boxData.js"
import Box from "./Box.js"
import "./styles.css"

function App(){
const [boxArray, setboxArray]= React.useState(boxes)
console.log(boxArray)
function toggle(id){
    setboxArray(prevBoxArray => {
        const newBoxes=[]
        
        for(let i=0; i<prevBoxArray.length; i++){
            if (prevBoxArray[i].id === id){
                newBoxes.push(
                    prevBoxArray[i],
                    !prevBoxArray[i].on
                )
            }else{
                newBoxes.push(prevBoxArray[i])
            }
        }
        return newBoxes
    })
    console.log(id)


}

const showBoxes = boxArray.map(box =>
        <Box 
            handleClick={toggle}
            id= {box.id}
            key={box.id}
            on={box.on}
        />
        )


        
    return (
        <main>
            <h1>Boxes will go here</h1>
            {showBoxes}
        </main>
    )
}
export default App







//contact Card Challenge
// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (719) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: false
//     })
    /**
     * Challenge: Use a ternary to determine which star image filename
     * should be used based on the `contact.isFavorite` property
     * 
     * `true` => "star-filled.png"
     * `false` => "star-empty.png"
     * 
     * Then use the starIcon value to display the correct image
     */
    
//     let starIcon = contact.isFavorite ? "./images/star-filled.png" : "./images/star-empty.png";
    
//     console.log(contact.isFavorite)
//     console.log(starIcon)
    
//     function toggleFavorite() {
//         setContact( prevContact => {
//            return {...prevContact,
//             isFavorite: !preContact.isFavorite
//         }
//         })
//     }
    
//     return (
//         <main>
//             <article className="card">
//                 <img src="./images/user.png" className="card--image" />
//                 <div className="card--info">
//                     <img 
//                         src={starIcon}
//                         className="card--favorite"
//                         onClick={toggleFavorite}
//                     />
//                     <h2 className="card--name">
//                         {contact.firstName} {contact.lastName}
//                     </h2>
//                     <p className="card--contact">{contact.phone}</p>
//                     <p className="card--contact">{contact.email}</p>
//                 </div>
                
//             </article>
//         </main>
//     )
// }



//Thing useState exercise
// function App() {
//     const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
    
//     function newThing(){
//         setThingsArray(prevThingsArray =>{ 
//             return [...prevThingsArray, `Thing ${prevThingsArray.length +1}`]
//             })
//     }

//     const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
//     return (
//         <div>
//             <button onClick={newThing}>Add Item</button>
//             {thingsElements}
//         </div>
//     )
// }

// export default App