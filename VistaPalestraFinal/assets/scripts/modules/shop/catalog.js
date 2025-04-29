const catalog = [
  {
    id: 1,
    name: "Camisa Oficial 1 Palmeiras 2024",
    desc: "Camisa titular oficial da temporada 2024. Modelo clássico com detalhes em dourado.",
    img: "https://imgcentauro-a.akamaihd.net/1300x1300/M136WQ07.jpg",
    price: "R$ 299,90"
  },
  {
    id: 2,
    name: "Camisa Oficial 2 Palmeiras 2024",
    desc: "Camisa reserva oficial da temporada 2024. Branco com detalhes em verde esmeralda.",
    img: "https://verdebrancomania.com.br/wp-content/uploads/2024/01/086020600-1-e1706448971974.jpg",
    price: "R$ 279,90"
  },
  {
    id: 3,
    name: "Camisa Retrô 1999 Libertadores",
    desc: "Camisa retrô comemorativa do título da Libertadores de 1999.",
    img: "https://images.tcdn.com.br/img/img_prod/657285/camisa_palmeiras_retro_1999_branco_masculina_3194_1_105c3396550786c2c20998dd1b9650b2.jpg",
    price: "R$ 349,90"
  },
  {
    id: 4,
    name: "Camisa Oficial 3 Palmeiras 2023",
    desc: "Terceiro uniforme da temporada 2023, com design inspirado na história do clube.",
    img: "https://images.mantosdofutebol.com.br/wp-content/uploads/2023/08/Terceira-camisa-do-Palmeiras-2023-2024-PUMA-2.jpg",
    price: "R$ 289,90"
  },
  {
    id: 5,
    name: "Camisa de Treino Palmeiras 2024",
    desc: "Camisa usada nos treinos da temporada 2024. Conforto e estilo.",
    img: "https://verdebrancomania.com.br/wp-content/uploads/2024/03/086020640.png",
    price: "R$ 229,90"
  },
  {
    id: 6,
    name: "Camisa Polo Palmeiras Verde",
    desc: "Camisa polo casual para o torcedor alviverde.",
    img: "https://lojapalmeiras.vtexassets.com/arquivos/ids/179335-500-auto?v=638273574445800000&width=500&height=auto&aspect=true",
    price: "R$ 199,90"
  },
  {
    id: 7,
    name: "Camisa Feminina Palmeiras 2024",
    desc: "Modelo feminino oficial da temporada 2024.",
    img: "https://images.tcdn.com.br/img/img_prod/311840/camisa_puma_palmeiras_i_2024_feminina_124783_1_3e9d68ac185552346cbe66998a5856a9.jpg",
    price: "R$ 259,90"
  },
  {
    id: 8,
    name: "Camisa Infantil Palmeiras 2024",
    desc: "Camisa oficial para os pequenos torcedores do Verdão.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU59bum_B2IlGrkQM1pOFaxYN9Gqj3-BGlag&sg",
    price: "R$ 179,90"
  },
  {
    id: 9,
    name: "Camisa de Goleiro Palmeiras 2024",
    desc: "Uniforme oficial de goleiro, usado na temporada 2024.",
    img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/777235/01/fnd/BRA/w/1000/h/1000/fmt/png",
    price: "R$ 359,90"
  },
  {
    id: 10,
    name: "Camisa Especial Outubro Rosa 2024",
    desc: "Edição especial em apoio à campanha do Outubro Rosa.",
    img: "https://cdn.awsli.com.br/600x1000/1890/1890260/produto/240499246/1--3--0a958qlnkl.jpg",
    price: "R$ 299,90"
  },
  {
    id: 11,
    name: "Camisa Palmeiras Edição Limitada Ouro",
    desc: "Camisa exclusiva com detalhes dourados, edição limitada.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDHGU26Ame4kvXJIqd5i6gwEKQ2O_6xqr4oQ&s",
    price: "R$ 499,90"
  },
  {
    id: 12,
    name: "Camisa Palmeiras Treino Pré-jogo 2024",
    desc: "Camisa usada pelos jogadores antes das partidas da temporada 2024.",
    img: "https://images.tcdn.com.br/img/img_prod/311840/camisa_puma_palmeiras_pre_jogo_2024_verde_124800_1_eeafe576cdeb0d11da768e68688ec2c8.jpg",
    price: "R$ 249,90"
  },
  {
    id: 13,
    name: "Camisa Palmeiras Libertadores 2024",
    desc: "Modelo especial para a Libertadores 2024, com patch exclusivo.",
    img: "https://imgcentauro-a.akamaihd.net/1366x1366/M144V607.jpg",
    price: "R$ 329,90"
  },
  {
    id: 14,
    name: "Camisa Palmeiras Verde Neon",
    desc: "Camisa moderna com tons de verde neon para o torcedor ousado.",
    img: "https://acdn.mitiendanube.com/stores/003/147/909/products/big11-2f6067f8ba314642a516954322137951-1024-1024.jpg",
    price: "R$ 279,90"
  },
  {
    id: 15,
    name: "Camisa Palmeiras Manga Longa 2024",
    desc: "Camisa oficial de manga longa para os dias mais frios.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxeQ11v23Ow0qah3n0hYTZDIh8Dlo6SxFUQ&s",
    price: "R$ 319,90"
  }
];
window.catalog = catalog;
window.localStorage.setItem('catalog',JSON.stringify(catalog));


export {
  catalog
}