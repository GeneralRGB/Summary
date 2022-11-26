import React from 'react';
import { Raiffeisen } from './Raiffeisen';
import { SimpleWine } from './SimpleWine';
import { University } from './University';

export const Experience = () => {
	return (
		<section className="section experience">
			<span className="anchor" id="experience"></span>
			<h2 className="heading">Experience</h2>
			<University />
			<SimpleWine />
			<Raiffeisen />
			<div className="experience__row">
				<span className="experience__date">...</span>
				<div className="experience__history-line">
					<div className="experience__big-dot"></div>
				</div>
				<p className="experience__text"></p>
			</div>
		</section>
	);
};
