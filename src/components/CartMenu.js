import React from 'react';
import { Badge, ListGroup, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../store/actions/side.menu.action';

function CartMenu() {
	const cartState = useSelector((store) => store.cartState);
	const dispatch = useDispatch();
	const sideMenuState = useSelector((store) => store.sideMenuState);

	const handleClose = () => {
		dispatch(toggle(true)); // sideMenuState
	};

	return (
		<div>
			<Offcanvas
				placement={'end'}
				show={sideMenuState.visible}
				onHide={handleClose}
			>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Sepetim</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<ListGroup>
						{cartState.cartItems.map((cartItem) => {
							return (
								<ListGroup.Item
									key={cartItem.productId}
									as="li"
									className="d-flex justify-content-between align-items-start"
								>
									<div className="ms-2 me-auto">
										<div className="fw-bold">{cartItem.name}</div>{' '}
										{(cartItem.quantity * cartItem.price).toFixed(2)} ₺
									</div>
									<Badge bg="primary" pill>
										{cartItem.quantity}
									</Badge>
								</ListGroup.Item>
							);
						})}
					</ListGroup>
					<ListGroup.Item
						as="li"
						className="d-flex justify-content-between align-items-start"
					>
						Toplam Tutar : {cartState.total.toFixed(2)}
					</ListGroup.Item>
				</Offcanvas.Body>
			</Offcanvas>
		</div>
	);
}

export default CartMenu;
