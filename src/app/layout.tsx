
import { inter } from "app/ui/fonts";
import "styles/globals.css"
import NavBar from "components/Navbar";
import { getServerSession } from "next-auth";
import SessionProvider from "components/SessionProvider";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={`${inter.className} antialised px-4 `}>
        <SessionProvider session={session}>
          <NavBar />
            {children}
        </SessionProvider>
      </body>
    </html>
  );
}
