// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AnonymousSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AnonymousSvgrepoComsvgIcon(
  props: AnonymousSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M497.612 134.031s-30.453 30.438-96.391 30.438c-49.922 0-107.156 5.016-145.234 55.906-38.078-50.891-95.313-55.906-145.219-55.906-65.953 0-96.391-30.438-96.391-30.438s-39.625 83.703 12.688 170.281c41.078 67.953 121.75 83.688 175.016 68.156 26.359-7.688 47.672-27.375 53.906-33.563 6.234 6.188 27.563 25.875 53.922 33.563 53.266 15.531 133.938-.203 175.032-68.156 52.312-86.578 12.671-170.281 12.671-170.281zM142.221 292.063c-30.313-6.75-48.5-30.688-45.594-46.234 2.328-12.375 48.844-15.234 69.031-7.609 20.219 7.625 36.391 18.125 36.563 30.016.172 11.873-29.672 30.577-60 23.827zm227.531 0c-30.313 6.75-60.156-11.953-60-23.828.172-11.891 16.375-22.391 36.563-30.016s66.703-4.766 69.047 7.609c2.906 15.547-15.281 39.485-45.61 46.235z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AnonymousSvgrepoComsvgIcon;
/* prettier-ignore-end */
