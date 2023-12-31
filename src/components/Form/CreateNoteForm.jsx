import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { useAppStore } from '@/context/AppStore'
// Components
import FormInput from '@/components/Form/FormInput'
import FormBtn from '@/components/Form/FormBtn'
import TextArea from '@/components/Form/TextArea'

export default function CreateNoteForm() {
  const { addNote } = useAppStore()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = async data => {
    // [TODO]
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
        text="Add Note"
        className="mt-5 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-background text-foreground hover:bg-primary-background/90"
      />
    </form>
  )
}

CreateNoteForm.propTypes = {
  setNotes: PropTypes.func
}
