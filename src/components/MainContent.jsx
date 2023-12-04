import './MainContent.css'
import { useForm } from 'react-hook-form'
// Components
import FormInput from '@/components/Form/FormInput'
import FormBtn from '@/components/Form/FormBtn'

export default function MainContent({ setNotes }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = async data => {
    setNotes(prevNotes => [
      ...prevNotes,
      { id: Math.random(), title: data.title, content: data.content }
    ])
    reset()
  }

  return (
    <div className="main-content-wrapper">
      <div className="main-content container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Create Note</h1>
          <div>
            <FormInput
              focus={true}
              type="text"
              name="title"
              label="Title"
              errors={errors}
              register={register}
              validationSchema={{
                required: 'Title is required'
              }}
              required
            />
            <textarea
              className="note-editor"
              {...register('content')}
              name="content"
              id="content"
            ></textarea>
            <FormBtn text="Add Note" />
          </div>
        </form>
      </div>
    </div>
  )
}
