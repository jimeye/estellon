'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  {
    src: '/estellon-accueil-1.webp',
    alt: 'Estellon Accueil 1',
    title: 'Collection Estellon'
  },
  {
    src: '/Estellon-site5-1.webp',
    alt: 'Estellon Site 5',
    title: 'Accessoires Premium'
  }
]

export default function CarouselInde() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-rotation toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '600px',
      overflow: 'hidden',
      marginTop: '50px'
    }}>
      {/* Images du carrousel */}
      <div style={{
        display: 'flex',
        width: `${images.length * 100}%`,
        height: '100%',
        transform: `translateX(-${(currentIndex * 100) / images.length}%)`,
        transition: 'transform 2s ease-in-out'
      }}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              width: `${100 / images.length}%`,
              height: '100%',
              position: 'relative'
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
              priority={index === 0}
            />
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
              color: 'white',
              padding: '2rem',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                margin: '0 0 0.5rem 0'
              }}>
                {image.title}
              </h2>
              <p style={{
                fontSize: '1.1rem',
                margin: '0',
                opacity: '0.9'
              }}>
                Découvrez notre collection inspirée de l'Inde
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Boutons de navigation */}
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.5)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
          fontSize: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.8)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)'
        }}
        aria-label="Image précédente"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.5)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
          fontSize: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.8)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)'
        }}
        aria-label="Image suivante"
      >
        ›
      </button>

      {/* Indicateurs */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px'
      }}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              background: index === currentIndex ? 'white' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 