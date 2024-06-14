import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { PageBase } from "../components/PageBase";
import { MemePage } from "../components/MemePage";

export function Favourites() {
  const images = useSelector((state) => state.images);
  if (images.filter((i) => i.favourite === "true").length > 0) {
    return <MemePage page="favourites" />;
  } else {
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
            NO FAVOURITES YET
          </Typography>
        </PageBase>
      </Box>
    );
  }
}
