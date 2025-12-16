import SearchBar from "./SearchBar";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-secondary via-background to-secondary/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, hsl(var(--muted) / 0.2) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 animate-fade-in">
            Find Your Perfect
            <span className="text-primary block">Place to Call Home</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Discover exceptional properties with our curated collection of homes, 
            apartments, and exclusive listings in your favorite neighborhoods.
          </p>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <SearchBar />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div>
              <p className="font-display text-3xl md:text-4xl font-semibold text-foreground">2,500+</p>
              <p className="text-sm text-muted-foreground mt-1">Active Listings</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-semibold text-foreground">150+</p>
              <p className="text-sm text-muted-foreground mt-1">Expert Agents</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-semibold text-foreground">98%</p>
              <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
