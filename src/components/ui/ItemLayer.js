import React, { useEffect, useRef, useState } from 'react';
import { itemData } from '../../constants/filterItems';
import './ItemLayer.css';

const ItemLayer = ({ activeLayer, setActiveLayer }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [position, setPosition] = useState({ left: 0, top: 0 });
	const layerRef = useRef(null);

	useEffect(() => {
		const handleClick = (e) => {
			if (layerRef.current && !layerRef.current.contains(e.target)) {
				setIsVisible(false);
				setActiveLayer(null);
			}
		};

		document.addEventListener('mousedown', handleClick);
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, [setActiveLayer]);

	useEffect(() => {
		if (activeLayer) {
			const clickedElement = document.querySelector(`[data-layer="${activeLayer}"]`);
			if (clickedElement) {
				const rect = clickedElement.getBoundingClientRect();
				const container = clickedElement.closest('.table-container');
				const containerRect = container.getBoundingClientRect();

				// 클릭한 요소의 위치를 기준으로 레이어 위치 계산
				setPosition({
					left: rect.left - containerRect.left,
					top: rect.bottom - containerRect.top + 5
				});
				setIsVisible(true);
			}
		} else {
			setIsVisible(false);
		}
	}, [activeLayer]);

	const handleItemClick = (e, item) => {
		const itemElement = e.currentTarget;
		const input = itemElement.querySelector('.form-control');
		const itemBlank = document.querySelector('.item-blank');

		if (input) {
			// input이 있는 경우 (change 이벤트)
			if (itemBlank) {
				itemBlank.innerHTML = input.value;
			}
		} else {
			// input이 없는 경우 (click 이벤트)
			if (itemBlank) {
				itemBlank.innerHTML = itemElement.innerHTML;
			}
		}
	};

	const layerData = itemData[activeLayer];
	if (!isVisible || !layerData) return null;

	return (
		<div 
			ref={layerRef}
			className={`${activeLayer}-layer item-layer`}
			style={{ 
				position: 'absolute',
				left: `${position.left}px`, 
				top: `${position.top}px`,
				zIndex: 1000
			}}
		>
			<div className="item-title">
				<strong>{layerData.title}</strong>						
			</div>					
			<div className="item-group">
				{layerData.items.map((item) => (
					<div 
						key={item.type} 
						className="item"
						onClick={(e) => handleItemClick(e, item)}
					>
						<button 
							type="button" 
							className="item-btn" 
							style={item.image ? { "--profile-image": `url(${item.image})` } : undefined}
							data-first-letter={activeLayer === 'managerItem' && !item.image ? item.name.charAt(0) : undefined}
						>
							{item.name}
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default ItemLayer;
