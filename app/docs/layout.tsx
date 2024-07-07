import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { docsOptions } from "../layout.config";
import { pageTree } from "../../utils/source";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import { Code2, Layout as IconLayout } from "lucide-react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      nav={{ title: "Nav Tittle" }}
      githubUrl="https://github.com/"
      sidebar={{
        banner: (
          <RootToggle
            options={[
              {
                title: "Folder-1",
                icon: (
                  <div className="size-9 shrink-0 rounded-md bg-gradient-to-t from-background/80 p-1.5"
                  style={{
                    backgroundColor: `hsl( 250 100% 80%/.3)`,
                    color: `hsl( 250 100% 80%)`,
                  }}>
                    <Code2 />
                   </div>
                ),
                description: "Docs of Folder 1",
                url: "/docs/folder-1/test",
              
              },
              {
                title: "Folder-2",
                icon: (
                  <div className="size-9 shrink-0 rounded-md bg-gradient-to-t from-background/80 p-1.5"
                  style={{
                    backgroundColor: `hsl( 250 100% 80%/.3)`,
                    color: `hsl( 250 100% 80%)`,
                  }}><IconLayout />
                  </div>
                ),
                description: "Docs of Folder 2",
                url: "/docs/folder-2/test",
              },
            ]}
          />
        ),
      }}
      {...docsOptions}
      tree={pageTree}
    >
      {children}
    </DocsLayout>
  );
}
