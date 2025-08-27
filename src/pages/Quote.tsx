import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Send } from 'lucide-react';
import { format } from 'date-fns';

const Quote = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    location: '',
    description: ''
  });

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6" variant="secondary">Free Quote Request</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get Your Free
              <span className="text-primary block">Construction Quote</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Tell us about your project and receive a detailed, competitive quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardContent className="p-8">
              <form className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Project Information</h2>
                  <p className="text-muted-foreground mb-6">Help us understand your construction needs</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <Input placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Type *</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential Construction</SelectItem>
                        <SelectItem value="commercial">Commercial Project</SelectItem>
                        <SelectItem value="renovation">Renovation/Remodeling</SelectItem>
                        <SelectItem value="infrastructure">Infrastructure/Civil</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-50k">Under $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                        <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                        <SelectItem value="over-500k">Over $500,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Desired Start Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Project Location *</label>
                  <Input placeholder="City, State or full address" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Project Description *</label>
                  <Textarea 
                    placeholder="Please provide detailed information about your project including size, specific requirements, materials, and any special considerations..."
                    rows={6}
                  />
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <input type="checkbox" id="terms" className="rounded" />
                    <label htmlFor="terms" className="text-sm text-muted-foreground">
                      I agree to the terms of service and privacy policy
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 mb-6">
                    <input type="checkbox" id="updates" className="rounded" />
                    <label htmlFor="updates" className="text-sm text-muted-foreground">
                      Send me updates about my project and construction tips
                    </label>
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Request Free Quote
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Quote;