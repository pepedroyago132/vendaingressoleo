// Importações necessárias
import React from 'react';
import styled from 'styled-components';
import RecipeReviewCard from './components/RecipeFeed';
import Typography from '@mui/material/Typography';
import Header from './components/Header';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

// Estilos principais da página
const Container = styled.div`
  display: flex;
  width:100%;
  padding:15px;
  flex-direction: column;
  background-color: grey;
`;

const ContainerCardapio = styled.div`
  display: flex;
  width:100%;
  min-height:400px;
  padding:15px;
  flex-direction: column;
  align-items:center;
  justify-column:flex-start;
`;

const ContainerImagem = styled.div`
  width:30%;
  height:80%;
  padding:15px;
   @media (max-width: 768px) {
    width: 100%;
    height:48%;
     
  }
`;

const ContainerCardapioProdutos = styled.div`
  display: flex;
  width:90%;
  min-height:350px;
  padding:15px;
  flex-direction: row;
  flex-wrap:wrap;
`;

const ContainerProduto = styled.div`
  display: flex;
  cursor:pointer;
  width:45%;
  min-height:235px;
  flex-direction: row;
  background-color:white;
  margin:10px;
  padding:7px;
  border: 1px dotted grey;
  border-radius:8px;

    transition: box-shadow 0.3s ease-in-out;

      @media (max-width: 768px) {
     width:90%;
     
  }

  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.6);
    border: 2px solid grey;
 
  }
`;

const ContainerProdutoDescição = styled.div`
  display: flex;
  width:70%;
  min-height:235px;
  flex-direction: column;
  gap:2px;
`;

const MainContent = styled.div`
  display: flex;
  width:100%;
  padding: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    width:100%;
  }
`;

const Text = styled.p`
  font-size:24px;
  font-weight:bold;
`;

const TextTitle = styled.p`
  font-size:22px;
  font-weight:bold;
  color:black;
`;

const Textdescription = styled.p`
  font-size:16px;
  font-weight:300;
  color:grey;
`;

const TextPriceGreen = styled.p`
  font-size:19px;
  font-weight:bold;
  color:green;
`;

const TextPriceGrey = styled.p`
  font-size:15px;
  font-weight:bold;
  color:grey;
  text-decoration: underline;
`;

const ProfileSection = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const SideSection = styled.div`
  width: 25%;
  background-color: #ffffff;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 115px;
  height: 115px;
  margin-bottom: 10px;
`;

const StyledButton = styled.button`
  background-color: #0073b1;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;

  &:hover {
    background-color: #005582;
  }
`;

const FeedSection = styled.div`
  display: flex;
  max-width:100%;
  flex-direction: column;
  background-color: #ffffff;
  gap:10px;
  padding:15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow-x: auto; /* Permite a rolagem horizontal */
  scroll-behavior: smooth; /* Rolagem suave */

  /* Esconde barra de rolagem no desktop */
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100%;
      flex-direction: column;
      gap:10px;
       width:80%;
  }
`;


const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
`;

const HamburgueriaName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const AlignStart = styled.div`
  align-self: flex-start;
`;

const AlignEnd = styled.div`
  align-self: flex-end;
`;

const ContainerComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  height: 80%;
  overflow-y: auto;  // Permite rolagem vertical
  scroll-behavior: smooth; // Opcional, para suavizar a rolagem

  @media (max-width: 768px) {
    width: 80%;
    height: 250px;
  }
`;

// Seção para ingredientes e molhos
const Section = styled.div`
  background-color: #dcdcdc;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
`;

// Título de cada seção
const SectionTitle = styled.h4`
  color: #333;
  margin-bottom: 10px;
`;

// Lista de ingredientes ou molhos
const ItemList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 10px;
`;

// Item individual da lista
const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  border-bottom: 1px solid #ccc;
`;

// Contador do item
const Counter = styled.span`
  font-size: 16px;
  color: #333;
`;

// Botão de adicionar
const AddButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85%", // Largura padrão (desktop)
  height: "60%", // Altura padrão (desktop)
  bgcolor: "background.paper",
  border: "2px solid #000",
  display: 'flex',
  boxShadow: 24,
  p: 4,
  gap: 7,
  overflowY: "auto", // Adicionando rolagem vertical

  // Media Queries para mobile
  "@media (max-width: 768px)": {
    width: "80%", // Largura no mobile
    height: "90%", // Altura no mobile
    flexDirection: 'column',
  },
};



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


