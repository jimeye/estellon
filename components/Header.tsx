"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

interface MenuItem {
  label: string;
  href?: string;
  items?: MenuItem[];
}

const menu: MenuItem[] = [
  { label: "NEW ARRIVALS", items: [
    { label: "Lighten up", href: "/new-arrivals/lighten-up" },
    { label: "Introducing: Gordi", href: "/new-arrivals/gordi" },
    { label: "Summer mood", href: "/new-arrivals/summer-mood" },
  ], },
  {
    label: "SACS",
    items: [
      { label: "Bandouliere", href: "/bags/bandouliere" },
      { label: "Cabas", href: "/bags/cabas" },
      { label: "Mini", href: "/bags/mini" },
      { label: "Panier", href: "/bags/panier" },
      { label: "Porté épaule", href: "/bags/porte-epaule" },
      { label: "Porté main", href: "/bags/porte-main" },
      { label: "Tous les sacs", href: "/bags" },
    ],
  },
  {
    label: "ICONIQUES",
    items: [
      { label: "Bloody f", href: "/accessories/bloody-f" },
      { label: "Gaston", href: "/accessories/gaston" },
      { label: "Loulou", href: "/accessories/loulou" },
      { label: "Olga", href: "/accessories/olga" },
      { label: "Stamp", href: "/accessories/stamp" },
      { label: "Star", href: "/accessories/star" },
    ],
  },

  {
    label: "ATELIER",
    items: [
      { label: "La Maison", href: "/la-maison" },
      { label: "Nos Boutiques", href: "/la-maison/boutiques" },
      { label: "FAQ", href: "/la-maison/faq" },
      { label: "Contact", href: "/la-maison/contact" },
      { label: "Seconde Main", href: "/la-maison/seconde-main" },
      { label: "Careers", href: "/la-maison/careers" },
    ],
  },

];

