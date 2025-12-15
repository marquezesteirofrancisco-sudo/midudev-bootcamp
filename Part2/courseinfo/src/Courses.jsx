
import  Header  from './Header.jsx';

import  Content  from './Content.jsx';

const Courses = ({courses}) => {

/* Header
    Content
      Part
      Part */

      /*
      return (
          <div>
            <Header name={course.name}/>
            <Content parts={course.parts} />
          </div>
       )
      */


      return (

        courses.map(  (curso, index) => (

            <div key ={index}>

              <Header name={curso.name}/>
              <Content parts={curso.parts} />  

            </div>
          )
          
        )
 
       )

}

export default Courses;