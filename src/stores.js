const stores = [
    {
    storeID: "1",
    storeName: "Steam",
    isActive: 1,
    images: {
    banner: "/img/stores/banners/0.png",
    logo: "/img/stores/logos/0.png",
    icon: "/img/stores/icons/0.png",
    url: "https://store.steampowered.com/"
    }
    },
    {
    storeID: "2",
    storeName: "GamersGate",
    isActive: 1,
    images: {
    banner: "/img/stores/banners/1.png",
    logo: "/img/stores/logos/1.png",
    icon: "/img/stores/icons/1.png",
    url: "https://www.gamersgate.com/"
    }
    },
    {
    storeID: "3",
    storeName: "GreenManGaming",
    isActive: 1,
    images: {
    banner: "/img/stores/banners/2.png",
    logo: "/img/stores/logos/2.png",
    icon: "/img/stores/icons/2.png",
    url: "https://www.greenmangaming.com/"
    }
    },
    {
    storeID: "4",
    storeName: "Amazon",
    isActive: 0,
    images: {
    banner: "/img/stores/banners/3.png",
    logo: "/img/stores/logos/3.png",
    icon: "/img/stores/icons/3.png",
    url: "https://www.amazon.com/"
    }
    },
    {
    storeID: "5",
    storeName: "GameStop",
    isActive: 0,
    images: {
    banner: "/img/stores/banners/4.png",
    logo: "/img/stores/logos/4.png",
    icon: "/img/stores/icons/4.png",
    url: "https://www.gamestop.com/"
    }
    },
    {
    storeID: "6",
    storeName: "Direct2Drive",
    isActive: 1,
    images: {
    banner: "/img/stores/banners/5.png",
    logo: "/img/stores/logos/5.png",
    icon: "/img/stores/icons/5.png",
    url: "https://www.direct2drive.com/#!/pc"
    }
    },
    {
    storeID: "7",
    storeName: "GoG",
    isActive: 1,
    images: {
    banner: "/img/stores/banners/6.png",
    logo: "/img/stores/logos/6.png",
    icon: "/img/stores/icons/6.png",
    url: "https://www.gog.com/"
    }
    },
    {
    storeID: "8",
    storeName: "Origin",
    isActive: 1,
    images: {
    banner: "/img/stores/banners/7.png",
    logo: "/img/stores/logos/7.png",
    icon: "/img/stores/icons/7.png",
    url: "https://www.origin.com/usa/en-us/store"
    }
    },
    {
    storeID: "9",
    storeName: "Get Games",
    isActive: 0,
    images: {
    banner: "/img/stores/banners/8.png",
    logo: "/img/stores/logos/8.png",
    icon: "/img/stores/icons/8.png",
    url: 'https://getgamez.net/'
    }
    },
    {
    storeID: "10",
    storeName: "Shiny Loot",
    isActive: 0,
    images: {
    banner: "/img/stores/banners/9.png",
    logo: "/img/stores/logos/9.png",
    icon: "/img/stores/icons/9.png",
    url: "https://groupees.com/shinyloot"
    }
    },
    {
    storeID: "11",
    storeName: "Humble Store",
    isActive: 1,
    images: {
    banner: "/img/stores/banners/10.png",
    logo: "/img/stores/logos/10.png",
    icon: "/img/stores/icons/10.png",
    url: "https://www.humblebundle.com/store"
    }
    },
    {
    storeID: "12",
    storeName: "Desura",
    isActive: 0,
    images: {
    banner: "/img/stores/banners/11.png",
    logo: "/img/stores/logos/11.png",
    icon: "/img/stores/icons/11.png",
    url: "N/A"
    }
    },
    {
    storeID: "13",
    storeName: "Uplay",
    isActive: 1,
    images: {
    banner: "/img/stores/banners/12.png",
    logo: "/img/stores/logos/12.png",
    icon: "/img/stores/icons/12.png",
    url: "https://uplay.ubisoft.com/en-GB"
    }
    },
    {
    storeID: "14",
    storeName: "IndieGameStand",
    isActive: 0,
    images: {
    banner: "/img/stores/banners/13.png",
    logo: "/img/stores/logos/13.png",
    icon: "/img/stores/icons/13.png",
    url: "N/A"
    }
    },
    {
    storeID: "15",
    storeName: "Fanatical",
    isActive: 1,
    images: {
    banner: "/img/stores/banners/14.png",
    logo: "/img/stores/logos/14.png",
    icon: "/img/stores/icons/14.png",
    Url: "https://www.fanatical.com/"
    }
    },
    {
    storeID: "16",
    storeName: "Gamesrocket",
    isActive: 0,
    images: {
    banner: "/img/stores/banners/15.png",
    logo: "/img/stores/logos/15.png",
    icon: "/img/stores/icons/15.png",
    url: "https://www.gamesrocket.com/"
    }
    },
    {
    storeID: "17",
    storeName: "Games Republic",
    isActive: 0,
    images: {
    banner: "/img/stores/banners/16.png",
    logo: "/img/stores/logos/16.png",
    icon: "/img/stores/icons/16.png",
    url: "https://gamesrepublic.com/"
    }
    },
    {
    storeID: "18",
    storeName: "SilaGames",
    isActive: 0,
    images: {
    banner: "/img/stores/banners/17.png",
    logo: "/img/stores/logos/17.png",
    icon: "/img/stores/icons/17.png",
    url: "N/A"
    }
    },
    {
    storeID: "19",
    storeName: "Playfield",
    isActive: 0,
    images: {
    banner: "/img/stores/banners/18.png",
    logo: "/img/stores/logos/18.png",
    icon: "/img/stores/icons/18.png",
    url: "N/A"

    }
    },
    {
    storeID: "20",
    storeName: "ImperialGames",
    isActive: 0,
    images: {
    banner: "/img/stores/banners/19.png",
    logo: "/img/stores/logos/19.png",
    icon: "/img/stores/icons/19.png",
    url: "https://www.imperialgames.co.uk/shop/index.php"
    }
    },
    {
    storeID: "21",
    storeName: "WinGameStore",
    isActive: 1,
    images: {
    banner: "/img/stores/banners/20.png",
    logo: "/img/stores/logos/20.png",
    icon: "/img/stores/icons/20.png",
    url: "https://www.wingamestore.com/"
    }
    },
    {
    storeID: "22",
    storeName: "FunStockDigital",
    isActive: 0,
    images: {
    banner: "/img/stores/banners/21.png",
    logo: "/img/stores/logos/21.png",
    icon: "/img/stores/icons/21.png",
    url: "https://funstock.co.uk/"
    }
    },
    {
    storeID: "23",
    storeName: "GameBillet",
    isActive: 1,
    images: {
    banner: "/img/stores/banners/22.png",
    logo: "/img/stores/logos/22.png",
    icon: "/img/stores/icons/22.png",
    url: "https://www.gamebillet.com/"

    }
    },
    {
    storeID: "24",
    storeName: "Voidu",
    isActive: 1,
    images: {
    banner: "/img/stores/banners/23.png",
    logo: "/img/stores/logos/23.png",
    icon: "/img/stores/icons/23.png",
    url: "https://www.voidu.com/en/"
    }
    },
    {
    storeID: "25",
    storeName: "Epic Games Store",
    isActive: 1,
    images: {
    banner: "/img/stores/banners/24.png",
    logo: "/img/stores/logos/24.png",
    icon: "/img/stores/icons/24.png",
    url: "https://www.epicgames.com/store/en-US/"
    }
    },
    {
    storeID: "26",
    storeName: "Razer Game Store",
    isActive: 0,
    images: {
    banner: "/img/stores/banners/25.png",
    logo: "/img/stores/logos/25.png",
    icon: "/img/stores/icons/25.png",
    url: "https://www.razer.com/gamestore"
    }
    },
    {
    storeID: "27",
    storeName: "Gamesplanet",
    isActive: 1,
    images: {
    banner: "/img/stores/banners/26.png",
    logo: "/img/stores/logos/26.png",
    icon: "/img/stores/icons/26.png",
    url: "https://us.gamesplanet.com/"
    }
    },
    {
    storeID: "28",
    storeName: "Gamesload",
    isActive: 1,
    images: {
    banner: "/img/stores/banners/27.png",
    logo: "/img/stores/logos/27.png",
    icon: "/img/stores/icons/27.png",
    url: "https://www.gamesload.com/home_mixed.html"
    }
    },
    {
    storeID: "29",
    storeName: "2Game",
    isActive: 1,
    images: {
    banner: "/img/stores/banners/28.png",
    logo: "/img/stores/logos/28.png",
    icon: "/img/stores/icons/28.png",
    url: "https://2game.com/en-us/"
    }
    },
    {
    storeID: "30",
    storeName: "IndieGala",
    isActive: 1,
    images: {
    banner: "/img/stores/banners/29.png",
    logo: "/img/stores/logos/29.png",
    icon: "/img/stores/icons/29.png",
    url: "https://www.indiegala.com/"
    }
    }
    ]

    export default stores