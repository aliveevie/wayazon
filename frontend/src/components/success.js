// Success.jsx
import SuccessIcon from '../images/icons/link.svg';
import '../styles/success.css';

export function Success() {
  return (
    <div className='success-container'>
      <img src={SuccessIcon} alt='Image Added Successfully' />
      <h3>Added Successfully</h3>
    </div>
  );
}
