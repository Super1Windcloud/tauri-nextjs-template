"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function NestedPage() {
	return (
		<div className="flex min-h-full w-full flex-col gap-10 px-6 pb-16 pt-10 font-[family-name:var(--font-geist-sans)] sm:px-12">
			<div className="flex justify-between items-center w-full">
				<ThemeSwitcher />
				<div className="text-sm bg-muted px-3 py-1 rounded">
					Current Route: <span className="font-mono">/routing-demo/nested-page</span>
				</div>
			</div>

			<div className="grid flex-1 grid-rows-[auto_1fr_auto] items-center justify-items-center gap-16 rounded-3xl border border-border/60 bg-card/80 p-8 shadow-sm backdrop-blur sm:p-14">
				<main className="row-start-2 flex w-full flex-col items-center gap-10 text-center sm:items-start sm:text-left">
					<div className="flex flex-col items-center gap-6 sm:items-start">
						<h1 className="text-2xl font-semibold text-foreground sm:text-3xl">
							Nested Page
						</h1>
						<p className="max-w-xl text-sm text-muted-foreground sm:text-base">
							This is a nested route demonstrating the hierarchy structure.
						</p>
					</div>

					<Card className="w-full max-w-2xl">
						<CardHeader>
							<CardTitle>Nested Routing Example</CardTitle>
							<CardDescription>
								This page is located at /routing-demo/nested-page
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-2">
								<h3 className="font-medium">Route Structure:</h3>
								<pre className="bg-muted p-3 rounded text-sm font-mono">
									{`src/app/
└── routing-demo/
    ├── page.tsx          # Main routing demo page
    ├── nested-page/
    │   └── page.tsx      # This page
    └── section/
        └── subsection/
            └── page.tsx  # Nested subsection page`}
								</pre>
							</div>
							
							<div className="flex flex-wrap gap-2 pt-4">
								<Button variant="outline" asChild>
									<Link href="/routing-demo">← Back to Routing Demo</Link>
								</Button>
								<Button variant="outline" asChild>
									<Link href="/routing-demo/section/subsection">Next: Subsection</Link>
								</Button>
							</div>
						</CardContent>
					</Card>
				</main>

				<footer className="row-start-3 flex flex-wrap items-center justify-center gap-6 text-sm">
					<Link
						className="flex items-center gap-2 hover:underline hover:underline-offset-4"
						href="/"
					>
						← Back to Home
					</Link>
				</footer>
			</div>
		</div>
	);
}