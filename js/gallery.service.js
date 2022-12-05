'use strict'


var gProjs = [
    {
        id: "minesweeper",
        name: "MineSweeper",
        title: "Minesweeper game",
        desc: "שולה מוקשים האחת והיחידה חוזרת ובגדול",
        url: "https://lioravshalomov.github.io/mineSweeper1.0/",
        publishedAt: 1670554058000,
        labels: ["Matrixes"],
    },
    {
        id: "touchnums",
        name: "Touch-Nums",
        title: "touch-nums game",
        desc: "תלחץ על מספרים ותבזבז את הזמן כי למה לא",
        url: "https://lioravshalomov.github.io/touch-nums/",
        publishedAt: 1668888549000,
        labels: ["Matrixes"],
    },
    {
        id: "inpicture",
        name: "In-Picture",
        title: "in picture game",
        desc: "?מה בתמנה",
        url: "https://lioravshalomov.github.io/in-picture/",
        publishedAt: 1668770858000,
        labels: ["quest"],
    },
    {
        id: "guessme",
        name: "GuessMe",
        title: "Guess-me game",
        desc: "?מי אני",
        url: "https://lioravshalomov.github.io/guess-me/",
        publishedAt: 1448693940000,
        labels: ["quest"],
    },
    // {
    //     id: "minesweeper",
    //     name: "MineSweeper",
    //     title: "tttttttt",
    //     desc: "lorem ipsum lorem ipsum lorem ipsum",
    //     url: "#",
    //     publishedAt: 1448693940000,
    //     labels: ["Matrixes"],
    // },
    // {
    //     id: "minesweeper",
    //     name: "MineSweeper",
    //     title: "Better push those boxes",
    //     desc: "lorem ipsum lorem ipsum lorem ipsum",
    //     url: "#",
    //     publishedAt: 1448693940000,
    //     labels: ["Matrixes"],
    // }
]

function getProjs() {
    return gProjs
}

function getProjId(id) {
    var projId = gProjs.find(project => id === project.id)
    return projId
}




function getDate(proj) {
    const date = new Date(proj.publishedAt)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDay()

    return day + '/' + month + '/' + year
}