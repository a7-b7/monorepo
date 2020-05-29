import React from 'react';

const Card = (props)=> {
    const { title='Inbox', icon='fa-envelope', text='Update your password and secure your account' } = props;
    return (
		<div className="row cursor mb_30">
			<a href="http://localhost/camden/mr/dashboard/login_security">
				<div className="pl-block">
				<div className="card mr_shadow p_5">
					<div className="card-body">
						<i className={`fa ${icon} fa-2x mb_10`}></i>
						<h5 className="text_bold text_secondary mb_10 d-flex align-items-center"><span>{title}</span><img src="https://propertyloop.co.uk/assets/images/pl-icons/right-arrow.svg" alt="right arrow" className="ml_10"/></h5>
						<p className="m_0">{text}</p>
					</div>
				</div>
				</div>
			</a>
		</div>);
}

export default Card;
