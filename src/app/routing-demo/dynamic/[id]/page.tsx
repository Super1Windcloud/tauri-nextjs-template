import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeSwitcher } from "@/components/theme-switcher";

// Generate static params for static export
export function generateStaticParams() {
	// Generate a few sample dynamic routes for the build
	return Array.from({ length: 5 }, (_, i) => ({
		id: (i + 1).toString(),
	}));
}

export default function DynamicRoutePage({ 
	params 
}: { 
	params: { id: string } 
}) {
	const id = params.id;
	
	// In a real app, you would fetch data based on the id
	// For this demo, we'll just show the id that was passed
	
	return (
		<div className="flex min-h-full w-full flex-col gap-10 px-6 pb-16 pt-10 font-[family-name:var(--font-geist-sans)] sm:px-12">
			<div className="flex justify-between items-center w-full">
				<ThemeSwitcher />
				<div className="text-sm bg-muted px-3 py-1 rounded">
					Current Route: <span className="font-mono">/routing-demo/dynamic/{id}</span>
				</div>
			</div>

			<div className="grid flex-1 grid-rows-[auto_1fr_auto] items-center justify-items-center gap-16 rounded-3xl border border-border/60 bg-card/80 p-8 shadow-sm backdrop-blur sm:p-14">
				<main className="row-start-2 flex w-full flex-col items-center gap-10 text-center sm:items-start sm:text-left">
					<div className="flex flex-col items-center gap-6 sm:items-start">
						<h1 className="text-2xl font-semibold text-foreground sm:text-3xl">
							Dynamic Route Page (ID: {id})
						</h1>
						<p className="max-w-xl text-sm text-muted-foreground sm:text-base">
							Demonstrating dynamic route parameters.
						</p>
					</div>

					<Card className="w-full max-w-2xl">
						<CardHeader>
							<CardTitle>Dynamic Parameters</CardTitle>
							<CardDescription>
								Route: /routing-demo/dynamic/[id] where id is <span className="font-mono">{id}</span>
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-2">
								<h3 className="font-medium">Route Parameters:</h3>
								<div className="bg-muted p-3 rounded">
									<p><span className="font-mono">id:</span> <span className="ml-2">{id}</span></p>
								</div>
								
								<p className="mt-3">
									This dynamic route accepts an ID parameter. The page was pre-built for IDs 
									{Array.from({ length: 5 }, (_, i) => i + 1).join(', ')}.
								</p>
							</div>
							
							<div className="flex flex-wrap gap-2 pt-4">
								<Button variant="outline" asChild>
									<Link href="/routing-demo">← Back to Routing Demo</Link>
								</Button>
								<Button variant="outline" asChild>
									<Link href={`/routing-demo/dynamic/${id === '1' ? '2' : '1'}`}>View Different ID</Link>
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