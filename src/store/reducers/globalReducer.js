const initState = {
    images: [
        {
            "title":"",
            "src":"images/book1.jpg",
            "upvotes":23,
            "downvotes":15,
            "tags": ['books'],
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
            "tags": ['books'],
            "imgID": 2
        },
        {
            "title":"",
            "src":"images/cat.jpg",
            "upvotes":191,
            "downvotes":58,
            "tags": [],
            "imgID": 3
        },
        {
            "title":"",
            "src":"images/cat2.jpg",
            "upvotes":214,
            "downvotes":67,
            "tags": [],
            "imgID": 4
        },
        {
            "title":"",
            "src":"images/cat3.jpg",
            "upvotes":123,
            "downvotes":98,
            "tags": [],
            "imgID": 5
        },
        {
            "title":"",
            "src":"images/cat4.jpg",
            "upvotes":32,
            "downvotes":58,
            "tags": [],
            "imgID": 6
        },
        {
            "title":"",
            "src":"images/cat5.jpg",
            "upvotes":12,
            "downvotes":5,
            "tags": [],
            "imgID": 7
        },
        {
            "title":"",
            "src":"images/cat6.jpg",
            "upvotes":21,
            "downvotes":20,
            "tags": [],
            "imgID": 8
        },
        {
            "title":"",
            "src":"images/Diuna_opole.jpg",
            "upvotes":54,
            "downvotes":57,
            "tags": [],
            "imgID": 9
        },
        {
            "title":"",
            "src":"images/dogville.jpg",
            "upvotes":15,
            "downvotes":7,
            "tags": [],
            "imgID": 10
        },
        {
            "title":"",
            "src":"images/dune2.jpeg",
            "upvotes":89,
            "downvotes":19,
            "tags": [],
            "imgID": 11
        },
        {
            "title":"",
            "src":"images/dune3.jpeg",
            "upvotes":290,
            "downvotes":134,
            "tags": [],
            "imgID": 12
        },
        {
            "title":"",
            "src":"images/filmoznawca.jpg",
            "upvotes":431,
            "downvotes":101,
            "tags": [],
            "imgID": 13
        },
        {
            "title":"",
            "src":"images/goodfellas.jpg",
            "upvotes":157,
            "downvotes":21,
            "tags": [],
            "imgID": 14
        },
        {
            "title":"",
            "src":"images/hot_doh.jpg",
            "upvotes":67,
            "downvotes":32,
            "tags": ['food'],
            "imgID": 15
        },
        {
            "title":"",
            "src":"images/hp.png",
            "upvotes":90,
            "downvotes":87,
            "tags": ['books'],
            "imgID": 16
        },
        {
            "title":"",
            "src":"images/hp2.png",
            "upvotes":321,
            "downvotes":97,
            "tags": ['books'],
            "imgID": 17
        },
        {
            "title":"",
            "src":"images/hp3.png",
            "upvotes":421,
            "downvotes":57,
            "tags": ['books'],
            "imgID": 18
        },
        {
            "title":"",
            "src":"images/hp4.jpg",
            "upvotes":171,
            "downvotes":84,
            "tags": ['books'],
            "imgID": 19
        },
        {
            "title":"",
            "src":"images/hp5.png",
            "upvotes":79,
            "downvotes":43,
            "tags": ['books'],
            "imgID": 20
        },
        {
            "title":"",
            "src":"images/hp6.png",
            "upvotes":287,
            "downvotes":94,
            "tags": ['books'],
            "imgID": 21
        },
        {
            "title":"",
            "src":"images/lotr1.png",
            "upvotes":49,
            "downvotes":57,
            "tags": ['books','lotr','movies'],
            "imgID": 22
        },
        {
            "title":"",
            "src":"images/lotr2.png",
            "upvotes":89,
            "downvotes":121,
            "tags": ['books','lotr','movies'],
            "imgID": 23
        },
        {
            "title":"",
            "src":"images/lotr3.png",
            "upvotes":35,
            "downvotes":12,
            "tags": ['books','lotr','movies'],
            "imgID": 24
        },
        {
            "title":"",
            "src":"images/musical.jpg",
            "upvotes":111,
            "downvotes":54,
            "tags": [],
            "imgID": 25
        },
        {
            "title":"",
            "src":"images/oppenheimer.jpg",
            "upvotes":69,
            "downvotes":35,
            "tags": [],
            "imgID": 26
        },
        {
            "title":"",
            "src":"images/radzieccy_rez.jpg",
            "upvotes":34,
            "downvotes":56,
            "tags": [],
            "imgID": 27
        },
        {
            "title":"",
            "src":"images/shrinking_man.jpg",
            "upvotes":12,
            "downvotes":11,
            "tags": [],
            "imgID": 28
        }
    ],
    tags: ['books','lotr','movies','food'],
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

