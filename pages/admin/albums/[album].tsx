import PageHeader from "components/Dashboard/PageHeader";
import DashboardLayout from "components/Layouts/DashbardNav";
import Loading from "components/Loading";
import { useGetAlbum } from "hooks/useGetAlbum";
import { NextPage } from "next";
import { useClientRouter } from "use-client-router";

const AlbumPage: NextPage = () => {
  const router = useClientRouter();
  const { album } = router.query;

  // get album from slug
  const { data, error, isLoading } = useGetAlbum(album as string);
  return (
    <div className="min-h-screen bg-neutral flex gap-12">
      {error && <div className="text-error">{error.message}</div>}
      {isLoading && <Loading />}
      {!isLoading && data && (
        <DashboardLayout>
          <PageHeader title={data.title } />
        </DashboardLayout>
      )}
    </div>
  );
};

export default AlbumPage;
