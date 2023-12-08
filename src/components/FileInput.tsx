

function FileInput() {
    

    return(
        <div 
        className="w-1/2 h-96 rounded-lg border-dashed border-2 border-blue-400 hover:border-blue-500 bg-blue-50 hover:bg-blue-100 transition-all">
            <label htmlFor="dropzone-file" className="cursor-pointer w-full h-full">
                <div className="w-full h-full p-5 flex flex-col items-center justify-center hover:scale-105 transition-all">
                    <p className="mb-2 text-lg text-blue-600">
                        <span className="font-bold">Click Here</span> or drag file!
                    </p>
                    <p className="text-blue-400 text-sm">PDF</p>
                </div>
            </label>
            <input 
            className="hidden" />
        </div>
    );
}

export default FileInput;