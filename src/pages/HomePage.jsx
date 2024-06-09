import { useSelector } from "react-redux";
import { MemeComp } from "../components/MemeComp";
import { Box } from "@mui/material";
import { PageBase } from "../components/PageBase";


export function HomePage() {
    const images = useSelector(state => state.images);
    
      return(
        <Box sx={{
          width: '100vw',
          display: 'flex',
          alignItems: 'flex-start'
        }}>
          <PageBase>
            {images.sort((a,b) => Date.parse(b.importDate) - Date.parse(a.importDate)).map((img) => (
            <MemeComp 
            key={img.imgID}
            src={img.src}
            title={img.title}
            upvotes={img.upvotes}
            downvotes={img.downvotes}
            imgID={img.imgID}
            tags={img.tags}
            date={img.importDate}
            favourite={img.favourite}
            />))}
          </PageBase>
        </Box>
      )
}