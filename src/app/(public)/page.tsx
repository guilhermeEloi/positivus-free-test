/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { useAutoSlider } from "@/hooks/useAutoSlider";

import { Header } from "@/components/Header/Header";
import Button from "@/components/Button/Button";

import Image from "next/image";
import { images } from "@/assets/images/images";

import { serviceCards } from "@/mocks/services";
import { logos } from "@/mocks/clients";
import { cases } from "@/mocks/cases";
import { processSteps } from "@/mocks/processSteps";
import { team } from "@/mocks/team";
import { testimonials } from "@/mocks/testimonials";

import {
  AvatarName,
  CardCase,
  CardCaseContent,
  CardCaseDescription,
  CardCaseLink,
  CardCaseTextGroup,
  CardContactUs,
  CardContactUsContent,
  CardContactUsImageContainer,
  CardContent,
  CardDark,
  CardDescription,
  CardGray,
  CardGreen,
  CardImageContainer,
  CardLink,
  CardLinkContainer,
  CardLinkWhite,
  CardProcessContent,
  CardProcessDescription,
  CardProcessGray,
  CardProcessGreen,
  CardProcessNumberTitle,
  CardProcessTextGroup,
  CardProcessTextTitle,
  CardProcessTitle,
  CardProposal,
  CardProposalImageContainer,
  CardProposalTextGroup,
  CardsGrid,
  CardsTeamGrid,
  CardTeam,
  CardTeamContent,
  CardTeamContentData,
  CardTeamContentDataPositionAndName,
  CardTeamContentDescription,
  CardTestimonials,
  CardTestimonialsContent,
  CardTextBlock,
  CardTextBlockWithe,
  CardTextGroup,
  CardTitle,
  Container,
  ContainerContentButtonTeam,
  ContainerRadioButton,
  Description,
  HorizontalDivider,
  ImageContainer,
  LogoBar,
  Name,
  ProposalSection,
  Role,
  Section,
  ServiceDescription,
  ServiceDescriptionContainer,
  ServicesHeader,
  ServicesSection,
  ServiceTitle,
  ServiceTitleContainer,
  SpeakerInfo,
  SpeechBubble,
  SpeechWrapper,
  TextGroup,
  Title,
  VerticalDivider,
} from "./styles";
import Input from "@/components/Input/Input";
import RadioButton from "@/components/RadioButton/RadioButton";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const [sliderRef] = useAutoSlider();
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <Header />
      <Container>
        <Section>
          <TextGroup>
            <Title>Navigating the digital landscape for success</Title>
            <Description>
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </Description>
            <Button>Book a consultation</Button>
          </TextGroup>
          <ImageContainer>
            <Image src={images.homeImg} alt="Banner da home Positivus" />
          </ImageContainer>
        </Section>

        <LogoBar>
          {logos.map(({ src, alt }, i) => (
            <Image key={i} src={src} alt={`Imagem de ${alt}`} />
          ))}
        </LogoBar>

        <ServicesSection>
          <ServicesHeader>
            <ServiceTitleContainer>
              <ServiceTitle>Services</ServiceTitle>
            </ServiceTitleContainer>
            <ServiceDescriptionContainer>
              <ServiceDescription>
                At our digital marketing agency, we offer a range of services to
                help businesses grow and succeed online. These services include:
              </ServiceDescription>
            </ServiceDescriptionContainer>
          </ServicesHeader>

          <CardsGrid>
            {serviceCards.map((card: any, index: number) => {
              const CardType =
                card.type === "gray"
                  ? CardGray
                  : card.type === "green"
                  ? CardGreen
                  : CardDark;
              const LinkComponent =
                card.arrow === images.iconArrowWhite ? CardLinkWhite : CardLink;

              return (
                <CardType key={index}>
                  <CardContent>
                    <CardTextGroup>
                      {card.title.map((t: any, i: number) => {
                        const TextBlock =
                          card.arrow === images.iconArrowWhite
                            ? CardTextBlockWithe
                            : CardTextBlock;
                        return (
                          <TextBlock key={i}>
                            <CardTitle>{t}</CardTitle>
                          </TextBlock>
                        );
                      })}
                    </CardTextGroup>
                    <CardLinkContainer>
                      <Image src={card.arrow} alt="Ícone seta" />
                      <LinkComponent>Learn more</LinkComponent>
                    </CardLinkContainer>
                  </CardContent>
                  <CardImageContainer>
                    <Image
                      src={card.img}
                      alt={`Ilustração de ${card.title.join(" ")}`}
                    />
                  </CardImageContainer>
                </CardType>
              );
            })}
          </CardsGrid>
        </ServicesSection>

        <ProposalSection>
          <CardProposal>
            <CardContent>
              <CardProposalTextGroup>
                <CardTitle>Let’s make things happen</CardTitle>
                <CardDescription>
                  Contact us today to learn more about how our digital marketing
                  services can help your business grow and succeed online.
                </CardDescription>
                <Button>Get your free proposal</Button>
              </CardProposalTextGroup>
            </CardContent>
            <CardProposalImageContainer>
              <Image
                src={images.proposalCardImg}
                alt="Ilustração imagem de proposta"
              />
            </CardProposalImageContainer>
          </CardProposal>
        </ProposalSection>

        <ServicesSection>
          <ServicesHeader>
            <ServiceTitleContainer>
              <ServiceTitle>Case Studies</ServiceTitle>
            </ServiceTitleContainer>
            <ServiceDescriptionContainer>
              <ServiceDescription>
                Explore Real-Life Examples of Our Proven Digital Marketing
                Success through Our Case Studies
              </ServiceDescription>
            </ServiceDescriptionContainer>
          </ServicesHeader>

          <CardCase>
            {cases.map((item, index) => (
              <React.Fragment key={index}>
                <CardCaseContent>
                  <CardCaseTextGroup>
                    <CardCaseDescription>
                      {item.description}
                    </CardCaseDescription>
                    <CardCaseLink>
                      Learn more
                      <Image
                        src={images.iconArrowGreen}
                        alt="Ícone seta"
                        style={{ marginLeft: 20 }}
                      />
                    </CardCaseLink>
                  </CardCaseTextGroup>
                </CardCaseContent>
                {index < cases.length - 1 && <VerticalDivider />}
              </React.Fragment>
            ))}
          </CardCase>
        </ServicesSection>

        <ServicesSection>
          <ServicesHeader>
            <ServiceTitleContainer>
              <ServiceTitle>Our Working Process</ServiceTitle>
            </ServiceTitleContainer>
            <ServiceDescriptionContainer>
              <ServiceDescription>
                Step-by-Step Guide to Achieving Your Business Goals
              </ServiceDescription>
            </ServiceDescriptionContainer>
          </ServicesHeader>

          {processSteps.map((step, index) => {
            const CardComponent =
              index === 0 ? CardProcessGreen : CardProcessGray;

            return (
              <CardComponent key={step.id}>
                <CardProcessContent>
                  <CardProcessTextGroup>
                    <CardProcessTextTitle>
                      <CardProcessNumberTitle>
                        {step.number}
                      </CardProcessNumberTitle>
                      <CardProcessTitle>{step.title}</CardProcessTitle>
                    </CardProcessTextTitle>
                    <Image src={step.icon} alt="Ícone etapa" />
                  </CardProcessTextGroup>

                  {step.expanded && (
                    <>
                      <HorizontalDivider />
                      <CardProcessTextGroup>
                        <CardProcessTextTitle>
                          <CardProcessDescription>
                            {step.description}
                          </CardProcessDescription>
                        </CardProcessTextTitle>
                      </CardProcessTextGroup>
                    </>
                  )}
                </CardProcessContent>
              </CardComponent>
            );
          })}
        </ServicesSection>

        <ServicesSection>
          <ServicesHeader>
            <ServiceTitleContainer>
              <ServiceTitle>Team</ServiceTitle>
            </ServiceTitleContainer>
            <ServiceDescriptionContainer>
              <ServiceDescription>
                Meet the skilled and experienced team behind our successful
                digital marketing strategies
              </ServiceDescription>
            </ServiceDescriptionContainer>
          </ServicesHeader>

          <CardsTeamGrid>
            {team.map((member, index) => (
              <CardTeam key={index}>
                <CardTeamContent>
                  <CardTeamContentData>
                    <Image
                      src={member.avatar}
                      alt={`Avatar de ${member.name}`}
                    />
                    <CardTeamContentDataPositionAndName>
                      <AvatarName>{member.name}</AvatarName>
                      <CardProcessDescription>
                        {member.role}
                      </CardProcessDescription>
                    </CardTeamContentDataPositionAndName>
                    <Image src={member.linkedin} alt="Ícone LinkedIn" />
                  </CardTeamContentData>
                  <HorizontalDivider />
                  <CardTeamContentDescription>
                    <CardProcessDescription>
                      {member.description}
                    </CardProcessDescription>
                  </CardTeamContentDescription>
                </CardTeamContent>
              </CardTeam>
            ))}
          </CardsTeamGrid>
          <ContainerContentButtonTeam>
            <Button>See all team</Button>
          </ContainerContentButtonTeam>
        </ServicesSection>

        <ServicesSection>
          <ServicesHeader>
            <ServiceTitleContainer>
              <ServiceTitle>Testimonials</ServiceTitle>
            </ServiceTitleContainer>
            <ServiceDescriptionContainer>
              <ServiceDescription>
                Hear from Our Satisfied Clients: Read Our Testimonials to Learn
                More about Our Digital Marketing Services
              </ServiceDescription>
            </ServiceDescriptionContainer>
          </ServicesHeader>

          <CardTestimonials>
            <CardTestimonialsContent ref={sliderRef} className="keen-slider">
              {testimonials.map((item, index) => (
                <div className="keen-slider__slide" key={index}>
                  <SpeechWrapper>
                    <SpeechBubble>{item.quote}</SpeechBubble>
                    <SpeakerInfo>
                      <Name>{item.name}</Name>
                      <Role>{item.role}</Role>
                    </SpeakerInfo>
                  </SpeechWrapper>
                </div>
              ))}
            </CardTestimonialsContent>
          </CardTestimonials>
        </ServicesSection>

        <ServicesSection>
          <ServicesHeader>
            <ServiceTitleContainer>
              <ServiceTitle>Contact Us</ServiceTitle>
            </ServiceTitleContainer>
            <ServiceDescriptionContainer>
              <ServiceDescription>
                Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs
              </ServiceDescription>
            </ServiceDescriptionContainer>
          </ServicesHeader>

          <CardContactUs>
            <CardContactUsContent>
              <ContainerRadioButton>
                <RadioButton
                  label="Say Hi"
                  name="sayHi"
                  value="sayHi"
                  checked={selectedOption === "sayHi"}
                  onChange={handleRadioChange}
                />
                <RadioButton
                  label="Get a Quote"
                  name="getQuote"
                  value="getQuote"
                  checked={selectedOption === "getQuote"}
                  onChange={handleRadioChange}
                />
              </ContainerRadioButton>
              <Input label="Name" placeholder="Name" />
              <Input label="Email*" type="email" placeholder="Email" />
              <Input label="Message*" placeholder="Message" asTextArea={true} />
            </CardContactUsContent>
            <CardContactUsImageContainer>
              <Image
                src={images.imgContactUs}
                alt="Ilustração imagem de contato"
              />
            </CardContactUsImageContainer>
          </CardContactUs>
        </ServicesSection>

        <Footer />
      </Container>
    </>
  );
}
