import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navigation } from "@/components/Navigation";

// Country code options
const countryCodes = [
  { code: "+20", name: "Egypt" },
  { code: "+966", name: "Saudi Arabia" },
  { code: "+971", name: "UAE" },
  { code: "+1", name: "USA/Canada" },
  { code: "+44", name: "UK" },
  // Add more country codes as needed
];

export function SignUpPage() {
  const [ageGroup, setAgeGroup] = useState<"over16" | "under16" | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    personality: "",
    guardianFirstName: "",
    guardianLastName: "",
    countryCode: "+20", // Default to Egypt
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    email : ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Your existing navigation can go here */}
       <Navigation />
      
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto p-8 rounded-xl border bg-background shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6">Create Your Account</h1>
          
          {ageGroup === null ? (
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-center">Are you 16 years or older?</h2>
              <div className="flex justify-center gap-4">
                <Button
                  onClick={() => setAgeGroup("over16")}
                  className="w-32"
                  variant="outline"
                >
                  Yes, I'm 16+
                </Button>
                <Button
                  onClick={() => setAgeGroup("under16")}
                  className="w-32"
                  variant="outline"
                >
                  Under 16
                </Button>
              </div>
            </div>
          ) : ageGroup === "under16" ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-lg font-medium text-center mb-4">Student Information</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  min="1"
                  max="15"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>

              
                <div className="space-y-2">
                    <Label htmlFor="Email">Email</Label>
                <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                />
              </div>

              <h2 className="text-lg font-medium text-center mt-6 mb-4">Guardian Information</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="guardianFirstName">Guardian First Name</Label>
                  <Input
                    id="guardianFirstName"
                    name="guardianFirstName"
                    value={formData.guardianFirstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guardianLastName">Guardian Last Name</Label>
                  <Input
                    id="guardianLastName"
                    name="guardianLastName"
                    value={formData.guardianLastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Guardian WhatsApp Number</Label>
                <div className="flex gap-2">
                  <Select
                    value={formData.countryCode}
                    onValueChange={(value) => setFormData({...formData, countryCode: value})}
                  >
                    <SelectTrigger className="w-28">
                      <SelectValue placeholder="Code" />
                    </SelectTrigger>
                    <SelectContent>
                      {countryCodes.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.code} ({country.name})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    placeholder="Phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full mt-6">
                Create Account
              </Button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Regular sign-up form for users 16+ */}
              <h2 className="text-lg font-medium text-center mb-4">Create Your Account</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

                <div className="space-y-2">
                    <Label htmlFor="Email">Email</Label>
                <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                />
              </div>


              {/* Add other fields for 16+ users as needed */}
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">WhatsApp Number</Label>
                <div className="flex gap-2">
                  <Select
                    value={formData.countryCode}
                    onValueChange={(value) => setFormData({...formData, countryCode: value})}
                  >
                    <SelectTrigger className="w-28">
                      <SelectValue placeholder="Code" />
                    </SelectTrigger>
                    <SelectContent>
                      {countryCodes.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.code} ({country.name})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    placeholder="Phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>


              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full mt-6">
                Create Account
              </Button>
            </form>
          )}

          <p className="text-center text-sm text-muted-foreground mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}