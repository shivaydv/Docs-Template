import NavbarProvider from "@/components/Navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-[100dvh] flex flex-col">
      <NavbarProvider>
        <div className="flex-grow">{children}</div>
        <footer className="text-center border-t py-4">Hello Shiva</footer>       
      </NavbarProvider>
    </main>
  );
}
