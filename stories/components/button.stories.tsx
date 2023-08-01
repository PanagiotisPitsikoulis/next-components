import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import React from "react";
import { Button } from "../../src";
import type { Meta, StoryObj } from "@storybook/react";
import { mapVariantSize, textToEmojiIfIcon } from "../utils";
import { te } from "date-fns/locale";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

type Variant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";
type Size = "default" | "sm" | "lg" | "icon";

const variants: Variant[] = [
  "default",
  "destructive",
  "outline",
  "secondary",
  "ghost",
  "link",
];
const sizes: Size[] = ["default", "sm", "lg", "icon"];

let variations = mapVariantSize(variants, sizes);
variations = textToEmojiIfIcon(variations, "✌️");

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
      <Button variant={variant} size={size}>
        {content}
      </Button>
    ),
  };
});

// Export individual stories as well (optional)
export const Default = stories["default - default"];
export const DefaultSmall = stories["default - sm"];
export const DefaultLarge = stories["default - lg"];
export const DefaultIcon = stories["default - icon"];

export const Destructive = stories["destructive - default"];
export const DestructiveSmall = stories["destructive - sm"];
export const DestructiveLarge = stories["destructive - lg"];
export const DestructiveIcon = stories["destructive - icon"];

export const Outline = stories["outline - default"];
export const OutlineSmall = stories["outline - sm"];
export const OutlineLarge = stories["outline - lg"];
export const OutlineIcon = stories["outline - icon"];

export const Secondary = stories["secondary - default"];
export const SecondarySmall = stories["secondary - sm"];
export const SecondaryLarge = stories["secondary - lg"];
export const SecondaryIcon = stories["secondary - icon"];

export const Ghost = stories["ghost - default"];
export const GhostSmall = stories["ghost - sm"];
export const GhostLarge = stories["ghost - lg"];
export const GhostIcon = stories["ghost - icon"];

export const Link = stories["link - default"];
export const LinkSmall = stories["link - sm"];
export const LinkLarge = stories["link - lg"];
export const LinkIcon = stories["link - icon"];
