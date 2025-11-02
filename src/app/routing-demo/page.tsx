"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function RoutingDemoPage() {
	const router = useRouter();
	const pathname = usePathname();
	const [activeTab, setActiveTab] = useState("internal");
	const [currentRoute, setCurrentRoute] = useState(pathname);

	// Function to update current route for display
	const updateCurrentRoute = (path: string) => {
		setCurrentRoute(path);
	};

	return (
		<div className="flex min-h-full w-full flex-col gap-10 px-6 pb-16 pt-10 font-[family-name:var(--font-geist-sans)] sm:px-12">
			<div className="flex justify-between items-center w-full">
				<ThemeSwitcher />
				<div className="text-sm bg-muted px-3 py-1 rounded">
					Current Route: <span className="font-mono">{currentRoute}</span>
				</div>
			</div>

			<div className="grid flex-1 grid-rows-[auto_1fr_auto] items-center justify-items-center gap-16 rounded-3xl border border-border/60 bg-card/80 p-8 shadow-sm backdrop-blur sm:p-14">
				<main className="row-start-2 flex w-full flex-col items-center gap-10 text-center sm:items-start sm:text-left">
					<div className="flex flex-col items-center gap-6 sm:items-start">
						<h1 className="text-2xl font-semibold text-foreground sm:text-3xl">
							Routing Components Demo
						</h1>
						<p className="max-w-xl text-sm text-muted-foreground sm:text-base">
							Explore different navigation and routing patterns available in this Next.js application.
						</p>
					</div>

					<Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-4xl">
						<TabsList className="grid w-full grid-cols-4">
							<TabsTrigger value="internal">Internal Links</TabsTrigger>
							<TabsTrigger value="programmatic">Programmatic</TabsTrigger>
							<TabsTrigger value="nested">Nested Routes</TabsTrigger>
							<TabsTrigger value="dynamic">Dynamic Routes</TabsTrigger>
						</TabsList>
						<TabsContent value="internal" className="space-y-6">
							<Card>
								<CardHeader>
									<CardTitle>Internal Navigation</CardTitle>
									<CardDescription>
										Navigation within the application using Next.js Link component
									</CardDescription>
								</CardHeader>
								<CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<Button variant="outline" asChild>
										<Link href="/">Home Page</Link>
									</Button>
									<Button variant="outline" asChild>
										<Link href="/routing-demo/nested-page">Nested Page</Link>
									</Button>
									<Button variant="outline" asChild>
										<Link href="/routing-demo/dynamic/42">Dynamic Route</Link>
									</Button>
									<Button variant="outline" asChild>
										<Link href="/routing-demo/with-params?category=tech&tag=react">With Query Params</Link>
									</Button>
								</CardContent>
							</Card>
						</TabsContent>
						<TabsContent value="programmatic" className="space-y-6">
							<Card>
								<CardHeader>
									<CardTitle>Programmatic Navigation</CardTitle>
									<CardDescription>
										Navigate using the useRouter hook from Next.js
									</CardDescription>
								</CardHeader>
								<CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<Button 
										variant="outline" 
										onClick={() => {
											router.push("/");
											updateCurrentRoute("/");
										}}
									>
										Go to Home (Push)
									</Button>
									<Button 
										variant="outline" 
										onClick={() => {
											router.replace("/routing-demo/nested-page");
											updateCurrentRoute("/routing-demo/nested-page");
										}}
									>
										Replace with Nested Page
									</Button>
									<Button 
										variant="outline" 
										onClick={() => router.back()}
									>
										Go Back
									</Button>
									<Button 
										variant="outline" 
										onClick={() => router.forward()}
									>
										Go Forward
									</Button>
								</CardContent>
							</Card>
						</TabsContent>
						<TabsContent value="nested" className="space-y-6">
							<Card>
								<CardHeader>
									<CardTitle>Nested Routing</CardTitle>
									<CardDescription>
										Explore nested route structures
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<Button variant="outline" asChild>
											<Link href="/routing-demo/nested-page">Nested Page</Link>
										</Button>
										<Button variant="outline" asChild>
											<Link href="/routing-demo/section/subsection">Nested Section</Link>
										</Button>
									</div>
									<Accordion type="single" collapsible className="w-full">
										<AccordionItem value="item-1">
											<AccordionTrigger>Route Structure</AccordionTrigger>
											<AccordionContent>
												<ul className="space-y-2 text-sm">
													<li className="flex items-center">
														<span className="mr-2">├─</span> 
														<span className="font-mono">/routing-demo</span>
													</li>
													<li className="flex items-center">
														<span className="ml-4 mr-2">├─</span> 
														<span className="font-mono">nested-page</span>
													</li>
													<li className="flex items-center">
														<span className="ml-4 mr-2">└─</span> 
														<span className="font-mono">section/subsection</span>
													</li>
												</ul>
											</AccordionContent>
										</AccordionItem>
									</Accordion>
								</CardContent>
							</Card>
						</TabsContent>
						<TabsContent value="dynamic" className="space-y-6">
							<Card>
								<CardHeader>
									<CardTitle>Dynamic Routes</CardTitle>
									<CardDescription>
										Navigation with dynamic parameters
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
										<Button variant="outline" asChild>
											<Link href="/routing-demo/dynamic/123">User ID: 123</Link>
										</Button>
										<Button variant="outline" asChild>
											<Link href="/routing-demo/dynamic/456">User ID: 456</Link>
										</Button>
										<Button variant="outline" asChild>
											<Link href="/routing-demo/dynamic/789">User ID: 789</Link>
										</Button>
									</div>
									<div className="mt-4 text-sm text-muted-foreground">
										<p>Dynamic routes allow you to create pages based on runtime parameters.</p>
										<p className="mt-2 font-mono">Example: /routing-demo/dynamic/[id]</p>
									</div>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>

					<div className="w-full max-w-4xl space-y-6">
						<Card>
							<CardHeader>
								<CardTitle>Navigation Patterns</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<h3 className="font-medium">1. Static Navigation</h3>
									<p className="text-sm text-muted-foreground">
										Using the Link component for static routes. This enables client-side navigation without full page reloads.
									</p>

									<h3 className="font-medium mt-4">2. Programmatic Navigation</h3>
									<p className="text-sm text-muted-foreground">
										Using useRouter hook for navigation based on user actions or conditions. 
										Methods include push(), replace(), back(), and forward().
									</p>

									<h3 className="font-medium mt-4">3. Nested Routes</h3>
									<p className="text-sm text-muted-foreground">
										Organizing routes in a hierarchical structure using nested folder conventions.
									</p>

									<h3 className="font-medium mt-4">4. Dynamic Routes</h3>
									<p className="text-sm text-muted-foreground">
										Creating routes with dynamic parameters using bracket syntax [param] in folder names.
									</p>
								</div>
							</CardContent>
						</Card>
					</div>
				</main>

				<footer className="row-start-3 flex flex-wrap items-center justify-center gap-6 text-sm">
					<Link
						className="flex items-center gap-2 hover:underline hover:underline-offset-4"
						href="https://nextjs.org/docs/app/building-your-application/routing"
						target="_blank"
						rel="noopener noreferrer"
					>
						Next.js Routing Docs →
					</Link>
				</footer>
			</div>
		</div>
	);
}