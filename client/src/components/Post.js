import React from "react";

export default function Post(){
    //I will fix it up later :) JL
    // const inputFormatting = "";
    // const inputFormattingArea ="";

    // const [errorState, setErrorState] = useState(null);
    // const [formValues, setFormValues] = useState({
    //     name: null,
    //     email: null,
    //     message: null,
    // });

    // useEffect(() => {
    //     // console.log('event:',event)
    //     // If all fields are good, update state
    //     if (errorState !== null) {
    //     alert(errorState);
    //     }
    // }, [errorState, formValues]);

    // function formValidation(event){
    //     console.log("formValidation called...");
    //     console.log(event);
    //     console.log("pre-switch error state:", errorState);
    //     // Update error state based on all field values
    //     switch (event.target.name) {
    //     case "email":
    //         console.log("triggered email validation");
    //         emailValidation(event.target.value)
    //         ? setErrorState(null)
    //         : setErrorState("Invalid email");
    //         break;
    //     case "name":
    //         event.target.value.length > 0
    //         ? setErrorState(null)
    //         : setErrorState("Name is a required field");
    //         break;
    //     case "message":
    //         event.target.value.length > 0
    //         ? setErrorState(null)
    //         : setErrorState("Message is a required field");
    //         break;
    //     default:
    //         setErrorState("You managed to break this form in a really unusual way");
    //     }
    //     console.log("post-switch error state:", errorState);

    //     setFormValues({
    //     // Preserve exising form values
    //     ...formValues,
    //     // Use this syntax to set a variable key value, overwriting old data
    //     [event.target.name]: event.target.value,
    //     });
    // }
    
    // function submitForm(event){
    //     event.preventDefault();
    //     formValidation(event);
    //     if(errorState !== null){
    //         console.log("Error: Form content invalid");
    //     }
    //     else{
    //         window.open(
    //             ``
    //         );
    //     }
    // }

    return(
        <div className="">
            <section id="post" className="">
                {/* <form className="" onSubmit={submitForm}>
                    <input type="text" name="" placeholder="" className=""></input>
                    <input type="text" name="" placeholder="" className=""></input>
                    <input type="text" name="" placeholder="" className=""></input>
                    <button type="submit" className="" >Submit</button>
                </form> */}
            </section>
        </div>
    );
}
//working on it (JL) feel free to add on