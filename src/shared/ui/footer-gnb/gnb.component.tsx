"use client";

import React, { useEffect, useState } from 'react';
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import Activation from "./activation.component";
import IconUtils from "@/shared/ui/IconUtils";

export enum NavItem {
  HOME,
  BLOOM,
  STORAGE,
}

const FooterGlobalNavigationBar = () => {
  const [navItem, setNavItem] = useState<NavItem>(NavItem.HOME);
  const pathname = usePathname();
  const router = useRouter();

  const hide = (() => {
    if (!pathname) return false;

    if (
      pathname.includes("/service")
    ) {
      return false;
    }

    return true;
  })();


  useEffect(() => {
    if (pathname === '/service') {
      setNavItem(NavItem.HOME);
    }

    if (pathname === '/service/bloom-ai') {
      setNavItem(NavItem.BLOOM);
    }

    if (pathname === '/service/storage') {
      setNavItem(NavItem.STORAGE);
    }
  }, [pathname]);

  if (hide) return null;

  return (
    <footer
      className={clsx([
        "w-full h-[80px]",
        "flex justify-evenly",
        "shadow-footer",
      ])}
    >
      <button className="w-[80px]" onClick={() => router.push("/service")}>
        <Activation
          active={navItem === NavItem.HOME}
          activeIcon={<IconUtils.ActiveHome/>}
          icon={<IconUtils.DeActiveHome/>}
          text="홈"
        >
        </Activation>
      </button>
      <button className="w-[80px]" onClick={() => router.push("/service/bloom-ai")}>
        <Activation
          active={navItem === NavItem.BLOOM}
          activeIcon={<IconUtils.ActiveFlower/>}
          icon={<IconUtils.DeActiveFlower/>}
          text="AI Bloom"
        >
        </Activation>
      </button>
      <button className="w-[80px]" onClick={() => router.push("/service/storage")}>
        <Activation
          active={navItem === NavItem.STORAGE}
          activeIcon={<IconUtils.ActiveStorage/>}
          icon={<IconUtils.DeActiveStorage/>}
          text="보관함"
        >
        </Activation>
      </button>
    </footer>
  );
};

export default FooterGlobalNavigationBar;

