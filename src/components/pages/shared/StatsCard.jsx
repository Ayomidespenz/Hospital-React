"use client"

import { Card } from "react-bootstrap"

const StatsCard = ({ title, value, icon, color = "primary", trend = null, subtitle = null, onClick = null }) => {
  const colorClasses = {
    primary: "text-hospital-primary",
    success: "text-success",
    warning: "text-warning",
    danger: "text-danger",
    info: "text-info",
    secondary: "text-secondary",
  }

  return (
    <Card
      className={`border-0 shadow-sm h-100 ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
      style={onClick ? { cursor: "pointer" } : {}}
    >
      <Card.Body className="text-center">
        <div className={`${colorClasses[color]} mb-2`}>
          <i className={`${icon} fa-2x`}></i>
        </div>
        <h3 className={`${colorClasses[color]} mb-1`}>{value}</h3>
        <p className="text-muted small mb-0">{title}</p>
        {subtitle && <p className="text-muted small mb-0">{subtitle}</p>}
        {trend && (
          <div className="mt-2">
            <small className={trend.direction === "up" ? "text-success" : "text-danger"}>
              <i className={`fas fa-arrow-${trend.direction} me-1`}></i>
              {trend.value}
            </small>
          </div>
        )}
      </Card.Body>
    </Card>
  )
}

export default StatsCard
