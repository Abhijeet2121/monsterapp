import React from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import './App.css';

function App() {
  const [searchField, setSearchField] = React.useState('');
  const [monsters, setMonsters]= React.useState([]);
  const [filteredMonsters, setFilteredMonsters] = React.useState(monsters);

  React.useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => setMonsters(users))
  }, []);

  React.useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

      setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField] );

  function onSearchChange(event) {
    console.log(event)
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };


  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      
      <SearchBox
        className ='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeHolder='Search Monsters'
      />

      <CardList monsters={filteredMonsters}/>

    </div>
  );
}

export default App;