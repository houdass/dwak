import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: any[] = [];
  allItems: any[];
  page: number = 1;
  itemsToShow: number = 10;
  myInput: string = '';


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.allItems = [
 
    {
      "name": "ABILIFY 10 MG, Comprimé",
      "presentation": "Boîte de 28",
      "manufacturer": "MAPHAR",
      "composition": "Aripiprazole",
      "family": "Antipsychotique",
      "codeATC": "N05AX12",
      "price": "1284.00",
      "nature": "Médicament",
      "indication": "Traitement de la schizophrénie",
      "id": 1
    },
    {
      "name": "ABSTRAL 200 µG, Comprimé sublingual",
      "presentation": "Boite de 10",
      "manufacturer": "SOTHEMA",
      "composition": "Fentanyl",
      "family": "Antalgiques opioïdes",
      "codeATC": "N02AB03",
      "price": "937.00",
      "hospitalPrice": "621.00",
      "nature": "Médicament",
      "id": 2
    },
    {
      "name": "ABSTRAL 400 µG, Comprimé sublingual",
      "presentation": "Boite de 10",
      "manufacturer": "SOTHEMA",
      "composition": "Fentanyl",
      "family": "Antalgiques opioïdes",
      "codeATC": "N02AB03",
      "price": "937.00",
      "hospitalPrice": "621.00",
      "nature": "Médicament",
      "id": 3
    },
    {
      "name": "ACARBOSE LAPROPHAN 100 MG, Comprimé",
      "presentation": "Boite de 30",
      "manufacturer": "LAPROPHAN",
      "composition": "Acarbose",
      "family": "Antidiabétique, inhibiteur de l'alpha-glucosidase",
      "codeATC": "A10BF01",
      "price": "64.40",
      "hospitalPrice": "40.20",
      "nature": "Médicament",
      "id": 4
    },
    {
      "name": "ACARBOSE LAPROPHAN 100 MG, Comprimé",
      "presentation": "Boite de 90",
      "manufacturer": "LAPROPHAN",
      "composition": "Acarbose",
      "family": "Antidiabétique, inhibiteur de l'alpha-glucosidase",
      "codeATC": "A10BF01",
      "price": "166.10",
      "hospitalPrice": "103.80",
      "nature": "Médicament",
      "id": 5
    },
    {
      "name": "ACARBOSE LAPROPHAN 50 MG, Comprimé",
      "presentation": "Boite de 90",
      "manufacturer": "LAPROPHAN",
      "composition": "Acarbose",
      "family": "Antidiabétique, inhibiteur de l'alpha-glucosidase",
      "codeATC": "A10BF01",
      "price": "64.40",
      "hospitalPrice": "40.20",
      "nature": "Médicament",
      "id": 6
    },
    {
      "name": "ACARBOSE LAPROPHAN 50MG, Comprimé",
      "presentation": "Boite de 30",
      "manufacturer": "LAPROPHAN",
      "composition": "Acarbose",
      "family": "Antidiabétique, inhibiteur de l'alpha-glucosidase",
      "codeATC": "A10BF01",
      "price": "42.20",
      "hospitalPrice": "26.40",
      "nature": "Médicament",
      "id": 7
    },
    {
      "name": "ACCUPRIL 20 MG, Comprimé enrobé sécable",
      "presentation": "Boîte de 28",
      "princeps :": true,
      "manufacturer": "PFIZER MAROC",
      "composition": "Quinapril",
      "family": "Antihypertenseur de la family des inhibiteurs de l'enzyme de conversion  de l'angiotensine",
      "codeATC": "C09A0",
      "price": "103.50",
      "hospitalPrice": "64.70",
      "refund": true,
      "baseOfRefund": "103.50",
      "nature": "Médicament",
      "id": 8
    },
    {
      "name": "ABSTRAL 100 µG, Comprimé sublingual",
      "presentation": "Boite de 10",
      "manufacturer": "SOTHEMA",
      "composition": "Fentanyl",
      "family": "Antalgiques opioïdes",
      "codeATC": "N02AB03",
      "price": "937.00",
      "hospitalPrice": "621.00",
      "nature": "Médicament",
      "id": 9
    },
    {
      "name": "ABILIFY 15 MG, Comprimé",
      "presentation": "Boîte de 28",
      "princeps :": true,
      "manufacturer": "MAPHAR",
      "composition": "Aripiprazole",
      "family": "Antipsychotique",
      "codeATC": "N05AX12",
      "price": "1284.00",
      "nature": "Médicament",
      "indication": "Traitement de la schizophrénie",
      "id": 10
    },
    {
      "name": "ABBOTICINE 200 MG, Granulé pour suspension buvable",
      "presentation": "Boîte de 1 Flacon de 60 ml",
      "princeps :": true,
      "manufacturer": "MAPHAR",
      "composition": "Erythromycine",
      "family": "Antibiotique de la family des macrolides",
      "codeATC": "J01FA01",
      "price": "26.80",
      "hospitalPrice": "16.70",
      "refund": true,
      "baseOfRefund": "26.80",
      "nature": "Médicament",
      "id": 11
    },
    {
      "name": "ACDigest, Gélule",
      "presentation": "Blister de 30",
      "manufacturer": "ND",
      "composition": "Argile charbon végétal",
      "price": "59.00",
      "nature": "Complément alimentaire",
      "indication": "Lourdeur et ballonement",
      "id": 12
    },
    {
      "name": "ACEPRIL 8 MG, Comprimé",
      "presentation": "Boîte de 28",
      "manufacturer": "GENPHARMA",
      "composition": "Périndopril",
      "family": "Antihypertenseur de la family des inhibiteurs de l'enzyme de conversion",
      "codeATC": "C09AA04",
      "price": "196.00",
      "hospitalPrice": "122.50",
      "refund": true,
      "baseOfRefund": "196.00",
      "nature": "Médicament",
      "id": 13
    },
    {
      "name": "ACEPRIL PLUS 4 MG, Comprimé",
      "presentation": "Boîte de 28",
      "manufacturer": "GENPHARMA",
      "composition": "Perindopril | Indapamide",
      "family": "Antihypertenseur de la family des inhibiteurs de l'enzyme de conversion associé à un diurétique",
      "codeATC": "C09BA04",
      "price": "118.00",
      "hospitalPrice": "73.70",
      "refund": true,
      "baseOfRefund": "118.00",
      "nature": "Médicament",
      "id": 14
    },
    {
      "name": "ACFOL 5 MG, Comprimé",
      "presentation": "Boite de 28",
      "manufacturer": "IBERMA",
      "composition": "Acide folique",
      "family": "Antianémique",
      "codeATC": "B03BB01",
      "price": "26.20",
      "hospitalPrice": "16.30",
      "nature": "Médicament",
      "indication": "L'acide folique est utilisé dans la prise en charge:\n- des anémies macrocytaires par carence en acide folique,\n- des anomalies de la fermeture du tube neural,\n- et des carences en folates.",
      "id": 15
    },
    {
      "name": "ACCUPRIL 5 MG, Comprimé sécable",
      "presentation": "Boîte de 28",
      "princeps :": true,
      "manufacturer": "PFIZER MAROC",
      "composition": "Quinapril",
      "family": "Antihypertenseur de la family des inhibiteurs de l'enzyme de conversion  de l'angiotensine",
      "codeATC": "C09AA06",
      "price": "41.70",
      "hospitalPrice": "26.10",
      "refund": true,
      "baseOfRefund": "41.70",
      "nature": "Médicament",
      "id": 16
    },
    {
      "name": "ACIDAC 150 MG, Comprimé",
      "presentation": "Boîte de 30",
      "manufacturer": "GENPHARMA",
      "composition": "Ranitidine",
      "family": "Antagoniste des récepteurs H2 à l'histamine",
      "codeATC": "A02BA02",
      "price": "60.00",
      "hospitalPrice": "37.40",
      "nature": "Médicament",
      "id": 17
    },
    {
      "name": "ACIDAC 150 MG, Comprimé",
      "presentation": "Boîte de 60",
      "manufacturer": "GENPHARMA",
      "composition": "Ranitidine",
      "family": "Antagoniste des récepteurs H2 à l'histamine",
      "codeATC": "A02BA02",
      "price": "90.00",
      "hospitalPrice": "56.10",
      "nature": "Médicament",
      "id": 18
    },
    {
      "name": "ACIDAC 300 MG, Comprimé",
      "presentation": "Boîte de 14",
      "manufacturer": "GENPHARMA",
      "composition": "Ranitidine",
      "family": "Antagoniste des récepteurs H2 à l'histamine",
      "codeATC": "A02BA02",
      "price": "60.00",
      "hospitalPrice": "37.40",
      "nature": "Médicament",
      "id": 19
    },
    {
      "name": "ACIDAC 300 MG, Comprimé",
      "presentation": "Boîte de 30",
      "manufacturer": "GENPHARMA",
      "composition": "Ranitidine",
      "family": "Antagoniste des récepteurs H2 à l'histamine",
      "codeATC": "A02BA02",
      "price": "90.00",
      "hospitalPrice": "56.10",
      "nature": "Médicament",
      "id": 20
    },
    {
      "name": "ACIDE EM, Soluté concentré pour hémodialyse",
      "presentation": "Bidon de 5 litres",
      "princeps :": true,
      "manufacturer": "ERGO MAROC",
      "composition": "Chlorure de sodium",
      "family": "Hémodialyse",
      "codeATC": "B05ZA",
      "price": "78.40",
      "hospitalPrice": "49.00",
      "refund": true,
      "baseOfRefund": "71.70",
      "nature": "Médicament",
      "id": 21
    },
    {
      "name": "ACIDE ALENDRONIQUE NORMON 70 MG, Comprimé",
      "presentation": "Boite de 4",
      "manufacturer": "IBERMA",
      "composition": "Acide alendronique",
      "family": "Régulateur du métabolisme osseux, bisphosphonate",
      "codeATC": "M05BA04",
      "price": "176.00",
      "hospitalPrice": "109.70",
      "baseOfRefund": "176.00",
      "nature": "Médicament",
      "id": 22
    },
    {
      "name": "ACIDE EM, Soluté concentré pour hémodialyse",
      "presentation": "Bidon de 10 litres",
      "princeps :": true,
      "manufacturer": "ERGO MAROC",
      "composition": "Chlorure de sodium",
      "family": "Hémodialyse",
      "codeATC": "B05ZA",
      "price": "144.00",
      "hospitalPrice": "90.00",
      "refund": true,
      "baseOfRefund": "108.80",
      "nature": "Médicament",
      "id": 23
    },
    {
      "name": "ACIDE ZOLEDRONIQUE COOPER 4 MG, Injectable",
      "presentation": "LYOPHILISAT ET SOLVANT POUR PERFUSION IV1 BOITE 1 FLACON DE LYOPHILISAT DE 10 ML ET AMPOULE DE SOLVANT DE 5 ML",
      "manufacturer": "COOPER PHARMA",
      "composition": "Acide Zolédronique",
      "family": "Régulateur du métabolisme osseux, bisphosphonate",
      "codeATC": "M05BA08",
      "price": "1451.00",
      "refund": true,
      "baseOfRefund": "1451.00",
      "nature": "Médicament",
      "indication": "Les indications thérapeutiques de la spécialité pharmaceutique ACIDE ZOLEDRONIQUE COOPER 4 mg, seront limitées à :\n- Prévention des complications osseuses (fractures pathologiques, compression\nmédullaire, irradiation ou chirurgie osseuse, hypercalcémie induite par des tumeurs) chez des patients adultes atteints de pathologie maligne à un stade\navancé avec atteinte osseuse.\n- Traitement de l’hypercalcémie induite par des tumeurs (TIH) chez des patients\nadultes.",
      "id": 24
    },
    {
      "name": "ACEPRIL 4 MG, Comprimé",
      "presentation": "Boîte de 28",
      "manufacturer": "GENPHARMA",
      "composition": "Périndopril",
      "family": "Antihypertenseur de la family des inhibiteurs de l'enzyme de conversion",
      "codeATC": "C09AA04",
      "price": "98.00",
      "hospitalPrice": "61.20",
      "refund": true,
      "baseOfRefund": "98.00",
      "nature": "Médicament",
      "id": 25
    },
    {
      "name": "ACLASTA 5 MG / 100 ML , Solution pour perfusion",
      "presentation": "Flacon de 100 ml",
      "princeps :": true,
      "manufacturer": "NOVARTIS PHARMA MAROC",
      "composition": "Acide Zolédronique",
      "family": "Régulateur du métabolisme osseux, bisphosphonate",
      "codeATC": "M05BA08",
      "price": "3999.00",
      "hospitalPrice": "3665.00",
      "refund": true,
      "baseOfRefund": "3999.00",
      "nature": "Médicament",
      "id": 26
    },
    {
      "name": "ACEPRIL 2 MG, Comprimé",
      "presentation": "Boîte de 28",
      "manufacturer": "GENPHARMA",
      "composition": "Périndopril",
      "family": "Antihypertenseur de la family des inhibiteurs de l'enzyme de conversion",
      "codeATC": "C09AA04",
      "price": "44.00",
      "hospitalPrice": "27.50",
      "refund": true,
      "baseOfRefund": "44.00",
      "nature": "Médicament",
      "id": 27
    }]

    this.items = this.items.concat(this.allItems.slice(0, 10));
  }

  getItems() {
  if (this.myInput === "") {
    this.page = 1;
  this.items = [];
    this.items = this.items.concat(this.allItems.slice(0, 10));
  console.log('AAA');
  } else {
    this.items = this.allItems.filter((item) => {
         return item.name.toLowerCase().includes(this.myInput.toLowerCase());
    });
  console.log('BBB');
  }
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.items = this.items.concat(this.allItems.slice(this.page * this.itemsToShow, (this.page + 1) * this.itemsToShow));
      this.page++;
      infiniteScroll.complete();
    }, 500);
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
