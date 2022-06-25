import Loading from "components/Loading";
import { useImages } from "hooks/useGetImages";
import ImageGrid from "./ImageGrid";
type Props = {
  close: () => void;
};
const ImagePopup = (props: Props) => {
  const {
    data: images,
    isLoading: isImagesLoading,
    error: imageError,
  } = useImages();
  return (
    <div className="w-full bg-base-200 h-[50vh] overflow-y-scroll absolute bottom-0 z-50 p-12 image-popup">
      <div className="w-full flex items-center justify-between pb-12">
        <h3 className="text-2xl font-bold">Image Gallery</h3>
        <button onClick={props.close} className="btn-circle bg-neutral z-50">
          X
        </button>
      </div>
      {isImagesLoading && <Loading />}
      {!isImagesLoading && images && <ImageGrid images={images} />}
    </div>
  );
};

export default ImagePopup;
