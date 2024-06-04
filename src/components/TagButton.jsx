import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export function TagButton({tagname}){

    const dispatch = useDispatch();
    const changeCurrentTag = () => {
        dispatch({type: 'CHANGE_CURR_TAG', payload: tagname});
    };

    const navigate = useNavigate();
    const goToTagPage = () => {
        navigate("/currenttag");
        window.scrollTo(0, 0)
    }

    return (
            <Button onClick={() => {changeCurrentTag(); goToTagPage()}} variant="outlined" sx={{margin: 0.5}}>#{tagname}</Button>
    )

}