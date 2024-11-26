import Hello from "./components/hello";

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) throw new Error("Failed to fetch data")
  const todos = await response.json()
  console.log({ todos });
  return (
    <div>
      <h1>Sarika</h1>
      <Hello />
    </div>
  );
}
