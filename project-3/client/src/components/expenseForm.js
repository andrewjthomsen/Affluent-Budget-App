import * as React from "react";
// import { Router } from 'react-router'
// stateless functional component that returns html (jsx)
import "../assets/additionalcss/css/signup.css";
import "../assets/additionalcss/css/mbr-additional.css";
import API from "../utils/api";
import "./expense-form.css";
class AddExpense extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      payee: "",
      amount: "",
      category: "",
      comment: ""
    }
  }
  handlePayee(e){
    this.setState({
      payee: e.target.value
    })
  }
  handleAmount(e){
    this.setState({
      amount: e.target.value
    })
  }
  handleCategory(e){
    this.setState({
      category: e.target.value
    })
  }
  handleComment(e){
    this.setState({
      comment: e.target.value
    })
  }
  addExpense(e){
    e.preventDefault();
    const payee = this.state.payee;
    const amount = this.state.amount;
    const category = this.state.category;
    const comment = this.state.comment;
    // console.log("Current state is...", this.state);
    API.addExpense({ payee:payee, amount:amount, category:category, comment:comment });
    // Reset form fields
    this.setState({
      category: "",
      payee: "",
      amount: "",
      comment: ""
    });
    //this.props.router.push('/');
    //this.props.history.push("/");
  }
  render(props){
    return(
      <div className="container" style={{textAlign: "center"}}>
        <div className="form-container">        
          <form className="expenseform" onSubmit={this.addExpense.bind(this)}>            
            <p>
            <input className="textform" type="text" placeholder="Payee" value={this.state.payee} onChange={this.handlePayee.bind(this)} required/>
            <br />  
            </p>
            <p>
            <input className="textform" type="number" placeholder="Amount" value={this.state.amount} onChange={this.handleAmount.bind(this)} required/>
            <br />  
            </p>
            <select className="textform" value={this.state.category} onChange={this.handleCategory.bind(this)}>
              <option value="books">Books</option>
              <option value="clothes">Clothes</option>
              <option value="electricity">Electricity</option>
              <option value="food">Food</option>
              <option value="fruits">Fruits</option>
              <option value="grocery">Grocery</option>
              <option value="internet">Internet</option>
              <option value="Phone">Phone</option>
              <option value="traveling">Traveling</option>
              <option value="uncategorized">Uncategorized</option>
              <option value="vegetables">Vegetables</option>
            </select>
            <br />
            
            <textarea className="textform" style={{height: "64px", width: "600px"}} value={this.state.comment} onChange={this.handleComment.bind(this)} placeholder="Comment"/>
            <br />
            <button type="submit">SUBMIT</button>
            <h1>EXPENSES</h1>
          <h2>Payment to: {this.props.payee}</h2>
          <h3>for $ {this.props.amount}</h3>
          <h4>{this.props.category}</h4>
          <h4>{this.props.comment}</h4>
          </form>
        </div>
        <div className="added-expense">
          
        </div>
      </div>
    )
  }
}

export default AddExpense;