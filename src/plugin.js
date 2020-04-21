import React, {Component,useState, useEffect} from "react"

function  plugin() {
    const [plugin, setplugin] = useState("")
    
    const handleOnSubmit = event => {
        event.preventDefault();        
      };
    
    const handleOnChange = event => {
        event.persist();
        setplugin(prev => ({
            ...prev,
            [event.target.id]: event.target.value
        }));
    };
    
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <textarea 
                    name="plugin" 
                    placeholder="Copy plugin" 
                    onChange={handleOnChange}
                />
                <br />        
                <button type="submit">Save</button>
            </form>

            <div dangerouslySetInnerHTML={{__html: plugin}}>
            </div>

        </div>
    )
}

export default plugin