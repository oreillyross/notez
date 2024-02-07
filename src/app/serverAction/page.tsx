import { getServerSession } from "next-auth";
import WhoAmIButton from "./WhoAmIButton";

export default async function ServerAction(){
  const whoami = async () => {
    "use server"
    const session = await getServerSession()
    return session?.user?.name || "Not logged in"
  }
  return (
  <WhoAmIButton action={whoami}/>
  )
}
