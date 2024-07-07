import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex w-screen h-[80dvh]  text-lg justify-center items-center gap-4">
      <div className=" border p-4 rounded-lg">
        <Link
          className="underline underline-offset-4 "
          href={"/docs/folder-1/test"}
        >
          Open the Docs of the Folder 1
        </Link>
        
      </div>
      <div className=" border p-4 rounded-lg">
        <Link
          className="underline underline-offset-4 "
          href={"/docs/folder-2/test"}
        >
          Open the Docs of the Folder 2
        </Link>
      </div>
    </div>
  );
};

export default page;
