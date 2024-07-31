"use client";

import React, { useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
import { Server } from "@/service/api";
import useAuth from "@/shared/lib/use-auth.hook";

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

  return (
    <div>
      잠시만 기다려주세요...
    </div>
  );
};

export default KakaoCallbackPage;
