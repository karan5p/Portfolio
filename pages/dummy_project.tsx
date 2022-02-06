import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import projectImage from "../public/placeholder.jpg";

const DummyProject: NextPage = () => {
  return (
    <div>
      <div className="text-slate-700 flex flex-col gap-6">
        <div>
          <Image src={projectImage} />
        </div>
        <div className="text-center">
          Something about the app placeholder....
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          asperiores modi magni minus possimus, optio culpa atque, ipsa cum
          rerum eveniet voluptatum reprehenderit amet? Illo doloribus reiciendis
          modi ea natus.
        </div>
        <div className="mt-6">
          <Link href="/">
            <a className="font-bold underline hover:text-indigo-600 ">Back</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DummyProject;
