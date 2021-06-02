import React from 'react';
import Apartment from '../components/apartment/Apartment';
import HeaderMain from '../components/HeaderMain/HeaderMain';
import Services from '../components/services/Services';
import Footer from '../shared/footer/Footer';

const Home = () => {
	return (
		<div>
			<HeaderMain />
			<Apartment />
			<Services />
			<Footer/>/>
		</div>
	);
};

export default Home;