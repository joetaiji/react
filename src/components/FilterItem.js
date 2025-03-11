import React, { useEffect, useCallback, useRef } from 'react';
import { itemData } from '../constants/filterItems';

// Constants
const SELECTORS = {
	FILTER_ITEM: '.filter-item',
	ITEM_ADD: '.item-add',
	ITEM_BTN: '.item-btn',
	ITEM: '.item',
	ITEM_CONT: '.item-cont',
	ITEM_LAYER: '.item-layer'
};

const CLASSES = {
	ACTIVE: 'active',
	SELECTED: 'selected',
	CLOSE_ICON: 'ri-close-line'
};

// Utility functions
const createCloseIcon = () => {
	const iconClose = document.createElement('i');
	iconClose.classList.add(CLASSES.CLOSE_ICON);
	return iconClose;
};

const createItemCloneWithCloseIcon = (item) => {
	const itemClone = item.cloneNode(true);
	itemClone.appendChild(createCloseIcon());
	return itemClone;
};

export default function FilterItem({ itemName }) {
	const filterItemRef = useRef(null);

	const handleItemAddClick = useCallback((e) => {
		const filterItem = e.target.closest(SELECTORS.FILTER_ITEM);
		if (filterItem) {
			filterItem.classList.toggle(CLASSES.ACTIVE);
		}
	}, []);

	const handleDocumentClick = useCallback((e) => {
		if (!e.target.closest(SELECTORS.FILTER_ITEM)) {
			document.querySelectorAll(`${SELECTORS.FILTER_ITEM}.${CLASSES.ACTIVE}`).forEach(item => {
				item.classList.remove(CLASSES.ACTIVE);
			});
		}
	}, []);

	const handleItemBtnClick = useCallback((e) => {
		const item = e.target.closest(SELECTORS.ITEM);
		if (!item?.classList.contains(CLASSES.SELECTED)) {
			item.classList.add(CLASSES.SELECTED);
			
			const filterItem = item.closest(SELECTORS.FILTER_ITEM);
			const itemClone = createItemCloneWithCloseIcon(item);
			const itemLayerClone = createItemCloneWithCloseIcon(item);

			filterItem.querySelector(SELECTORS.ITEM_CONT).prepend(itemClone);
			filterItem.querySelector(`${SELECTORS.ITEM_LAYER} ${SELECTORS.ITEM_CONT}`).prepend(itemLayerClone);
		}
	}, []);

	useEffect(() => {
		const currentFilterItem = filterItemRef.current;
		if (!currentFilterItem) return;

		const itemAddButton = currentFilterItem.querySelector(SELECTORS.ITEM_ADD);
		const itemButtons = currentFilterItem.querySelectorAll(SELECTORS.ITEM_BTN);

		// Add event listeners
		if (itemAddButton) {
			itemAddButton.addEventListener('click', handleItemAddClick);
		}

		document.addEventListener('click', handleDocumentClick);

		itemButtons.forEach(button => {
			button.addEventListener('click', handleItemBtnClick);
		});

		// Cleanup event listeners
		return () => {
			if (itemAddButton) {
				itemAddButton.removeEventListener('click', handleItemAddClick);
			}
			document.removeEventListener('click', handleDocumentClick);
			itemButtons.forEach(button => {
				button.removeEventListener('click', handleItemBtnClick);
			});
		};
	}, [handleItemAddClick, handleDocumentClick, handleItemBtnClick]);

	const renderItems = useCallback((items) => {
		return items.map((item) => (
			<div className="item" data-item={item.type} key={item.type}>
				<button type="button" className="item-btn">{item.name}</button>
			</div>
		));
	}, []);

	const { title, items } = itemData[itemName];

	return (
		<div className="filter-item type-item" ref={filterItemRef}>
			<div className="item-title">
				<strong>{title}</strong>
			</div>
			<button className="item-add" aria-expanded="false">
				<i className="ri-add-circle-fill"></i>
				<span className="sr-only">열기</span>
			</button>
			<div className="item-cont"></div>
			<div className="item-layer">
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
					{renderItems(items)}
				</div>
			</div>
		</div>
	);
}
