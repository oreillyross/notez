"use client"

import { log } from "console"
import { useState, useEffect } from "react"


export default function APITestPage() {
  const [name,setName] = useState<string>()

  useEffect(() => {
    fetch("api/whoami")
    .then(res => res.json())
    .then(data => setName(data.name))
    .catch(e => console.log(e))
  }, [])

  return (
    <div>
      <div>
        API Route from <span className="font-bold underline">Client</span>
      </div>
      <div>Name: {name}</div>
    </div>
  )
}
