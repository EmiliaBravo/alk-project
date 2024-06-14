import {initialMemes} from "../initialMemes";
const initState = {
  images: initialMemes,
  tagsArray: [
    "art",
    "books",
    "lotr",
    "movies",
    "food",
    "european movies",
    "hp",
    "harry potter",
    "musical",
    "cats",
    "philosophy",
    "polish",
    "dune",
    "cute",
    "animals",
    "cartoon",
    "family",
    "marriage",
    "gordon ramsay",
    "italian",
    "dogs",
    "great british bake off",
    "gbbo",
    "rpdr",
    "rupauls drag race",
  ],
  currentTag: "",
  selectedIndex: 0,
};

export const memeReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_UPVOTE": {
      return {
        ...state,
        images: state.images.map((img) =>
          img.imgID === action.payload
            ? { ...img, upvotes: img.upvotes + 1 }
            : img
        ),
      };
    }
    case "ADD_DOWNVOTE": {
      return {
        ...state,
        images: state.images.map((img) =>
          img.imgID === action.payload
            ? { ...img, downvotes: img.downvotes + 1 }
            : img
        ),
      };
    }
    case "CHANGE_FAVOURITE_STATUS": {
      return {
        ...state,
        images: state.images.map((img) =>
          img.imgID === action.payload
            ? img.favourite === "true"
              ? { ...img, favourite: "false" }
              : { ...img, favourite: "true" }
            : img
        ),
      };
    }
    case "CHANGE_CURR_TAG": {
      return { ...state, currentTag: action.payload };
    }
    case "CHANGE_SELECTED_TAB": {
      return { ...state, selectedIndex: action.payload };
    }
    case "SUBMIT_MEME": {
      const newID = Math.max(...state.images.map((a) => a.imgID)) + 1;
      const tagsSliced = action.payload.tags.slice(0, 5);
      const tagsForTags = tagsSliced.filter(
        (i) => !state.tagsArray.includes(i)
      );
      const newMeme = {
        title: action.payload.title,
        src: action.payload.src,
        upvotes: 0,
        downvotes: 0,
        tags: tagsSliced,
        imgID: newID,
        importDate: new Date().toString(),
        favourite: "false",
      };
      return {
        ...state,
        images: [...state.images, newMeme],
        tagsArray: [...state.tagsArray, ...tagsForTags],
        selectedIndex: 0,
      };
    }
    default:
      return state;
  }
};
