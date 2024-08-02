"use client";

import React from 'react';
import useMatchQuery from "@/features/service/query/get-match.query";
import AppLoading from "@/shared/ui/loading/loading.component";
import useAuth from "@/shared/lib/use-auth.hook";

import ServiceMainHeader from "./service-main-header.component";


const ServiceMain = () => {
  const { data: matchDetails, isLoading } = useMatchQuery();
  const { user } = useAuth();

  if (isLoading && !matchDetails) return <AppLoading/>;

  return (
    <article className="w-full h-full flex flex-col">
      <ServiceMainHeader/>
    </article>
  );
};

export default ServiceMain;
