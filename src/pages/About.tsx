import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Target, 
  Heart, 
  Award,
  Users,
  Calendar,
  ArrowRight,
  CheckCircle,
  Linkedin
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Every project begins with comprehensive safety planning and continuous monitoring.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Attention to detail in every aspect of construction, from planning to execution.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest communication, transparent pricing, and ethical business practices.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering superior quality that exceeds client expectations.'
    }
  ];

  const timeline = [
    { year: '2010', event: 'Synergy Construction Founded', description: 'Started as a small residential construction company' },
    { year: '2013', event: 'Commercial Expansion', description: 'Expanded into commercial construction projects' },
    { year: '2016', event: 'Civil Engineering Division', description: 'Added infrastructure and civil engineering services' },
    { year: '2019', event: 'Sustainability Focus', description: 'Launched green building and sustainable construction initiatives' },
    { year: '2022', event: 'Technology Integration', description: 'Implemented BIM and advanced project management systems' },
    { year: '2024', event: 'Regional Leader', description: 'Recognized as a top construction company in the region' }
  ];

  const team = [
    {
      name: 'Michael Chen',
      role: 'CEO & Founder',
      image: '/placeholder.svg',
      description: '20+ years in construction management and business development.'
    },
    {
      name: 'Sarah Johnson',
      role: 'VP of Operations',
      image: '/placeholder.svg',
      description: 'Expert in project management and quality assurance with 15 years experience.'
    },
    {
      name: 'David Rodriguez',
      role: 'Chief Engineer',
      image: '/placeholder.svg',
      description: 'Licensed civil engineer specializing in infrastructure and commercial projects.'
    },
    {
      name: 'Lisa Wang',
      role: 'Safety Director',
      image: '/placeholder.svg',
      description: 'Certified safety professional ensuring compliance and worker protection.'
    }
  ];

  const certifications = [
    'OSHA Certified Safety Programs',
    'LEED Green Building Certification',
    'ISO 9001 Quality Management',
    'Licensed General Contractor',
    'Bonded & Insured',
    'Better Business Bureau A+ Rating'
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6" variant="secondary">About Synergy Construction</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Building Trust Through
              <span className="text-primary block">Excellence & Innovation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              For over a decade, Synergy Construction has been a trusted partner in bringing 
              construction visions to life, combining traditional craftsmanship with modern innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4" variant="outline">Our Mission</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Transforming Communities Through Quality Construction
              </h2>
              <p className="text-muted-foreground mb-6">
                Our mission is to deliver exceptional construction services that not only meet but exceed 
                our clients' expectations. We are committed to building lasting relationships through 
                transparency, reliability, and superior craftsmanship.
              </p>
              <p className="text-muted-foreground mb-8">
                We envision a future where sustainable construction practices create healthier communities 
                and a better environment for generations to come.
              </p>
              <Button asChild>
                <Link to="/services">
                  Explore Our Services <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative animate-slide-up">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Construction site with modern building"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4" variant="outline">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision we make and every project we undertake.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in"
                   style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4" variant="outline">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Building Our Legacy
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to industry leadership, explore the milestones that have shaped our company.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-6 animate-slide-up"
                     style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">{item.year}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-foreground mb-2">{item.event}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4" variant="outline">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced team brings together decades of expertise in construction, 
              engineering, and project management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in"
                   style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full overflow-hidden mx-auto mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-xs text-muted-foreground mb-4">{member.description}</p>
                  <Button variant="ghost" size="sm">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4" variant="outline">Certifications & Standards</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Committed to Excellence & Safety
              </h2>
              <p className="text-muted-foreground mb-8">
                Our certifications and adherence to industry standards demonstrate our commitment 
                to quality, safety, and professional excellence in every project we undertake.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-slide-up">
              <div className="space-y-4">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Safety equipment and certification"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Quality control inspection"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Award ceremony"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Team meeting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the Synergy difference. Let's discuss how we can bring 
            your construction project to life with our expertise and dedication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Get In Touch <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/projects">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;