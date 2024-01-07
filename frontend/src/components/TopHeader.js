import { Link } from 'react-router-dom';
import '../styles/topHeader.css';

export function TopHeader() {
  return (
    <div className="topHeader">
      <div className="support-info">
        <div className="phone-info">
          <i className="fas fa-phone"></i> 2347038492560
        </div>
        <div className="email-info">
          <i className="fas fa-envelope"></i> info@wayazone.com
        </div>
      </div>
      <div className="admin-login">
        <Link to="/admin/login">
          <i className="fas fa-user"></i>
        </Link>
      </div>
    </div>
  );
}
