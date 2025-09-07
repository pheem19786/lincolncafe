import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Check, Heart, Users, Coffee } from "lucide-react";

// Import food images
import fruitPlate from "@assets/539583309_1182327727250258_4025900295750437900_n_1757230578870.jpg";
import fruitSausage from "@assets/540492833_1182327760583588_3520226448759219356_n_1757230578871.jpg";
import chickenFries from "@assets/540580314_1182327747250256_148453568237514724_n_1757230578872.jpg";
import comfortMeal from "@assets/541415469_1182327683916929_231258140494532466_n_1757230578873.jpg";
import heartyBreakfast from "@assets/541450718_1182327717250259_4950985206868297929_n_1757230578874.jpg";
import newMenuImage from "@assets/539460909_1182327713916926_4746805808244324936_n (1)_1757236208007.jpg";

// Import cafe building image
import cafeBuilding from "@assets/yffffffffffu_1757234559480.jpg";


export default function Home() {
  const menuItems = [
    {
      id: 1,
      image: fruitPlate,
      title: "French Toast Special",
      description: "Thick-cut French toast triangles with fresh fruit and whipped cream"
    },
    {
      id: 2,
      image: fruitSausage,
      title: "Breakfast Combo",
      description: "Fresh fruit medley paired with our homemade breakfast sausage"
    },
    {
      id: 3,
      image: chickenFries,
      title: "Chicken & Fries",
      description: "Crispy chicken strips with golden fries and tangy barbecue sauce"
    },
    {
      id: 4,
      image: comfortMeal,
      title: "Comfort Special",
      description: "Tender braised meat with rich gravy and creamy mashed potatoes"
    },
    {
      id: 5,
      image: heartyBreakfast,
      title: "Hearty Breakfast",
      description: "Fluffy omelet served with our signature fresh fruit salad"
    },
    {
      id: 6,
      image: newMenuImage,
      title: "Special Combo",
      description: "Crispy chicken strips with fresh fruit medley"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="font-serif font-bold text-2xl text-primary">
              Lincoln Cafe
            </div>
            <div className="hidden md:flex space-x-8">
              <a 
                href="#home" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="nav-home"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="nav-about"
              >
                About
              </a>
              <a 
                href="#menu" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="nav-menu"
              >
                Menu
              </a>
              <a 
                href="#contact" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="nav-contact"
              >
                Contact
              </a>
            </div>
            <Button asChild data-testid="button-call-header">
              <a href="tel:+13194442228">Call Now</a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative py-20 lg:py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cafeBuilding})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4">
              <h1 className="font-serif font-bold text-5xl lg:text-7xl text-primary" data-testid="text-hero-title">
                Lincoln Cafe
              </h1>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3">
              <p className="text-xl lg:text-2xl text-muted-foreground" data-testid="text-hero-subtitle">
                Make us as your headquarters for good eating
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" data-testid="button-view-menu">
              <a href="#menu">View Our Menu</a>
            </Button>
            <Button variant="outline" asChild size="lg" data-testid="button-call-hero">
              <a href="tel:+13194442228">(319) 444-2228</a>
            </Button>
          </div>
          
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3" data-testid="badge-location">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">1214 8th Ave, Belle Plaine, IA</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif font-bold text-4xl text-primary mb-8" data-testid="text-about-title">
            Welcome to Lincoln Cafe
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12" data-testid="text-about-description">
            Serving fresh coffee, pastries, and local favorites daily. We're your neighborhood gathering place where comfort meets quality, and every meal is prepared with care and passion.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="feature-fresh">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-xl mb-2">Fresh Daily</h3>
              <p className="text-muted-foreground">All our dishes are prepared fresh daily using local ingredients</p>
            </div>
            
            <div className="text-center" data-testid="feature-love">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-xl mb-2">Made with Love</h3>
              <p className="text-muted-foreground">Every meal is crafted with care and attention to detail</p>
            </div>
            
            <div className="text-center" data-testid="feature-community">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-xl mb-2">Community Focused</h3>
              <p className="text-muted-foreground">A gathering place for friends, family, and neighbors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl text-primary mb-4" data-testid="text-menu-title">
              Our Menu Highlights
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-menu-description">
              Discover our delicious breakfast, lunch, and comfort food favorites
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <div key={item.id} className="menu-card overflow-hidden shadow-sm rounded-lg" data-testid={`card-menu-${item.id}`}>
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt="Menu item"
                    className="w-full h-full object-cover" 
                    data-testid={`img-menu-${item.id}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6" data-testid="text-menu-footer">
              Visit us to see our full menu with daily specials!
            </p>
            <Button asChild size="lg" data-testid="button-call-reservations">
              <a href="tel:+13194442228">Call for Reservations</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl text-primary mb-4" data-testid="text-contact-title">
              Visit Us Today
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-contact-description">
              Come experience the warmth and flavor of Lincoln Cafe
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif font-semibold text-2xl mb-6" data-testid="text-contact-info-title">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4" data-testid="contact-address">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Address</h4>
                    <p className="text-muted-foreground">1214 8th Ave<br />Belle Plaine, IA, United States</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4" data-testid="contact-phone">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a 
                      href="tel:+13194442228" 
                      className="text-primary hover:text-primary/80 transition-colors duration-200"
                      data-testid="link-phone"
                    >
                      (319) 444-2228
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4" data-testid="contact-email">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:braja34@gmail.com" 
                      className="text-primary hover:text-primary/80 transition-colors duration-200"
                      data-testid="link-email"
                    >
                      braja34@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4" data-testid="contact-facebook">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Facebook className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Facebook</h4>
                    <a 
                      href="https://m.facebook.com/Lincoln-Cafe-244553128909417/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:text-primary/80 transition-colors duration-200"
                      data-testid="link-facebook"
                    >
                      Follow us on Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-serif font-semibold text-2xl mb-6" data-testid="text-hours-title">
                Hours & Information
              </h3>
              
              <Card className="p-6" data-testid="card-hours">
                <h4 className="font-medium mb-4">Operating Hours</h4>
                <p className="text-muted-foreground mb-6" data-testid="text-hours-note">
                  Please call us for current operating hours and daily specials.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3" data-testid="feature-coffee">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-sm">Fresh coffee & pastries daily</span>
                  </div>
                  <div className="flex items-center gap-3" data-testid="feature-favorites">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-sm">Local favorites & comfort food</span>
                  </div>
                  <div className="flex items-center gap-3" data-testid="feature-dining">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-sm">Dine-in & takeout available</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h3 className="font-serif font-bold text-2xl mb-4" data-testid="text-footer-title">
              Lincoln Cafe
            </h3>
            <p className="text-primary-foreground/80 mb-6" data-testid="text-footer-tagline">
              Your headquarters for good eating in Belle Plaine, Iowa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a 
                href="tel:+13194442228" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                data-testid="link-footer-phone"
              >
                (319) 444-2228
              </a>
              <span className="hidden sm:block text-primary-foreground/60">•</span>
              <span className="text-primary-foreground/80" data-testid="text-footer-address">
                1214 8th Ave, Belle Plaine, IA
              </span>
              <span className="hidden sm:block text-primary-foreground/60">•</span>
              <a 
                href="https://m.facebook.com/Lincoln-Cafe-244553128909417/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                data-testid="link-footer-facebook"
              >
                Facebook
              </a>
            </div>
            <div className="border-t border-primary-foreground/20 pt-6">
              <p className="text-primary-foreground/60 text-sm" data-testid="text-footer-copyright">
                © 2024 Lincoln Cafe. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
