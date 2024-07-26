import { useEffect } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";

const KakaoCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get("code");
    const referrer = localStorage.getItem("referrer");
    if (!referrer || !code) return;
    navigate(`${referrer}?code=${code}`);
  }, [navigate, searchParams]);

  return (
    <div>
      로딩 중입니다..
    </div>
  );
};

export default KakaoCallback;
