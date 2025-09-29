import { Badge } from "react-bootstrap"

const StatusBadge = ({ status, type = "default" }) => {
  const getVariant = () => {
    if (type === "appointment") {
      switch (status.toLowerCase()) {
        case "confirmed":
          return "success"
        case "pending":
          return "warning"
        case "cancelled":
          return "danger"
        case "completed":
          return "info"
        default:
          return "secondary"
      }
    }

    if (type === "medical") {
      switch (status.toLowerCase()) {
        case "normal":
        case "stable":
          return "success"
        case "elevated":
        case "monitoring":
          return "warning"
        case "critical":
        case "urgent":
          return "danger"
        case "ongoing treatment":
        case "recovery":
          return "info"
        default:
          return "secondary"
      }
    }

    if (type === "billing") {
      switch (status.toLowerCase()) {
        case "paid":
          return "success"
        case "pending":
          return "warning"
        case "overdue":
          return "danger"
        default:
          return "secondary"
      }
    }

    // Default status colors
    switch (status.toLowerCase()) {
      case "active":
      case "approved":
      case "completed":
        return "success"
      case "pending":
      case "in progress":
        return "warning"
      case "inactive":
      case "rejected":
      case "cancelled":
        return "danger"
      case "draft":
      case "review":
        return "info"
      default:
        return "secondary"
    }
  }

  return <Badge bg={getVariant()}>{status}</Badge>
}

export default StatusBadge
