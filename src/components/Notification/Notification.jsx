import './Notification.scss';
import { useCart } from '../../context/CartContext';
import { Badge } from '../SvgIcons';

const Notification = () => {
  const { notification } = useCart();

  if (!notification) return null;

  return (
    <div className="notification">
      <div className="notification-content">
        <Badge />
        <span>{notification}</span>
      </div>
    </div>
  );
};

export default Notification;