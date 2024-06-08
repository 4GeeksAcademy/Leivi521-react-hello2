import React from "react";
import Card from "./component/Card";
import Jumbotron from "./component/Jumbotron";
import Navbar from "./component/Navbar";
// import Card from ".component/Card"
//include images into your bundle


//create your first component
const Home = () => {
	return (
			
		<div>
			<Navbar />
			

		
			<Jumbotron />
		

			<Card />
		</div>
	);
};

export default Home;


