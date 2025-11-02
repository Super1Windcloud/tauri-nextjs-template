"use client";

import clsx from "clsx";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

type ThemeOption = {
	label: string;
	value: string;
	swatch: string;
};

const THEME_OPTIONS: ThemeOption[] = [
	{
		value: "light",
		label: "默认",
		swatch: "bg-gradient-to-br from-background via-card to-primary/10",
	},
	{
		value: "dark",
		label: "暗色",
		swatch: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700",
	},
	{
		value: "light-gray",
		label: "浅灰",
		swatch: "bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300",
	},
	{
		value: "ocean",
		label: "湛蓝",
		swatch: "bg-gradient-to-br from-cyan-200 via-sky-200 to-sky-400",
	},
	{
		value: "rose",
		label: "暮霞",
		swatch: "bg-gradient-to-br from-rose-100 via-red-200 to-orange-200",
	},
];

export function ThemeSwitcher() {
	const { theme, resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const activeTheme = useMemo(() => {
		if (!mounted) return "";
		if (theme === "system") {
			return resolvedTheme ?? "";
		}
		return theme ?? "";
	}, [mounted, theme, resolvedTheme]);

	return (
		<section className="w-full rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/60">
			<header className="mb-4 flex flex-wrap items-center justify-between gap-3">
				<div>
					<p className="text-base font-semibold text-foreground">主题切换</p>
					<p className="text-sm text-muted-foreground">
						选择喜欢的配色方案，立即应用到整个界面。
					</p>
				</div>
			</header>
			<div className="flex flex-wrap gap-3">
				{THEME_OPTIONS.map(({ value, label, swatch }) => {
					const isActive = activeTheme === value;
					return (
						<button
							key={value}
							type="button"
							data-theme-option={value}
							aria-pressed={isActive}
							onClick={() => setTheme(value)}
							className={clsx(
								"group flex items-center gap-3 rounded-2xl border px-3 py-2 transition-[border-color,box-shadow,background-color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
								isActive
									? "border-primary bg-primary text-primary-foreground shadow"
									: "border-border/70 bg-background/80 text-foreground hover:border-primary/50 hover:bg-accent/60",
							)}
						>
							<span
								aria-hidden
								className={clsx(
									"h-10 w-10 rounded-xl border border-white/40 shadow-sm transition group-hover:scale-105 group-focus-visible:scale-105",
									swatch,
								)}
							/>
							<span className="text-sm font-medium">{label}</span>
						</button>
					);
				})}
			</div>
		</section>
	);
}
