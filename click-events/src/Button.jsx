
function Button(){


// sending arguments to a function:
    // const handleClick = () =>console.log("OUCH!");
    // // If function has parameters:
    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);
    // // If anything has paretheses, function will be called immediately.
    // // to avoid this create a function expression or arrow expression
    //     // "When we click on this button, do this..."
    // return(<button onClick={() => handleClick2("Matt")}>Click Me</button>);

    // ADDING SOME CONDITIONS:

    // Adding count variable
    // let count = 0;
    //     // More than 1 line of code for condition requires curly braces
    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`)
    //     }
    //     else{
    //         console.log(`${name} stop clicking me`);
    //     }
    // };
    // // Setting onCall attribute to handle Click
    // return(<button onClick={() => handleClick("Matt")}>Click Me</button>)

    // EVENT PARAMETER
        // Handle click function

        const handleClick = (e) => e.target.textContent = "OUCH! ";
    // return(<button onClick={(e) => handleClick(e)}>Click Me</button>)
    // Also double click event 
        return(<button onDoubleClick={(e) => handleClick(e)}>Click Me</button>)

}
export default Button