/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchInput() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  return (
    <div className="flex w-full max-w-sm items-center space-x-2 ">
      <Input
        className="text-xs font-sans font-medium dark:text-gray-200 text-gray-900 h-8 sm:h-9 md:h-10 lg:h-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search ..."
      />
      <Button
        className="h-8 sm:h-8 md:h-8 lg:h-7"
        onClick={() => router.push(`/videos?query=${search}`)}
        type="submit"
      >
        Submit
      </Button>
    </div>
  );
}
