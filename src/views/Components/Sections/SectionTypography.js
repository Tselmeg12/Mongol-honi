import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Small from "components/Typography/Small.js";
import Danger from "components/Typography/Danger.js";
import Warning from "components/Typography/Warning.js";
import Success from "components/Typography/Success.js";
import Info from "components/Typography/Info.js";
import Primary from "components/Typography/Primary.js";
import Muted from "components/Typography/Muted.js";
import Quote from "components/Typography/Quote.js";

import image from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTypography() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="typography">
          <div className={classes.title}>
            <h2>Холбоо барих:</h2>
          </div>
          <GridContainer>
      
              <div className={classes.note}>Paragraph</div>
  
              <div class="row">
  <div class="col-3"><h20> Хаяг:
Хан-Уул дүүрэг 120 мянгатын Тэмээтэй уулзвар,
Jetro Гар утас худалдааны төв, 2 давхар</h20></div>
  <div class="col-6">Утас: 77008877</div>
  <div class="col-3">Email: info@usashop.mn</div>
</div>
              
          
          
            <div className={classes.typo}>
             
            </div>
            <div className={classes.typo}>
             
              
            </div>
            <div className={classes.typo}>
      
             
            </div>
            <div className={classes.typo}>
            
              
            </div>
            <div className={classes.typo}>
     
            
            </div>
            <div className={classes.typo}>
     
             
            </div>
            <div className={classes.typo}>
             
              <h2>
              
                <br />
               
              </h2>
            </div>
          </GridContainer>
        </div>
        <div className={classes.space50} />
        <div id="images">
          <div className={classes.title}>
          
          </div>
          <br />
          <GridContainer>
            <GridItem xs={3000}sm={2200}>
              
              <img
                src={image}
                alt="12"
                className={classes.imgRounded + " " + classes.imgFluid}
                padding=""
              />
            </GridItem>
            
           
         
          </GridContainer>
          <GridContainer />
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
