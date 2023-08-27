const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Keep Updated GPT',
  description: 'Collect free and login-free GPT mirror sites. This site is permanently free and kept up to date.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}
