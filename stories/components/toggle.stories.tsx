import { Toggle } from "../../src";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import React, { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { mapVariantSize } from "../utils";
import { Italic } from "lucide-react";

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: "Components/Toggle",
};

export default meta;
type Story = StoryObj<typeof Toggle>;

type Variant = "default" | "outline";
type Size = "default" | "sm" | "lg";

const variants: Variant[] = ["default", "outline"];
const sizes: Size[] = ["default", "sm", "lg"];

const variations = mapVariantSize(variants, sizes);

const stories: { [key: string]: Story } = {};

variations.forEach(({ name, variant, size, content }) => {
  stories[name] = {
    args: { variant, size },
    parameters: {
      viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: "responsive",
      },
    },
    render: ({ variant, size }: any) => (
      <Toggle aria-label='Toggle italic' variant={variant} size={size}>
        <Italic className='mr-2 h-4 w-4' />
        Italic
      </Toggle>
    ),
  };
});

export const Default = stories["default - default"];
export const DefaultSmall = stories["default - sm"];
export const DefaultLarge = stories["default - lg"];

export const Outline = stories["outline - default"];
export const OutlineSmall = stories["outline - sm"];
export const OutlineLarge = stories["outline - lg"];
