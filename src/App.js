import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { HomePage, HotOnes,TagList,TagPage } from './pages';
import { Drawer, Box, ListItem, List, ListItemButton, ListItemText, CssBaseline, Typography } from '@mui/material';
import Lottie from 'lottie-react';
import catAnimation from '../src/lotties/catrocket.json'


function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    window.scrollTo(0, 0)
  };

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
              <ListItemButton component={NavLink} value="/tags" to={"/tags"}
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}>
                  <ListItemText primary="TAGS" sx={{color:'primary.main'}}/>
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
        <Route path="/currenttag" element={<TagPage/>}></Route>
      </Routes>
    </Box>
    </BrowserRouter>
  );
}

export default App;