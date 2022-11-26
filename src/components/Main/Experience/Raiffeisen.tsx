import React from 'react';

export const Raiffeisen = () => {
	return (
		<>
			{/* <!-- Raiffeisen --> */}
			<div className="experience__row">
				<span className="experience__date">08/2021</span>
				<div className="experience__history-line">
					<div className="experience__big-dot"></div>
					<div className="experience__line"></div>
				</div>
				<p className="experience__text">
					Was hired by Raiffeisen Bank for{' '}
					<span className="highlight">Data Quality Officer</span> position
				</p>
			</div>

			<div className="experience__row">
				<span className="experience__date small"></span>
				<div className="experience__history-line">
					<div className="experience__dot"></div>
					<div className="experience__line"></div>
				</div>
				<div className="experience__dashed-line"></div>
				<ul className="experience__list">
					<li className="experience__list-item">
						Was responsible for{' '}
						<span className="highlight">developing and upgrading DQIs</span>
						(Data Quality Indicators) via Attacama ONE + SQL queries.
					</li>
					<li className="experience__list-item">
						Representing DQI team and communicating with main data consumers.
					</li>
					<li className="experience__list-item">
						<span className="highlight">Sprint planning</span> and managing
						tasks.
					</li>
					<li className="experience__list-item">
						Solving business related questions about data.
					</li>
				</ul>
			</div>
		</>
	);
};
