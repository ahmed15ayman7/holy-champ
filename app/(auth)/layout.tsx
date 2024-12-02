import "../globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
    style={{direction:"rtl"}}
      className="
        min-h-screen flex w-full items-center justify-center
        bg-cover bg-center bg-no-repeat
         sm:bg-[size:auto]
      "
    >
      {children}
    </div>
  );
}
