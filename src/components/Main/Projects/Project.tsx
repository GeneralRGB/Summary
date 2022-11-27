import React from 'react';

type Props = {
	id: number;
	title: string;
	url: string;
	image: string;
};

export const Project: React.FC<Props> = ({ id, title, url, image }) => {
	return (
		<div id={id.toString()} className="project-block">
			<div>
				<img src={image} alt="" />
			</div>
			<a href={url} target="blank" />
			<span className="title">{title}</span>
		</div>
	);
};
