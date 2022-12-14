import React, { useState } from "react";
import NavLink from "./NavLink/NavLink";
import { MdMenu } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
	let [expanded, setExpanded] = useState(false);

	const toggleNavbar = () => {
		setExpanded((prevState) => (expanded = !prevState));
	};

	const hideNavbar = () => {
		setExpanded(false);
	};

	const navLinksState = expanded ? " expanded" : "";

	return (
		<div className="navbar">
			<div className="navbar__content content-container-fluid">
				<a className="navbar__title" href="/">
					<h1>Abderrahmane</h1>
					
				</a>
				<button
					className="navbar__menu"
					onClick={toggleNavbar}
					aria-label="Toggle nav bar"
				>
					<MdMenu />
				</button>
				<div className={`navbar-links${navLinksState}`}>
					
					<NavLink link="#about" hide={hideNavbar}>
						À propos de moi
					</NavLink>
					<NavLink link="/#skills" hide={hideNavbar}>
						Mes Technologies
					</NavLink>
					<NavLink link="/#work" hide={hideNavbar}>
						Mes Projets
					</NavLink>
					<NavLink link="/#contact" hide={hideNavbar}>
						Contact
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Navbar;