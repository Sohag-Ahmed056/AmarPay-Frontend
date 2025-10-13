import TransactionTypeCard from "@/components/TransactionTypeCard";
import { Card } from "@/components/ui/card";
import { useGetUserTransactionHistoryQuery } from "@/redux/features/transaction/transaction.api";
import { useGetSingleWalletQuery } from "@/redux/features/wallet/wallet.api";
import { TransactionTypes } from "@/types/transaction.types";
import { Coins, UserIcon, WalletIcon } from "lucide-react";
import { TbMoneybag } from "react-icons/tb";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { useGetCurrentUserQuery } from "@/redux/features/auth/auth.api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import addMoney from "../../assets/images/money-refund.png";
import sendMoney from "../../assets/images/money-transaction.png";
import cashIn from "../../assets/images/money-refund.png";
import withdrawMoney from "../../assets/images/atm.png";

export const restartTour = () => {
  const navigate = useNavigate();
  navigate("/user/analytics");
  localStorage.removeItem("tourSeen");
  const driverObj = driver({
    showProgress: true,
    showButtons: ["next", "previous", "close"],
    animate: true,
    stagePadding: 10,
    steps: [
      {
        element: ".transaction-summary",
        popover: {
          title: "Transaction Summary Section",
          description:
            "This is where you see a quick summary of your transactions.",
          side: "bottom",
          align: "start",
        },
      },
      {
        element: ".transaction-type",
        popover: {
          title: "Transaction Type Section",
          description:
            "Here you can perform different types of money operations.",
          side: "bottom",
          align: "start",
        },
      },
    ],
  });
  driverObj.drive();
};

const UserAnalytics = () => {
  const { data: userWallet } = useGetSingleWalletQuery(undefined);
  const { data: transactions } = useGetUserTransactionHistoryQuery(undefined);
  const { data } = useGetCurrentUserQuery(undefined);
  const user = data?.data;

  const totalTransactedAmount = transactions?.data.transactions.reduce(
    (sum: number, acc: any) => sum + acc.amount,
    0
  );

  const totalMoneyWithdraw = transactions?.data.transactions.reduce(
    (sum: number, acc: any) => {
      if (
        acc.type === TransactionTypes.WITHDRAW_MONEY ||
        acc.type === TransactionTypes.CASH_OUT
      ) {
        return sum + acc.amount;
      }
      return sum;
    },
    0
  );

  const transactionTypes = [
    {
      id: 1,
      title: "Add Money",
      link: "/user/add-money",
      icon: addMoney,
    },
    {
      id: 2,
      title: "Withdraw Money",
      link: "/user/withdraw-money",
      icon: withdrawMoney,
    },
    {
      id: 3,
      title: "Send Money",
      link: "/user/send-money",
      icon: sendMoney,
    },
    {
      id: 4,
      title: "Cash Out",
      link: "/user/cash-out",
      icon: cashIn,
    },
  ];

  useEffect(() => {
    if (!localStorage.getItem("tourSeen")) {
      startTour();
      localStorage.setItem("tourSeen", "true");
    }
  }, [user]);

  const startTour = () => {
    const driverObj = driver({
      showProgress: true,
      showButtons: ["next", "previous", "close"],
      animate: true,
      stagePadding: 10,
      steps: [
        {
          element: ".transaction-summary",
          popover: {
            title: "Transaction Summary",
            description: "Overview of your wallet activities and balances.",
            side: "bottom",
            align: "start",
          },
        },
        {
          element: ".transaction-type",
          popover: {
            title: "Transaction Actions",
            description:
              "Choose any type of transaction you want to perform.",
            side: "bottom",
            align: "start",
          },
        },
      ],
    });
    driverObj.drive();
  };

  return (
    <div className="space-y-10">
      {/* Header Section */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-primary">User Analytics</h1>
        <p className="text-muted-foreground">
          Track your balance, transaction history, and money operations.
        </p>
      </div>

      {/* Transaction Summary */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 transaction-summary">
        {[
          {
            title: "Balance",
            value: `${userWallet?.data?.balance ?? 0} Taka`,
            icon: <TbMoneybag className="text-5xl text-primary" />,
            className: "balance",
          },
          {
            title: "Total Transactions",
            value: transactions?.data?.transactions?.length ?? 0,
            icon: <UserIcon size={50} className="text-primary" />,
            className: "total-transactions",
          },
          {
            title: "Transacted Amount",
            value: `${totalTransactedAmount ?? 0} Taka`,
            icon: <WalletIcon size={50} className="text-primary" />,
            className: "transacted-amount",
          },
          {
            title: "Total Withdraw",
            value: `${totalMoneyWithdraw ?? 0} Taka`,
            icon: <Coins size={50} className="text-primary" />,
            className: "total-withdraw",
          },
        ].map((item, idx) => (
          <Card
            key={idx}
            className={`group relative overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex items-center justify-between ${item.className}`}
          >
            <div className="flex items-center gap-4 w-full">
              <div className="bg-primary/10 p-3 rounded-xl">{item.icon}</div>
              <div className="flex flex-col">
                <span className="font-semibold text-lg">{item.title}</span>
                <span className="text-2xl font-bold text-primary">
                  {item.value}
                </span>
              </div>
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-primary to-transparent transition-opacity duration-300" />
          </Card>
        ))}
      </div>

      {/* Transaction Types Section */}
      <div className="transaction-type">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Transaction Actions
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {transactionTypes.map((type) => (
            <TransactionTypeCard key={type.id} transactionType={type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserAnalytics;
