import React from 'react';
import img from '../../assets/img/header/Cloud 1.png';
import { HeaderLink } from './HeaderLink';

const links = [
	{ link: '#about-me', text: 'About me' },
	{ link: '#experience', text: 'Experience' },
	{ link: '#projects', text: 'Projects' },
	{ link: '#contacts', text: 'Contacts' },
];

const Header: React.FC = () => {
	return (
		<header className="header">
			<div className="header-content">
				<img src={img} alt="" className="header__img" />
				<nav>
					<ul className="header__nav-list">
						{links.map(({ link, text }, index) => (
							<HeaderLink index={index} href={link} text={text} />
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};
export default Header;
