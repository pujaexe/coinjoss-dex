// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SecureSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SecureSvgrepoComsvgIcon(props: SecureSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      className={classNames("plasmic-default__svg", className, "icon glyph")}
      height={"1em"}
      width={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M19.42 3.83L12.24 2A.67.67 0 0012 2a.67.67 0 00-.2 0L4.58 3.83a2 2 0 00-1.51 2.09l.42 5.51a12 12 0 007.24 10.11l.88.38a.91.91 0 00.7 0l.88-.38a12 12 0 007.24-10.11l.42-5.51a2 2 0 00-1.43-2.09zm-3.71 5.88l-4 4a1 1 0 01-1.42 0l-2-2a1 1 0 011.42-1.42l1.29 1.3 3.29-3.3a1 1 0 011.42 1.42z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SecureSvgrepoComsvgIcon;
/* prettier-ignore-end */
