import React from "react";
import LayoutLeftSide from "./LeftSide";

interface Props {
  children: React.ReactNode;
  showLeftSide: boolean;
  showRightSide: boolean;
}

export default function MainLayout({
  children,
  showLeftSide,
  showRightSide,
}: Props) {
  return (
    <div className="w-full flex justify-center mt-[25px]">
      <section className="min-h-screen max-w-[1340px] w-full">
        <div className="items-start lg:grid lg:grid-cols-6 gap-3">
          {showLeftSide ? <LayoutLeftSide /> : null}
          {showRightSide ? (
            <div className="col-span-1 space-y-8 lg:hidden grid lg:grid-cols-1 md:gap-6 md:space-y-0">
              right
            </div>
          ) : null}
          <div className="col-span-4 space-y-8 md:grid md:grid-cols-1 md:gap-12 md:space-y-0">
            <div className="flex flex-col items-start md:flex-[0_0_50%] w-full flex-[0_0_100%]">
              <div className="block w-full">{children}</div>
            </div>
          </div>
          {showRightSide ? (
            <div className="col-span-1 space-y-8 lg:grid hidden lg:grid-cols-1 md:gap-6 md:space-y-0">
              right
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
