import React, { useState, useEffect } from "react";
import {
	Button,
	Card,
	Container,
	Row,
	Col,
	Form,
	Alert,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function TestButton({ onClick }) {
	return (
		<Button variant="primary" onClick={onClick}>
			{" "}
			Test
		</Button>
	);
}

function TestCards({ TestNames }) {
	return (
		<div className="App">
			<h1>Hello React.</h1>
			{TestNames.map((state, index) => (
				<Card key={index} style={{ margin: "40px", padding: "10px" }}>
					<Card.Body>
						<Card.Title>
							{state.state}, with {state.votes} electoral votes
						</Card.Title>
						<Card.Text>This is a test card.</Card.Text>
						<Button
							onClick={() =>
								alert(
									`${state.state} with ${state.votes} electoral votes`
								)
							}
						>
							{" "}
							Click me{" "}
						</Button>
					</Card.Body>
				</Card>
			))}
		</div>
	);
}

// Main App below

function LastLinkApp() {
	const [count, setCount] = useState(0);
	const TestNames = [
		{ name: "Bob", age: 10 },
		{ name: "Ronny", age: 20 },
		{ name: "Mike", age: 30 },
	];
	const statesElectoralVotes = [
		{ state: "Alabama", votes: 9 },
		{ state: "Alaska", votes: 3 },
		{ state: "Arizona", votes: 11 },
		{ state: "Arkansas", votes: 6 },
		{ state: "California", votes: 54 },
		{ state: "Colorado", votes: 10 },
		{ state: "Connecticut", votes: 7 },
		{ state: "Delaware", votes: 3 },
		{ state: "District of Columbia", votes: 3 },
		{ state: "Florida", votes: 30 },
		{ state: "Georgia", votes: 16 },
		{ state: "Hawaii", votes: 4 },
		{ state: "Idaho", votes: 4 },
		{ state: "Illinois", votes: 19 },
		{ state: "Indiana", votes: 11 },
		{ state: "Iowa", votes: 6 },
		{ state: "Kansas", votes: 6 },
		{ state: "Kentucky", votes: 8 },
		{ state: "Louisiana", votes: 8 },
		{ state: "Maine", votes: 4 },
		{ state: "Maryland", votes: 10 },
		{ state: "Massachusetts", votes: 11 },
		{ state: "Michigan", votes: 15 },
		{ state: "Minnesota", votes: 10 },
		{ state: "Mississippi", votes: 6 },
		{ state: "Missouri", votes: 10 },
		{ state: "Montana", votes: 4 },
		{ state: "Nebraska", votes: 5 },
		{ state: "Nevada", votes: 6 },
		{ state: "New Hampshire", votes: 4 },
		{ state: "New Jersey", votes: 14 },
		{ state: "New Mexico", votes: 5 },
		{ state: "New York", votes: 28 },
		{ state: "North Carolina", votes: 16 },
		{ state: "North Dakota", votes: 3 },
		{ state: "Ohio", votes: 17 },
		{ state: "Oklahoma", votes: 7 },
		{ state: "Oregon", votes: 8 },
		{ state: "Pennsylvania", votes: 19 },
		{ state: "Rhode Island", votes: 4 },
		{ state: "South Carolina", votes: 9 },
		{ state: "South Dakota", votes: 3 },
		{ state: "Tennessee", votes: 11 },
		{ state: "Texas", votes: 40 },
		{ state: "Utah", votes: 6 },
		{ state: "Vermont", votes: 3 },
		{ state: "Virginia", votes: 13 },
		{ state: "Washington", votes: 12 },
		{ state: "West Virginia", votes: 4 },
		{ state: "Wisconsin", votes: 10 },
		{ state: "Wyoming", votes: 3 },
	];

	const totalVotes = statesElectoralVotes.reduce(
		(sum, state) => sum + state.votes,
		0
	);

	return (
		<Container
			className="d-flex justify-content-center align-items-center"
			style={{
				minHeight: "100vh",
				minWidth: "100vw",
				backgroundColor: "black",
				border: "10px solid yellow",
			}}
		>
			<Row className="d-flex justify-content-center align-items-center w-100 col-6">
				<Col className="text-center ">
					<div className="App" style={{ color: "white" }}>
						<h1> {totalVotes} .</h1>
						<h2>
							{" "}
							You have clicked the button below {count} times
						</h2>
						<TestButton
							onClick={() => setCount(count + 1)}
						></TestButton>
						<TestCards TestNames={statesElectoralVotes}></TestCards>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default LastLinkApp;
