import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function PredictionConvergence() {
  const totalVolume = "2.5M USD"

  const marketData = {
    asOfDate: "January 25, 2025",
    terminationDate: "October 20, 2025",
    polymarket: {
      frontrunner: {
        name: "Pierre Poilievre",
        odds: 84,
        image: "/lovable-uploads/0d7f4f95-c6a0-4b7b-b1c3-14013f912e09.png",
      },
      others: [
        { name: "Mark Carney", odds: 16 },
        { name: "Chrystia Freeland", odds: 1 },
        { name: "Jagmeet Singh", odds: 1 },
        { name: "Justin Trudeau", odds: 1 },
      ],
    },
    kalshi: {
      frontrunner: {
        name: "Mark Carney",
        odds: 83,
        image: "/lovable-uploads/0d7f4f95-c6a0-4b7b-b1c3-14013f912e09.png",
      },
      others: [
        { name: "Chrystia Freeland", odds: 11 },
        { name: "Pierre Poilievre", odds: 5 },
        { name: "Others", odds: 1 },
      ],
    },
  }

  const gapScenarios = [
    {
      description: "Markets maintain different frontrunners with >30% odds gap",
      timeframe: "Next 5 days",
      multiplier: "1.5x",
      payout: "$100 → $150",
    },
    {
      description: "Gap narrows to 20-30% range",
      timeframe: "Next 10 days",
      multiplier: "2x",
      payout: "$100 → $200",
    },
    {
      description: "Gap narrows to 10-20% range",
      timeframe: "Next 15 days",
      multiplier: "3x",
      payout: "$100 → $300",
    },
    {
      description: "Markets converge on same frontrunner (<10% gap)",
      timeframe: "Next 20 days",
      multiplier: "4x",
      payout: "$100 → $400",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-market-purple to-market-blue">
            Canadian Election 2025: Market Frontrunner Prediction
          </h1>
          <div className="text-xl font-bold text-market-purple">Total Volume: {totalVolume}</div>
        </div>

        <div className="text-gray-400 mb-8">
          <div>As of: {marketData.asOfDate}</div>
          <div>Termination Date: {marketData.terminationDate}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Polymarket Card */}
          <Card className="bg-gray-800/50 border-market-purple/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-market-purple">Polymarket</h3>
                <div className="px-3 py-1 rounded-full bg-market-purple/20 text-market-purple text-sm">
                  Primary Market
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 p-4 rounded-lg bg-market-purple/10">
                <img
                  src={marketData.polymarket.frontrunner.image}
                  alt={marketData.polymarket.frontrunner.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-market-purple"
                />
                <div>
                  <div className="font-semibold text-lg text-white">{marketData.polymarket.frontrunner.name}</div>
                  <div className="text-3xl font-bold text-market-purple">{marketData.polymarket.frontrunner.odds}%</div>
                  <div className="text-sm text-gray-400">Frontrunner</div>
                </div>
              </div>

              <div className="space-y-3">
                {marketData.polymarket.others.map((candidate, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">{candidate.name}</span>
                    <div className="flex items-center gap-2">
                      <Progress 
                        value={candidate.odds} 
                        className="w-24 bg-gray-700 [&>div]:bg-market-purple" 
                      />
                      <span className="text-sm font-medium w-12 text-right text-gray-300">{candidate.odds}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Kalshi Card */}
          <Card className="bg-gray-800/50 border-market-blue/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-market-blue">Kalshi</h3>
                <div className="px-3 py-1 rounded-full bg-market-blue/20 text-market-blue text-sm">
                  Secondary Market
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 p-4 rounded-lg bg-market-blue/10">
                <img
                  src={marketData.kalshi.frontrunner.image}
                  alt={marketData.kalshi.frontrunner.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-market-blue"
                />
                <div>
                  <div className="font-semibold text-lg text-white">{marketData.kalshi.frontrunner.name}</div>
                  <div className="text-3xl font-bold text-market-blue">{marketData.kalshi.frontrunner.odds}%</div>
                  <div className="text-sm text-gray-400">Frontrunner</div>
                </div>
              </div>

              <div className="space-y-3">
                {marketData.kalshi.others.map((candidate, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">{candidate.name}</span>
                    <div className="flex items-center gap-2">
                      <Progress 
                        value={candidate.odds} 
                        className="w-24 bg-gray-700 [&>div]:bg-market-blue" 
                      />
                      <span className="text-sm font-medium w-12 text-right text-gray-300">{candidate.odds}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gray-800/50 border-market-purple/20 mb-8">
          <CardContent className="p-6">
            <div className="font-bold text-lg mb-2 text-white">Current Market Status:</div>
            <div className="text-market-pink font-semibold">Significant Market Divergence: Different Frontrunners</div>
            <div className="mt-2 text-sm text-gray-400">
              Polymarket favors Poilievre ({marketData.polymarket.frontrunner.odds}%) while Kalshi favors Carney (
              {marketData.kalshi.frontrunner.odds}%)
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-market-purple/20">
          <CardHeader>
            <CardTitle className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-market-purple to-market-blue">
              Market Gap Predictions
            </CardTitle>
            <p className="text-gray-400">Bet on gap between markets:</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {gapScenarios.map((scenario, index) => (
                <div key={index}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-lg bg-gray-700/20 hover:bg-gray-700/30 transition-colors">
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-white">{scenario.description}</span>
                        <div className="text-right ml-4 flex items-center gap-2">
                          <span className="text-market-purple font-bold">{scenario.multiplier}</span>
                          <span className="text-market-blue whitespace-nowrap">{scenario.payout}</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-400">Timeframe: {scenario.timeframe}</div>
                    </div>
                    <Button 
                      className="bg-gradient-to-r from-market-purple to-market-blue hover:from-market-purple/90 hover:to-market-blue/90 text-white"
                    >
                      Place Bet
                    </Button>
                  </div>
                  {index < gapScenarios.length - 1 && <div className="border-t border-gray-700 my-4" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
