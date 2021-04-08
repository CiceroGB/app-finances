import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


export function TransitionTable() {

    useEffect(() => {
        api.get('transactions')
            .then(data => console.log(data))
    }, []);


    return (
        <Container>

            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Salário</td>
                        <td className="deposit">R$5.000</td>
                        <td>Fixo</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Gasto </td>
                        <td className="withdraw">-R$5.000</td>
                        <td>Fixo</td>
                        <td>20/02/2021</td>
                    </tr>

                </tbody>
            </table>

        </Container>
    )
}