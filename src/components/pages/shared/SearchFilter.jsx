"use client"

import { useState } from "react"
import { Row, Col, Form, InputGroup, Button } from "react-bootstrap"

const SearchFilter = ({
  onSearch,
  onFilter,
  filterOptions = [],
  searchPlaceholder = "Search...",
  filterLabel = "Filter by",
  showExport = false,
  onExport = null,
}) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterValue, setFilterValue] = useState("all")

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  const handleFilterChange = (e) => {
    const value = e.target.value
    setFilterValue(value)
    onFilter(value)
  }

  return (
    <Row className="mb-4">
      <Col md={showExport ? 6 : 8}>
        <InputGroup>
          <InputGroup.Text>
            <i className="fas fa-search"></i>
          </InputGroup.Text>
          <Form.Control type="text" placeholder={searchPlaceholder} value={searchTerm} onChange={handleSearchChange} />
        </InputGroup>
      </Col>
      <Col md={showExport ? 4 : 4}>
        <Form.Select value={filterValue} onChange={handleFilterChange}>
          <option value="all">{filterLabel}</option>
          {filterOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
      </Col>
      {showExport && (
        <Col md={2}>
          <Button variant="outline-primary" className="w-100" onClick={onExport}>
            <i className="fas fa-download me-2"></i>
            Export
          </Button>
        </Col>
      )}
    </Row>
  )
}

export default SearchFilter
