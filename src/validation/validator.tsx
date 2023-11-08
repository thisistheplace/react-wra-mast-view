import { useState, useEffect } from "react";
import React from "react";
import Ajv from "ajv"

interface JsonValidatorProps {
  json: object;
  // JSONSchemaType from ajv could help validate schema
  schema: object
}

export const JsonValidator = ({json, schema}: JsonValidatorProps) => {
  const [errors, setErrors] = useState<string|null|undefined>("")
  const [validJson, setValidJson] = useState({})

  const ajv = new Ajv()

  useEffect(()=>{
    const validate = ajv.compile(schema)
    if (validate(json)){
      setValidJson(json)
    }
    else {
      setErrors(
        ajv.errorsText(validate.errors)
      )
    }
  }, [json, schema])

  return (
    <div>{errors}</div>
  )
}