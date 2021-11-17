addLayer("h", {
    name: "homepage",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#ffffff",
    row: "side",
    symbol: "🏠",
    position: 0,
    branches: ["p"],
    tooltip: "Go Back To The Home Page",
    clickables: {
        11: {
            title: "Go Home",
            canClick() {return true},
            onClick() {
                window.location.href = "https://RTXT25.github.io"
            },
            tooltip: "Go Back To Home Page"
        }
    },
    tabFormat: [
        ["clickable", 11]
    ]
})
addLayer("sii", {
    name: "Stuff I In",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#ffffff",
    row: 0,
    symbol: "🖥️",
    position: 0,
    branches: ["p"],
    tooltip: "The Stuff I Am In",
    clickables: {
        11: {
            title: "Play Here", // The Bored Tree
            canClick() {return true},
            onClick() {
                window.location.href = "https://rtxt25.github.io/The-Bored-Tree/"
            }
        },
        12: {
            title: "Play Here", // Project Orion
            canClick() {return true},
            onClick() {
                window.location.href = "https://rtxt25.github.io/project-orion/"
            }
        },
        13: {
            title: "Play Here", // Plus 1 Tree
            canClick() {return true},
            onClick() {
                window.location.href = "https://rtxt25.github.io/plus1tree"
            }
        },
        14: {
            title: "",
            canClick() {return true},
            onClick() {
                window.location.href = "https://RTXT25.github.io"
            }
        },
        69: {
            title: "Menace Client",
            canClick() {return true},
            onClick() {
                window.location.href = "https://github.com/MenaceClient"
            }
        },
    },
    infoboxes:{
        TBT: {
            title: "The Bored Tree",
            body() { return "WIP Game I Am Making" },
        },
        PO: {
            title: "Project Orion",
            body() { return "WIP Game I Am Making" },
        },
        P1T: {
            title: "Plus 1 Tree",
            body() { return "WIP Game I Am Making" },
        },
        M: {
            title: "Menace CLient",
            body() { return "A Minecraft Client That I Am Part Of" },
        },
    },
    tabFormat: {
        "All The Things": {
            content: [

            ],
        },
        "Games": {
            content: [
                ["row", [["clickable", 11],["infobox","TBT"]],],
                ["row", [["clickable", 12],["infobox","PO"]],],
                ["row", [["clickable", 13],["infobox","P1T"]],],
            ],
        },
        "Other Stuff": {
            content: [
                ["row", ["clickable", 69],["infobox","M"],],
            ],
        },

    }
})
