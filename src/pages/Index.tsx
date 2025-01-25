import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { LogIn, UserPlus } from "lucide-react"

export default function PredictionConvergence() {
  const totalVolume = "2.5M USD"

  const marketData = {
    asOfDate: "January 25, 2025",
    terminationDate: "October 20, 2025",
    polymarket: {
      frontrunner: {
        name: "Pierre Poilievre",
        odds: 84,
        image: "/lovable-uploads/d8065e95-b85f-4cfe-9fd4-0e2bb0f24efe.png",
      },
      others: [
        { name: "Mark Carney", odds: 16 },
        { name: "Chrystia Freeland", odds: 1 },
        { name: "Jagmeet Singh", odds: 1 },
      ],
    },
    kalshi: {
      frontrunner: {
        name: "Mark Carney",
        odds: 83,
        image: "/lovable-uploads/b8ee0814-76f3-402c-a974-abbe1eb44cf4.png",
      },
      others: [
        { name: "Chrystia Freeland", odds: 11 },
        { name: "Pierre Poilievre", odds: 5 },
      ],
    },
  }

  const divergenceData = [
    { date: 'Jan 20', polymarket: 82, kalshi: 15 },
    { date: 'Jan 21', polymarket: 83, kalshi: 25 },
    { date: 'Jan 22', polymarket: 84, kalshi: 45 },
    { date: 'Jan 23', polymarket: 84, kalshi: 65 },
    { date: 'Jan 24', polymarket: 84, kalshi: 83 },
  ]

  const catalysts = [
    "Conservative Party internal polling showing different results",
    "Regional market sentiment variations between platforms",
    "Different methodologies in odds calculation",
    "Timing of information incorporation into markets"
  ]

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
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm fixed w-full z-10">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-market-purple to-market-blue">
                    MarketMinds
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button variant="ghost">Markets</Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button variant="ghost">How it Works</Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="flex gap-4">
              <Button variant="ghost" className="gap-2">
                <LogIn className="w-4 h-4" /> Login
              </Button>
              <Button className="gap-2 bg-market-purple hover:bg-market-purple/90">
                <UserPlus className="w-4 h-4" /> Sign Up
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto p-6 pt-24">
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

        <Card className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-market-purple/20 mb-8">
          <CardContent className="p-6">
            <div className="font-bold text-xl mb-4">Market Analysis & Education</div>
            
            {/* Divergence Graph */}
            <div className="bg-gray-900/50 p-4 rounded-lg mb-4">
              <div className="text-market-purple font-semibold mb-2">Market Divergence Over Time</div>
              <LineChart width={600} height={200} data={divergenceData}>
                <XAxis dataKey="date" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="polymarket" stroke="#8B5CF6" />
                <Line type="monotone" dataKey="kalshi" stroke="#3B82F6" />
              </LineChart>
            </div>

            {/* Educational Content */}
            <div className="space-y-4">
              <div className="text-market-pink font-semibold">Why Are Markets Divergent?</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {catalysts.map((catalyst, index) => (
                  <div key={index} className="flex items-start gap-2 bg-gray-900/30 p-3 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-market-purple/20 text-market-purple flex items-center justify-center text-sm">
                      {index + 1}
                    </div>
                    <p className="text-sm text-gray-300">{catalyst}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-market-purple/20">
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
                  <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-700/30 transition-colors">
                    <div className="flex-1 w-full">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
                        <span className="font-medium text-white">{scenario.description}</span>
                        <div className="flex flex-col items-end">
                          <span className="text-2xl font-bold text-market-purple">{scenario.multiplier}</span>
                          <span className="text-sm text-market-blue whitespace-nowrap">{scenario.payout}</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-400">Timeframe: {scenario.timeframe}</div>
                    </div>
                    <Button 
                      className="w-full sm:w-auto bg-market-purple hover:bg-market-purple/90 text-white"
                    >
                      Place Bet
                    </Button>
                  </div>
                  {index < gapScenarios.length - 1 && <div className="border-t border-gray-700/50 my-4" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
