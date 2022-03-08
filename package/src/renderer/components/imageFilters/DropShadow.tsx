import React from "react";
import type { ReactNode } from "react";

import { Skia } from "../../../skia";
import { createDeclaration } from "../../nodes/Declaration";
import type { AnimatedProps } from "../../processors/Animations/Animations";
import type { SkRect } from "../../../skia/Rect";
import type { Color } from "../../../skia/Color";
import { processColor } from "../../../skia/Color";

import { getInput } from "./getInput";

export interface DropShadowProps {
  dx: number;
  dy: number;
  blur: number;
  color: Color;
  children?: ReactNode | ReactNode[];
  cropRect?: SkRect;
  shadowOnly?: boolean;
}

const onDeclare = createDeclaration<DropShadowProps>(
  ({ dx, dy, blur, color, shadowOnly, cropRect }, children, { opacity }) => {
    const input = getInput(children);
    const factory = shadowOnly
      ? Skia.ImageFilter.MakeDropShadowOnly
      : Skia.ImageFilter.MakeDropShadow;
    return factory(
      dx,
      dy,
      blur,
      blur,
      processColor(color, opacity),
      input,
      cropRect
    );
  }
);

export const DropShadow = (props: AnimatedProps<DropShadowProps>) => {
  return <skDeclaration onDeclare={onDeclare} {...props} />;
};