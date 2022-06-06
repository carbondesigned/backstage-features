import { useQuery } from "react-query";
import api from "axiosStore";
import { IImage } from "types/images";

const fetchImages = async () => {
  const { data } = await api.get("/images");
  if (data.success) {
    return data.data;
  }
  return data;
};

const useImages = () => {
  return useQuery<IImage[], Error>("images", fetchImages);
};

export { useImages, fetchImages };
