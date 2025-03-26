export const tableColumns = [
    { className: 'w3', label: '' },
    { className: 'w7', label: '구분' },
    { className: '', label: '프로젝트명' },
    { className: 'w10', label: '발주처' },
    { className: 'w6', label: '부서' },
    { className: 'w6', label: '담당자' },
    { className: 'w7', label: '계약금액' },
    { className: 'w7', label: '매출' },
    { className: 'w7', label: '미수' },
    { className: 'w9', label: '계약일' },
    { className: 'w9', label: '종료일' },
    { className: 'w5', label: '상태' },
    { className: 'w6', label: '매출법인', hidden: true },
    { className: 'w5', label: '관리번호', hidden: true }
];

export const tableRows = [
    {
        id: 1,
        users: [
            { type: 'image', value: '/images/photo.png', alt: 'user' },
            { type: 'text', value: '김' },
            { type: 'text', value: '정' },
            { type: 'sum', value: '+2명' }
        ],
        type: '클라우드 이관',
        project: '양성자가속기 장비이력관리시스템 고도화 및 유지보수 위탁용역',
        orderer: '한국원자력연구원',
        department: 'MX',
        manager: {
            name: '길기전'
        },
        contractAmount: '51,840,000',
        sales: '0',
        unpaid: '0',
        contractDate: '2024-08-30',
        endDate: '2024-12-12',
        status: { className: 'before', text: '착수전' },
        salesCorp: '플랜파트너스',
        managementNumber: '15234596'
    },
    {
        id: 2,
        users: [
            { type: 'image', value: '/images/photo.png', alt: 'user' },
            { type: 'text', value: '김' },
            { type: 'text', value: '정' },
            { type: 'sum', value: '+2명' }
        ],
        type: '홈페이지구축, 유지보수',
        project: '2024년 연구개발특구진흥재단 홈페이지 기능 개선 및 유지보수 용역',
        orderer: '(재)연구개발특구진흥재단',
        department: 'EX',
        manager: {
            name: '김정서'
        },
        contractAmount: '40,000,000',
        sales: '0',
        unpaid: '0',
        contractDate: '2025-01-30',
        endDate: '2025-05-12',
        status: { className: 'ing', text: '진행중' },
        salesCorp: '플랜파트너스',
        managementNumber: '15234596'
    }
]; 