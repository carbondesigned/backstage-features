import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
};
const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="drawer drawer-mobile gap-12">
      <input id="dashboardSidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-12">
        <label
          htmlFor="dashboardSidebar"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboardSidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-300 text-neutral-content">
          <li>
          <Link href="/admin/dashboard">
            <a>Posts</a>
          </Link>
          </li>
          <li>
          <Link href="/admin/albums">
            <a>Albums</a>
          </Link>
          </li>
          <li>
          <Link href="/admin/images">
            <a>Upload Images</a>
          </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
