import { useState } from 'react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 space-y-8 font-sans">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-3"
      >
        <h1 className="text-5xl font-black tracking-tight text-primary flex items-center justify-center gap-3">
          <Sparkles className="w-10 h-10 text-amber-500" />
          Onyx
        </h1>
        <p className="text-muted-foreground text-lg font-medium">
          Vite + React + TS + Tailwind v4 + shadcn/ui + Motion + Satoshi Fonts
        </p>
      </motion.div>

      {/* Satoshi Font Weights Preview */}
      <div className="w-full max-w-md p-6 rounded-xl border border-border bg-card shadow-sm space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
          Satoshi Font Family Preview
        </h2>
        <div className="space-y-2 text-left">
          <p className="font-normal text-base">
            <span className="text-xs uppercase px-2 py-0.5 rounded bg-muted text-muted-foreground mr-2 font-mono">400</span>
            Satoshi Regular
          </p>
          <p className="font-medium text-base">
            <span className="text-xs uppercase px-2 py-0.5 rounded bg-muted text-muted-foreground mr-2 font-mono">500</span>
            Satoshi Medium
          </p>
          <p className="font-bold text-base">
            <span className="text-xs uppercase px-2 py-0.5 rounded bg-muted text-muted-foreground mr-2 font-mono">700</span>
            Satoshi Bold
          </p>
          <p className="font-black text-base">
            <span className="text-xs uppercase px-2 py-0.5 rounded bg-muted text-muted-foreground mr-2 font-mono">900</span>
            Satoshi Black
          </p>
        </div>
      </div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          size="lg"
          onClick={() => setCount((prev) => prev + 1)}
          className="font-medium shadow-md cursor-pointer"
        >
          Count is {count}
        </Button>
      </motion.div>
    </div>
  )
}

export default App
