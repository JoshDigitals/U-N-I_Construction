import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Hammer, 
  HardHat, 
  Truck,
  Award,
  Star,
  ArrowRight,
  Phone,
  CheckCircle
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Building2,
      title: 'Residential Construction',
      description: 'Custom homes and residential projects built with precision and care.'
    },
    {
      icon: Hammer,
      title: 'Commercial Projects',
      description: 'Office buildings, retail spaces, and commercial infrastructure.'
    },
    {
      icon: HardHat,
      title: 'Renovations',
      description: 'Transform your existing space with our renovation expertise.'
    },
    {
      icon: Truck,
      title: 'Civil Engineering',
      description: 'Infrastructure projects including roads, bridges, and utilities.'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Office Complex',
      category: 'Commercial',
      image: '/placeholder.svg',
      description: '50,000 sq ft LEED certified office building'
    },
    {
      id: 2,
      title: 'Luxury Residential Estate',
      category: 'Residential',
      image: '/placeholder.svg',
      description: '12-unit luxury townhouse development'
    },
    {
      id: 3,
      title: 'City Bridge Renovation',
      category: 'Infrastructure',
      image: '/placeholder.svg',
      description: 'Historic bridge restoration and modernization'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'U N I Construction transformed our vision into reality. The attention to detail and professionalism was outstanding.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Business Owner',
      content: 'They completed our office renovation on time and under budget. Highly recommended for commercial projects.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Property Developer',
      content: 'Working with U N I has been a game-changer for our development projects. Quality and reliability you can trust.',
      rating: 5
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6" variant="secondary">
              Building Excellence Since 2010
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Building Tomorrow's
              <span className="text-primary block">Infrastructure Today</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              U N I Construction delivers exceptional construction services with unwavering commitment 
              to quality, safety, and innovation. Your vision, our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/quote">
                  Get Free Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">
                  <Phone className="mr-2 w-4 h-4" />
                  Call Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4" variant="outline">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From residential homes to large-scale commercial projects, we have the expertise 
              and resources to bring your construction vision to life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-slide-up" 
                   style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/services">
                      Learn More <ArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4" variant="outline">Featured Projects</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Latest Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of successful projects that showcase our commitment 
              to quality and innovation in construction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in"
                   style={{animationDelay: `${index * 0.2}s`}}>
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4">{project.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={`/projects/${project.id}`}>
                      View Details <ArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4" variant="outline">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Excellence in Every Project
              </h2>
              <p className="text-muted-foreground mb-8">
                With over a decade of experience, U N I Construction has earned a reputation 
                for delivering exceptional results on time and within budget.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Licensed & Insured Professionals',
                  'On-Time Project Delivery',
                  'Competitive Pricing',
                  '24/7 Customer Support',
                  'Quality Guarantee'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Construction team at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 shadow-lg border">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-semibold text-sm">Award Winner</div>
                    <div className="text-xs text-muted-foreground">Construction Excellence 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4" variant="outline">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get in touch with our team today for a free consultation and quote. 
            Let's bring your construction vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/quote">
                Get Free Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/contact">
                <Phone className="mr-2 w-4 h-4" />
                (555) 123-4567
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;