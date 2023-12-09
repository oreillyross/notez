import Image from "next/image";

export default function EmailSubscribe() {
  return (
    // background container
    <div className="flex h-screen items-center justify-center bg-zinc-700">
      <div className="mx-6 rounded-2xl bg-zinc-800 p-2">
        <div className="flex flex-col rounded-l-xl md:flex-row">
          {/* image */}
          <Image
            src="/img/note.jpg"
            width="200"
            height="200"
            className="object-fit h-80 transform  
                      rounded-xl duration-200 hover:scale-105 
                      hover:rounded-xl md:h-64 md:rounded-none md:rounded-l-xl"
            alt="Image of a note"
          />
          <div className="p-6 md:p-12">

              <h2 className="font-serif text-xl font-medium text-center text-white md:text-left">Make me some good notes!</h2>
          </div>
          {/* content */}
        </div>
      </div>
    </div>
  );
}
