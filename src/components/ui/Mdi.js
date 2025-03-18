import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Mdi.css';
import profileImage1 from '../../assets/images/profiles/photo_1.png';
import profileImage2 from '../../assets/images/profiles/photo_2.png';

const Mdi = ({ items, activeItem, onItemClick, onItemClose }) => {
	const [swiper, setSwiper] = useState(null);

	// activeItem이 변경될 때 해당 탭으로 슬라이드
	useEffect(() => {
		if (swiper && activeItem) {
			const activeIndex = items.findIndex(item => item.path === activeItem);
			if (activeIndex !== -1) {
				swiper.slideTo(activeIndex);
			}
		}
	}, [activeItem, items, swiper]);

	const handleCloseAll = () => {
		// 활성 탭을 제외한 나머지 탭만 닫기
		const nonActiveTabs = items.filter(item => item.path !== activeItem);
		nonActiveTabs.forEach(item => onItemClose(item));
	};

	return (
		<div className="mdi-area">
			<Swiper
				modules={[Navigation]}
				slidesPerView="auto"
				spaceBetween={0}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}}
				onSwiper={setSwiper}
				className="mdi-tabs"
			>
				{items.map((item) => (
					<SwiperSlide key={item.id}>
						<button 
							className={`mdi-item ${activeItem === item.path ? 'active' : ''}`}
							onClick={() => onItemClick(item)}
						>
							{item.isDepth3 && <small>{item.isDepth3.parent} &gt; </small>}
							{item.icon && <i className={item.icon}></i>}
							<span>{item.title}</span>
							<i 
								className="ri-close-line" 
								onClick={(e) => {
									e.stopPropagation();
									onItemClose(item);
								}}
							></i>
						</button>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="tab-control">
				<button className="swiper-button swiper-button-prev btn xsm">
					<i className="ri-arrow-left-s-line"></i>
				</button>
				<button className="swiper-button swiper-button-next btn xsm">
					<i className="ri-arrow-right-s-line"></i>
				</button>
				<button className="btn xsm mdi-all-close" onClick={handleCloseAll}>
					<i className="ri-close-line"></i> 전체닫기
				</button>
			</div>

			<div className="user-group">
				<span className="user-icon"><img src={profileImage1} alt="허" /></span>
				<span className="user-icon">허</span>
				<span className="user-icon"><img src={profileImage2} alt="김" /></span>
				<span className="user-icon">김</span>
				<span className="user-icon">조 </span>
				<span className="user-sum">+24명</span>
			</div>			
		
		</div>
	);
};

export default Mdi;
