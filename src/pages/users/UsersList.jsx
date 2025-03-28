import "./UsersList.css";
import { useState } from "react";
import { userRows } from "../../data";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
// icons
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function UsersList() {
  // State
  const [usersData, setUsersData] = useState(userRows);

  // Functions
  const userDelete = userId => {
    setUsersData(prev => {
      const newUsers = prev.filter(user => user.id !== userId);

      return newUsers;
    });
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "User",
      width: 200,

      renderCell: params => {
        return (
          <Link className="link" to={``}>
            <div className="userlist__user">
              <img src={params.row.avatar} alt="" className="userlist__user-img" />
              <span>{params.row.username}</span>
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 90,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: params => {
        return (
          <div className="actions">
            <Link className="link" to={`/user/${params.row.id}`}>
              <button className="userlist__edit-btn">edit</button>
            </Link>

            <DeleteOutlineIcon className="userlist__delete-btn" onClick={() => userDelete(params.row.id)} />
          </div>
        );
      },
    },
  ];

  return (
    <div className="userlist">
      <DataGrid
        rows={usersData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 4,
            },
          },
        }}
        pageSizeOptions={[4]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}

export default UsersList;
