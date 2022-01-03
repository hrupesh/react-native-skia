import React, { useRef } from "react";
import type { IPath, IRect, AnimationValue } from "@shopify/react-native-skia";
import { rect, vec, Path, Group } from "@shopify/react-native-skia";
import {
  fitRects,
  rect2rect,
} from "@shopify/react-native-skia/src/renderer/components/image/BoxFit";
import { Dimensions } from "react-native";

import { glyphs } from "./Symbols";

const { width, height } = Dimensions.get("window");
export const COLS = 15;
export const ROWS = 25;
export const GLYPH = { width: width / COLS, height: height / ROWS };

/* eslint-disable max-len */
// https://scifi.stackexchange.com/questions/137575/is-there-a-list-of-the-symbols-shown-in-the-matrixthe-symbols-rain-how-many
const PADDING = 4;
const viewBox = (src: IRect, dest: IRect) => {
  const rects = fitRects("contain", src, dest);
  const tr = rect2rect(rects.src, rects.dst);
  return tr;
};

interface State {
  opacity: number;
  color: string;
}

interface GlyphProps {
  x: number;
  y: number;
  state: State;
  progress: AnimationValue<number>;
  index: number;
}

export const Glyph = ({
  x,
  y,
  state: { opacity, color },
  progress: frame,
  index,
}: GlyphProps) => {
  const range = useRef(Math.round(150 + Math.random() * 600));
  const i = () => {
    const progress = (frame.value % range.current) / range.current;
    const v = Math.floor(progress * (glyphs.length - 1));
    return index;
  };
  const b = glyphs[index].bounds;
  return (
    <Group
      transform={viewBox(
        glyphs[index].bounds,
        rect(
          x + PADDING,
          y + PADDING,
          GLYPH.width - 2 * PADDING,
          GLYPH.height - 2 * PADDING
        )
      )}
    >
      <Path color={color} path={glyphs[index].path} opacity={opacity} />
    </Group>
  );
};
