import {useEffect, useState} from "react";
import yaml from "js-yaml";

function Help() {
  const [page, setPage] = useState({});
  const [resources, setResources] = useState([]);

  useEffect(() => {
    async function loadHelp(){
      try{

        //read yaml
        const response = await fetch("/help.yaml");

        if(!response.ok){
          throw new ERROR("Failed to load help yaml");
        }

        //convert yaml to javascript
        const text = await response.text();
        const data = yaml.load(text);

        // store data
        setPage(data.page);
        setResources(data.resources || []);

      } catch(error){
        console.error("Error loading help resources:", error);
      }
    }
    loadHelp();

  }, []);

  return (
    <div>
      <h1>{page.title || "Help"}</h1>
      <p>{page.description}</p>

      {resources.map((resource, index) => (
        <div key={index}>
          <h3>{resource.title}</h3>
          <p>{resource.description}</p>

          {resource.url && (
           <a
           href = {resource.url}
           target="_blank"
           rel = "noopener noreferrer"
           >
            Watch Video
           </a> 
           ) }
           </div>
      ))}


    </div>
  );
}

export default Help;