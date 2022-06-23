import { zodResolver } from "@hookform/resolvers/zod";
import Input from "components/FormInput";
import { Controller, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { z } from "zod";
import api from 'axiosStore'
import UploadCoverInput from "./UploadCoverInput";

const UploadImageModal = () => {
  const queryClient = useQueryClient()
  const uploadImageValidation = z.object({
    alt: z.string(),
  });
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(uploadImageValidation),
  });
  const uploadImage = useMutation(
    (data: any) => {
      const inputFile = document.getElementById("image") as HTMLInputElement;
      const formData = new FormData();
      formData.append("alt", data.alt);
      formData.append("image", inputFile.files?.item(0) as File);
      return api.post(`/images/create`, formData, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("images");
        reset();
      },
    }
  );

  const onSubmit = handleSubmit((data: any) => {
    uploadImage.mutate(data);
  });
  return (
    <>
      <input type="checkbox" className="modal-toggle" id="uploadImageModal" />
      <div className="modal">
        <div className="modal-box p-6 lg:p-24 w-2/4 max-w-3xl bg-base-300 text-base-100 relative">
          <label
            htmlFor="uploadImageModal"
            className="btn btn-circle absolute right-2 top-2"
          >
            x
          </label>
          <h3 className="text-4xl font-bold">Upload Image</h3>
          <form className="mt-6 gap-6 flex flex-col" onSubmit={onSubmit}>
            <Controller
              control={control}
              name="image"
              render={({ field }) => (
                <UploadCoverInput
                  {...register("image")}
                  {...field} name="image" label="Image" error={errors?.image?.message} />
              )}
            />
            <Controller
              control={control}
              name="alt"
              render={({ field }) => (
                <Input
                  {...field}
                  {...register("alt")}
                  label="Image Description"
                  name="alt"
                  error={errors?.alt?.message}
                  placeholder="Image Description"
                  type="text"
                />
              )}
            />
            <div className="flex flex-row-reverse w-full">
              <button type="submit" className="btn bg-primary border-0 btn-md">Upload</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UploadImageModal;
