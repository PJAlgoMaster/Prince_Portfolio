"use client";

import React from "react";
import LazyImage from "./LazyImage";
import SectionFadeIn from "./SectionFadeIn";
import phoneFrame from "@/public/phone-frame.png";
import screenshot from "@/public/screenshot.png";

export default function MobileScreenshot() {
  return (
    <SectionFadeIn className="flex justify-center items-center py-10">
      <div className="relative w-[300px] h-[600px]">
        <LazyImage
          src={phoneFrame}
          alt="Phone Frame"
          fill
          className="object-contain"
          priority // This will be respected, loading=lazy will be excluded
        />
        <div className="absolute top-[11%] left-[9%] w-[82%] h-[78%] overflow-hidden rounded-[2rem]">
          <LazyImage
            src={screenshot}
            alt="App Screenshot"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </SectionFadeIn>
  );
}
