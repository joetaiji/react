import React, { useEffect, useRef, useState } from 'react';
import { itemData } from '../../constants/filterItems';
import './ItemLayer.css';

const ItemLayer = ({ itemName }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [position, setPosition] = useState({ left: 0, top: 0 });
	const layerRef = useRef(null);
	const itemRef = useRef(null);

	useEffect(() => {
		const handleClick = (e) => {
			if (itemRef.current && !layerRef.current?.contains(e.target)) {
				setIsVisible(false);
			}
		};

		document.addEventListener('mousedown', handleClick);
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, []);

	const handleItemClick = (e) => {
		if (!itemRef.current) return;

		const rect = itemRef.current.getBoundingClientRect();
		const pageCont = document.querySelector('.page-contents')?.offsetWidth - 200 || 0;

		setPosition({
			left: rect.left < pageCont ? rect.left : rect.left - 50,
			top: rect.top + 40
		});
		setIsVisible(true);
	};

	const { title, items } = itemData[itemName] || { title: '', items: [] };

	return (
		<div className="item-layer-container">
			<div 
				ref={itemRef}
				className="item"
				onClick={handleItemClick}
				data-layer={itemName}
			>
				<span className="item-text">{title}</span>
			</div>
			
			{isVisible && (
				<div 
					ref={layerRef}
					className={`${itemName}-layer item-layer`}
					style={{
						left: `${position.left}px`,
						top: `${position.top}px`
					}}
				>
					<div className="item-title">
						<strong>{title}</strong>
						<button className="tooltip">
							<i className="ri-information-fill"></i>
							<span>원하는 분류 태그가 없으면 직접 입력</span>
						</button>
					</div>
					<div className="item-cont">
						<input 
							type="text" 
							className="input-text form-control" 
							placeholder="직접입력" 
						/>
					</div>
					<div className="item-group">
						{items.map((item) => (
							<div key={item.type} className="item">
								<button type="button" className="item-btn">
									{item.name}
								</button>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default ItemLayer;
