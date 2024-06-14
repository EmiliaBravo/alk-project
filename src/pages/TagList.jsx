import { useSelector } from "react-redux";
import { TagButton } from "../components/TagButton";
import { Box, Typography } from "@mui/material";
import { PageBase } from "../components/PageBase";

export function TagList() {
  const tagsArray = useSelector((state) => state.tagsArray);

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <PageBase marginTop={6}>
        <Typography
          variant="h3"
          sx={{ marginBottom: 3, color: "primary.main", fontSize: 34 }}
        >
          SELECT A TAG:
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: 700,
          }}
        >
          {tagsArray.sort().map((item) => (
            <TagButton tagname={item} key={item} />
          ))}
        </Box>
      </PageBase>
    </Box>
  );
}
