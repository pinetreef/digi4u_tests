import { useState } from 'react';

function Home(){
    return (
    <div>
        <h3>Home</h3>
        <Contador />
        <div>Digi4u</div>
    </div>
    )
}

function Contador(){
    const [contador,setContador] = useState(1); //Retorna um array aonde o primeiro elemento é a variável principal e o segundo elemento é a função especializada em atualizá-la.

    function adicionarContador(){
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

function Pagina() {
    return <Contador />
}

export default Home