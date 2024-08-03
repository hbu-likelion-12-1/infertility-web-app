import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { Server } from "@/service/api";

const useFeedbackQuery = () => {
  return useQuery({
    queryKey: ["bloom_feedback", "get"],
    queryFn: Server.BloomAI.get
  })
};

export default useFeedbackQuery;
