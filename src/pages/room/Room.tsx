import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';
import Dropdown from '../../shared/dropdown/Dropdown';
import Datetime from '../../shared/datetime/Datetime';
import './Room.scss';
import Floor6 from "../../components/floor6/Floor6";
import '../../components/floor6/Floor6.scss';

const Room: React.FC = () => {
  const { user, logout, getUserInfo } = useAuth();
  const navigate = useNavigate();
  const userInfo = getUserInfo();
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);

  if (!user) {
    navigate('/');
    return null;
  }

  const handleFloorSelect = (floor: string) => {
    setSelectedFloor(floor);
  };

  return (
    <div className="eiei">
      <div 
        className="logout-button"
        onClick={() => {
          logout();
          navigate('/');
        }}
      >
        <div>
          <p>Welcome, {userInfo.name}!</p>
        </div>
        <div className=''>
          <p>LogOut!</p>
        </div>
      </div>
      <div className="controls">
        <label htmlFor="roomDropdown">Select Room:</label>
        <Dropdown onFloorSelect={handleFloorSelect} />
        <label htmlFor="dateTimeInput">Select Date and Time:</label>
        <Datetime />
      </div>
      {selectedFloor === 'ชั้น6' && <Floor6 />}
    </div>
  );
};

export default Room;
