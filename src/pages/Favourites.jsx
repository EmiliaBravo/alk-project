import { useSelector } from "react-redux";
import { MemeComp } from "../components/MemeComp";
import { Box, Typography } from "@mui/material";
import { PageBase } from "../components/PageBase";


export function Favourites() {
    const images = useSelector(state => state.images);
    if (images.filter((i) => i.favourite === 'true').length > 0) {
      return(
        <Box sx={{
          width: '100vw',
          display: 'flex',
          alignItems: 'flex-start'
        }}>
          <PageBase>
            {images.filter((i) => i.favourite === 'true').sort((a,b) => Date.parse(b.importDate) - Date.parse(a.importDate)).map((img) => (
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
    else {
        return(
            <Box sx={{
              width: '100vw',
              display: 'flex',
              alignItems: 'flex-start'
            }}>
              <PageBase marginTop={6}>
              <Typography variant="h3" sx={{marginBottom: 3, color:'primary.main', fontSize: 34}}>NO FAVOURITES YET</Typography>
              </PageBase>
            </Box>
          )
    }
}