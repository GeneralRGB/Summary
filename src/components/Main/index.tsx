import React from 'react';
import AboutMe from './AboutMe';
import Contacts from './Contacts';
import { Experience } from './Experience';
import { Projects } from './Projects';

const Main = () => {
	return (
		<main className="main">
			<AboutMe />
			<Experience />
			<Projects />
			<Contacts />
		</main>
	);
};

export default Main;
