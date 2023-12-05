import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
// Components
import FormInput from '@/components/Form/FormInput'
import FormBtn from '@/components/Form/FormBtn'
import TextArea from '@/components/Form/TextArea'
import MdPreview from '@/components/MdPreview'

export default function CreateNoteForm({ setNotes }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-primary mb-10 border-b border-b-fg">Create Note</h1>
        <div>
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
          <FormBtn text="Add Note" className="mt-5" />
        </div>
      </form>
      <MdPreview source={watch('content')} />
    </div>
  )
}

CreateNoteForm.propTypes = {
  setNotes: PropTypes.func
}
