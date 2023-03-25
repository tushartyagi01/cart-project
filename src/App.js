
import React from 'react';
import Cart from './cart';
import Navbar from './navbar'
class App extends React.Component{
  // function showAlert(){
  //   alert("Hola");
  // }
  // function handleInputChange(e){
  //   console.log(e.target.value);
  constructor(){
    super();
    this.state={
     products:[
        {   price:999,
            title:'watch',
            qty:11,
            img:'',
            id:1
       },
       {
                price:999,
                title:' Mobile phone',
                qty:9,
                img:'https://media.wired.com/photos/5f401ecca25385db776c0c46/master/w_2560%2Cc_limit/Gear-How-to-Apple-ios-13-home-screen-iphone-xs-06032019_big_large_2x.jpg',
                id:2
            },

            {   price:999,
                title:' laptop',
                qty:10,
                img:'',
                id:3
            }
     ]
    }
   
  }
 
onIncreseQuantity= (product)=> {
    const {products}= this.state;
     console.log("function works", product);
     const index= products.indexOf(product);
     products[index].qty+=1;
     this.setState({
       products:products
     }
      
     )
     
}
onDecreseQuantity= (product)=> {
    const {products}= this.state;
    console.log("function works", product);
    const index= products.indexOf(product);
    if(products.length===0){
        return ;
    }
    products[index].qty-=1;
    this.setState({
        products:products
      })
    }
onDeleteProduct=(id)=>{
const {products}= this.state;
const items= products.filter((item)=>item.id!==id);
this.setState({
    products:items
})
}
counttotalProduct=()=> {
   const {products}=this.state;
   let count=0;
   products.forEach( (product) => {
        count=product.qty+count;
   });
   return count;
}
totalBillAmount=()=>{
  const {products}=this.state;
   let total=0;
   products.forEach((product)=>{
      total=total+product.price*product.qty;
   })
   return total;
}
  // }
  render(){
    const {products} =this.state;
    // console.log(products);
    return (
      <div className="App">
  
           <Navbar count={this.counttotalProduct()}/>
          {/* event listners in react  */}
  
  
          {/* <button onClick={showAlert}>Show Alert</button>
          <input onChange={handleInputChange}/> */}
           <div>
            {
             <Cart 
                product={{products}}            
                onIncreseQuantity={this.onIncreseQuantity}
                onDecreseQuantity={this.onDecreseQuantity}
                onDeleteProduct={this.onDeleteProduct}
               />
               
            }
           </div>
           <div className='billing'>
               <p>Total Bill : {this.totalBillAmount()}</p>
           </div>
         
     
      </div>
    );
  }
  
}

export default App;
