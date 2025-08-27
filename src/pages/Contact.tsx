import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6" variant="secondary">Contact Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Build Something
              <span className="text-primary block">Amazing Together</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to start your project? Contact our team for expert consultation and competitive quotes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                      <Input
                        placeholder="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                      <Input
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      />
                    </div>
                    <Textarea
                      placeholder="Tell us about your project..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">info@synergyconst.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 mb-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-muted-foreground">123 Construction Ave<br/>Building City, BC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-muted-foreground">Mon - Fri: 7AM - 6PM<br/>Sat: 8AM - 4PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Emergency Services</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    We provide 24/7 emergency construction services for urgent repairs and safety issues.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Emergency: (555) 999-HELP
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;