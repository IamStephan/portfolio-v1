import { useState } from 'react'

export const useForm = ({
  initialValues,
  onSubmit
}) => {
  const [values, setValues] = useState(initialValues)

  const handleChange = (event) => {
    const { target } = event
    const { name, value } = target
    event.persist()
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (event) => {
    if (event) event.preventDefault()

    onSubmit(values)
  }

  return {
    values,
    handleChange,
    handleSubmit
  }
}