import { useState } from 'react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-2"
      >
        <h1 className="text-4xl font-bold tracking-tight text-primary flex items-center justify-center gap-2">
          <Sparkles className="w-8 h-8 text-amber-500" />
          Onyx
        </h1>
        <p className="text-muted-foreground text-lg">
          Vite + React + TS + Tailwind CSS v4 + shadcn/ui + Motion
        </p>
      </motion.div>

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
