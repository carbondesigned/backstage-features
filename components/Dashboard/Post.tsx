import Image from "next/image";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { IPost } from "types/posts";
import api from "axiosStore";
import EditPostModal from "components/EditPostModal";
import { useAppContext } from "contexts/AppContext";

type Props = {
  post: IPost;
};

const Post = ({ post }: Props) => {
  const { setCurrentPost } = useAppContext();
  const queryClient = useQueryClient();
  const deletePost = useMutation(
    (slug: string) => {
      return api.delete(`/posts/${slug}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    }
  );
  return (
    <>
      <div className="bg-base-300 card text-base-100 rounded-xl">
        {post.cover && (
          <figure className="w-full h-52 relative">
            <Image
              src={post.cover}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </figure>
        )}
        <div className="card-body">
          <div className="flex justify-between">
            <h4 className="text-2xl font-bold w-3/4">{post.title}</h4>
            <div className="dropdown dropdown-top dropdown-end">
              <label tabIndex={0} className="cursor-pointer">
                <svg
                  onClick={() => setCurrentPost(post)}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-neutral-content"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-200 rounded-lg shadow-lg overflow-hidden"
              >
                <label htmlFor="editPostModal" className="modal-bottom">
                  <li>
                    <a>Edit</a>
                  </li>
                </label>
                <li
                  onClick={() => deletePost.mutate(post.slug)}
                  className="bg-error"
                >
                  <a>Delete</a>
                </li>
              </ul>
            </div>
          </div>
          <p>{post?.excerpt}</p>
        </div>
      </div>
    </>
  );
};

export default Post;
