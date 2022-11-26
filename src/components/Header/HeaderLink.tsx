import React from 'react';

type Props = {
	href: string;
	text: string;
	index: number;
};

export const HeaderLink: React.FC<Props> = ({ href, text, index }) => {
	return (
		<li id={index.toString()} className="header__nav-list-item">
			<a href={href} className="header__link">
				{text}
			</a>
		</li>
	);
};
