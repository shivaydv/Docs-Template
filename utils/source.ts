import { map } from "@/.map";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import { PageTree } from "fumadocs-core/server";
import { type BaseLayoutProps } from "fumadocs-ui/layout";

export const {
  getPage,
  getPages,
  pageTree: originalTree,
} = loader({
  baseUrl: "/docs",
  rootDir: "docs",
  source: createMDXSource(map),
});

export const pageTree: PageTree.Root = {
  name: "Page Tree Name",
  children: [
    {
      type: "folder",
      name: "Folder 1",
      root: true,
      defaultOpen: false,
      children: [
        { type: "separator", name: "Getting Started" },
        { type: "page", name: "Quick Intro", url: "/docs/folder-1/get-started" },

        { type: "separator", name: "Section 1" },
        { type: "page", name: "Setup", url: "/docs/folder-1/test" },
        { type: "page", name: "Link", url: "/docs/folder-1/test2" },
        { type: "separator", name: "Section 2" },
        { type: "page", name: "Code", url: "/docs/folder-1/test3" },
      ],
    },
    {
      type: "folder",
      name: "Folder 2",
      root: true,
      defaultOpen: false,
      children: [
        { type: "separator", name: "Folder-2" },
        { type: "page", name: "Home", url: "/docs/folder-2/test" },
        { type: "page", name: "Testing", url: "/docs/folder-2/test2" },
        { type: "page", name: "Components", url: "/docs/folder-2/test3" },
      ],
    },
  ],
};

export const sidebarOptions: BaseLayoutProps = {
  nav: {
    title: "SideBar Title",
  },
  links: [
    {
      text: "Documentation",
      url: "/",
      active: "nested-url",
    },
    {
      text: "Porfolio",
      url: "/",  
    },
  ],
};



