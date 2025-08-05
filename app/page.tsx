import Image from 'next/image'
import CarouselInde from '@/components/CarouselInde'

export default function Home() {
  return (
    <div style={{ 
      width: '100%',
      minHeight: '100vh',
      paddingTop: '120px'
    }}>
      <div style={{
        width: '100%',
        marginTop: '-40px',
        padding: '0 10px'
      }}>
        <Image
          src="/estellon-accueil-2.webp"
          alt="Estellon Site Image"
          width={1920}
          height={1080}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block'
          }}
          className="hero-image"
          priority
          unoptimized
        />
        <div style={{
          marginTop: '50px',
          textAlign: 'center',
          overflow: 'hidden',
          whiteSpace: 'nowrap'
        }}>
          <div style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#000000',
            display: 'inline-block',
            position: 'relative'
          }}>
            <span className="underline-animated" style={{
              display: 'inline-block'
            }}>
              ESTELLON - LUXURY BAGS & ACCESSORIES - ESTELLON - LUXURY BAGS & ACCESSORIES - ESTELLON - LUXURY BAGS & ACCESSORIES
            </span>
          </div>
        </div>
        
        {/* Carrousel Inde */}
        <CarouselInde />
      </div>
    </div>
  )
} 