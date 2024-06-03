import { useDispatch } from "react-redux"
import { TagButton } from "./TagButton";
import { ButtonGroup, Button, Box, Divider } from "@mui/material";
import { ThumbUp, ThumbDown} from "@mui/icons-material";


export function MemeComp(props){

    const dispatch = useDispatch();
    const addUpvote = () => {
        dispatch({type: 'ADD_UPVOTE', payload: props.imgID})
    };
    const addDownvote = () => {
        dispatch({type: 'ADD_DOWNVOTE', payload: props.imgID})
    };
    const boxWidth = 800;

    return (
        <Box sx={{
            width: boxWidth,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            my: 5 
            }}>
            <Box component='img' 
                sx={{
                width: boxWidth,
                mx: 'auto',
                // border: 0.5,
                // borderColor: 'grey.300',
                borderRadius: 3,
                boxShadow: 2
                }}
                src={props.src}
                alt={props.title} />
            <ButtonGroup variant="contained">
            <Button onClick={addUpvote} sx={{backgroundColor: 'secondary.main'}}><ThumbUp/>{props.upvotes}</Button>
            <Button onClick={addDownvote}>{props.downvotes}<ThumbDown/></Button>
            </ButtonGroup>
            <Divider />
            <Box>{props.tags.map((item) => <TagButton tagname={item} key={item}/>)}</Box>
        </Box>
    )
}