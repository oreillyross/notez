"use client";

import { useState } from "react";

export default function WhoAmIButton({
  action,
}: {
  action: () => Promise<string>;
}) {
  const [name, setName] = useState<string>();
  return (
    <div>
      <button
        onClick={async () => {
          setName(await action());
        }}
      >
        Who am I?
      </button>
      {name && <div> You are {name}</div>}
    </div>
  );
}
