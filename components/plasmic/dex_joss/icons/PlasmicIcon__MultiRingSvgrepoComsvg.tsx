// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MultiRingSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MultiRingSvgrepoComsvgIcon(
  props: MultiRingSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 48 48"}
      fill={"none"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"#fff"} fillOpacity={".01"} d={"M0 0h48v48H0z"}></path>

      <path
        d={"M30 10a6 6 0 00-12 0v14a6 6 0 0012 0V10z"}
        stroke={"#000"}
        strokeWidth={"4"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M38.142 18.343a6 6 0 00-8.485-8.485l-9.9 9.9a6 6 0 108.486 8.485l9.9-9.9z"
        }
        stroke={"#000"}
        strokeWidth={"4"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M38 30a6 6 0 000-12H24a6 6 0 000 12h14z"}
        stroke={"#000"}
        strokeWidth={"4"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M29.657 38.142a6 6 0 108.485-8.485l-9.9-9.9a6 6 0 10-8.485 8.486l9.9 9.9z"
        }
        stroke={"#000"}
        strokeWidth={"4"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M18 38a6 6 0 0012 0V24a6 6 0 00-12 0v14z"}
        stroke={"#000"}
        strokeWidth={"4"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9.858 29.657a6 6 0 108.485 8.485l9.9-9.9a6 6 0 10-8.486-8.485l-9.9 9.9z"
        }
        stroke={"#000"}
        strokeWidth={"4"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M10 18a6 6 0 000 12h14a6 6 0 000-12H10z"}
        stroke={"#000"}
        strokeWidth={"4"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M18.343 9.858a6 6 0 00-8.485 8.485l9.9 9.9a6 6 0 108.485-8.486l-9.9-9.9z"
        }
        stroke={"#000"}
        strokeWidth={"4"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MultiRingSvgrepoComsvgIcon;
/* prettier-ignore-end */
