import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import ArrowDecision from "mdi-material-ui/ArrowDecision";
import EmoticonCool from "mdi-material-ui/EmoticonCoolOutline";
import Mood from "mdi-material-ui/EmoticonOutline";
import React from "react";
import Gallery from "../components/Gallery";
import Layout from "../components/Layout";
import StaticSteper from "../components/StaticSteper";
import TestimonySlider from "../components/TestimonySlider";
import ThreeSteps from "../components/ThreeSteps";

const styles = (theme: Theme) => ({
  grid: {
    margin: "0px auto",
    maxWidth: 1080,
    padding: theme.spacing.unit * 3
  },
  slider: {
    margin: "0px auto",
    paddingBottom: 30,
    width: "calc(100% - 100px)",
  }
});

interface IBuffetProps {
  classes?: any;
}

export class Buffet extends React.Component<IBuffetProps, {}> {
  public render() {
    const { classes } = this.props;

    const steps = [
      { icon: <Mood />, title: 'Cohésion', content: "Accessible à tous, la cuisine est une activité fédératrice, propice aux échanges et au partage. Nous privilégions la collaboration lors de la préparation des recettes et un temps convivial en fin d’atelier, autour d’un buffet ou d’un repas pour déguster l’ensemble des préparations." },
      { icon: <ArrowDecision />, title: 'Diversité', content: "Curieux ou amateurs de saveurs plus traditionnelles, nous vous suggérons des univers culinaires qui permettront à vos équipes de voyager. Nos ateliers sont adaptés à de petites équipes ou à de plus grands groupes, ainsi qu’à divers formats selon le temps alloué à cette activité en équipe." },
      { icon: <EmoticonCool />, title: 'Sérénité', content: "L’atelier est organisé de A à Z par nos soins. Vous n’avez à vous souciez de rien. Au sein de votre entreprise ou dans l’un de nos lieux partenaires, nous prévoyons tous les ingrédients et le matériel nécessaire. Enfilez un véritable tablier coloré et passez aux fourneaux avec votre équipe. Conservez un souvenir de l’atelier avec notre sélection de photos prises lors de l’atelier." }
    ];

    const stepsFAQ = [
      {
        title: `Partagez-nous vos attentes`,
        content: `Faîtes-nous part du contexte dans lequel vous souhaitez organiser cet atelier en rendez-vous ou lors d’un échange téléphonique. `
      },
      {
        title: `Nous nous chargeons de l’organisation de l’atelier de A à Z.`,
        content: `Nous vous transmettons une proposition de devis adaptée, en fonction de vos impératifs et selon la disponibilité de nos cuistots et de nos lieux partenaires. Nous restons à votre écoute pour personnaliser nos proposition et répondre au plus près à vos attentes.`
      },
      {
        title: `Participez à une activité fédératrice`,
        content: `Enfilez le tablier avec votre équipe et participez à une activité collaborative. Le challenge de votre équipe réside dans la bonne réalisation de recettes authentiques et savoureuses. découvrez de nouvelles saveurs, impliquez-vous aux fourneaux dans une ambiance propice aux échanges et au partage.`
      },
      {
        title: `Après l’effort, le réconfort !`,
        content: `Dégustez vos préparations en fin d’atelier autour d’un buffet ou d’un repas convivial. Chaque gourmet repart avec son livret de recettes. Et pourquoi ne pas leur offrir le tablier ? Nous récoltons votre avis en fin d’atelier et vous transmettons une sélection de photos.`
      },
    ];

    const testimonies = [
      {
        context: "Atelier pour une équipe de 25 collaborateurs",
        comment: "Grand merci pour votre prestation. Les retours sont top et correspondent vraiment aux attentes de mon associé et moi même, bravo.",
        image:
          "https://static.cuistotducoin.com/img/testimony/bourhis.jpg",
        name: "Cabinet Bourhis",
        rating: 5
      },
      {
        context: "Atelier pour une équipe de 70 collaborateurs",
        comment: "Génial ! Merci pour cette prestation.",
        image:
          "https://static.cuistotducoin.com/img/testimony/apside.jpg",
        name: "Apside",
        rating: 5
      },
      {
        context: "Atelier pour une équipe de 15 collaborateurs",
        comment: "L'équipe a apprécié toutes les prestations de Cuistot du coin. Le buffet : original et très bon et l'atelier : ambiance détendue où chacun a trouvé sa place. Le lieu où se sent vite très bien. Merci pour cette respiration.",
        image:
          "https://static.cuistotducoin.com/img/testimony/arkea.jpg",
        name: "CM Arkea",
        rating: 5
      },
      {
        context: "Atelier pour une équipe de 15 collaborateurss",
        comment: "Lieu magnifique, prestation au top. Tout était parfait : l'atelier, l'animation, l'organisation ainsi que le lieu.",
        image:
          "https://static.cuistotducoin.com/img/testimony/lidl.jpg",
        name: "Lidl",
        rating: 5
      },
      {
        context: "atelier pour les membres du CA",
        comment: "Super, moment de détente, très professionnel, de superbes astuces …",
        image:
          "https://static.cuistotducoin.com/img/testimony/cpme.jpg",
        name: "CPME 29",
        rating: 5
      },
      {
        context: "Atelier pour une équipe de 17 collaborateurss",
        comment: `L'équipe BeAble et moi-même avons passé un excellent moment. Des "profs" de qualités et à notre écoute. En prime, la dégustation a eu un franc succès et s'est avérée très copieuse. Merci à l'équipe Cuistot du coin pour ce bon moment.`,
        image:
          "https://static.cuistotducoin.com/img/testimony/beable.jpg",
        name: "Be Able",
        rating: 5
      }
    ];

    const photos = [
      { src: 'https://static.cuistotducoin.com/img/gallery/workshop-business/ananas-flambe.jpg', width: 1, height: 1, caption: "Atelier en entreprise", alt: "Atelier en entreprise" },
      { src: 'https://static.cuistotducoin.com/img/gallery/workshop-business/atelier-et-repas.jpg', width: 1, height: 1, caption: "Atelier suivi d'une repas convivial", alt: "Atelier et repas" },
      { src: 'https://static.cuistotducoin.com/img/gallery/workshop-business/atelier-fraisier.jpg', width: 1, height: 1, caption: "Atelier patisserie : Fraisier", alt: "Atelier fraisier" },
      { src: 'https://static.cuistotducoin.com/img/gallery/workshop-business/atelier-pasta.jpg', width: 1, height: 1, caption: "Atelier pasta", alt: "Atelier pasta" },
    ];

    return (
      <Layout valueProposition="Concoctez avec nous une expérience culinaire authentique et gourmande pour vos salariés !"
        component={
          <Grid
            container
            justify="space-around"
            className={classes.grid}
          >
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                href="https://landbot.io/u/H-117244-32JN5PQL01AGBAXB/index.html"
                target="_blank"
              >
                Obtenir un devis
            </Button>
            </Grid>
          </Grid>
        }>
        <Grid
          container
          justify="space-around"
          alignItems="flex-start"
          className={classes.grid}
        >
          <ThreeSteps steps={steps} />
        </Grid>
        <Typography
          variant="h5"
          align="center"
          component="h2"
          gutterBottom
        >
          Comment ça marche
        </Typography>
        <Grid
          container
          justify="space-around"
          alignItems="center"
          className={classes.grid}
        >
          <StaticSteper steps={stepsFAQ} />
        </Grid>
        <Typography
          variant="h5"
          align="center"
          component="h2"
          gutterBottom
        >
          Ils nous font confiance :
        </Typography>
        <div className={classes.slider}>
          <TestimonySlider testimonies={testimonies} />
        </div>
        <Gallery photos={photos} />
      </Layout >
    );
  }
}

export default withStyles(styles as any)(Buffet as any) as any;
