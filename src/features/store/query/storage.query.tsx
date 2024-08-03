import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { Server } from "@/service/api";
import { Question } from "@/types/object";

const useStorageQuery = () => {
  const result = useQuery({
    queryKey: ["storage_list", "get"],
    queryFn: Server.Match.getStorageList,
    initialData: [] as Question[],
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

  return {
    ...result,
    storages: result.data,
  };
};

export default useStorageQuery;
