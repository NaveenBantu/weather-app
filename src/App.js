import './App.css';
import Search from './components/Search';

function App() {
  return (
    <Search
      onSearchChange={(searchData) => {
        console.log("hello from change", searchData);
      }}
    />
  );
}

export default App;
