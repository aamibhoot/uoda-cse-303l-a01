import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";

export default function Datatable({ data }) {
  const [pending, setPending] = useState(true);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(data);
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  const columns = [
    {
      name: "#",
      selector: (row) => row.id,
      sortable: true,
      width: "50px",
    },
    {
      name: "Name",
      selector: (row) => row.first_name + " " + row.last_name,
      sortable: true,
    },
    {
      name: "DoB",
      selector: (row) => row.dob,
      sortable: true,
    },
    {
      name: "Mobile",
      selector: (row) => row.mobile,
      sortable: true,
    },
    {
      name: "Dpt",
      selector: (row) => row.department,
      width: "50px",
    },
    {
      name: "UID",
      selector: (row) => row.studentId,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Ver",
      selector: (row) => (row.isVerified ? "Yes" : "No"),
      sortable: true,
      width: "50px",
    },
  ];
  const customStyles = {
    rows: {
      style: {
        minHeight: "72px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        background: "#4339ca",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
        marginBottom: "10px",
        marginLeft: "8px",
      },
    },
  };
  return (
    <DataTable
      columns={columns}
      data={data}
      defaultSortFieldId={1}
      theme="dark"
      pagination
      fixedHeader
      fixedHeaderScrollHeight="300px"
      customStyles={customStyles}
      progressPending={pending}
    />
  );
}
