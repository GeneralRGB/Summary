import React from 'react';
import { Project } from './Project';
import reactPizza from '../../../assets/img/projects/react-pizza.png';
import photos from '../../../assets/img/projects/photos.png';
import todo from '../../../assets/img/projects/todo.png';
import studentsForm from '../../../assets/img/projects/studentsForm.png';
import articles from '../../../assets/img/projects/articles.png';
import pairGame from '../../../assets/img/projects/pairGame.jpg';
import euclid from '../../../assets/img/projects/euclid.png';

type Project = {
	title: string;
	image: string;
	url: string;
};

console.log(reactPizza);

const projects: Project[] = [
	{
		title: 'Pizza Shop',
		image: reactPizza,
		url: 'https://react-pizza-ru.netlify.app/',
	},
	{
		title: 'Photo library',
		image: photos,
		url: 'https://generalrgb.github.io/react-photos/',
	},
	{
		title: 'Todo app',
		image: todo,
		url: 'https://great-todo-application.netlify.app/',
	},
	{
		title: 'Students Form',
		image: studentsForm,
		url: 'https://generalrgb-students-form.netlify.app/',
	},
	{
		title: 'Articles',
		image: articles,
		url: 'https://general-articles.netlify.app/',
	},
	{
		title: 'Pair game',
		image: pairGame,
		url: 'https://remarkable-twilight-pair-game.netlify.app/',
	},
	{
		title: 'Euclid',
		image: euclid,
		url: 'https://euclid-general.netlify.app/',
	},
];

export const Projects = () => {
	return (
		<section className="section projects">
			<span className="anchor" id="projects"></span>
			<h2 className="heading">Projects</h2>
			<div className="projects__list">
				{projects.map((el, index) => (
					<Project id={index} title={el.title} image={el.image} url={el.url} />
				))}
			</div>
		</section>
	);
};
