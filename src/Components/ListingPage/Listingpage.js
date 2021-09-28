import React, { useEffect } from "react";
import "./Listingpage.css";
import { useSelector, useDispatch } from "react-redux";
import { paginator, setCurrentPage } from "../../Redux/appSlice";
import { useHistory } from "react-router-dom";

function Listingpage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector((state) => state.app.currentProductList);
  const { currentPage, totalPages } = useSelector(
    (state) => state.app.pagination
  );

  useEffect(() => {
    dispatch(paginator(currentPage));
  }, [currentPage]);

  return (
    <div className="listingPage">
      <div className="container">
        {data.map((product, index) => {
          return (
            <div className="product_container" key={index}>
              <h3>{product.title}</h3>
              <img className="Image_two" src={product.imgURL}></img>
              <button
                id="button_two"
                className="Button_design"
                onClick={(e) => history.push(`/product/${product.id}`)}
              >
                View Product
              </button>
            </div>
          );
        })}
      </div>
      <div className="paginationBar">
        <button
          onClick={(e) =>
            dispatch(setCurrentPage(currentPage - 1 ? currentPage - 1 : 1))
          }
        >{`<`}</button>
        {`${currentPage} / ${totalPages}`}{" "}
        <button
          onClick={(e) =>
            dispatch(
              setCurrentPage(
                currentPage + 1 < totalPages ? currentPage + 1 : totalPages
              )
            )
          }
        >{`>`}</button>
      </div>
    </div>
  );
}
export default Listingpage;
