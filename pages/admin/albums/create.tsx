import PageHeader from "components/Dashboard/PageHeader"
import DashboardLayout from "components/Layouts/DashbardNav"

const CreateAlbumPage = () => {
    return (
        <div className="min-h-screen bg-neutral flex gap-12">
            <DashboardLayout>
                <PageHeader title="Create Album" />
            </DashboardLayout>
        </div>
    )
}

export default CreateAlbumPage
