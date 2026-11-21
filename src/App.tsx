import { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Star,
  Camera,
  UtensilsCrossed,
  Coffee,
  Cake,
  MessageCircle,
  ChevronRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface MenuItem {
  id: number;
  category: 'cafe' | 'doces' | 'salgados' | 'especiais';
  title: string;
  description: string;
  price?: string;
  badge?: string;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    category: 'especiais',
    title: 'Café Tropical à Vontade',
    description:
      'Mesa farta com frutas frescas, pães artesanais, frios, bolos caseiros, sucos naturais e bebidas quentes.',
    price: 'R$ 49,90',
    badge: 'Mais Pedido'
  },
  {
    id: 2,
    category: 'cafe',
    title: 'Pão na Chapa com Requeijão',
    description:
      'Pão francês crocante feito na hora com camada generosa de requeijão cremoso dourado na chapa.',
    badge: 'Clássico da Casa'
  },
  {
    id: 3,
    category: 'doces',
    title: 'Tortas & Bolos Artesanais',
    description:
      'Fatias e bolos inteiros sob encomenda com recheios cremosos, frutas frescas e acabamento fino.'
  },
  {
    id: 4,
    category: 'salgados',
    title: 'Salgados Assados & Lanches',
    description:
      'Variedade de salgados assados na hora, lanches naturais e opções perfeitas para o lanche da tarde.'
  },
  {
    id: 5,
    category: 'especiais',
    title: 'Buffet Coffee Break & Almoço',
    description:
      'Soluções completas para eventos corporativos, reuniões e almoço diário com sabor caseiro.'
  },
  {
    id: 6,
    category: 'especiais',
    title: 'Pizzas & Caldos',
    description:
      'Opções especiais para o fim de tarde e noite, servidas quentinhas até as 22h.'
  }
];

const REVIEWS = [
  {
    author: 'Lucas Oliveira',
    text: 'Bom cardápio de café da manhã, o pão na chapa com requeijão valeu a visita.',
    rating: 5
  },
  {
    author: 'Gabriela Taffarello',
    text: 'Deliciosos os lanches, salgados, doces, sucos, tortas, bolos!',
    rating: 5
  },
  {
    author: 'Gustavo Adorno de Moraes',
    text: 'Boa padaria com boas opções de produtos, apesar da variedade reduzida.',
    rating: 4
  }
];

