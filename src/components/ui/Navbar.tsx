import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { SearchInput } from "./SearchInput";

export default function Navbar() {
  return (
    <div className="p-4 flex gap-12 items-center font-bold bg-slate-100 shadow-lg justify-between dark:bg-slate-900">
      {/* Responsif untuk Logo CUYTUBE */}
      <div
        className="md-2 md:ml-3 md:p-2 sm:md-3 sm:p3 rounded-lg text-orange-600 font-extrabold 
        text-lg sm:text-xl md:text-2xl lg:text-3xl"
      >
        <Link href={"/videos"} className="">
          CUYTUBE
        </Link>
      </div>

      {/* Responsif untuk SearchInput dan ModeToggle */}
      <div className="flex items-center gap-2 w-full justify-end sm:gap-2 md:gap-2 lg:gap-0 ">
        <div className="w-52 sm:w-64 md:w-64 lg:w-[400px] ">
          <SearchInput />
        </div>
        <div className="flex-shrink-0">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
