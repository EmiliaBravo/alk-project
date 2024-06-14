import { useSelector } from "react-redux";
import { MemeComp } from "../components/MemeComp";
import { Box } from "@mui/material";
import { PageBase } from "../components/PageBase";

export function MemePage(props) {
  const images = useSelector((state) => state.images);
  const currentTag = useSelector((state) => state.currentTag);

  const pageFunction = (arr) => {
    if (props.page === "regular") {
      return arr.sort(
        (a, b) => Date.parse(b.importDate) - Date.parse(a.importDate)
      );
    } else if (props.page === "hot") {
      return arr
        .filter((a) => a.upvotes - a.downvotes > 5)
        .sort((a, b) => b.upvotes - a.upvotes);
    } else if (props.page === "favourites") {
      return arr
        .filter((i) => i.favourite === "true")
        .sort((a, b) => Date.parse(b.importDate) - Date.parse(a.importDate));
    } else if (props.page === "tagPage") {
      return arr.filter((a) => a.tags.includes(currentTag));
    }
  };
  const sortedImages = pageFunction(images);

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <PageBase>
        {sortedImages.map((img) => (
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
          />
        ))}
      </PageBase>
    </Box>
  );
}
