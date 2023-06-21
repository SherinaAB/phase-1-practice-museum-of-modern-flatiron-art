console.log('write your code here')
document.addEventListener('DOMContentLoaded',() => {
    fetchExhibit();
})

function fetchExhibit(){
    fetch(' http://localhost:3000/current-exhibits')
    .then(response => response.json( ))
    .then(data => { console.log(data)

        // console.log(`data I get back`,data)
            data.forEach(exhibit => {
                console.log('my objects',exhibit)
                addToComments(exhibit);
                addsWhatMakesSense(exhibit);
                commentPoster();
            })
    })}

//   Add to comments section

function addToComments(exhibit){
    console.log('comments function',exhibit)
    const commentsSection = document.querySelector("#comments-section")
    const commentArray = exhibit.comments
    console.log(`it worked!`,commentArray) //check if shows comments in array
    commentArray.forEach(comment => {
        const pTag = document.createElement('p')
        pTag.innerText = comment
        console.log(`individual pTag`,pTag)
        commentsSection.appendChild(pTag)
    })
}

// Add Exhibit Image ...bc it "makes sense" per instructions

function addsWhatMakesSense(exhibit){
    console.log(`checking makes sense exhibit image`,exhibit)
    // const mainClass = document.querySelector('.two-columns')

    const exhibitTitle = document.querySelector('#exhibit-title')
    const exhibitDescription = document.querySelector('#exhibit-description')
    const image = document.querySelector('#exhibit-image')

    exhibitTitle.innerText = exhibit.Title
    exhibitDescription.innerText = exhibit.description
    image.src = exhibit.image

    console.log(mainClass,h3)
}

// function displayImage(ramen){
//     console.log(ramen)
//     const img = document.createElement('img')
//     img.src = ramen.img
//     img.addEventListener('click',() =>{
//         showDetails(ramen)
//     })
//     ramenMenu.append(img)
// }

// Add User comment to List of Comments Section shown in Browser
function commentPoster(){
    const addComment = document.querySelector('#comment-form')
    let commentActual = addComment[0]
    
    addComment.addEventListener('submit',e => {
        e.preventDefault()
        console.log(e.target[0]) //e=event 
        console.log(addComment[0].value)
        const NewP = document.createElement('p')
        newP.innerText = commentActual.value
        commentsSection.append(newP)
    })
}

// Add ticket counte and text, when user clicks buy a ticket the counter event listener adds that users ticket sale and then adds text according to the readme

// function ticketStuff(){
    const ticketsButton = document.querySelector(`#buy-tickets-button`)
    let ticketsCounter = document.querySelector(`#tickets-bought`)
    
    // create event listene to count on each ticket bought
    let number = 0  //allowing us the assign a starting point to the counter and assigning it a variable of number ..at 0

    ticketsButton.addEventListener('click', e => { ///adding the listening behavior to listen when buy ticket button selected
        number++
        ticketsCounter.innerText = `${number} Tickets Bought`

    })

// bonus one


