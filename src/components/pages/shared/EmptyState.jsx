"use client"

import { Button } from "react-bootstrap"

const EmptyState = ({
  icon = "fas fa-inbox",
  title = "No data found",
  description = "There's nothing to show here yet.",
  actionText = null,
  onAction = null,
}) => {
  return (
    <div className="text-center py-5">
      <i className={`${icon} fa-4x text-muted mb-3`}></i>
      <h5 className="text-muted mb-2">{title}</h5>
      <p className="text-muted mb-3">{description}</p>
      {actionText && onAction && (
        <Button variant="primary" onClick={onAction}>
          {actionText}
        </Button>
      )}
    </div>
  )
}

export default EmptyState
