import { useSelector } from "react-redux";
import { MemeComp } from "../components/MemeComp";
import { Box } from "@mui/material";


export function HomePage() {
    const images = useSelector(state => state.images);
    
      return(
        <Box sx={{
          width: '100vw',
          display: 'flex',
          alignItems: 'flex-start'
        }}>
          <Box sx={{
            maxWidth: 1000,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {images.sort((a,b) => b.upvotes - a.upvotes).map((img) => (
            <MemeComp 
            key={img.imgID}
            src={img.src}
            title={img.title}
            upvotes={img.upvotes}
            downvotes={img.downvotes}
            imgID={img.imgID}
            tags={img.tags}/>))}
          </Box>
        </Box>
      )
}