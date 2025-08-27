import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Hammer, 
  HardHat, 
  Truck,
  Home,
  Wrench,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Award,
  Users
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom homes, renovations, and residential developments tailored to your vision and budget.',
      features: ['Custom Home Design', 'Kitchen & Bath Remodeling', 'Home Additions', 'Basement Finishing'],
      image: '/placeholder.svg'
    },
    {
      icon: Building2,
      title: 'Commercial Projects',
      description: 'Office buildings, retail spaces, and commercial infrastructure built to industry standards.',
      features: ['Office Buildings', 'Retail Centers', 'Warehouses', 'Multi-Unit Developments'],
      image: '/placeholder.svg'
    },
    {
      icon: Hammer,
      title: 'Renovations & Remodeling',
      description: 'Transform existing spaces with modern design and functionality improvements.',
      features: ['Interior Renovations', 'Exterior Updates', 'Historic Restoration', 'Accessibility Upgrades'],
      image: '/placeholder.svg'
    },
    {
      icon: Truck,
      title: 'Civil Engineering',
      description: 'Infrastructure projects including roads, bridges, and utility systems.',
      features: ['Road Construction', 'Bridge Building', 'Utility Installation', 'Site Development'],
      image: '/placeholder.svg'
    },
    {
      icon: HardHat,
      title: 'Project Management',
      description: 'Comprehensive project oversight from planning to completion with dedicated project managers.',
      features: ['Timeline Management', 'Budget Control', 'Quality Assurance', 'Permit Coordination'],
      image: '/placeholder.svg'
    },
    {
      icon: Wrench,
      title: 'Maintenance & Repairs',
      description: 'Ongoing maintenance services and emergency repairs for residential and commercial properties.',
      features: ['Preventive Maintenance', 'Emergency Repairs', 'Facility Management', 'Warranty Service'],
      image: '/placeholder.svg'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Consultation',
      description: 'Initial meeting to understand your vision, requirements, and budget constraints.'
    },
    {
      step: '2',
      title: 'Planning & Design',
      description: 'Detailed project planning, architectural design, and permit acquisition.'
    },
    {
      step: '3',
      title: 'Construction',
      description: 'Professional execution with regular updates and quality checkpoints.'
    },
    {
      step: '4',
      title: 'Completion',
      description: 'Final inspection, handover, and ongoing support for your new space.'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We respect your timeline and deliver projects on schedule.'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'All work comes with comprehensive warranties and quality assurance.'
    },
    {
      icon: Award,
      title: 'Licensed Professionals',
      description: 'Fully licensed, bonded, and insured construction experts.'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 customer service and project management support.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6" variant="secondary">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive Construction
              <span className="text-primary block">Solutions for Every Need</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From residential renovations to large-scale commercial projects, we deliver 
              exceptional construction services with unmatched quality and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-fade-in"
                   style={{animationDelay: `${index * 0.1}s`}}>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="aspect-square md:aspect-auto bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-primary/90 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/quote">
                        Get Quote <ArrowRight className="ml-1 w-3 h-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4" variant="outline">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures smooth project execution from initial consultation to final completion.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-6 h-0.5 bg-border transform -translate-y-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4" variant="outline">Why Choose Synergy</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Synergy Advantage
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We go beyond construction to provide comprehensive solutions that ensure your project's success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in"
                   style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-in">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-primary-foreground/80">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-primary-foreground/80">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Let's discuss how we can 
            bring your construction vision to life with our comprehensive services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/quote">
                Get Free Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;