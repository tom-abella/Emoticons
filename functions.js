let myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiFromlocalStorage = JSON.parse(localStorage.getItem("myEmojis")) 
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const addBtn = document.getElementById("add-btn")
const removeBtn = document.getElementById("remove-btn")
const removeAllBtn = document.getElementById("removeAll-btn")

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
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        localStorage.setItem("myEmoji",JSON.stringify(myEmojis.value))
        emojiInput.value = ""
        renderEmojis()
    }
})
//remove Emoji
removeBtn.addEventListener("click", function() {
    myEmojis.pop()
    localStorage.removeItem("myEmoji",JSON.stringify(myEmojis.value))
    renderEmojis()
})

removeAllBtn.addEventListener("click", function() {
    myEmojis = []
    localStorage.removeItem("myEmoji",JSON.stringify(myEmojis.value))
    renderEmojis()
})

