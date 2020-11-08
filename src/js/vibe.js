const vibes = [
    "Message 1",
    "Message 2", 
    "Message 3", 
    "Message 4"
]

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector('.content').innerHTML = vibe;