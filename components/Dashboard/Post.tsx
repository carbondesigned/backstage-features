import Image from 'next/image';
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { IPost } from 'types/posts';
import api from 'axiosStore';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
type Props = {
  post: IPost;
};

const Post = ({ post }: Props) => {
  const [tags, setTags] = React.useState<string[]>(['']);
  const editPostValidation = z.object({
    title: z.string().nullable(),
    excerpt: z.string().nullable(),
    body: z.string().nullable(),
    tags: z.string().array().nullable(),
  });
  const queryClient = useQueryClient();
  const deletePost = useMutation(
    (slug: string) => {
      return api.delete(`/posts/${slug}`, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('posts');
      },
    }
  );
  const editPost = useMutation(
    (data: any) => {
      const inputFile = document.getElementById('cover') as HTMLInputElement;
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('excerpt', data.excerpt);
      formData.append('body', data.body);
      // // formData.append("tags", data.tags);
      formData.append('cover', inputFile.files?.item(0) as File);
      return api.put(`/posts/${post.slug}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `${localStorage.getItem('token')}`,
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('posts');
      },
    }
  );

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editPostValidation),
    defaultValues: {
      title: post.title,
      excerpt: post.excerpt,
      body: post.body,
      tags: post.tags,
      // set cover to a file object
      cover: null,
    },
  });
  const onSubmit = handleSubmit((data: any) => {
    editPost.mutate(data);
    // reset();
  });
  return (
    <>
      <input type='checkbox' className='modal-toggle' id='editPostModal' />
      <div className='modal'>
        <div className='modal-box p-6 lg:p-24 w-2/4 max-w-3xl bg-base-300 text-base-100 relative'>
          <label
            htmlFor='editPostModal'
            className='btn btn-circle absolute right-2 top-2'
          >
            x
          </label>
          <h3 className='text-4xl font-bold'>Edit Post</h3>
          <div className='relative h-52 w-full overflow-hidden rounded-2xl my-2'>
            <Image
              src={post.cover}
              alt={post.title}
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
          <form onSubmit={onSubmit} className='mt-6'>
            <div className='flex flex-col'>
              {errors.cover && (
                <p className='text-error'>{errors.cover.message}</p>
              )}
              <label htmlFor='cover' className='text-neutral-content'>
                Post&apos;s Cover
              </label>
              <input
                // onChange={(e) => setCover(e.target.value)}
                // value={cover}
                {...register('cover')}
                name='cover'
                id='cover'
                type='file'
                className='input flex items-center bg-base-200 input-md'
              />
            </div>
            <div className='flex flex-col'>
              {errors.title && (
                <p className='text-error'>{errors.title.message}</p>
              )}
              <label htmlFor='title' className='text-neutral-content'>
                Post&apos;s Title
              </label>
              <input
                {...register('title')}
                name='title'
                className='input bg-base-200 input-md'
              />
            </div>

            <div className='flex flex-col'>
              {errors.excerpt && (
                <p className='text-error'>{errors.excerpt.message}</p>
              )}
              <label htmlFor='excerpt' className='text-neutral-content'>
                Post&apos;s Excerpt
              </label>
              <input
                {...register('excerpt')}
                name='excerpt'
                className='input bg-base-200 input-md'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='tags' className='text-neutral-content'>
                Post&apos;s Tags
              </label>
              <input
                onChange={(e) => setTags([...tags, e.target.value])}
                value={tags}
                name='tags'
                className='input bg-base-200 input-md'
              />
            </div>

            <div className='flex flex-col'>
              {errors.body && (
                <p className='text-error'>{errors.body.message}</p>
              )}
              <label htmlFor='body' className='text-neutral-content'>
                Post&apos;s Body
              </label>
              <textarea
                {...register('body')}
                name='body'
                className='textarea bg-base-200'
                rows={10}
              />
            </div>
            <div className='modal-action'>
              <button type='submit' className='btn btn-primary btn-md'>
                Edit Post
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='bg-base-300 card text-base-100 rounded-xl'>
        {post.cover && (
          <figure className='w-full h-52 relative'>
            <Image
              src={post.cover}
              alt={post.title}
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </figure>
        )}
        <div className='card-body'>
          <div className='flex justify-between'>
            <h4 className='text-2xl font-bold w-3/4'>{post.title}</h4>
            <div className='dropdown dropdown-top dropdown-end'>
              <label tabIndex={0} className='cursor-pointer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 stroke-neutral-content'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className='dropdown-content menu bg-base-200 rounded-lg shadow-lg overflow-hidden'
              >
                <label htmlFor='editPostModal' className='modal-bottom'>
                  <li>
                    <a>Edit</a>
                  </li>
                </label>
                <li
                  onClick={() => deletePost.mutate(post.slug)}
                  className='bg-error'
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
