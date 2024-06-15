import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export function NavButton(props) {
  const selectedIndex = useSelector((state) => state.selectedIndex);
  const dispatch = useDispatch();

  const handleListItemClick = (event, index) => {
    dispatch({ type: "CHANGE_SELECTED_TAB", payload: index });
    window.scrollTo(0, 0);
  };

  return (
    <ListItem>
      <ListItemButton
        component={NavLink}
        value={props.link}
        to={props.link}
        selected={selectedIndex === props.index}
        onClick={(event) => handleListItemClick(event, props.index)}
      >
        <ListItemText primary={props.text} sx={{ color: "primary.main" }} />
      </ListItemButton>
    </ListItem>
  );
}
