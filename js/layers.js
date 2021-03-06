addLayer("menu", {
    name: "menu",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#ffffff",
    row: "side",
    symbol: "🏠",
    position: 0,
    branches: ["p"],
    tooltip: "Open The Menu",
    clickables: {
        11: {
            title: "Go Home",
            canClick() {return false},
            onClick() {
                window.location.href = "https://RTXT25.github.io"
            },
            tooltip: "You Are Already On The Home Page"
        },
        12: {
            title: "Go To Downloads",
            canClick() {return true},
            onClick() {
                window.location.href = "https://RTXT25.github.io/Downloads"
            },
            tooltip: "Go To Downloads"
        },
    },
    infoboxes:{
        Main: {
            title: "Menu",
            body() { return "<h1>MENU</h1>" },
        },
    },
    tabFormat: [
        "blank",
        ["row", [["infobox", "Main"],],],
        "blank",
        ["row", [["clickable", 11],["clickable", 12],],],
    ]
})
addLayer("sii", {
    name: "Stuff I In",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#d47800",
    row: 0,
    nodeStyle: { "width" : "150px", "height" : "150px"},
    symbol: "<h1>🖥️</h1>",
    position: 0,
    branches: ["p"],
    tooltip: "Stuff And Stuff",
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
                window.location.href = "https://rtxt25.github.io/Project-Orion/"
            }
        },
        13: {
            title: "Play Here", // Plus 1 Tree
            canClick() {return true},
            onClick() {
                window.location.href = "https://rtxt25.github.io/Plus1Tree"
            }
        },
        14: {
            title: "Click Here",
            canClick() {return true},
            onClick() {
                window.location.href = "https://opensea.io/collection/etherclocks"
            }
        },
        5: {
            title: "",
            canClick() {return true},
            onClick() {
                window.location.href = "https://RTXT25.github.io"
            }
        },
        69: {
            title: "Find Here", // meance Client
            canClick() {return true},
            onClick() {
                window.location.href = "http://menaceclient.ml/"
            }
        },
        68: {
            title: "Click Here", // trees
            canClick() {return true},
            onClick() {
                window.location.href = "https://rtxt25.github.io/RTreeXTree/"
            }
        },
    },
    infoboxes:{
        Main: {
            title: "Stuff",
            body() { return "<h1>These Are My Projects And Stuff That I Have Done And Stuff</h1>" },
        },
        MTT: {
            title: "<h3>My Modding Tree Trees</h3>",
            body() { return "clicky clicky" },
        },
        TBT: {
            title: "<h3>The Bored Tree</h3>",
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
        EC: {
            title: "Ether Clocks",
            body() { return "Clock NFTS go BRRRRRRRRRR" },
        },
        M: {
            title: "Menace CLient",
            body() { return "A Minecraft Client That I Am Part Of" },
        }
    },
    tabFormat: {
        "Main Thing": {
            content: [
                ["infobox", "Main"],
                ["row", [["clickable", 68],["infobox","MTT"]],],
            ],
        },
        "Games": {
            content: [
                ["row", [["clickable", 12],["infobox","PO"]],],
                ["row", [["clickable", 11],["infobox","TBT"]],],
                ["row", [["clickable", 13],["infobox","P1T"]],],
            ],
        },
        "Other Stuff": {
            content: [
                ["row", [["clickable", 69],["infobox","M"]],],
                ["row", [["clickable", 14],["infobox","EC"]],],
            ],
        },

    }
})
addLayer("i", {
    name: "Info",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#0902db",
    row: 0,
    symbol: "<h1>ℹ️</h1>",
    position: 0,
    nodeStyle: { "width" : "150px", "height" : "150px"},
    branches: ["p"],
    tooltip: "Info And Info",
    clickables: {
        11: {
            title: "<h1>▶️</h1>", // 
            canClick() {return true},
            onClick() {
                window.location.href = "https://www.youtube.com/channel/UCd6XW-wNMjmUl2L-18Pjk5A"
            }
        },
        12: {
            title: "<h1>G</h1>", // 
            canClick() {return true},
            onClick() {
                window.location.href = "https://github.com/RTXT25"
            }
        },
        13: {
            title: "<h1>🐦<h1>", // 
            canClick() {return true},
            onClick() {
                window.location.href = "https://twitter.com/rtxt25"
            }
        },
        14: {
            title: "<h1>T<h1>",
            canClick() {return true},
            onClick() {
                window.location.href = "https://www.twitch.tv/rtxt25"
            }
        },
        15: {
            title: "<h1>R<h1>",
            canClick() {return true},
            onClick() {
                window.location.href = "https://www.reddit.com/user/Skool_human_boi"
            }
        },
    },
    infoboxes:{
        YT: {
            title: "My Youtube Channel",
            body() { return "A Youtube Channel That Might Make A Bad Video" },
        },
        github: {
            title: "My Github Profile",
            body() { return "Code and stuff here" },
        },
        reddit: {
            title: "My Reddit Account",
            body() { return "IDK its reddit" },
        },
        twitch: {
            title: "My Twitch Channel",
            body() { return "I never stream" },
        },
        twitter: {
            title: "My Twitter profile",
            body() { return "Random stuff" },
        },
        About: {
            title: "About",
            body() { return "I play video games and also things that make people question my sanity. " },
        },
    },
    tabFormat: {
        "About": {
            content: [
                ["row", [["infobox","About"]],],
            ],
        },
        "Links": {
            content: [
                ["row", [["clickable", 11],["infobox","YT"]],],
                ["row", [["clickable", 12],["infobox","github"]],],
                ["row", [["clickable", 13],["infobox","twitter"]],],
                ["row", [["clickable", 14],["infobox","twitch"]],],
                ["row", [["clickable", 15],["infobox","reddit"]],],
            ],
        },

    }
})
addLayer("M", {
    name: "Minecraft",
    startData() {return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#633a00",
    row: 1,
    symbol: "<h1>⛏️</h1>",
    position: 0,
    nodeStyle: { "width" : "150px", "height" : "150px"},
    branches: ["p"],
    tooltip: "Minecraft Stuff",
    clickables: {
        11: {
            title: "<h1>⬇️</h1>", // 
            canClick() {return true},
            onClick() {
                window.location.href = "https://rtxt25.github.io/Downloads/actualstuff/minecraft/mods/LEAN.jar"
            }
        },
        12: {
            title: "<h1>⬇️</h1>", // 
            canClick() {return true},
            onClick() {
                window.location.href = "https://rtxt25.github.io/Downloads/actualstuff/minecraft/texturepack/RTXT25DefaultPVP/RTXT25-Default-PVPv1.0.1.zip"
            }
        },
    },
    infoboxes:{
        Lean: {
            title: "LEAN",
            body() { return "A Forge 1.17.1 Mod That adds Lean To The Game" },
        },
        pvpde: {
            title: "RTXT25 Default PVP v1.0.1",
            body() { return "A 1.8.9 PVP texture pack with textures from the 'texture update'. Find Older Versions of the pack <a href=https://rtxt25.github.io/Downloads>Here<a/>"},
        },
        About: {
            title: "My Minecraft Stuff",
            body() { return "Bad Minecraft Things Like Resource Packs and Mods" },
        },
    },
    tabFormat: {
        "About": {
            content: [
                ["row", [["infobox","About"]],],
            ],
        },
        "Downloads": {
            content: [
                ["row", [["clickable", 11],["infobox","Lean"]],],
                ["row", [["clickable", 12],["infobox","pvpde"]],],
            ],
        },

    }
})