export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="bg-base-300 flex flex-col justify-center items-center text-black min-h-screen">
          {children}
      </div>
    );
  }
  