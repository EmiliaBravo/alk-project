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
                maxWidth: 900,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 5
            }}>
                <Typography variant="h3" sx={{marginBottom: 3}}>Select a tag:</Typography>
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