import React from 'react';
import myPhoto from '../../../assets/img/about-me/my_photo.png';
import { MainSkills } from './MainSkills';
import { OtherSkills } from './OtherSkills';

const AboutMe: React.FC = () => {
	return (
		<section className="section about-me">
			<span className="anchor" id="about-me"></span>
			<h2 className="heading">About me</h2>
			<div className="about-me__div">
				<div className="about-me__text-div">
					<p className="about-me__name">Aleksandr Serikov</p>
					<p className="about-me__profession">Front-End Web Developer</p>
					<div className="about-me__skills">
						<MainSkills />
						<OtherSkills />
					</div>
					<p></p>
					<p className="about-me__paragraph">
						If you're interested in some of my projects, you can go to
						<a href="#projects" className="link">
							Projects
						</a>
						section.
					</p>
				</div>
				<img src={myPhoto} alt="My photo" className="about-me__photo" />
			</div>
		</section>
	);
};

export default AboutMe;
