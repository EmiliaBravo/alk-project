import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { useState } from 'react';
// import './App.css';
import { HomePage, HotOnes,TagList,TagPage } from './pages';
import { Drawer, Box, ListItem, List, ListItemButton, ListItemText } from '@mui/material';


function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <BrowserRouter>
    <Box sx={{display: 'flex'}}>
    <Drawer sx={{width: 150, flexShrink: 0, '& .MuiDrawer-paper': {width: 150, boxSizing: 'border-box'}}} 
      variant='permanent' 
      anchor='left'>
    <List>
    <ListItem>
        <ListItemButton component={NavLink} value="/" to={"/"} 
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}>
            <ListItemText primary="HOMEPAGE"/>
        </ListItemButton>
    </ListItem>
    <ListItem>
        <ListItemButton component={NavLink} value="/hot" to={"/hot"}
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}>
            <ListItemText primary="HOT"/>
        </ListItemButton>
    </ListItem>
    <ListItem>
        <ListItemButton component={NavLink} value="/tags" to={"/tags"}
        selected={selectedIndex === 2}
        onClick={(event) => handleListItemClick(event, 2)}>
            <ListItemText primary="TAGS"/>
        </ListItemButton>
    </ListItem>
    </List>
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