function Texto1() {
  return <p>Um parágrafo de texto</p>;
}

export default function Home() {
  const aula = 2;
  return (
    <div>
    <h1>Hello Lua!</h1>
      <p> {aula}ª aula  de React </p>
      <Texto1 />
      <Texto1 />
    </div>
  );
}