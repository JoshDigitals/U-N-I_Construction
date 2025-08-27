import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MapPin, DollarSign, Clock } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Residential', 'Commercial', 'Infrastructure', 'Renovation'];
  
  const projects = [
    {
      id: 1,
      title: 'Skyline Office Complex',
      category: 'Commercial',
      image: '/placeholder.svg',
      description: 'Modern 8-story office building with sustainable design features and LEED certification.',
      location: 'Downtown Business District',
      duration: '18 months',
      budget: '$12M',
      completedDate: '2024',
      features: ['LEED Gold Certified', 'Smart Building Systems', 'Rooftop Garden', 'Underground Parking']
    },
    {
      id: 2,
      title: 'Luxury Residential Estate',
      category: 'Residential',
      image: '/placeholder.svg',
      description: '15-unit luxury townhouse development with modern amenities and sustainable features.',
      location: 'Riverside Heights',
      duration: '14 months',
      budget: '$8.5M',
      completedDate: '2024',
      features: ['Energy Efficient Design', 'Smart Home Technology', 'Community Amenities', 'Landscaped Gardens']
    },
    {
      id: 3,
      title: 'Heritage Bridge Restoration',
      category: 'Infrastructure',
      image: '/placeholder.svg',
      description: 'Complete restoration and modernization of historic 100-year-old city bridge.',
      location: 'Heritage District',
      duration: '12 months',
      budget: '$6.2M',
      completedDate: '2023',
      features: ['Historic Preservation', 'Structural Reinforcement', 'LED Lighting System', 'Pedestrian Walkways']
    },
    {
      id: 4,
      title: 'Metro Shopping Center',
      category: 'Commercial',
      image: '/placeholder.svg',
      description: 'Large-scale retail complex with anchor stores and specialty shops.',
      location: 'Metro Plaza',
      duration: '20 months',
      budget: '$15M',
      completedDate: '2023',
      features: ['300,000 sq ft Retail Space', 'Food Court', 'Multi-level Parking', 'Entertainment Zone']
    },
    {
      id: 5,
      title: 'Victorian Home Renovation',
      category: 'Renovation',
      image: '/placeholder.svg',
      description: 'Complete restoration of historic Victorian home with modern amenities.',
      location: 'Historic Neighborhood',
      duration: '8 months',
      budget: '$750K',
      completedDate: '2024',
      features: ['Historic Character Preserved', 'Modern Kitchen & Baths', 'Energy Upgrades', 'Landscaping']
    },
    {
      id: 6,
      title: 'Riverside Condominiums',
      category: 'Residential',
      image: '/placeholder.svg',
      description: '24-unit luxury condominium building with waterfront views.',
      location: 'Riverside District',
      duration: '16 months',
      budget: '$10M',
      completedDate: '2023',
      features: ['Waterfront Views', 'Fitness Center', 'Rooftop Terrace', 'Secured Parking']
    },
    {
      id: 7,
      title: 'City Hall Expansion',
      category: 'Infrastructure',
      image: '/placeholder.svg',
      description: 'Addition and renovation of municipal government building.',
      location: 'City Center',
      duration: '10 months',
      budget: '$4.8M',
      completedDate: '2024',
      features: ['LEED Silver Certified', 'Public Meeting Spaces', 'Accessibility Features', 'Solar Panels']
    },
    {
      id: 8,
      title: 'Tech Campus Phase 1',
      category: 'Commercial',
      image: '/placeholder.svg',
      description: 'Modern technology campus with flexible office spaces and collaboration areas.',
      location: 'Innovation District',
      duration: '22 months',
      budget: '$18M',
      completedDate: '2023',
      features: ['Flexible Workspaces', 'Innovation Labs', 'Wellness Facilities', 'Green Roof Systems']
    },
    {
      id: 9,
      title: 'Family Home Addition',
      category: 'Renovation',
      image: '/placeholder.svg',
      description: 'Two-story addition with modern kitchen and family room.',
      location: 'Suburban Area',
      duration: '6 months',
      budget: '$450K',
      completedDate: '2024',
      features: ['Open Floor Plan', 'Large Windows', 'Hardwood Floors', 'Modern Fixtures']
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6" variant="secondary">Our Portfolio</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Showcasing Our
              <span className="text-primary block">Construction Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our diverse portfolio of successful projects spanning residential, commercial, 
              and infrastructure construction across the region.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category)}
                className="animate-fade-in"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in"
                   style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4">{project.category}</Badge>
                  <Badge variant="secondary" className="absolute top-4 right-4">{project.completedDate}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <DollarSign className="w-4 h-4 text-primary" />
                      <span>{project.budget}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-1">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-primary">+{project.features.length - 3} more features</li>
                      )}
                    </ul>
                  </div>

                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to={`/projects/${project.id}`}>
                      View Details <ArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4" variant="outline">Our Impact</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Building Success by the Numbers
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$250M+</div>
              <div className="text-muted-foreground">Total Project Value</div>
            </div>
            <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">On-Time Completion</div>
            </div>
            <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Add Your Project to Our Portfolio?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your construction needs and create something amazing together. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/quote">
                Get Free Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
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

export default Projects;