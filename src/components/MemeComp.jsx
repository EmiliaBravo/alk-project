import { useDispatch } from "react-redux"

export function MemeComp(props){

    const dispatch = useDispatch();
    const addUpvote = () => {
        dispatch({type: 'ADD_UPVOTE', payload: props.imgID})
    };
    const addDownvote = () => {
        dispatch({type: 'ADD_DOWNVOTE', payload: props.imgID})
    };

    return (
        <div>
            <img src={props.src} alt={props.title} />
            <br></br>
            <p>Upvotes: {props.upvotes}</p>
            <p>Downvotes: {props.downvotes}</p>
            <button onClick={addUpvote}>Upvote</button>
            <button onClick={addDownvote}>Downvote</button>
        </div>
    )
}