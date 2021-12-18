export default function Jsx() {
    const titutlo = <h1>JSX é um conceito central</h1>;

    function subtitulo() {
        return <h2>{"Muito legal".toUpperCase()}</h2>;
    }

    return (
        <div>
            {titutlo}
            {subtitulo()}
            {JSON.stringify({nome: 'João', idade: 30})}
        </div>
    );
}