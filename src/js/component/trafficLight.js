import React from "react";
import ReactDOM from "react-dom";

class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedLight: null
		};
	}
	render() {
		return (
			<div>
				<div className="stick" />
				<div className="traffic">
					<div
						className="redTraffic"
						onClick={this.setState({ selectedLight: "red" })}
					/>
					<div
						className="yellowTraffic"
						onClick={this.setState({ selectedLight: "yellow" })}
					/>
					<div
						className="greenTraffic"
						onClick={this.setState({ selectedLight: "green" })}
					/>
				</div>
			</div>
		);
	}
}
