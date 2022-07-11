import Link from "next/link";

type Props = {
  url?: string;
  title: string;
  btnTitle?: string;
};

const PageHeader = ({ title, url, btnTitle }: Props) => {
  return (
    <div className="text-base-100 py-6 flex w-full justify-between items-center">
      <h1 className="text-4xl">{title}</h1>
      {url && (
        <Link href={url}>
          <a className="btn text-base-100 btn-lg bg-primary">{btnTitle}</a>
        </Link>
      )}
    </div>
  );
};

export default PageHeader;
