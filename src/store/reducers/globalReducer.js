const initState = {
    images: [
        {
            "title":"XEuropean Cat",
            "src":"cat1.jpg",
            "upvotes":1,
            "downvotes":3,
            "imgID": 0
        },
        {
            "title":"Ginger Cat",
            "src":"cat2.jpg",
            "upvotes":30,
            "downvotes":5,
            "imgID": 1
        },
        {
            "title":"AAA Grumpy Cat",
            "src":"cat3.webp",
            "upvotes":105,
            "downvotes":101,
            "imgID": 2
        }
    ]
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
        default:
            return state;
    }
};

