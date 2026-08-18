import { ReactNode } from 'react';

export function generateStaticParams() {
  return [
    { id: 'p1' },
    { id: 'p2' },
    { id: 'p3' }
  ];
}

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
