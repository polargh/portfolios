import type {Metadata} from 'next';
import './globals.scss';
import {GeistSans} from 'geist/font/sans';
import {cn} from '@/lib/utils';
import {PHProvider} from '@/server/posthog';
import PlausibleProvider from 'next-plausible';
import Navbar from '@/components/navbar';
import SiteNav from '@/components/site-nav';
import {Toaster} from 'react-hot-toast';
import {ThemeProvider} from '@/components/theme-provider';
import Footer from '@/components/footer';

import localFont from 'next/font/local';
import {Outfit} from 'next/font/google';

export const metadata: Metadata = {
	title: 'Portfolios',
	description: 'A large collection of award-winning FRC and FTC documentation',
};

const fontSans = Outfit({
	subsets: ['latin'],
});

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<PlausibleProvider
					domain="portfolios.hivemindrobotics.net"
					scriptProps={{
						src: 'https://lab.itzpolar.me/js/script.js',
					}}
					selfHosted
				/>
			</head>
			<body className={cn('min-h-screen bg-background antialiased', fontSans.className)}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					{/* <SiteNav />
						{children}
						<Toaster />
						<Footer /> */}
					<div className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
						<div className="m-auto text-center space-y-4 ">
							<h1 className="text-2xl font-semibold">403</h1>
							<p>
								<b>Forbidden</b>, we are currently undergoing a maintenance period, please try again later.
							</p>
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
