import { useState } from "react";

const NewBuildComponent = (props) => {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => {
    setShowing(!showing);
  }
  const [newPcBuild, setNewPcBuild] = useState({
    buildName: "",
    image: "",
    rating: 0,
    cpu: "",
    cpuCooler: "",
    motherBoard : "",
    memory: "",
    storage: "",
    videoCard: "",
    powerSupply: "",
    case: "",
  })

  const handleInputChange = (e) => {
    setNewPcBuild({
      ...newPcBuild,
      [e.target.name]: e.target.value
    })
  }

  const submitNewBuild = (e) => {
    e.preventDefault();

    props.createNewPcBuild(newPcBuild);
    setNewPcBuild({
      buildName: "",
      image: "",
      rating: 0,
      cpu: "",
      cpuCooler: "",
      motherBoard : "",
      memory: "",
      storage: "",
      videoCard: "",
      powerSupply: "",
      case: "",
    });

    setShowing(false);
  }

  return(
    <>
    {
      showing ?
      <div id="new-build-form">
        <button onClick={toggleShowing}>X</button>
        <form onSubmit={submitNewBuild}>
          Build Name: <input onChange={handleInputChange} value={newPcBuild.buildName} type="text" name="buildName"/>
          Image URL: <input onChange={handleInputChange} value={newPcBuild.image} type="text" name="image"/>
          Rating: <input onChange={handleInputChange} value={newPcBuild.rating} type="number" name="rating"/>
          Cpu: <input onChange={handleInputChange} value={newPcBuild.cpu} type="text" name="cpu"/>
          Cpu Cooler: <input onChange={handleInputChange} value={newPcBuild.cpuCooler} type="text" name="cpuCooler"/>
          Motherboard: <input onChange={handleInputChange} value={newPcBuild.motherBoard} type="text" name="motherBoard"/>
          Memory: <input onChange={handleInputChange} value={newPcBuild.memory} type="text" name="memory"/>
          Storage: <input onChange={handleInputChange} value={newPcBuild.storage} type="text" name="storage"/>
          Video Card: <input onChange={handleInputChange} value={newPcBuild.videoCard} type="text" name="videoCard"/>
          Power Supply: <input onChange={handleInputChange} value={newPcBuild.powerSupply} type="text" name="powerSupply"/>
          Case: <input onChange={handleInputChange} value={newPcBuild.case} type="text" name="case"/>
          <button type="submit">Submit</button>
        </form>
      </div>
      :
      <button onClick={toggleShowing}>Create New Build</button>
    }
    </>
  )
}

export default NewBuildComponent;