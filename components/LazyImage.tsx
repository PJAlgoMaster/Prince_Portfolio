"use client";

import Image, { ImageProps } from "next/image";
import React from "react";

type LazyImageProps = ImageProps & {
  priority?: boolean;
};

export default function LazyImage(props: LazyImageProps) {
  const { priority = false, ...rest } = props;

  return (
    <Image
      {...rest}
      priority={priority}
      loading={priority ? undefined : "lazy"} // prevents conflict
    />
  );
}
