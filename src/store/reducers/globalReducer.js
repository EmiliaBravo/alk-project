const initState = {
    images: [
        {
            "title":"",
            "src":"images/book1.jpg",
            "upvotes":23,
            "downvotes":15,
            "tags": ['books','cartoon'],
            "imgID": 0
        },
        {
            "title":"",
            "src":"images/books2.jpeg",
            "upvotes":12,
            "downvotes":50,
            "tags": ['books'],
            "imgID": 1
        },
        {
            "title":"",
            "src":"images/books3.jpg",
            "upvotes":65,
            "downvotes":32,
            "tags": ['books','lotr'],
            "imgID": 2
        },
        {
            "title":"",
            "src":"images/cat.jpg",
            "upvotes":191,
            "downvotes":180,
            "tags": ['cats','cute'],
            "imgID": 3
        },
        {
            "title":"",
            "src":"images/cat2.jpg",
            "upvotes":214,
            "downvotes":200,
            "tags": ['cats','cute','animals'],
            "imgID": 4
        },
        {
            "title":"",
            "src":"images/cat3.jpg",
            "upvotes":123,
            "downvotes":121,
            "tags": ['cats'],
            "imgID": 5
        },
        {
            "title":"",
            "src":"images/cat4.jpg",
            "upvotes":32,
            "downvotes":58,
            "tags": ['cats','art'],
            "imgID": 6
        },
        {
            "title":"",
            "src":"images/cat5.jpg",
            "upvotes":12,
            "downvotes":5,
            "tags": ['cats','family'],
            "imgID": 7
        },
        {
            "title":"",
            "src":"images/cat6.jpg",
            "upvotes":21,
            "downvotes":20,
            "tags": ['cats','cartoon'],
            "imgID": 8
        },
        {
            "title":"",
            "src":"images/Diuna_opole.jpg",
            "upvotes":54,
            "downvotes":57,
            "tags": ['polish','dune','movies'],
            "imgID": 9
        },
        {
            "title":"",
            "src":"images/dogville.jpg",
            "upvotes":15,
            "downvotes":7,
            "tags": ['movies'],
            "imgID": 10
        },
        {
            "title":"",
            "src":"images/dune2.jpeg",
            "upvotes":89,
            "downvotes":86,
            "tags": ['dune'],
            "imgID": 11
        },
        {
            "title":"",
            "src":"images/dune3.jpeg",
            "upvotes":290,
            "downvotes":288,
            "tags": ['dune'],
            "imgID": 12
        },
        {
            "title":"",
            "src":"images/filmoznawca.jpg",
            "upvotes":431,
            "downvotes":425,
            "tags": ['movies','polish','cartoon'],
            "imgID": 13
        },
        {
            "title":"",
            "src":"images/goodfellas.jpg",
            "upvotes":157,
            "downvotes":160,
            "tags": ['movies'],
            "imgID": 14
        },
        {
            "title":"",
            "src":"images/hot_doh.jpg",
            "upvotes":67,
            "downvotes":60,
            "tags": ['food','philosophy'],
            "imgID": 15
        },
        {
            "title":"",
            "src":"images/hp.png",
            "upvotes":90,
            "downvotes":87,
            "tags": ['books','hp','harry potter','movies'],
            "imgID": 16
        },
        {
            "title":"",
            "src":"images/hp2.png",
            "upvotes":100,
            "downvotes":97,
            "tags": ['books','hp','harry potter','movies'],
            "imgID": 17
        },
        {
            "title":"",
            "src":"images/hp3.png",
            "upvotes":301,
            "downvotes":299,
            "tags": ['books','hp','harry potter','movies','movies'],
            "imgID": 18
        },
        {
            "title":"",
            "src":"images/hp4.jpg",
            "upvotes":171,
            "downvotes":184,
            "tags": ['books','hp','harry potter','food','movies'],
            "imgID": 19
        },
        {
            "title":"",
            "src":"images/hp5.png",
            "upvotes":79,
            "downvotes":63,
            "tags": ['books','hp','harry potter','family','movies'],
            "imgID": 20
        },
        {
            "title":"",
            "src":"images/hp6.png",
            "upvotes":287,
            "downvotes":280,
            "tags": ['books','hp','harry potter'],
            "imgID": 21
        },
        {
            "title":"",
            "src":"images/lotr1.png",
            "upvotes":49,
            "downvotes":57,
            "tags": ['books','lotr','movies','family'],
            "imgID": 22
        },
        {
            "title":"",
            "src":"images/lotr2.png",
            "upvotes":189,
            "downvotes":179,
            "tags": ['books','lotr','movies','family'],
            "imgID": 23
        },
        {
            "title":"",
            "src":"images/lotr3.png",
            "upvotes":35,
            "downvotes":12,
            "tags": ['books','lotr','movies','marriage'],
            "imgID": 24
        },
        {
            "title":"",
            "src":"images/musical.jpg",
            "upvotes":67,
            "downvotes":54,
            "tags": ['movies', 'musical','polish'],
            "imgID": 25
        },
        {
            "title":"",
            "src":"images/oppenheimer.jpg",
            "upvotes":79,
            "downvotes":75,
            "tags": ['movies'],
            "imgID": 26
        },
        {
            "title":"Radzieccy Rezyserzy be like",
            "src":"images/radzieccy_rez.jpg",
            "upvotes":54,
            "downvotes":56,
            "tags": ['movies', 'european movies','polish'],
            "imgID": 27
        },
        {
            "title":"Shrinking Man",
            "src":"images/shrinking_man.jpg",
            "upvotes":12,
            "downvotes":11,
            "tags": ['movies','polish'],
            "imgID": 28
        },
        {
            "title":"Idiot Sandwich",
            "src":"images/idiot_sandwich.jpg",
            "upvotes":45,
            "downvotes":39,
            "tags": ['food','Gordon Ramsay'],
            "imgID": 29
        },
        {
            "title":"Spaghetti Police",
            "src":"images/polizia-italiana.webp",
            "upvotes":76,
            "downvotes":75,
            "tags": ['food','italian','cartoon'],
            "imgID": 30
        },
        {
            "title":"Stary i pies",
            "src":"images/stary_i_pies.jpg",
            "upvotes":29,
            "downvotes":1,
            "tags": ['dogs','animals','family','polish'],
            "imgID": 31
        },
        {
            "title":"Healthy diet",
            "src":"images/gbbo1.webp",
            "upvotes":47,
            "downvotes":32,
            "tags": ['food','great british bake off','gbbo'],
            "imgID": 32
        },
        {
            "title":"Hard day",
            "src":"images/gbbo2.png",
            "upvotes":65,
            "downvotes":12,
            "tags": ['great british bake off','gbbo'],
            "imgID": 33
        },
        {
            "title":"Acaster breakdown",
            "src":"images/gbbo3.jpg",
            "upvotes":43,
            "downvotes":32,
            "tags": ['great british bake off','gbbo'],
            "imgID": 34
        }
    ],
    tags: ['art','books','lotr','movies','food','european movies', 'hp','harry potter','musical','cats','philosophy','polish','dune','cute','animals','cartoon','family','marriage','Gordon Ramsay','italian','dogs','great british bake off','gbbo'],
    currentTag: ""
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
        case "CHANGE_CURR_TAG": {
            return {...state, currentTag: action.payload};
        }
        default:
            return state;
    }
};

