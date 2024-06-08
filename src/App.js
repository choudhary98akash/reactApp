import React,{Component} from "react"
import Header from "./Header";
import  AppStyles from "./AppStyle.css";

class App extends Component{

  render(){
    let subs =[
      
      { 
        id :1,
        name :"Akash Choudhary",
        Phone:"7838756411"
      },
      { 
        id :2,
        name :"Pooja Choudhary",
        Phone:"7838756411"
      },
      { 
        id :3,
        name :"Karan Choudhary",
        Phone:"7838756411"
      },
      { 
        id :4,
        name :"Pradeep Choudhary",
        Phone:"7838756411"
      },
      { 
        id :5,
        name :"Krishna Choudhary",
        Phone:"7838756411"
      }
      
    ]
    return (
      <div>
          <Header></Header>
        <button >Add</button>
        
        <div className="Directory head">
          <span>Name</span>
          <span>Phone Number</span>
          <span>Delete</span>
        </div>

        {
          subs.map(item => (
            <div key={item.id} className="Directory pad">
              <span>{item.name}</span>
              <span>{item.Phone}</span>
              <span  className="delete-btn"><button className="delete-btn">Delete</button></span>
            </div>
          ))
        }

      </div>
    );
  }
}

export default App;