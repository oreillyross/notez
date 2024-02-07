

import SearchInput from "components/SearchInput";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Notez",
};
export default async function Page() {
  const session = await getServerSession();

  return (
    <div className="min-h-full pl-24 pt-12">
      {session?.user?.name ? (
        <div>{session?.user?.name}</div>
      ) : (
        <div>Not Logged in</div>
      )}
      <SearchInput />
    </div>
  );
}
