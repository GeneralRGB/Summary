import React from 'react';

export const MainSkills = () => {
	return (
		<div>
			<p className="about-me__skills-title">Skills</p>
			<ul>
				<li>HTML</li>
				<li>CSS &amp; frameworks:</li>
				<ul>
					<li>SCSS</li>
					<li>LESS</li>
					<li>Tailwind</li>
				</ul>
				<li>JavaScript &amp; TypeScript</li>
				<li>ReactJS:</li>
				<ul>
					<li>Redux Toolkit</li>
					<li>React Router</li>
				</ul>
				<li>Webpack</li>
			</ul>
		</div>
	);
};
