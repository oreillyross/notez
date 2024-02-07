
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ProtectedRoute() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }
  return <div>You are on a protected route as an authenticated user 

{JSON.stringify(session)}
  </div>;
}
