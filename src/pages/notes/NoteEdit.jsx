import { useParams } from 'react-router-dom'

import Container from '@/components/Container'
import Spacer from '@/components/Spacer'

export default function NoteEdit() {
  const { id } = useParams()

  return (
    <Container>
      <Spacer>
        <h1>Note edit {id}</h1>
      </Spacer>
    </Container>
  )
}
