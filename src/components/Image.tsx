/* eslint-disable @next/next/no-img-element */
"use client";

import { IKImage } from "imagekitio-next";

type ImageType = {
  path?: string;
  src?: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
  tr?: boolean;
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Image = ({ path, src, w, h, alt, className, tr }: ImageType) => {
  if (urlEndpoint && path && !path.startsWith("/") && !path.startsWith("http")) {
    return (
      <IKImage
        urlEndpoint={urlEndpoint}
        path={path}
        src={src}
        {...(tr
          ? { transformation: [{ width: `${w}`, height: `${h}` }] }
          : { width: w, height: h })}
        lqip={{ active: true, quality: 20 }}
        alt={alt || ""}
        className={className}
      />
    );
  }

  const imageSource =
    src || (path ? (path.startsWith("/") ? path : `/${path}`) : "/general/avatar.png");

  return (
    <img
      src={imageSource}
      alt={alt || ""}
      width={w}
      height={h}
      className={className}
      style={{ objectFit: tr ? "cover" : undefined }}
    />
  );
};

export default Image;
