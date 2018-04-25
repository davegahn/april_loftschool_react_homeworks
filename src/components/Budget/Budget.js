import React from 'react';
import './Budget.css';

import { connect } from 'react-redux';

const Budget = (props) => {
	const { profit, marketExpanse, farmExpance, deliveryExpanse } = props;

	return (
		<div className="budget">
			<h2>Бюджет</h2>
			<p>Всего получено денег:
			<span className="t-profit">{profit}</span>
			</p>
			<p>Расходы продавцов:
			<span className="t-sellers">{marketExpanse}</span>
			</p>
			<p>Расходы на ферме:
			<span className="t-farm">{farmExpance}</span>
			</p>
			<p>Расходы на доставку:
			<span className="t-delivery">{deliveryExpanse}</span>
			</p>
			<p>Итого: {profit + marketExpanse + farmExpance + deliveryExpanse}</p>
		</div>
	);
}

const mapStateToProps = state => ({
	profit: state.profit,
	marketExpanse: state.marketExpanse,
	farmExpance: state.farmExpance,
	deliveryExpanse: state.deliveryExpanse
});

export default connect(
	mapStateToProps
)(Budget)
