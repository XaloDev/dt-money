import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <table>
        <tbody>
          <tr>
            <td width={'50%'}>Desenvolvimento de site</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Venda</td>
            <td>01/04/2023</td>
          </tr>
          <tr>
            <td width={'50%'}>Compra de site</td>
            <td className="deposit">- R$ 12.000,00</td>
            <td>Venda</td>
            <td>01/04/2023</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
