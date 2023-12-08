import FileInput from "./components/FileInput";

function App() {
  const onSubmit = () => {};

  return(
    <div className="bg-gray-100 w-screen h-screen py-10 flex flex-col justify-start items-center gap-y-5">
      <h1 className="text-4xl text-blue-600 font-bold">
        Input de Arquivos
      </h1>
      <form onSubmit={onSubmit}></form>
      <FileInput />
    </div>
  );
  
}

export default App;