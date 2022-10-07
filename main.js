const notes = [
    {
        id: 1,
        topics: [ "strategy", "professional", "help" ],
        text: "Review all my old code before asking for help or looking at hints.",
        author: "Samantha Maas",
        date: "2020-11-09"
    },
    {
        id: 2,
        topics: [ "thinking", "help" ],
        text: "I have found that slowing down and thinking about the problem, and writing out the comments makes it vastly easier to write code.",
        author: "Gib Jeffries",
        date: "2021-01-18"
    },
    {
        id: 3,
        topics: [ "reminder", "github" ],
        text: "Need to have all my code backed up to Github by the end of the week.",
        author: "Rebecca Parker",
        date: "2021-02-25"
    },
    {
        id: 4,
        topics: [ "strategy", "github" ],
        text: "Always work on a branch and submit a PR, even if I'm working on my own project.",
        author: "Red Tilson",
        date: "2020-11-25"
    }
]

const filteredNotes = []


for (const filTopic of notes) {
        if (filTopic.topics.includes("github")) {
            filteredNotes.push(filTopic)
    }           
}        
console.log(filteredNotes)




let changeHtml = ""

for (const note of notes){
    changeHtml += `<article>
    ${note.text}`
        for (const sections of note.topics) {
                changeHtml += `<section>${sections}</section>`
                
                

                changeHtml += `</article>`
        }    
    }
console.log(changeHtml)