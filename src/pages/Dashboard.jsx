import './Dashboard.css'

import { useState } from 'react'

import MainContent from '@/components/MainContent'
import SideContent from '@/components/SideContent'

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
    <div className="content-wrapper">
      <SideContent notes={notes} />
      <MainContent setNotes={setNotes} />
    </div>
  )
}
