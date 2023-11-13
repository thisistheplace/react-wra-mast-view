import React, { useState, useEffect } from "react"
// import { JSONEditor } from "./jsoneditor"
import { Container } from "react-bootstrap"
import { SelectFile } from "./fileselect"

export const JsonInput = ({jsonInput}:{jsonInput:object}) => {
  const [jsonData, setJson] = useState(jsonInput);

  useEffect(() => {
    setJson(jsonData)
  }, [jsonData])

  // const updateContent = useCallback((newContent: Content, previousContent: Content) => {
  //   // Coerce into json content
  //   const thisContent = newContent as JSONContent
  //   if (thisContent.json){
  //     setJson(thisContent.json as object)
  //   }
  // }, [])

  return (
    <Container>
      <h1 className="mx-2 py-4">WRA Mast JSON Data Editor</h1>
      <SelectFile jsonCallback={setJson}/>
      {/* <Container> */}
        {/* <JSONEditor
          json={jsonData}
        /> */}
      {/* </Container> */}
    </Container>
  );

}
