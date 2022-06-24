import PageHeader from "components/Dashboard/PageHeader";
import DashboardLayout from "components/Layouts/DashbardNav";
import { NextPage } from "next";

const Albums: NextPage = () => {
  return (
    <div className="min-h-screen bg-neutral flex gap-12">
      <DashboardLayout>
        <PageHeader title="Albums" url="/admin/albums/create" btnTitle="Create" />
      </DashboardLayout>
    </div>
  );
};

export default Albums;
