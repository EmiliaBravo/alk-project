import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";

export function TagButton({tagname}){

    const dispatch = useDispatch();
    const changeCurrentTag = () => {
        dispatch({type: 'CHANGE_CURR_TAG', payload: tagname});
    };

    const navigate = useNavigate();
    const goToTagPage = () => {
        navigate("/currenttag")
    }

    return (
        <div>
            <button onClick={() => {changeCurrentTag(); goToTagPage()}}>#{tagname}</button>
        </div>
    )

}