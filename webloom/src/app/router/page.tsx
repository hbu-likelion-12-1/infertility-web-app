"use client";

import React, { useEffect, useState } from 'react';
import useAuth from "@/shared/lib/use-auth.hook";
import AppLoading from "@/shared/ui/loading/loading.component";
import { Server } from "@/service/api";
import { useRouter } from "next/navigation";
import { Match } from "@/types/object";


const UserServiceRouterPage = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [match, setMatch] = useState<Match>();

  useEffect(() => {
    (async () => {
      if (!user) return router.push("/login");

      const match = await Server.Match.getMatch();
      if (!match) return router.push("/invite");
      setMatch(match);
    })();
  }, []);

  return (
    <article className="w-full h-full">
      {!match && <AppLoading/>}
      {match && <>Hello</>}
    </article>
  );
};

export default UserServiceRouterPage;
