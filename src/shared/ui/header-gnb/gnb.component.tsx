"use client";

import React from 'react';
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import IconUtils from "@/shared/ui/IconUtils";

const HeaderGlobalNavigationBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const hide = (() => {
    if (!pathname) return false;

    if (
      pathname.includes("/invite") ||
      pathname.includes("/join")
    ) {
      return false;
    }

    return true;
  })();

  if (hide) return null;

  return (
    <header
      className={clsx([
        "min-h-[50px] h-[50px] w-full px-[19px]",
        "flex items-center justify-between"
      ])}
    >
      <button onClick={() => router.back()}>
        <IconUtils.Previous/>
      </button>

      <button>
        <IconUtils.GnbTitle/>
      </button>

      <button>
        {/*<IconUtils.Close/>*/}
      </button>
    </header>
  );
};

export default HeaderGlobalNavigationBar;
