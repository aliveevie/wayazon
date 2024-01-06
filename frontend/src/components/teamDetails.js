import '../styles/showDetails.css';


export function ShowMemberDetails({ currentData, handleCurrentData }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={() => handleCurrentData(null)}>
          &times; Close
        </button>
        <div className="details-container">
        {currentData.image_link && (
            <div className="image-container">
              <img src={currentData.image_link} alt={currentData.name} />
            </div>
          )}
          <p>Name: {currentData.name}</p>
          <p>Title: {currentData.title}</p>
          <p>{currentData.description}</p>
        </div>
      </div>
    </div>
  );
}