import React,{Component} from "react";
import AddSubStyle from "./AddSubStyle.css"

class AddSub extends Component{
    submitHandler(){
        alert('Submit handler ahs been clicked.')
    }
    render(){
        return (
            <div className="component-body-container">
                <div className="heading">
                    Add Subscriber
                </div>
                <div>
                    <button className="btn-regular">Back</button>
                </div>
                <form>
                    <label htmlFor="name" id="name">Name</label>
                    <input type ="text" placeholder="Enter Name" name="name" required></input><br></br>
                    <label htmlFor="phoneNumber" id="phoneNumber">PhoneNumber</label>
                    <input type="text" placeholder="Enter Phone Number" name="phoneNumber" required></input><br></br>
                    <button className="submit-btn btn-regular" onClick={this.submitHandler}>Submit</button>
                </form>

                <div>
                    <span>Name is : </span><br></br>
                    <span>PhoneNumber is </span><br></br>
                    <button className="btn-regular">Add Subscriber</button>
                </div>
            </div>
        )
    }
}
export default AddSub;