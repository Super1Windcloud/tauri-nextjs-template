"use client";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { WindowTitlebar } from "@/components/window-titlebar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="antialiased">
				<ThemeProvider>
					<div className="flex min-h-screen flex-col bg-background text-foreground">
						<WindowTitlebar />
						<div className="flex-1">{children}</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
