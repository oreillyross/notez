import React from "react";
import SearchInput from "../components/SearchInput";
import * as Popover from "@radix-ui/react-popover";

function Testing() {
  return (
    <div>
      <h2 className="mx-auto max-w-4xl pt-6 pb-6 text-3xl">
        Testing - simpler than setting up Storybook
      </h2>
      <SearchInput/>
      <Popover.Root>
        <Popover.Trigger className=" ml-6 p-2 border-r-2 border bg-white">
          More Info
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="ml-6 rounded p-4 border-r-2 border bg-white">
            Some more info from the content page
            <Popover.Arrow className="fill-slate-300"/>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}

export default Testing;
