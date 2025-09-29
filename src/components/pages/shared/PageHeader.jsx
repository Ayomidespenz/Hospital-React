"use client"

import { Container, Row, Col, Button } from "react-bootstrap"

const PageHeader = ({ title, subtitle, icon, actions = [], breadcrumbs = [] }) => {
  return (
    <div className="bg-white border-bottom mb-4">
      <Container className="py-4">
        {breadcrumbs.length > 0 && (
          <Row className="mb-2">
            <Col>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  {breadcrumbs.map((crumb, index) => (
                    <li key={index} className={`breadcrumb-item ${index === breadcrumbs.length - 1 ? "active" : ""}`}>
                      {index === breadcrumbs.length - 1 ? (
                        crumb.label
                      ) : (
                        <a href={crumb.href} className="text-decoration-none">
                          {crumb.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </Col>
          </Row>
        )}
        <Row className="align-items-center">
          <Col>
            <div className="d-flex align-items-center">
              {icon && (
                <div className="text-hospital-primary me-3">
                  <i className={`${icon} fa-2x`}></i>
                </div>
              )}
              <div>
                <h1 className="h2 text-hospital-primary mb-1">{title}</h1>
                {subtitle && <p className="text-muted mb-0">{subtitle}</p>}
              </div>
            </div>
          </Col>
          {actions.length > 0 && (
            <Col xs="auto">
              <div className="d-flex gap-2">
                {actions.map((action, index) => (
                  <Button
                    key={index}
                    variant={action.variant || "primary"}
                    size={action.size || "md"}
                    onClick={action.onClick}
                  >
                    {action.icon && <i className={`${action.icon} me-2`}></i>}
                    {action.label}
                  </Button>
                ))}
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  )
}

export default PageHeader
