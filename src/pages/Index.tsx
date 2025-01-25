import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { LogIn, UserPlus, ChevronDown, ChevronUp } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'

export default function PredictionConvergence() {
  const [showAnalysis, setShowAnalysis] = useState(false)
  const totalVolume = "2.5M USD"

  const marketData = {
    asOfDate: "January 25, 2025",
    terminationDate: "October 20, 2025",
    polymarket: {
      frontrunner: {
        name: "Pierre Poilievre",
        odds: 84,
        image: "/lovable-uploads/52a5f3ac-c60e-419d-9107-ecb87f3dac0e.png",
      },
      others: [
        { name: "Chrystia Freeland", odds: 1 },
        { name: "Jagmeet Singh", odds: 1 },
      ],
    },
    kalshi: {
      frontrunner: {
        name: "Mark Carney",
        odds: 83,
        image: "/lovable-uploads/e95acffe-8b73-4438-9cff-e79e38eb8c25.png",
      },
      others: [
        { name: "Chrystia Freeland", odds: 11 },
        { name: "Pierre Poilievre", odds: 5 },
      ],
    },
  }

  const divergenceData = [
    { name: 'Polymarket', candidate: 'Poilievre', odds: 84 },
    { name: 'Kalshi', candidate: 'Carney', odds: 83 },
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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="border-b border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm fixed w-full z-10">
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

        <div className="text-gray-600 dark:text-gray-400 mb-8">
          <div>As of: {marketData.asOfDate}</div>
          <div>Termination Date: {marketData.terminationDate}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Polymarket Card */}
          <Card className="bg-white/50 dark:bg-gray-800/50 border-market-purple/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <img src="/lovable-uploads/33d24576-1ead-4dbf-9f1f-49cb6e828ca8.png" alt="Polymarket" className="h-8" />
                  <h3 className="text-xl font-bold text-market-purple">Polymarket</h3>
                </div>
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
                  <div className="font-semibold text-lg">{marketData.polymarket.frontrunner.name}</div>
                  <div className="text-3xl font-bold text-market-purple">{marketData.polymarket.frontrunner.odds}%</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Frontrunner</div>
                </div>
              </div>

              <div className="space-y-3">
                {marketData.polymarket.others.map((candidate, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback>{candidate.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{candidate.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress value={candidate.odds} className="w-24" />
                      <span className="text-sm font-medium w-12 text-right">{candidate.odds}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Kalshi Card */}
          <Card className="bg-white/50 dark:bg-gray-800/50 border-market-blue/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <img src="/lovable-uploads/b913b11f-5f3b-40db-bc18-3358bb794d31.png" alt="Kalshi" className="h-8" />
                  <h3 className="text-xl font-bold text-market-blue">Kalshi</h3>
                </div>
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
                  <div className="font-semibold text-lg">{marketData.kalshi.frontrunner.name}</div>
                  <div className="text-3xl font-bold text-market-blue">{marketData.kalshi.frontrunner.odds}%</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Frontrunner</div>
                </div>
              </div>

              <div className="space-y-3">
                {marketData.kalshi.others.map((candidate, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback>{candidate.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{candidate.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress value={candidate.odds} className="w-24" />
                      <span className="text-sm font-medium w-12 text-right">{candidate.odds}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <Button 
            onClick={() => setShowAnalysis(!showAnalysis)}
            variant="outline" 
            className="w-full flex items-center justify-between p-4 text-left"
          >
            <span className="font-semibold">Want More Info About Market Divergence?</span>
            {showAnalysis ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
          
          {showAnalysis && (
            <Card className="mt-4 bg-white/50 dark:bg-gray-800/50 border-market-purple/20">
              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4">Current Market Divergence</h3>
                  <div className="h-64">
                    <BarChart width={600} height={200} data={divergenceData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="odds" fill="#8B5CF6" name="Odds %" />
                    </BarChart>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Why Are Markets Divergent?</h3>
                  <div className="grid gap-3">
                    {catalysts.map((catalyst, index) => (
                      <div key={index} className="flex items-start gap-3 bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg">
                        <div className="w-6 h-6 rounded-full bg-market-purple/20 text-market-purple flex items-center justify-center text-sm">
                          {index + 1}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{catalyst}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <Card className="bg-white/50 dark:bg-gray-800/50 border-market-purple/20">
          <CardHeader>
            <CardTitle className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-market-purple to-market-blue">
              Market Gap Predictions
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-400">Bet on gap between markets:</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {gapScenarios.map((scenario, index) => (
                <div key={index} className="group">
                  <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-lg bg-white/50 dark:bg-gray-900/50 hover:bg-market-purple/5 dark:hover:bg-market-purple/10 transition-colors">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
                        <span className="font-medium text-gray-900 dark:text-white">{scenario.description}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-2xl font-bold text-market-purple">{scenario.multiplier}</span>
                          <span className="text-market-blue whitespace-nowrap">{scenario.payout}</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Timeframe: {scenario.timeframe}</div>
                    </div>
                    <Button className="w-full sm:w-auto bg-market-purple hover:bg-market-purple/90">
                      Place Bet
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
