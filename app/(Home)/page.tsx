import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex h-screen  flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Documentation Template</h1>
      <p className='text-muted-foreground'>This is the documentation template made with the Fuma Docs.</p>
      <p className="text-muted-foreground">
        You can open{' '}
        <Link href="/docs/folder-1/get-started" className="text-foreground font-semibold underline">
          /docs
        </Link>{' '}
        and see the documentation.
      </p>
    </main>
  );
}
