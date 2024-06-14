import { useDispatch } from "react-redux";
import { TagButton } from "./TagButton";
import { ButtonGroup, Button, Box, IconButton } from "@mui/material";
import {
  ThumbUp,
  ThumbDown,
  StarBorderRounded,
  StarRateRounded,
} from "@mui/icons-material";

export function MemeComp(props) {
  const dispatch = useDispatch();
  const addUpvote = () => {
    dispatch({ type: "ADD_UPVOTE", payload: props.imgID });
  };
  const addDownvote = () => {
    dispatch({ type: "ADD_DOWNVOTE", payload: props.imgID });
  };

  const changeFavouriteStatus = () => {
    dispatch({ type: "CHANGE_FAVOURITE_STATUS", payload: props.imgID });
  };
  const boxWidth = 560;

  return (
    <Box
      sx={{
        width: boxWidth + 35,
        display: "flex",
        flexDirection: "row",
        my: 5,
      }}
    >
      <Box
        sx={{
          width: boxWidth,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            width: boxWidth,
            mx: "auto",
            marginBottom: 0.5,
            borderRadius: 1,
            boxShadow: 1,
          }}
          src={props.src}
          alt={props.title}
        />
        <ButtonGroup sx={{ boxShadow: 1 }}>
          <Button
            onClick={addUpvote}
            variant="outlined"
            sx={{
              width: boxWidth / 2,
              height: 60,
              fontSize: 24,
              color: "success.light",
              borderColor: "success.light",
              "&:hover": {
                backgroundColor: "rgba(76,175,80,0.1)",
                borderColor: "success.light",
              },
            }}
          >
            <ThumbUp sx={{ fontSize: 28, marginRight: 2 }} />
            {props.upvotes}
          </Button>
          <Button
            onClick={addDownvote}
            variant="outlined"
            sx={{
              width: boxWidth / 2,
              height: 60,
              fontSize: 24,
              color: "error.main",
              borderColor: "error.main",
              "&:hover": {
                backgroundColor: "rgba(211,47,47,0.1)",
                borderColor: "error.main",
              },
            }}
          >
            {props.downvotes}
            <ThumbDown sx={{ fontSize: 28, marginLeft: 2 }} />
          </Button>
        </ButtonGroup>
        <Box>
          {props.tags.sort().map((item) => (
            <TagButton tagname={item} key={item} />
          ))}
        </Box>
      </Box>
      <IconButton
        onClick={changeFavouriteStatus}
        sx={{ height: 35, padding: 0, borderRadius: 1, color: "#ffca28" }}
      >
        {props.favourite === "true" ? (
          <StarRateRounded fontSize="large" />
        ) : (
          <StarBorderRounded fontSize="large" />
        )}
      </IconButton>
    </Box>
  );
}
