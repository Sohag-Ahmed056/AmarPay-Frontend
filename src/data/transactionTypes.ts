
import addMoney from '../assets/images/add-wallet.png'
import sendMoney from '../assets/images/money-transaction.png'
import cashIn from '../assets/images/money-refund.png'
import withdrawMoney from '../assets/images/money-transfer (1).png'

export const transactionTypes = [
    {
        id: 1,
        title: 'Add Money',
        link: '/add-money',
        icon: addMoney
    },
    {
        id: 2,
        title: 'Withdraw Money',
        link: '/withdraw-money',
        icon: withdrawMoney
    },
    {
        id: 3,
        title: 'Send Money',
        link: '/send-money',
        icon: sendMoney
    },
    {
        id: 4,
        title: 'Cash In',
        link: '/cash-in',
        icon: cashIn
    },
    {
        id: 4,
        title: 'Cash Out',
        link: '/cash-out',
        icon: withdrawMoney
    }
]