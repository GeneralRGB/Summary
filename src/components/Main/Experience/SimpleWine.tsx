import React from 'react';

export const SimpleWine = () => {
	return (
		<>
			{/* <!-- SimpleWine --> */}
			<div className="experience__row">
				<span className="experience__date">08/2019</span>
				<div className="experience__history-line">
					<div className="experience__big-dot"></div>
					<div className="experience__line"></div>
				</div>
				<p className="experience__text">
					Was hired by SimpleWine for{' '}
					<span className="highlight">Data Quality Analyst</span> position
				</p>
			</div>

			{/* <!-- SimpleWine description --> */}
			<div className="experience__row">
				<span className="experience__date small"></span>
				<div className="experience__history-line">
					<div className="experience__dot"></div>
					<div className="experience__line"></div>
				</div>
				<div className="experience__dashed-line"></div>
				<ul className="experience__list last-row-element">
					<li className="experience__list-item">
						Developed{' '}
						<span className="highlight">automated reporting system</span> on the
						Python + SQL stack.
					</li>
					<li className="experience__list-item">
						Wrote a number of SQL scripts to improve the quality of the master
						data.
					</li>
					<li className="experience__list-item">
						Took an important role in discussing and implementing an algorithm
						for <span className="highlight">automatic recalculation</span> of
						the life cycle for wine products.
					</li>
					<li className="experience__list-item">
						Interacted with users and wrote technical specifications for
						Microsoft Navision ERP improvements in order to improve the quality
						and speed of work.
					</li>
					<li className="experience__list-item">
						<span className="highlight">Solved</span> more than 5k issues on
						Service Desk.
					</li>
				</ul>
			</div>
		</>
	);
};
