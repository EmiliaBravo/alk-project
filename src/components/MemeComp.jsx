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
    const boxWidth = 600;

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
                marginBottom: 0.3,
                borderRadius: 1,
                boxShadow: 1
                }}
                src={props.src}
                alt={props.title} />
            <ButtonGroup>
            <Button onClick={addUpvote} variant="outlined" sx={{width: boxWidth/2, height:60, fontSize: 24}}><ThumbUp sx={{fontSize: 28, marginRight: 2}}/>{props.upvotes}</Button>
            <Button onClick={addDownvote} variant="outlined" sx={{width: boxWidth/2, height:60, fontSize: 24}}>{props.downvotes}<ThumbDown sx={{fontSize: 28, marginLeft: 2}}/></Button>
            </ButtonGroup>
            <Divider />
            <Box>{props.tags.sort().map((item) => <TagButton tagname={item} key={item}/>)}</Box>
        </Box>
    )
}