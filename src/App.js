import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomePage,
  HotOnes,
  TagList,
  TagPage,
  AddNewMeme,
  Favourites,
} from "./pages";
import { Box, CssBaseline } from "@mui/material";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/hot" element={<HotOnes />}></Route>
          <Route path="/tags" element={<TagList />}></Route>
          <Route path="/favourites" element={<Favourites />}></Route>
          <Route path="/currenttag" element={<TagPage />}></Route>
          <Route path="/addnew" element={<AddNewMeme />}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
