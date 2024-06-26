const pkmnData = [
	{
		name: "Bulbasaur",
		value: "bulbasaur",
		icon: "bulbasaur",
		id: "1",
		exclude: [
			"sv"
		]
	},
	{
		name: "Ivysaur",
		value: "ivysaur",
		icon: "ivysaur",
		id: "2",
		exclude: [
			"sv"
		]
	},
	{
		name: "Venusaur",
		value: "venusaur",
		icon: "venusaur",
		id: "3",
		exclude: [
			"sv"
		]
	},
	{
		name: "Charmander",
		value: "charmander",
		icon: "charmander",
		id: "4"
	},
	{
		name: "Charmeleon",
		value: "charmeleon",
		icon: "charmeleon",
		id: "5"
	},
	{
		name: "Charizard",
		value: "charizard",
		icon: "charizard",
		id: "6"
	},
	{
		name: "Squirtle",
		value: "squirtle",
		icon: "squirtle",
		id: "7",
		exclude: [
			"sv"
		]
	},
	{
		name: "Wartortle",
		value: "wartortle",
		icon: "wartortle",
		id: "8",
		exclude: [
			"sv"
		]
	},
	{
		name: "Blastoise",
		value: "blastoise",
		icon: "blastoise",
		id: "9",
		exclude: [
			"sv"
		]
	},
	{
		name: "Caterpie",
		value: "caterpie",
		icon: "caterpie",
		id: "10",
		exclude: [
			"sv"
		]
	},
	{
		name: "Metapod",
		value: "metapod",
		icon: "metapod",
		id: "11",
		exclude: [
			"sv"
		]
	},
	{
		name: "Butterfree",
		value: "butterfree",
		icon: "butterfree",
		id: "12",
		exclude: [
			"sv"
		]
	},
	{
		name: "Weedle",
		value: "weedle",
		icon: "weedle",
		id: "13",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Kakuna",
		value: "kakuna",
		icon: "kakuna",
		id: "14",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Beedrill",
		value: "beedrill",
		icon: "beedrill",
		id: "15",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Pidgey",
		value: "pidgey",
		icon: "pidgey",
		id: "16",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Pidgeotto",
		value: "pidgeotto",
		icon: "pidgeotto",
		id: "17",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Pidgeot",
		value: "pidgeot",
		icon: "pidgeot",
		id: "18",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Rattata",
		value: "rattata",
		icon: "rattata",
		id: "19",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Raticate",
		value: "raticate",
		icon: "raticate",
		id: "20",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Spearow",
		value: "spearow",
		icon: "spearow",
		id: "21",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Fearow",
		value: "fearow",
		icon: "fearow",
		id: "22",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Ekans",
		value: "ekans",
		icon: "ekans",
		id: "23",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Arbok",
		value: "arbok",
		icon: "arbok",
		id: "24",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Pikachu",
		value: "pikachu",
		icon: "pikachu",
		id: "25"
	},
	{
		name: "Raichu",
		value: "raichu",
		icon: "raichu",
		id: "26"
	},
	{
		name: "Sandshrew",
		value: "sandshrew",
		icon: "sandshrew",
		id: "27",
		exclude: [
			"sv"
		]
	},
	{
		name: "Sandslash",
		value: "sandslash",
		icon: "sandslash",
		id: "28",
		exclude: [
			"sv"
		]
	},
	{
		name: "Nidoran♀",
		value: "nidoran-f",
		icon: "nidoran-f",
		id: "29",
		exclude: [
			"sv"
		]
	},
	{
		name: "Nidorina",
		value: "nidorina",
		icon: "nidorina",
		id: "30",
		exclude: [
			"sv"
		]
	},
	{
		name: "Nidoqueen",
		value: "nidoqueen",
		icon: "nidoqueen",
		id: "31",
		exclude: [
			"sv"
		]
	},
	{
		name: "Nidoran♂",
		value: "nidoran-m",
		icon: "nidoran-m",
		id: "32",
		exclude: [
			"sv"
		]
	},
	{
		name: "Nidorino",
		value: "nidorino",
		icon: "nidorino",
		id: "33",
		exclude: [
			"sv"
		]
	},
	{
		name: "Nidoking",
		value: "nidoking",
		icon: "nidoking",
		id: "34",
		exclude: [
			"sv"
		]
	},
	{
		name: "Clefairy",
		value: "clefairy",
		icon: "clefairy",
		id: "35",
		exclude: [
			"sv"
		]
	},
	{
		name: "Clefable",
		value: "clefable",
		icon: "clefable",
		id: "36",
		exclude: [
			"sv"
		]
	},
	{
		name: "Vulpix",
		value: "vulpix",
		icon: "vulpix",
		id: "37",
		exclude: [
			"sv"
		]
	},
	{
		name: "Ninetales",
		value: "ninetales",
		icon: "ninetales",
		id: "38",
		exclude: [
			"sv"
		]
	},
	{
		name: "Jigglypuff",
		value: "jigglypuff",
		icon: "jigglypuff",
		id: "39"
	},
	{
		name: "Wigglytuff",
		value: "wigglytuff",
		icon: "wigglytuff",
		id: "40"
	},
	{
		name: "Zubat",
		value: "zubat",
		icon: "zubat",
		id: "41",
		exclude: [
			"sv"
		]
	},
	{
		name: "Golbat",
		value: "golbat",
		icon: "golbat",
		id: "42",
		exclude: [
			"sv"
		]
	},
	{
		name: "Oddish",
		value: "oddish",
		icon: "oddish",
		id: "43",
		exclude: [
			"sv"
		]
	},
	{
		name: "Gloom",
		value: "gloom",
		icon: "gloom",
		id: "44",
		exclude: [
			"sv"
		]
	},
	{
		name: "Vileplume",
		value: "vileplume",
		icon: "vileplume",
		id: "45",
		exclude: [
			"sv"
		]
	},
	{
		name: "Paras",
		value: "paras",
		icon: "paras",
		id: "46",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Parasect",
		value: "parasect",
		icon: "parasect",
		id: "47",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Venonat",
		value: "venonat",
		icon: "venonat",
		id: "48",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Venomoth",
		value: "venomoth",
		icon: "venomoth",
		id: "49",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Diglett",
		value: "diglett",
		icon: "diglett",
		id: "50"
	},
	{
		name: "Dugtrio",
		value: "dugtrio",
		icon: "dugtrio",
		id: "51"
	},
	{
		name: "Meowth",
		value: "meowth",
		icon: "meowth",
		id: "52"
	},
	{
		name: "Persian",
		value: "persian",
		icon: "persian",
		id: "53"
	},
	{
		name: "Psyduck",
		value: "psyduck",
		icon: "psyduck",
		id: "54"
	},
	{
		name: "Golduck",
		value: "golduck",
		icon: "golduck",
		id: "55"
	},
	{
		name: "Mankey",
		value: "mankey",
		icon: "mankey",
		id: "56",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Primeape",
		value: "primeape",
		icon: "primeape",
		id: "57",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Growlithe",
		value: "growlithe",
		icon: "growlithe",
		id: "58"
	},
	{
		name: "Arcanine",
		value: "arcanine",
		icon: "arcanine",
		id: "59"
	},
	{
		name: "Poliwag",
		value: "poliwag",
		icon: "poliwag",
		id: "60",
		exclude: [
			"sv"
		]
	},
	{
		name: "Poliwhirl",
		value: "poliwhirl",
		icon: "poliwhirl",
		id: "61",
		exclude: [
			"sv"
		]
	},
	{
		name: "Poliwrath",
		value: "poliwrath",
		icon: "poliwrath",
		id: "62",
		exclude: [
			"sv"
		]
	},
	{
		name: "Abra",
		value: "abra",
		icon: "abra",
		id: "63",
		exclude: [
			"sv"
		]
	},
	{
		name: "Kadabra",
		value: "kadabra",
		icon: "kadabra",
		id: "64",
		exclude: [
			"sv"
		]
	},
	{
		name: "Alakazam",
		value: "alakazam",
		icon: "alakazam",
		id: "65",
		exclude: [
			"sv"
		]
	},
	{
		name: "Machop",
		value: "machop",
		icon: "machop",
		id: "66",
		exclude: [
			"sv"
		]
	},
	{
		name: "Machoke",
		value: "machoke",
		icon: "machoke",
		id: "67",
		exclude: [
			"sv"
		]
	},
	{
		name: "Machamp",
		value: "machamp",
		icon: "machamp",
		id: "68",
		exclude: [
			"sv"
		]
	},
	{
		name: "Bellsprout",
		value: "bellsprout",
		icon: "bellsprout",
		id: "69",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Weepinbell",
		value: "weepinbell",
		icon: "weepinbell",
		id: "70",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Victreebel",
		value: "victreebel",
		icon: "victreebel",
		id: "71",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Tentacool",
		value: "tentacool",
		icon: "tentacool",
		id: "72",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tentacruel",
		value: "tentacruel",
		icon: "tentacruel",
		id: "73",
		exclude: [
			"sv"
		]
	},
	{
		name: "Geodude",
		value: "geodude",
		icon: "geodude",
		id: "74",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Graveler",
		value: "graveler",
		icon: "graveler",
		id: "75",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Golem",
		value: "golem",
		icon: "golem",
		id: "76",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Ponyta",
		value: "ponyta",
		icon: "ponyta",
		id: "77",
		exclude: [
			"sv"
		]
	},
	{
		name: "Rapidash",
		value: "rapidash",
		icon: "rapidash",
		id: "78",
		exclude: [
			"sv"
		]
	},
	{
		name: "Slowpoke",
		value: "slowpoke",
		icon: "slowpoke",
		id: "79"
	},
	{
		name: "Slowbro",
		value: "slowbro",
		icon: "slowbro",
		id: "80"
	},
	{
		name: "Magnemite",
		value: "magnemite",
		icon: "magnemite",
		id: "81"
	},
	{
		name: "Magneton",
		value: "magneton",
		icon: "magneton",
		id: "82"
	},
	{
		name: "Farfetch'd",
		value: "farfetchd",
		icon: "farfetchd",
		id: "83",
		exclude: [
			"sv"
		]
	},
	{
		name: "Doduo",
		value: "doduo",
		icon: "doduo",
		id: "84",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Dodrio",
		value: "dodrio",
		icon: "dodrio",
		id: "85",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Seel",
		value: "seel",
		icon: "seel",
		id: "86",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Dewgong",
		value: "dewgong",
		icon: "dewgong",
		id: "87",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Grimer",
		value: "grimer",
		icon: "grimer",
		id: "88",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Muk",
		value: "muk",
		icon: "muk",
		id: "89",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Shellder",
		value: "shellder",
		icon: "shellder",
		id: "90"
	},
	{
		name: "Cloyster",
		value: "cloyster",
		icon: "cloyster",
		id: "91"
	},
	{
		name: "Gastly",
		value: "gastly",
		icon: "gastly",
		id: "92"
	},
	{
		name: "Haunter",
		value: "haunter",
		icon: "haunter",
		id: "93"
	},
	{
		name: "Gengar",
		value: "gengar",
		icon: "gengar",
		id: "94"
	},
	{
		name: "Onix",
		value: "onix",
		icon: "onix",
		id: "95",
		exclude: [
			"sv"
		]
	},
	{
		name: "Drowzee",
		value: "drowzee",
		icon: "drowzee",
		id: "96",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Hypno",
		value: "hypno",
		icon: "hypno",
		id: "97",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Krabby",
		value: "krabby",
		icon: "krabby",
		id: "98",
		exclude: [
			"sv"
		]
	},
	{
		name: "Kingler",
		value: "kingler",
		icon: "kingler",
		id: "99",
		exclude: [
			"sv"
		]
	},
	{
		name: "Voltorb",
		value: "voltorb",
		icon: "voltorb",
		id: "100",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Electrode",
		value: "electrode",
		icon: "electrode",
		id: "101",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Exeggcute",
		value: "exeggcute",
		icon: "exeggcute",
		id: "102",
		exclude: [
			"sv"
		]
	},
	{
		name: "Exeggutor",
		value: "exeggutor",
		icon: "exeggutor",
		id: "103",
		exclude: [
			"sv"
		]
	},
	{
		name: "Cubone",
		value: "cubone",
		icon: "cubone",
		id: "104",
		exclude: [
			"sv"
		]
	},
	{
		name: "Marowak",
		value: "marowak",
		icon: "marowak",
		id: "105",
		exclude: [
			"sv"
		]
	},
	{
		name: "Hitmonlee",
		value: "hitmonlee",
		icon: "hitmonlee",
		id: "106",
		exclude: [
			"sv"
		]
	},
	{
		name: "Hitmonchan",
		value: "hitmonchan",
		icon: "hitmonchan",
		id: "107",
		exclude: [
			"sv"
		]
	},
	{
		name: "Lickitung",
		value: "lickitung",
		icon: "lickitung",
		id: "108",
		exclude: [
			"sv"
		]
	},
	{
		name: "Koffing",
		value: "koffing",
		icon: "koffing",
		id: "109",
		exclude: [
			"sv"
		]
	},
	{
		name: "Weezing",
		value: "weezing",
		icon: "weezing",
		id: "110",
		exclude: [
			"sv"
		]
	},
	{
		name: "Rhyhorn",
		value: "rhyhorn",
		icon: "rhyhorn",
		id: "111",
		exclude: [
			"sv"
		]
	},
	{
		name: "Rhydon",
		value: "rhydon",
		icon: "rhydon",
		id: "112",
		exclude: [
			"sv"
		]
	},
	{
		name: "Chansey",
		value: "chansey",
		icon: "chansey",
		id: "113"
	},
	{
		name: "Tangela",
		value: "tangela",
		icon: "tangela",
		id: "114",
		exclude: [
			"sv"
		]
	},
	{
		name: "Kangaskhan",
		value: "kangaskhan",
		icon: "kangaskhan",
		id: "115",
		exclude: [
			"sv"
		]
	},
	{
		name: "Horsea",
		value: "horsea",
		icon: "horsea",
		id: "116",
		exclude: [
			"sv"
		]
	},
	{
		name: "Seadra",
		value: "seadra",
		icon: "seadra",
		id: "117",
		exclude: [
			"sv"
		]
	},
	{
		name: "Goldeen",
		value: "goldeen",
		icon: "goldeen",
		id: "118",
		exclude: [
			"sv"
		]
	},
	{
		name: "Seaking",
		value: "seaking",
		icon: "seaking",
		id: "119",
		exclude: [
			"sv"
		]
	},
	{
		name: "Staryu",
		value: "staryu",
		icon: "staryu",
		id: "120",
		exclude: [
			"sv"
		]
	},
	{
		name: "Starmie",
		value: "starmie",
		icon: "starmie",
		id: "121",
		exclude: [
			"sv"
		]
	},
	{
		name: "Mr. Mime",
		value: "mr-mime",
		icon: "mr-mime",
		id: "122",
		exclude: [
			"sv"
		]
	},
	{
		name: "Scyther",
		value: "scyther",
		icon: "scyther",
		id: "123"
	},
	{
		name: "Jynx",
		value: "jynx",
		icon: "jynx",
		id: "124",
		exclude: [
			"sv"
		]
	},
	{
		name: "Electabuzz",
		value: "electabuzz",
		icon: "electabuzz",
		id: "125",
		exclude: [
			"sv"
		]
	},
	{
		name: "Magmar",
		value: "magmar",
		icon: "magmar",
		id: "126",
		exclude: [
			"sv"
		]
	},
	{
		name: "Pinsir",
		value: "pinsir",
		icon: "pinsir",
		id: "127",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tauros",
		value: "tauros",
		icon: "tauros",
		id: "128"
	},
	{
		name: "Magikarp",
		value: "magikarp",
		icon: "magikarp",
		id: "129"
	},
	{
		name: "Gyarados",
		value: "gyarados",
		icon: "gyarados",
		id: "130"
	},
	{
		name: "Lapras",
		value: "lapras",
		icon: "lapras",
		id: "131",
		exclude: [
			"sv"
		]
	},
	{
		name: "Ditto",
		value: "ditto",
		icon: "ditto",
		id: "132"
	},
	{
		name: "Eevee",
		value: "eevee",
		icon: "eevee",
		id: "133"
	},
	{
		name: "Vaporeon",
		value: "vaporeon",
		icon: "vaporeon",
		id: "134"
	},
	{
		name: "Jolteon",
		value: "jolteon",
		icon: "jolteon",
		id: "135"
	},
	{
		name: "Flareon",
		value: "flareon",
		icon: "flareon",
		id: "136"
	},
	{
		name: "Porygon",
		value: "porygon",
		icon: "porygon",
		id: "137",
		exclude: [
			"sv"
		]
	},
	{
		name: "Omanyte",
		value: "omanyte",
		icon: "omanyte",
		id: "138",
		exclude: [
			"sv"
		]
	},
	{
		name: "Omastar",
		value: "omastar",
		icon: "omastar",
		id: "139",
		exclude: [
			"sv"
		]
	},
	{
		name: "Kabuto",
		value: "kabuto",
		icon: "kabuto",
		id: "140",
		exclude: [
			"sv"
		]
	},
	{
		name: "Kabutops",
		value: "kabutops",
		icon: "kabutops",
		id: "141",
		exclude: [
			"sv"
		]
	},
	{
		name: "Aerodactyl",
		value: "aerodactyl",
		icon: "aerodactyl",
		id: "142",
		exclude: [
			"sv"
		]
	},
	{
		name: "Snorlax",
		value: "snorlax",
		icon: "snorlax",
		id: "143",
		exclude: [
			"sv"
		]
	},
	{
		name: "Articuno",
		value: "articuno",
		icon: "articuno",
		id: "144"
	},
	{
		name: "Zapdos",
		value: "zapdos",
		icon: "zapdos",
		id: "145"
	},
	{
		name: "Moltres",
		value: "moltres",
		icon: "moltres",
		id: "146"
	},
	{
		name: "Dratini",
		value: "dratini",
		icon: "dratini",
		id: "147"
	},
	{
		name: "Dragonair",
		value: "dragonair",
		icon: "dragonair",
		id: "148"
	},
	{
		name: "Dragonite",
		value: "dragonite",
		icon: "dragonite",
		id: "149"
	},
	{
		name: "Mewtwo",
		value: "mewtwo",
		icon: "mewtwo",
		id: "150"
	},
	{
		name: "Mew",
		value: "mew",
		icon: "mew",
		id: "151"
	},
	{
		name: "Chikorita",
		value: "chikorita",
		icon: "chikorita",
		id: "152",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Bayleef",
		value: "bayleef",
		icon: "bayleef",
		id: "153",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Meganium",
		value: "meganium",
		icon: "meganium",
		id: "154",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Cyndaquil",
		value: "cyndaquil",
		icon: "cyndaquil",
		id: "155",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Quilava",
		value: "quilava",
		icon: "quilava",
		id: "156",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Typhlosion",
		value: "typhlosion",
		icon: "typhlosion",
		id: "157",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Totodile",
		value: "totodile",
		icon: "totodile",
		id: "158",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Croconaw",
		value: "croconaw",
		icon: "croconaw",
		id: "159",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Feraligatr",
		value: "feraligatr",
		icon: "feraligatr",
		id: "160",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Sentret",
		value: "sentret",
		icon: "sentret",
		id: "161",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Furret",
		value: "furret",
		icon: "furret",
		id: "162",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Hoothoot",
		value: "hoothoot",
		icon: "hoothoot",
		id: "163",
		exclude: [
			"sv"
		]
	},
	{
		name: "Noctowl",
		value: "noctowl",
		icon: "noctowl",
		id: "164",
		exclude: [
			"sv"
		]
	},
	{
		name: "Ledyba",
		value: "ledyba",
		icon: "ledyba",
		id: "165",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Ledian",
		value: "ledian",
		icon: "ledian",
		id: "166",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Spinarak",
		value: "spinarak",
		icon: "spinarak",
		id: "167",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Ariados",
		value: "ariados",
		icon: "ariados",
		id: "168",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Crobat",
		value: "crobat",
		icon: "crobat",
		id: "169",
		exclude: [
			"sv"
		]
	},
	{
		name: "Chinchou",
		value: "chinchou",
		icon: "chinchou",
		id: "170",
		exclude: [
			"sv"
		]
	},
	{
		name: "Lanturn",
		value: "lanturn",
		icon: "lanturn",
		id: "171",
		exclude: [
			"sv"
		]
	},
	{
		name: "Pichu",
		value: "pichu",
		icon: "pichu",
		id: "172"
	},
	{
		name: "Cleffa",
		value: "cleffa",
		icon: "cleffa",
		id: "173",
		exclude: [
			"sv"
		]
	},
	{
		name: "Igglybuff",
		value: "igglybuff",
		icon: "igglybuff",
		id: "174"
	},
	{
		name: "Togepi",
		value: "togepi",
		icon: "togepi",
		id: "175",
		exclude: [
			"sv"
		]
	},
	{
		name: "Togetic",
		value: "togetic",
		icon: "togetic",
		id: "176",
		exclude: [
			"sv"
		]
	},
	{
		name: "Natu",
		value: "natu",
		icon: "natu",
		id: "177",
		exclude: [
			"sv"
		]
	},
	{
		name: "Xatu",
		value: "xatu",
		icon: "xatu",
		id: "178",
		exclude: [
			"sv"
		]
	},
	{
		name: "Mareep",
		value: "mareep",
		icon: "mareep",
		id: "179",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Flaaffy",
		value: "flaaffy",
		icon: "flaaffy",
		id: "180",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Ampharos",
		value: "ampharos",
		icon: "ampharos",
		id: "181",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Bellossom",
		value: "bellossom",
		icon: "bellossom",
		id: "182",
		exclude: [
			"sv"
		]
	},
	{
		name: "Marill",
		value: "marill",
		icon: "marill",
		id: "183"
	},
	{
		name: "Azumarill",
		value: "azumarill",
		icon: "azumarill",
		id: "184"
	},
	{
		name: "Sudowoodo",
		value: "sudowoodo",
		icon: "sudowoodo",
		id: "185"
	},
	{
		name: "Politoed",
		value: "politoed",
		icon: "politoed",
		id: "186",
		exclude: [
			"sv"
		]
	},
	{
		name: "Hoppip",
		value: "hoppip",
		icon: "hoppip",
		id: "187",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Skiploom",
		value: "skiploom",
		icon: "skiploom",
		id: "188",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Jumpluff",
		value: "jumpluff",
		icon: "jumpluff",
		id: "189",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Aipom",
		value: "aipom",
		icon: "aipom",
		id: "190",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Sunkern",
		value: "sunkern",
		icon: "sunkern",
		id: "191",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Sunflora",
		value: "sunflora",
		icon: "sunflora",
		id: "192",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Yanma",
		value: "yanma",
		icon: "yanma",
		id: "193",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Wooper",
		value: "wooper",
		icon: "wooper",
		id: "194"
	},
	{
		name: "Quagsire",
		value: "quagsire",
		icon: "quagsire",
		id: "195"
	},
	{
		name: "Espeon",
		value: "espeon",
		icon: "espeon",
		id: "196"
	},
	{
		name: "Umbreon",
		value: "umbreon",
		icon: "umbreon",
		id: "197"
	},
	{
		name: "Murkrow",
		value: "murkrow",
		icon: "murkrow",
		id: "198",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Slowking",
		value: "slowking",
		icon: "slowking",
		id: "199"
	},
	{
		name: "Misdreavus",
		value: "misdreavus",
		icon: "misdreavus",
		id: "200",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Unown",
		value: "unown",
		icon: "unown",
		id: "201",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Wobbuffet",
		value: "wobbuffet",
		icon: "wobbuffet",
		id: "202",
		exclude: [
			"sv"
		]
	},
	{
		name: "Girafarig",
		value: "girafarig",
		icon: "girafarig",
		id: "203",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Pineco",
		value: "pineco",
		icon: "pineco",
		id: "204",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Forretress",
		value: "forretress",
		icon: "forretress",
		id: "205",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Dunsparce",
		value: "dunsparce",
		icon: "dunsparce",
		id: "206"
	},
	{
		name: "Gligar",
		value: "gligar",
		icon: "gligar",
		id: "207",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Steelix",
		value: "steelix",
		icon: "steelix",
		id: "208",
		exclude: [
			"sv"
		]
	},
	{
		name: "Snubbull",
		value: "snubbull",
		icon: "snubbull",
		id: "209",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Granbull",
		value: "granbull",
		icon: "granbull",
		id: "210",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Qwilfish",
		value: "qwilfish",
		icon: "qwilfish",
		id: "211"
	},
	{
		name: "Scizor",
		value: "scizor",
		icon: "scizor",
		id: "212"
	},
	{
		name: "Shuckle",
		value: "shuckle",
		icon: "shuckle",
		id: "213",
		exclude: [
			"sv"
		]
	},
	{
		name: "Heracross",
		value: "heracross",
		icon: "heracross",
		id: "214"
	},
	{
		name: "Sneasel",
		value: "sneasel",
		icon: "sneasel",
		id: "215"
	},
	{
		name: "Teddiursa",
		value: "teddiursa",
		icon: "teddiursa",
		id: "216",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Ursaring",
		value: "ursaring",
		icon: "ursaring",
		id: "217",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Slugma",
		value: "slugma",
		icon: "slugma",
		id: "218",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Magcargo",
		value: "magcargo",
		icon: "magcargo",
		id: "219",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Swinub",
		value: "swinub",
		icon: "swinub",
		id: "220",
		exclude: [
			"sv"
		]
	},
	{
		name: "Piloswine",
		value: "piloswine",
		icon: "piloswine",
		id: "221",
		exclude: [
			"sv"
		]
	},
	{
		name: "Corsola",
		value: "corsola",
		icon: "corsola",
		id: "222",
		exclude: [
			"sv"
		]
	},
	{
		name: "Remoraid",
		value: "remoraid",
		icon: "remoraid",
		id: "223",
		exclude: [
			"sv"
		]
	},
	{
		name: "Octillery",
		value: "octillery",
		icon: "octillery",
		id: "224",
		exclude: [
			"sv"
		]
	},
	{
		name: "Delibird",
		value: "delibird",
		icon: "delibird",
		id: "225"
	},
	{
		name: "Mantine",
		value: "mantine",
		icon: "mantine",
		id: "226",
		exclude: [
			"sv"
		]
	},
	{
		name: "Skarmory",
		value: "skarmory",
		icon: "skarmory",
		id: "227",
		exclude: [
			"sv"
		]
	},
	{
		name: "Houndour",
		value: "houndour",
		icon: "houndour",
		id: "228",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Houndoom",
		value: "houndoom",
		icon: "houndoom",
		id: "229",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Kingdra",
		value: "kingdra",
		icon: "kingdra",
		id: "230",
		exclude: [
			"sv"
		]
	},
	{
		name: "Phanpy",
		value: "phanpy",
		icon: "phanpy",
		id: "231",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Donphan",
		value: "donphan",
		icon: "donphan",
		id: "232",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Porygon2",
		value: "porygon2",
		icon: "porygon2",
		id: "233",
		exclude: [
			"sv"
		]
	},
	{
		name: "Stantler",
		value: "stantler",
		icon: "stantler",
		id: "234",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Smeargle",
		value: "smeargle",
		icon: "smeargle",
		id: "235",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Tyrogue",
		value: "tyrogue",
		icon: "tyrogue",
		id: "236",
		exclude: [
			"sv"
		]
	},
	{
		name: "Hitmontop",
		value: "hitmontop",
		icon: "hitmontop",
		id: "237",
		exclude: [
			"sv"
		]
	},
	{
		name: "Smoochum",
		value: "smoochum",
		icon: "smoochum",
		id: "238",
		exclude: [
			"sv"
		]
	},
	{
		name: "Elekid",
		value: "elekid",
		icon: "elekid",
		id: "239",
		exclude: [
			"sv"
		]
	},
	{
		name: "Magby",
		value: "magby",
		icon: "magby",
		id: "240",
		exclude: [
			"sv"
		]
	},
	{
		name: "Miltank",
		value: "miltank",
		icon: "miltank",
		id: "241",
		exclude: [
			"sv"
		]
	},
	{
		name: "Blissey",
		value: "blissey",
		icon: "blissey",
		id: "242"
	},
	{
		name: "Raikou",
		value: "raikou",
		icon: "raikou",
		id: "243",
		exclude: [
			"sv"
		]
	},
	{
		name: "Entei",
		value: "entei",
		icon: "entei",
		id: "244",
		exclude: [
			"sv"
		]
	},
	{
		name: "Suicune",
		value: "suicune",
		icon: "suicune",
		id: "245",
		exclude: [
			"sv"
		]
	},
	{
		name: "Larvitar",
		value: "larvitar",
		icon: "larvitar",
		id: "246"
	},
	{
		name: "Pupitar",
		value: "pupitar",
		icon: "pupitar",
		id: "247"
	},
	{
		name: "Tyranitar",
		value: "tyranitar",
		icon: "tyranitar",
		id: "248"
	},
	{
		name: "Lugia",
		value: "lugia",
		icon: "lugia",
		id: "249",
		exclude: [
			"sv"
		]
	},
	{
		name: "Ho-Oh",
		value: "ho-oh",
		icon: "ho-oh",
		id: "250",
		exclude: [
			"sv"
		]
	},
	{
		name: "Celebi",
		value: "celebi",
		icon: "celebi",
		id: "251",
		exclude: [
			"sv"
		]
	},
	{
		name: "Treecko",
		value: "treecko",
		icon: "treecko",
		id: "252",
		exclude: [
			"sv"
		]
	},
	{
		name: "Grovyle",
		value: "grovyle",
		icon: "grovyle",
		id: "253",
		exclude: [
			"sv"
		]
	},
	{
		name: "Sceptile",
		value: "sceptile",
		icon: "sceptile",
		id: "254",
		exclude: [
			"sv"
		]
	},
	{
		name: "Torchic",
		value: "torchic",
		icon: "torchic",
		id: "255",
		exclude: [
			"sv"
		]
	},
	{
		name: "Combusken",
		value: "combusken",
		icon: "combusken",
		id: "256",
		exclude: [
			"sv"
		]
	},
	{
		name: "Blaziken",
		value: "blaziken",
		icon: "blaziken",
		id: "257",
		exclude: [
			"sv"
		]
	},
	{
		name: "Mudkip",
		value: "mudkip",
		icon: "mudkip",
		id: "258",
		exclude: [
			"sv"
		]
	},
	{
		name: "Marshtomp",
		value: "marshtomp",
		icon: "marshtomp",
		id: "259",
		exclude: [
			"sv"
		]
	},
	{
		name: "Swampert",
		value: "swampert",
		icon: "swampert",
		id: "260",
		exclude: [
			"sv"
		]
	},
	{
		name: "Poochyena",
		value: "poochyena",
		icon: "poochyena",
		id: "261",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Mightyena",
		value: "mightyena",
		icon: "mightyena",
		id: "262",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Zigzagoon",
		value: "zigzagoon",
		icon: "zigzagoon",
		id: "263",
		exclude: [
			"sv"
		]
	},
	{
		name: "Linoone",
		value: "linoone",
		icon: "linoone",
		id: "264",
		exclude: [
			"sv"
		]
	},
	{
		name: "Wurmple",
		value: "wurmple",
		icon: "wurmple",
		id: "265",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Silcoon",
		value: "silcoon",
		icon: "silcoon",
		id: "266",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Beautifly",
		value: "beautifly",
		icon: "beautifly",
		id: "267",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Cascoon",
		value: "cascoon",
		icon: "cascoon",
		id: "268",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Dustox",
		value: "dustox",
		icon: "dustox",
		id: "269",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Lotad",
		value: "lotad",
		icon: "lotad",
		id: "270",
		exclude: [
			"sv"
		]
	},
	{
		name: "Lombre",
		value: "lombre",
		icon: "lombre",
		id: "271",
		exclude: [
			"sv"
		]
	},
	{
		name: "Ludicolo",
		value: "ludicolo",
		icon: "ludicolo",
		id: "272",
		exclude: [
			"sv"
		]
	},
	{
		name: "Seedot",
		value: "seedot",
		icon: "seedot",
		id: "273",
		exclude: [
			"sv"
		]
	},
	{
		name: "Nuzleaf",
		value: "nuzleaf",
		icon: "nuzleaf",
		id: "274",
		exclude: [
			"sv"
		]
	},
	{
		name: "Shiftry",
		value: "shiftry",
		icon: "shiftry",
		id: "275",
		exclude: [
			"sv"
		]
	},
	{
		name: "Taillow",
		value: "taillow",
		icon: "taillow",
		id: "276",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Swellow",
		value: "swellow",
		icon: "swellow",
		id: "277",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Wingull",
		value: "wingull",
		icon: "wingull",
		id: "278"
	},
	{
		name: "Pelipper",
		value: "pelipper",
		icon: "pelipper",
		id: "279"
	},
	{
		name: "Ralts",
		value: "ralts",
		icon: "ralts",
		id: "280"
	},
	{
		name: "Kirlia",
		value: "kirlia",
		icon: "kirlia",
		id: "281"
	},
	{
		name: "Gardevoir",
		value: "gardevoir",
		icon: "gardevoir",
		id: "282"
	},
	{
		name: "Surskit",
		value: "surskit",
		icon: "surskit",
		id: "283",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Masquerain",
		value: "masquerain",
		icon: "masquerain",
		id: "284",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Shroomish",
		value: "shroomish",
		icon: "shroomish",
		id: "285",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Breloom",
		value: "breloom",
		icon: "breloom",
		id: "286",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Slakoth",
		value: "slakoth",
		icon: "slakoth",
		id: "287",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Vigoroth",
		value: "vigoroth",
		icon: "vigoroth",
		id: "288",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Slaking",
		value: "slaking",
		icon: "slaking",
		id: "289",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Nincada",
		value: "nincada",
		icon: "nincada",
		id: "290",
		exclude: [
			"sv"
		]
	},
	{
		name: "Ninjask",
		value: "ninjask",
		icon: "ninjask",
		id: "291",
		exclude: [
			"sv"
		]
	},
	{
		name: "Shedinja",
		value: "shedinja",
		icon: "shedinja",
		id: "292",
		exclude: [
			"sv"
		]
	},
	{
		name: "Whismur",
		value: "whismur",
		icon: "whismur",
		id: "293",
		exclude: [
			"sv"
		]
	},
	{
		name: "Loudred",
		value: "loudred",
		icon: "loudred",
		id: "294",
		exclude: [
			"sv"
		]
	},
	{
		name: "Exploud",
		value: "exploud",
		icon: "exploud",
		id: "295",
		exclude: [
			"sv"
		]
	},
	{
		name: "Makuhita",
		value: "makuhita",
		icon: "makuhita",
		id: "296",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Hariyama",
		value: "hariyama",
		icon: "hariyama",
		id: "297",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Azurill",
		value: "azurill",
		icon: "azurill",
		id: "298"
	},
	{
		name: "Nosepass",
		value: "nosepass",
		icon: "nosepass",
		id: "299",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Skitty",
		value: "skitty",
		icon: "skitty",
		id: "300",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Delcatty",
		value: "delcatty",
		icon: "delcatty",
		id: "301",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Sableye",
		value: "sableye",
		icon: "sableye",
		id: "302"
	},
	{
		name: "Mawile",
		value: "mawile",
		icon: "mawile",
		id: "303",
		exclude: [
			"sv"
		]
	},
	{
		name: "Aron",
		value: "aron",
		icon: "aron",
		id: "304",
		exclude: [
			"sv"
		]
	},
	{
		name: "Lairon",
		value: "lairon",
		icon: "lairon",
		id: "305",
		exclude: [
			"sv"
		]
	},
	{
		name: "Aggron",
		value: "aggron",
		icon: "aggron",
		id: "306",
		exclude: [
			"sv"
		]
	},
	{
		name: "Meditite",
		value: "meditite",
		icon: "meditite",
		id: "307",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Medicham",
		value: "medicham",
		icon: "medicham",
		id: "308",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Electrike",
		value: "electrike",
		icon: "electrike",
		id: "309",
		exclude: [
			"sv"
		]
	},
	{
		name: "Manectric",
		value: "manectric",
		icon: "manectric",
		id: "310",
		exclude: [
			"sv"
		]
	},
	{
		name: "Plusle",
		value: "plusle",
		icon: "plusle",
		id: "311",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Minun",
		value: "minun",
		icon: "minun",
		id: "312",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Volbeat",
		value: "volbeat",
		icon: "volbeat",
		id: "313",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Illumise",
		value: "illumise",
		icon: "illumise",
		id: "314",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Roselia",
		value: "roselia",
		icon: "roselia",
		id: "315",
		exclude: [
			"sv"
		]
	},
	{
		name: "Gulpin",
		value: "gulpin",
		icon: "gulpin",
		id: "316",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Swalot",
		value: "swalot",
		icon: "swalot",
		id: "317",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Carvanha",
		value: "carvanha",
		icon: "carvanha",
		id: "318",
		exclude: [
			"sv"
		]
	},
	{
		name: "Sharpedo",
		value: "sharpedo",
		icon: "sharpedo",
		id: "319",
		exclude: [
			"sv"
		]
	},
	{
		name: "Wailmer",
		value: "wailmer",
		icon: "wailmer",
		id: "320",
		exclude: [
			"sv"
		]
	},
	{
		name: "Wailord",
		value: "wailord",
		icon: "wailord",
		id: "321",
		exclude: [
			"sv"
		]
	},
	{
		name: "Numel",
		value: "numel",
		icon: "numel",
		id: "322",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Camerupt",
		value: "camerupt",
		icon: "camerupt",
		id: "323",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Torkoal",
		value: "torkoal",
		icon: "torkoal",
		id: "324"
	},
	{
		name: "Spoink",
		value: "spoink",
		icon: "spoink",
		id: "325",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Grumpig",
		value: "grumpig",
		icon: "grumpig",
		id: "326",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Spinda",
		value: "spinda",
		icon: "spinda",
		id: "327",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Trapinch",
		value: "trapinch",
		icon: "trapinch",
		id: "328",
		exclude: [
			"sv"
		]
	},
	{
		name: "Vibrava",
		value: "vibrava",
		icon: "vibrava",
		id: "329",
		exclude: [
			"sv"
		]
	},
	{
		name: "Flygon",
		value: "flygon",
		icon: "flygon",
		id: "330",
		exclude: [
			"sv"
		]
	},
	{
		name: "Cacnea",
		value: "cacnea",
		icon: "cacnea",
		id: "331",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Cacturne",
		value: "cacturne",
		icon: "cacturne",
		id: "332",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Swablu",
		value: "swablu",
		icon: "swablu",
		id: "333"
	},
	{
		name: "Altaria",
		value: "altaria",
		icon: "altaria",
		id: "334"
	},
	{
		name: "Zangoose",
		value: "zangoose",
		icon: "zangoose",
		id: "335",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Seviper",
		value: "seviper",
		icon: "seviper",
		id: "336",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Lunatone",
		value: "lunatone",
		icon: "lunatone",
		id: "337",
		exclude: [
			"sv"
		]
	},
	{
		name: "Solrock",
		value: "solrock",
		icon: "solrock",
		id: "338",
		exclude: [
			"sv"
		]
	},
	{
		name: "Barboach",
		value: "barboach",
		icon: "barboach",
		id: "339"
	},
	{
		name: "Whiscash",
		value: "whiscash",
		icon: "whiscash",
		id: "340"
	},
	{
		name: "Corphish",
		value: "corphish",
		icon: "corphish",
		id: "341",
		exclude: [
			"sv"
		]
	},
	{
		name: "Crawdaunt",
		value: "crawdaunt",
		icon: "crawdaunt",
		id: "342",
		exclude: [
			"sv"
		]
	},
	{
		name: "Baltoy",
		value: "baltoy",
		icon: "baltoy",
		id: "343",
		exclude: [
			"sv"
		]
	},
	{
		name: "Claydol",
		value: "claydol",
		icon: "claydol",
		id: "344",
		exclude: [
			"sv"
		]
	},
	{
		name: "Lileep",
		value: "lileep",
		icon: "lileep",
		id: "345",
		exclude: [
			"sv"
		]
	},
	{
		name: "Cradily",
		value: "cradily",
		icon: "cradily",
		id: "346",
		exclude: [
			"sv"
		]
	},
	{
		name: "Anorith",
		value: "anorith",
		icon: "anorith",
		id: "347",
		exclude: [
			"sv"
		]
	},
	{
		name: "Armaldo",
		value: "armaldo",
		icon: "armaldo",
		id: "348",
		exclude: [
			"sv"
		]
	},
	{
		name: "Feebas",
		value: "feebas",
		icon: "feebas",
		id: "349",
		exclude: [
			"sv"
		]
	},
	{
		name: "Milotic",
		value: "milotic",
		icon: "milotic",
		id: "350",
		exclude: [
			"sv"
		]
	},
	{
		name: "Castform",
		value: "castform",
		icon: "castform",
		id: "351",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Kecleon",
		value: "kecleon",
		icon: "kecleon",
		id: "352",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Shuppet",
		value: "shuppet",
		icon: "shuppet",
		id: "353",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Banette",
		value: "banette",
		icon: "banette",
		id: "354",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Duskull",
		value: "duskull",
		icon: "duskull",
		id: "355",
		exclude: [
			"sv"
		]
	},
	{
		name: "Dusclops",
		value: "dusclops",
		icon: "dusclops",
		id: "356",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tropius",
		value: "tropius",
		icon: "tropius",
		id: "357",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Chimecho",
		value: "chimecho",
		icon: "chimecho",
		id: "358",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Absol",
		value: "absol",
		icon: "absol",
		id: "359",
		exclude: [
			"sv"
		]
	},
	{
		name: "Wynaut",
		value: "wynaut",
		icon: "wynaut",
		id: "360",
		exclude: [
			"sv"
		]
	},
	{
		name: "Snorunt",
		value: "snorunt",
		icon: "snorunt",
		id: "361"
	},
	{
		name: "Glalie",
		value: "glalie",
		icon: "glalie",
		id: "362"
	},
	{
		name: "Spheal",
		value: "spheal",
		icon: "spheal",
		id: "363",
		exclude: [
			"sv"
		]
	},
	{
		name: "Sealeo",
		value: "sealeo",
		icon: "sealeo",
		id: "364",
		exclude: [
			"sv"
		]
	},
	{
		name: "Walrein",
		value: "walrein",
		icon: "walrein",
		id: "365",
		exclude: [
			"sv"
		]
	},
	{
		name: "Clamperl",
		value: "clamperl",
		icon: "clamperl",
		id: "366",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Huntail",
		value: "huntail",
		icon: "huntail",
		id: "367",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Gorebyss",
		value: "gorebyss",
		icon: "gorebyss",
		id: "368",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Relicanth",
		value: "relicanth",
		icon: "relicanth",
		id: "369",
		exclude: [
			"sv"
		]
	},
	{
		name: "Luvdisc",
		value: "luvdisc",
		icon: "luvdisc",
		id: "370",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Bagon",
		value: "bagon",
		icon: "bagon",
		id: "371"
	},
	{
		name: "Shelgon",
		value: "shelgon",
		icon: "shelgon",
		id: "372"
	},
	{
		name: "Salamence",
		value: "salamence",
		icon: "salamence",
		id: "373"
	},
	{
		name: "Beldum",
		value: "beldum",
		icon: "beldum",
		id: "374",
		exclude: [
			"sv"
		]
	},
	{
		name: "Metang",
		value: "metang",
		icon: "metang",
		id: "375",
		exclude: [
			"sv"
		]
	},
	{
		name: "Metagross",
		value: "metagross",
		icon: "metagross",
		id: "376",
		exclude: [
			"sv"
		]
	},
	{
		name: "Regirock",
		value: "regirock",
		icon: "regirock",
		id: "377",
		exclude: [
			"sv"
		]
	},
	{
		name: "Regice",
		value: "regice",
		icon: "regice",
		id: "378",
		exclude: [
			"sv"
		]
	},
	{
		name: "Registeel",
		value: "registeel",
		icon: "registeel",
		id: "379",
		exclude: [
			"sv"
		]
	},
	{
		name: "Latias",
		value: "latias",
		icon: "latias",
		id: "380",
		exclude: [
			"sv"
		]
	},
	{
		name: "Latios",
		value: "latios",
		icon: "latios",
		id: "381",
		exclude: [
			"sv"
		]
	},
	{
		name: "Kyogre",
		value: "kyogre",
		icon: "kyogre",
		id: "382"
	},
	{
		name: "Groudon",
		value: "groudon",
		icon: "groudon",
		id: "383"
	},
	{
		name: "Rayquaza",
		value: "rayquaza",
		icon: "rayquaza",
		id: "384"
	},
	{
		name: "Jirachi",
		value: "jirachi",
		icon: "jirachi",
		id: "385",
		exclude: [
			"sv"
		]
	},
	{
		name: "Deoxys",
		value: "deoxys",
		icon: "deoxys",
		id: "386",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Turtwig",
		value: "turtwig",
		icon: "turtwig",
		id: "387",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Grotle",
		value: "grotle",
		icon: "grotle",
		id: "388",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Torterra",
		value: "torterra",
		icon: "torterra",
		id: "389",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Chimchar",
		value: "chimchar",
		icon: "chimchar",
		id: "390",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Monferno",
		value: "monferno",
		icon: "monferno",
		id: "391",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Infernape",
		value: "infernape",
		icon: "infernape",
		id: "392",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Piplup",
		value: "piplup",
		icon: "piplup",
		id: "393",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Prinplup",
		value: "prinplup",
		icon: "prinplup",
		id: "394",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Empoleon",
		value: "empoleon",
		icon: "empoleon",
		id: "395",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Starly",
		value: "starly",
		icon: "starly",
		id: "396",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Staravia",
		value: "staravia",
		icon: "staravia",
		id: "397",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Staraptor",
		value: "staraptor",
		icon: "staraptor",
		id: "398",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Bidoof",
		value: "bidoof",
		icon: "bidoof",
		id: "399",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Bibarel",
		value: "bibarel",
		icon: "bibarel",
		id: "400",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Kricketot",
		value: "kricketot",
		icon: "kricketot",
		id: "401",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Kricketune",
		value: "kricketune",
		icon: "kricketune",
		id: "402",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Shinx",
		value: "shinx",
		icon: "shinx",
		id: "403"
	},
	{
		name: "Luxio",
		value: "luxio",
		icon: "luxio",
		id: "404"
	},
	{
		name: "Luxray",
		value: "luxray",
		icon: "luxray",
		id: "405"
	},
	{
		name: "Budew",
		value: "budew",
		icon: "budew",
		id: "406",
		exclude: [
			"sv"
		]
	},
	{
		name: "Roserade",
		value: "roserade",
		icon: "roserade",
		id: "407",
		exclude: [
			"sv"
		]
	},
	{
		name: "Cranidos",
		value: "cranidos",
		icon: "cranidos",
		id: "408",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Rampardos",
		value: "rampardos",
		icon: "rampardos",
		id: "409",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Shieldon",
		value: "shieldon",
		icon: "shieldon",
		id: "410",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Bastiodon",
		value: "bastiodon",
		icon: "bastiodon",
		id: "411",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Burmy",
		value: "burmy",
		icon: "burmy",
		id: "412",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Wormadam",
		value: "wormadam",
		icon: "wormadam",
		id: "413",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Mothim",
		value: "mothim",
		icon: "mothim",
		id: "414",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Combee",
		value: "combee",
		icon: "combee",
		id: "415"
	},
	{
		name: "Vespiquen",
		value: "vespiquen",
		icon: "vespiquen",
		id: "416"
	},
	{
		name: "Pachirisu",
		value: "pachirisu",
		icon: "pachirisu",
		id: "417",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Buizel",
		value: "buizel",
		icon: "buizel",
		id: "418",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Floatzel",
		value: "floatzel",
		icon: "floatzel",
		id: "419",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Cherubi",
		value: "cherubi",
		icon: "cherubi",
		id: "420",
		exclude: [
			"sv"
		]
	},
	{
		name: "Cherrim",
		value: "cherrim",
		icon: "cherrim",
		id: "421",
		exclude: [
			"sv"
		]
	},
	{
		name: "Shellos",
		value: "shellos",
		icon: "shellos",
		id: "422"
	},
	{
		name: "Gastrodon",
		value: "gastrodon",
		icon: "gastrodon",
		id: "423"
	},
	{
		name: "Ambipom",
		value: "ambipom",
		icon: "ambipom",
		id: "424",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Drifloon",
		value: "drifloon",
		icon: "drifloon",
		id: "425"
	},
	{
		name: "Drifblim",
		value: "drifblim",
		icon: "drifblim",
		id: "426"
	},
	{
		name: "Buneary",
		value: "buneary",
		icon: "buneary",
		id: "427",
		exclude: [
			"sv"
		]
	},
	{
		name: "Lopunny",
		value: "lopunny",
		icon: "lopunny",
		id: "428",
		exclude: [
			"sv"
		]
	},
	{
		name: "Mismagius",
		value: "mismagius",
		icon: "mismagius",
		id: "429",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Honchkrow",
		value: "honchkrow",
		icon: "honchkrow",
		id: "430",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Glameow",
		value: "glameow",
		icon: "glameow",
		id: "431",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Purugly",
		value: "purugly",
		icon: "purugly",
		id: "432",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Chingling",
		value: "chingling",
		icon: "chingling",
		id: "433",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Stunky",
		value: "stunky",
		icon: "stunky",
		id: "434"
	},
	{
		name: "Skuntank",
		value: "skuntank",
		icon: "skuntank",
		id: "435"
	},
	{
		name: "Bronzor",
		value: "bronzor",
		icon: "bronzor",
		id: "436"
	},
	{
		name: "Bronzong",
		value: "bronzong",
		icon: "bronzong",
		id: "437"
	},
	{
		name: "Bonsly",
		value: "bonsly",
		icon: "bonsly",
		id: "438"
	},
	{
		name: "Mime Jr.",
		value: "mime-jr",
		icon: "mime-jr",
		id: "439",
		exclude: [
			"sv"
		]
	},
	{
		name: "Happiny",
		value: "happiny",
		icon: "happiny",
		id: "440"
	},
	{
		name: "Chatot",
		value: "chatot",
		icon: "chatot",
		id: "441",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Spiritomb",
		value: "spiritomb",
		icon: "spiritomb",
		id: "442"
	},
	{
		name: "Gible",
		value: "gible",
		icon: "gible",
		id: "443"
	},
	{
		name: "Gabite",
		value: "gabite",
		icon: "gabite",
		id: "444"
	},
	{
		name: "Garchomp",
		value: "garchomp",
		icon: "garchomp",
		id: "445"
	},
	{
		name: "Munchlax",
		value: "munchlax",
		icon: "munchlax",
		id: "446",
		exclude: [
			"sv"
		]
	},
	{
		name: "Riolu",
		value: "riolu",
		icon: "riolu",
		id: "447"
	},
	{
		name: "Lucario",
		value: "lucario",
		icon: "lucario",
		id: "448"
	},
	{
		name: "Hippopotas",
		value: "hippopotas",
		icon: "hippopotas",
		id: "449"
	},
	{
		name: "Hippowdon",
		value: "hippowdon",
		icon: "hippowdon",
		id: "450"
	},
	{
		name: "Skorupi",
		value: "skorupi",
		icon: "skorupi",
		id: "451",
		exclude: [
			"sv"
		]
	},
	{
		name: "Drapion",
		value: "drapion",
		icon: "drapion",
		id: "452",
		exclude: [
			"sv"
		]
	},
	{
		name: "Croagunk",
		value: "croagunk",
		icon: "croagunk",
		id: "453"
	},
	{
		name: "Toxicroak",
		value: "toxicroak",
		icon: "toxicroak",
		id: "454"
	},
	{
		name: "Carnivine",
		value: "carnivine",
		icon: "carnivine",
		id: "455",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Finneon",
		value: "finneon",
		icon: "finneon",
		id: "456",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Lumineon",
		value: "lumineon",
		icon: "lumineon",
		id: "457",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Mantyke",
		value: "mantyke",
		icon: "mantyke",
		id: "458",
		exclude: [
			"sv"
		]
	},
	{
		name: "Snover",
		value: "snover",
		icon: "snover",
		id: "459"
	},
	{
		name: "Abomasnow",
		value: "abomasnow",
		icon: "abomasnow",
		id: "460"
	},
	{
		name: "Weavile",
		value: "weavile",
		icon: "weavile",
		id: "461"
	},
	{
		name: "Magnezone",
		value: "magnezone",
		icon: "magnezone",
		id: "462"
	},
	{
		name: "Lickilicky",
		value: "lickilicky",
		icon: "lickilicky",
		id: "463",
		exclude: [
			"sv"
		]
	},
	{
		name: "Rhyperior",
		value: "rhyperior",
		icon: "rhyperior",
		id: "464",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tangrowth",
		value: "tangrowth",
		icon: "tangrowth",
		id: "465",
		exclude: [
			"sv"
		]
	},
	{
		name: "Electivire",
		value: "electivire",
		icon: "electivire",
		id: "466",
		exclude: [
			"sv"
		]
	},
	{
		name: "Magmortar",
		value: "magmortar",
		icon: "magmortar",
		id: "467",
		exclude: [
			"sv"
		]
	},
	{
		name: "Togekiss",
		value: "togekiss",
		icon: "togekiss",
		id: "468",
		exclude: [
			"sv"
		]
	},
	{
		name: "Yanmega",
		value: "yanmega",
		icon: "yanmega",
		id: "469",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Leafeon",
		value: "leafeon",
		icon: "leafeon",
		id: "470"
	},
	{
		name: "Glaceon",
		value: "glaceon",
		icon: "glaceon",
		id: "471"
	},
	{
		name: "Gliscor",
		value: "gliscor",
		icon: "gliscor",
		id: "472",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Mamoswine",
		value: "mamoswine",
		icon: "mamoswine",
		id: "473",
		exclude: [
			"sv"
		]
	},
	{
		name: "Porygon-Z",
		value: "porygon-z",
		icon: "porygon-z",
		id: "474",
		exclude: [
			"sv"
		]
	},
	{
		name: "Gallade",
		value: "gallade",
		icon: "gallade",
		id: "475"
	},
	{
		name: "Probopass",
		value: "probopass",
		icon: "probopass",
		id: "476",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Dusknoir",
		value: "dusknoir",
		icon: "dusknoir",
		id: "477",
		exclude: [
			"sv"
		]
	},
	{
		name: "Froslass",
		value: "froslass",
		icon: "froslass",
		id: "478"
	},
	{
		name: "Rotom",
		value: "rotom",
		icon: "rotom",
		id: "479"
	},
	{
		name: "Uxie",
		value: "uxie",
		icon: "uxie",
		id: "480"
	},
	{
		name: "Mesprit",
		value: "mesprit",
		icon: "mesprit",
		id: "481"
	},
	{
		name: "Azelf",
		value: "azelf",
		icon: "azelf",
		id: "482"
	},
	{
		name: "Dialga",
		value: "dialga",
		icon: "dialga",
		id: "483"
	},
	{
		name: "Palkia",
		value: "palkia",
		icon: "palkia",
		id: "484"
	},
	{
		name: "Heatran",
		value: "heatran",
		icon: "heatran",
		id: "485"
	},
	{
		name: "Regigigas",
		value: "regigigas",
		icon: "regigigas",
		id: "486",
		exclude: [
			"sv"
		]
	},
	{
		name: "Giratina",
		value: "giratina",
		icon: "giratina",
		id: "487"
	},
	{
		name: "Cresselia",
		value: "cresselia",
		icon: "cresselia",
		id: "488"
	},
	{
		name: "Phione",
		value: "phione",
		icon: "phione",
		id: "489",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Manaphy",
		value: "manaphy",
		icon: "manaphy",
		id: "490",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Darkrai",
		value: "darkrai",
		icon: "darkrai",
		id: "491",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Shaymin",
		value: "shaymin",
		icon: "shaymin",
		id: "492",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Arceus",
		value: "arceus",
		icon: "arceus",
		id: "493",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Victini",
		value: "victini",
		icon: "victini",
		id: "494",
		exclude: [
			"sv"
		]
	},
	{
		name: "Snivy",
		value: "snivy",
		icon: "snivy",
		id: "495",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Servine",
		value: "servine",
		icon: "servine",
		id: "496",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Serperior",
		value: "serperior",
		icon: "serperior",
		id: "497",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Tepig",
		value: "tepig",
		icon: "tepig",
		id: "498",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Pignite",
		value: "pignite",
		icon: "pignite",
		id: "499",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Emboar",
		value: "emboar",
		icon: "emboar",
		id: "500",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Oshawott",
		value: "oshawott",
		icon: "oshawott",
		id: "501",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Dewott",
		value: "dewott",
		icon: "dewott",
		id: "502",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Samurott",
		value: "samurott",
		icon: "samurott",
		id: "503",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Patrat",
		value: "patrat",
		icon: "patrat",
		id: "504",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Watchog",
		value: "watchog",
		icon: "watchog",
		id: "505",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Lillipup",
		value: "lillipup",
		icon: "lillipup",
		id: "506",
		exclude: [
			"sv"
		]
	},
	{
		name: "Herdier",
		value: "herdier",
		icon: "herdier",
		id: "507",
		exclude: [
			"sv"
		]
	},
	{
		name: "Stoutland",
		value: "stoutland",
		icon: "stoutland",
		id: "508",
		exclude: [
			"sv"
		]
	},
	{
		name: "Purrloin",
		value: "purrloin",
		icon: "purrloin",
		id: "509",
		exclude: [
			"sv"
		]
	},
	{
		name: "Liepard",
		value: "liepard",
		icon: "liepard",
		id: "510",
		exclude: [
			"sv"
		]
	},
	{
		name: "Pansage",
		value: "pansage",
		icon: "pansage",
		id: "511",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Simisage",
		value: "simisage",
		icon: "simisage",
		id: "512",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Pansear",
		value: "pansear",
		icon: "pansear",
		id: "513",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Simisear",
		value: "simisear",
		icon: "simisear",
		id: "514",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Panpour",
		value: "panpour",
		icon: "panpour",
		id: "515",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Simipour",
		value: "simipour",
		icon: "simipour",
		id: "516",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Munna",
		value: "munna",
		icon: "munna",
		id: "517",
		exclude: [
			"sv"
		]
	},
	{
		name: "Musharna",
		value: "musharna",
		icon: "musharna",
		id: "518",
		exclude: [
			"sv"
		]
	},
	{
		name: "Pidove",
		value: "pidove",
		icon: "pidove",
		id: "519",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tranquill",
		value: "tranquill",
		icon: "tranquill",
		id: "520",
		exclude: [
			"sv"
		]
	},
	{
		name: "Unfezant",
		value: "unfezant",
		icon: "unfezant",
		id: "521",
		exclude: [
			"sv"
		]
	},
	{
		name: "Blitzle",
		value: "blitzle",
		icon: "blitzle",
		id: "522",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Zebstrika",
		value: "zebstrika",
		icon: "zebstrika",
		id: "523",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Roggenrola",
		value: "roggenrola",
		icon: "roggenrola",
		id: "524",
		exclude: [
			"sv"
		]
	},
	{
		name: "Boldore",
		value: "boldore",
		icon: "boldore",
		id: "525",
		exclude: [
			"sv"
		]
	},
	{
		name: "Gigalith",
		value: "gigalith",
		icon: "gigalith",
		id: "526",
		exclude: [
			"sv"
		]
	},
	{
		name: "Woobat",
		value: "woobat",
		icon: "woobat",
		id: "527",
		exclude: [
			"sv"
		]
	},
	{
		name: "Swoobat",
		value: "swoobat",
		icon: "swoobat",
		id: "528",
		exclude: [
			"sv"
		]
	},
	{
		name: "Drilbur",
		value: "drilbur",
		icon: "drilbur",
		id: "529",
		exclude: [
			"sv"
		]
	},
	{
		name: "Excadrill",
		value: "excadrill",
		icon: "excadrill",
		id: "530",
		exclude: [
			"sv"
		]
	},
	{
		name: "Audino",
		value: "audino",
		icon: "audino",
		id: "531",
		exclude: [
			"sv"
		]
	},
	{
		name: "Timburr",
		value: "timburr",
		icon: "timburr",
		id: "532",
		exclude: [
			"sv"
		]
	},
	{
		name: "Gurdurr",
		value: "gurdurr",
		icon: "gurdurr",
		id: "533",
		exclude: [
			"sv"
		]
	},
	{
		name: "Conkeldurr",
		value: "conkeldurr",
		icon: "conkeldurr",
		id: "534",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tympole",
		value: "tympole",
		icon: "tympole",
		id: "535",
		exclude: [
			"sv"
		]
	},
	{
		name: "Palpitoad",
		value: "palpitoad",
		icon: "palpitoad",
		id: "536",
		exclude: [
			"sv"
		]
	},
	{
		name: "Seismitoad",
		value: "seismitoad",
		icon: "seismitoad",
		id: "537",
		exclude: [
			"sv"
		]
	},
	{
		name: "Throh",
		value: "throh",
		icon: "throh",
		id: "538",
		exclude: [
			"sv"
		]
	},
	{
		name: "Sawk",
		value: "sawk",
		icon: "sawk",
		id: "539",
		exclude: [
			"sv"
		]
	},
	{
		name: "Sewaddle",
		value: "sewaddle",
		icon: "sewaddle",
		id: "540",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Swadloon",
		value: "swadloon",
		icon: "swadloon",
		id: "541",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Leavanny",
		value: "leavanny",
		icon: "leavanny",
		id: "542",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Venipede",
		value: "venipede",
		icon: "venipede",
		id: "543",
		exclude: [
			"sv"
		]
	},
	{
		name: "Whirlipede",
		value: "whirlipede",
		icon: "whirlipede",
		id: "544",
		exclude: [
			"sv"
		]
	},
	{
		name: "Scolipede",
		value: "scolipede",
		icon: "scolipede",
		id: "545",
		exclude: [
			"sv"
		]
	},
	{
		name: "Cottonee",
		value: "cottonee",
		icon: "cottonee",
		id: "546",
		exclude: [
			"sv"
		]
	},
	{
		name: "Whimsicott",
		value: "whimsicott",
		icon: "whimsicott",
		id: "547",
		exclude: [
			"sv"
		]
	},
	{
		name: "Petilil",
		value: "petilil",
		icon: "petilil",
		id: "548"
	},
	{
		name: "Lilligant",
		value: "lilligant",
		icon: "lilligant",
		id: "549"
	},
	{
		name: "Basculin",
		value: "basculin",
		icon: "basculin",
		id: "550"
	},
	{
		name: "Sandile",
		value: "sandile",
		icon: "sandile",
		id: "551"
	},
	{
		name: "Krokorok",
		value: "krokorok",
		icon: "krokorok",
		id: "552"
	},
	{
		name: "Krookodile",
		value: "krookodile",
		icon: "krookodile",
		id: "553"
	},
	{
		name: "Darumaka",
		value: "darumaka",
		icon: "darumaka",
		id: "554",
		exclude: [
			"sv"
		]
	},
	{
		name: "Darmanitan",
		value: "darmanitan",
		icon: "darmanitan",
		id: "555",
		exclude: [
			"sv"
		]
	},
	{
		name: "Maractus",
		value: "maractus",
		icon: "maractus",
		id: "556",
		exclude: [
			"sv"
		]
	},
	{
		name: "Dwebble",
		value: "dwebble",
		icon: "dwebble",
		id: "557",
		exclude: [
			"sv"
		]
	},
	{
		name: "Crustle",
		value: "crustle",
		icon: "crustle",
		id: "558",
		exclude: [
			"sv"
		]
	},
	{
		name: "Scraggy",
		value: "scraggy",
		icon: "scraggy",
		id: "559",
		exclude: [
			"sv"
		]
	},
	{
		name: "Scrafty",
		value: "scrafty",
		icon: "scrafty",
		id: "560",
		exclude: [
			"sv"
		]
	},
	{
		name: "Sigilyph",
		value: "sigilyph",
		icon: "sigilyph",
		id: "561",
		exclude: [
			"sv"
		]
	},
	{
		name: "Yamask",
		value: "yamask",
		icon: "yamask",
		id: "562",
		exclude: [
			"sv"
		]
	},
	{
		name: "Cofagrigus",
		value: "cofagrigus",
		icon: "cofagrigus",
		id: "563",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tirtouga",
		value: "tirtouga",
		icon: "tirtouga",
		id: "564",
		exclude: [
			"sv"
		]
	},
	{
		name: "Carracosta",
		value: "carracosta",
		icon: "carracosta",
		id: "565",
		exclude: [
			"sv"
		]
	},
	{
		name: "Archen",
		value: "archen",
		icon: "archen",
		id: "566",
		exclude: [
			"sv"
		]
	},
	{
		name: "Archeops",
		value: "archeops",
		icon: "archeops",
		id: "567",
		exclude: [
			"sv"
		]
	},
	{
		name: "Trubbish",
		value: "trubbish",
		icon: "trubbish",
		id: "568",
		exclude: [
			"sv"
		]
	},
	{
		name: "Garbodor",
		value: "garbodor",
		icon: "garbodor",
		id: "569",
		exclude: [
			"sv"
		]
	},
	{
		name: "Zorua",
		value: "zorua",
		icon: "zorua",
		id: "570"
	},
	{
		name: "Zoroark",
		value: "zoroark",
		icon: "zoroark",
		id: "571"
	},
	{
		name: "Minccino",
		value: "minccino",
		icon: "minccino",
		id: "572",
		exclude: [
			"sv"
		]
	},
	{
		name: "Cinccino",
		value: "cinccino",
		icon: "cinccino",
		id: "573",
		exclude: [
			"sv"
		]
	},
	{
		name: "Gothita",
		value: "gothita",
		icon: "gothita",
		id: "574"
	},
	{
		name: "Gothorita",
		value: "gothorita",
		icon: "gothorita",
		id: "575"
	},
	{
		name: "Gothitelle",
		value: "gothitelle",
		icon: "gothitelle",
		id: "576"
	},
	{
		name: "Solosis",
		value: "solosis",
		icon: "solosis",
		id: "577",
		exclude: [
			"sv"
		]
	},
	{
		name: "Duosion",
		value: "duosion",
		icon: "duosion",
		id: "578",
		exclude: [
			"sv"
		]
	},
	{
		name: "Reuniclus",
		value: "reuniclus",
		icon: "reuniclus",
		id: "579",
		exclude: [
			"sv"
		]
	},
	{
		name: "Ducklett",
		value: "ducklett",
		icon: "ducklett",
		id: "580",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Swanna",
		value: "swanna",
		icon: "swanna",
		id: "581",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Vanillite",
		value: "vanillite",
		icon: "vanillite",
		id: "582",
		exclude: [
			"sv"
		]
	},
	{
		name: "Vanillish",
		value: "vanillish",
		icon: "vanillish",
		id: "583",
		exclude: [
			"sv"
		]
	},
	{
		name: "Vanilluxe",
		value: "vanilluxe",
		icon: "vanilluxe",
		id: "584",
		exclude: [
			"sv"
		]
	},
	{
		name: "Deerling",
		value: "deerling",
		icon: "deerling",
		id: "585",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Sawsbuck",
		value: "sawsbuck",
		icon: "sawsbuck",
		id: "586",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Emolga",
		value: "emolga",
		icon: "emolga",
		id: "587",
		exclude: [
			"sv"
		]
	},
	{
		name: "Karrablast",
		value: "karrablast",
		icon: "karrablast",
		id: "588",
		exclude: [
			"sv"
		]
	},
	{
		name: "Escavalier",
		value: "escavalier",
		icon: "escavalier",
		id: "589",
		exclude: [
			"sv"
		]
	},
	{
		name: "Foongus",
		value: "foongus",
		icon: "foongus",
		id: "590"
	},
	{
		name: "Amoonguss",
		value: "amoonguss",
		icon: "amoonguss",
		id: "591"
	},
	{
		name: "Frillish",
		value: "frillish",
		icon: "frillish",
		id: "592",
		exclude: [
			"sv"
		]
	},
	{
		name: "Jellicent",
		value: "jellicent",
		icon: "jellicent",
		id: "593",
		exclude: [
			"sv"
		]
	},
	{
		name: "Alomomola",
		value: "alomomola",
		icon: "alomomola",
		id: "594",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Joltik",
		value: "joltik",
		icon: "joltik",
		id: "595",
		exclude: [
			"sv"
		]
	},
	{
		name: "Galvantula",
		value: "galvantula",
		icon: "galvantula",
		id: "596",
		exclude: [
			"sv"
		]
	},
	{
		name: "Ferroseed",
		value: "ferroseed",
		icon: "ferroseed",
		id: "597",
		exclude: [
			"sv"
		]
	},
	{
		name: "Ferrothorn",
		value: "ferrothorn",
		icon: "ferrothorn",
		id: "598",
		exclude: [
			"sv"
		]
	},
	{
		name: "Klink",
		value: "klink",
		icon: "klink",
		id: "599",
		exclude: [
			"sv"
		]
	},
	{
		name: "Klang",
		value: "klang",
		icon: "klang",
		id: "600",
		exclude: [
			"sv"
		]
	},
	{
		name: "Klinklang",
		value: "klinklang",
		icon: "klinklang",
		id: "601",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tynamo",
		value: "tynamo",
		icon: "tynamo",
		id: "602",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Eelektrik",
		value: "eelektrik",
		icon: "eelektrik",
		id: "603",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Eelektross",
		value: "eelektross",
		icon: "eelektross",
		id: "604",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Elgyem",
		value: "elgyem",
		icon: "elgyem",
		id: "605",
		exclude: [
			"sv"
		]
	},
	{
		name: "Beheeyem",
		value: "beheeyem",
		icon: "beheeyem",
		id: "606",
		exclude: [
			"sv"
		]
	},
	{
		name: "Litwick",
		value: "litwick",
		icon: "litwick",
		id: "607",
		exclude: [
			"sv"
		]
	},
	{
		name: "Lampent",
		value: "lampent",
		icon: "lampent",
		id: "608",
		exclude: [
			"sv"
		]
	},
	{
		name: "Chandelure",
		value: "chandelure",
		icon: "chandelure",
		id: "609",
		exclude: [
			"sv"
		]
	},
	{
		name: "Axew",
		value: "axew",
		icon: "axew",
		id: "610"
	},
	{
		name: "Fraxure",
		value: "fraxure",
		icon: "fraxure",
		id: "611"
	},
	{
		name: "Haxorus",
		value: "haxorus",
		icon: "haxorus",
		id: "612"
	},
	{
		name: "Cubchoo",
		value: "cubchoo",
		icon: "cubchoo",
		id: "613"
	},
	{
		name: "Beartic",
		value: "beartic",
		icon: "beartic",
		id: "614"
	},
	{
		name: "Cryogonal",
		value: "cryogonal",
		icon: "cryogonal",
		id: "615"
	},
	{
		name: "Shelmet",
		value: "shelmet",
		icon: "shelmet",
		id: "616",
		exclude: [
			"sv"
		]
	},
	{
		name: "Accelgor",
		value: "accelgor",
		icon: "accelgor",
		id: "617",
		exclude: [
			"sv"
		]
	},
	{
		name: "Stunfisk",
		value: "stunfisk",
		icon: "stunfisk",
		id: "618",
		exclude: [
			"sv"
		]
	},
	{
		name: "Mienfoo",
		value: "mienfoo",
		icon: "mienfoo",
		id: "619",
		exclude: [
			"sv"
		]
	},
	{
		name: "Mienshao",
		value: "mienshao",
		icon: "mienshao",
		id: "620",
		exclude: [
			"sv"
		]
	},
	{
		name: "Druddigon",
		value: "druddigon",
		icon: "druddigon",
		id: "621",
		exclude: [
			"sv"
		]
	},
	{
		name: "Golett",
		value: "golett",
		icon: "golett",
		id: "622",
		exclude: [
			"sv"
		]
	},
	{
		name: "Golurk",
		value: "golurk",
		icon: "golurk",
		id: "623",
		exclude: [
			"sv"
		]
	},
	{
		name: "Pawniard",
		value: "pawniard",
		icon: "pawniard",
		id: "624"
	},
	{
		name: "Bisharp",
		value: "bisharp",
		icon: "bisharp",
		id: "625"
	},
	{
		name: "Bouffalant",
		value: "bouffalant",
		icon: "bouffalant",
		id: "626",
		exclude: [
			"sv"
		]
	},
	{
		name: "Rufflet",
		value: "rufflet",
		icon: "rufflet",
		id: "627"
	},
	{
		name: "Braviary",
		value: "braviary",
		icon: "braviary",
		id: "628"
	},
	{
		name: "Vullaby",
		value: "vullaby",
		icon: "vullaby",
		id: "629",
		exclude: [
			"sv"
		]
	},
	{
		name: "Mandibuzz",
		value: "mandibuzz",
		icon: "mandibuzz",
		id: "630",
		exclude: [
			"sv"
		]
	},
	{
		name: "Heatmor",
		value: "heatmor",
		icon: "heatmor",
		id: "631",
		exclude: [
			"sv"
		]
	},
	{
		name: "Durant",
		value: "durant",
		icon: "durant",
		id: "632",
		exclude: [
			"sv"
		]
	},
	{
		name: "Deino",
		value: "deino",
		icon: "deino",
		id: "633"
	},
	{
		name: "Zweilous",
		value: "zweilous",
		icon: "zweilous",
		id: "634"
	},
	{
		name: "Hydreigon",
		value: "hydreigon",
		icon: "hydreigon",
		id: "635"
	},
	{
		name: "Larvesta",
		value: "larvesta",
		icon: "larvesta",
		id: "636"
	},
	{
		name: "Volcarona",
		value: "volcarona",
		icon: "volcarona",
		id: "637"
	},
	{
		name: "Cobalion",
		value: "cobalion",
		icon: "cobalion",
		id: "638",
		exclude: [
			"sv"
		]
	},
	{
		name: "Terrakion",
		value: "terrakion",
		icon: "terrakion",
		id: "639",
		exclude: [
			"sv"
		]
	},
	{
		name: "Virizion",
		value: "virizion",
		icon: "virizion",
		id: "640",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tornadus",
		value: "tornadus",
		icon: "tornadus",
		id: "641"
	},
	{
		name: "Thundurus",
		value: "thundurus",
		icon: "thundurus",
		id: "642"
	},
	{
		name: "Reshiram",
		value: "reshiram",
		icon: "reshiram",
		id: "643",
		exclude: [
			"sv"
		]
	},
	{
		name: "Zekrom",
		value: "zekrom",
		icon: "zekrom",
		id: "644",
		exclude: [
			"sv"
		]
	},
	{
		name: "Landorus",
		value: "landorus",
		icon: "landorus",
		id: "645"
	},
	{
		name: "Kyurem",
		value: "kyurem",
		icon: "kyurem",
		id: "646",
		exclude: [
			"sv"
		]
	},
	{
		name: "Keldeo",
		value: "keldeo",
		icon: "keldeo",
		id: "647",
		exclude: [
			"sv"
		]
	},
	{
		name: "Meloetta",
		value: "meloetta",
		icon: "meloetta",
		id: "648",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Genesect",
		value: "genesect",
		icon: "genesect",
		id: "649",
		exclude: [
			"sv"
		]
	},
	{
		name: "Chespin",
		value: "chespin",
		icon: "chespin",
		id: "650",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Quilladin",
		value: "quilladin",
		icon: "quilladin",
		id: "651",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Chesnaught",
		value: "chesnaught",
		icon: "chesnaught",
		id: "652",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Fennekin",
		value: "fennekin",
		icon: "fennekin",
		id: "653",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Braixen",
		value: "braixen",
		icon: "braixen",
		id: "654",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Delphox",
		value: "delphox",
		icon: "delphox",
		id: "655",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Froakie",
		value: "froakie",
		icon: "froakie",
		id: "656",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Frogadier",
		value: "frogadier",
		icon: "frogadier",
		id: "657",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Greninja",
		value: "greninja",
		icon: "greninja",
		id: "658",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Bunnelby",
		value: "bunnelby",
		icon: "bunnelby",
		id: "659",
		exclude: [
			"sv"
		]
	},
	{
		name: "Diggersby",
		value: "diggersby",
		icon: "diggersby",
		id: "660",
		exclude: [
			"sv"
		]
	},
	{
		name: "Fletchling",
		value: "fletchling",
		icon: "fletchling",
		id: "661"
	},
	{
		name: "Fletchinder",
		value: "fletchinder",
		icon: "fletchinder",
		id: "662"
	},
	{
		name: "Talonflame",
		value: "talonflame",
		icon: "talonflame",
		id: "663"
	},
	{
		name: "Scatterbug",
		value: "scatterbug",
		icon: "scatterbug",
		id: "664",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Spewpa",
		value: "spewpa",
		icon: "spewpa",
		id: "665",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Vivillon",
		value: "vivillon",
		icon: "vivillon",
		id: "666",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Litleo",
		value: "litleo",
		icon: "litleo",
		id: "667",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Pyroar",
		value: "pyroar",
		icon: "pyroar",
		id: "668",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Flabébé",
		value: "flabebe",
		icon: "flabebe",
		id: "669",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Floette",
		value: "floette",
		icon: "floette",
		id: "670",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Florges",
		value: "florges",
		icon: "florges",
		id: "671",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Skiddo",
		value: "skiddo",
		icon: "skiddo",
		id: "672",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Gogoat",
		value: "gogoat",
		icon: "gogoat",
		id: "673",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Pancham",
		value: "pancham",
		icon: "pancham",
		id: "674",
		exclude: [
			"sv"
		]
	},
	{
		name: "Pangoro",
		value: "pangoro",
		icon: "pangoro",
		id: "675",
		exclude: [
			"sv"
		]
	},
	{
		name: "Furfrou",
		value: "furfrou",
		icon: "furfrou",
		id: "676",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Espurr",
		value: "espurr",
		icon: "espurr",
		id: "677",
		exclude: [
			"sv"
		]
	},
	{
		name: "Meowstic",
		value: "meowstic",
		icon: "meowstic",
		id: "678",
		exclude: [
			"sv"
		]
	},
	{
		name: "Honedge",
		value: "honedge",
		icon: "honedge",
		id: "679",
		exclude: [
			"sv"
		]
	},
	{
		name: "Doublade",
		value: "doublade",
		icon: "doublade",
		id: "680",
		exclude: [
			"sv"
		]
	},
	{
		name: "Aegislash",
		value: "aegislash",
		icon: "aegislash",
		id: "681",
		exclude: [
			"sv"
		]
	},
	{
		name: "Spritzee",
		value: "spritzee",
		icon: "spritzee",
		id: "682",
		exclude: [
			"sv"
		]
	},
	{
		name: "Aromatisse",
		value: "aromatisse",
		icon: "aromatisse",
		id: "683",
		exclude: [
			"sv"
		]
	},
	{
		name: "Swirlix",
		value: "swirlix",
		icon: "swirlix",
		id: "684",
		exclude: [
			"sv"
		]
	},
	{
		name: "Slurpuff",
		value: "slurpuff",
		icon: "slurpuff",
		id: "685",
		exclude: [
			"sv"
		]
	},
	{
		name: "Inkay",
		value: "inkay",
		icon: "inkay",
		id: "686",
		exclude: [
			"sv"
		]
	},
	{
		name: "Malamar",
		value: "malamar",
		icon: "malamar",
		id: "687",
		exclude: [
			"sv"
		]
	},
	{
		name: "Binacle",
		value: "binacle",
		icon: "binacle",
		id: "688",
		exclude: [
			"sv"
		]
	},
	{
		name: "Barbaracle",
		value: "barbaracle",
		icon: "barbaracle",
		id: "689",
		exclude: [
			"sv"
		]
	},
	{
		name: "Skrelp",
		value: "skrelp",
		icon: "skrelp",
		id: "690"
	},
	{
		name: "Dragalge",
		value: "dragalge",
		icon: "dragalge",
		id: "691"
	},
	{
		name: "Clauncher",
		value: "clauncher",
		icon: "clauncher",
		id: "692"
	},
	{
		name: "Clawitzer",
		value: "clawitzer",
		icon: "clawitzer",
		id: "693"
	},
	{
		name: "Helioptile",
		value: "helioptile",
		icon: "helioptile",
		id: "694",
		exclude: [
			"sv"
		]
	},
	{
		name: "Heliolisk",
		value: "heliolisk",
		icon: "heliolisk",
		id: "695",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tyrunt",
		value: "tyrunt",
		icon: "tyrunt",
		id: "696",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tyrantrum",
		value: "tyrantrum",
		icon: "tyrantrum",
		id: "697",
		exclude: [
			"sv"
		]
	},
	{
		name: "Amaura",
		value: "amaura",
		icon: "amaura",
		id: "698",
		exclude: [
			"sv"
		]
	},
	{
		name: "Aurorus",
		value: "aurorus",
		icon: "aurorus",
		id: "699",
		exclude: [
			"sv"
		]
	},
	{
		name: "Sylveon",
		value: "sylveon",
		icon: "sylveon",
		id: "700"
	},
	{
		name: "Hawlucha",
		value: "hawlucha",
		icon: "hawlucha",
		id: "701"
	},
	{
		name: "Dedenne",
		value: "dedenne",
		icon: "dedenne",
		id: "702"
	},
	{
		name: "Carbink",
		value: "carbink",
		icon: "carbink",
		id: "703"
	},
	{
		name: "Goomy",
		value: "goomy",
		icon: "goomy",
		id: "704"
	},
	{
		name: "Sliggoo",
		value: "sliggoo",
		icon: "sliggoo",
		id: "705"
	},
	{
		name: "Goodra",
		value: "goodra",
		icon: "goodra",
		id: "706"
	},
	{
		name: "Klefki",
		value: "klefki",
		icon: "klefki",
		id: "707"
	},
	{
		name: "Phantump",
		value: "phantump",
		icon: "phantump",
		id: "708",
		exclude: [
			"sv"
		]
	},
	{
		name: "Trevenant",
		value: "trevenant",
		icon: "trevenant",
		id: "709",
		exclude: [
			"sv"
		]
	},
	{
		name: "Pumpkaboo",
		value: "pumpkaboo",
		icon: "pumpkaboo",
		id: "710",
		exclude: [
			"sv"
		]
	},
	{
		name: "Gourgeist",
		value: "gourgeist",
		icon: "gourgeist",
		id: "711",
		exclude: [
			"sv"
		]
	},
	{
		name: "Bergmite",
		value: "bergmite",
		icon: "bergmite",
		id: "712"
	},
	{
		name: "Avalugg",
		value: "avalugg",
		icon: "avalugg",
		id: "713"
	},
	{
		name: "Noibat",
		value: "noibat",
		icon: "noibat",
		id: "714"
	},
	{
		name: "Noivern",
		value: "noivern",
		icon: "noivern",
		id: "715"
	},
	{
		name: "Xerneas",
		value: "xerneas",
		icon: "xerneas",
		id: "716",
		exclude: [
			"sv"
		]
	},
	{
		name: "Yveltal",
		value: "yveltal",
		icon: "yveltal",
		id: "717",
		exclude: [
			"sv"
		]
	},
	{
		name: "Zygarde",
		value: "zygarde",
		icon: "zygarde",
		id: "718",
		exclude: [
			"sv"
		]
	},
	{
		name: "Diancie",
		value: "diancie",
		icon: "diancie",
		id: "719"
	},
	{
		name: "Hoopa",
		value: "hoopa",
		icon: "hoopa",
		id: "720",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Volcanion",
		value: "volcanion",
		icon: "volcanion",
		id: "721"
	},
	{
		name: "Rowlet",
		value: "rowlet",
		icon: "rowlet",
		id: "722"
	},
	{
		name: "Dartrix",
		value: "dartrix",
		icon: "dartrix",
		id: "723"
	},
	{
		name: "Decidueye",
		value: "decidueye",
		icon: "decidueye",
		id: "724"
	},
	{
		name: "Litten",
		value: "litten",
		icon: "litten",
		id: "725",
		exclude: [
			"sv"
		]
	},
	{
		name: "Torracat",
		value: "torracat",
		icon: "torracat",
		id: "726",
		exclude: [
			"sv"
		]
	},
	{
		name: "Incineroar",
		value: "incineroar",
		icon: "incineroar",
		id: "727",
		exclude: [
			"sv"
		]
	},
	{
		name: "Popplio",
		value: "popplio",
		icon: "popplio",
		id: "728",
		exclude: [
			"sv"
		]
	},
	{
		name: "Brionne",
		value: "brionne",
		icon: "brionne",
		id: "729",
		exclude: [
			"sv"
		]
	},
	{
		name: "Primarina",
		value: "primarina",
		icon: "primarina",
		id: "730",
		exclude: [
			"sv"
		]
	},
	{
		name: "Pikipek",
		value: "pikipek",
		icon: "pikipek",
		id: "731",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Trumbeak",
		value: "trumbeak",
		icon: "trumbeak",
		id: "732",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Toucannon",
		value: "toucannon",
		icon: "toucannon",
		id: "733",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Yungoos",
		value: "yungoos",
		icon: "yungoos",
		id: "734",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Gumshoos",
		value: "gumshoos",
		icon: "gumshoos",
		id: "735",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Grubbin",
		value: "grubbin",
		icon: "grubbin",
		id: "736",
		exclude: [
			"sv"
		]
	},
	{
		name: "Charjabug",
		value: "charjabug",
		icon: "charjabug",
		id: "737",
		exclude: [
			"sv"
		]
	},
	{
		name: "Vikavolt",
		value: "vikavolt",
		icon: "vikavolt",
		id: "738",
		exclude: [
			"sv"
		]
	},
	{
		name: "Crabrawler",
		value: "crabrawler",
		icon: "crabrawler",
		id: "739",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Crabominable",
		value: "crabominable",
		icon: "crabominable",
		id: "740",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Oricorio",
		value: "oricorio",
		icon: "oricorio",
		id: "741",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Cutiefly",
		value: "cutiefly",
		icon: "cutiefly",
		id: "742",
		exclude: [
			"sv"
		]
	},
	{
		name: "Ribombee",
		value: "ribombee",
		icon: "ribombee",
		id: "743",
		exclude: [
			"sv"
		]
	},
	{
		name: "Rockruff",
		value: "rockruff",
		icon: "rockruff",
		id: "744"
	},
	{
		name: "Lycanroc",
		value: "lycanroc",
		icon: "lycanroc",
		id: "745"
	},
	{
		name: "Wishiwashi",
		value: "wishiwashi",
		icon: "wishiwashi",
		id: "746",
		exclude: [
			"sv"
		]
	},
	{
		name: "Mareanie",
		value: "mareanie",
		icon: "mareanie",
		id: "747"
	},
	{
		name: "Toxapex",
		value: "toxapex",
		icon: "toxapex",
		id: "748"
	},
	{
		name: "Mudbray",
		value: "mudbray",
		icon: "mudbray",
		id: "749"
	},
	{
		name: "Mudsdale",
		value: "mudsdale",
		icon: "mudsdale",
		id: "750"
	},
	{
		name: "Dewpider",
		value: "dewpider",
		icon: "dewpider",
		id: "751",
		exclude: [
			"sv"
		]
	},
	{
		name: "Araquanid",
		value: "araquanid",
		icon: "araquanid",
		id: "752",
		exclude: [
			"sv"
		]
	},
	{
		name: "Fomantis",
		value: "fomantis",
		icon: "fomantis",
		id: "753"
	},
	{
		name: "Lurantis",
		value: "lurantis",
		icon: "lurantis",
		id: "754"
	},
	{
		name: "Morelull",
		value: "morelull",
		icon: "morelull",
		id: "755",
		exclude: [
			"sv"
		]
	},
	{
		name: "Shiinotic",
		value: "shiinotic",
		icon: "shiinotic",
		id: "756",
		exclude: [
			"sv"
		]
	},
	{
		name: "Salandit",
		value: "salandit",
		icon: "salandit",
		id: "757"
	},
	{
		name: "Salazzle",
		value: "salazzle",
		icon: "salazzle",
		id: "758"
	},
	{
		name: "Stufful",
		value: "stufful",
		icon: "stufful",
		id: "759",
		exclude: [
			"sv"
		]
	},
	{
		name: "Bewear",
		value: "bewear",
		icon: "bewear",
		id: "760",
		exclude: [
			"sv"
		]
	},
	{
		name: "Bounsweet",
		value: "bounsweet",
		icon: "bounsweet",
		id: "761"
	},
	{
		name: "Steenee",
		value: "steenee",
		icon: "steenee",
		id: "762"
	},
	{
		name: "Tsareena",
		value: "tsareena",
		icon: "tsareena",
		id: "763"
	},
	{
		name: "Comfey",
		value: "comfey",
		icon: "comfey",
		id: "764",
		exclude: [
			"sv"
		]
	},
	{
		name: "Oranguru",
		value: "oranguru",
		icon: "oranguru",
		id: "765"
	},
	{
		name: "Passimian",
		value: "passimian",
		icon: "passimian",
		id: "766"
	},
	{
		name: "Wimpod",
		value: "wimpod",
		icon: "wimpod",
		id: "767",
		exclude: [
			"sv"
		]
	},
	{
		name: "Golisopod",
		value: "golisopod",
		icon: "golisopod",
		id: "768",
		exclude: [
			"sv"
		]
	},
	{
		name: "Sandygast",
		value: "sandygast",
		icon: "sandygast",
		id: "769"
	},
	{
		name: "Palossand",
		value: "palossand",
		icon: "palossand",
		id: "770"
	},
	{
		name: "Pyukumuku",
		value: "pyukumuku",
		icon: "pyukumuku",
		id: "771",
		exclude: [
			"sv"
		]
	},
	{
		name: "Type: Null",
		value: "type-null",
		icon: "type-null",
		id: "772",
		exclude: [
			"sv"
		]
	},
	{
		name: "Silvally",
		value: "silvally",
		icon: "silvally",
		id: "773",
		exclude: [
			"sv"
		]
	},
	{
		name: "Minior",
		value: "minior",
		icon: "minior",
		id: "774",
		exclude: [
			"swsh",
			"sv"
		]
	},
	{
		name: "Komala",
		value: "komala",
		icon: "komala",
		id: "775",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Turtonator",
		value: "turtonator",
		icon: "turtonator",
		id: "776",
		exclude: [
			"sv"
		]
	},
	{
		name: "Togedemaru",
		value: "togedemaru",
		icon: "togedemaru",
		id: "777",
		exclude: [
			"sv"
		]
	},
	{
		name: "Mimikyu",
		value: "mimikyu",
		icon: "mimikyu",
		id: "778"
	},
	{
		name: "Bruxish",
		value: "bruxish",
		icon: "bruxish",
		id: "779",
		exclude: [
			"swsh"
		]
	},
	{
		name: "Drampa",
		value: "drampa",
		icon: "drampa",
		id: "780",
		exclude: [
			"sv"
		]
	},
	{
		name: "Dhelmise",
		value: "dhelmise",
		icon: "dhelmise",
		id: "781",
		exclude: [
			"sv"
		]
	},
	{
		name: "Jangmo-o",
		value: "jangmo-o",
		icon: "jangmo-o",
		id: "782",
		exclude: [
			"sv"
		]
	},
	{
		name: "Hakamo-o",
		value: "hakamo-o",
		icon: "hakamo-o",
		id: "783",
		exclude: [
			"sv"
		]
	},
	{
		name: "Kommo-o",
		value: "kommo-o",
		icon: "kommo-o",
		id: "784",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tapu Koko",
		value: "tapu-koko",
		icon: "tapu-koko",
		id: "785",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tapu Lele",
		value: "tapu-lele",
		icon: "tapu-lele",
		id: "786",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tapu Bulu",
		value: "tapu-bulu",
		icon: "tapu-bulu",
		id: "787",
		exclude: [
			"sv"
		]
	},
	{
		name: "Tapu Fini",
		value: "tapu-fini",
		icon: "tapu-fini",
		id: "788",
		exclude: [
			"sv"
		]
	},
	{
		name: "Cosmog",
		value: "cosmog",
		icon: "cosmog",
		id: "789",
		exclude: [
			"sv"
		]
	},
	{
		name: "Cosmoem",
		value: "cosmoem",
		icon: "cosmoem",
		id: "790",
		exclude: [
			"sv"
		]
	},
	{
		name: "Solgaleo",
		value: "solgaleo",
		icon: "solgaleo",
		id: "791",
		exclude: [
			"sv"
		]
	},
	{
		name: "Lunala",
		value: "lunala",
		icon: "lunala",
		id: "792",
		exclude: [
			"sv"
		]
	},
	{
		name: "Nihilego",
		value: "nihilego",
		icon: "nihilego",
		id: "793",
		exclude: [
			"sv"
		]
	},
	{
		name: "Buzzwole",
		value: "buzzwole",
		icon: "buzzwole",
		id: "794",
		exclude: [
			"sv"
		]
	},
	{
		name: "Pheromosa",
		value: "pheromosa",
		icon: "pheromosa",
		id: "795",
		exclude: [
			"sv"
		]
	},
	{
		name: "Xurkitree",
		value: "xurkitree",
		icon: "xurkitree",
		id: "796",
		exclude: [
			"sv"
		]
	},
	{
		name: "Celesteela",
		value: "celesteela",
		icon: "celesteela",
		id: "797",
		exclude: [
			"sv"
		]
	},
	{
		name: "Kartana",
		value: "kartana",
		icon: "kartana",
		id: "798",
		exclude: [
			"sv"
		]
	},
	{
		name: "Guzzlord",
		value: "guzzlord",
		icon: "guzzlord",
		id: "799",
		exclude: [
			"sv"
		]
	},
	{
		name: "Necrozma",
		value: "necrozma",
		icon: "necrozma",
		id: "800",
		exclude: [
			"sv"
		]
	},
	{
		name: "Magearna",
		value: "magearna",
		icon: "magearna",
		id: "801"
	},
	{
		name: "Marshadow",
		value: "marshadow",
		icon: "marshadow",
		id: "802",
		exclude: [
			"sv"
		]
	},
	{
		name: "Poipole",
		value: "poipole",
		icon: "poipole",
		id: "803",
		exclude: [
			"sv"
		]
	},
	{
		name: "Naganadel",
		value: "naganadel",
		icon: "naganadel",
		id: "804",
		exclude: [
			"sv"
		]
	},
	{
		name: "Stakataka",
		value: "stakataka",
		icon: "stakataka",
		id: "805",
		exclude: [
			"sv"
		]
	},
	{
		name: "Blacephalon",
		value: "blacephalon",
		icon: "blacephalon",
		id: "806",
		exclude: [
			"sv"
		]
	},
	{
		name: "Zeraora",
		value: "zeraora",
		icon: "zeraora",
		id: "807",
		exclude: [
			"sv"
		]
	},
	{
		name: "Meltan",
		value: "meltan",
		icon: "meltan",
		id: "808",
		exclude: [
			"sv"
		]
	},
	{
		name: "Melmetal",
		value: "melmetal",
		icon: "melmetal",
		id: "809",
		exclude: [
			"sv"
		]
	},
	{
		name: "Grookey",
		value: "grookey",
		icon: "grookey",
		id: "810"
	},
	{
		name: "Thwackey",
		value: "thwackey",
		icon: "thwackey",
		id: "811"
	},
	{
		name: "Rillaboom",
		value: "rillaboom",
		icon: "rillaboom",
		id: "812"
	},
	{
		name: "Scorbunny",
		value: "scorbunny",
		icon: "scorbunny",
		id: "813"
	},
	{
		name: "Raboot",
		value: "raboot",
		icon: "raboot",
		id: "814"
	},
	{
		name: "Cinderace",
		value: "cinderace",
		icon: "cinderace",
		id: "815"
	},
	{
		name: "Sobble",
		value: "sobble",
		icon: "sobble",
		id: "816"
	},
	{
		name: "Drizzile",
		value: "drizzile",
		icon: "drizzile",
		id: "817"
	},
	{
		name: "Inteleon",
		value: "inteleon",
		icon: "inteleon",
		id: "818"
	},
	{
		name: "Skwovet",
		value: "skwovet",
		icon: "skwovet",
		id: "819"
	},
	{
		name: "Greedent",
		value: "greedent",
		icon: "greedent",
		id: "820"
	},
	{
		name: "Rookidee",
		value: "rookidee",
		icon: "rookidee",
		id: "821"
	},
	{
		name: "Corvisquire",
		value: "corvisquire",
		icon: "corvisquire",
		id: "822"
	},
	{
		name: "Corviknight",
		value: "corviknight",
		icon: "corviknight",
		id: "823"
	},
	{
		name: "Blipbug",
		value: "blipbug",
		icon: "blipbug",
		id: "824",
		exclude: [
			"sv"
		]
	},
	{
		name: "Dottler",
		value: "dottler",
		icon: "dottler",
		id: "825",
		exclude: [
			"sv"
		]
	},
	{
		name: "Orbeetle",
		value: "orbeetle",
		icon: "orbeetle",
		id: "826",
		exclude: [
			"sv"
		]
	},
	{
		name: "Nickit",
		value: "nickit",
		icon: "nickit",
		id: "827",
		exclude: [
			"sv"
		]
	},
	{
		name: "Thievul",
		value: "thievul",
		icon: "thievul",
		id: "828",
		exclude: [
			"sv"
		]
	},
	{
		name: "Gossifleur",
		value: "gossifleur",
		icon: "gossifleur",
		id: "829",
		exclude: [
			"sv"
		]
	},
	{
		name: "Eldegoss",
		value: "eldegoss",
		icon: "eldegoss",
		id: "830",
		exclude: [
			"sv"
		]
	},
	{
		name: "Wooloo",
		value: "wooloo",
		icon: "wooloo",
		id: "831",
		exclude: [
			"sv"
		]
	},
	{
		name: "Dubwool",
		value: "dubwool",
		icon: "dubwool",
		id: "832",
		exclude: [
			"sv"
		]
	},
	{
		name: "Chewtle",
		value: "chewtle",
		icon: "chewtle",
		id: "833"
	},
	{
		name: "Drednaw",
		value: "drednaw",
		icon: "drednaw",
		id: "834"
	},
	{
		name: "Yamper",
		value: "yamper",
		icon: "yamper",
		id: "835",
		exclude: [
			"sv"
		]
	},
	{
		name: "Boltund",
		value: "boltund",
		icon: "boltund",
		id: "836",
		exclude: [
			"sv"
		]
	},
	{
		name: "Rolycoly",
		value: "rolycoly",
		icon: "rolycoly",
		id: "837"
	},
	{
		name: "Carkol",
		value: "carkol",
		icon: "carkol",
		id: "838"
	},
	{
		name: "Coalossal",
		value: "coalossal",
		icon: "coalossal",
		id: "839"
	},
	{
		name: "Applin",
		value: "applin",
		icon: "applin",
		id: "840"
	},
	{
		name: "Flapple",
		value: "flapple",
		icon: "flapple",
		id: "841"
	},
	{
		name: "Appletun",
		value: "appletun",
		icon: "appletun",
		id: "842"
	},
	{
		name: "Silicobra",
		value: "silicobra",
		icon: "silicobra",
		id: "843"
	},
	{
		name: "Sandaconda",
		value: "sandaconda",
		icon: "sandaconda",
		id: "844"
	},
	{
		name: "Cramorant",
		value: "cramorant",
		icon: "cramorant",
		id: "845",
		exclude: [
			"sv"
		]
	},
	{
		name: "Arrokuda",
		value: "arrokuda",
		icon: "arrokuda",
		id: "846"
	},
	{
		name: "Barraskewda",
		value: "barraskewda",
		icon: "barraskewda",
		id: "847"
	},
	{
		name: "Toxel",
		value: "toxel",
		icon: "toxel",
		id: "848"
	},
	{
		name: "Toxtricity",
		value: "toxtricity",
		icon: "toxtricity",
		id: "849"
	},
	{
		name: "Sizzlipede",
		value: "sizzlipede",
		icon: "sizzlipede",
		id: "850",
		exclude: [
			"sv"
		]
	},
	{
		name: "Centiskorch",
		value: "centiskorch",
		icon: "centiskorch",
		id: "851",
		exclude: [
			"sv"
		]
	},
	{
		name: "Clobbopus",
		value: "clobbopus",
		icon: "clobbopus",
		id: "852",
		exclude: [
			"sv"
		]
	},
	{
		name: "Grapploct",
		value: "grapploct",
		icon: "grapploct",
		id: "853",
		exclude: [
			"sv"
		]
	},
	{
		name: "Sinistea",
		value: "sinistea",
		icon: "sinistea",
		id: "854"
	},
	{
		name: "Polteageist",
		value: "polteageist",
		icon: "polteageist",
		id: "855"
	},
	{
		name: "Hatenna",
		value: "hatenna",
		icon: "hatenna",
		id: "856"
	},
	{
		name: "Hattrem",
		value: "hattrem",
		icon: "hattrem",
		id: "857"
	},
	{
		name: "Hatterene",
		value: "hatterene",
		icon: "hatterene",
		id: "858"
	},
	{
		name: "Impidimp",
		value: "impidimp",
		icon: "impidimp",
		id: "859"
	},
	{
		name: "Morgrem",
		value: "morgrem",
		icon: "morgrem",
		id: "860"
	},
	{
		name: "Grimmsnarl",
		value: "grimmsnarl",
		icon: "grimmsnarl",
		id: "861"
	},
	{
		name: "Obstagoon",
		value: "obstagoon",
		icon: "obstagoon",
		id: "862",
		exclude: [
			"sv"
		]
	},
	{
		name: "Perrserker",
		value: "perrserker",
		icon: "perrserker",
		id: "863"
	},
	{
		name: "Cursola",
		value: "cursola",
		icon: "cursola",
		id: "864",
		exclude: [
			"sv"
		]
	},
	{
		name: "Sirfetch'd",
		value: "sirfetchd",
		icon: "sirfetchd",
		id: "865",
		exclude: [
			"sv"
		]
	},
	{
		name: "Mr. Rime",
		value: "mr-rime",
		icon: "mr-rime",
		id: "866",
		exclude: [
			"sv"
		]
	},
	{
		name: "Runerigus",
		value: "runerigus",
		icon: "runerigus",
		id: "867",
		exclude: [
			"sv"
		]
	},
	{
		name: "Milcery",
		value: "milcery",
		icon: "milcery",
		id: "868",
		exclude: [
			"sv"
		]
	},
	{
		name: "Alcremie",
		value: "alcremie",
		icon: "alcremie",
		id: "869",
		exclude: [
			"sv"
		]
	},
	{
		name: "Falinks",
		value: "falinks",
		icon: "falinks",
		id: "870"
	},
	{
		name: "Pincurchin",
		value: "pincurchin",
		icon: "pincurchin",
		id: "871"
	},
	{
		name: "Snom",
		value: "snom",
		icon: "snom",
		id: "872"
	},
	{
		name: "Frosmoth",
		value: "frosmoth",
		icon: "frosmoth",
		id: "873"
	},
	{
		name: "Stonjourner",
		value: "stonjourner",
		icon: "stonjourner",
		id: "874"
	},
	{
		name: "Eiscue",
		value: "eiscue",
		icon: "eiscue",
		id: "875"
	},
	{
		name: "Indeedee",
		value: "indeedee",
		icon: "indeedee",
		id: "876"
	},
	{
		name: "Morpeko",
		value: "morpeko",
		icon: "morpeko",
		id: "877",
		exclude: [
			"sv"
		]
	},
	{
		name: "Cufant",
		value: "cufant",
		icon: "cufant",
		id: "878"
	},
	{
		name: "Copperajah",
		value: "copperajah",
		icon: "copperajah",
		id: "879"
	},
	{
		name: "Dracozolt",
		value: "dracozolt",
		icon: "dracozolt",
		id: "880",
		exclude: [
			"sv"
		]
	},
	{
		name: "Arctozolt",
		value: "arctozolt",
		icon: "arctozolt",
		id: "881",
		exclude: [
			"sv"
		]
	},
	{
		name: "Dracovish",
		value: "dracovish",
		icon: "dracovish",
		id: "882",
		exclude: [
			"sv"
		]
	},
	{
		name: "Arctovish",
		value: "arctovish",
		icon: "arctovish",
		id: "883",
		exclude: [
			"sv"
		]
	},
	{
		name: "Duraludon",
		value: "duraludon",
		icon: "duraludon",
		id: "884",
		exclude: [
			"sv"
		]
	},
	{
		name: "Dreepy",
		value: "dreepy",
		icon: "dreepy",
		id: "885"
	},
	{
		name: "Drakloak",
		value: "drakloak",
		icon: "drakloak",
		id: "886"
	},
	{
		name: "Dragapult",
		value: "dragapult",
		icon: "dragapult",
		id: "887"
	},
	{
		name: "Zacian",
		value: "zacian",
		icon: "zacian",
		id: "888"
	},
	{
		name: "Zamazenta",
		value: "zamazenta",
		icon: "zamazenta",
		id: "889"
	},
	{
		name: "Eternatus",
		value: "eternatus",
		icon: "eternatus",
		id: "890"
	},
	{
		name: "Kubfu",
		value: "kubfu",
		icon: "kubfu",
		id: "891"
	},
	{
		name: "Urshifu",
		value: "urshifu",
		icon: "urshifu",
		id: "892"
	},
	{
		name: "Zarude",
		value: "zarude",
		icon: "zarude",
		id: "893"
	},
	{
		name: "Regieleki",
		value: "regieleki",
		icon: "regieleki",
		id: "894"
	},
	{
		name: "Regidrago",
		value: "regidrago",
		icon: "regidrago",
		id: "895"
	},
	{
		name: "Glastrier",
		value: "glastrier",
		icon: "glastrier",
		id: "896"
	},
	{
		name: "Spectrier",
		value: "spectrier",
		icon: "spectrier",
		id: "897"
	},
	{
		name: "Calyrex",
		value: "calyrex",
		icon: "calyrex",
		id: "898"
	},
	{
		name: "Wyrdeer",
		value: "wyrdeer",
		icon: "wyrdeer",
		id: "899"
	},
	{
		name: "Kleavor",
		value: "kleavor",
		icon: "kleavor",
		id: "900"
	},
	{
		name: "Ursaluna",
		value: "ursaluna",
		icon: "ursaluna",
		id: "901"
	},
	{
		name: "Basculegion",
		value: "basculegion",
		icon: "basculegion",
		id: "902"
	},
	{
		name: "Sneasler",
		value: "sneasler",
		icon: "sneasler",
		id: "903"
	},
	{
		name: "Overqwil",
		value: "overqwil",
		icon: "overqwil",
		id: "904"
	},
	{
		name: "Enamorus",
		value: "enamorus",
		icon: "enamorus",
		id: "905"
	},
	{
		name: "Sprigatito",
		value: "sprigatito",
		icon: "sprigatito"
	},
	{
		name: "Floragato",
		value: "floragato",
		icon: "floragato"
	},
	{
		name: "Meowscarada",
		value: "meowscarada",
		icon: "meowscarada"
	},
	{
		name: "Fuecoco",
		value: "fuecoco",
		icon: "fuecoco"
	},
	{
		name: "Crocalor",
		value: "crocalor",
		icon: "crocalor"
	},
	{
		name: "Skeledirge",
		value: "skeledirge",
		icon: "skeledirge"
	},
	{
		name: "Quaxly",
		value: "quaxly",
		icon: "quaxly"
	},
	{
		name: "Quaxwell",
		value: "quaxwell",
		icon: "quaxwell"
	},
	{
		name: "Quaquaval",
		value: "quaquaval",
		icon: "quaquaval"
	},
	{
		name: "Lechonk",
		value: "lechonk",
		icon: "lechonk"
	},
	{
		name: "Oinkologne",
		value: "oinkologne",
		icon: "oinkologne"
	},
	{
		name: "Tarountula",
		value: "tarountula",
		icon: "tarountula"
	},
	{
		name: "Spidops",
		value: "spidops",
		icon: "spidops"
	},
	{
		name: "Nymble",
		value: "nymble",
		icon: "nymble"
	},
	{
		name: "Lokix",
		value: "lokix",
		icon: "lokix"
	},
	{
		name: "Pawmi",
		value: "pawmi",
		icon: "pawmi"
	},
	{
		name: "Pawmo",
		value: "pawmo",
		icon: "pawmo"
	},
	{
		name: "Pawmot",
		value: "pawmot",
		icon: "pawmot"
	},
	{
		name: "Tandemaus",
		value: "tandemaus",
		icon: "tandemaus"
	},
	{
		name: "Maushold",
		value: "maushold",
		icon: "maushold"
	},
	{
		name: "Fidough",
		value: "fidough",
		icon: "fidough"
	},
	{
		name: "Dachsbun",
		value: "dachsbun",
		icon: "dachsbun"
	},
	{
		name: "Smoliv",
		value: "smoliv",
		icon: "smoliv"
	},
	{
		name: "Dolliv",
		value: "dolliv",
		icon: "dolliv"
	},
	{
		name: "Arboliva",
		value: "arboliva",
		icon: "arboliva"
	},
	{
		name: "Squawkabilly",
		value: "squawkabilly",
		icon: "squawkabilly"
	},
	{
		name: "Nacli",
		value: "nacli",
		icon: "nacli"
	},
	{
		name: "Naclstack",
		value: "naclstack",
		icon: "naclstack"
	},
	{
		name: "Garganacl",
		value: "garganacl",
		icon: "garganacl"
	},
	{
		name: "Charcadet",
		value: "charcadet",
		icon: "charcadet"
	},
	{
		name: "Armarouge",
		value: "armarouge",
		icon: "armarouge"
	},
	{
		name: "Ceruledge",
		value: "ceruledge",
		icon: "ceruledge"
	},
	{
		name: "Tadbulb",
		value: "tadbulb",
		icon: "tadbulb"
	},
	{
		name: "Bellibolt",
		value: "bellibolt",
		icon: "bellibolt"
	},
	{
		name: "Wattrel",
		value: "wattrel",
		icon: "wattrel"
	},
	{
		name: "Kilowattrel",
		value: "kilowattrel",
		icon: "kilowattrel"
	},
	{
		name: "Maschiff",
		value: "maschiff",
		icon: "maschiff"
	},
	{
		name: "Mabosstiff",
		value: "mabosstiff",
		icon: "mabosstiff"
	},
	{
		name: "Shroodle",
		value: "shroodle",
		icon: "shroodle"
	},
	{
		name: "Grafaiai",
		value: "grafaiai",
		icon: "grafaiai"
	},
	{
		name: "Bramblin",
		value: "bramblin",
		icon: "bramblin"
	},
	{
		name: "Brambleghast",
		value: "brambleghast",
		icon: "brambleghast"
	},
	{
		name: "Toedscool",
		value: "toedscool",
		icon: "toedscool"
	},
	{
		name: "Toedscruel",
		value: "toedscruel",
		icon: "toedscruel"
	},
	{
		name: "Klawf",
		value: "klawf",
		icon: "klawf"
	},
	{
		name: "Capsakid",
		value: "capsakid",
		icon: "capsakid"
	},
	{
		name: "Scovillain",
		value: "scovillain",
		icon: "scovillain"
	},
	{
		name: "Rellor",
		value: "rellor",
		icon: "rellor"
	},
	{
		name: "Rabsca",
		value: "rabsca",
		icon: "rabsca"
	},
	{
		name: "Flittle",
		value: "flittle",
		icon: "flittle"
	},
	{
		name: "Espathra",
		value: "espathra",
		icon: "espathra"
	},
	{
		name: "Tinkatink",
		value: "tinkatink",
		icon: "tinkatink"
	},
	{
		name: "Tinkatuff",
		value: "tinkatuff",
		icon: "tinkatuff"
	},
	{
		name: "Tinkaton",
		value: "tinkaton",
		icon: "tinkaton"
	},
	{
		name: "Wiglett",
		value: "wiglett",
		icon: "wiglett"
	},
	{
		name: "Wugtrio",
		value: "wugtrio",
		icon: "wugtrio"
	},
	{
		name: "Bombirdier",
		value: "bombirdier",
		icon: "bombirdier"
	},
	{
		name: "Finizen",
		value: "finizen",
		icon: "finizen"
	},
	{
		name: "Palafin",
		value: "palafin",
		icon: "palafin"
	},
	{
		name: "Varoom",
		value: "varoom",
		icon: "varoom"
	},
	{
		name: "Revavroom",
		value: "revavroom",
		icon: "revavroom"
	},
	{
		name: "Cyclizar",
		value: "cyclizar",
		icon: "cyclizar"
	},
	{
		name: "Orthworm",
		value: "orthworm",
		icon: "orthworm"
	},
	{
		name: "Glimmet",
		value: "glimmet",
		icon: "glimmet"
	},
	{
		name: "Glimmora",
		value: "glimmora",
		icon: "glimmora"
	},
	{
		name: "Greavard",
		value: "greavard",
		icon: "greavard"
	},
	{
		name: "Houndstone",
		value: "houndstone",
		icon: "houndstone"
	},
	{
		name: "Flamigo",
		value: "flamigo",
		icon: "flamigo"
	},
	{
		name: "Cetoddle",
		value: "cetoddle",
		icon: "cetoddle"
	},
	{
		name: "Cetitan",
		value: "cetitan",
		icon: "cetitan"
	},
	{
		name: "Veluza",
		value: "veluza",
		icon: "veluza"
	},
	{
		name: "Dondozo",
		value: "dondozo",
		icon: "dondozo"
	},
	{
		name: "Tatsugiri",
		value: "tatsugiri",
		icon: "tatsugiri"
	},
	{
		name: "Annihilape",
		value: "annihilape",
		icon: "annihilape"
	},
	{
		name: "Clodsire",
		value: "clodsire",
		icon: "clodsire"
	},
	{
		name: "Farigiraf",
		value: "farigiraf",
		icon: "farigiraf"
	},
	{
		name: "Dudunsparce",
		value: "dudunsparce",
		icon: "dudunsparce"
	},
	{
		name: "Kingambit",
		value: "kingambit",
		icon: "kingambit"
	},
	{
		name: "Great Tusk",
		value: "greattusk",
		icon: "greattusk"
	},
	{
		name: "Scream Tail",
		value: "screamtail",
		icon: "screamtail"
	},
	{
		name: "Brute Bonnet",
		value: "brutebonnet",
		icon: "brutebonnet"
	},
	{
		name: "Flutter Mane",
		value: "fluttermane",
		icon: "fluttermane"
	},
	{
		name: "Slither Wing",
		value: "slitherwing",
		icon: "slitherwing"
	},
	{
		name: "Sandy Shocks",
		value: "sandyshocks",
		icon: "sandyshocks"
	},
	{
		name: "Iron Treads",
		value: "irontreads",
		icon: "irontreads"
	},
	{
		name: "Iron Bundle",
		value: "ironbundle",
		icon: "ironbundle"
	},
	{
		name: "Iron Hands",
		value: "ironhands",
		icon: "ironhands"
	},
	{
		name: "Iron Jugulis",
		value: "ironjugulis",
		icon: "ironjugulis"
	},
	{
		name: "Iron Moth",
		value: "ironmoth",
		icon: "ironmoth"
	},
	{
		name: "Iron Thorns",
		value: "ironthorns",
		icon: "ironthorns"
	},
	{
		name: "Frigibax",
		value: "frigibax",
		icon: "frigibax"
	},
	{
		name: "Arctibax",
		value: "arctibax",
		icon: "arctibax"
	},
	{
		name: "Baxcalibur",
		value: "baxcalibur",
		icon: "baxcalibur"
	},
	{
		name: "Gimmighoul",
		value: "gimmighoul",
		icon: "gimmighoul"
	},
	{
		name: "Gholdengo",
		value: "gholdengo",
		icon: "gholdengo"
	},
	{
		name: "Wo-Chien",
		value: "wo-chien",
		icon: "wo-chien"
	},
	{
		name: "Chien-Pao",
		value: "chien-pao",
		icon: "chien-pao"
	},
	{
		name: "Ting-Lu",
		value: "ting-lu",
		icon: "ting-lu"
	},
	{
		name: "Chi-Yu",
		value: "chi-yu",
		icon: "chi-yu"
	},
	{
		name: "Roaring Moon",
		value: "roaringmoon",
		icon: "roaringmoon"
	},
	{
		name: "Iron Valiant",
		value: "ironvaliant",
		icon: "ironvaliant"
	},
	{
		name: "Koraidon",
		value: "koraidon",
		icon: "koraidon"
	},
	{
		name: "Miraidon",
		value: "miraidon",
		icon: "miraidon"
	}
];