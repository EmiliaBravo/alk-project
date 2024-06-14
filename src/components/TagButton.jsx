import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export function TagButton({ tagname }) {
  const dispatch = useDispatch();
  const changeCurrentTag = () => {
    dispatch({ type: "CHANGE_CURR_TAG", payload: tagname });
  };
  const changeSelectedTab = () => {
    dispatch({ type: "CHANGE_SELECTED_TAB", payload: 3 });
  };

  const navigate = useNavigate();
  const goToTagPage = () => {
    navigate("/currenttag");
    window.scrollTo(0, 0);
  };

  return (
    <Button
      onClick={() => {
        changeCurrentTag();
        goToTagPage();
        changeSelectedTab();
      }}
      variant="outlined"
      sx={{ margin: 0.5, boxShadow: 1 }}
    >
      #{tagname}
    </Button>
  );
}
