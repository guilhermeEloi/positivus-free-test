import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 90vh;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10vh;
  overflow-x: hidden;
`;

export const Section = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  margin-top: 32px;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.base};
  font-size: 60px;
  font-weight: ${({ theme }) => theme.font.weights.medium};
  color: ${({ theme }) => theme.colors.black};
  cursor: default;
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.font.base};
  font-size: 20px;
  font-weight: ${({ theme }) => theme.font.weights.regular};
  color: ${({ theme }) => theme.colors.black};
  cursor: default;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 60px;
`;

export const ServicesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 15vh;
`;

export const ServicesHeader = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
`;

export const ServiceTitleContainer = styled.div`
  display: flex;
  width: fit-content;
  padding: 7px 0px 0px 7px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ServiceTitle = styled.h2`
  font-family: ${({ theme }) => theme.font.base};
  font-size: 40px;
  font-weight: ${({ theme }) => theme.font.weights.medium};
  color: ${({ theme }) => theme.colors.black};
  cursor: default;
`;

export const ServiceDescriptionContainer = styled.div`
  display: flex;
  width: 40%;
  margin-left: 36px;
`;

export const ServiceDescription = styled.p`
  font-family: ${({ theme }) => theme.font.base};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.font.weights.regular};
  color: ${({ theme }) => theme.colors.black};
  cursor: default;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  width: 80%;
  padding: 16px;
  margin-top: 40px;
`;

const baseCard = styled.div`
  display: flex;
  max-width: 600px;
  height: 310px;
  border-radius: 45px;
  padding: 50px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 5px 0px 0px #191a23;
`;

export const CardGray = styled(baseCard)`
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const CardGreen = styled(baseCard)`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const CardDark = styled(baseCard)`
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 100%;
`;

export const CardTextGroup = styled.div``;

export const CardTextBlock = styled.div`
  padding: 7px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.primary};
  width: fit-content;
`;

export const CardTextBlockWithe = styled.div`
  padding: 7px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  width: fit-content;
`;

export const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.font.base};
  font-size: 30px;
  font-weight: ${({ theme }) => theme.font.weights.medium};
  color: ${({ theme }) => theme.colors.black};
  cursor: default;
`;

export const CardLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CardLink = styled.a`
  font-family: ${({ theme }) => theme.font.base};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.font.weights.regular};
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`;

export const CardLinkWhite = styled(CardLink)`
  color: ${({ theme }) => theme.colors.white};
`;

export const CardImageContainer = styled.div``;

export const ProposalSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 60px;
`;

export const CardProposal = styled.div`
  display: flex;
  width: 75%;
  height: 350px;
  border-radius: 45px;
  padding: 0px 60px 0px 60px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  justify-content: space-around;
  margin-top: 10vh;
`;

export const CardProposalTextGroup = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const CardProposalTextBlock = styled.div`
  width: fit-content;
`;

export const CardDescription = styled.p`
  font-family: ${({ theme }) => theme.font.base};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.font.weights.regular};
  color: ${({ theme }) => theme.colors.black};
  cursor: default;
`;

export const CardProposalImageContainer = styled.div``;

export const CardCase = styled(CardProposal)`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 330px;
`;

export const CardCaseContent = styled(CardContent)`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const CardCaseTextGroup = styled(CardProposalTextGroup)`
  width: 80%;
`;

export const CardCaseDescription = styled(CardDescription)`
  color: ${({ theme }) => theme.colors.white};
`;

export const CardCaseLink = styled(CardLink)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  display: flex;
  align-items: center;
`;

export const VerticalDivider = styled.div`
  width: 1px;
  height: 70%;
  margin: 60px 60px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const CardProcessGreen = styled.div`
  display: flex;
  width: 80vw;
  height: 310px;
  border-radius: 45px;
  padding: 50px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 5px 0px 0px #191a23;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: 10vh;
`;

export const CardProcessContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-around;
`;

export const CardProcessTextGroup = styled(CardTextGroup)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardProcessTextTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  align-items: center;
  gap: 25px;
`;

export const CardProcessNumberTitle = styled.h1`
  font-family: ${({ theme }) => theme.font.base};
  font-size: 60px;
  font-weight: ${({ theme }) => theme.font.weights.medium};
  color: ${({ theme }) => theme.colors.black};
  cursor: default;
`;

export const CardProcessTitle = styled.h3`
  font-family: ${({ theme }) => theme.font.base};
  font-size: 30px;
  font-weight: ${({ theme }) => theme.font.weights.regular};
  color: ${({ theme }) => theme.colors.black};
  cursor: default;
`;

export const HorizontalDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const CardProcessDescription = styled.p`
  font-family: ${({ theme }) => theme.font.base};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.font.weights.regular};
  color: ${({ theme }) => theme.colors.black};
  cursor: default;
`;

export const CardProcessGray = styled(CardProcessGreen)`
  height: 160px;
  margin-top: 5vh;
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const CardsTeamGrid = styled(CardsGrid)`
  grid-template-columns: 1fr 1fr 1fr;
`;

export const ContainerContentButtonTeam = styled.div`
  display: flex;
  width: 70%;
  justify-content: flex-end;
  margin-top: 5vh;
`;

export const CardTeam = styled.div`
  width: 390px;
  height: 330px;
  margin-top: 10vh;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 45px;
  padding: 40px 35px 40px 35px;
  gap: 10px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 5px 0px 0px #191a23;
`;

export const CardTeamContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-around;
`;

export const CardTeamContentData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const CardTeamContentDataPositionAndName = styled.div`
  display: flex;
  width: fit-content;
  height: 100%;
  flex-direction: column;
  justify-content: end;
  margin-left: 16px;
`;

export const AvatarName = styled.h4`
  font-family: ${({ theme }) => theme.font.base};
  font-size: 20px;
  font-weight: ${({ theme }) => theme.font.weights.medium};
  color: ${({ theme }) => theme.colors.black};
  cursor: default;
`;

export const CardTeamContentDescription = styled.div`
  display: flex;
`;

export const SpeechWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SpeechBubble = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 16px;
  width: fit-content;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 40px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 15px solid ${({ theme }) => theme.colors.secondary};
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -17px;
    left: 39px;
    width: 0;
    height: 0;
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
    border-top: 17px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const SpeakerInfo = styled.div`
  margin-top: 24px;
  margin-left: 40px;
`;

export const Name = styled.h4`
  font-family: ${({ theme }) => theme.font.base};
  font-size: 20px;
  font-weight: ${({ theme }) => theme.font.weights.regular};
  color: ${({ theme }) => theme.colors.primary};
  cursor: default;
`;

export const Role = styled.h4`
  font-family: ${({ theme }) => theme.font.base};
  font-size: 20px;
  font-weight: ${({ theme }) => theme.font.weights.regular};
  color: ${({ theme }) => theme.colors.white};
  cursor: default;
`;

export const CardTestimonials = styled(CardCase)`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 625px;
  align-items: center;
`;

export const CardTestimonialsContent = styled(CardCaseContent)`
  display: flex;
`;

export const CardContactUs = styled(CardProposal)`
  height: 770px;
  justify-content: space-between;
  padding: 0px;
`;

export const CardContactUsContent = styled(CardContent)`
  width: 45%;
  padding: 40px;
`;

export const CardContactUsImageContainer = styled(CardProposalImageContainer)`
  display: flex;
  width: 26.3%;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
`;

export const ContainerRadioButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
