import "./userCard.css"; 

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://via.placeholder.com/150";
  const name = "John Doe";
  const email = "johndoe@example.com";
  const phone = "+1 234 567 890";
  const address = "123 Main St, Springfield, USA";

  return (
    <div className="usercard-container">
      <div className="usercard">
        <img src={profilePhoto} alt="Profile" className="profile-img" />
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default Usercard;