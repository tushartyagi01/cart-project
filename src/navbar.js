import React from "react";


const Navbar =(props)=>{
        
        
        // console.log("this count",props.count);
        return(
            
            <div  style={styles.nav}> 
                  <div style={styles.cartIconContanier}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgOV4VaRCekJshpiqupuO5PJFvPODOAlZ778Tzo_gnQA&s" alt="cart-icon" style={styles.cartIcon} />
                  <span style={styles.numbers}>{props.count}</span>
                   
               
                  </div>
           
            </div>
          
            
            
        )
    }

const styles={
    cartIcon:{
        height:30,
        widht:30,
        marginRight:20,
      
     


    },
    nav:{
        backgroundColor:'#4367b2',
        height:50,
        display:'flex',
        justifyContent:"end",
        alignItems:'center'

        
    },
    cartIconContanier:{
        position:'relative'
    },
    numbers:{
       color:'black',
       backgroundColor:"yellow",
       height:25,
       width:25,
       borderRadius:40,
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       position:'absolute',
       right:0,
       top:-9,

    }
    
}
export default Navbar;