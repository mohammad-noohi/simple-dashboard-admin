import "./Products.css";
import React, { useState } from "react";
import { products } from "../../data";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
// icons
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Products() {
  const [productsData, setProductsData] = useState(products);

  // Functions
  const deleteProduct = productId => {
    setProductsData(prev => {
      const newProducts = prev.filter(product => product.id !== productId);
      return newProducts;
    });
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Info",
      width: 200,
      renderCell: params => {
        return (
          <div className="product__info">
            <img src={`src/assets/images/products/${params.row.pic}`} alt="" className="product__pic" />
            <span className="product__title">{params.row.title}</span>
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
      renderCell: params => {
        return <span>$ {params.row.price}</span>;
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: params => {
        return (
          <div className="actions">
            <Link className="link" to={`/product/${params.row.id}`}>
              <button className="products__edit-btn">edit</button>
            </Link>

            <DeleteOutlineIcon className="products__delete-btn" onClick={() => deleteProduct(params.row.id)} />
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div className="products">
        <DataGrid
          rows={productsData}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 4,
              },
            },
          }}
          pageSizeOptions={[4]}
        />
      </div>
    </>
  );
}

export default Products;
