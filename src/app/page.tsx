"use client"

import { Wine, Grape, Star, Utensils, Users, Award, MessageCircle } from "lucide-react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import TagAbout from '@/components/sections/about/TagAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="small"
      background="aurora"
      cardStyle="glass-flat"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Wines", id: "wines" },
            { name: "Experience", id: "experience" },
            { name: "Location", id: "location" },
            { name: "Events", id: "events" }
          ]}
          brandName="Vinoteca Madrid"
          button={{
            text: "Reserve Table",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Authentic Spanish Wine Experience"
          description="Discover exceptional wines from Spain's finest regions in the heart of Madrid. Experience curated selections, expert pairings, and intimate atmosphere."
          tag="Welcome"
          tagIcon={Wine}
          buttons={[
            {
              text: "View Wine List",
              href: "wines"
            },
            {
              text: "Make Reservation",
              href: "contact"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763251759907-c79nqvl8.jpg",
              imageAlt: "Elegant wine bar interior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763251760627-qvf9sglk.jpg",
              imageAlt: "Premium wine selection"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763251761415-0at0r5ik.jpg",
              imageAlt: "Wine tasting experience"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763251762347-5uju3tox.jpg",
              imageAlt: "Spanish wine collection"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763251763055-rfhj4jp3.jpg",
              imageAlt: "Professional wine service"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763251763542-v0rvoopr.jpg",
              imageAlt: "Wine and food pairing"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="At Vinoteca Madrid, we celebrate Spain's rich wine heritage through carefully curated selections from renowned regions like Rioja, Ribera del Duero, and Priorat. Our intimate space combines traditional Spanish wine culture with modern elegance, creating the perfect atmosphere for wine lovers to discover exceptional bottles and share memorable moments."
        />
      </div>

      <div id="wines" data-section="wines">
        <ProductCardTwo
          title="Featured Wine Selection"
          description="Carefully curated wines from Spain's most prestigious regions"
          tag="Our Wines"
          tagIcon={Grape}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          products={[
            {
              id: "1",
              brand: "Marqués de Riscal",
              name: "Reserva Rioja",
              price: "€45",
              rating: 5,
              reviewCount: "127",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763251760627-qvf9sglk.jpg",
              imageAlt: "Marqués de Riscal Reserva"
            },
            {
              id: "2",
              brand: "Vega Sicilia",
              name: "Valbuena 5°",
              price: "€85",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763251761415-0at0r5ik.jpg",
              imageAlt: "Vega Sicilia Valbuena"
            },
            {
              id: "3",
              brand: "Alvaro Palacios",
              name: "Les Terrasses Priorat",
              price: "€28",
              rating: 4,
              reviewCount: "156",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763251762347-5uju3tox.jpg",
              imageAlt: "Alvaro Palacios Priorat"
            }
          ]}
        />
      </div>

      <div id="experience" data-section="experience">
        <FeatureCardFive
          title="Wine Experience"
          description="Immerse yourself in authentic Spanish wine culture"
          tag="What We Offer"
          tagIcon={Star}
          textboxLayout="default"
          animationType="background-highlight"
          gridVariant="uniform-all-items-equal"
          features={[
            {
              title: "Professional Tastings",
              icon: Wine
            },
            {
              title: "Food Pairings",
              icon: Utensils
            },
            {
              title: "Private Events",
              icon: Users
            },
            {
              title: "Sommelier Guidance",
              icon: Award
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Real experiences from wine enthusiasts who've visited us"
          tag="Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="blur-reveal"
          testimonials={[
            {
              id: "1",
              name: "Carlos Mendoza",
              role: "Wine Enthusiast",
              testimonial: "An exceptional wine experience in Madrid. The sommelier's knowledge and the curated selection of Spanish wines made our evening unforgettable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763251765204-midjudia.jpg",
              imageAlt: "Carlos Mendoza portrait"
            },
            {
              id: "2",
              name: "Isabella Rodriguez",
              role: "Food & Wine Critic",
              testimonial: "Vinoteca Madrid perfectly captures the essence of Spanish wine culture. Every bottle tells a story, and the atmosphere is simply magical.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763251765870-1fdra4ab.jpg",
              imageAlt: "Isabella Rodriguez portrait"
            },
            {
              id: "3",
              name: "Miguel Santos",
              role: "Business Executive",
              testimonial: "Perfect venue for client entertainment. The wine selection is outstanding and the service is impeccable. Highly recommended for special occasions.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763251766391-ude91b83.jpg",
              imageAlt: "Miguel Santos portrait"
            },
            {
              id: "4",
              name: "Elena & David",
              role: "Wine Lovers",
              testimonial: "We discovered incredible wines we'd never tried before. The pairing recommendations were spot-on and the ambiance made for a romantic evening.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763251767127-qzh13065.jpg",
              imageAlt: "Elena and David portrait"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          title="Join Our Wine Community"
          description="Be the first to know about new arrivals, exclusive tastings, and special events at Vinoteca Madrid."
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive updates about wines, events, and special offers. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Vinoteca Madrid"
          copyrightText="© 2025 | Vinoteca Madrid"
          columns={[
            {
              title: "Visit Us",
              items: [
                {
                  label: "Location",
                  href: "location"
                },
                {
                  label: "Hours",
                  href: "hours"
                },
                {
                  label: "Reservations",
                  href: "contact"
                }
              ]
            },
            {
              title: "Wine",
              items: [
                {
                  label: "Our Selection",
                  href: "wines"
                },
                {
                  label: "Wine Club",
                  href: "wine-club"
                },
                {
                  label: "Private Tastings",
                  href: "events"
                }
              ]
            },
            {
              title: "Connect",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Events",
                  href: "events"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}