"use client";
import { invoke } from "@tauri-apps/api/core";
import Image from "next/image";
import { useEffect } from "react";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Home() {
	useEffect(() => {
		void invoke("show_window");
	}, []);

	return (
		<div className="flex min-h-full w-full flex-col gap-10 px-6 pb-16 pt-10 font-[family-name:var(--font-geist-sans)] sm:px-12">
			<ThemeSwitcher />

			<div className="grid flex-1 grid-rows-[auto_1fr_auto] items-center justify-items-center gap-16 rounded-3xl border border-border/60 bg-card/80 p-8 shadow-sm backdrop-blur sm:p-14">
				<main className="row-start-2 flex w-full flex-col items-center gap-10 text-center sm:items-start sm:text-left">
					<div className="flex flex-col items-center gap-6 sm:items-start sm:text-left">
						<Image
							className="dark:invert"
							src="/next.svg"
							alt="Next.js logo"
							width={180}
							height={38}
							priority
						/>
						<h1 className="text-2xl font-semibold text-foreground sm:text-3xl">
							跨平台 Tauri + Next.js 模板
						</h1>
						<p className="max-w-xl text-sm text-muted-foreground sm:text-base">
							现在可以在顶部栏中使用主题切换，在浅色、暗色、浅灰以及更多配色之间随意切换，快速预览不同风格的效果。
						</p>
					</div>
					<ol className="list-inside list-decimal space-y-2 font-[family-name:var(--font-geist-mono)] text-sm text-muted-foreground">
						<li>
							打开{" "}
							<code className="rounded bg-black/5 px-1 py-0.5 dark:bg-white/10">
								src/app/page.tsx
							</code>{" "}
							亲自尝试。
						</li>
						<li>切换主题，观察窗口标题栏与页面组件自动适配新配色。</li>
					</ol>
				</main>

				<footer className="row-start-3 flex flex-wrap items-center justify-center gap-6 text-sm">
					<a
						className="flex items-center gap-2 hover:underline hover:underline-offset-4"
						href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							aria-hidden
							src="/file.svg"
							alt="File icon"
							width={16}
							height={16}
						/>
						Learn
					</a>
					<a
						className="flex items-center gap-2 hover:underline hover:underline-offset-4"
						href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							aria-hidden
							src="/window.svg"
							alt="Window icon"
							width={16}
							height={16}
						/>
						Examples
					</a>
					<a
						className="flex items-center gap-2 hover:underline hover:underline-offset-4"
						href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							aria-hidden
							src="/globe.svg"
							alt="Globe icon"
							width={16}
							height={16}
						/>
						Go to nextjs.org →
					</a>
				</footer>
			</div>
		</div>
	);
}
