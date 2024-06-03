import { useSelector } from "react-redux";
import { MemeComp } from "../components/MemeComp";
import { Box } from "@mui/material";


export function HotOnes() {
    const images = useSelector(state => state.images);
    
      return(
        <Box sx={{
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'}}>
        {images.filter((a) => (a.upvotes-a.downvotes)>5).map((img) => (
          <MemeComp 
          key={img.imgID}
          src={img.src}
          title={img.title}
          upvotes={img.upvotes}
          downvotes={img.downvotes}
          imgID={img.imgID}
          tags={img.tags}/>))}
        </Box>
      )
}