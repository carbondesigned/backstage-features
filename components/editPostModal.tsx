import Image from "next/image";
import { useMutation, useQueryClient } from "react-query";
import { IPost } from "types/posts";
import api from "axiosStore";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useAppContext } from "contexts/AppContext";

const EditPostModal = () => {
    const { currentPost } = useAppContext();
    const queryClient = useQueryClient();
    
    const editPostValidation = z.object({
        title: z.string().nullable(),
        excerpt: z.string().nullable(),
        body: z.string().nullable(),
        tags: z.string().nullable(),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(editPostValidation),
        defaultValues: {
            title: currentPost.title,
            excerpt: currentPost.excerpt,
            body: currentPost.body,
            tags: currentPost.tags[0],
            cover: null,
        },
    });

    // resets values when trying to edit multiple posts (when currentPost changes)
    React.useEffect(() => {
        let defaultValues =  {
            title: currentPost.title,
            excerpt: currentPost.excerpt,
            body: currentPost.body,
            tags: currentPost.tags[0],
            cover: null,
        }
        reset(defaultValues)
    }, [reset, currentPost])

    const editPost = useMutation(
        (data: any) => {
            const inputFile = document.getElementById(
                "cover"
            ) as HTMLInputElement;
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
                reset();
            },
        }
    );

    const onSubmit = handleSubmit((data: any) => {
        editPost.mutate(data);
    });

    return (
        <>
            <input
                type="checkbox"
                className="modal-toggle"
                id="editPostModal"
            />
            <div className="modal">
                <div className="modal-box p-6 lg:p-24 w-2/4 max-w-3xl bg-base-300 text-base-100 relative">
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
                    {/* TODO: create form component (resusability to even create new post) */}
                    <form onSubmit={onSubmit} className="mt-6">
                        {/* TODO: Create input component w/errors, label, styling, etc. */}
                        <div className="flex flex-col">
                            {errors.cover && (
                                <p className="text-error">
                                    {errors.cover.message}
                                </p>
                            )}
                            <label
                                htmlFor="cover"
                                className="text-neutral-content"
                            >
                                Post&apos;s Cover
                            </label>
                            <input
                                {...register("cover")}
                                name="cover"
                                id="cover"
                                type="file"
                                className="input flex items-center bg-base-200 input-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            {errors.title && (
                                <p className="text-error">
                                    {errors.title.message}
                                </p>
                            )}
                            <label
                                htmlFor="title"
                                className="text-neutral-content"
                            >
                                Post&apos;s Title
                            </label>
                            <input
                                {...register("title")}
                                name="title"
                                className="input bg-base-200 input-md"
                            />
                        </div>

                        <div className="flex flex-col">
                            {errors.excerpt && (
                                <p className="text-error">
                                    {errors.excerpt.message}
                                </p>
                            )}
                            <label
                                htmlFor="excerpt"
                                className="text-neutral-content"
                            >
                                Post&apos;s Excerpt
                            </label>
                            <input
                                {...register("excerpt")}
                                name="excerpt"
                                className="input bg-base-200 input-md"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="tags"
                                className="text-neutral-content"
                            >
                                Post&apos;s Tags
                            </label>
                            <input
                                {...register("tags")}
                                name="tags"
                                className="input bg-base-200 input-md"
                            />
                        </div>

                        <div className="flex flex-col">
                            {errors.body && (
                                <p className="text-error">
                                    {errors.body.message}
                                </p>
                            )}
                            <label
                                htmlFor="body"
                                className="text-neutral-content"
                            >
                                Post&apos;s Body
                            </label>
                            <textarea
                                {...register("body")}
                                name="body"
                                className="textarea bg-base-200"
                                rows={10}
                            />
                        </div>
                        <div className="modal-action">
                            <button
                                type="submit"
                                className="btn btn-primary btn-md"
                            >
                                Edit Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditPostModal;
