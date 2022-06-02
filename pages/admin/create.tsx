import DashboardLayout from "components/Layouts/DashbardNav";
import FieldInput from "components/FormInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import api from "axiosStore";
import { useRouter } from "next/router";
import Input from "components/FormInput";
import { useState } from "react";
const CreatePostPage = () => {
  const [tags, setTags] = useState([""]);
  const router = useRouter();
  const createPostValidation = z.object({
    title: z.string().nullable(),
    excerpt: z.string().nullable(),
    body: z.string().nullable(),
    tags: z.string().nullable(),
  });
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createPostValidation),
    defaultValues: {
      cover: "",
      title: "",
      excerpt: "",
      tags: "",
      body: "",
    },
  });

  const queryClient = useQueryClient();
  const createPost = useMutation(
    (data: any) => {
      const inputFile = document.getElementById("cover") as HTMLInputElement;
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("excerpt", data.excerpt);
      formData.append("body", data.body);
      formData.append("tags", data.tags.split(','));
      formData.append("cover", inputFile.files?.item(0) as File);
      return api.post(`/posts/create`, formData, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
        router.push("/admin/dashboard");
        reset();
      },
    }
  );
  errors?.tags && console.log(errors.tags);
  const onSubmit = handleSubmit((data: any) => {
    createPost.mutate(data);
    
  });
  return (
    <div className="bg-neutral w-full min-h-screen text-base-100">
      <DashboardLayout>
        <div className="mb-12">
          <h1 className="text-4xl font-bold">Create</h1>
        </div>
        <div>
          <form onSubmit={onSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              {errors.cover && <div>{errors.cover.message}</div>}
              <label htmlFor="cover" className="text-xl text-neutral-content">
                Cover
              </label>
              <input
                id="cover"
                {...register("cover")}
                type="file"
                name="cover"
                className="input input-md bg-base-200"
              />
            </div>
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
              name="excerpt"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  error={errors?.excerpt?.message}
                  label="Excerpt"
                  name="excerpt"
                  placeholder="Excerpt"
                  type="text"
                />
              )}
            />
            <Controller
              name="tags"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Tags"
                  name="tags"
                  placeholder="Tags"
                  type="text"
                />
              )}
            />
            {/* TODO: work with Marked to handle markdown  */}
            <div className="flex flex-col gap-2">
              {errors.body && <div>{errors.body.message}</div>}
              <label htmlFor="body" className="text-xl text-neutral-content">
                Body
              </label>
              <textarea
                {...register("body")}
                name="body"
                className="textarea bg-base-200"
                rows={10}
              />
            </div>
            <div className="flex justify-end">
              <button className="btn btn-primary btn-lg" type="submit">
                Create
              </button>
            </div>
          </form>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default CreatePostPage;
