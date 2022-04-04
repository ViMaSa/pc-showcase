import { useEffect, useState } from "react";
import SingleBuildComponent from "./singleBuildComponent/singleBuildComponent";
import NewBuildComponent from "./newBuildComponent/newBuildComponent";

const PCBuildContainer = () => {
  const [pcBuilds, setPcBuilds] = useState([]);
  const getBuilds = async () => {
    try {
      const builds = await fetch ("https://pc-showcase-backend.herokuapp.com/builds");
      const parsedBuilds = await builds.json();
      setPcBuilds(parsedBuilds.data);
    } catch (err) {
      console.log(err);
    }
  }

  const deletePcBuild = async (idToDelete) => {
    try {
      const apiResponse = await fetch(`https://pc-showcase-backend.herokuapp.com/builds/${idToDelete}`, {
        method: "DELETE"
      })
      const parsedResponse = await apiResponse.json();
      if(parsedResponse.success){
        const newBuilds = pcBuilds.filter(build=> build._id !== idToDelete);
        setPcBuilds(newBuilds);
      }
    } catch (err) {
      console.log(err);
    }
    console.log("deleting build ID");
  }

  const createNewPcBuild = async (newPcBuild) => {
    const apiResponse = await fetch("https://pc-showcase-backend.herokuapp.com/builds", {
      method: "POST",
      body: JSON.stringify(newPcBuild),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const parsedResponse = await apiResponse.json();

    if(parsedResponse.success){
      setPcBuilds([parsedResponse.data, ...pcBuilds]);
    }
  }

  const updatePcBuild = async(idToUpdate, pcBuildToUpdate) => {
    const apiResponse = await fetch(`https://pc-showcase-backend.herokuapp.com/builds/${idToUpdate}`, {
      method: "PUT",
      body: JSON.stringify(pcBuildToUpdate),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const parsedResponse = await apiResponse.json();

    if(parsedResponse.success){
      const newPcBuilds = pcBuilds.map(build=> build._id === idToUpdate ? pcBuildToUpdate : build);
      setPcBuilds(newPcBuilds);
    }
  }

  useEffect(() => {
    getBuilds()
  }, []);

  return (
    <div>
      <NewBuildComponent
        createNewPcBuild={createNewPcBuild}>
      </NewBuildComponent>
      {pcBuilds.reverse().map(build => {
        return <SingleBuildComponent 
            key={build._id}
            pcBuild={build}
            deletePcBuild={deletePcBuild}
            updatePcBuild={updatePcBuild}>
          </SingleBuildComponent>
      })}
    </div>
  )
}

export default PCBuildContainer;