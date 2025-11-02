"use client";

import type { ThemeProviderProps } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const AVAILABLE_THEMES = [
	"light",
	"dark",
	"light-gray",
	"ocean",
	"rose",
] as const;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	return (
		<NextThemesProvider
			attribute="class"
			defaultTheme="light"
			enableSystem
			themes={[...AVAILABLE_THEMES]}
			{...props}
		>
			{children}
		</NextThemesProvider>
	);
}
