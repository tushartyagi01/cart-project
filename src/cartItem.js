// // import React from "react";
// // class CartItem extends React.Component{
    
    
// //     //   testing(){
// //     //     const promise = new Promise((resolve,reject)=> {
// //     //         setTimeout(()=> {
// //     //             resolve('done');
// //     //         },5000)
// //     //     });
// //     //     promise.then(()=>{
// //     //         this.setState({title:'phone',qty:this.state.qty+10},console.log(this.state));
       
// //     //     });
// //     //   }
     
// //       decreaseCartVal = ()=>{
// //         this.setState((prevState)=>{
// //             if(prevState.qty>=1){
// //                 return {
// //                     qty:prevState.qty-1                    
// //                 }
// //             }
           
// //         });
// //       }
// //       increaseCartVal=()=> {
// //         //    console.log('this state',this.state);
// //         //   this is done when changes does not depend upon prev changes

// //         //    this.setState({
// //         //     qty:this.state.qty+1

// //         //    });
        

// //         // this is done when changes depend on prev changes
// //          this.setState((prevState)=>{
// //             return {
// //                 qty:prevState.qty+1
// //             }
// //          } ,()=> console.log(this.state))
    
// //       }
// //       render(){
// //         // const test= this.props.jsx
        
// //         console.log("this.props =", this.props);
// //         const {price,title,qty}=this.props.product;
// //         console.log("render");
        
// //         return (
           
// //             <div className="cart-item">
// //                  {/* <div>{test}</div> */}
// //                 <div className="left-block">
// //                     <img style={styles.image} />
// //                 </div>
// //                 <div className="right-block">
// //                     <div  style={{fontSize:20}}>{title}</div>
// //                     <div style={{color:'#777'}}>Rs {price}</div>
// //                     <div>Qty:{qty}</div>
// //                     <div className="cart-item-action">
// //                         {/*buttons */}
// //                         <img 
// //                             alt="increase" onClick={()=> this.props.handleIncreaseQuantity(this.props.product)}
// //                             className="action-icons" 
// //                             src=""
// //                         />
// //                         <img 
// //                         alt="decrease" onClick={()=> this.props.handleDecreaseQuantity(this.props.product)}
// //                         className="action-icons" 
// //                         src=""/>
// //                         <img 
// //                         alt="delete" onClick={()=> this.props.handleDeleteProduct(this.props.product.id)}
// //                          className="action-icons"
// //                           src=""/>
// //                     </div>
// //                 </div>
// //             </div>
            
// //         );
// //       }
// //  }
// //  const  styles= {
// //     image:{
// //         height:110,
// //         width:110,
// //         margin: 1,
// //         background:'#ccc'

// //     }
// //  }
// //  export default CartItem;





import React from "react";

const CartItem =(props)=>{


    
    
    //   testing(){
    //     const promise = new Promise((resolve,reject)=> {
    //         setTimeout(()=> {
    //             resolve('done');
    //         },5000)
    //     });
    //     promise.then(()=>{
    //         this.setState({title:'phone',qty:this.state.qty+10},console.log(this.state));
       
    //     });
    //   }
     
    //   decreaseCartVal = ()=>{
    //     this.setState((prevState)=>{
    //         if(prevState.qty>=1){
    //             return {
    //                 qty:prevState.qty-1                    
    //             }
    //         }
           
    //     });
    //   }
    //   increaseCartVal=()=> {
        //    console.log('this state',this.state);
        //   this is done when changes does not depend upon prev changes

        //    this.setState({
        //     qty:this.state.qty+1

        //    });
        

        // this is done when changes depend on prev changes
    //      this.setState((prevState)=>{
    //         return {
    //             qty:prevState.qty+1
    //         }
    //      } ,()=> console.log(this.state))
    
    //   }
    //   render(){    // const test= this.props.jsx
        
        console.log("this.props =", props);
        const {price,title,qty}=props.product;
        console.log("render");
        
        return (
           
            <div className="cart-item">
                 {/* <div>{test}</div> */}
                <div className="left-block">
                    <img style={styles.image} alt="" src={props.product.img}/>
                </div>
                <div className="right-block">
                    <div  style={{fontSize:20}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div>Qty:{qty}</div>
                    <div className="cart-item-action">
                        {/*buttons */}
                        <img 
                            alt="increase" onClick={()=> props.handleIncreaseQuantity(props.product)}
                            className="action-icons" 
                            src=""
                        />
                        <img 
                        alt="decrease" onClick={()=> props.handleDecreaseQuantity(props.product)}
                        className="action-icons" 
                        src=""/>
                        <img 
                        alt="delete" onClick={()=> props.handleDeleteProduct(props.product.id)}
                         className="action-icons"
                          src=""/>
                    </div>
                </div>
            </div>
            
        );
      }
//  }
 const  styles= {
    image:{
        height:110,
        width:110,
        margin: 1,
        background:'#ccc'

    }
 }
 export default CartItem;