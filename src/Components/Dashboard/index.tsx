import { Summary } from "../Summary";
import { Transactiontable } from "../TransactionTable";
import { Container } from "./styles";

export function Dashboard (){
    return(
        <Container>
            <Summary/>
            <Transactiontable/>
        </Container>
    );
}