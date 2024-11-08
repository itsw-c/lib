import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="logo">도서관 로고</div>
      <nav>
        <ul>
          <li><a href="#">홈</a></li>
          <li><a href="#">도서 목록</a></li>
          <li><a href="#">공지사항</a></li>
          <li><a href="#">문의하기</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
