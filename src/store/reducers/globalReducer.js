const initState = {
    images: [
        {
            "title":"Dying characters",
            "src":"images/book1.jpg",
            "upvotes":23,
            "downvotes":15,
            "tags": ['books','cartoon'],
            "imgID": 0,
            "importDate": 'Sat Jun 08 2024 16:42:35 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Buying too many books",
            "src":"images/books2.jpeg",
            "upvotes":12,
            "downvotes":50,
            "tags": ['books'],
            "imgID": 1,
            "importDate": 'Sat Jun 08 2024 16:43:21 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Used bookstore",
            "src":"images/books3.jpg",
            "upvotes":65,
            "downvotes":32,
            "tags": ['books','lotr'],
            "imgID": 2,
            "importDate": 'Sat Jun 08 2024 16:51:47 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Photogenic cat",
            "src":"images/cat.jpg",
            "upvotes":191,
            "downvotes":180,
            "tags": ['cats','cute'],
            "imgID": 3,
            "importDate": 'Sat Jun 08 2024 16:43:21 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Big mouse",
            "src":"images/cat2.jpg",
            "upvotes":214,
            "downvotes":200,
            "tags": ['cats','cute','animals'],
            "imgID": 4,
            "importDate": 'Sat Jun 08 2024 16:50:47 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Neighbours house",
            "src":"images/cat3.jpg",
            "upvotes":123,
            "downvotes":121,
            "tags": ['cats'],
            "imgID": 5,
            "importDate": 'Sat Jun 08 2024 16:42:35 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Getting the pizza",
            "src":"images/cat4.jpg",
            "upvotes":32,
            "downvotes":58,
            "tags": ['cats','art'],
            "imgID": 6,
            "importDate": 'Sat Jun 08 2024 16:51:47 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Dad and the cat",
            "src":"images/cat5.jpg",
            "upvotes":12,
            "downvotes":5,
            "tags": ['cats','family'],
            "imgID": 7,
            "importDate": 'Sat Jun 08 2024 16:42:35 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Wellness check",
            "src":"images/cat6.jpg",
            "upvotes":21,
            "downvotes":20,
            "tags": ['cats','cartoon'],
            "imgID": 8,
            "importDate": 'Sat Jun 08 2024 16:53:47 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Diuna w Opolu",
            "src":"images/Diuna_opole.jpg",
            "upvotes":54,
            "downvotes":57,
            "tags": ['polish','dune','movies'],
            "imgID": 9,
            "importDate": 'Sat Jun 08 2024 16:42:35 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Dogville the Sims edition",
            "src":"images/dogville.jpg",
            "upvotes":15,
            "downvotes":7,
            "tags": ['movies'],
            "imgID": 10,
            "importDate": 'Sat Jun 08 2024 16:33:21 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Gom Jabbar",
            "src":"images/dune2.jpeg",
            "upvotes":89,
            "downvotes":86,
            "tags": ['dune'],
            "imgID": 11,
            "importDate": 'Sat Jun 08 2024 16:51:47 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Lisan Al Gaib",
            "src":"images/dune3.jpeg",
            "upvotes":290,
            "downvotes":288,
            "tags": ['dune'],
            "imgID": 12,
            "importDate": 'Sat Jun 08 2024 16:42:35 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Filmoznawca na pokladzie",
            "src":"images/filmoznawca.jpg",
            "upvotes":43,
            "downvotes":56,
            "tags": ['movies','polish','cartoon'],
            "imgID": 13,
            "importDate": 'Sat Jun 08 2024 16:41:47 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Goodfellas Kicia Kocia",
            "src":"images/goodfellas.jpg",
            "upvotes":157,
            "downvotes":160,
            "tags": ['movies'],
            "imgID": 14,
            "importDate": 'Sat Jun 08 2024 16:35:47 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Cubic rule",
            "src":"images/hot_doh.jpg",
            "upvotes":67,
            "downvotes":60,
            "tags": ['food','philosophy'],
            "imgID": 15,
            "importDate": 'Sat Jun 08 2024 16:43:21 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Dark lord in a turban",
            "src":"images/hp.png",
            "upvotes":90,
            "downvotes":87,
            "tags": ['books','hp','harry potter','movies'],
            "imgID": 16,
            "importDate": 'Sat Jun 08 2024 16:42:35 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Hogwarts letters",
            "src":"images/hp2.png",
            "upvotes":100,
            "downvotes":97,
            "tags": ['books','hp','harry potter','movies'],
            "imgID": 17,
            "importDate": 'Sat Jun 08 2024 16:51:47 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Harry Potter actors",
            "src":"images/hp3.png",
            "upvotes":301,
            "downvotes":299,
            "tags": ['books','hp','harry potter','movies'],
            "imgID": 18,
            "importDate": 'Sat Jun 08 2024 16:45:47 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Order of the Phoenix",
            "src":"images/hp4.jpg",
            "upvotes":171,
            "downvotes":184,
            "tags": ['books','hp','harry potter','food','movies'],
            "imgID": 19,
            "importDate": 'Sat Jun 08 2024 16:43:21 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"HP crew",
            "src":"images/hp5.png",
            "upvotes":79,
            "downvotes":63,
            "tags": ['books','hp','harry potter','family','movies'],
            "imgID": 20,
            "importDate": 'Sat Jun 08 2024 16:48:47 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Slytherin monster",
            "src":"images/hp6.png",
            "upvotes":287,
            "downvotes":280,
            "tags": ['books','hp','harry potter'],
            "imgID": 21,
            "importDate": 'Sat Jun 08 2024 16:51:47 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Checkout emergency",
            "src":"images/lotr1.png",
            "upvotes":49,
            "downvotes":57,
            "tags": ['books','lotr','movies','family'],
            "imgID": 22,
            "importDate": 'Sat Jun 08 2024 16:43:21 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"End of the line",
            "src":"images/lotr2.png",
            "upvotes":189,
            "downvotes":179,
            "tags": ['books','lotr','movies','family'],
            "imgID": 23,
            "importDate": 'Sat Jun 08 2024 16:51:47 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Halflings in the car",
            "src":"images/lotr3.png",
            "upvotes":35,
            "downvotes":12,
            "tags": ['books','lotr','movies','marriage'],
            "imgID": 24,
            "importDate": 'Sat Jun 08 2024 16:52:47 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Les Parapluies de Cherbourg",
            "src":"images/musical.jpg",
            "upvotes":67,
            "downvotes":54,
            "tags": ['movies', 'musical','polish'],
            "imgID": 25,
            "importDate": 'Sat Jun 08 2024 16:34:47 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Imax Oppenheimer roll",
            "src":"images/oppenheimer.jpg",
            "upvotes":79,
            "downvotes":75,
            "tags": ['movies'],
            "imgID": 26,
            "importDate": 'Sat Jun 08 2024 16:43:21 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Radzieccy Rezyserzy be like",
            "src":"images/radzieccy_rez.jpg",
            "upvotes":54,
            "downvotes":56,
            "tags": ['movies', 'european movies','polish'],
            "imgID": 27,
            "importDate": 'Sat Jun 08 2024 16:42:35 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Shrinking Man",
            "src":"images/shrinking_man.jpg",
            "upvotes":12,
            "downvotes":11,
            "tags": ['movies','polish'],
            "imgID": 28,
            "importDate": 'Sat Jun 08 2024 16:33:47 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Idiot Sandwich",
            "src":"images/idiot_sandwich.jpg",
            "upvotes":45,
            "downvotes":39,
            "tags": ['food','Gordon Ramsay'],
            "imgID": 29,
            "importDate": 'Sat Jun 08 2024 16:43:21 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Spaghetti Police",
            "src":"images/polizia-italiana.webp",
            "upvotes":76,
            "downvotes":75,
            "tags": ['food','italian','cartoon'],
            "imgID": 30,
            "importDate": 'Sat Jun 08 2024 16:51:47 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Stary i pies",
            "src":"images/stary_i_pies.jpg",
            "upvotes":29,
            "downvotes":1,
            "tags": ['dogs','animals','family','polish'],
            "imgID": 31,
            "importDate": 'Sat Jun 08 2024 16:43:21 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Healthy diet",
            "src":"images/gbbo1.webp",
            "upvotes":47,
            "downvotes":32,
            "tags": ['food','great british bake off','gbbo'],
            "imgID": 32,
            "importDate": 'Sat Jun 08 2024 16:42:35 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Hard day",
            "src":"images/gbbo2.png",
            "upvotes":65,
            "downvotes":12,
            "tags": ['great british bake off','gbbo'],
            "imgID": 33,
            "importDate": 'Sat Jun 08 2024 16:51:47 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Acaster breakdown",
            "src":"images/gbbo3.jpg",
            "upvotes":43,
            "downvotes":32,
            "tags": ['great british bake off','gbbo'],
            "imgID": 34,
            "importDate": 'Sat Jun 08 2024 16:43:47 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        },
        {
            "title":"Heidi N. Closet",
            "src":"https://i.pinimg.com/originals/cb/cb/20/cbcb20a92a1e8fa72676915c3f953944.jpg",
            "upvotes":40,
            "downvotes":32,
            "tags": ['rpdr','rupauls drag race'],
            "imgID": 35,
            "importDate": 'Sat Jun 08 2024 16:51:47 GMT+0200 (czas środkowoeuropejski letni)',
            "favourite": "false"
        }
    ],
    tagsArray: ['art','books','lotr','movies','food','european movies', 'hp','harry potter','musical','cats','philosophy','polish','dune','cute','animals','cartoon','family','marriage','gordon ramsay','italian','dogs','great british bake off','gbbo','rpdr','rupauls drag race'],
    currentTag: "",
    selectedIndex: 0,
};

export const memeReducer = (state = initState, action) => {
    switch(action.type) {
        case "ADD_UPVOTE": {
            return {...state, 
                images: state.images.map(img => img.imgID === action.payload ? {...img, upvotes: img.upvotes + 1} : img)
            };
        }
        case "ADD_DOWNVOTE": {
            return {...state, 
                images: state.images.map(img => img.imgID === action.payload ? {...img, downvotes: img.downvotes + 1} : img)
            };
        }
        case "CHANGE_FAVOURITE_STATUS": {
            return {...state, 
                images: state.images.map(img => img.imgID === action.payload ? img.favourite === 'true' ? {...img, favourite: 'false' } : {...img, favourite: 'true' } : img)
            };
        }
        case "CHANGE_CURR_TAG": {
            return {...state, currentTag: action.payload};
        }
        case "CHANGE_SELECTED_TAB": {
            return {...state, selectedIndex: action.payload}
        }
        case "SUBMIT_MEME": {
            const newID = Math.max(...state.images.map((a) => a.imgID)) + 1;
            const tagsSliced = action.payload.tags.slice(0,5);
            const tagsForTags = tagsSliced.filter((i) => !state.tagsArray.includes(i))
            const newMeme = {
                "title": action.payload.title,
                "src": action.payload.src,
                "upvotes":0,
                "downvotes":0,
                "tags": tagsSliced,
                "imgID": newID,
                "importDate": new Date().toString(),
                "favourite": 'false'
            };
            return {...state, images: [...state.images, newMeme], tagsArray: [...state.tagsArray, ...tagsForTags], selectedIndex: 0};
        }
        default:
            return state;
    }
};

