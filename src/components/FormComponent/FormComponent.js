import React from 'react';
import styles from "./FormComponent.module.scss";


 const FormComponent = () =>{
    return (
        <div className={styles.container}>
            <form>
            
                    <label>Name</label>
                    <input name="name" type="text"/>
                    


        
            </form>
        </div>
    )
}

export default FormComponent;