import CurrentWeather from './components/CurrentWeather';
import Search from './components/Search';

function App() {
  return (
    <>
      <div className='flex flex-col gap-2 m-2'>
        <h1 className='text-orange-400 font-semibold text-3xl'> GetKlima </h1>
        <Search
          onSearchChange={(searchData) => {
            console.log("hello from change", searchData);
          }}
        />
        <CurrentWeather />
      </div>
    </>

  );
}

export default App;
