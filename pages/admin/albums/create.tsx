import { zodResolver } from "@hookform/resolvers/zod";
import PageHeader from "components/Dashboard/PageHeader";
import UploadCoverInput from "components/Dashboard/UploadCoverInput";
import DashboardLayout from "components/Layouts/DashbardNav";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { z } from "zod";
import api from "axiosStore";
import Input from "components/FormInput";

const CreateAlbumPage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const CreateAlbumValidation = z.object({
    title: z.string().nullable(),
    description: z.string().nullable(),
  });
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CreateAlbumValidation),
  });
  const createAlbum = useMutation(
    (data: any) => {
      const inputFile = document.getElementById("image") as HTMLInputElement;
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("cover", inputFile.files?.item(0) as File);
      return api.post(`/albums/create`, formData, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("albums");
        router.push("/admin/albums");
        reset();
      },
    }
  );

  const onSubmit = handleSubmit((data: any) => {
    createAlbum.mutate(data);
  });
  return (
    <div className="min-h-screen bg-neutral flex gap-12">
      <DashboardLayout>
        <PageHeader title="Create Album" />
        <div>
          <form onSubmit={onSubmit} className="flex flex-col gap-6">
            <Controller
              control={control}
              name="cover"
              render={({ field }) => (
                <UploadCoverInput
                  {...field}
                  error={errors.cover?.message}
                  label="Cover"
                  name="cover"
                />
              )}
            />
            <Controller
              control={control}
              name="title"
              render={({ field }) => (
                <Input
                  {...field}
                  label="Title"
                  name="title"
                  error={errors?.title?.message}
                  placeholder="title"
                  type="text"
                />
              )}
            />
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  error={errors?.description?.message}
                  label="Description"
                  name="description"
                  placeholder="Description"
                  type="text"
                />
              )}
            />
            <div className="flex flex-row-reverse gap-4">
              <button className="btn btn-primary btn-lg" type="submit">
                Create
              </button>
              <button
                onClick={() => {
                  router.push("/admin/dashboard");
                  localStorage.removeItem("body");
                }}
                className="btn bg-base-200 btn-lg"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default CreateAlbumPage;
