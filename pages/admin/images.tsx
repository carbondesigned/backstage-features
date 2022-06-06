import DashboardLayout from "components/Layouts/DashbardNav";
import Loading from "components/Loading";
import { useImages } from "hooks/useGetImages";
import { NextPage } from "next";
import Image from "next/image";

const ImagesPage: NextPage = () => {
  const { data: images, isLoading, error } = useImages();
  return (
    <div className="bg-neutral w-full min-h-screen text-base-100">
      <DashboardLayout>
        {error && <p>{error.message}</p>}
        {isLoading && <Loading />}
        {!isLoading && images && (
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {images.map((image) => (
              <div
                data-tip="Copy Image URL"
                key={image.ID}
                className="tooltip tooltip-bottom cursor-pointer"
              >
                <div
                  className="relative w-full h-64 rounded-xl overflow-hidden duration-200 hover:scale-105"
                  onClick={() => navigator.clipboard.writeText(image.imageURL)}
                >
                  <Image
                    src={image.imageURL}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </DashboardLayout>
    </div>
  );
};

export default ImagesPage;
