import { TrendingUp } from "lucide-react"
import { LabelList, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A pie chart with label list and tooltip"

const chartConfig = {
  amount: {
    label: "Amount",
  },
  ADD_MONEY: {
    label: "Add Money",
    color: "var(--chart-1)",
  },
  WITHDRAW_MONEY: {
    label: "Withdraw Money",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

interface ChartDataItem {
  type: keyof typeof chartConfig
  amount: number
}

interface IPieChartProps {
  chartData: ChartDataItem[]
  title?: string
  description?: string
}

export function ChartPieLabelList({
  chartData,
  title = "Pie Chart - Label List",
  description = "January - June 2024",
}: IPieChartProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="amount" hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              stroke="none"
              innerRadius={50}
              outerRadius={100}
            >
              <LabelList
                dataKey="type"
                className="fill-background"
                fontSize={12}
                formatter={(value: string) => {
                  // ✅ Type-safe formatter
                  if (value in chartConfig) {
                    return chartConfig[value as keyof typeof chartConfig].label
                  }
                  return value
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total transactions for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
