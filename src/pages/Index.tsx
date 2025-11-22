import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CountdownTimer from "@/components/CountdownTimer";
import SalesNotifications from "@/components/SalesNotifications";
import { CheckCircle, Star, Clock, TrendingUp, DollarSign, Gift, Heart, Users, Zap, Shield } from "lucide-react";

const Index = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer-section');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handlePurchase = () => {
    window.open('https://pay.kirvano.com/0e7d545e-3d22-49d8-ace9-c259884d6271', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-green-50">
      <SalesNotifications />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-green-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <Badge className="mb-6 bg-yellow-500 text-black font-bold px-4 py-2 text-lg animate-pulse">
            🎄 PREÇO BLACK FRIDAY SOMENTE ESTE MÊS 🎄
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ganhe <span className="text-yellow-300">R$ 3.000+</span> Este Mês<br/>
            Vendendo Doces no iFood<br/>
            <span className="text-yellow-300">Direto da Sua Cozinha! PROMOÇÃO BLACK FRIDAY SOMENTE ESTE MÊS</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Aproveite o <strong>BOOM do Natal</strong> e transforme sua casa em uma máquina de fazer dinheiro. 
            Mesmo sendo iniciante, você pode começar <strong>HOJE MESMO</strong> e ter sua primeira venda em 7 dias!
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">Vendas disparando 300% no Natal</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">Comece hoje, lucre em 7 dias</span>
            </div>
          </div>
          
          <Button 
            onClick={scrollToOffer}
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            🚀 QUERO COMEÇAR A LUCRAR AGORA!
          </Button>
        </div>
      </section>

      {/* Isso é para você se... */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Isso é Para Você Se...
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Está cansado(a) de depender só do salário fixo",
              "Precisa de dinheiro extra URGENTE para o Natal", 
              "Quer uma renda antes das festas de fim de ano",
              "Já tentou outros meios e não conseguiu resultados",
              "Sonha em trabalhar de casa e ter mais liberdade",
              "Tem vontade de empreender mas não sabe por onde começar",
              "Quer aproveitar a época mais lucrativa do ano",
              "Busca uma oportunidade REAL e comprovada",
              "Deseja ter controle total sobre sua renda"
            ].map((item, index) => (
              <Card key={index} className="border-l-4 border-red-500 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Emocional */}
      <section className="py-16 bg-gradient-to-r from-red-100 to-green-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            O Natal É a Melhor Época do Ano Para Ganhar Dinheiro<br/>
            <span className="text-red-600">E Talvez Seja Sua Chance de Virar o Jogo</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl mb-6 text-gray-700 leading-relaxed">
              Você sabe como é... O fim de ano chega e as contas não param: presentes para a família, 
              ceia de Natal, roupas novas, e aquela vontade de proporcionar momentos especiais para quem você ama.
            </p>
            
            <p className="text-lg md:text-xl mb-6 text-gray-700 leading-relaxed">
              Mas e se eu te dissesse que <strong>ESTE NATAL</strong> pode ser diferente? 
              Que você pode ser a pessoa que <strong>TEM DINHEIRO</strong> para realizar todos os sonhos da família?
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-red-600">A Verdade Que Ninguém Te Conta:</h3>
              <p className="text-lg text-gray-700 mb-4">
                Enquanto todo mundo reclama que "Natal é caro", os espertos estão <strong>LUCRANDO</strong> 
                com a fome de doces que todo brasileiro tem nesta época.
              </p>
              <p className="text-lg text-gray-700">
                O iFood vira uma <strong>MÁQUINA DE VENDAS</strong> no Natal. As pessoas pedem sobremesas 
                para as ceias, doces para presentear, e querem praticidade acima de tudo.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-600 text-white p-6 rounded-lg text-center">
                <DollarSign className="w-12 h-12 mx-auto mb-4" />
                <h4 className="font-bold text-xl mb-2">Vendas Dispararam</h4>
                <p>300% mais pedidos de doces no Natal</p>
              </div>
              <div className="bg-green-600 text-white p-6 rounded-lg text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                <h4 className="font-bold text-xl mb-2">Ticket Médio Alto</h4>
                <p>R$ 45-80 por pedido em sobremesas</p>
              </div>
              <div className="bg-yellow-600 text-white p-6 rounded-lg text-center">
                <Gift className="w-12 h-12 mx-auto mb-4" />
                <h4 className="font-bold text-xl mb-2">Compra por Impulso</h4>
                <p>Doces são irresistíveis no Natal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apresentação do Produto */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Apresento o <span className="text-red-600">Guia Completo</span><br/>
              "Doces de Natal no iFood: Do Zero ao Lucro em 7 Dias"
            </h2>
            
            <p className="text-xl text-gray-700 mb-8">
              Um <strong>material digital completo</strong> que vai te ensinar TUDO o que você precisa 
              para começar a vender doces no iFood ainda esta semana e ter sua primeira venda em até 7 dias.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/images/doces_natal_1.jpeg" 
                alt="Doces de Natal irresistíveis" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Este Treinamento Completo Inclui:</h3>
              
              <div className="space-y-4">
                {[
                  "✅ 15+ Receitas de Natal TESTADAS e APROVADAS que vendem como água",
                  "✅ Cardápio pronto para copiar e colar no seu iFood", 
                  "✅ Fórmula de precificação que garante 200-300% de lucro",
                  "✅ Segredos de fotos que fazem o cliente babar e comprar na hora",
                  "✅ Estratégia para conseguir suas primeiras 50 avaliações 5 estrelas",
                  "✅ Passo a passo para abrir sua loja no iFood em 24h",
                  "✅ Técnicas de vendas que fazem o cliente pedir mais e mais",
                  "✅ Cronograma de 7 dias para sua primeira venda",
                  "✅ Lista de fornecedores baratos para maximizar o lucro",
                  "✅ Suporte completo para iniciantes (ZERO experiência necessária)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai receber */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-red-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Veja TUDO o Que Você Vai Receber:
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "📚",
                title: "Manual Completo (120+ páginas)",
                description: "Tudo explicado passo a passo, do básico ao avançado"
              },
              {
                icon: "🍰", 
                title: "15 Receitas Campeãs de Venda",
                description: "Brigadeiros gourmet, brownies, tortas e muito mais"
              },
              {
                icon: "📱",
                title: "Guia do iFood Completo", 
                description: "Como abrir, configurar e otimizar sua loja"
              },
              {
                icon: "📸",
                title: "Segredos da Fotografia",
                description: "Como fazer fotos que vendem usando só o celular"
              },
              {
                icon: "💰",
                title: "Calculadora de Preços",
                description: "Nunca mais venda barato ou perca dinheiro"
              },
              {
                icon: "⭐",
                title: "Estratégia das 50 Avaliações",
                description: "Como conseguir avaliações 5 estrelas rapidamente"
              },
              {
                icon: "📋",
                title: "Checklist de 7 Dias",
                description: "Cronograma dia a dia até sua primeira venda"
              },
              {
                icon: "🛒",
                title: "Lista de Fornecedores",
                description: "Onde comprar ingredientes com os melhores preços"
              },
              {
                icon: "💬",
                title: "Scripts de Atendimento",
                description: "O que falar para converter mais e fidelizar clientes"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-green-200">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Por que vender doces no iFood no Natal */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Por Que Vender Doces no iFood no Natal?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Demanda Explode</h3>
              <p className="text-gray-600">No Natal, as vendas de doces aumentam 300%. Todo mundo quer sobremesas especiais.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Compra por Impulso</h3>
              <p className="text-gray-600">Doces são irresistíveis. As pessoas compram por emoção, especialmente no Natal.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Ticket Médio Alto</h3>
              <p className="text-gray-600">Sobremesas têm margem alta. Um pedido médio fica entre R$ 45-80.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Pouca Concorrência</h3>
              <p className="text-gray-600">Poucos sabem vender doces profissionalmente. Você sai na frente!</p>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-green-600 to-red-600 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">🚀 Comece com Pouco Investimento</h3>
            <p className="text-lg mb-4">
              Diferente de outros negócios, você pode começar com menos de R$ 200 em ingredientes 
              e ter retorno na primeira semana!
            </p>
            <p className="text-xl font-bold">
              Investimento inicial: R$ 150-200 | Retorno esperado: R$ 1.500-3.000/mês
            </p>
          </div>
        </div>
      </section>

      {/* Seção Social */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            Mesmo Quem Nunca Vendeu Nada Pode Começar
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed">
              Não importa se você nunca empreendeu antes, se não sabe cozinhar profissionalmente 
              ou se acha que "não leva jeito para vendas". 
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-6 text-red-600">Este Material Foi Criado Para:</h3>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-gray-800">✅ Mães e Pais de Família</h4>
                  <p className="text-gray-600 mb-4">Que querem renda extra sem sair de casa</p>
                  
                  <h4 className="font-bold text-lg mb-3 text-gray-800">✅ Pessoas 30+</h4>
                  <p className="text-gray-600 mb-4">Que buscam uma oportunidade real e madura</p>
                  
                  <h4 className="font-bold text-lg mb-3 text-gray-800">✅ Iniciantes Completos</h4>
                  <p className="text-gray-600">Que nunca venderam nada online</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3 text-gray-800">✅ Donas de Casa</h4>
                  <p className="text-gray-600 mb-4">Que querem monetizar suas habilidades</p>
                  
                  <h4 className="font-bold text-lg mb-3 text-gray-800">✅ Desempregados</h4>
                  <p className="text-gray-600 mb-4">Que precisam de renda urgente</p>
                  
                  <h4 className="font-bold text-lg mb-3 text-gray-800">✅ Quem Tem Renda Apertada</h4>
                  <p className="text-gray-600">E quer complementar o orçamento</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-600 to-red-600 text-white p-6 rounded-lg">
              <p className="text-xl font-bold">
                💪 Se você tem força de vontade e quer mudar de vida, 
                este guia vai te mostrar EXATAMENTE como fazer!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section id="offer-section" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
              Quanto Vale Este Conhecimento?
            </h2>
            
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 mb-4">
                Se você fosse contratar um consultor especialista em vendas no iFood, 
                pagaria pelo menos <strong>R$ 2.000</strong> por uma consultoria.
              </p>
              
              <p className="text-lg text-gray-700 mb-4">
                Se fosse fazer um curso presencial de confeitaria profissional, 
                gastaria entre <strong>R$ 800 a R$ 1.500</strong>.
              </p>
              
              <p className="text-lg text-gray-700 mb-8">
                Sem contar o tempo perdido tentando descobrir tudo sozinho(a) 
                e os erros que custam caro...
              </p>
            </div>
            
            <Card className="border-4 border-red-500 shadow-2xl max-w-md mx-auto">
              <CardHeader className="bg-gradient-to-r from-red-600 to-green-600 text-white text-center">
                <CardTitle className="text-2xl font-bold">🎄 OFERTA ESPECIAL DE BLACK FRIDAY PARA VOCÊ LUCRAR DE CASA NO NATAL 🎄</CardTitle>
                <CardDescription className="text-white/90 text-lg">
                  Por tempo limitado
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="text-gray-500 line-through text-xl mb-2">De R$ 197,00</div>
                  <div className="text-4xl font-bold text-red-600 mb-2">R$ 67,90</div>
                  <div className="text-green-600 font-bold text-lg">Economia de R$ 129,10!</div>
                </div>
                
                <div className="mb-6">
                  <CountdownTimer initialMinutes={25} />
                </div>
                
                <div className="space-y-3 mb-6 text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Acesso imediato após o pagamento</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Material 100% digital</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Garantia de 7 dias</span>
                  </div>
                </div>
                
                <Button 
                  onClick={handlePurchase}
                  size="lg" 
                  className="w-full bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white font-bold text-lg py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  🚀 QUERO COMEÇAR A LUCRAR NO NATAL!
                </Button>
                
                <p className="text-xs text-gray-500 mt-4">
                  Pagamento 100% seguro • Acesso instantâneo
                </p>
              </CardContent>
            </Card>
            
            <div className="text-center mt-8">
              <p className="text-lg text-gray-700 mb-4">
                <strong>Pense assim:</strong> Com apenas 3 vendas de R$ 25 cada, 
                você já recupera o investimento!
              </p>
              
              <p className="text-xl font-bold text-red-600">
                E o potencial de lucro? R$ 1.500 a R$ 3.000 por mês! 💰
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-red-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white p-8 rounded-lg shadow-xl border-4 border-green-500">
              <Shield className="w-16 h-16 text-green-600 mx-auto mb-6" />
              
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                🛡️ Garantia Blindada de 7 Dias
              </h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Eu tenho tanta certeza de que este material vai transformar sua vida financeira 
                que ofereço uma <strong>garantia incondicional de 7 dias</strong>.
              </p>
              
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-xl mb-4 text-green-800">Se por qualquer motivo você:</h3>
                
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Não ficar 100% satisfeito com o conteúdo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Achar que o material não é prático</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Sentir que não vale o investimento</span>
                  </div>
                </div>
              </div>
              
              <p className="text-xl font-bold text-green-600 mb-4">
                Eu devolvo 100% do seu dinheiro, sem perguntas, sem burocracia!
              </p>
              
              <p className="text-gray-600">
                Você não tem nada a perder e uma nova vida financeira para ganhar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Veja o Que Quem Já Começou Está Falando:
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Maria Santos, 42 anos",
                location: "São Paulo - SP",
                text: "Estava desempregada há 6 meses. Com o guia, abri minha loja no iFood em 2 dias e já faturei R$ 1.200 na primeira semana! Meus brigadeiros gourmet são os mais pedidos da região.",
                rating: 5
              },
              {
                name: "João Carlos, 38 anos", 
                location: "Rio de Janeiro - RJ",
                text: "Sou motorista de Uber e queria uma renda extra. Seguindo o passo a passo, consegui R$ 800 na primeira quinzena vendendo brownies. Agora é minha principal fonte de renda!",
                rating: 5
              },
              {
                name: "Ana Paula, 45 anos",
                location: "Belo Horizonte - MG", 
                text: "Nunca tinha vendido nada online. O material é tão detalhado que até eu consegui! Em 10 dias já tinha 15 avaliações 5 estrelas. Dezembro foi meu melhor mês: R$ 2.400!",
                rating: 5
              },
              {
                name: "Carlos Roberto, 35 anos",
                location: "Porto Alegre - RS",
                text: "Trabalho de carteira assinada, mas queria algo a mais. Nos fins de semana faço os doces e já complemento com R$ 600-800 por mês. Valeu cada centavo!",
                rating: 5
              },
              {
                name: "Fernanda Lima, 41 anos",
                location: "Salvador - BA",
                text: "Sou mãe solteira e precisava urgente de renda extra. O guia me salvou! Já estou tirando R$ 1.000 por mês e posso ficar em casa com minha filha.",
                rating: 5
              },
              {
                name: "Roberto Silva, 39 anos",
                location: "Curitiba - PR",
                text: "Estava cético, mas resolvi tentar. Que surpresa! As receitas são realmente campeãs de venda. Minha torta de brigadeiro sai 20 unidades por dia!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  
                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Perguntas Frequentes
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Preciso ter experiência em confeitaria?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Não! O material foi criado especialmente para iniciantes. Todas as receitas são simples, 
                  com ingredientes fáceis de encontrar e passo a passo detalhado com fotos.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Preciso de equipamentos caros?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Não! Você pode começar com o que já tem em casa: fogão, forno comum, batedeira simples 
                  e formas básicas. O investimento inicial é de apenas R$ 150-200 em ingredientes.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Dá para vender antes do Natal?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Sim! O cronograma de 7 dias foi testado e aprovado. Você pode abrir sua loja no iFood 
                  em 24-48h e ter sua primeira venda na primeira semana.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Quanto posso faturar por mês?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Depende da sua dedicação. Trabalhando 3-4 horas por dia, é possível faturar entre 
                  R$ 1.500 a R$ 3.000 por mês. No Natal, esse valor pode dobrar!
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  É difícil abrir loja no iFood?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Não! O material inclui um guia completo com prints de tela mostrando cada passo. 
                  Em 24h você já pode estar vendendo.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  E se eu não conseguir vender?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Impossível! As receitas e estratégias já foram testadas por centenas de pessoas. 
                  Além disso, você tem 7 dias de garantia total. Se não funcionar, devolvemos seu dinheiro.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Último CTA */}
      <section className="py-16 bg-gradient-to-br from-red-600 via-red-700 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            ⏰ Esta É Sua Última Chance de Lucrar no Natal!
          </h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-xl md:text-2xl mb-6 leading-relaxed">
              O Natal está chegando e <strong>CADA DIA QUE PASSA</strong> é uma oportunidade perdida.
            </p>
            
            <p className="text-xl md:text-2xl mb-6 leading-relaxed">
              Enquanto você está pensando, outras pessoas já estão <strong>LUCRANDO</strong> 
              com a fome de doces que todo brasileiro tem nesta época.
            </p>
            
            <div className="bg-white/20 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">🚨 ATENÇÃO: Tempo Está Se Esgotando!</h3>
              
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-300">25</div>
                  <div className="text-sm">Dias até o Natal</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-300">7</div>
                  <div className="text-sm">Dias para primeira venda</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-300">300%</div>
                  <div className="text-sm">Aumento nas vendas</div>
                </div>
              </div>
            </div>
            
            <p className="text-2xl font-bold mb-8 text-yellow-300">
              Não deixe 2025 terminar do mesmo jeito que começou!
            </p>
          </div>
          
          <div className="mb-8">
            <Button 
              onClick={scrollToOffer}
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-2xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse"
            >
              🎄 SIM! QUERO MUDAR MINHA VIDA AGORA!
            </Button>
          </div>
          
          <div className="text-center">
            <p className="text-lg mb-2">💳 Pagamento 100% Seguro</p>
            <p className="text-lg mb-2">⚡ Acesso Imediato</p>
            <p className="text-lg">🛡️ Garantia de 7 Dias</p>
          </div>
          
          <Separator className="my-8 bg-white/30" />
          
          <div className="text-center">
            <p className="text-xl font-bold mb-4">
              Lembre-se: O sucesso não espera. 
            </p>
            <p className="text-lg">
              Comece hoje e tenha um Natal próspero e cheio de realizações! 🎄✨
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            © 2024 - Doces de Natal no iFood. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho 
            de uma estratégia não deve ser interpretada como uma garantia de resultados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
