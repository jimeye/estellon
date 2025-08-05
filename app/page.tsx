import Image from 'next/image'

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
            display: 'block',
            aspectRatio: '1 / 1.1',
            objectFit: 'cover',
            objectPosition: 'center'
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
            <span className="estellon-text-animated" style={{
              display: 'inline-block'
            }}>
              Estellon - Luxury Bags & Accessories - Estellon - Luxury Bags & Accessories - Estellon - Luxury Bags & Accessories
            </span>
          </div>
        </div>
        

      </div>
    </div>
  )
} 