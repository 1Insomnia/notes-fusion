import PropTypes from 'prop-types'
import supabase from '@/lib/supabase'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAppStore } from '@/context/AppStore'
// Components
import FormInput from '@/components/Form/FormInput'
import FormBtn from '@/components/Form/FormBtn'
import TextArea from '@/components/Form/TextArea'
import { useNavigate } from 'react-router-dom'

export default function EditNoteForm() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { activeNote, setActiveNote } = useAppStore()

  useEffect(() => {
    const fetcher = async () => {
      let {
        data: [dataSet],
        error
      } = await supabase.from('notes').select('id, title, content').eq('id', id)

      setActiveNote({
        id: dataSet.id,
        title: dataSet.title,
        content: dataSet.content
      })
    }
    fetcher()
  }, [id])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    values: { title: activeNote.title, content: activeNote.content } || {}
  })

  const onSubmit = async data => {
    navigate('/')
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-[710px]">
      <FormInput
        focus={true}
        type="text"
        name="title"
        label="Title"
        htmlFor="title"
        errors={errors}
        register={register}
        validationSchema={{
          required: 'Title is required'
        }}
        required
      />
      <TextArea
        focus={true}
        name="content"
        label="content"
        errors={errors}
        register={register}
        validationSchema={{
          required: 'Content is required'
        }}
        required
      />
      <FormBtn
        text="Edit Note"
        className="mt-5 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-warning text-foreground hover:bg-warning/90"
      />
    </form>
  )
}

EditNoteForm.propTypes = {
  setNotes: PropTypes.func
}
