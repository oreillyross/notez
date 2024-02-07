"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const ACTIVE_ROUTE = "py-1 px-2 text-gray-300 bg-gray-700";
const INACTIVE_ROUTE =
  "py-1 px-2 text-gray-500 hover:text-gray-300 hover:bg-gray-700";

function AuthButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {session?.user?.name} <br />
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  }
  return (
    <>
      Not Signed in <br />
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
}

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className="my-2 flex space-x-4 border border-black px-2 pl-16 pt-8">
      <hr className="py-4" />
      <ul>
        <Link href="/">
          <li className={pathname == "/" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
            Home
          </li>
        </Link>
        <Link href="/notes">Notes</Link>
        <AuthButton />
      </ul>
    </div>
  );
}
