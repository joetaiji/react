import React from 'react';

export default function SnsShare() {	
  return (
    <article className="share">
      <button className="btn open" title="공유하기 목록 : 닫힘">
        <i className="ri-share-line"></i>
        <span className="sr-only">공유하기</span>
      </button>
      <form id="snsForm" name="snsForm" action="" method="post">
        <input type="hidden" name="title" value="" />
        <input type="hidden" name="mid" value="" />
        <input type="hidden" name="url" value="" />
        <input type="submit" value="전송" style={{ display: 'none', height: 0, width: 0 }} />			
      </form>
      <div className="sns-list">
        <ul id="share">
          <li className="kakaotalk"><a href="#share" id="kakao-link-btn" title="새창- 카카오톡으로 내용 공유" onClick={() => { sendKakaoTalk(); return false; }}><span className="sr-only">카카오톡</span></a></li>
          <li className="facebook"><a href="#share" title="새창열림" onClick={() => { snsApi('facebook'); return false; }}><span className="sr-only">페이스북</span></a></li>
          <li className="twitter"><a href="#share" title="새창열림" onClick={() => { snsApi('twitter'); return false; }}><span className="sr-only">트위터</span></a></li>
          <li className="urlShare"><a href="#share" onClick={() => { copyURI(document.location.href); return false; }} className="url"><span className="sr-only">URL 복사</span></a></li>
        </ul>
        <a href="#share" onClick={() => { slideToggleView('#share');; return false; }} className="close sr-only">닫기</a>
      </div>
    </article>
  );
}
