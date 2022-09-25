let myEmojis = []

const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const addBtn = document.getElementById("add-btn")
const removeBtn = document.getElementById("remove-btn")
const removeAllBtn = document.getElementById("removeAll-btn")
const mine = document.querySelector(".mine")

    renderEmojis()

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}


//Add Emoji
addBtn.addEventListener("click", function(){
mine.textContent = "";
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})
//remove Emoji
removeBtn.addEventListener("click", function() {
    mine.textContent = "";
    myEmojis.pop()
    renderEmojis()
})

removeAllBtn.addEventListener("click", function() {
    mine.textContent = "";
    myEmojis = []
    renderEmojis()
})

