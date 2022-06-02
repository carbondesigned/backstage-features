import Post from "components/Dashboard/Post";
import useGetToken from "hooks/useGetToken";
import { usePosts } from "hooks/usePosts";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import Link from "next/link";
import DashboardLayout from "components/Layouts/DashbardNav";
import { IPost } from "types/posts";
import { useAppContext } from "contexts/AppContext";
import EditPostModal from "components/EditPostModal";

interface Token {
  email: string;
  exp: number;
  id: number;
}

const Dashboard = () => {
  const router = useRouter();
  const token = useGetToken();
  const { currentPost } = useAppContext();
  const { data: posts, error, isLoading } = usePosts();

  useEffect(() => {
    let decodedToken: Token;
    decodedToken = jwtDecode(localStorage.getItem("token") ?? "");
    if (decodedToken.exp * 1000 < Date.now()) {
      localStorage.removeItem("token");
      router.push("/admin/login");
    }
    if (token?.email?.length < 0) {
      router.push("/");
    }

  console.log("current post: ", currentPost)
  }, [currentPost]);
  return (
    <div className="min-h-screen bg-neutral flex gap-12">
      {currentPost && <EditPostModal />}
      <DashboardLayout>
        <div className="text-base-100 py-6 flex w-full justify-between items-center">
          <h1 className="text-4xl">Dashboard</h1>
          <Link href="/admin/create">
            <a className="btn btn-lg bg-base-300">Create</a>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {posts &&
            posts.map((post: IPost) => <Post post={post} key={post.ID} />)}
        </div>
      </DashboardLayout>
      <div></div>
    </div>
  );
};

export default Dashboard;
