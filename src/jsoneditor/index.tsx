import React, { useState, useCallback, useEffect } from "react"
import { SvelteJSONEditor } from "./jsoneditor"
import schema from './../schema/iea43_wra_data_model.schema.json'
import { Container } from "react-bootstrap"
import { Content, JSONContent } from "vanilla-jsoneditor"
import { SelectFile } from "./fileselect"

export const JsonInput = ({jsonInput}:{jsonInput:object}) => {
  const [jsonData, setJson] = useState(jsonInput);

  useEffect(() => {
    setJson(jsonData)
  }, [jsonData])

  const updateContent = useCallback((newContent: Content, previousContent: Content) => {
    // Coerce into json content
    const thisContent = newContent as JSONContent
    if (thisContent.json){
      setJson(thisContent.json as object)
    }
  }, [])

  return (
    <Container>
      <h1 className="mx-2 py-4">svelte-jsoneditor in React</h1>
      <SelectFile jsonCallback={setJson}/>
      <Container>
        <SvelteJSONEditor
          schema={schema}
          props = {{
            content: {json: jsonData} as JSONContent,
            onChange: updateContent
          }}
        />
      </Container>
    </Container>
  );

}
