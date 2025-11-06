import { Link } from "react-router-dom";

export default function Breadcrumb({ items }) {
  return (
    <div className="StaffingHero-breadcrumb">
      {items.map((item, index) => (
        <span key={index} className="breadcrumb-wrapper">
          {item.to ? (
            <Link to={item.to} className="StaffingHero-breadcrumb-item">
              {item.label}
            </Link>
          ) : (
            <span className="StaffingHero-breadcrumb-item StaffingHero-breadcrumb-active">
              {item.label}
            </span>
          )}
          {index < items.length - 1 && (
            <span className="StaffingHero-breadcrumb-separator">›</span>
          )}
        </span>
      ))}
    </div>
  );
}
