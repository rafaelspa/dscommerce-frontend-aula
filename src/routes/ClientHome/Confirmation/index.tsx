import "./styles.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { OrderDTO } from "../../../models/order";
import * as orderService from "../../../services/order-service";
import { Link } from "react-router-dom";
import ButtonInverse from "../../../components/ButtonInverse";

export default function Confirmation() {
  const params = useParams();

  const [order, setOrder] = useState<OrderDTO>();

  useEffect(() => {
    orderService.findByIdRequest(Number(params.orderId)).then((response) => {
      setOrder(response.data);
    });
  }, []);

  return (
    <main>
      <section id="confirmation-section" className="dsc-container">
        <div className="dsc-card dsc-mb20">
          {order?.items.map((item) => (
            <div
              key={item.productId}
              className="dsc-order-item-container dsc-line-bottom"
            >
              <div className="dsc-order-item-left">
                <img src={item.imgUrl} alt={item.name} />
                <div className="dsc-order-item-description">
                  <h3>{item.name}</h3>
                  <div className="dsc-order-item-quantity-container">
                    <p>{item.quantity}</p>
                  </div>
                </div>
              </div>
              <div className="dsc-order-item-right">
                R$ {item.subTotal.toFixed(2)}
              </div>
            </div>
          ))}

          <div className="dsc-order-total-container">
            <h3>R$ {order?.total.toFixed(2)}</h3>
          </div>
        </div>

        <div className="dsc-confirmation-message dsc-mb20">
          Pedido realizado! Número {order?.id}
        </div>
        <div className="dsc-btn-container">
          <Link to="/">
            <ButtonInverse text="Início" />
          </Link>
        </div>
      </section>
    </main>
  );
}
