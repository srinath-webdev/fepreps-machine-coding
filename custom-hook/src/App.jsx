import './App.css';
import useFetch from './hook/useFetch';

function App() {
  const url = 'https://randomuser.me/api/?results=5';
  const { data, loading, error } = useFetch(url);

  return (
    <>
      <h1>Fetch Data using Custom Hook</h1>

      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}

      {!loading && data?.results?.map((item) => (
        <div key={item.login.uuid} className="user-card">
          <div className="left-side">
            <img src={item.picture.large} alt={`${item.name.first} ${item.name.last}`} />
          </div>
          <div className="right-side">
            <div className="description">{`Name: ${item.name.title} ${item.name.first} ${item.name.last}`}</div>
            <div className="description">{`Phone: ${item.cell}`}</div>
            <div className="description">{`Email: ${item.email}`}</div>
            <div className="description">{`Address: ${item.location.timezone.description}`}</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
