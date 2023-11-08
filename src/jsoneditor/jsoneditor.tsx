import React, {useEffect, useRef} from 'react'
import { JSONEditor, JSONSchema, JSONEditorPropsOptional } from 'vanilla-jsoneditor'
import { createAjvValidator } from 'vanilla-jsoneditor'


export const SvelteJSONEditor = ({schema, props} : {schema: JSONSchema, props: JSONEditorPropsOptional}) => {
  const refContainer = useRef<HTMLDivElement>(null);
  const refEditor = useRef<null | JSONEditor>(null);

  useEffect(() => {
    // create editor
    if (refContainer.current){
      refEditor.current = new JSONEditor({
        target: refContainer.current,
        props: {
        }
      })
    }

    return () => {
      // destroy editor
      if (refEditor.current) {
        refEditor.current.destroy();
        refEditor.current = null;
      }
    };
  }, [schema]);

  // update props
  useEffect(() => {
    const fullProps = { ...props }
    console.log(schema)
    if (props.content){
      fullProps.validator = createAjvValidator({ schema })
    }
    if (refEditor.current) {
      const fullProps = { validator: createAjvValidator({ schema }), ...props}
      refEditor.current.updateProps(fullProps)
    }
  }, [props, schema]);

  return <div className="vanilla-jsoneditor-react" ref={refContainer}></div>;
}