import Cards from './components/Cards';

export default function Home() {
  return (
    <article>
      <h1 className="text-4xl text-center my-5 p-2">Task Management App</h1>

      <main className=" w-3/4 mx-auto" id="" title="">
        <Cards />
      </main>
    </article>
  );
}
