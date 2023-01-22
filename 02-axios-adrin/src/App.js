import React, {Component} from "react";

import axios from 'axios';

const api = axios.create({
  baseURL:`http://localhost:3000/posts`
})

class App extends Component {

  state = {
    courses : []
  }

  constructor(){
    super();  
    this.getCourses();
    
  }

  getCourses = async() => {
    let data = await api.get('/', {
      //you can pass the parameters and set some extra fetures
      // params: {
      //   _limit:3,
      //   _tart: 2
      // }
    }).then(({data}) => data);
    this.setState({courses: data})
  }

  createCourse = async() => {
    let res = await api.post('/', {title:"test", body:"test",likes:45 , id:5})
    console.log(res)
    this.getCourses();
  }

  deleteCourse = async(id) => {
    let data = await api.delete(`/${id}`)
    this.getCourses();
  }

  updateCourse = async(id, val) =>{
    let data = await api.patch(`/${id}`, {title: val})
    this.getCourses()
  }

  render() {
    return (
      <>
        <div>
        {this.state.courses.map(course => <h2 key={course.id} onClick={() => this.updateCourse(course.id, `${course.title}a`)}>{course.title} <button onClick={() => this.deleteCourse(course.id)}>X</button></h2>)}
      </div>
      <button onClick={this.createCourse}>create data</button>
      </>
      
    )
  }
}

export default App;
