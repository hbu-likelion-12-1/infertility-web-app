"use client";

import React, { useEffect, useRef } from 'react';
import useAuth from "@/shared/lib/use-auth.hook";
import AppLoading from "@/shared/ui/loading/loading.component";
import { useRouter, useSearchParams } from 'next/navigation';
import { Server } from '@/service/api';

const KakaoCallbackPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuth();
  const fetched = useRef(false);

  const fetch = () => {
    fetched.current = true;
  };

  useEffect(() => {
    (async () => {
      if (fetched.current || !searchParams) return;
      const code = searchParams.get("code");
      if (!code) return router.push("/login");
      fetch();

      try {
        const user = await Server.Kakao.login(code);
        if (!user) {
          return router.push("/join");
        }
        login(user);
        return router.push("/router")
      } catch (error) {
        console.error(error);
        alert("카카오 로그인 오류가 발생하였습니다. 관리자에게 문의해주세요.");
        return router.push("/");
      }
    })();
  }, [login, router, searchParams]);

  return <AppLoading/>;
};

export default KakaoCallbackPage;