export function App() {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const whatsappNumber = '5519991300573';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Olá! Vim pelo site da Confeitaria Amor aos Pães Empório e gostaria de mais informações.'
  )}`;

  const filteredItems =
    activeCategory === 'todos'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-neutral-100 font-sans selection:bg-[#E5C158] selection:text-black">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#E5C158]/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-black border-2 border-[#E5C158] flex items-center justify-center shadow-[0_0_15px_rgba(229,193,88,0.2)]">
              <span className="font-serif text-[#E5C158] font-bold text-sm tracking-tight">
                AP
              </span>
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-semibold text-[#E5C158] block leading-none">
                Amor aos Pães
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-400">
                Confeitaria & Empório
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a href="#inicio" className="hover:text-[#E5C158] transition-colors">
              Início
            </a>
            <a href="#cardapio" className="hover:text-[#E5C158] transition-colors">
              Destaques
            </a>
            <a href="#avaliacoes" className="hover:text-[#E5C158] transition-colors">
              Avaliações
            </a>
            <a href="#localizacao" className="hover:text-[#E5C158] transition-colors">
              Localização
            </a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E5C158] hover:bg-[#d4b047] text-black font-semibold text-sm px-4 py-2.5 rounded-lg transition-all shadow-lg shadow-[#E5C158]/10"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Fale Conosco</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-14 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,193,88,0.12),transparent_50%)] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center">
          {/* Coluna Esquerda */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#E5C158]/30 text-[#E5C158] text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tradição, Sabor & Confeitaria Artesanal em Campinas</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Confeitaria{' '}
              <span className="text-[#E5C158]">Amor aos Pães</span> Empório
            </h1>

            <div className="p-5 rounded-2xl bg-[#121212] border border-white/10 text-neutral-300 text-base sm:text-lg leading-relaxed">
              Do café da manhã especial com pão na chapa ao nosso famoso{' '}
              <strong className="text-[#E5C158] font-medium">
                Café Tropical à vontade
              </strong>
              , preparamos doces, tortas, salgados e refeições com carinho todos os dias.
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#cardapio"
                className="inline-flex items-center gap-2 bg-white hover:bg-neutral-200 text-black font-semibold px-6 py-3.5 rounded-xl transition-all"
              >
                <span>Ver Destaques</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#E5C158] hover:bg-[#d4b047] text-black font-semibold px-6 py-3.5 rounded-xl transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Fazer Encomenda</span>
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E5C158]" />
                <span>Aberto todos os dias até 22:00</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E5C158]" />
                <span>Jardim do Trevo, Campinas - SP</span>
              </div>
            </div>
          </div>

          {/* Coluna Direita (Card Destaque Café Tropical) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-b from-[#1A1814] to-[#111111] border border-[#E5C158]/30 p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-[#E5C158]/15 text-[#E5C158] text-xs font-semibold uppercase tracking-wider">
                  Destaque da Casa
                </span>
                <span className="text-xs text-neutral-400">@confeitaria.amoraospaes</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                Café Tropical à Vontade
              </h2>
              <p className="text-neutral-400 text-sm mb-6">
                Experiência completa para aproveitar com a família e amigos no nosso empório.
              </p>

              <div className="p-4 rounded-2xl bg-black/60 border border-[#E5C158]/20 mb-6 flex items-baseline justify-between">
                <span className="text-sm text-neutral-300">Por pessoa</span>
                <span className="font-serif text-3xl font-bold text-[#E5C158]">
                  R$ 49,90
                </span>
              </div>

              <ul className="space-y-3 text-sm text-neutral-300 mb-8">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C158] shrink-0" />
                  <span>Buffet variado de pães, bolos, tortas e frios</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C158] shrink-0" />
                  <span>Frutas frescas, sucos naturais e cafés especiais</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C158] shrink-0" />
                  <span>Opções também de Buffet Coffee Break & Almoço</span>
                </li>
              </ul>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#E5C158] hover:bg-[#d4b047] text-black font-semibold py-3.5 rounded-xl transition-all"
              >
                <span>Consultar Horários e Reservas</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cardápio / Especialidades */}
      <section id="cardapio" className="py-20 bg-[#0E0E0E] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#E5C158] text-xs font-semibold uppercase tracking-[0.2em]">
              Nossas Especialidades
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2">
              Feito com amor em cada detalhe
            </h2>
          </div>

          {/* Filtros de Categoria */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {[
              { id: 'todos', label: 'Todos', icon: UtensilsCrossed },
              { id: 'especiais', label: 'Buffet & Especiais', icon: Sparkles },
              { id: 'cafe', label: 'Café da Manhã', icon: Coffee },
              { id: 'doces', label: 'Tortas & Bolos', icon: Cake }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#E5C158] text-black font-semibold'
                      : 'bg-[#161616] text-neutral-300 hover:bg-[#1F1F1F] border border-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Grid de Produtos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-[#141414] border border-white/10 hover:border-[#E5C158]/40 p-6 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    {item.badge ? (
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#E5C158]/15 text-[#E5C158]">
                        {item.badge}
                      </span>
                    ) : (
                      <span />
                    )}
                    {item.price && (
                      <span className="font-serif font-bold text-lg text-[#E5C158]">
                        {item.price}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#E5C158] hover:underline"
                  >
                    <span>Pedir ou consultar no WhatsApp</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avaliações de Clientes */}
      <section id="avaliacoes" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-[#E5C158] text-xs font-semibold uppercase tracking-[0.2em]">
                Prova Social
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2">
                O que dizem nossos clientes
              </h2>
            </div>
            <div className="flex items-center gap-2 bg-[#141414] border border-white/10 px-4 py-2.5 rounded-xl">
              <div className="flex text-[#E5C158]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#E5C158]" />
                ))}
              </div>
              <span className="text-sm text-neutral-300 font-medium">
                4,1 no Facebook
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((review, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-4"
              >
                <div className="flex gap-1 text-[#E5C158]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E5C158]" />
                  ))}
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed italic">
                  "{review.text}"
                </p>
                <p className="text-sm font-semibold text-white pt-2 border-t border-white/5">
                  {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização e Contato */}
      <section id="localizacao" className="py-20 bg-[#0E0E0E] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="text-[#E5C158] text-xs font-semibold uppercase tracking-[0.2em]">
              Venha nos visitar
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Onde Estamos
            </h2>

            <div className="space-y-4 text-neutral-300">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#E5C158] shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Endereço</p>
                  <p className="text-sm text-neutral-400">
                    R. Mns Rafael Roldan, 23 - Jardim do Trevo, Campinas - SP, 13040-033
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#E5C158] shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Horário de Funcionamento</p>
                  <p className="text-sm text-neutral-400">
                    Segunda a Domingo · Aberto até às 22:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#E5C158] shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Telefone / WhatsApp</p>
                  <p className="text-sm text-neutral-400">(19) 99130-0573</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Camera className="w-5 h-5 text-[#E5C158] shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Redes Sociais</p>
                  <a
                    href="https://instagram.com/confeitaria.amoraospaes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#E5C158] hover:underline"
                  >
                    @confeitaria.amoraospaes
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Embed Google Maps */}
          <div className="h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10 bg-[#141414]">
            <iframe
              title="Localização Confeitaria Amor aos Pães Empório"
              src="https://www.google.com/maps?q=R.+Mns+Rafael+Roldan,+23+-+Jardim+do+Trevo,+Campinas+-+SP,+13040-033&output=embed"
              className="w-full h-full border-0 grayscale contrast-125 opacity-90"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 text-center text-xs text-neutral-500">
        <div className="max-w-6xl mx-auto px-4">
          <p>
            © {new Date().getFullYear()} Confeitaria Amor aos Pães Empório · Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-4 py-3.5 rounded-full shadow-2xl transition-transform hover:scale-105"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline text-sm">WhatsApp</span>
      </a>
    </div>
  );
}

export default App;