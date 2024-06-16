export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-base-100 text-black">
        {children}
    </div>
  );
}
