const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content  course={course} />
      <Total course={course} />
    </div>
  )
}

const Header = (props) => {
   const courseName = props.course.name
   return(
    <h1>{courseName}</h1>
   )
}

const Content = (props) => {
   
  const couseParts = props.course.parts

   return(
      <div>
        <Part parts={couseParts}/> 
      </div>
   )
}

const Total = (props) => {

  const courseParts = props.course.parts

  return(
      <div>
        <p>Number of exercises {courseParts[0].exercises  + courseParts[1].exercises + courseParts[2].exercises}</p>
      </div>
  )
}


const Part = (props) => {

  const courseParts = props.parts


   return(
      <div>
        {

          <div>
            {courseParts.map((curso, index) => (
              <div key={index}>
                <p>{curso.name} {curso.exercises}</p>
              </div>
            ))}
          </div>


        }
      </div>
   )
} 

export default App