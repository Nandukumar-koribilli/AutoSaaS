import { Button } from "../components/ui/button";
import { ArrowRight, Bot, Zap, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center pt-24 pb-12 px-4 md:pt-32 md:pb-24 text-center bg-gradient-to-b from-white to-slate-50">
        <div className="container max-w-5xl mx-auto space-y-8">
          <div className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-sm text-primary-600">
            <span className="flex h-2 w-2 rounded-full bg-primary-600 mr-2 animate-pulse"></span>
            Now Available in Beta
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900">
            Turn your <span className="text-primary-600">Workflows</span> into <br className="hidden md:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-indigo-600">Powerful Apps</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed">
            The fastest way to wrap your n8n workflows into a professional, scalable web application. Monetize your automation in minutes, not months.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/dashboard">
              <Button size="lg" className="h-12 px-8 text-base gap-2 shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 transition-all">
                Start Building <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base">
              View Demo
            </Button>
          </div>
          
          {/* Hero Image Mockup */}
          <div className="relative mt-16 mx-auto max-w-4xl rounded-xl border border-slate-200 bg-slate-100/50 p-2 md:p-4 shadow-2xl">
            <div className="rounded-lg bg-white overflow-hidden aspect-video relative flex items-center justify-center border border-slate-100">
              <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
              <div className="z-10 text-center space-y-4">
                <Bot className="h-20 w-20 text-primary-200 mx-auto" />
                <p className="text-slate-400 font-medium">Application Interface Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Everything you need to ship</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We handle the frontend, backend, and infrastructure so you can focus on your workflows.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard 
              icon={<Zap className="h-6 w-6 text-amber-500" />}
              title="Instant Deployment"
              description="Connect your n8n webhook and get a live URL instantly. No config needed."
            />
            <FeatureCard 
              icon={<Shield className="h-6 w-6 text-emerald-500" />}
              title="Secure Auth"
              description="Built-in user authentication, session management, and role-based access control."
            />
            <FeatureCard 
              icon={<Globe className="h-6 w-6 text-blue-500" />}
              title="Custom Domains"
              description="Map your own domain to your app for a fully white-labeled experience."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-8 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 group-hover:bg-primary-50 transition-colors">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
