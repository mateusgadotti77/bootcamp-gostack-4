/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <img
                src="https://artwalk.vteximg.com.br/arquivos/ids/219519-380-380/Tenis-Nike-Air-Jordan-1-Mid-Masculino-Preto.jpg?v=637136682643300000"
                alt="Tênis"
              />
            </td>
            <td>
              <strong>Air Jordan 1</strong>
              <span>R$990,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159C1" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159C1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$1981,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}
