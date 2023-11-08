"use client";

import { ImageCard } from "@/components/ImageCard/ImageCard";
import { useSearchParams } from "next/navigation";
import { getImages } from "@/libs/get-images";
import { useState, useEffect } from "react";
import { Images } from "@/libs/interfaces";

export default function Home() {
  const [result, setResult] = useState<Images[]>([]);
  const [loader, setLoader] = useState(false);

  const params: any = useSearchParams();
  const q = params.get("q");

  useEffect(() => {
    setLoader(true);

    /*====We call the api and finish the loading state====*/
    getImages(q ?? "images", "off", setResult).then(() => setLoader(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  return (
    <main>
      <section className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 p-5">
        {/*====If the loading state is true, we show the loader and if it is not, we show the content dynamically.====*/}
        {loader === true
          ? "loading..."
          : result.map((data, index) => {
              const { name, hostPageUrl, thumbnailUrl, id } = data;

              {
                /*====We add an id for all elements====*/
              }
              data.id = crypto.randomUUID();

              return (
                <ImageCard
                  name={name}
                  hostPageUrl={hostPageUrl}
                  width={220}
                  height={220}
                  id={id}
                  thumbnailUrl={thumbnailUrl}
                  key={index}
                />
              );
            })}
      </section>
    </main>
  );
}
