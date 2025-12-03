const App = () => {
  const course = 'Half Stack application development'

  const parts = [ {
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

  return (
    <div>
      <Header course={course}/>
      <Content  parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

const Header = (props) => {
   return(
    <h1>{props.course}</h1>
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
        <p>Number of exercises {props.parts[0].exercises  + props.parts[1].exercises + props.parts[2].exercises}</p>
      </div>
   )
}


const Part = (props) => {
   return(
      <div>
        {
          <div>
            {props.parts.parts.map((curso, index) => (
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