import Image from "next/image";
import React from "react";
import { useAppContext } from "contexts/AppContext";
import { IAlbum } from "types/album";
import { useDeleteAlbum } from "hooks/useDeleteAlbum";
import Link from "next/link";

type Props = {
  album: IAlbum;
};

const Album = ({ album }: Props) => {
  const { setCurrentAlbum } = useAppContext();
  const { mutate: deletePost } = useDeleteAlbum();

  return (
    <div className="bg-base-300 card text-base-100 rounded-xl">
      {album.cover && (
        <Link href={`/admin/albums/${album.slug}`}>
          <a>
            <figure className="w-full h-52 relative">
              <Image
                src={album.cover}
                alt={album.title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </figure>
          </a>
        </Link>
      )}
      <div className="card-body">
        <div className="flex justify-between mt-2">
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-bold w-3/4">{album.title}</h4>
          </div>
          <div className="dropdown dropdown-top dropdown-end">
            <label tabIndex={0} className="cursor-pointer">
              <svg
                onClick={() => setCurrentAlbum(album)}
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
              <li onClick={() => deletePost(album.slug)} className="bg-error">
                <a>Delete</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-neutral-content">{album?.description}</p>
      </div>
    </div>
  );
};

export default Album;
