import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.sortOrder = sortColumn.sortOrder === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.sortOrder = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    if (this.props.sortColumn.path !== column.path) return null;
    return this.props.sortColumn.sortOrder === "asc" ? (
      <i className="fa fa-sort-asc" />
    ) : (
      <i className="fa fa-sort-desc" />
    );
  };
  columns = this.props.columns;
  render() {
    return (
      <thead>
        <tr>
          {this.columns.map((column) => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
              scope="col"
            >
              {column.name} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
