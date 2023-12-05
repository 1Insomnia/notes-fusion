import './Dashboard.css'

import { useState } from 'react'

import CreateNoteForm from '@/components/Form/CreateNoteForm'
import Container from '@/components/Container'
import Spacer from '@/components/Spacer'

export default function Dashboard() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'I Love dogs',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, doloribus.'
    },
    {
      id: 2,
      title: "My dog's name ocky",
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, doloribus.'
    },
    {
      id: 3,
      title: "My dog's name ocky",
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, doloribus.'
    }
  ])

  return (
    <Container>
      <Spacer t="md">
        <CreateNoteForm setNotes={setNotes} />
      </Spacer>
    </Container>
  )
}
