import React from 'react';
import Apartment from '../components/apartment/Apartment';
import HeaderMain from '../components/HeaderMain/HeaderMain';
import Services from '../components/services/Services';

const Home = () => {
	return (
		<div>
			<HeaderMain />
			<Apartment />
			<Services />
		</div>
	);
};

export default Home;