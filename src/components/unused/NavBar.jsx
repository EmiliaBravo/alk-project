import { List, Drawer } from "@mui/material";
import { NavButton } from "./NavButton";
import { NavLink } from "react-router-dom";

export function NavBar() {
  <Drawer
    sx={{
      width: 150,
      flexShrink: 0,
      "& .MuiDrawer-paper": { width: 150, boxSizing: "border-box" },
    }}
    variant="permanent"
    anchor="left"
  >
    <List>
      <NavButton component={NavLink} text="HOMEPAGE" link="/" />
      <NavButton component={NavLink} text="HOT" link="/hot" />
      <NavButton component={NavLink} text="TAGS" link="/tags" />
    </List>
  </Drawer>;
}
