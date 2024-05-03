import Header from '@/layout/Header'
import { ILayout } from '@/interfaces/interfaces'
import { font } from '@/settings/font'
import { layoutMetadata } from '@/settings/meta'
import '@/styles/index.css'
import Footer from '@/layout/Footer'

export const metadata = layoutMetadata

export default function RootLayout({ children }: ILayout) {
	return (
		<html lang="en">
			<body className={`${font.className} prose-slate`}>
				<div className="wrapper">
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	)
}
