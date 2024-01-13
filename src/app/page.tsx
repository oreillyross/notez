
import SearchInput from "components/SearchInput"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notez"
}
export default function Page() {
  return (
      <div className="pl-24 pt-12 min-h-full">
      <SearchInput/>
    </div>
  )
}

