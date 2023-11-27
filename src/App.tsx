import { Container } from 'react-bootstrap';

export interface WraMastViewProps {
  editor: Boolean;
  json: object
}

const WraMastView = ({editor, json}: WraMastViewProps) => {
  return(
    <Container className="vh-100 px-0" fluid={true} data-bs-theme="light">
      <h1>Hi</h1>
    </Container>
  )
}

export default WraMastView
