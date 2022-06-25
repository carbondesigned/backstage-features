import DashboardLayout from 'components/Layouts/DashbardNav';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import api from 'axiosStore';
import { useRouter } from 'next/router';
import Input from 'components/FormInput';
import { useAuthors } from 'hooks/useGetAuthors';
import { IAuthor } from 'types/author';
import React from 'react';
import { MarkdownComponent } from 'utils/Markdown';
import { PreviewToggle } from 'components/Dashboard/PreviewToggle';
import ImagePopup from 'components/Dashboard/ImagePopup';
import UploadCoverInput from 'components/Dashboard/UploadCoverInput';

const CreatePostPage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data: authors, isLoading, error } = useAuthors();
  const [preview, setPreview] = React.useState<boolean>(false);
  const [showImagePopup, setShowImagePopup] = React.useState<boolean>(false);
  const [body, setBody] = React.useState<string>('');

  React.useEffect(() => {
    // if there is already body in localstorage, set to state
    const bodyFromLocalStorage = localStorage.getItem('body');
    if (bodyFromLocalStorage) {
      setBody(bodyFromLocalStorage);
    }
  }, []);

  const createPostValidation = z.object({
    title: z.string().nullable(),
    excerpt: z.string().nullable(),
    body: z.string().nullable(),
    tags: z.string().nullable(),
    author: z.string(),
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
      cover: '',
      title: '',
      excerpt: '',
      author: 'def',
      tags: '',
      body: '',
    },
  });

  const createPost = useMutation(
    (data: any) => {
      const inputFile = document.getElementById('image') as HTMLInputElement;
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('excerpt', data.excerpt);
      formData.append('body', data.body);
      formData.append('tags', data.tags.split(','));
      formData.append('author', data.author);
      formData.append('cover', inputFile.files?.item(0) as File);
      return api.post(`/posts/create`, formData, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('posts');
        router.push('/admin/dashboard');
        reset();
      },
    }
  );

  const onSubmit = handleSubmit((data: any) => {
    createPost.mutate(data);
  });

  return (
    <div className='bg-neutral w-full min-h-screen text-base-100 relative'>
      {showImagePopup && <ImagePopup close={() => setShowImagePopup(false)} />}
      <DashboardLayout>
        <div className='mb-12'>
          <h1 className='text-4xl font-bold'>Create</h1>
        </div>
        <div>
          <form onSubmit={onSubmit} className='flex flex-col gap-6'>
            <Controller
              control={control}
              name='cover'
              render={({ field }) => (
                <UploadCoverInput
                  {...field}
                  error={errors.cover?.message}
                  label='Cover'
                  name='cover'
                />
              )}
            />
            <Controller
              control={control}
              name='title'
              render={({ field }) => (
                <Input
                  {...field}
                  label='Title'
                  name='title'
                  error={errors?.title?.message}
                  placeholder='title'
                  type='text'
                />
              )}
            />
            <Controller
              name='excerpt'
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  error={errors?.excerpt?.message}
                  label='Excerpt'
                  name='excerpt'
                  placeholder='Excerpt'
                  type='text'
                />
              )}
            />
            <div className='flex w-full gap-6'>
              <div className='flex flex-col gap-2'>
                <label
                  className='text-xl text-neutral-content'
                  htmlFor='author'
                >
                  Author
                </label>
                <select
                  {...register('author')}
                  className='select bg-base-200 w-full max-w-xs'
                  name='author'
                  defaultValue='def'
                >
                  <option value='def' disabled>
                    Pick Author
                  </option>
                  {isLoading && <option value='def'>Loading...</option>}
                  {!isLoading &&
                    authors?.map((author: IAuthor) => (
                      <option key={author.ID} value={author.name}>
                        {author.name}
                      </option>
                    ))}
                </select>
              </div>
              <Controller
                name='tags'
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    label='Tags'
                    name='tags'
                    placeholder='Tags'
                    type='text'
                  />
                )}
              />
            </div>
            <PreviewToggle
              onClick={() => setPreview(!preview)}
              preview={preview}
            />
            {!preview ? (
              <>
                <div>
                  <button
                    className='btn btn-sm bg-base-200'
                    onClick={() => setShowImagePopup(true)}
                  >
                    Image
                  </button>
                </div>
                <div className='flex flex-col gap-2'>
                  {errors.body && <div>{errors.body.message}</div>}
                  <label
                    htmlFor='body'
                    className='text-xl text-neutral-content'
                  >
                    Body
                  </label>
                  <textarea
                    {...register('body')}
                    onChange={(e) => {
                      setBody(e.target.value);
                      localStorage.setItem('body', body);
                    }}
                    value={body}
                    name='body'
                    className='textarea min-h-[35em] bg-base-200'
                  />
                </div>
              </>
            ) : (
              <div>
                <MarkdownComponent>{body}</MarkdownComponent>
              </div>
            )}
            {!preview && (
              <div className='flex flex-row-reverse gap-4'>
                <button className='btn btn-primary btn-lg' type='submit'>
                  Create
                </button>
                <button
                  onClick={() => {
                    router.push('/admin/dashboard');
                    localStorage.removeItem('body');
                  }}
                  className='btn bg-base-200 btn-lg'
                >
                  Cancel
                </button>
              </div>
            )}
          </form>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default CreatePostPage;
