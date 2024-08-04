"use client";

import React from 'react';
import useStorageQuery from "./query/storage.query";
import Storage from "@/features/store/storage.component";

const StoreScreen = () => {
  const { storages } = useStorageQuery();


  return (
    <article className="w-full h-full flex flex-col bg-primary-2 px-[20px]">
      <h1 className="text-[24px] font-bold my-[22px]">
        마음 공유 보관함
      </h1>

      <section className="py-[24px] flex flex-col gap-y-3">
        {storages.map(storage =>
          <Storage
            key={storage.id}
            data={storage}
          />)
        }
      </section>
    </article>
  );
};

export default StoreScreen;