export default function Header() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleMouseEnter = (index: number) => {
    setOpenIndex(index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Bandeau livraison gratuite */}
      <div style={{
        backgroundColor: '#000000',
        color: '#f9f7f2',
        textAlign: 'center',
        padding: '0.5rem',
        fontSize: '12px',
        fontWeight: '300',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1001
      }}>
        Livraison gratuite en France
      </div>
      
      <header style={{ 
        backgroundColor: '#f9f7f2', 
        padding: '0.5rem 1rem', 
        position: 'fixed',
        top: '40px',
        left: 0,
        right: 0,
        zIndex: 1000
      }}>
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: '0 10px',
        position: 'relative'
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="/logo_estellon.png"
            alt="Estellon Logo"
            width={115}
            height={38}
            style={{ objectFit: 'contain' }}
          />
        </Link>

                {/* Desktop Menu */}
        <div className="desktop-menu" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          maxWidth: 'calc(100% - 200px)'
        }}>
                                         <ul style={{
                     padding: 0,
                     margin: 0,
                     listStyle: "none",
                     display: 'flex',
                     flexWrap: 'nowrap',
                     gap: '10px',
                     alignItems: 'center',
                     whiteSpace: 'nowrap'
                   }}>
            {menu.map((item, index) => (
              <li key={item.label} style={{ position: 'relative' }}>
                {item.items ? (
                  <>
                                                 <button
                               onMouseEnter={(e) => {
                                 handleMouseEnter(index);
                                 e.currentTarget.style.color = "#666";
                               }}
                               onMouseLeave={(e) => {
                                 e.currentTarget.style.color = "#000000";
                               }}
                               style={{
                                 background: "none",
                                 border: "none",
                                 cursor: "pointer",
                                 fontSize: "14px",
                                 fontWeight: "bold",
                                 color: "#000000",
                                 padding: "0.5rem 0.1rem",
                                 transition: "all 0.3s ease",
                                 display: "flex",
                                 alignItems: "center",
                                 gap: "0.5rem",
                                 position: "relative",
                                 textDecoration: "none"
                               }}
                               aria-expanded={openIndex === index}
                               aria-controls={`submenu-${index}`}
                               aria-haspopup="true"
                               className="underline-animated"
                             >
                      <span style={{
                        position: "relative",
                        display: "inline-block"
                      }}>
                        {item.label}
                      </span>
                      <span style={{ 
                        fontSize: "12px",
                        transition: "transform 0.3s ease",
                        transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)"
                      }}>
                        ▼
                      </span>
                    </button>
                                                 <div
                               id={`submenu-${index}`}
                                                                                               style={{
                                 position: "fixed",
                                 top: "90px",
                                 left: "-330px",
                                 right: "-20px",
                                 backgroundColor: "#f9f7f2",
                                 padding: "2rem 0",
                                 listStyle: "none",
                                 zIndex: 1002,
                                 height: openIndex === index ? "300px" : "0",
                                 overflow: "hidden",
                                 transition: "all 0.9s ease",
                                 opacity: openIndex === index ? 1 : 0,
                                 visibility: openIndex === index ? "visible" : "hidden",
                                 display: "flex",
                                 flexDirection: "row",
                                 gap: "1rem",
                                 width: "calc(100vw + 350px)",
                                 justifyContent: "center",
                                 alignItems: "center"
                               }}
                               onMouseEnter={() => {
                                 // Garde l'overlay ouvert quand on entre dans la zone
                                 if (openIndex !== null) {
                                   setOpenIndex(openIndex);
                                 }
                               }}
                               onMouseLeave={() => {
                                 // Délai pour éviter la fermeture lors du passage entre menus
                                 setTimeout(() => {
                                   setOpenIndex(null);
                                 }, 100);
                               }}
                             >
                                                                           <div style={{
                                 flex: "1",
                                 borderRight: "1px solid #e0e0e0",
                                 paddingRight: "2rem",
                                 paddingLeft: "8rem",
                                 textAlign: "right"
                               }}>

                        <ul style={{
                          listStyle: "none",
                          padding: 0,
                          margin: 0,
                          textAlign: "right"
                        }}>
                          {item.items?.map((sub) => (
                            <li key={sub.label} style={{ marginTop: "0.5rem", textAlign: "right" }}>
                              <Link
                                href={sub.href || "#"}
                                style={{
                                  display: "block",
                                  padding: "0",
                                  color: "#000000",
                                  textDecoration: "none",
                                  fontSize: "16px",
                                  fontWeight: "bold",
                                  textAlign: "right"
                                }}

                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                                                                           <div style={{
                        flex: "1",
                        paddingLeft: "8rem",
                        paddingRight: "2rem",
                        textAlign: "left"
                      }}>
                        <div style={{
                          fontSize: "14px",
                          color: "#666",
                          marginBottom: "1rem",
                          fontWeight: "bold",
                          textAlign: "left"
                        }}>
                          {item.label === "NEW ARRIVALS" ? "NEW IN" : "Featured"}
                        </div>
                        {item.label === "NEW ARRIVALS" ? (
                          <>
                            <div style={{
                              fontSize: "16px",
                              color: "#000000",
                              fontWeight: "bold",
                              marginBottom: "0.5rem"
                            }}>
                              Bags
                            </div>
                            <div style={{
                              fontSize: "16px",
                              color: "#000000",
                              fontWeight: "bold"
                            }}>
                              Accessories
                            </div>
                          </>
                        ) : (
                          <>
                            <div style={{
                              fontSize: "16px",
                              color: "#000000",
                              fontWeight: "bold"
                            }}>
                              New Collection
                            </div>
                            <div style={{
                              fontSize: "16px",
                              color: "#000000",
                              fontWeight: "bold",
                              marginTop: "0.5rem"
                            }}>
                              Must Have
                            </div>
                            <div style={{
                              fontSize: "14px",
                              color: "#666",
                              marginTop: "0.5rem",
                              fontWeight: "bold"
                            }}>
                              Discover our latest arrivals
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                                        <Link 
                        href={item.href || "#"}
                        style={{ 
                          fontSize: "16px", 
                          fontWeight: "bold", 
                          color: "#666",
                          textDecoration: "none",
                          padding: "0.5rem 1rem",
                          transition: "background-color 0.2s ease",
                          display: "inline-block",
                          borderBottom: "none"
                        }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#e9ecef";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Icons */}
        <div className="desktop-menu" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginRight: '15px'
        }}>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem 0.1rem"
            }}
            aria-label="Rechercher"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem 0.1rem"
            }}
            aria-label="Mon compte"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem 0.1rem"
            }}
            aria-label="Panier"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>
        </div>

                         

                 {/* Mobile Menu Button */}
                 <button
                   className="mobile-menu-button"
                   onClick={toggleMobileMenu}
                   style={{
                     display: 'none',
                     background: "none",
                     border: "none",
                     cursor: "pointer",
                     padding: "0.5rem",
                     marginLeft: "60px",
                     position: "relative",
                     left: "16px"
                   }}
                   aria-label="Menu mobile"
                 >
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2">
                     <line x1="3" y1="6" x2="21" y2="6"></line>
                     <line x1="3" y1="12" x2="21" y2="12"></line>
                     <line x1="3" y1="18" x2="21" y2="18"></line>
                   </svg>
                 </button>

                 {/* Mobile Menu Overlay */}
         {isMobileMenuOpen && (
           <div style={{
             position: 'fixed',
             top: 0,
             left: 0,
             right: 0,
             bottom: 0,
             backgroundColor: '#f9f7f2',
             zIndex: 1002,
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center'
           }}>
            <div style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#f9f7f2',
              padding: '0 2rem',
              overflowY: 'auto'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2rem',
                padding: '2rem 2rem 0 2rem'
              }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', marginLeft: '-32px' }}>
                  <Image
                    src="/logo_estellon.png"
                    alt="Estellon Logo"
                    width={110}
                    height={37}
                    style={{ objectFit: 'contain' }}
                  />
                </Link>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "0.5rem",
                      borderRadius: "4px",
                      transition: "background-color 0.2s ease"
                    }}
                    aria-label="Panier"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                  </button>
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "0.5rem",
                      borderRadius: "4px",
                      transition: "background-color 0.2s ease"
                    }}
                    aria-label="Rechercher"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                    </svg>
                  </button>
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "0.5rem",
                      borderRadius: "4px",
                      transition: "background-color 0.2s ease"
                    }}
                    aria-label="Mon compte"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </button>
                  <button
                    onClick={toggleMobileMenu}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "0.5rem",
                      borderRadius: "4px",
                      transition: "background-color 0.2s ease",
                      marginRight: "-45px"
                    }}
                    aria-label="Fermer le menu"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              </div>
              
                                     {/* Main Categories */}
                       <div style={{
                         padding: '0 2rem 0 4rem',
                         marginBottom: '3rem'
                       }}>
                         {menu.map((item, index) => (
                           <div key={item.label} style={{
                             padding: '1rem 0'
                           }}>
                             <div style={{
                               fontSize: "20px",
                               fontWeight: "bold",
                               color: "#000000",
                               display: "flex",
                               justifyContent: "space-between",
                               alignItems: "center",
                               width: "100%",
                               cursor: "pointer",
                               marginLeft: "-4rem",
                               position: "relative"
                             }}
                             onClick={() => toggleMenu(index)}
                             onMouseEnter={() => handleMouseEnter(index)}
                             className={`underline-animated ${openIndex === index ? 'active' : ''}`}
                             >
                               <span>{item.label}</span>
                               <span style={{ 
                                 fontSize: "16px",
                                 transition: "transform 0.3s ease",
                                 transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                                 marginRight: "-6.1rem"
                               }}>▼</span>
                             </div>
                             
                             {/* Sous-menus */}
                             {item.items && (
                               <div style={{
                                 marginTop: '1rem',
                                 paddingLeft: '1rem',
                                 display: openIndex === index ? 'block' : 'none'
                               }}>
                                 {item.items.map((sub) => (
                                   <div key={sub.label} style={{
                                     marginBottom: '0.3rem'
                                   }}>
                                     <Link
                                       href={sub.href || "#"}
                                       style={{
                                         fontSize: "16px",
                                         color: "#000000",
                                         textDecoration: "none",
                                         display: "block",
                                         padding: "0.2rem 0",
                                         fontWeight: "bold"
                                       }}
                                       onClick={toggleMobileMenu}
                                     >
                                       {sub.label}
                                     </Link>
                                   </div>
                                 ))}
                               </div>
                             )}
                           </div>
                         ))}
                       </div>



                       {/* Utility Links - Bottom Right */}
                       <div style={{
                         position: 'absolute',
                         bottom: '2rem',
                         right: '2rem',
                         display: 'flex',
                         flexDirection: 'column',
                         gap: '0.5rem',
                         textAlign: 'right'
                       }}>
                         <Link href="/account" style={{
                           fontSize: "14px",
                           fontWeight: "bold",
                           color: "#000000",
                           textDecoration: "none"
                         }}>
                           ACCOUNT
                         </Link>
                         <Link href="/help" style={{
                           fontSize: "14px",
                           fontWeight: "bold",
                           color: "#000000",
                           textDecoration: "none"
                         }}>
                           HELP
                         </Link>
                         <Link href="/customer-service" style={{
                           fontSize: "14px",
                           fontWeight: "bold",
                           color: "#000000",
                           textDecoration: "none"
                         }}>
                           CUSTOMER SERVICE
                         </Link>
                         <Link href="/points-of-sale" style={{
                           fontSize: "14px",
                           fontWeight: "bold",
                           color: "#000000",
                           textDecoration: "none"
                         }}>
                           NOS POINTS DE VENTE
                         </Link>
                         <div style={{
                           fontSize: "14px",
                           fontWeight: "bold",
                           color: "#000000",
                           marginTop: '0.5rem'
                         }}>
                           DELIVERY IN SPAIN | ENGLISH
                         </div>
                       </div>


              
              
            </div>
          </div>
        )}
      </nav>
    </header>
    </>
  );
} 