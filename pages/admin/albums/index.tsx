import Album from "components/Dashboard/Album";
import PageHeader from "components/Dashboard/PageHeader";
import DashboardLayout from "components/Layouts/DashbardNav";
import Loading from "components/Loading";
import { useAlbums } from "hooks/useAlbums";
import { NextPage } from "next";
import { IAlbum } from "types/album";

const Albums: NextPage = () => {
    const {data: albums, isLoading, error} = useAlbums()
  return (
    <div className="min-h-screen bg-neutral flex gap-12">
      <DashboardLayout>
        <PageHeader title="Albums" url="/admin/albums/create" btnTitle="Create" />

        {isLoading && <Loading />}
        {error && <p className="text-error">Error: {error.message}</p>}
        {!isLoading && albums && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {albums.map((album: IAlbum) => (
              <Album album={album} key={album.ID} />
            ))}
          </div>
        )}
      </DashboardLayout>
    </div>
  );
};

export default Albums;
