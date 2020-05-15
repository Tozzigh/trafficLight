import React from "react";
import ReactDOM from "react-dom";

export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedLight: ""
		};
	}
	render() {
		var ciao1 = "";
		var ciao2 = "";
		var ciao3 = "";
		if (this.state.selectedLight == "red") {
			ciao1 = "selected";
		} else if (this.state.selectedLight == "yellow") {
			ciao2 = "selected";
		} else if (this.state.selectedLight == "green") {
			ciao3 = "selected";
		}

		return (
			<div>
				<div className="stick" />
				<div className="traffic">
					<div
						className={"redTraffic " + ciao1}
						onClick={() =>
							this.setState({
								selectedLight: "red"
							})
						}
					/>
					<div
						className={"yellowTraffic " + ciao2}
						onClick={() =>
							this.setState({
								selectedLight: "yellow"
							})
						}
					/>
					<div
						className={"greenTraffic " + ciao3}
						onClick={() =>
							this.setState({
								selectedLight: "green"
							})
						}
					/>
				</div>
			</div>
		);
	}
}
