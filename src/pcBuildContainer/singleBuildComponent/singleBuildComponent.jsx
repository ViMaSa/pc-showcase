import { useState } from "react";

const SingleBuildComponent = (props) => {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => {
    setShowing(!showing);
  };

  const [updatePcBuild, setUpdatePcBuild] = useState({
    buildName: props.pcBuild.buildName,
    image: props.pcBuild.image,
    rating: props.pcBuild.rating,
    cpu: props.pcBuild.cpu,
    cpuCooler: props.pcBuild.cpuCooler,
    motherBoard : props.pcBuild.motherBoard ,
    memory: props.pcBuild.memory,
    storage: props.pcBuild.storage,
    videoCard: props.pcBuild.videoCard,
    powerSupply: props.pcBuild.powerSupply,
    case: props.pcBuild.case,
    _id: props.pcBuild._id,
  });

  const handleInputChange = (e) => {
    setUpdatePcBuild({
      ...updatePcBuild,
      [e.target.name]: e.target.value
    })
  }

  const submitUpdatePcBuild = (e) => {
    e.preventDefault();
    props.updatePcBuild(props.pcBuild._id, updatePcBuild);
    setShowing(false);
  }

  return (
    <div className="index-single-pc-build">
      <h2>Build Name: {props.pcBuild.buildName}</h2>
      <div className="index-single-pc-build-details">
        <img src={props.pcBuild.image} alt={props.pcBuild.buildName} />
        <p>Rating: {props.pcBuild.rating}</p>
        <p>Cpu: {props.pcBuild.cpu}</p>
        <p>Cpu Cooler: {props.pcBuild.cpuCooler}</p>
        <p>MotherBoard: {props.pcBuild.motherBoard }</p>
        <p>Memory: {props.pcBuild.memory}</p>
        <p>Storage: {props.pcBuild.storage}</p>
        <p>Video Card: {props.pcBuild.videoCard}</p>
        <p>Power Supply: {props.pcBuild.powerSupply}</p>
        <p>Case: {props.pcBuild.case}</p>
      </div>
      <button onClick={()=>{
        props.deletePcBuild(props.pcBuild._id);
      }}>Delete</button>
      <>
      {
        showing ?
          <div id="edit-pc-build-form">
            <button onClick={toggleShowing}>X</button>
            <form onSubmit={submitUpdatePcBuild}>
              Build Name: <input onChange={handleInputChange} value={updatePcBuild.buildName} type="text" name="buildName"/>
              Image URL: <input onChange={handleInputChange} value={updatePcBuild.image} type="text" name="image"/>
              Rating: <input onChange={handleInputChange} value={updatePcBuild.rating} type="number" name="rating"/>
              Cpu: <input onChange={handleInputChange} value={updatePcBuild.cpu} type="text" name="cpu"/>
              Cpu Cooler: <input onChange={handleInputChange} value={updatePcBuild.cpuCooler} type="text" name="cpuCooler"/>
              Motherboard: <input onChange={handleInputChange} value={updatePcBuild.motherBoard} type="text" name="motherBoard"/>
              Memory: <input onChange={handleInputChange} value={updatePcBuild.memory} type="text" name="memory"/>
              Storage: <input onChange={handleInputChange} value={updatePcBuild.storage} type="text" name="storage"/>
              Video Card: <input onChange={handleInputChange} value={updatePcBuild.videoCard} type="text" name="videoCard"/>
              Power Supply: <input onChange={handleInputChange} value={updatePcBuild.powerSupply} type="text" name="powerSupply"/>
              Case: <input onChange={handleInputChange} value={updatePcBuild.case} type="text" name="case"/>
              <button type="submit">Submit</button>
            </form>
          </div>
        :
          <button onClick={toggleShowing}>Edit This Build</button>
      }
      </>
    </div>
  )
}

export default SingleBuildComponent;