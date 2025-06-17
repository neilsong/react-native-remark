import { ImageReference } from "mdast";
import { RendererArgs } from "./renderers";
import { ReactNode } from "react";

export const imageReference = ({
  node,
  definitions,
}: RendererArgs<ImageReference>): ReactNode => {
  const imageDefinition = definitions[node.identifier];
  if (!imageDefinition) {
    return null;
  }
  return null;
};

export const image = (): ReactNode => {
  return null;
};
