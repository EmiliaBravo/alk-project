import { Autocomplete, Box, TextField, Typography, Chip, Button } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PageBase } from "../components/PageBase";
import { useNavigate } from "react-router-dom";


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
    const navigate = useNavigate();
    const goToHomePage = () => {
      if (userUrl.length > 0) {
        navigate("/");
        window.scrollTo(0, 0)
      }
    }

    // It breakes the text field functionality --> why?
    // const StyledTextField = styled(TextField)(({theme}) => ({
    //   width: '500px',
    //   marginBottom: 20,
    //   "& .MuiOutlinedInput-root": {
    //     "& .MuiOutlinedInput-notchedOutline": {
    //       borderColor: theme.palette.primary.light
    //     },
    //     "&. Mui-focused": {
    //         "& .MuiOutlinedInput-notchedOutline": {
    //           borderColor: theme.palette.primary.main,
    //           borderWidth: "2px",
    //         }},
    //     "&:hover": {
    //       "& .MuiOutlinedInput-notchedOutline": {
    //           borderColor: theme.palette.primary.main,
    //           borderWidth: "2px",
    //         }}
    //   },
    //   "& .MuiInputLabel-outlined": {
    //       color: theme.palette.primary.main
    //     },
    // }))
      

    return(
        <Box sx={{
          width: '100vw',
          display: 'flex',
          alignItems: 'flex-start'
        }}>
          <PageBase marginTop={6}>
            <Typography variant='h5' sx={{fontSize: 34, color: 'primary.main', marginBottom: 3}}>HERE YOU CAN ADD YOUR MEME</Typography>
            <TextField
              label="Add URL"
              onChange={onUrlChange}
              required error={urlError}
              helperText={urlError ? "URL can't be empty" : ''}
              sx={{
                width: '500px',
                marginBottom: '10px',
                "& .MuiOutlinedInput-root": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: 'primary.light'
                  },
                  "&.Mui-focused": {
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: 'primary.main',
                        borderWidth: "2px",
                      }},
                  "&:hover": {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: 'primary.main',
                        borderWidth: "2px",
                      }}
                },
                "& .MuiInputLabel-outlined": {
                    color: 'primary.main'
                  },
              }}
              />
            <TextField
              label="Add title"
              onChange={onTitleChange}
              sx={{
                width: '500px',
                marginBottom: '10px',
                "& .MuiOutlinedInput-root": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: 'primary.light'
                  },
                  "&.Mui-focused": {
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: 'primary.main',
                        borderWidth: "2px",
                      }},
                  "&:hover": {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: 'primary.main',
                        borderWidth: "2px",
                      }}
                },
                "& .MuiInputLabel-outlined": {
                    color: 'primary.main'
                  },
              }}
              />
            <Typography sx={{color: 'primary.main', marginBottom: 1}}>You can add max. 5 tags (type or choose from the list)</Typography>
            <Autocomplete
                value={userTags}
                onChange={onTagsChange}
                multiple
                freeSolo
                options={tagsArray.sort()}
                filterSelectedOptions
                limitTags={5}
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
                sx={{
                  width: '500px',
                  marginBottom: '20px',
                  "& .MuiOutlinedInput-root": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: 'primary.light'
                    },
                    "&.Mui-focused": {
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: 'primary.main',
                          borderWidth: "2px",
                        }},
                    "&:hover": {
                      "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: 'primary.main',
                          borderWidth: "2px",
                        }}
                  },
                  "& .MuiInputLabel-outlined": {
                      color: 'primary.main'
                    },
                }}
              />
            <Button onClick={() => {submitNewMeme(); goToHomePage()}} variant='contained' sx={{margin: 0.5, boxShadow: 1, width:'300px'}}>SUBMIT</Button>
          </PageBase>
        </Box>
    )
}