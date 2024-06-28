import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { PageBase } from "../components/PageBase";
import { MemePage } from "../components/MemePage";

export function TagPage() {
  const currentTag = useSelector((state) => state.currentTag);

  return (
    <PageBase>
      <Typography
        variant="h3"
        sx={{ marginTop: 4, color: "primary.main", fontSize: 40 }}
      >
        #{currentTag.toUpperCase()}
      </Typography>
      <MemePage page="tagPage" />
    </PageBase>
  );
}
