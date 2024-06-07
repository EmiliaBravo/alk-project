import { Autocomplete, Box, TextField, Typography, Chip, Button } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";


export function AddNewMeme() {
    const tagsArray = useSelector(state => state.tagsArray);
    const [userUrl, setUserUrl] = useState("");
    const [userTitle, setUserTitle] = useState("");
    const [userTags, setUserTags] = useState([]);
    const [urlError, setUrlError] = useState(false)

    const onUrlChange = (e) => {
        setUserUrl(e.target.value);
        if (e.target.validity.valid) {
          setUrlError(false);
        } else {
          setUrlError(true);
        }
    };
    const onTitleChange = (e) => {
        setUserTitle(e.target.value);
    };
    const onTagsChange = (e, inputV) => {
        setUserTags(inputV);
    };

    const dispatch = useDispatch();
    const submitNewMeme = () => {
      if (userUrl.length > 0) {
      dispatch({type: "SUBMIT_MEME", payload: {src: userUrl, title: userTitle, tags: userTags}})
      }
      else setUrlError(true)
    }

    return(
        <Box sx={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <TextField label="Add URL" onChange={onUrlChange} required error={urlError} helperText={urlError ? "URL can't be empty" : ''}/>
            <TextField label="Add title" onChange={onTitleChange}/>
            <Typography variant="h6">You can add max. 5 tags:</Typography>
            <Autocomplete
                value={userTags}
                onChange={onTagsChange}
                multiple
                freeSolo
                options={tagsArray.sort()}
                filterSelectedOptions
                renderTags={(value, getTagProps) =>
                    value.map((option, index) => {
                      const { key, ...tagProps } = getTagProps({ index });
                      return (
                        <Chip variant="outlined" label={option} key={key} {...tagProps} />
                      );
                    })
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Add tags"
                    />
                  )}
                />
            <Button onClick={submitNewMeme}>SUBMIT</Button>
        </Box>
    )
}