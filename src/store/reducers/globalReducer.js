const initState = {
    images: [
        {
            "title":"XEuropean Cat",
            "src":"images/cat1.jpg",
            "upvotes":1,
            "downvotes":3,
            "tags": ['cat','grey'],
            "imgID": 0
        },
        {
            "title":"Ginger Cat",
            "src":"images/cat2.jpg",
            "upvotes":30,
            "downvotes":5,
            "tags": ['cat','redhead','ginger'],
            "imgID": 1
        },
        {
            "title":"AAA Grumpy Cat",
            "src":"images/cat3.webp",
            "upvotes":105,
            "downvotes":101,
            "tags": ['cat','angry'],
            "imgID": 2
        }
    ],
    tags: ['cat','ginger','redhead','angry','grey'],
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

