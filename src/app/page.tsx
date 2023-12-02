
import SearchInput from "components/SearchInput"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notez"
}
export default function Page() {
  return (
      <div className="text-red-600">  
      This is the TESTING
      <SearchInput/>
    </div>
  )
}

