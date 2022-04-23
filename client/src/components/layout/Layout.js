import HeaderNavbar from './HeaderNavbar';
import Footer from './Footer';

export default function Layout({ children }) {
	return (
		<>
			<HeaderNavbar />
			{children}
			<Footer />
		</>
	);
}
