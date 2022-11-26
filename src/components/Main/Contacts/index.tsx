import React from 'react';
import telegram from '../../../assets/img/contacts/telegram.svg';
import phone from '../../../assets/img/contacts/phone.svg';
import mail from '../../../assets/img/contacts/mail.svg';

const Contacts = () => {
	return (
		<section className="section contacts">
			<span className="anchor" id="contacts"></span>
			<h2 className="heading">Contacts</h2>
			<ul className="contacts__list">
				<li className="contacts__list-item">
					<img
						className="contacts__social-logo"
						src={telegram}
						alt="Telegram link"
					/>
					<span className="contacts__text">@GeneralPr1nce</span>
				</li>
				<li className="contacts__list-item">
					<img className="contacts__social-logo" src={phone} alt="Phone" />
					<span className="contacts__text">
						<a href="tel:+9998202314" className="link">
							+7(999)820-23-14
						</a>
					</span>
				</li>
				<li className="contacts__list-item">
					<img className="contacts__social-logo" src={mail} alt="Email" />
					<span className="contacts__text">
						<a href="mailto:" className="link">
							Sashas840@gmail.com
						</a>
					</span>
				</li>
			</ul>
		</section>
	);
};
export default Contacts;
