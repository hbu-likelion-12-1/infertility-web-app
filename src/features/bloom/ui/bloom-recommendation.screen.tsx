import React from 'react';
import useAuth from "@/shared/lib/use-auth.hook";
import IconUtils from "@/shared/ui/IconUtils";

const BloomRecommendation = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <article className="w-full flex flex-col h-full overflow-y-scroll overflow-x-hidden">
      <h1 className="text-[24px] font-bold mt-[32px]">Bloom이 추천해요!</h1>
      <section
        className="pt-[30px] h-[142px] flex flex-col text-[24px] w-full relative text-slate-700 justify-end">
        <span className="text-black">{user.username}님,</span>

        <section>
          <span className="text-black">이번 주말 {user.sex === "F" ? "남편과" : "아내와"} 산책 어떠세요?</span>
          <div className="absolute right-0 top-[-15px]">
            <IconUtils.BigFlower/>
          </div>
        </section>

        <div className="py-6"/>
      </section>

      <section className="flex flex-col">
        <span className="text-[18px] text-black font-bold pb-4">내 주변 산책로</span>

        <nav className="flex gap-x-[18px]">
          <article
            className="w-[174px] h-[152px] shadow-card rounded-[25px] overflow-hidden"
          >
            <img src="/images/mock-1.png" className="w-full"/>
            <div className="w-full h-full flex flex-col px-[12px] py-[4px]">
              <h4 className="font-bold text-[14px]">한마음 공원 산책로</h4>
              <div className="flex gap-x-1.5">
                <IconUtils.Geo/>
                <h4 className="font-bold text-[12px] text-slate-600">서울특별시 노원구</h4>
              </div>
            </div>
          </article>

          <article
            className="w-[174px] h-[152px] shadow-card rounded-[25px] overflow-hidden"
          >
            <img src="/images/mock-2.png" className="w-full"/>
            <div className="w-full h-full flex flex-col px-[12px] py-[4px]">
              <h4 className="font-bold text-[14px]">노원 공원 산책로</h4>
              <div className="flex gap-x-1.5">
                <IconUtils.Geo/>
                <h4 className="font-bold text-[12px] text-slate-600">서울특별시 노원구</h4>
              </div>
            </div>
          </article>

          <article
            className="w-[174px] h-[152px] shadow-card rounded-[25px] overflow-hidden"
          >
            <img src="/images/mock-1.png" className="w-full"/>
            <div className="w-full h-full flex flex-col px-[12px] py-[4px]">
              <h4 className="font-bold text-[14px]">노원 어린이공원</h4>
              <div className="flex gap-x-1.5">
                <IconUtils.Geo/>
                <h4 className="font-bold text-[12px] text-slate-600">서울특별시 노원구</h4>
              </div>
            </div>
          </article>
        </nav>

      </section>

      <section className="flex flex-col pt-[56px]">
        <span className="text-[18px] text-black font-bold pb-4">서울시 난임 부부 정책 & 프로그램</span>

        <nav className="flex gap-x-[18px]">
          <article
            className="w-[174px] h-[152px] shadow-card rounded-[25px] overflow-hidden"
          >
            <img src="/images/mock-3.png" className="w-full"/>
            <div className="w-full h-full flex flex-col px-[12px] py-[4px]">
              <h4 className="font-bold text-[14px]">초기 난임부부 건강관리...</h4>
              <h4 className="font-bold text-[12px] text-slate-600">(사)한국난임가족연합회</h4>
            </div>
          </article>

          <article
            className="w-[174px] h-[152px] shadow-card rounded-[25px] overflow-hidden"
          >
            <img src="/images/mock-4.png" className="w-full"/>
            <div className="w-full h-full flex flex-col px-[12px] py-[4px]">
              <h4 className="font-bold text-[14px]">난임 숲 치유프로그램...</h4>
              <h4 className="font-bold text-[12px] text-slate-600">서울시 임신출산정보 센터</h4>
            </div>
          </article>

          <article
            className="w-[174px] h-[152px] shadow-card rounded-[25px] overflow-hidden"
          >
            <img src="/images/mock-4.png" className="w-full"/>
            <div className="w-full h-full flex flex-col px-[12px] py-[4px]">
              <h4 className="font-bold text-[14px]">난임 숲 치유프로그램...</h4>
              <h4 className="font-bold text-[12px] text-slate-600">서울시 임신출산정보 센터</h4>
            </div>
          </article>
        </nav>

      </section>

      <section className="flex flex-col pt-[56px]">
        <span className="text-[18px] text-black font-bold pb-4">배란 주사 유투브 영상</span>

        <nav className="flex flex-col gap-y-[12px]">
          <article className="flex flex-col">
            <img src="/images/youtube-1.png" className="rounded-[25px] w-full h-[320px]"/>
            <h3 className="pt-3 text-[18px] font-bold">플리트롭(Follitrope) 주사방법 과배란주사 | 가천대 길병원 난임클리닉</h3>
            <nav className="text-[12px] flex flex-col text-slate-700">
              <span>길병원TV</span>
              <span>9.8천만 • 2년 전</span>
            </nav>
          </article>
        </nav>

      </section>
    </article>
  );
};

export default BloomRecommendation;
