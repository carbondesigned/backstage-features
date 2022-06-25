import Image from "next/image";
import { useMutation, useQueryClient } from "react-query";
import api from "axiosStore";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useAppContext } from "contexts/AppContext";
import { IAuthor } from "types/author";
import { useAuthors } from "hooks/useGetAuthors";
import Input from "components/FormInput";
import UploadCoverInput from "./UploadCoverInput";
import { useRouter } from "next/router";

export const EditPostModal = () => {
  const router = useRouter();
  const { data: authors, isLoading, error } = useAuthors();
  const { currentPost } = useAppContext();
  const queryClient = useQueryClient();

  const editPostValidation = z.object({
    title: z.string().nullable(),
    excerpt: z.string().nullable(),
    body: z.string().nullable(),
    author: z.string().nullable(),
    tags: z.string().nullable(),
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editPostValidation),
    defaultValues: {
      title: currentPost.title,
      excerpt: currentPost.excerpt,
      body: currentPost.body,
      author: currentPost.author,
      tags: currentPost.tags[0],
      cover: null,
    },
  });

  // resets values when trying to edit multiple posts (when currentPost changes)
  React.useEffect(() => {
    let defaultValues = {
      title: currentPost.title,
      excerpt: currentPost.excerpt,
      body: currentPost.body,
      tags: currentPost.tags[0],
      cover: null,
    };
    reset(defaultValues);
  }, [reset, currentPost]);

  const editPost = useMutation(
    (data: any) => {
      const inputFile = document.getElementById("image") as HTMLInputElement;
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("excerpt", data.excerpt);
      formData.append("body", data.body);
      formData.append("tags", data.tags.split(","));
      formData.append("cover", inputFile.files?.item(0) as File);
      return api.put(`/posts/${currentPost.slug}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
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

  const onSubmit = handleSubmit((data: any) => {
    editPost.mutate(data);
  });

  return (
    <>
      <input type="checkbox" className="modal-toggle" id="editPostModal" />
      <div className="modal">
        <div className="modal-box p-6 lg:p-24 w-2/4 max-w-6xl bg-base-300 text-base-100 relative">
          <label
            htmlFor="editPostModal"
            className="btn btn-circle absolute right-2 top-2"
          >
            x
          </label>
          <h3 className="text-4xl font-bold">Edit Post</h3>
          <div className="relative h-52 w-full overflow-hidden rounded-2xl my-2">
            <Image
              src={currentPost.cover}
              alt={currentPost.title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <form onSubmit={onSubmit} className="mt-6">
            <Controller
              control={control}
              name="cover"
              render={({ field }) => (
                <UploadCoverInput
                  {...field}
                  label="Cover"
                  name="cover"
                  error={errors?.cover?.message}
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
                  type="text"
                  placeholder="Title"
                  error={errors?.title?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="excerpt"
              render={({ field }) => (
                <Input
                  {...field}
                  label="Excerpt"
                  name="excerpt"
                  type="text"
                  placeholder="Excerpt"
                  error={errors?.excerpt?.message}
                />
              )}
            />
            <div className="flex flex-col">
              {errors.author && (
                <p className="text-error">{errors.author.message}</p>
              )}
              <label htmlFor="author" className="text-neutral-content">
                Post&apos;s Author
              </label>
              <select
                {...register("author")}
                className="select bg-base-200 w-full max-w-xs"
                name="author"
                defaultValue="def"
              >
                <option value="def" disabled>
                  Pick Author
                </option>
                {authors?.map((author: IAuthor) => (
                  <option key={author.ID} value={author.name}>
                    {author.name}
                  </option>
                ))}
              </select>
            </div>
            <Controller
              control={control}
              name="tags"
              render={({ field }) => (
                <Input
                  {...field}
                  label="Tags"
                  name="tags"
                  type="text"
                  placeholder="Tags"
                  error={errors?.tags?.message}
                />
              )}
            />
            <div className="flex flex-col">
              {errors.body && (
                <p className="text-error">{errors.body.message}</p>
              )}
              <label htmlFor="body" className="text-neutral-content">
                Post&apos;s Body
              </label>
              <textarea
                {...register("body")}
                name="body"
                className="textarea text-lg font-medium bg-base-200"
                rows={10}
              />
            </div>
            <div className="modal-action">
              <button type="submit" className="btn btn-primary btn-md">
                Edit Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
