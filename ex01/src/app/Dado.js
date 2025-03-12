export default function Dado(props) {
    const imagens = {
        1: "/face1.png",
        2: "/face2.png",
        3: "/face3.png",
        4: "/face4.png",
        5: "/face5.png",
        6: "/face6.png",
    };

    return (
        <img 
            src={imagens[props.numero]} 
            alt={`Face ${props.numero} do dado`} 
            width={100}
        />
    );
}