import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { Server } from "@/service/api";

const useMindQuery = (id: string) => {
  return useQuery({
    queryKey: ["mind_details", id, "get"],
    queryFn: () => Server.Question.getMind(Number(id))
  });
};

export default useMindQuery;
