import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Widgets from "@material-ui/icons/Widgets";
import Fingerprint from "@material-ui/icons/Fingerprint";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Vamos falar de produto</h2>
          <h5 className={classes.description}>
          Quem procura por uma ferramenta que proporcione os melhores recursos para gestão dos seus contratos com layout simplificado, irá encontrar no EContract. A marca que quer se tornar referencia no segmento, apoiando seus clientes como canal para validação de dados, controle de documentos (futuramente: plataforma para analise de KPIs) e integração com tecnologias para smart contract. 
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Gestão de Contratos"
              description="Melhore o controle sobre os contratos da sua empresa com seus parceiros. Nossos recursos foram pensados com o objetivo de ajudar em buscas inteligentes, automação de processos e gerar relatórios ricos em dados para tomada de decisão."
              icon={Assignment}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Assinatura Digital"
              description="As nossas ferramentas de assinatura digital viabilizem a conclusão de acordos de forma ágil, segura e auditável. Oferecemos a possibilidade de nossos clientes rastrearem seus contratos para otimizar suas negociações."
              icon={Fingerprint}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Smart Contract"
              description="Inove a validação dos seus contratos de forma segura e com suporte de uma empresa especializada. Tenha um software para contratos que oferece integração com a tecnologia blockchain, e saia na frente nessa revolução digital."
              icon={Widgets}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
