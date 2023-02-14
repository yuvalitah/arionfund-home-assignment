import React from "react";
import { Grid, Box, useMediaQuery } from "@mui/material";
import { Image } from "../../hooks";

interface IGalleryItemsProps {
  pictures: Image[];
  lastImageRef: (elem: any) => void;
}

// The url that the api return is with different sizes for each image and this function make all the images on the same size
const getImageUrlWithoutSizes = (url: string): string => {
  let idStartIndex = url.indexOf("id/") + 3; // add 3 to exclude the 'id/' part
  let idEndIndex = url.indexOf("/", idStartIndex);

  return `${url.substring(0, idEndIndex)}/300/200`;
};

export const GalleryItems = ({
  pictures,
  lastImageRef,
}: IGalleryItemsProps) => {
  const isBigScreen = useMediaQuery("(min-width: 2000px)");

  return (
    <>
      {pictures.map(({ id, url }, index) => (
        <Grid key={id} item xs={12} md={6} lg={4} xl={3}>
          {pictures.length === index + 1 ? (
            <Box display="flex" justifyContent="center" ref={lastImageRef}>
              <img
                style={{
                  display: "flex",
                  flex: isBigScreen ? 1 : 0,
                }}
                src={getImageUrlWithoutSizes(url)}
                alt="gallery item"
              />
            </Box>
          ) : (
            <Box display="flex" justifyContent="center">
              <img
                style={{
                  display: "flex",
                  flex: isBigScreen ? 1 : 0,
                }}
                src={getImageUrlWithoutSizes(url)}
                alt="gallery item"
              />
            </Box>
          )}
        </Grid>
      ))}
    </>
  );
};
