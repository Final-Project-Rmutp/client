import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthLogin';
import Dropdown from '../../shared/dropdown/Dropdown';
import Datetime from '../../shared/datetime/Datetime';
import Floor6 from "../../components/floor6/Floor6";
import './Room.scss'; // You can uncomment this line if you have a Room.scss file
const Room: React.FC = () => {
  const { user, logout, getUserInfo } = useAuth();
  const navigate = useNavigate();
  const userInfo = getUserInfo();
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);

  const handleFloorSelect = (floor: string) => {
    setSelectedFloor(floor);
  };

  return (
    <div className="eiei center-content">
      {user && (
        <div className="logout-button" onClick={() => { logout(); navigate('/'); }}>
          <p>Welcome, {userInfo.name}!</p>
        </div>
      )}
      {!user && (
        <div className="login-button-user" onClick={() => { navigate('/login'); }}>
          <div>
            <p>Sing in</p>
          </div>
        </div>
      )}
      <div className="center-controls">
        <div className="controls">
          <label htmlFor="roomDropdown">Select Room:</label>
          <Dropdown onFloorSelect={handleFloorSelect} />
          <label htmlFor="dateTimeInput">Select Date and Time:</label>
          <Datetime />
        </div>
      </div>
      {selectedFloor === 'ชั้น6' && <Floor6 />}
    </div>
  );
};

export default Room;
