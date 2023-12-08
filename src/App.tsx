import FileInput from "./components/FileInput";

function App() {
  const onSubmit = () => {};

  return(
    <div >
      <h1 >
        Input de Arquivos
      </h1>
      <form onSubmit={onSubmit}></form>
      <FileInput />
    </div>
  );
  
}

export default App;