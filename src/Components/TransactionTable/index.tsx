import { useContext } from "react"
import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";

export function Transactiontable(){

    const {transactions} = useTransactions()

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                   {
                       transactions.map(transaction =>{
                           return(
                            <tr key={transaction.id}>
                                <td className="title">{transaction.title}</td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('pt-Br',{
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transaction.amount)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {transaction.createdAt}
                                </td>
                            </tr>
                           )
                       })
                   }
                   
                  
                </tbody>
            </table>
        </Container>
    );
}