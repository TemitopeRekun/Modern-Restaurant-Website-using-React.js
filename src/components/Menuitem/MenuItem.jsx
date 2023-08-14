import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
	<div className="app__menuItems">
		<div className="app__menuItems-head">
			<div className="app__menuItems-name">
				<p className="p__cormorant" style={{ color: "DCCA87" }}>
					{title}
				</p>
			</div>

			<div className="app__menuItems-name">
				<p className="p__cormorant">{price}</p>
			</div>
		</div>
	</div>
);

export default MenuItem;
