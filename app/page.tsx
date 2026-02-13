'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import FloatingHearts from '@/components/floating-hearts'
import { Heart, Sparkles } from 'lucide-react'

export default function Page() {
  const [answered, setAnswered] = useState(false)
  const [accepted, setAccepted] = useState(false)
  const [openedGifts, setOpenedGifts] = useState<Set<number>>(new Set())
  const [modalGift, setModalGift] = useState<number | null>(null)

  const handleYes = () => {
    setAccepted(true)
    setAnswered(true)
  }

  const openGiftModal = (index: number) => {
    setModalGift(index)
  }

  const closeGiftModal = () => {
    setModalGift(null)
  }

  return (
    <main className="min-h-screen w-full overflow-hidden bg-gradient-to-b from-background via-pink-50 to-background">
      <FloatingHearts isActive={accepted} />

      <div className="flex items-center justify-center min-h-screen px-4 py-12">
        <div className="w-full max-w-2xl">
          {!answered ? (
            <div className="space-y-8 flex flex-col items-center justify-center animate-fadeIn">
              {/* Decorative elements */}
              {/* <div className="relative h-32 mb-8">
                <Sparkles className="absolute top-0 left-1/4 text-pink-400 w-6 h-6 animate-pulse" />
                <Sparkles className="absolute top-8 right-1/4 text-pink-300 w-5 h-5 animate-pulse" />
                <Heart className="absolute left-1/2 transform -translate-x-1/2 top-6 text-primary w-16 h-16 animate-bounce" />
              </div> */}

              <img className="h-[300] w-[370] rounded-lg" src="https://always-be-mine.vercel.app/assets/main_temp-B5tgrGFJ.gif" alt="Love Animation"></img>

              {/* Main question */}
              <div className="space-y-4">
                <h1 className="text-4xl text-[#CA9469] font-bold leading-tight text-balance">
                  Dear Sâu,
                </h1>
                <div className='flex flex-col justify-center'>
                  <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance">
                    Will you be my
                  </h1>
                  <p className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent animate-pulse">
                    Valentine?
                  </p>
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed">
                I want to spend this special day and every day with you. Please say yes! 💕
              </p>

              {/* Buttons */}
              <div className="flex justify-center pt-8">
                <Button
                  onClick={handleYes}
                  className="px-8 py-6 text-lg font-semibold rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
                >
                  Yes! 💕
                </Button>
              </div>
            </div>
          ) : accepted ? (
            <div className="text-center animate-fadeIn">
              {/* Gif */}
              <div className="flex justify-center mb-8">
                <img
                  src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWFsYW94MXk5djJsbzh3aGw5OGR6YWdnZnI0NXB4ZXRkb3FjcTJvbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NoPNkgzHD8HSK6Nr5l/giphy.gif"
                  alt="celebration"
                  className="w-52 h-52 md:w-72 md:h-72 lg:w-96 lg:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-foreground">
                  Hoo Hooo 🚂 💖
                </h2>
                {/* <p className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                  I'm the happiest person alive!
                </p> */}
              </div>

              {/* Present Boxes */}
              <div className="w-full flex sm:flex-row gap-6 sm:gap-8 justify-center items-center py-12 px-2">
                <PresentBox index={0} onClick={() => openGiftModal(0)} />
                <PresentBox index={1} onClick={() => openGiftModal(1)} />
              </div>

              {/* Gift Modal */}
              {modalGift !== null && (
                <GiftModal giftIndex={modalGift} onClose={closeGiftModal} />
              )}

              <div className="pt-8">
                <Button
                  onClick={() => {
                    setAnswered(false)
                    setAccepted(false)
                  }}
                  className="px-8 py-6 text-lg font-semibold rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Love you!
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-8 text-center animate-fadeIn">
              <div className="relative h-32 mb-8">
                <Heart className="absolute left-1/2 transform -translate-x-1/2 top-6 text-muted-foreground w-16 h-16" />
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  No worries! 🙂
                </h2>
                <p className="text-xl text-muted-foreground">
                  I'll be here whenever you're ready.
                </p>
              </div>

              <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
                Thank you for thinking about it. Let me know when you change your mind! 💕
              </p>

              <div className="pt-8">
                <Button
                  onClick={() => {
                    setAnswered(false)
                    setAccepted(false)
                  }}
                  className="px-8 py-6 text-lg font-semibold rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Start over
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        :global(.animate-fadeIn) {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </main>
  )
}

interface PresentBoxProps {
  index: number
  onClick: () => void
}

const giftImages = [
  '/assets/tickets.jpeg',
  '/assets/jagger.jpeg',
]

const giftTitles = ['', 'Jagermeister Selected 56 Botanicals']

const giftSubtitles = [
  "🎬 Movie night awaits! Can't wait to see you!", 
  'Nhà em có bán rượu không?...'
]

function PresentBox({ index, onClick }: PresentBoxProps) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div className="flex flex-col items-center gap-6 w-full sm:w-auto">
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`present-box relative w-32 h-32 sm:w-40 sm:h-40 cursor-pointer focus:outline-none transition-all duration-300 ${
          isHovering ? 'animate-luxuryShake' : ''
        }`}
      >
        {/* Gift Box Container */}
        <div className="relative w-full h-full">
          {/* Main Box */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-400 via-rose-500 to-rose-700 rounded-2xl shadow-2xl transition-all duration-500" />

          {/* Luxury Shine Effect */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/20 via-white/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-black/10 to-transparent rounded-bl-2xl" />
          </div>

          {/* Silk Ribbon - Horizontal */}
          <div className="absolute top-1/2 left-0 right-0 h-5 bg-gradient-to-b from-amber-300 to-amber-400 transform -translate-y-1/2 shadow-xl rounded-r-full transition-transform duration-500 hover:shadow-2xl">
            {/* Center bow knot */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-200 via-amber-300 to-amber-500 rounded-full shadow-lg border-2 border-amber-600 flex items-center justify-center">
                <span className="text-lg font-bold text-amber-900">✦</span>
              </div>
            </div>
          </div>

          {/* Silk Ribbon - Vertical */}
          <div className="absolute top-0 bottom-0 left-1/2 w-5 bg-gradient-to-r from-amber-300 to-amber-400 transform -translate-x-1/2 shadow-xl transition-shadow duration-500" />

          {/* Luxury Bow */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full shadow-lg transform -rotate-20 -translate-y-1" />
              <div className="w-5 h-5 bg-gradient-to-b from-amber-200 to-amber-400 rounded-full shadow-md" />
              <div className="w-6 h-6 bg-gradient-to-bl from-amber-300 to-amber-500 rounded-full shadow-lg transform rotate-20 -translate-y-1" />
            </div>
          </div>

          {/* Decoration: Subtle sparkles */}
          <div className="absolute top-3 right-3 text-sm opacity-60 animate-pulse">⭐</div>
          <div className="absolute bottom-3 left-3 text-sm opacity-60 animate-pulse" style={{ animationDelay: '0.3s' }}>⭐</div>
        </div>

        {/* Interactive Label */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap">
          <p className="text-xs sm:text-sm font-semibold text-foreground">
            {isHovering ? 'Click to reveal' : 'Tap to reveal'}
          </p>
        </div>
      </button>

      <style jsx>{`
        .present-box {
          animation: luxuryFloat 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes luxuryFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-16px);
          }
        }

        .animate-luxuryShake {
          animation: luxuryShake 0.6s cubic-bezier(0.36, 0, 0.66, -0.56) !important;
        }

        @keyframes luxuryShake {
          0%, 100% {
            transform: translateX(0) translateY(0) rotateZ(0deg);
          }
          10% {
            transform: translateX(-6px) translateY(-2px) rotateZ(-1.5deg);
          }
          20% {
            transform: translateX(6px) translateY(-4px) rotateZ(1.5deg);
          }
          30% {
            transform: translateX(-5px) translateY(-2px) rotateZ(-1deg);
          }
          40% {
            transform: translateX(5px) translateY(-3px) rotateZ(1deg);
          }
          50% {
            transform: translateX(-3px) translateY(-1px) rotateZ(-0.5deg);
          }
          60% {
            transform: translateX(3px) translateY(-2px) rotateZ(0.5deg);
          }
          70% {
            transform: translateX(-2px) translateY(-1px) rotateZ(0deg);
          }
          80% {
            transform: translateX(2px) translateY(-1px) rotateZ(0deg);
          }
        }
      `}</style>
    </div>
  )
}

interface GiftModalProps {
  giftIndex: number
  onClose: () => void
}

function GiftModal({ giftIndex, onClose }: GiftModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-modalBounce"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Congratulation header */}
          <div className="text-center space-y-2 animate-slideDown" style={{ animationDelay: '0.1s' }}>
            <p className="text-sm tracking-widest text-rose-500 font-semibold uppercase">Your Gift Awaits</p>
            <h2 className="text-5xl font-bold text-foreground">Surprise!</h2>
          </div>

          {/* Gift image with elegant frame */}
          <div className="relative animate-slideDown" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-1 bg-gradient-to-br from-rose-200 to-rose-100 rounded-2xl" />
            <img
              src={giftImages[giftIndex]}
              alt={giftTitles[giftIndex]}
              className="relative w-full h-64 object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Gift title with luxury styling */}
          <div className="text-center space-y-3 animate-slideDown" style={{ animationDelay: '0.3s' }}>
            <h3 className="text font-bold text-foreground">{giftTitles[giftIndex]}</h3>
            <div className="w-12 h-1 bg-gradient-to-r from-rose-400 to-rose-600 mx-auto rounded-full" />
            {/* <p className="text-foreground/70 leading-relaxed">
              A special gift for my special someone. I hope you love it!
            </p> */}
            <p className="text-sm text-muted-foreground pt-4 italic">
              {giftSubtitles[giftIndex]}
            </p>
          </div>

          {/* Decorative hearts with refined animation */}
          <div className="flex justify-center gap-4 animate-slideDown" style={{ animationDelay: '0.4s' }}>
            <Heart className="w-7 h-7 text-rose-500 fill-rose-500 animate-bounce" style={{ animationDelay: '0s' }} />
            <Heart className="w-7 h-7 text-rose-400 fill-rose-400 animate-bounce" style={{ animationDelay: '0.1s' }} />
            <Heart className="w-7 h-7 text-rose-500 fill-rose-500 animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>

          {/* Close button with luxury styling */}
          <Button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-slideDown"
            style={{ animationDelay: '0.5s' }}
          >
            Close Gift
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInBackdrop {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modalBounce {
          0% {
            opacity: 0;
            transform: scale(0.6) translateY(-80px);
          }
          50% {
            opacity: 1;
            transform: scale(1.08) translateY(0px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0px);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }

        :global(.animate-fadeInBackdrop) {
          animation: fadeInBackdrop 0.4s ease-out;
        }

        :global(.animate-modalBounce) {
          animation: modalBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        :global(.animate-slideDown) {
          animation: slideDown 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
