import { Container } from "./styles";

import { Summary } from "../Summary"
import { TransitionTable } from "../TransactionsTable";

export function Dashboard() {
    return (

        <Container>
            <Summary />
            <TransitionTable/>
        </Container>
    )
}