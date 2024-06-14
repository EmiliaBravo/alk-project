import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { PageBase } from "../components/PageBase";
import { MemePage } from "../components/MemePage";

export function TagPage() {
  const currentTag = useSelector((state) => state.currentTag);

  return (
    <Box>
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <PageBase>
          <Typography
            variant="h3"
            sx={{ marginTop: 4, color: "primary.main", fontSize: 40 }}
          >
            #{currentTag.toUpperCase()}
          </Typography>
        </PageBase>
      </Box>
      <MemePage page="tagPage" />
    </Box>
  );
}
