import React, { useRef, useCallback, useState } from "react";
import {
  Grid,
  styled,
  Paper,
  CircularProgress,
  Box,
  Typography,
} from "@mui/material";
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
  const [pictures, hasMorePictures, isLoading, error] = usePictures(page);

  const observer = useRef<IntersectionObserver>();

  const lastImageRef = useCallback(
    (elem: any) => {
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
