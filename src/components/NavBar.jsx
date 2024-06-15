import { List, Drawer, Typography, Box } from "@mui/material";
import { NavButton } from "./NavButton";
import { NavLink } from "react-router-dom";
import Lottie from "lottie-react";
import catAnimation from "../lotties/catrocket.json";

export function NavBar() {
  return (
    <Drawer
      sx={{
        width: 200,
        "& .MuiDrawer-paper": {
          display: "flex",
          justifyContent: "space-between",
          width: 200,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        <Lottie animationData={catAnimation} />
        <List>
          <NavButton component={NavLink} text="HOMEPAGE" link="/" index={0} />
          <NavButton component={NavLink} text="HOT" link="/hot" index={1} />
          <NavButton
            component={NavLink}
            text="FAVOURITES"
            link="/favourites"
            index={2}
          />
          <NavButton component={NavLink} text="TAGS" link="/tags" index={3} />
          <NavButton
            component={NavLink}
            text="ADD NEW MEME"
            link="/addnew"
            index={4}
          />
        </List>
      </Box>
      <Typography variant="caption" sx={{ color: "primary.main" }}>
        Copyright&copy; by Emilia Bravo
      </Typography>
    </Drawer>
  );
}
