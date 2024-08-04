import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { Server } from "@/service/api";

const useBothMindQuery = (questionId: string) => {
  const { data, ...result } = useQuery({
    queryKey: ["both_minds", "get"],
    queryFn: () => Server.Question.getBothMinds(questionId),
    enabled: !!questionId,
  });

  return {
    ...result,
    bothMinds: data,
  };
};

export default useBothMindQuery;
