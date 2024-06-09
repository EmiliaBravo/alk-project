import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { HomePage, HotOnes,TagList,TagPage, AddNewMeme, Favourites } from './pages';
import { Drawer, Box, ListItem, List, ListItemButton, ListItemText, CssBaseline, Typography } from '@mui/material';
import Lottie from 'lottie-react';
import catAnimation from '../src/lotties/catrocket.json'
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const selectedIndex = useSelector(state => state.selectedIndex);
  const dispatch = useDispatch();

  const handleListItemClick = (event, index) => {
    dispatch({type: "CHANGE_SELECTED_TAB", payload: index});
    window.scrollTo(0, 0)
  }

  return (
    <BrowserRouter>
    <CssBaseline/>
    <Box sx={{display: 'flex'}}>
      <Drawer sx={{width: 200, '& .MuiDrawer-paper': {display: 'flex', justifyContent: 'space-between', width: 200, boxSizing: 'border-box'}}} 
        variant='permanent' 
        anchor='left'>
        <Box sx={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'}}>
          <Lottie animationData={catAnimation} />
          <List>
          <ListItem>
              <ListItemButton component={NavLink} value="/" to={"/"} 
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}>
                  <ListItemText primary="HOMEPAGE" sx={{color:'primary.main'}}/>
              </ListItemButton>
          </ListItem>
          <ListItem>
              <ListItemButton component={NavLink} value="/hot" to={"/hot"}
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}>
                  <ListItemText primary="HOT" sx={{color:'primary.main'}}/>
              </ListItemButton>
          </ListItem>
          <ListItem>
              <ListItemButton component={NavLink} value="/favourites" to={"/favourites"}
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}>
                  <ListItemText primary="FAVOURITES" sx={{color:'primary.main'}}/>
              </ListItemButton>
          </ListItem>
          <ListItem>
              <ListItemButton component={NavLink} value="/tags" to={"/tags"}
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}>
                  <ListItemText primary="TAGS" sx={{color:'primary.main'}}/>
              </ListItemButton>
          </ListItem>
          <ListItem>
              <ListItemButton component={NavLink} value="/addnew" to={"/addnew"}
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}>
                  <ListItemText primary="ADD NEW MEME" sx={{color:'primary.main'}}/>
              </ListItemButton>
          </ListItem>
          </List>
        </Box>
        <Typography variant='caption' sx={{color:'primary.main'}}>Copyright&copy; by Emilia Bravo</Typography>
      </Drawer>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/hot" element={<HotOnes/>}></Route>
        <Route path="/tags" element={<TagList/>}></Route>
        <Route path="/favourites" element={<Favourites/>}></Route>
        <Route path="/currenttag" element={<TagPage/>}></Route>
        <Route path="/addnew" element={<AddNewMeme/>}></Route>
      </Routes>
    </Box>
    </BrowserRouter>
  );
}

export default App;