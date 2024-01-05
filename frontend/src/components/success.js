// Success.jsx
import SuccessIcon from '../images/icons/link.svg';
import '../styles/success.css';

export function Success({message}) {
  return (
    <div className='success-container'>
      <img src={SuccessIcon} alt='Image Added Successfully' />
      <h3>{message}</h3>
    </div>
  );
}
