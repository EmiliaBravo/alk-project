import { useSelector } from "react-redux";
import { MemeComp } from "../components/MemeComp";
import { Box, Typography } from "@mui/material";


export function TagPage() {
    const images = useSelector(state => state.images);
    const currentTag = useSelector(state => state.currentTag);
    
      return(
        <Box sx={{
          width: '100vw',
          display: 'flex',
          alignItems: 'flex-start'
        }}>
          <Box sx={{
            maxWidth: 900,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Typography variant="h3" sx={{marginTop: 4}}>#{currentTag}</Typography>
            {images.filter((a) => a.tags.includes(currentTag)).map((img) => (
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