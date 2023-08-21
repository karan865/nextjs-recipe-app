
import Link from "next/link";

export default async function Home() {
  return (
    <div className="h-screen w-full homepage bg-[url('https://res.cloudinary.com/drjz1atnh/image/upload/v1692216844/grilled-meat-vegetables-make-gourmet-lunch-generative-ai_hgd0yh.jpg')] bg-cover">
      <div className="text-center w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 server">
        <h1 className="text-5xl text-white font-bold my-8">Expole food from around the world</h1>
        <Link
          className="shadow-gray-50 bg-gray-300 rounded text-xl py-2 px-4 cursor-pointer hover:bg-blue-500 hover:text-white"
          href="/types"
        >
          List of Cuisines
        </Link>
      </div>
    </div>
  );
}
