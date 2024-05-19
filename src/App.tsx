import { useState } from 'react'
import './App.css'




function App() {

  const [task, setTask] = useState<IMyForm>()

  const {
      register,
      handleSubmit,
      formState: {errors},
  } = useForm<IMyForm>({
      mode: "onBlur",
  })

  const saveElement = (data: IMyForm) => {
      setTask(data)
  }

  return (
    <>
      <h2>HEllo</h2>
    </>
  )
}

export default App
