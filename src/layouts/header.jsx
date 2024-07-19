import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)
  }

  const goToList = () => {
    navigate(`?search=${searchValue}`);
    setSearchValue('')
  }

  return (
    <>
      <input type="text" value={searchValue} onChange={handleSearchChange}/>
      <button onClick={goToList}>adasdsad</button>
    </>
  );
}

export default Header;
