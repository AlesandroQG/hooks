import Loading from "./Loading.jsx";

const Character = ({character, error, loading, name, image}) => {
    return (
        <>
            {loading && <Loading />}
            {error && <p>{error}</p>}
            {character && (
                <>
                    <h2>Personaje Pokémon</h2>
                    <p>{name}</p>
                    <img src={image} alt={name} />
                </>
            )}
        </>
    );
};

export default Character;