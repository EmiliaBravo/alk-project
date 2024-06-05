import { useSelector } from "react-redux";
import { TagButton } from "../components/TagButton";
import { Box, Typography } from "@mui/material";

export function TagList () {
    const tags = useSelector(state => state.tags);

    return (
        <Box sx={{
            width: '100vw',
            display: 'flex',
            alignItems: 'flex-start',
        }}>
            <Box sx={{
                maxWidth: 1000,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 6
            }}>
                <Typography variant="h3" sx={{marginBottom: 3, color:'primary.main', fontSize: 40}}>SELECT A TAG:</Typography>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: 700,
                }}>
                {tags.sort().map((item) => <TagButton tagname={item} key={item}/>)}
                </Box>
            </Box>
        </Box> 
    )

}