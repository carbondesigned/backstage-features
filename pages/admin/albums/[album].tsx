import AlbumSlot from "components/Dashboard/AlbumSlot";
import PageHeader from "components/Dashboard/PageHeader";
import DashboardLayout from "components/Layouts/DashbardNav";
import Loading from "components/Loading";
import { useGetAlbum } from "hooks/useGetAlbum";
import { NextPage } from "next";
import { useMutation, useQueryClient } from "react-query";
import { useClientRouter } from "use-client-router";
import api from "axiosStore";
import { useForm } from "react-hook-form";
import AlbumImage from "components/Dashboard/AlbumImage";

const AlbumPage: NextPage = () => {
  const queryClient = useQueryClient();
  const router = useClientRouter();
  const { album: albumSlug } = router.query;

  const { handleSubmit, reset } = useForm();

  const uploadToAlbum = useMutation(
    () => {
      const inputFile = document.getElementById("image") as HTMLInputElement;
      const formData = new FormData();
      formData.append("image", inputFile.files?.item(0) as File);
      return api.post(`/albums/${albumSlug}/upload`, formData, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("albums");
        queryClient.invalidateQueries("album");
        reset();
      },
    }
  );

  const onSubmit = handleSubmit((data: any) => {
    uploadToAlbum.mutate(data);
  });

  const { data: album, error, isLoading } = useGetAlbum(albumSlug as string);

  return (
    <div className="min-h-screen bg-neutral flex gap-12">
      {error && <div className="text-error">{error.message}</div>}
      {isLoading && <Loading />}
      {!isLoading && album && (
        <DashboardLayout>
          <PageHeader title={album.title} />
          <div className="grid lg:grid-cols-3 gap-6">
            <AlbumSlot onSubmit={() => onSubmit()} name="albumImage" />
            {album.images.map((image: string, idx: number) => (
              <AlbumImage key={idx} image={image} alt={album.title} />
            ))}
          </div>
        </DashboardLayout>
      )}
    </div>
  );
};

export default AlbumPage;
