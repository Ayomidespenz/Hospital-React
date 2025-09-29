"use client"

import { Table, Button } from "react-bootstrap"
import StatusBadge from "./StatusBadge"
import EmptyState from "./EmptyState"

const DataTable = ({
  columns = [],
  data = [],
  actions = [],
  emptyStateProps = {},
  hover = true,
  striped = false,
  responsive = true,
}) => {
  const renderCellContent = (item, column) => {
    if (column.render) {
      return column.render(item[column.key], item)
    }

    if (column.type === "badge") {
      return <StatusBadge status={item[column.key]} type={column.badgeType} />
    }

    if (column.type === "date") {
      return new Date(item[column.key]).toLocaleDateString()
    }

    if (column.type === "currency") {
      return `$${Number.parseFloat(item[column.key]).toFixed(2)}`
    }

    return item[column.key]
  }

  if (data.length === 0) {
    return (
      <EmptyState
        icon={emptyStateProps.icon || "fas fa-table"}
        title={emptyStateProps.title || "No data available"}
        description={emptyStateProps.description || "There are no records to display."}
        actionText={emptyStateProps.actionText}
        onAction={emptyStateProps.onAction}
      />
    )
  }

  const TableComponent = (
    <Table hover={hover} striped={striped} className="mb-0">
      <thead className="table-light">
        <tr>
          {columns.map((column) => (
            <th key={column.key} className={column.className}>
              {column.label}
            </th>
          ))}
          {actions.length > 0 && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id || index}>
            {columns.map((column) => (
              <td key={column.key} className={column.className}>
                {renderCellContent(item, column)}
              </td>
            ))}
            {actions.length > 0 && (
              <td>
                <div className="d-flex gap-1">
                  {actions.map((action, actionIndex) => (
                    <Button
                      key={actionIndex}
                      variant={action.variant || "outline-primary"}
                      size="sm"
                      onClick={() => action.onClick(item)}
                      title={action.title}
                    >
                      <i className={action.icon}></i>
                    </Button>
                  ))}
                </div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  )

  return responsive ? <div className="table-responsive">{TableComponent}</div> : TableComponent
}

export default DataTable
