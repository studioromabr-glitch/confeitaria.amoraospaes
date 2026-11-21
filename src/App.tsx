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
  Croissant,
  MessageCircle,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Heart
} from 'lucide-react';
import CountUp from './CountUp';

interface MenuItem {
  id: number;
  category: 'cafe' | 'doces' | 'salgados' | 'especiais';
  title: string;
  description: string;
  price?: string;
  badge?: string;
  image: string;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    category: 'especiais',
    title: 'Café Tropical à Vontade',
    description:
      'Mesa farta com pães de queijo quentinhos, bolos caseiros, frutas frescas, frios, tortas, sucos naturais e cafés especiais.',
    price: 'R$ 49,90',
    badge: 'Mais Pedido',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    category: 'doces',
    title: 'Rocamboles Artesanais',
    description:
      'Massa fofinha enrolada à mão nos sabores tradicionais: goiabada cremosa com coco ralado, chocolate com amendoim e doce de leite.',
    badge: 'Especialidade',
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 3,
    category: 'doces',
    title: 'Bolos Piscina & Tortas',
    description:
      'Bolos caseiros com cobertura generosa de doce de leite, chocolate belga, cenoura, milho cremoso e frutas vermelhas.',
    badge: 'Feito Hoje',
    image:
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 4,
    category: 'cafe',
    title: 'Pão na Chapa & Pão de Queijo',
    description:
      'Pão francês crocante na chapa com requeijão cremoso dourado e cestas de pão de queijo assados a cada fornada.',
    badge: 'Clássico da Casa',
    image:
      'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 5,
    category: 'salgados',
    title: 'Salgados Assados & Lanches',
    description:
      'Enroladinhos, esfihas, folhados dourados e lanches naturais preparados diariamente para qualquer hora do dia.',
    image:
      'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 6,
    category: 'especiais',
    title: 'Buffet Coffee Break, Almoço & Pizzas',
    description:
      'Opções completas para eventos corporativos, almoço caseiro e pizzas e caldos servidos quentinhos até às 22h.',
    image:
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80'
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

const serifStyle = { fontFamily: 'var(--font-serif)' };
const sansStyle = { fontFamily: 'var(--font-sans)' };

export function App() {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const whatsappNumber = '5519991300573';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Olá! Vim pelo site da Confeitaria Amor aos Pães Empório e gostaria de fazer um pedido ou saber mais informações.'
  )}`;

  const filteredItems =
    activeCategory === 'todos'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div
      style={sansStyle}
      className="min-h-screen bg-[#FDF8F2] text-[#2C1A12] selection:bg-[#C87D32] selection:text-white"
    >
      {/* Faixa superior acolhedora */}
      <div className="bg-[#2C1A12] text-[#F7E7CE] text-xs py-2 px-4 text-center">
        <p className="flex items-center justify-center gap-2 font-medium">
          <Croissant className="w-3.5 h-3.5 text-[#E5B869]" />
          <span>
            Fornadas fresquinhas todos os dias · Aberto de Segunda a Domingo até às 22:00
          </span>
        </p>
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 bg-[#FDF8F2]/95 backdrop-blur-md border-b border-[#E8D8C4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-[#141414] border-2 border-[#D4AF37] flex flex-col items-center justify-center shadow-md">
              <span
                style={serifStyle}
                className="text-[#F3D98B] font-bold text-sm leading-none"
              >
                AP
              </span>
              <span className="text-[7px] uppercase tracking-widest text-[#D4AF37] mt-0.5">
                Empório
              </span>
            </div>
            <div>
              <span
                style={serifStyle}
                className="text-xl sm:text-2xl font-bold text-[#2C1A12] block leading-none"
              >
                Amor aos Pães
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#9C622B] font-semibold">
                Confeitaria & Padaria
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#5C3D2E]">
            <a href="#inicio" className="hover:text-[#C87D32] transition-colors">
              Início
            </a>
            <a href="#cardapio" className="hover:text-[#C87D32] transition-colors">
              Vitrine & Sabores
            </a>
            <a href="#avaliacoes" className="hover:text-[#C87D32] transition-colors">
              Avaliações
            </a>
            <a href="#localizacao" className="hover:text-[#C87D32] transition-colors">
              Onde Estamos
            </a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C87D32] hover:bg-[#b06a24] text-white font-semibold text-sm px-4 py-2.5 rounded-full transition-all shadow-md shadow-[#C87D32]/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Pedir no WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero Section Clara & Acolhedora */}
      <section id="inicio" className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#F3DFC1]/70 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#F8E6E0]/60 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center relative">
          {/* Coluna Esquerda */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6E8D5] border border-[#E2C6A0] text-[#8C521E] text-xs font-semibold">
              <Heart className="w-3.5 h-3.5 fill-[#B83A3A] text-[#B83A3A]" />
              <span>Padaria, Confeitaria Artesanal & Empório em Campinas</span>
            </div>

            <h1
              style={serifStyle}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[#2C1A12] leading-[1.12]"
            >
              O aroma de{' '}
              <span className="text-[#C87D32] italic">pão quentinho</span> e doces
              feitos com carinho
            </h1>

            <p className="text-[#5C3D2E] text-base sm:text-lg leading-relaxed max-w-2xl">
              Comece o dia com nosso pão na chapa crocante, aproveite o{' '}
              <strong className="text-[#2C1A12] font-semibold">
                Café Tropical à vontade
              </strong>{' '}
              ou escolha entre rocamboles recheados, bolos piscina, tortas finas e
              salgados assados na hora.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#cardapio"
                className="inline-flex items-center gap-2 bg-[#2C1A12] hover:bg-[#3f271c] text-[#FDF8F2] font-semibold px-7 py-3.5 rounded-full transition-all shadow-lg shadow-[#2C1A12]/15"
              >
                <span>Conhecer a Vitrine</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#F7EFE4] text-[#2C1A12] border border-[#DFCBB2] font-semibold px-7 py-3.5 rounded-full transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#C87D32]" />
                <span>Encomendar Bolos & Tortas</span>
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-sm text-[#6E4D3B]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C87D32]" />
                <span>Aberto todos os dias até 22:00</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C87D32]" />
                <span>Jardim do Trevo, Campinas - SP</span>
              </div>
            </div>
          </div>

          {/* Coluna Direita (Card Vitrine Café Tropical) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white border border-[#E8D8C4] overflow-hidden shadow-xl shadow-[#2C1A12]/8">
              <div className="relative h-52 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80"
                  alt="Mesa farta de café da manhã e confeitaria"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full bg-[#B83A3A] text-white text-xs font-semibold shadow">
                    Destaque da Casa
                  </span>
                </div>
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-white">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#F7E7CE]">
                      Buffet Especial
                    </p>
                    <h2 style={serifStyle} className="text-2xl font-bold leading-tight">
                      Café Tropical à Vontade
                    </h2>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="p-4 rounded-2xl bg-[#FDF8F2] border border-[#E8D8C4] mb-5 flex items-center justify-between gap-3">
                  <span
                    style={serifStyle}
                    className="text-3xl font-bold text-[#C87D32] shrink-0"
                  >
                    <CountUp
                      from={49.9}
                      to={99.9}
                      decimals={2}
                      direction="down"
                      mode="roll"
                      duration={1.6}
                      trigger="load"
                      replayOnHover
                      prefix="R$ "
                    />
                  </span>
                  <span className="text-xs text-[#6E4D3B] text-right">
                    Servido no nosso empório
                  </span>
                </div>

                <ul className="space-y-2.5 text-sm text-[#4A3226] mb-6">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C87D32] shrink-0" />
                    <span>Pães artesanais, pão de queijo, bolos e tortas</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C87D32] shrink-0" />
                    <span>Frutas frescas da estação, frios e sucos naturais</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C87D32] shrink-0" />
                    <span>Também temos Coffee Break & Almoço</span>
                  </li>
                </ul>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#C87D32] hover:bg-[#b06a24] text-white font-semibold py-3.5 rounded-full transition-all shadow-md shadow-[#C87D32]/20"
                >
                  <span>Consultar Horários no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vitrine de Produtos / Especialidades */}
      <section id="cardapio" className="py-20 bg-white border-y border-[#E8D8C4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#C87D32] text-xs font-bold uppercase tracking-[0.2em]">
              Nossa Vitrine
            </span>
            <h2 style={serifStyle} className="text-3xl sm:text-4xl font-bold text-[#2C1A12] mt-2">
              Sabores que adoçam o seu dia
            </h2>
            <p className="text-[#6E4D3B] text-sm sm:text-base mt-3">
              Do café da manhã tradicional às encomendas de bolos, rocamboles e
              buffets completos.
            </p>
          </div>

          {/* Filtros de Categoria */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-12">
            {[
              { id: 'todos', label: 'Toda a Vitrine', icon: UtensilsCrossed },
              { id: 'doces', label: 'Bolos & Rocamboles', icon: Cake },
              { id: 'cafe', label: 'Café & Pães', icon: Coffee },
              { id: 'salgados', label: 'Salgados & Lanches', icon: Croissant },
              { id: 'especiais', label: 'Buffet & Especiais', icon: Sparkles }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#2C1A12] text-[#FDF8F2] shadow-md'
                      : 'bg-[#FDF8F2] text-[#5C3D2E] hover:bg-[#F3E7D7] border border-[#E8D8C4]'
                  }`}
                >
                  <Icon className="w-4 h-4 text-[#C87D32]" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Grid de Produtos com Fotos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group rounded-3xl bg-[#FDF8F2] border border-[#E8D8C4] hover:border-[#C87D32] overflow-hidden flex flex-col justify-between transition-all hover:shadow-xl hover:shadow-[#2C1A12]/8"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-[#EFE3D3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {item.badge && (
                      <span className="absolute top-3.5 left-3.5 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 text-[#8C521E] shadow-sm">
                        {item.badge}
                      </span>
                    )}
                    {item.price && (
                      <span
                        style={serifStyle}
                        className="absolute bottom-3.5 right-3.5 font-bold text-base px-3.5 py-1 rounded-full bg-[#2C1A12] text-[#F7E7CE] shadow"
                      >
                        {item.price}
                      </span>
                    )}
                  </div>

                  <div className="p-6 pb-4">
                    <h3 style={serifStyle} className="text-xl font-bold text-[#2C1A12] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#5C3D2E] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#C87D32] hover:text-[#9C5C1D] transition-colors"
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
      <section id="avaliacoes" className="py-20 bg-[#FDF8F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-[#C87D32] text-xs font-bold uppercase tracking-[0.2em]">
                Quem prova, recomenda
              </span>
              <h2 style={serifStyle} className="text-3xl sm:text-4xl font-bold text-[#2C1A12] mt-2">
                O que dizem nossos clientes
              </h2>
            </div>
            <div className="flex items-center gap-2 bg-white border border-[#E8D8C4] px-4 py-2.5 rounded-full shadow-sm">
              <div className="flex text-[#D98A2B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D98A2B]" />
                ))}
              </div>
              <span className="text-sm text-[#4A3226] font-semibold">
                4,1/5 · Avaliações reais
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((review, index) => (
              <div
                key={index}
                className="p-7 rounded-3xl bg-white border border-[#E8D8C4] shadow-sm space-y-4"
              >
                <div className="flex gap-1 text-[#D98A2B]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D98A2B]" />
                  ))}
                </div>
                <p className="text-[#4A3226] text-sm leading-relaxed italic">
                  "{review.text}"
                </p>
                <p className="text-sm font-bold text-[#2C1A12] pt-3 border-t border-[#F0E4D4]">
                  {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização e Contato */}
      <section id="localizacao" className="py-20 bg-white border-t border-[#E8D8C4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="text-[#C87D32] text-xs font-bold uppercase tracking-[0.2em]">
              Venha tomar um café conosco
            </span>
            <h2 style={serifStyle} className="text-3xl sm:text-4xl font-bold text-[#2C1A12]">
              Onde Estamos
            </h2>

            <div className="space-y-5 text-[#4A3226]">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#FDF8F2] border border-[#E8D8C4] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#C87D32]" />
                </div>
                <div>
                  <p className="font-bold text-[#2C1A12]">Endereço</p>
                  <p className="text-sm text-[#5C3D2E]">
                    R. Mns Rafael Roldan, 23 - Jardim do Trevo, Campinas - SP, 13040-033
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#FDF8F2] border border-[#E8D8C4] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#C87D32]" />
                </div>
                <div>
                  <p className="font-bold text-[#2C1A12]">Horário de Funcionamento</p>
                  <p className="text-sm text-[#5C3D2E]">
                    Segunda a Domingo · Aberto até às 22:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#FDF8F2] border border-[#E8D8C4] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#C87D32]" />
                </div>
                <div>
                  <p className="font-bold text-[#2C1A12]">Telefone / WhatsApp</p>
                  <p className="text-sm text-[#5C3D2E]">(19) 99130-0573</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#FDF8F2] border border-[#E8D8C4] flex items-center justify-center shrink-0">
                  <Camera className="w-5 h-5 text-[#C87D32]" />
                </div>
                <div>
                  <p className="font-bold text-[#2C1A12]">Instagram</p>
                  <a
                    href="https://instagram.com/confeitaria.amoraospaes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#C87D32] hover:underline"
                  >
                    @confeitaria.amoraospaes
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Embed Google Maps */}
          <div className="h-80 sm:h-96 rounded-3xl overflow-hidden border border-[#E8D8C4] shadow-md bg-[#FDF8F2]">
            <iframe
              title="Localização Confeitaria Amor aos Pães Empório"
              src="https://www.google.com/maps?q=R.+Mns+Rafael+Roldan,+23+-+Jardim+do+Trevo,+Campinas+-+SP,+13040-033&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#2C1A12] text-[#E6D3BC] text-center text-xs">
        <div className="max-w-6xl mx-auto px-4 space-y-1">
          <p style={serifStyle} className="text-sm text-[#F7E7CE]">
            Confeitaria Amor aos Pães Empório
          </p>
          <p className="text-[#C4AE94]">
            © {new Date().getFullYear()} · Jardim do Trevo, Campinas - SP · Todos os
            direitos reservados.
          </p>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-5 py-3.5 rounded-full shadow-xl transition-transform hover:scale-105"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline text-sm">WhatsApp</span>
      </a>
    </div>
  );
}

export default App;