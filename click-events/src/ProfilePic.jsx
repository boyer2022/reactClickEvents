
function ProfilePic(){

    const imageUrl = './src/assets/stupid.jpeg';

    // const handleClick = () => console.log("OUCH!");

    // Callback function
    const handleClick = (e) => e.target.style.display = "none";

    return(<img onClick={(e) => handleClick(e)} src={imageUrl}></img>);
}
export default ProfilePic