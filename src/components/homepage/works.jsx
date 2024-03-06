import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Previous Industries"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">Consumer Services</div>
							<div className="work-subtitle">
							</div>
							<div className="work-duration"></div>
						</div>

						<div className="work">
							<div className="work-title">Hospital & Health Care</div>
							<div className="work-subtitle">
							</div>
							<div className="work-duration"></div>
						</div>

						<div className="work">
								<div className="work-title">Logistics and Supply Chain</div>
								<div className="work-subtitle">
								</div>
								<div className="work-duration"></div>
							</div>

							<div className="work">
								<div className="work-title">Retail</div>
								<div className="work-subtitle">
								</div>
								<div className="work-duration"></div>
							</div>

							<div className="work">
								<div className="work-title">Supermarkets</div>
								<div className="work-subtitle">
								</div>
								<div className="work-duration"></div>
							</div>
					</div>

					

					
				}
			/>
		</div>
	);
};

export default Works;