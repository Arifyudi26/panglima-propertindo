"use client";

import { cn } from "@/lib/utils";
import Sidebar from "@/components/ui/sidebar";
import queryClient from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn("min-h-screen w-full bg-white text-black flex")}>
      <Sidebar />
      <QueryClientProvider client={queryClient}>
        <div className="p-8 w-full">{children}</div>
      </QueryClientProvider>
    </div>
  );
}

// "use client";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import { cn } from "@/lib/utils";
// import Sidebar from "@/components/ui/sidebar";
// import queryClient from "@/lib/react-query";
// import { QueryClientProvider } from "@tanstack/react-query";

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body
//         className={cn(
//           "min-h-screen w-full bg-white text-black flex",
//           inter.className,
//           { "debug-screens": process.env.NODE_ENV === "development" }
//         )}
//       >
//         <Sidebar />
//         <QueryClientProvider client={queryClient}>
//           <div className="p-8 w-full">{children}</div>
//         </QueryClientProvider>
//       </body>
//     </html>
//   );
// }
