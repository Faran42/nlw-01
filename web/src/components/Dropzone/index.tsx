import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'
 
import './styles.css';

const Dropzone = () => {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    accept: 'image/*'
  })

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p> Solte aqui a imagem do estabelecimento.</p> :          
          <p><FiUpload />Pegue e solte a imagem do estabelecimento aqui,<br /> ou click para selecionar arquivo.</p>
      }
    </div>
  )
}

export default Dropzone;