// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoneyRocketSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoneyRocketSvgrepoComsvgIcon(
  props: MoneyRocketSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 33.861 33.862"}
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
          "M26.247 19.34l.185-.002V21.2l-.189-.01c-.758 0-1.137-.314-1.137-.947-.001-.6.378-.903 1.141-.903zm1.052 3.025v2.015h.184c.826 0 1.238-.354 1.238-1.062 0-.39-.093-.644-.273-.769-.186-.123-.567-.184-1.149-.184zm6.562-.716a6.99 6.99 0 01-6.988 6.99 6.99 6.99 0 010-13.977 6.984 6.984 0 016.988 6.987zm-3.84 1.646c0-.746-.168-1.262-.504-1.541-.332-.281-.979-.447-1.935-.498l-.284-.012V19.34h.2c.705 0 1.058.281 1.058.848l.006.138h1.242v-.177c0-.745-.179-1.258-.531-1.53-.354-.274-1.012-.412-1.975-.412v-.739h-.867v.739c-1.008 0-1.697.144-2.068.431-.373.287-.561.819-.561 1.6 0 .803.188 1.354.557 1.646.369.291 1.062.438 2.072.438v2.061l-.189-.004c-.52 0-.854-.068-1.002-.203-.146-.137-.225-.438-.225-.908v-.131H23.73l-.006.26c0 .771.184 1.31.553 1.617.367.31 1.006.465 1.912.465l.242.006v.854h.867v-.854l.266-.006c.908 0 1.545-.164 1.91-.483.363-.335.547-.896.547-1.701zM14.74 22.199L30.904 6.037l.127-4.62-4.62.129-16.162 16.162-4.018-.418-4.441 4.439 7.818 1.109 1.109 7.817 4.439-4.44-.416-4.016zm-5.497 3.084a4.52 4.52 0 01-.852 1.176c-1.137 1.138-3.258.856-3.258.856s-.281-2.122.855-3.26a4.638 4.638 0 011.176-.854c-1.078-.141-2.354.312-3.344 1.307C2.334 25.995 0 32.445 0 32.445s6.451-2.332 7.938-3.818c.993-.994 1.446-2.266 1.305-3.344z"
        }
      ></path>
    </svg>
  );
}

export default MoneyRocketSvgrepoComsvgIcon;
/* prettier-ignore-end */
