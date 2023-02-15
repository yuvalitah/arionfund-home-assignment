import { useEffect, useState } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

interface ApiImageObj {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export interface Image {
  id: string;
  url: string;
}

const BASE_API = "https://picsum.photos/v2/list";

export const usePictures = (
  page: number,
  time: string
): [Image[], boolean, boolean, string] => {
  const [pictures, setPictures] = useState<Image[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const hasMorePictures = page <= 34;

  const fetchPictures = async (page: number) => {
    try {
      setIsLoading(true);

      const { data }: AxiosResponse<ApiImageObj[]> = await axios.get(BASE_API, {
        params: { page },
      });

      setPictures((prevPictures) => {
        const picturesIds = data.map((picture) => picture.id);

        // This is because we don't want Strict Mode in React to fetch the same data and insert it to the state
        if (
          prevPictures.length > 0 &&
          !prevPictures.some((picture) => picturesIds.includes(picture.id))
        ) {
          return [
            ...prevPictures,
            ...data.map((picture) => ({
              id: picture.id,
              url: picture.download_url,
            })),
          ];
        } else {
          return data.map((picture) => ({
            id: picture.id,
            url: picture.download_url,
          }));
        }
      });

      setIsLoading(false);
    } catch (err) {
      if (err instanceof AxiosError) setError(err.message);
    }
  };

  useEffect(() => {
    if (hasMorePictures) fetchPictures(page);
  }, [page, hasMorePictures, time]);

  return [pictures, hasMorePictures, isLoading, error];
};
