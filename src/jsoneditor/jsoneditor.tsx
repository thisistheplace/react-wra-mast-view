import React, {useEffect, useRef} from 'react'
// import { createPrecompiledValidator, ValidatorFunctions } from '@rjsf/validator-ajv8'
// import Form from '@rjsf/core'; // Or whatever theme you use

import schema from './schema/iea43_wra_data_model.schema.json'
// import * as precompiledValidator from './schema/wra_datamodel'

export const JSONEditor = ({json} : {json: object}) => {

  const refContainer = useRef<HTMLDivElement>(null);
  const refValidator = useRef<null | any>(null);

  useEffect(() => {
    // create editor
    if (refContainer.current){
      let a = 1
      // refValidator.current = createPrecompiledValidator(precompiledValidator as ValidatorFunctions, schema)
    }

    return () => {
      // destroy editor
      if (refValidator.current) {
        refValidator.current.destroy();
        refValidator.current = null;
      }
    };
  }, []);

  // update props
  useEffect(() => {
    // const fullProps = { ...props }
    console.log(schema)
    // console.log(props)
    // if (props.content){
    //   fullProps.validator = createAjvValidator({ schema })
    // }
    // if (refValidator.current) {
    //   const fullProps = { validator: createAjvValidator({ schema }), ...props}
    //   refValidator.current.updateProps(fullProps)
    // }
  }, [json]);

  // return <Form schema={schema} formData={json} validator={refValidator} ref={refContainer}></Form>
  return <div></div>
}