

import { useContext } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import inCome from '../../assets/Entradas.svg'
import outCome from '../../assets/Saidas.svg'
import total from '../../assets/Total.svg'



import { Container } from "./styles";

export function Summary (){
    
    const { transactions } = useTransactions()

    // const totalDeposits = transactions.reduce((acc, transaction) =>{
    //     if (transaction.type === 'deposit'){
    //         return acc + transaction.amount
    //     }

    //     return acc;
    // },0)

    const summary = transactions.reduce((acc,transaction)=>{
        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }
        else{
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws:0,
        total:0
    })

    return(
        <Container>

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={inCome} alt="Entradas" />
                </header>
                <strong>{summary.deposits}</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outCome} alt="Entradas" />
                </header>
                <strong>{summary.withdraws}</strong>
            </div>
            <div className="high-background">
                <header>
                    <p>Total</p>
                    <img src={total} alt="Entradas" />
                </header>
                <strong>{summary.total}</strong>
            </div>

        </Container>
    )
}