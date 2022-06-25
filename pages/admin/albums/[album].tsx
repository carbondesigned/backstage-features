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
          <PageHeader title={data.title} />
          {/* the image grid */}
          <div className="grid lg:grid-cols-3">
            {/* the album image "slot" component */}
            <div className="h-52 bg-base-200 rounded-xl grid place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 fill-neutral-content"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </DashboardLayout>
      )}
    </div>
  );
};

export default AlbumPage;
