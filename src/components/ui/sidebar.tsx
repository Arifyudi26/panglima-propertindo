"use client";
import React from "react";
import { Nav } from "./nav";
import { ChevronRight, LayoutDashboard } from "lucide-react";
import { Button } from "./button";

import { useWindowWidth } from "@react-hook/window-size";

type Props = {};

export default function Sidebar({}: Props) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }
  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            variant="secondary"
            className="rounded-full p-2 bg-[#287C3E] text-white"
            onClick={toggleSidebar}
          >
            <ChevronRight className="dark:text-white" />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Feedback",
            href: "/feedback",
            icon: LayoutDashboard,
            variant: "default",
          },
        ]}
      />
    </div>
  );
}
