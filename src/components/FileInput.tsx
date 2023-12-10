
export default function FileInput(): void {
    const input = document.getElementById('upload') as HTMLInputElement;
    const uploadedBoxDocs = document.getElementById('uploaded-box-docs') as HTMLElement;

    input.addEventListener('change', (e) => {
        const target = e.target as HTMLInputElement;
        if (target.files && target.files.length > 0) {
            const fileName = target.files[0].name;
            const fileType = target.value.split('.').pop() || ''; // Definir como string vazia se for undefined
            fileShow(fileName, fileType);
        }
    });

    const fileShow = (fileName: string, fileType: string): void => {
        const filesGroup = document.createElement('div');
        filesGroup.classList.add('files-group');

        const alignFiles = document.createElement('div');
        alignFiles.classList.add('align-files');
        filesGroup.append(alignFiles);

        const left = document.createElement('div');
        left.classList.add('align-left');
        alignFiles.append(left);

        const fileTypeSpan = document.createElement('span');
        fileTypeSpan.classList.add('fileType');
        left.append(fileTypeSpan);

        fileTypeSpan.textContent = fileType;

        const titleH3 = document.createElement('h3');
        titleH3.textContent = fileName;
        left.append(titleH3);

        const right = document.createElement('div');
        right.classList.add('align-right');
        alignFiles.append(right);

        const deleteSpan = document.createElement('span');
        deleteSpan.innerHTML = '&#215;';
        right.append(deleteSpan);
        deleteSpan.style.cursor = 'pointer';

        uploadedBoxDocs.append(filesGroup);

        deleteSpan.addEventListener('click', () => {
            uploadedBoxDocs.removeChild(filesGroup);
        });
    };
}