import { ImageCardProps } from "@/libs/interfaces";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const ImageCard = ({
  height,
  id,
  name,
  thumbnailUrl,
  width,
}: ImageCardProps) => {
  const [like, setLike] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(false);

  const saveImage = () => {};

  /*====add like image====*/
  const addLike = () => {
    setLike(!like);
  };

  /*====hide content when mouse is removed====*/
  const hiddenContentImage = () => {
    setShowContent(false);
  };

  /*====show content on hover====*/
  const showContentImage = () => {
    setShowContent(true);
  };

  return (
    <div
      className="flex flex-col gap-3 m-auto relative"
      onMouseOver={showContentImage}
      onMouseLeave={hiddenContentImage}
      style={{ width: width, height: height }}
    >
      <Image
        src={thumbnailUrl}
        width={width}
        height={height}
        alt={name}
        className={`relative rounded-md w-auto h-auto transition-all ${
          showContent === true ? "brightness-50" : null
        } `}
      />

      <div
        className={`absolute right-2 z-10 top-2 ${
          showContent === true ? "flex" : "hidden"
        } flex-col items-end gap-3 w-32`}
      >
        <button className="bg-blue-500 rounded-3xl p-2 w-full flex items-center text-sm capitalize font-normal justify-center gap-2 text-neutral-100">
          Save
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-photo-plus"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15 8h.01"></path>
            <path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5"></path>
            <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4"></path>
            <path d="M14 14l1 -1c.67 -.644 1.45 -.824 2.182 -.54"></path>
            <path d="M16 19h6"></path>
            <path d="M19 16v6"></path>
          </svg>
        </button>

        <button
          onClick={addLike}
          className={`flex items-center justify-center ${
            like === true ? "bg-neutral-100 w-full" : null
          } w-8 h-8 rounded-full flex items-center justify-center bg-neutral-400 transition-all hover:bg-neutral-100`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-heart-filled"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z"
              strokeWidth={0}
              fill={`${like === true ? "#FA7070" : "#000"}`}
            ></path>
          </svg>
        </button>
      </div>

      <Link
        href={`details?id=${id}`}
        className="text-sm hover:underline text-neutral-100 font-normal"
      >
        {name}
      </Link>
    </div>
  );
};
