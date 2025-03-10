import React, { useEffect } from 'react';

const typeItem = [
		{"type": "type1", "name": "홈페이지 구축"}, 
		{ "type": "type2", "name": "유지보수" }, 
		{ "type": "type3", "name": "디자인" }, 
		{ "type": "type4", "name": "클라우드 이관" }, 
		{ "type": "type5", "name": "홍보/이벤트" }, 
		{ "type": "type6", "name": "컨설팅" }, 
		{ "type": "type7", "name": "내부거래" }
	],
	deptItem = [
		{ "type": "dept1", "name": "EX 사업부" },
		{ "type": "dept2", "name": "MX 사업부" },
		{ "type": "dept3", "name": "PX 인사부" },
		{ "type": "dept4", "name": "AX 연구소" },
		{ "type": "dept5", "name": "PX 재무회계부" },
		{ "type": "dept6", "name": "CX 영업부" },
		{ "type": "dept7", "name": "지최일만" }
	],
	corpItem = [
		{ "type": "corp1", "name": "플랜아이" },
		{ "type": "corp2", "name": "플랜파트너스" },
		{ "type": "corp3", "name": "아누타" },
		{ "type": "corp4", "name": "와이브릿지" }
	],
	managerItem = [
		{ "type": "manager1", "name": "김소영" },
		{ "type": "manager2", "name": "조정연" },
		{ "type": "manager3", "name": "김승법" },
		{ "type": "manager4", "name": "류혜정" },
		{ "type": "manager5", "name": "이상민" }
	],
	statusItem = [
		{ "type": "status1", "name": "착수전" },
		{ "type": "status2", "name": "진행" },
		{ "type": "status3", "name": "보류" },
		{ "type": "status4", "name": "완료" }
	];

const itemData = {
	typeItem: { title: '프로젝트 분류', items: typeItem },
	deptItem: { title: '부서', items: deptItem },
	corpItem: { title: '매출법인', items: corpItem },
	managerItem: { title: '담당자', items: managerItem },
	statusItem: { title: '진행상태', items: statusItem }
};

export default function FilterItem({ itemName }) {
	useEffect(() => {
		const handleItemAddClick = (e) => {
			const filterItem = e.target.closest('.filter-item');
			filterItem.classList.toggle('active');
		};

		const handleDocumentClick = (e) => {
			if (!e.target.closest('.filter-item')) {
				document.querySelectorAll('.filter-item.active').forEach(item => {
					item.classList.remove('active');
				});
			}
		};

		const handleItemBtnClick = (e) => {
			const item = e.target.closest('.item');
			const iconClose = document.createElement('i');
			iconClose.classList.add('ri-close-line');
			if (!item.classList.contains('selected')) {
				item.classList.add('selected');
				const itemClone = item.cloneNode(true);
				itemClone.appendChild(iconClose.cloneNode(true));
				const filterItem = item.closest('.filter-item');
				filterItem.querySelector('.item-cont').prepend(itemClone);
				const itemLayerClone = item.cloneNode(true);
				itemLayerClone.appendChild(iconClose.cloneNode(true));
				filterItem.querySelector('.item-layer .item-cont').prepend(itemLayerClone);
			}
		};

		document.querySelectorAll('.item-add').forEach(button => {
			button.addEventListener('click', handleItemAddClick);
		});

		document.addEventListener('click', handleDocumentClick);

		document.querySelectorAll('.item-btn').forEach(button => {
			button.addEventListener('click', handleItemBtnClick);
		});

		return () => {
			document.querySelectorAll('.item-add').forEach(button => {
				button.removeEventListener('click', handleItemAddClick);
			});
			document.removeEventListener('click', handleDocumentClick);
			document.querySelectorAll('.item-btn').forEach(button => {
				button.removeEventListener('click', handleItemBtnClick);
			});
		};
	}, []);

	const renderItems = (items) => {
		return items.map((item) => (
			<div className="item" data-item={item.type} key={item.type}>
				<button type="button" className="item-btn">{item.name}</button>
			</div>
		));
	};

	const { title, items } = itemData[itemName];

	return (
		<div className="filter-item type-item">
			<div className="item-title">
				<strong>{title}</strong>
			</div>
			<button className="item-add" aria-expanded="false">
				<i className="ri-add-circle-fill"></i><span className="sr-only">열기</span>
			</button>
			<div className="item-cont"></div>
			<div className="item-layer">
				<div className="item-title">
					<strong></strong>
					<button className="tooltip">
						<i className="ri-information-fill"></i>
						<span>원하는 분류 태그가 없으면 직접 입력</span>
					</button>
				</div>
				<div className="item-cont">
					<input type="text" className="input-text form-control" placeholder="직접입력" />
				</div>
				<div className="item-group">
					{renderItems(items)}
				</div>
			</div>
		</div>
	);
}
