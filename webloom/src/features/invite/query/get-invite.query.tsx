import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { Server } from "@/service/api";

const useInviteCodeQuery = () => {
  return useQuery({
    queryKey: ["invite_code", "get"],
    queryFn: Server.Match.getInviteCode,
  });
};

export default useInviteCodeQuery;
