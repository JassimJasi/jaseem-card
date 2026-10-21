import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Our Wedding |Mohamed Faris & Amira',
  description: 'Together with our families, we cordially invite you to celebrate our wedding.',
  openGraph: {
    title: 'Our Wedding |Mohamed Faris & Amira',
    description: 'Together with our families, we cordially invite you to celebrate our wedding.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
