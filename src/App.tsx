import { JsonInput } from './jsoneditor'
import { Container } from 'react-bootstrap';

export interface WraMastViewProps {
  editor: Boolean;
  json: object
}

const WraMastView = ({editor, json}: WraMastViewProps) => {
  return(
    <Container className="vh-100 px-0" fluid={true} data-bs-theme="light">
      {editor && <JsonInput jsonInput={json}/>}
    </Container>
  )
}

export default WraMastView
