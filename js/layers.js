addLayer("h", {
    name: "homepage",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#234567",
    row: 0,
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
    color: "#234567",
    row: 0,
    symbol: "🖥️",
    position: 0,
    branches: ["p"],
    tooltip: "The Stuff I Am In",
    clickables: {
        11: {
            title: "The Bored Tree",
            canClick() {return true},
            onClick() {
                window.location.href = "https://rtxt25.github.io/the-bored-tree"
            }
        },
        12: {
            title: "Project Orion",
            canClick() {return true},
            onClick() {
                window.location.href = "https://rtxt25.github.io/project-orion/"
            }
        },
        13: {
            title: "",
            canClick() {return true},
            onClick() {
                window.location.href = "https://RTXT25.github.io"
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
        
    tabFormat: {
        "All The Things": {
            content: [

            ],
        },
        "Games": {
            content: [
                ["clickable", 11],
                ["clickable", 12],
            ],
        },
        "Other Stuff": {
            content: [
                ["clickable", 69],
            ],
        },

    }
})
