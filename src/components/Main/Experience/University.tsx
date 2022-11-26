import React from 'react';

export const University = () => {
	return (
		<>
			{/* Entered University */}
			<div className="experience__row">
				<span className="experience__date">09/2015</span>
				<div className="experience__history-line">
					<div className="experience__big-dot"></div>
					<div className="experience__line"></div>
				</div>
				<p className="experience__text">
					<span className="highlight">Enrolled</span> at the Moscow State
					Institute of International Relations in a “
					<span className="highlight">Business Informatics</span>” program of
					bachelors degree
				</p>
			</div>

			{/* <!-- 1st Year --> */}
			<div className="experience__row">
				<span className="experience__date small">1st Year</span>
				<div className="experience__history-line">
					<div className="experience__dot"></div>
					<div className="experience__line"></div>
				</div>
				<div className="experience__dashed-line"></div>
				<ul className="experience__list">
					<li className="experience__list-item">
						As part of the educational practice,
						<span className="highlight">
							created
							<a
								href="https://sashas840.wixsite.com/management-company"
								className="link"
								target="_blank"
							>
								website
							</a>
						</span>
						for Real estate agency ООО "Управляющая компания" via WIX website
						creating service.
					</li>
					<li className="experience__list-item">
						Also, was responsible for photographing all facilities and
						management of advertisement company for the website.
					</li>
				</ul>
			</div>

			{/* <!-- 2nd Year --> */}
			<div className="experience__row">
				<span className="experience__date small">2nd Year</span>
				<div className="experience__history-line">
					<div className="experience__dot"></div>
					<div className="experience__line"></div>
				</div>
				<div className="experience__dashed-line"></div>
				<ul className="experience__list">
					<li className="experience__list-item">
						As part of the educational practice, worked at IXcellerate data
						center.
					</li>
					<li className="experience__list-item">
						Main <span className="highlight">responsibilities</span> were:
						<ul className="experience__list experience__sublist">
							<li className="experience__list-item">
								Providing technical assistance
							</li>
							<li className="experience__list-item">Equipment audit</li>
							<li className="experience__list-item">
								Control of work on the installation of racks
							</li>
							<li className="experience__list-item">Work with documents.</li>
						</ul>
					</li>
				</ul>
			</div>

			{/* <!-- 3rd Year --> */}
			<div className="experience__row">
				<span className="experience__date small">3rd Year</span>
				<div className="experience__history-line">
					<div className="experience__dot"></div>
					<div className="experience__line"></div>
				</div>
				<div className="experience__dashed-line"></div>
				<ul className="experience__list">
					<li className="experience__list-item">
						Entered the top three best students among all student on the same
						course.
					</li>
					<li className="experience__list-item">
						As part of the educational practice, worked at “Likom” company,
						which was providing technical support to other companies.
					</li>
				</ul>
			</div>

			{/* <!-- 4th Year --> */}
			<div className="experience__row">
				<span className="experience__date small">4th Year</span>
				<div className="experience__history-line">
					<div className="experience__dot"></div>
					<div className="experience__line"></div>
				</div>
				<div className="experience__dashed-line"></div>
				<ul className="experience__list last-row-element">
					<li className="experience__list-item">
						Received the <span className="highlight">highest score</span> in the
						group at the defense of the diploma.
					</li>
				</ul>
			</div>
		</>
	);
};
