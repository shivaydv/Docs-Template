import React from 'react'
import { Layout } from "fumadocs-ui/layout";
import { BookIcon,Layout as IconLayout,Code } from "lucide-react";

const NavbarProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <Layout
        nav={{
          title: "Nav Tittle",
          url: "/",
        }}
        links={[
          {
            icon: <BookIcon />,
            text: "Docs",
            url: "/docs/folder-1/get-started",
          },
          {
            type: "menu",
            text: "Menu",
            items: [
              
              {
                text: "Layout",

                url: "/docs/folder-1/get-started",

                icon: <IconLayout />,
              },
              {
                text: "Code",
                url: "/docs/folder-1/get-started",
                icon: <Code />,
              },
            ],
          },
          
          {
            text: "Icon",
            type: "icon",
            url: "/docs/folder-1/get-started",
            label: "test",
            icon: <BookIcon />,
          },
        ]}
      >
        {children}
      </Layout>
  )
}

export default NavbarProvider