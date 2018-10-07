import React from 'react';

const	Card = ({name, email, phone, id})	=>	{
	// const	{name, email, id} = props;
	return	(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw1 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
				<p>{phone}</p>
			</div>
		</div>
		);
};

export default Card;