const App = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [ingredients, setIngredients] = React.useState([
    { id: 1, name: 'Pista', count: 0 },
    { id: 2, name: 'Písta 2', count: 0 },
    { id: 3, name: 'Arquibancada', count: 0 },
  ]);

  const [sauces, setSauces] = React.useState([
    { id: 1, name: 'Frente', count: 0 },
    { id: 2, name: 'Superior', count: 0 },
  ]);

  const feedRef = React.useRef(null);

  const scrollLeft = () => {
    feedRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    feedRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };
  const addItem = (id, type) => {
    if (type === 'ingredient') {
      setIngredients(ingredients.map(item =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      ));
    } else if (type === 'sauce') {
      setSauces(sauces.map(item =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      ));
    }
  };

  return (
    <>
      <Header />
      <Container>

        <MainContent>
          {/* Seção do Perfil */}
          <ProfileSection>
            <ProfileImage src="logoburguer.png" alt="Profile" />
            <h3>Evento de Léo</h3>
            <p>Rua Dr epitácio pessoa</p>
            <p style={{fontWeight:'bold'}} >João Pessoa</p>
            <StyledButton>Validar ingresso</StyledButton>
            <StyledButton style={{backgroundColor:'green'}} >Chamar no WhatsApp</StyledButton>
            <p>Prepare-se para uma experiência inesquecível! O Festival VibraSom 2025 chega com tudo, trazendo os maiores nomes da música nacional e internacional para um evento repleto de energia, diversão e boa vibe.</p>
          </ProfileSection>

          {/* Feed Principal */}

          <FeedSection ref={feedRef}>
            <div style={{ width: '100%', display: 'flex', alignSelf: 'flex-start' }} >
              <Typography style={{ fontWeight: 'bold', fontSize: 20 }} >Últimas novidades:</Typography>
            </div>

            <div style={{ width: '100%', display: 'flex', gap: 15 }} >
              <RecipeReviewCard  img='festival.jpg' />
              <RecipeReviewCard img='banner.jpg'/>
            </div>


          </FeedSection>


          {/* Temas em Alta */}
          <SideSection>
            <h3>Lotes de ingresso dispoíveis:</h3>
            <ul>
              <Card sx={{
                minWidth: '85%', border: '2px solid grey', borderRadius: ' 8px', boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.6)',  cursor:'pointer'
              }}>
                <CardContent>
                  <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Semana Passada
                  </Typography>
                  <Typography variant="h5" component="div">
                    2º Lote Individual
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>R$28,90</Typography>
                  <Typography variant="body2">
                  O Seu ingresso serve como a chave de acesso para a entrada e participação na experiência.
                    <br />
    
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>


              <Card sx={{
                minWidth: '85%',marginTop:1, border: '2px solid grey', borderRadius: ' 8px', boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.6)'
              }}>
                <CardContent>
                  <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Word of the Day
                  </Typography>
                  <Typography variant="h5" component="div">
                    be{bull}nev{bull}o{bull}lent
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                  <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </ul>
          </SideSection>
        </MainContent>

      </Container >
      <ContainerCardapio>
      <Text>Outros eventos que possa curtir!</Text>
        <ContainerCardapioProdutos>
       
      <ContainerProduto onClick={() => handleOpen()} >
    <ContainerProdutoDescição>
      <TextTitle>MC Will - 23 de Março - Arena TT</TextTitle>
      <Textdescription>
      O evento mais pesado do ano está chegando! Baile dos Gigantes vai colocar todo mundo pra descer até o chão com os maiores nomes do funk, batidão insano e uma estrutura que vai fazer a cidade tremer!   </Textdescription>
<div style={{display:'flex',gap:5}} >
      <TextPriceGreen>28,90</TextPriceGreen>
      <TextPriceGrey>38,90</TextPriceGrey>
      </div>
      </ContainerProdutoDescição>
      <img alt='produto' style={{width:'30%',height:'80%',alignSelf:'flex-end'}} src='evento1.jpg'  />
      </ContainerProduto>

      <ContainerProduto onClick={() => handleOpen()} >
    <ContainerProdutoDescição>
      <TextTitle>Evento Safadão - 15 de Abril - Moonlight club</TextTitle>
      <Textdescription>
      Segura o coração que vem mais um evento histórico! Wesley Safadão chega com tudo para comandar a festa mais esperada do ano, trazendo seus maiores sucessos em uma noite de muita música, emoção e animação!    </Textdescription>
<div style={{display:'flex',gap:5}} >
      <TextPriceGreen>28,90</TextPriceGreen>
      <TextPriceGrey>38,90</TextPriceGrey>
      </div>
      </ContainerProdutoDescição>
      <img alt='produto' style={{width:'30%',height:'80%',alignSelf:'flex-end'}} src='evento2.jpg'  />
      </ContainerProduto>

      <ContainerProduto onClick={() => handleOpen()} >
    <ContainerProdutoDescição>
      <TextTitle>Noite Sertaneja - 10 junho - Arena MM</TextTitle>
      <Textdescription>
      O evento mais pesado do ano está chegando! Baile dos Gigantes vai colocar todo mundo pra descer até o chão com os maiores nomes do funk, batidão insano e uma estrutura que vai fazer a cidade tremer!  </Textdescription>
