addLayer("h", {
    name: "homepage",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#ffffff",
    nodeStyle: { "width" : "110px", "height" : "110px"},
    row: "404",
    symbol: "<h2>🏠</h2>",
    position: 0,
    branches: ["p"],
    tooltip: "Click Here To Return To The Home Page",
    clickables: {
        11: {
            title: "Go Home",
            canClick() {return true},
            onClick() {
                window.location.href = "https://RTXT25.github.io"
            },
            tooltip: "Click To Go To The Home Page"
        }
    },
    tabFormat: [
        "blank",
        ["clickable", 11]
    ]
})
addLayer("4", {
    name: "4",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#ffffff",
    row: 1,
    symbol: "<h1>4</h1>",
    position: 0,
    nodeStyle: { "width" : "150px", "height" : "150px"},
    branches: ["p"],
    tooltip: "4",
    clickables: {
    },
    infoboxes:{
        "404": {
            title: "<h1>404ed My Dude</h1>",
            body() { return "<h1>This Link Is does Not Exist Or Is Typed Incorrectly</h1>" },
        },
    },
    tabFormat: {
        "404": {
            content: [
                ["infobox","404"],
            ],
        },

    }
})
addLayer("0", {
    name: "0",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#ffffff",
    row: 1,
    symbol: "<h1>0</h1>",
    position: 1,
    nodeStyle: { "width" : "150px", "height" : "150px"},
    branches: ["p"],
    tooltip: "0",
    infoboxes:{
        "404": {
            title: "<h1>404ed My Dude</h1>",
            body() { return "<h1>This Link Is does Not Exist Or Is Typed Incorrectly</h1>" },
        },
    },
    tabFormat: {
        "404": {
            content: [
                ["infobox","404"],
            ],
        },

    }
})
addLayer("four", {
    name: "four",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#ffffff",
    row: 1,
    symbol: "<h1>4</h1>",
    position: 2,
    nodeStyle: { "width" : "150px", "height" : "150px"},
    branches: ["p"],
    tooltip: "4",
    clickables: {
    },
    infoboxes:{
        "404": {
            title: "<h1>404ed My Dude</h1>",
            body() { return "<h1>This Link Is does Not Exist Or Is Typed Incorrectly</h1>" },
        },
    },
    tabFormat: {
        "404": {
            content: [
                ["infobox","404"],
            ],
        },

    }
})
addLayer("e", {
    name: "e",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#ff0000",
    row: 0,
    symbol: "<h1>E</h1>",
    position: 0,
    nodeStyle: { "width" : "100px", "height" : "100px"},
    branches: ["p"],
    tooltip: "E",
    clickables: {
    },
    infoboxes:{
        "404": {
            title: "<h1>404ed My Dude</h1>",
            body() { return "<h1>This Link Is does Not Exist Or Is Typed Incorrectly</h1>" },
        },
    },
    tabFormat: {
        "404": {
            content: [
                ["infobox","404"],
            ],
        },

    }
})
addLayer("r", {
    name: "r",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#ff0000",
    row: 0,
    symbol: "<h1>R</h1>",
    position: 1,
    nodeStyle: { "width" : "100px", "height" : "100px"},
    branches: ["p"],
    tooltip: "R",
    clickables: {
    },
    infoboxes:{
        "404": {
            title: "<h1>404ed My Dude</h1>",
            body() { return "<h1>This Link Is does Not Exist Or Is Typed Incorrectly</h1>" },
        },
    },
    tabFormat: {
        "404": {
            content: [
                ["infobox","404"],
            ],
        },

    }
})
addLayer("o", {
    name: "o",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#ff0000",
    row: 0,
    symbol: "<h1>O</h1>",
    position: 2,
    nodeStyle: { "width" : "100px", "height" : "100px"},
    branches: ["p"],
    tooltip: "O",
    clickables: {
    },
    infoboxes:{
        "404": {
            title: "<h1>404ed My Dude</h1>",
            body() { return "<h1>This Link Is does Not Exist Or Is Typed Incorrectly</h1>" },
        },
    },
    tabFormat: {
        "404": {
            content: [
                ["infobox","404"],
            ],
        },

    }
})
addLayer("R", {
    name: "R",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#ff0000",
    row: 0,
    symbol: "<h1>R</h1>",
    position: 2,
    nodeStyle: { "width" : "100px", "height" : "100px"},
    branches: ["p"],
    tooltip: "R",
    clickables: {
    },
    infoboxes:{
        "404": {
            title: "<h1>404ed My Dude</h1>",
            body() { return "<h1>This Link Is does Not Exist Or Is Typed Incorrectly</h1>" },
        },
    },
    tabFormat: {
        "404": {
            content: [
                ["infobox","404"],
            ],
        },

    }
})
addLayer("ar", {
    name: "ar",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#ff0000",
    row: 0,
    symbol: "<h1>R</h1>",
    position: 4,
    nodeStyle: { "width" : "100px", "height" : "100px"},
    branches: ["p"],
    tooltip: "R",
    clickables: {
    },
    infoboxes:{
        "404": {
            title: "<h1>404ed My Dude</h1>",
            body() { return "<h1>This Link Is does Not Exist Or Is Typed Incorrectly</h1>" },
        },
    },
    tabFormat: {
        "404": {
            content: [
                ["infobox","404"],
            ],
        },

    }
})