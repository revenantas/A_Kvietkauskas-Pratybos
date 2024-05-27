import './App.css';
import { useState } from 'react';

const members = [
  { username: "alex", memberId: 1 },
  { username: "john", memberId: 2 },
  { username: "mike", memberId: 3 },
  { username: "sarah", memberId: 4 },
  { username: "anna", memberId: 5 },
  { username: "james", memberId: 6 },
];

function App() {
  const [searchText, setSearchText] = useState('');
  const [filteredMembers, setFilteredMembers] = useState(members);

  const handleSearchChange = (event) => {
    const text = event.target.value;
    setSearchText(text);

    const results = members.filter((member) =>
      member.username.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredMembers(results);
  };

  return (
    <div> 
      <h1>
        Search the database
      </h1>


      <input
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="Search for a member"
      />
      <ul>
        {filteredMembers.map((member) => (
          <li key={member.memberId}>{member.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;