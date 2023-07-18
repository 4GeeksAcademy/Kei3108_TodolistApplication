import React, { useState } from 'react';

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue !== "") {
      setHobbies((prevHobbies) => [...prevHobbies, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteHobby = (index) => {
    setHobbies((prevHobbies) => {
      const updatedHobbies = [...prevHobbies];
      updatedHobbies.splice(index, 1);
      return updatedHobbies;
    });
  };

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className="container">
      <h1>My Hobbies</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            value={inputValue}
            placeholder="What needs to be done?"
          />
        </li>
        {hobbies.length === 0 ? (
          <li>No hobbies. Add hobbies</li>
        ) : (
          hobbies.map((hobby, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {hobby}
              {activeIndex === index && (
                <i
                  className="fas fa-trash-alt"
                  onClick={() => handleDeleteHobby(index)}
                ></i>
              )}
            </li>
          ))
        )}
      </ul>
      <div>{hobbies.length} Hobbies</div>
    </div>
  );
};

export default Home;