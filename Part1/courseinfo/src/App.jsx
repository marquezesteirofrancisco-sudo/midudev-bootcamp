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
      <Content  parts={course} />
      <Total parts={course} />
    </div>
  )
}

const Header = (props) => {
   return(
    <h1>{props.course.name}</h1>
   )
}

const Content = (props) => {
   return(
      <div>
        <Part parts={props}/> 
      </div>
   )
}

const Total = (props) => {
   return(
      <div>
        <p>Number of exercises {props.parts.parts[0].exercises  + props.parts.parts[1].exercises + props.parts.parts[2].exercises}</p>
      </div>
   )
}


const Part = (props) => {
   return(
      <div>
        {

          <div>
            {props.parts.parts.parts.map((curso, index) => (
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