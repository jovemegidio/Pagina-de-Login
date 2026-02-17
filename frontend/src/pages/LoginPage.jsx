import React, { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Loader2, Check, AlertCircle, User } from 'lucide-react';

// Generate avatar URL based on email
const getAvatarUrl = (email) => {
  if (!email || email.length < 3) return null;
  // Using UI Avatars for dynamic avatar generation
  const name = email.split('@')[0].replace(/[^a-zA-Z]/g, ' ').trim() || 'User';
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=6366f1&color=fff&size=128&bold=true&format=svg`;
};

// Background image
const BACKGROUND_IMAGE = 'https://customer-assets.emergentagent.com/job_pro-login-portal/artifacts/lrnov8ts_02.png';

// Animated overlay colors - will cycle through these
const overlayThemes = [
  {
    overlay: 'from-indigo-950/40 via-transparent to-purple-950/40',
    orb1: 'bg-indigo-500/15',
    orb2: 'bg-purple-500/10',
  },
  {
    overlay: 'from-blue-950/40 via-transparent to-cyan-950/40',
    orb1: 'bg-blue-500/15',
    orb2: 'bg-cyan-500/10',
  },
  {
    overlay: 'from-violet-950/40 via-transparent to-fuchsia-950/40',
    orb1: 'bg-violet-500/15',
    orb2: 'bg-fuchsia-500/10',
  },
  {
    overlay: 'from-slate-950/40 via-transparent to-indigo-950/40',
    orb1: 'bg-slate-500/15',
    orb2: 'bg-indigo-500/10',
  },
];

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(0);
  const [avatarLoaded, setAvatarLoaded] = useState(false);

  // Get avatar URL based on email
  const avatarUrl = useMemo(() => getAvatarUrl(email), [email]);

  // Cycle through overlay themes
  useEffect(() => {
    setMounted(true);
    
    const interval = setInterval(() => {
      setCurrentTheme((prev) => (prev + 1) % overlayThemes.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Reset avatar loaded state when email changes
  useEffect(() => {
    setAvatarLoaded(false);
  }, [email]);

  const theme = overlayThemes[currentTheme];

  const validateForm = () => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (password.length < 6) {
      newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulated API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setLoginSuccess(true);
    
    // Reset after success animation
    setTimeout(() => {
      setLoginSuccess(false);
      // Here you would redirect to dashboard
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Background with Image and Animated Overlays */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${BACKGROUND_IMAGE})`,
          }}
        />
        
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Animated gradient overlay that transitions */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${theme.overlay} transition-all duration-[3000ms] ease-in-out`}
        />
        
        {/* Animated Gradient Orbs with theme colors */}
        <div 
          className={`absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full ${theme.orb1} blur-[120px] animate-pulse-slow transition-all duration-[3000ms]`} 
        />
        <div 
          className={`absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full ${theme.orb2} blur-[100px] animate-pulse-slow transition-all duration-[3000ms]`} 
          style={{ animationDelay: '2s' }} 
        />
        
        {/* Moving particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Theme indicator dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {overlayThemes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTheme(index)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                currentTheme === index 
                  ? 'bg-white/80 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Theme ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div 
        className={`relative z-10 w-full max-w-md mx-4 transition-all duration-700 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Login Card */}
        <div className="glass-card rounded-2xl p-8 md:p-10 shadow-glow-lg">
          {/* Avatar & Header */}
          <div className="text-center mb-8">
            {/* Dynamic Avatar */}
            <div className="relative inline-block mb-6">
              <div 
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-glow flex items-center justify-center overflow-hidden transition-all duration-500 ${
                  avatarUrl ? 'animate-scale-in' : 'animate-float'
                }`}
              >
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt="Avatar"
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      avatarLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setAvatarLoaded(true)}
                  />
                ) : null}
                {/* Fallback icon when no email or avatar not loaded */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    avatarUrl && avatarLoaded ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  {email.length > 0 ? (
                    <User className="w-10 h-10 text-primary-foreground" />
                  ) : (
                    <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                </div>
              </div>
              
              {/* Typing indicator ring */}
              {email.length > 0 && (
                <div className="absolute -inset-1 rounded-2xl border-2 border-primary/50 animate-pulse" />
              )}
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {email.length > 2 ? `Olá, ${email.split('@')[0]}` : 'Bem-vindo de volta'}
            </h1>
            <p className="text-muted-foreground text-sm md:text-base">
              {email.length > 2 ? 'Digite sua senha para continuar' : 'Entre na sua conta para continuar'}
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </Label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  className={`h-12 pl-12 pr-4 glass-input text-foreground placeholder:text-muted-foreground/60 transition-all duration-300 ${
                    errors.email ? 'border-destructive focus:border-destructive' : 'focus:border-primary'
                  }`}
                  disabled={isLoading}
                />
                {errors.email && (
                  <div className="flex items-center gap-1.5 mt-1.5 text-destructive text-xs animate-fade-in">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-medium text-foreground">
                  Senha
                </Label>
                <button
                  type="button"
                  className="text-xs text-primary hover:text-primary/80 transition-colors font-medium"
                  onClick={() => alert('Funcionalidade de recuperação de senha - Mock')}
                >
                  Esqueceu a senha?
                </button>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors({ ...errors, password: '' });
                  }}
                  className={`h-12 pl-12 pr-12 glass-input text-foreground placeholder:text-muted-foreground/60 transition-all duration-300 ${
                    errors.password ? 'border-destructive focus:border-destructive' : 'focus:border-primary'
                  }`}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
                {errors.password && (
                  <div className="flex items-center gap-1.5 mt-1.5 text-destructive text-xs animate-fade-in">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.password}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center space-x-3">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={setRememberMe}
                className="border-border/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <Label
                htmlFor="remember"
                className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
              >
                Lembrar de mim por 30 dias
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading || loginSuccess}
              className={`w-full h-12 font-semibold text-base transition-all duration-300 ${
                loginSuccess
                  ? 'bg-success hover:bg-success'
                  : 'bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-glow hover:shadow-glow-lg'
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Entrando...
                </>
              ) : loginSuccess ? (
                <>
                  <Check className="w-5 h-5 mr-2" />
                  Login realizado!
                </>
              ) : (
                <>
                  Entrar
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center mt-8 text-sm text-muted-foreground">
            Não tem uma conta?{' '}
            <button
              type="button"
              className="text-primary hover:text-primary/80 font-semibold transition-colors hover:underline underline-offset-4"
              onClick={() => alert('Página de cadastro - Mock')}
            >
              Criar conta grátis
            </button>
          </p>
        </div>

        {/* Footer */}
        <p className="text-center mt-8 text-xs text-muted-foreground/60">
          Ao continuar, você concorda com nossos{' '}
          <button className="hover:text-muted-foreground transition-colors underline underline-offset-2">
            Termos de Serviço
          </button>{' '}
          e{' '}
          <button className="hover:text-muted-foreground transition-colors underline underline-offset-2">
            Política de Privacidade
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