<div style={{display:'flex',gap:5}} >
      <TextPriceGreen>28,90</TextPriceGreen>
      <TextPriceGrey>38,90</TextPriceGrey>
      </div>
      </ContainerProdutoDescição>
      <img alt='produto' style={{width:'30%',height:'80%',alignSelf:'flex-end'}} src='evento3.jpg'  />
      </ContainerProduto>

      <ContainerProduto onClick={() => handleOpen()} >
    <ContainerProdutoDescição>
      <TextTitle>Combo X-Tropical + Fritas + Refrigerante</TextTitle>
      <Textdescription>
      Prepare-se para uma experiência única, onde a música, a diversão e a energia se encontram em um só lugar! O Festival Energia 2025 vai reunir grandes artistas, uma estrutura de tirar o fôlego e uma vibe inesquecível.  </Textdescription>
<div style={{display:'flex',gap:5}} >
      <TextPriceGreen>28,90</TextPriceGreen>
      <TextPriceGrey>38,90</TextPriceGrey>
      </div>
      </ContainerProdutoDescição>
      <img alt='produto' style={{width:'30%',height:'80%',alignSelf:'flex-end'}} src='evento4.jpg'  />
      </ContainerProduto>

        
     
        </ContainerCardapioProdutos>
      </ContainerCardapio>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div></div>
      <ContainerImagem>
        <img 
  alt="produto" 
  style={{
    width: "100%", 
    height: "100%", 
    alignSelf: "flex-end",
    objectFit: "cover", // Garante que a imagem cubra todo o espaço disponível
  }} 
  src="evento4.jpg" 
/>
</ContainerImagem>
    
        <ModalContent>
        <HamburgueriaName>Fundo de quintal - 18 de agosto - arena MRV</HamburgueriaName>
        <InfoRow>
          <AlignStart>Evento de Léo - Noturno </AlignStart>
        </InfoRow>
        <InfoRow>
          <AlignStart>  Prepare-se para uma experiência única, onde a música, a diversão e a energia se encontram em um só lugar! O Festival Energia 2025 vai reunir grandes artistas, uma estrutura de tirar o fôlego e uma vibe inesquecível.</AlignStart>
        </InfoRow>
        <InfoRow>
          <AlignStart>A partir de</AlignStart>
          <AlignEnd>R$ 28,90 (R$ 54,00)</AlignEnd>
        </InfoRow>
      </ModalContent> 
<div style={{display:'flex',flexDirection:"column",padding:10,width:'35%',gap:20}} >
<ContainerComponent>
      {/* Seção de Ingredientes */}
      <Section>
        <SectionTitle>Ingressos</SectionTitle>
        <ItemList>
          {ingredients.map(ingredient => (
            <Item key={ingredient.id}>
              <span>{ingredient.name}</span>
              <div>
                <Counter>{ingredient.count}</Counter>
                <AddButton onClick={() => addItem(ingredient.id, 'ingredient')}>+</AddButton>
              </div>
            </Item>
          ))}
        </ItemList>
      </Section>

      {/* Seção de Molhos */}
      <Section>
        <SectionTitle>Camarote</SectionTitle>
        <ItemList>
          {sauces.map(sauce => (
            <Item key={sauce.id}>
              <span>{sauce.name}</span>
              <div style={{gap:5}} >
                <Counter>{sauce.count}</Counter>
                <AddButton onClick={() => addItem(sauce.id, 'sauce')}>+</AddButton>
              </div>
            </Item>
          ))}
        </ItemList>
      </Section>
    </ContainerComponent>

    <Button variant="contained">Adicionar ao Carrinho ( R$28,90 )</Button>
</div>
  
        </Box>
      </Modal>

    </>
  );
};

export default App;


/* <ModalContent>
        <HamburgueriaName>Apache Hamburgueria - Águas Claras</HamburgueriaName>
        <InfoRow>
          <AlignStart>CONBO ANCHE CON GUARANA ANTARCTICA</AlignStart>
        </InfoRow>
        <InfoRow>
          <AlignStart>Buiper anjuta de 180g, malonete apeche, queijo prato, tomato, alface, bacon, ovo servido no pão brioche selado na manteiga + batata frita 100g • Guaraná Antarctica</AlignStart>
        </InfoRow>
        <InfoRow>
          <AlignStart>A partir de</AlignStart>
          <AlignEnd>R$ 53,40 (R$ 54,00)</AlignEnd>
        </InfoRow>
        <CloseButton onClick={onClose}>Fechar</CloseButton>
      </ModalContent> */