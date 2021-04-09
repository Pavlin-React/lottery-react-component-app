import { getRandomNumber } from './utils'

export function registerTickets() {
    let newTicket = {
        number : getRandomNumber,
        color  : 'red'
    }

    this.setState( ( prevState ) => {
        prevState.tickets.push( newTicket )

        return {
            remainingTickets    :   -- prevState.remainingTickets,
            tickets             :   prevState.tickets
        }
    })
}