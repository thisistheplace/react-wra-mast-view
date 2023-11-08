import React, { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import './fileselect.css'

export const SelectFile = ({jsonCallback} : {jsonCallback: React.Dispatch<React.SetStateAction<object>>}) => {
  const [jsonData, setJSON] = useState<null|JSON>(null)
  let fileReader: FileReader

  useEffect(() => {
    if (jsonData){
      jsonCallback(jsonData)
    }
  }, [jsonData, jsonCallback])

  const handleFileRead = (e: any) => {
    const content = fileReader.result as string
    if(content){
      setJSON(JSON.parse(content))
    }
  }

  const handFileChosen = ({files} : {files: null | FileList}) => {
    if (files){
      if (files.length > 0){
        fileReader = new FileReader()
        fileReader.onloadend = handleFileRead
        fileReader.readAsText(files[0])
      }
    }
  }

  return (
    <Container className="py-4">
      <div className="input-group custom-file-button">
        <label
          className="input-group-text"
          htmlFor="inputGroupFile"
          >
            Upload JSON file:
        </label>
        <input
          type="file"
          className="form-control"
          id="inputGroupFile"
          accept="application/json"
          onChange={(e) => handFileChosen(e.target)}
          />
      </div>
    </Container>
  )
}