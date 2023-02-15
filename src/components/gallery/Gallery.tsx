import React, { useRef, useCallback, useState } from "react";
import {
  Grid,
  styled,
  Paper,
  CircularProgress,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import moment from "moment";
import { GalleryItems } from "./GalleryItems";
import { usePictures } from "../../hooks";

const StyledPaper = styled(Paper)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  //   backgroundColor: theme.palette.mode === "light" ? "#E7EBF0" : "#1A2027",
  flex: 1,
});

export const Gallery = () => {
  const [page, setPage] = useState(1);
  const [time, setTime] = useState(moment().format());
  const [pictures, hasMorePictures, isLoading, error] = usePictures(page, time);

  const handleTimeChange = (value: string | null) => {
    if (value) {
      setTime(value);
      setPage(1);
    }
  };

  const observer = useRef<IntersectionObserver>();

  const lastImageRef = useCallback(
    (elem: Element) => {
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        // Get the next page if we can see the last element on the screen
        if (entries[0].isIntersecting && hasMorePictures) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (elem) observer.current.observe(elem);
    },
    [isLoading, hasMorePictures]
  );

  return (
    <StyledPaper>
      <DesktopDatePicker
        onChange={handleTimeChange}
        value={time}
        renderInput={(params) => <TextField {...params} />}
      />
      {error ? (
        <Box>
          <Typography variant="h3">{error}</Typography>
        </Box>
      ) : (
        <>
          <Grid
            container
            justifyContent="center"
            mt={5}
            columnSpacing={5}
            rowSpacing={2}
            width="90%"
          >
            <GalleryItems lastImageRef={lastImageRef} pictures={pictures} />
          </Grid>
          {isLoading && (
            <Box display="flex" justifyContent="center" mt={2}>
              <CircularProgress />
            </Box>
          )}
        </>
      )}
    </StyledPaper>
  );
};
