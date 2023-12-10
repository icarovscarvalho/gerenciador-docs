import Footer from "./components/footer";
import FileInput from "./components/FileInput";

function App() {

    FileInput()

  return(
    <>
        <main className="container relative">
            <section className="upload-box-group">
                <div className="input-box">
                    <h2 className="upload-title-area text-3xl"> Upload Files </h2>
                    <form action="">
                        <input type="file" name="upload" id="upload" accept=".doc, .docx, .pdf" hidden />
                        <label htmlFor="upload" className="upload-label">
                            <span className="material-symbols-outlined">
                                cloud_upload
                            </span>
                            <p>Click to Upload</p>
                        </label>
                    </form>
                </div>
            </section>
            <section id="uploaded-box-docs">
                <h3 className="upload-title">Upload Documents <span className="material-symbols-outlined">
                    upload_file
                </span>
                </h3>
        
            </section>
        </main>
        <Footer />
    </>
  );
  
}

export default App;