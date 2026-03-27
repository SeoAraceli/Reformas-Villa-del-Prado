/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  CheckCircle, 
  Wrench, 
  PaintRoller, 
  Hammer, 
  MapPin, 
  Phone, 
  Star, 
  MessageCircle, 
  ChevronDown, 
  Clock, 
  Shield,
  Ruler,
  ArrowRight,
  Calculator
} from 'lucide-react';

export default function App() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "2ea846be-9eb7-46f7-884e-430c4d1a0347");
    formData.append("subject", "Nuevo contacto desde Landing Reformas Villa del Prado");
    formData.append("from_name", "Landing Reformas Villa del Prado");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });
      
      if (response.ok) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-200 selection:text-blue-900">
      {/* MENÚ SUPERIOR FIJO */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo / Nombre */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center shadow-md">
                <Hammer className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl md:text-2xl text-slate-900 tracking-tight">
                Reformas <span className="text-blue-600">Villa del Prado</span>
              </span>
            </div>
            
            {/* CTA Button */}
            <div className="flex items-center">
              <a 
                href="#contacto" 
                className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Calculator className="w-4 h-4" />
                Pedir Presupuesto Gratis
              </a>
              <a 
                href="#contacto" 
                className="sm:hidden flex items-center justify-center bg-blue-600 text-white p-2.5 rounded-full shadow-md"
                aria-label="Pedir Presupuesto"
              >
                <Calculator className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center pt-10 pb-16 md:pt-12 md:pb-20 overflow-hidden">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
              alt="Reforma integral de lujo en Villa del Prado" 
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
              fetchPriority="high"
              decoding="async"
            />
            {/* Elegant gradient overlay: solid white on mobile, fading to transparent on desktop */}
            <div className="absolute inset-0 bg-white/90 sm:bg-transparent sm:bg-gradient-to-r sm:from-white sm:via-white/80 sm:to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl py-10">
              
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-800 font-semibold text-sm mb-8 border border-blue-100 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                Empresa Líder · 20 Años de Experiencia
              </div>

              {/* H1 PRINCIPAL */}
              <h1 className="mb-6 leading-[1.1] text-slate-900 font-bold text-4xl sm:text-5xl md:text-6xl">
                Reformas Villa del Prado
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-800 font-medium mb-6">
                Servicio Premium y Calidad Garantizada para tu Hogar o Negocio
              </p>
              
              <div className="text-lg text-slate-600 leading-relaxed mb-10">
                <p>
                  Si buscas una <strong>empresa de reformas integrales en Villa del Prado</strong> seria y profesional, somos tu mejor opción. 
                  Especialistas en reformas de cocinas, baños, pisos y chalets. Transformamos tus ideas en realidad con acabados de alta calidad, presupuestos cerrados y cumplimiento estricto de plazos.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contacto" className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-4 sm:px-8 text-base font-bold rounded-xl text-blue-900 bg-yellow-400 hover:bg-yellow-300 transition-all shadow-lg hover:shadow-yellow-400/30 hover:-translate-y-1">
                  Obtener Presupuesto Gratis <span className="hidden sm:inline ml-1"> y Sin Compromiso</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="tel:+34640839282" className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-4 sm:px-8 text-base font-bold rounded-xl text-slate-800 bg-white hover:bg-slate-50 transition-all border-2 border-slate-200 hover:border-slate-300 hover:-translate-y-1 shadow-sm">
                  <Phone className="w-5 h-5 mr-2 text-blue-600" />
                  640 839 282
                </a>
              </div>

              {/* Features mini-grid */}
              <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200/60 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 border border-slate-100">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-sm font-bold text-slate-800 leading-tight">Presupuesto<br/>Gratuito</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 border border-slate-100">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-sm font-bold text-slate-800 leading-tight">Garantía<br/>por Escrito</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* POR QUÉ ELEGIRNOS */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                  Empresa de Reformas en Villa del Prado: ¿Por qué elegirnos?
                </h2>
                <p className="text-lg text-slate-600 mb-10">
                  Nuestro compromiso es tu absoluta satisfacción. Como especialistas en <strong>reformas integrales en Villa del Prado</strong>, combinamos más de dos décadas de trayectoria en el sector de la construcción con los mejores materiales para entregarte resultados impecables.
                </p>

                <div className="space-y-6">
                  <article className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow flex gap-6 items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Calidad Garantizada</h3>
                      <p className="text-slate-600">Utilizamos materiales de primera línea y aplicamos estrictos controles de calidad en cada fase de la obra.</p>
                    </div>
                  </article>
                  
                  <article className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow flex gap-6 items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">20 Años de Experiencia</h3>
                      <p className="text-slate-600">Dos décadas transformando viviendas y locales comerciales nos avalan. Un equipo profesional a tu disposición.</p>
                    </div>
                  </article>

                  <article className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow flex gap-6 items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Cumplimiento de Plazos</h3>
                      <p className="text-slate-600">Nos comprometemos por contrato a finalizar tu reforma en la fecha acordada, sin excusas ni demoras.</p>
                    </div>
                  </article>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://www.6mejores.com/wp-content/uploads/2026/03/empresa-de-reformas-home-page.jpg" 
                  alt="Equipo de reformas en Villa del Prado" 
                  className="rounded-3xl shadow-2xl object-cover w-full h-[400px] md:h-[600px]" 
                  referrerPolicy="no-referrer" 
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">20</div>
                    <div>
                      <div className="font-bold text-slate-900">Años de</div>
                      <div className="text-slate-600">Experiencia</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section className="py-16 md:py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Servicios de Reformas Integrales en Villa del Prado
              </h2>
              <p className="text-lg text-slate-300">
                Cubrimos todas las necesidades de tu proyecto de construcción y rehabilitación con un equipo multidisciplinar de albañiles, fontaneros, electricistas y carpinteros.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-blue-500 transition-colors">
                <div className="h-56 overflow-hidden relative">
                  <img src="https://www.6mejores.com/wp-content/uploads/2026/02/empresa-de-reformas-reformas-integrales.jpg" alt="Reformas Integrales" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  <Wrench className="absolute bottom-4 left-4 w-8 h-8 text-blue-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Reformas Integrales</h3>
                  <p className="text-slate-400">Renovación completa de viviendas, pisos y chalets con gestión de licencias.</p>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="group rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-blue-500 transition-colors">
                <div className="h-56 overflow-hidden relative">
                  <img src="https://www.6mejores.com/wp-content/uploads/2026/02/reforma-cocina.jpg" alt="Reformas de Cocinas" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  <PaintRoller className="absolute bottom-4 left-4 w-8 h-8 text-blue-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Reformas de Cocinas</h3>
                  <p className="text-slate-400">Diseño y montaje de cocinas modernas, funcionales y a medida.</p>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="group rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-blue-500 transition-colors">
                <div className="h-56 overflow-hidden relative">
                  <img src="https://www.6mejores.com/wp-content/uploads/2026/02/reforma-bano.jpg" alt="Reformas de Baños" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  <Hammer className="absolute bottom-4 left-4 w-8 h-8 text-blue-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Reformas de Baños</h3>
                  <p className="text-slate-400">Cambio de bañera por plato de ducha, alicatados y sanitarios de diseño.</p>
                </div>
              </div>
              
              {/* Card 4 */}
              <div className="group rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-blue-500 transition-colors">
                <div className="h-56 overflow-hidden relative">
                  <img src="https://www.6mejores.com/wp-content/uploads/2026/02/reforma-integrales-locales-comerciales.jpg" alt="Locales Comerciales" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  <Ruler className="absolute bottom-4 left-4 w-8 h-8 text-blue-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Locales Comerciales</h3>
                  <p className="text-slate-400">Adaptación de espacios de negocio para maximizar el atractivo y la operatividad.</p>
                </div>
              </div>
              
              {/* Card 5 */}
              <div className="group rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-blue-500 transition-colors">
                <div className="h-56 overflow-hidden relative">
                  <img src="https://www.6mejores.com/wp-content/uploads/2026/02/reformas-carpinteria-y-suelos.jpg" alt="Carpintería y Suelos" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  <Wrench className="absolute bottom-4 left-4 w-8 h-8 text-blue-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Carpintería y Suelos</h3>
                  <p className="text-slate-400">Instalación de tarima, parquet, puertas a medida y armarios empotrados.</p>
                </div>
              </div>
              
              {/* Card 6 */}
              <div className="group rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-blue-500 transition-colors">
                <div className="h-56 overflow-hidden relative">
                  <img src="https://www.6mejores.com/wp-content/uploads/2026/02/rehabilacion-fachadas-empresa-de-reformas.jpg" alt="Rehabilitación de Fachadas" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  <Shield className="absolute bottom-4 left-4 w-8 h-8 text-blue-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Albañilería y Fachadas</h3>
                  <p className="text-slate-400">Trabajos de albañilería general, aislamiento y rehabilitación de exteriores.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA INTERMEDIO DE ALTA CONVERSIÓN */}
        <section className="py-16 bg-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              ¿Listo para transformar tu hogar en Villa del Prado?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
              No dejes tu proyecto para mañana. Pídenos presupuesto hoy mismo: es <strong>100% gratuito, detallado y sin ningún tipo de compromiso</strong>. Te asesoramos desde el primer minuto.
            </p>
            <a href="#contacto" className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-bold rounded-xl text-blue-900 bg-yellow-400 hover:bg-yellow-300 transition-all shadow-xl hover:shadow-yellow-400/40 hover:-translate-y-1 transform">
              <Calculator className="mr-2 w-5 h-5 sm:w-6 sm:h-6" />
              Calcular mi Presupuesto Gratis Ahora
            </a>
          </div>
        </section>

        {/* NUESTROS TRABAJOS (ANTES Y DESPUÉS) */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Proyectos Reales: Reformas en Villa del Prado Antes y Después
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Una imagen vale más que mil palabras. Descubre cómo nuestra <strong>empresa de reformas en Villa del Prado</strong> da una nueva vida a espacios anticuados, convirtiéndolos en hogares modernos, funcionales y con la máxima eficiencia energética.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Proyecto 1: Cocina */}
              <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-lg group flex flex-col">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://www.6mejores.com/wp-content/uploads/2026/02/reforma-cocina-antes-y-despues.jpg" 
                    alt="Reforma de cocina antes y después en Villa del Prado" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-slate-800 shadow-sm border border-white/50">
                    Reforma Integral de Cocina
                  </div>
                </div>
                <div className="p-6 md:p-8 flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Modernización y Apertura de Espacios</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Renovación completa de mobiliario, fontanería y electricidad. Se optimizó la distribución para crear un concepto más abierto que aporta mayor luminosidad, amplitud y funcionalidad al corazón del hogar.
                  </p>
                </div>
              </div>

              {/* Proyecto 2: Salón */}
              <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-lg group flex flex-col">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://www.6mejores.com/wp-content/uploads/2026/02/reforma-salon-antes-y-despues-2.jpg" 
                    alt="Reforma de salón antes y después en Villa del Prado" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-slate-800 shadow-sm border border-white/50">
                    Reforma de Salón Comedor
                  </div>
                </div>
                <div className="p-6 md:p-8 flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Actualización Estética y Confort</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Cambio de suelos, alisado de paredes, nueva iluminación integrada y actualización de carpintería. Un cambio radical que convierte una estancia anticuada en un salón cálido, elegante y acogedor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GALERÍA DE TRABAJO */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Nuestro Equipo en Acción
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Cuidamos cada detalle durante el proceso de obra. Limpieza, orden y profesionalidad son nuestras señas de identidad en cada proyecto en Villa del Prado.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img src="https://www.6mejores.com/wp-content/uploads/2026/02/empresa-de-reformas-albalineria.jpg" alt="Trabajos de albañilería" className="w-full h-64 object-cover rounded-2xl shadow-md hover:shadow-xl transition-shadow" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              <img src="https://www.6mejores.com/wp-content/uploads/2026/02/empresa-de-reformas-.jpg" alt="Equipo de reformas trabajando" className="w-full h-64 object-cover rounded-2xl shadow-md hover:shadow-xl transition-shadow" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              <img src="https://www.6mejores.com/wp-content/uploads/2026/02/empresa-reformas-integrales-.jpg" alt="Proceso de reforma integral" className="w-full h-64 object-cover rounded-2xl shadow-md hover:shadow-xl transition-shadow" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
            </div>
          </div>
        </section>

        {/* BANNER GARANTÍA */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://www.6mejores.com/wp-content/uploads/2026/02/reformas-integrales-garantia-de-por-vida.jpg" 
              alt="Garantía en reformas" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-blue-900/85 mix-blend-multiply"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Tranquilidad y Garantía Total</h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              En Reformas Villa del Prado no solo construimos espacios, construimos confianza. Todos nuestros proyectos cuentan con garantía por escrito y materiales certificados.
            </p>
            <a href="#contacto" className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-4 sm:px-8 text-base font-bold rounded-xl text-blue-900 bg-yellow-400 hover:bg-yellow-300 transition-all shadow-lg hover:shadow-yellow-400/40 hover:-translate-y-1">
              Quiero mi Presupuesto Gratuito
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                Lo que dicen nuestros clientes
              </h2>
              <div className="flex justify-center items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-lg font-medium text-slate-700">4.9/5 de media</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-600 italic mb-6">"Contratamos la reforma integral de nuestro piso y el resultado ha sido espectacular. Cumplieron los plazos y el presupuesto al céntimo. Muy recomendables."</p>
                <div className="font-bold text-slate-900">- Carlos M.</div>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-600 italic mb-6">"Grandes profesionales. Reformaron mi cocina en tiempo récord y con unos acabados de primera calidad. El equipo fue muy limpio y educado durante toda la obra."</p>
                <div className="font-bold text-slate-900">- Laura G.</div>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-600 italic mb-6">"Buscábamos una empresa seria en la zona y acertamos de pleno. Nos asesoraron genial con los materiales y la ejecución del baño fue impecable."</p>
                <div className="font-bold text-slate-900">- Antonio R.</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Preguntas Frecuentes sobre Reformas en Villa del Prado
              </h2>
              <p className="text-lg text-slate-600">Resolvemos tus dudas principales antes de empezar tu obra o rehabilitación.</p>
            </div>

            <div className="space-y-4">
              <details className="group bg-slate-50 rounded-xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-bold text-lg">
                  ¿Cuánto se tarda en hacer una reforma integral?
                  <ChevronDown className="w-5 h-5 transition duration-300 group-open:-rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  El tiempo varía según las dimensiones y complejidad del proyecto. Sin embargo, en <strong>Reformas Villa del Prado</strong> nos caracterizamos por nuestra eficiencia. Una reforma integral de una vivienda media suele completarse en un plazo de 6 a 8 semanas, garantizando siempre fechas por contrato.
                </div>
              </details>

              <details className="group bg-slate-50 rounded-xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-bold text-lg">
                  ¿El presupuesto inicial es gratuito y sin compromiso?
                  <ChevronDown className="w-5 h-5 transition duration-300 group-open:-rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  Sí, absolutamente. Realizamos una visita técnica a tu inmueble para evaluar las necesidades, tomar medidas y escuchar tus ideas. Posteriormente, te entregamos un presupuesto detallado sin ningún coste ni compromiso por tu parte.
                </div>
              </details>

              <details className="group bg-slate-50 rounded-xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-bold text-lg">
                  ¿Gestionáis las licencias y permisos de obra?
                  <ChevronDown className="w-5 h-5 transition duration-300 group-open:-rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  Por supuesto. Como expertos en <strong>Reformas Villa del Prado</strong>, nos encargamos de toda la burocracia. Gestionamos las licencias de obra mayor o menor en el ayuntamiento, permisos de ocupación de vía pública para contenedores y cualquier trámite necesario para que no tengas que preocuparte de nada.
                </div>
              </details>

              <details className="group bg-slate-50 rounded-xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-bold text-lg">
                  ¿Ofrecéis garantía sobre los trabajos realizados?
                  <ChevronDown className="w-5 h-5 transition duration-300 group-open:-rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  Sí, todos nuestros trabajos cuentan con una garantía por escrito. Utilizamos materiales de primera calidad y mano de obra cualificada, lo que nos permite respaldar nuestro trabajo y asegurar la durabilidad de tu inversión.
                </div>
              </details>

              <details className="group bg-slate-50 rounded-xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-bold text-lg">
                  ¿Puedo vivir en la casa durante la reforma?
                  <ChevronDown className="w-5 h-5 transition duration-300 group-open:-rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  Depende del alcance de la obra. Para reformas parciales (solo un baño o pintura), solemos aislar la zona de trabajo para minimizar molestias. Para reformas integrales que afectan a suministros básicos (agua, luz) o suelos, recomendamos buscar un alojamiento temporal por seguridad y comodidad.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* ZONAS DE ACTUACIÓN (SEO LOCAL) */}
        <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Empresa de reformas cerca de ti: Zonas de actuación en Villa del Prado
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Como empresa de referencia en <strong>Reformas Villa del Prado</strong>, nos desplazamos a cualquier punto del municipio. Conocemos las normativas locales y las particularidades arquitectónicas de cada zona, desde los chalets de las urbanizaciones hasta los pisos y locales comerciales del centro, para ofrecerte la mejor solución de albañilería adaptada a tu entorno.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[
                "Casco Urbano (Centro)",
                "Urb. Encinar del Alberche",
                "El Gurugú",
                "Los Barrancos",
                "Zona de la Estación",
                "Polígono Industrial"
              ].map((barrio, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group cursor-default">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="font-bold text-slate-800 text-lg group-hover:text-blue-700 transition-colors duration-300">{barrio}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO Y MAPA */}
        <section id="contacto" className="py-16 md:py-24 bg-slate-900 text-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Formulario */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                  Da el primer paso: Presupuesto Gratis
                </h2>
                <p className="text-slate-400 mb-10 text-lg">
                  Rellena el formulario y nuestro equipo técnico en Villa del Prado te contactará en <strong>menos de 24 horas</strong> para valorar tu proyecto sin compromiso.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6 bg-slate-800 p-6 md:p-8 rounded-2xl border border-slate-700 shadow-xl">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nombre completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-shadow"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">Teléfono</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-shadow"
                      placeholder="Tu número de teléfono"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Detalles de la reforma</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={4} 
                      required 
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-shadow resize-none"
                      placeholder="Cuéntanos brevemente qué necesitas..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-yellow-400/30 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex justify-center items-center text-lg"
                  >
                    {formStatus === 'submitting' ? 'Enviando...' : (
                      <>
                        Enviar y Recibir mi Presupuesto Gratis
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>

                  {formStatus === 'success' && (
                    <div className="p-4 bg-green-900/50 border border-green-500/50 text-green-200 rounded-lg text-sm text-center">
                      ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                    </div>
                  )}
                  {formStatus === 'error' && (
                    <div className="p-4 bg-red-900/50 border border-red-500/50 text-red-200 rounded-lg text-sm text-center">
                      Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o llámanos.
                    </div>
                  )}
                </form>
              </div>

              {/* Info y Mapa */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-8">Información de Contacto</h3>
                  <div className="space-y-6 mb-10">
                    <div className="flex items-start">
                      <div className="bg-slate-800 p-3 rounded-lg mr-4 border border-slate-700">
                        <MapPin className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">Dirección</h4>
                        <p className="text-slate-400">Av. de la Reina Sofia<br/>28630 Villa del Prado, Madrid</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-slate-800 p-3 rounded-lg mr-4 border border-slate-700">
                        <Phone className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">Teléfono</h4>
                        <p className="text-slate-400 text-xl font-medium">640 839 282</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full h-80 bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48695.23466184852!2d-4.34149205!3d40.27648315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41a2e3b2e5a1b3%3A0x40340f3be4d2c80!2s28630%20Villa%20del%20Prado%2C%20Madrid!5e0!3m2!1ses!2ses!4v1709000000000!5m2!1ses!2ses" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de Villa del Prado"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CONCLUSIÓN SEO */}
        <section className="py-16 bg-white text-center px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-slate-600 leading-relaxed">
              No esperes más para transformar tu espacio. Confía en <strong>Reformas Villa del Prado</strong> para hacer realidad tus proyectos con la máxima calidad y profesionalidad. Nuestro equipo está listo para asesorarte y ofrecerte las mejores soluciones adaptadas a tu presupuesto.
            </p>
          </div>
        </section>

        {/* OTRAS DELEGACIONES (LINKBUILDING) */}
        <div className="bg-slate-50 pt-10 pb-4 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Otras delegaciones</p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-400 justify-center mb-4">
              <a href="https://reformasusera.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Usera</a>
              <a href="https://reformasvaldemoro.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Valdemoro</a>
              <a href="https://reformasbarajas.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Barajas</a>
              <a href="https://reformastorrejondeardoz.com.es/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Torrejón de Ardoz</a>
              <a href="https://reformasalcaladehenares.com.es/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Alcalá de Henares</a>
              <a href="https://reformasvallecas.reformas.org.es/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Vallecas</a>
              <a href="https://reformascoslada.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Coslada</a>
              <a href="https://reformasaranjuez.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Aranjuez</a>
              <a href="https://reformaspinto.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Pinto</a>
              <a href="https://reformasarroyomolinos.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Arroyomolinos</a>
              <a href="https://reformassevillalanueva.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Sevilla la Nueva</a>
              <a href="https://reformas-colmenar-de-oreja.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Colmenar de Oreja</a>
              <a href="https://reformasnavalcarnero.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Navalcarnero</a>
              <a href="https://reformasciempozuelos.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Ciempozuelos</a>
              <a href="https://reformashumanes.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Humanes</a>
              <a href="https://reformassanmartindelavega.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas San Martín de la Vega</a>
              <a href="https://reformasgrinon.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Griñón</a>
              <a href="https://reformaselalamo.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas El Álamo</a>
              <a href="https://reformasmadrid.nom.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Madrid</a>
              <a href="https://reformastorrejondelacalzada.reformas.org.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Torrejón de la Calzada</a>
              <a href="https://reformas-san-martin.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas San Martín</a>
              <a href="https://reformas-morata-de-tajuna.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Morata de Tajuña</a>
              <a href="https://reformasguadalajara.com.es" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Reformas Guadalajara</a>
            </div>
          </div>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-8 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2026 Reformas Villa del Prado. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* WHATSAPP FLOTANTE */}
      <a 
        href="https://wa.me/34640839282?text=Hola,%20estoy%20interesado%20en%20solicitar%20un%20presupuesto%20para%20una%20reforma." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all z-50 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
