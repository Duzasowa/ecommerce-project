import React from "react";
import { Link } from "react-router-dom";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import moment from "moment";

const LatestOrder = (props) => {
  const { loading, error, orders } = props;
  return (
    <div className="card-body">
      <h4 className="card-title">New orders</h4>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <div className="table-responsive">
          <table className="table">
            <tbody>
              {orders.slice(0, 5).map((order) => (
                <tr key={order._id}>
                  <td>
                    <b>{order.user.name}</b>
                  </td>
                  <td>{order.user.email}</td>
                  <td>${order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      <span className="badge rounded-pill alert-success">
                        Paid At {moment(order.paidAt).format("MMM Do YY")}
                      </span>
                    ) : (
                      <span className="badge rounded-pill alert-danger">
                        No Paid
                      </span>
                    )}
                  </td>
                  <td>{moment(order.createdAt).calendar()}</td>
                  <td className="d-flex justify-content-end align-item-center">
                    <Link to={`/order/${order._id}`} className="text-success">
                      <i className="fas fa-eye"></i>
                    </Link>
                  </td>
                </tr>
              ))}

              {/* Not Paid */}
              {/* <tr>
                <td>
                  <b>User</b>
                </td>
                <td>user@example.com</td>
                <td>$345</td>
                <td>
                  <span className="badge rounded-pill alert-danger">
                    Created At Today at 10:13 AM
                  </span>
                </td>
                <td>Today at 10:13 AM</td>
                <td className="d-flex justify-content-end align-item-center">
                  <Link to={`/order`} className="text-success">
                    <i className="fas fa-eye"></i>
                  </Link>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};

export default LatestOrder;
