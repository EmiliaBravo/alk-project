import { ListItem, ListItemButton, ListItemText} from "@mui/material"
import { NavLink } from "react-router-dom"
export function NavButton(props){
    <ListItem>
        <ListItemButton component={NavLink} value={props.link} to={props.link}>
            <ListItemText primary={props.text}/>
        </ListItemButton>
    </ListItem>
}