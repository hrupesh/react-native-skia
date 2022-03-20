import React from "react";
import { Dimensions } from "react-native";
import {
  Canvas,
  Fill,
  Group,
  Path,
  useTouchHandler,
  useValue,
} from "@shopify/react-native-skia";

import { Button } from "./components/Button";

const { width, height } = Dimensions.get("window");
const PADDING = 64;
const size = width - PADDING * 2;
const x = PADDING;
const y = (height - size) / 2;

export const Neumorphism = () => {
  const pressed = useValue(0);
  const onTouch = useTouchHandler({
    onStart: () => {
      pressed.current = pressed.current === 0 ? 1 : 0;
    },
    onEnd: () => {
      pressed.current = pressed.current === 0 ? 1 : 0;
    },
  });
  return (
    <Canvas style={{ flex: 1 }} onTouch={onTouch}>
      <Fill color="#F0F0F3" />
      <Button x={x} y={y} size={size} pressed={pressed}>
        <Path
          // eslint-disable-next-line max-len
          path="M4.875 0.875015H3.125C2.66087 0.875015 2.21575 1.05939 1.88756 1.38758C1.55937 1.71577 1.375 2.16089 1.375 2.62502C1.375 3.08914 1.55937 3.53426 1.88756 3.86245C2.21575 4.19064 2.66087 4.37502 3.125 4.37502M4.875 0.875015V4.37502M4.875 0.875015H6.625C6.85482 0.875015 7.08238 0.92028 7.2947 1.00823C7.50702 1.09617 7.69994 1.22508 7.86244 1.38758C8.02494 1.55008 8.15385 1.743 8.24179 1.95532C8.32974 2.16764 8.375 2.3952 8.375 2.62502C8.375 2.85483 8.32974 3.08239 8.24179 3.29471C8.15385 3.50703 8.02494 3.69995 7.86244 3.86245C7.69994 4.02495 7.50702 4.15386 7.2947 4.2418C7.08238 4.32975 6.85482 4.37502 6.625 4.37502M4.875 4.37502H3.125M4.875 4.37502H6.625M4.875 4.37502V7.87502M3.125 4.37502C2.66087 4.37502 2.21575 4.55939 1.88756 4.88758C1.55937 5.21577 1.375 5.66089 1.375 6.12502C1.375 6.58915 1.55937 7.03426 1.88756 7.36245C2.21575 7.69064 2.66087 7.87502 3.125 7.87502M6.625 4.37502C6.39519 4.37502 6.16763 4.42028 5.95531 4.50823C5.74299 4.59617 5.55007 4.72508 5.38757 4.88758C5.22506 5.05008 5.09616 5.243 5.00821 5.45532C4.92027 5.66764 4.875 5.8952 4.875 6.12502C4.875 6.35483 4.92027 6.58239 5.00821 6.79471C5.09616 7.00703 5.22506 7.19995 5.38757 7.36245C5.55007 7.52496 5.74299 7.65386 5.95531 7.74181C6.16763 7.82975 6.39519 7.87502 6.625 7.87502C6.85482 7.87502 7.08238 7.82975 7.2947 7.74181C7.50702 7.65386 7.69994 7.52496 7.86244 7.36245C8.02494 7.19995 8.15385 7.00703 8.24179 6.79471C8.32974 6.58239 8.375 6.35483 8.375 6.12502C8.375 5.8952 8.32974 5.66764 8.24179 5.45532C8.15385 5.243 8.02494 5.05008 7.86244 4.88758C7.69994 4.72508 7.50702 4.59617 7.2947 4.50823C7.08238 4.42028 6.85482 4.37502 6.625 4.37502ZM3.125 7.87502C2.66087 7.87502 2.21575 8.05939 1.88756 8.38758C1.55937 8.71577 1.375 9.16089 1.375 9.62502C1.375 10.0891 1.55937 10.5343 1.88756 10.8625C2.21575 11.1906 2.66087 11.375 3.125 11.375C3.58913 11.375 4.03425 11.1906 4.36244 10.8625C4.69063 10.5343 4.875 10.0891 4.875 9.62502V7.87502M3.125 7.87502H4.875"
          color="#FB7575"
          strokeCap="round"
          strokeJoin="round"
          style="stroke"
          strokeWidth={1}
        />
      </Button>
    </Canvas>
  );
};
