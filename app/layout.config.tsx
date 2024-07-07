import { type DocsLayoutProps } from "fumadocs-ui/layout";
import { sidebarOptions, pageTree } from "@/utils/source";

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...sidebarOptions,
  tree: pageTree,
};
