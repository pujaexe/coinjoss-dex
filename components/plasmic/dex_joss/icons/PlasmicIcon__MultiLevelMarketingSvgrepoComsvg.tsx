// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MultiLevelMarketingSvgrepoComsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function MultiLevelMarketingSvgrepoComsvgIcon(
  props: MultiLevelMarketingSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22 17v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 011-1h1v-1.5a.5.5 0 00-.5-.5h-11a.5.5 0 00-.5.5V16h1a1 1 0 011 1v4a1 1 0 01-1 1H3a1 1 0 01-1-1v-4a1 1 0 011-1h1v-3a1 1 0 011-1h6V9H9a1 1 0 01-1-1V3a1 1 0 011-1h6a1 1 0 011 1v5a1 1 0 01-1 1h-2v3h6a1 1 0 011 1v3h1a1 1 0 011 1z"
        }
      ></path>
    </svg>
  );
}

export default MultiLevelMarketingSvgrepoComsvgIcon;
/* prettier-ignore-end */
