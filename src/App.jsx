import useFetchCharacters from './hooks/useFetchCharacters.js';
import Character from './components/Character.jsx';
import './App.css';

function App() {
    const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/4';
    const urlRick = 'https://rickandmortyapi.com/api/character/2';
    const { data: pokemon, error: errorPokemon, loading: loadingPokemon } = useFetchCharacters(urlPokemon);
    const { data: rick, error: errorRick, loading: loadingRick } = useFetchCharacters(urlRick);
    return (
        <>
            <h1>Fetch Characters</h1>
            <Character character={pokemon} error={errorPokemon} loading={loadingPokemon} name={pokemon?.name} image={pokemon?.sprites?.other?.["official-artwork"]?.front_default} />
            <Character character={rick} error={errorRick} loading={loadingRick} name={rick?.name} image={rick?.image} />
        </>
    );
}

export default App;