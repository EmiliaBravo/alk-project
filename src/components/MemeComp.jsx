import { useDispatch } from "react-redux"
import { TagButton } from "./TagButton";
import { ButtonGroup, Button } from "@mui/material";
import { ThumbUp, ThumbDown} from "@mui/icons-material";

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
            <ButtonGroup variant="contained">
            <Button onClick={addUpvote}><ThumbUp/>{props.upvotes}</Button>
            <Button onClick={addDownvote}>{props.downvotes}<ThumbDown/></Button>
            </ButtonGroup>
            <div>{props.tags.map((item) => <TagButton tagname={item} key={item}/>)}</div>
        </div>
    )
}