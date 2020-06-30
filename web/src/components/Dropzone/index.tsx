import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'
 
import './styles.css';

interface Props {
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const [ selectedFinderUrl, setSelectedFinderUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);

    setSelectedFinderUrl(fileUrl);
    onFileUploaded(file)
  }, [onFileUploaded]);
  
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    accept: 'image/*'
  })

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*"/>

      { selectedFinderUrl
        ? <img src={selectedFinderUrl} alt="Point thumbnail" />
        : (
          <p>
            <FiUpload />
            Imagem do estabelecimento
          </p>
        )
      }
    </div>
  )
}

export default Dropzone;