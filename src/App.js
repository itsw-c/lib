import React, {useState} from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import Footer from "./components/Footer";


function App() {
  const [books, setBooks] = useState([
    // 예시 도서 데이터
    {
      id: 1,
      title: '책 제목 1',
      author: '저자 1',
      image: '/images/book1.jpg',
    },
    {
      id: 2,
      title: '책 제목 2',
      author: '저자 2',
      image: '/images/book2.jpg',
    },
    // 필요한 만큼 추가
  ]);

  const handleSearch = (keyword) => {
    // 검색 기능 구현 (예: API 호출 또는 로컬 데이터 필터링)
    console.log(`검색어: ${keyword}`);
  };
  return (
   <div className="App">
      <Header />
      <Banner />
      <SearchBar onSearch={handleSearch} />
      <BookList books={books} />
      <Footer />
    </div>
  );
}

export default App;
